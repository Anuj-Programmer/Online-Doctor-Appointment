const userModel = require("../models/userModels")
const doctorModel = require("../models/doctorModel")
const appointmentModel = require("../models/appointmentModel")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registerController = async (req, res) => {
    try {
        const existingUser = await userModel.findOne({email:req.body.email})
        if (existingUser) {
            return res.status(200).send({message:"user already", success:false})
        }

        const password = req.body.password;
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        req.body.password = hashedPassword
        const newUser = new userModel(req.body);
        await newUser.save();
        res.status(201).send({message: "Register Succesfull", success: true})
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false, message: `Register Controller: ${error.message}`})
    }
}

const loginController = async (req, res) => {
    try {
        const user = await userModel.findOne({email:req.body.email})
        if (!user) {
            return res.status(200).send({message: "user not found", success:false})
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password)
        if (!isMatch) {
            return res.status(200).send({message: "Invalid email or password", success:false})
        }

        if (req.body.email === 'admin@gmail.com' && req.body.password === 'admin') {
            const token = jwt.sign({ id: user._id, isAdmin: true }, process.env.JWT_SECRET, { expiresIn: '1d' })
            return res.status(200).send({ 
                message: "Admin login successful", 
                success: 'admin', 
                token,
                data: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: true,
                    isDoctor: user.isDoctor,
                    seenNotication: user.seenNotication,
                    notification: user.notification
                }
            })
        } else {
            const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn: '1d'})
            res.status(200).send({
                message: "Login Successful", 
                success: 'user', 
                token,
                data: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: false,
                    isDoctor: user.isDoctor,
                    seenNotication: user.seenNotication,
                    notification: user.notification
                }
            })
        }

    } catch (error) {
        console.log(error);
        res.status(500).send({success:false, message: `Login Controller: ${error.message}`})
    }
}

const authController = async (req, res) => {
    try {
        const user = await userModel.findOne({_id:req.body.userId})
        if (!user) {
            return res.status(401).send({
                message: "User not found",
                success: false
            })
        }else {
            res.status(200).send({
                success:true,
                data: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    isDoctor: user.isDoctor,
                    seenNotication: user.seenNotication,
                    notification: user.notification
                }
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false, message:'auth error', error: error.message})
    }
};

const markAllNotifications = async (req, res) => {
    try {
        const user = await userModel.findOne({ _id: req.body.userId });
        const seenNotification = user.seenNotication;
        const notification = user.notification;
        
        seenNotification.push(...notification);
        user.notification = [];
        user.seenNotication = seenNotification;

        const updatedUser = await user.save();
        
        res.status(200).send({
            success: true,
            message: "All notifications marked as read",
            data: updatedUser,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Error in notification",
            success: false,
            error,
        });
    }
};

const deleteAllNotifications = async (req, res) => {
    try {
        const user = await userModel.findOne({ _id: req.body.userId });
        user.notification = [];
        user.seenNotication = [];
        
        const updatedUser = await user.save();
        
        res.status(200).send({
            success: true,
            message: "All notifications deleted",
            data: updatedUser,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Error in notification",
            success: false,
            error,
        });
    }
};

const bookAppointment = async (req, res) => {
    try {
        const { doctorId, date, timeSlot, fee } = req.body;

        // Validate required fields
        if (!doctorId || !date || !timeSlot || !fee) {
            return res.status(400).send({ 
                message: "Missing required fields", 
                success: false 
            });
        }

        // Get user information
        const user = await userModel.findById(req.body.userId);
        if (!user) {
            return res.status(404).send({ 
                message: "User not found", 
                success: false 
            });
        }

        // Check if the doctor exists   
        const doctor = await doctorModel.findById(doctorId);
        if (!doctor) {
            return res.status(404).send({ 
                message: "Doctor not found", 
                success: false 
            });
        }

        // Check if the time slot is available
        const isSlotAvailable = doctor.timeSlots.some(slot => 
            slot.startTime === timeSlot.startTime && 
            slot.endTime === timeSlot.endTime
        );
        if (!isSlotAvailable) {
            return res.status(400).send({ 
                message: "Time slot not available", 
                success: false 
            });
        }

        // Create a new appointment
        const appointment = new appointmentModel({
            doctorId,
            userId: req.body.userId,
            date,
            timeSlot,
            fee,
            doctorInfo: {
                firstName: doctor.firstName,
                lastName: doctor.lastName,
                specialization: doctor.specialization,
                experience: doctor.experience,
                address: doctor.address
            },
            userInfo: {
                name: user.name,
                email: user.email
            }
        }); 

        await appointment.save();

        // Send notification to the specific doctor
        const doctorUser = await userModel.findById(doctor.userId);
        if (doctorUser) {
            const notification = doctorUser.notification || [];
            notification.push({
                type: "new-appointment",
                message: `You have a new appointment with ${user.name} on ${date} at ${timeSlot.startTime}`,
                onClickPath: "/doctor/appointments",
                data: {
                    appointmentId: appointment._id,
                    patientName: user.name,
                    date: date,
                    time: timeSlot.startTime
                }
            });
            await userModel.findByIdAndUpdate(doctor.userId, { notification });
        }
        const userNotify = await userModel.findById(req.body.userId);
        userNotify.notification.push({
            type: "new-appointment",
            message: `You have a new appointment with ${doctor.firstName} ${doctor.lastName} on ${date} at ${timeSlot.startTime} pending approval`,
            onClickPath: "/user/appointments",
            data: {
                appointmentId: appointment._id,
                patientName: `${doctor.firstName} ${doctor.lastName}`,
                date: date,
                time: timeSlot.startTime
            }
        });
        await userModel.findByIdAndUpdate(req.body.userId, { notification: userNotify.notification });


        res.status(200).send({ 
            message: "Appointment booked successfully", 
            success: true,
            data: appointment 
        });
    } catch (error) {
        console.error('Booking error:', error);
        res.status(500).send({ 
            message: "Error in booking appointment", 
            success: false,
            error: error.message 
        });
    }
}

module.exports = { loginController, registerController, authController, markAllNotifications, deleteAllNotifications, bookAppointment }