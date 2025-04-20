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
                },
                createdAt: new Date()
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
            },
            createdAt: new Date()
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

const searchDoctor = async (req, res) => {
    try {
        const { name, location, specialization } = req.query;
        console.log(name, location, specialization);
        
        // Initialize the filter object
        let filter = {};

        // If 'name' is provided, search by first and last name
        if (name) {
            const nameParts = name.split(' ');
            if (nameParts.length === 1) {
                // If only one name is provided, search by firstName or lastName
                filter.$or = [
                    { firstName: { $regex: nameParts[0], $options: 'i' } },
                    { lastName: { $regex: nameParts[0], $options: 'i' } }
                ];
            } else if (nameParts.length === 2) {
                // If both firstName and lastName are provided, search by both fields
                filter.firstName = { $regex: nameParts[0], $options: 'i' };
                filter.lastName = { $regex: nameParts[1], $options: 'i' };
            }
        }

        // If 'location' is provided, search by address (location)
        if (location) {
            filter.address = { $regex: location, $options: 'i' };
        }

        // If 'specialization' is provided, search by specialization
        if (specialization) {
            filter.specialization = { $regex: specialization, $options: 'i' };
        }

        // Search for doctors using the filter
        const doctors = await doctorModel.find(filter);

        res.status(200).send({
            success: true,
            message: "Doctors found",
            data: doctors
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in searching doctors",
            error
        });
    }
};
  

const getUserAppointments = async (req, res) => {
    try {
        const user = await userModel.findById(req.body.userId);
        const appointments = await appointmentModel.find({ userId: user._id });
        res.status(200).send({
            success: true,
            message: "Appointments found",
            data: appointments
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in getting appointments",
            error
        });
    }
}      

const rescheduleAppointment = async (req, res) => {
    try {
        const { appointmentId, newDate, timeSlot } = req.body;

        // Validate input data
        if (!appointmentId || !newDate || !timeSlot) {
            return res.status(400).send({
                message: "Missing required fields",
                success: false
            });
        }

        // Fetch the appointment
        const appointment = await appointmentModel.findById(appointmentId);
        if (!appointment) {
            return res.status(404).send({
                message: "Appointment not found",
                success: false
            });
        }

        // Update the appointment with the new date and time slot
        appointment.date = newDate;
        appointment.timeSlot = timeSlot;
        appointment.status = "pending";
        await appointment.save();

        // Notify user
        const notifyUser = await userModel.findById(appointment.userId);
        if (!notifyUser) {
            return res.status(404).send({
                message: "User not found for notification",
                success: false
            });
        }
        notifyUser.notification.push({
            type: "appointment-rescheduled",
            message: `Your appointment has been rescheduled to ${newDate} at ${timeSlot.startTime} waiting for doctor approval`,
            success: true,
            data: {
                appointmentId: appointment._id,
                patientName: notifyUser.name,
                date: newDate,
                time: timeSlot.startTime
            },
            createdAt: new Date()
        });
        await userModel.findByIdAndUpdate(appointment.userId, { notification: notifyUser.notification });

        // Notify doctor
        // const notifyDoctor = await userModel.findById(doctor.userId);
        // if (!notifyDoctor) {
        //     return res.status(404).send({
        //         message: "Doctor not found for notification",
        //         success: false
        //     });
        // }
        // notifyDoctor.notification.push({
        //     type: "appointment-rescheduled",
        //     message: `Patient ${notifyUser.name} has rescheduled appointment to ${newDate} at ${timeSlot.startTime} waiting for your approval`,
        //     success: true,
        //     createdAt: new Date()
        // });
        // await userModel.findByIdAndUpdate(doctor.userId, { notification: notifyDoctor.notification });

        // Send success response
        res.status(200).send({
            message: "Appointment rescheduled successfully, waiting for doctor approval",
            success: true,
            data: {
                appointmentId: appointment._id,
                patientName: notifyUser.name,
                date: newDate,
                time: timeSlot.startTime
            },
            createdAt: new Date()
        });

    } catch (error) {
        console.log(error);
        // Send generic error response (don't expose internal error details in production)
        res.status(500).send({
            message: "Error in rescheduling appointment",
            success: false
        });
    }
}



const cancelAppointment = async (req, res) => {
    try {
        // console.log("Appointment cancelled successfully");
        const { appointmentId } = req.body;
        const appointment = await appointmentModel.findById(appointmentId);
        if (!appointment) { 
            return res.status(404).send({
                message: "Appointment not found",
                success: false
            });
        }
        appointment.status = "cancelled";
        await appointment.save(); 

        res.status(200).send({
            message: "Appointment cancelled successfully",
            success: true
        });
        
        const notifyUser = await userModel.findById(appointment.userId);
        notifyUser.notification.push({
            type: "appointment-cancelled",
            message: "Your appointment has been cancelled",
            success: true,
            createdAt: new Date()
        });
        await userModel.findByIdAndUpdate(appointment.userId, { notification: notifyUser.notification });

        // const doctorNotify = await userModel.findById(appointment.doctorId);
        // doctorNotify.notification.push({
        //     type: "appointment-cancelled",
        //     message: "Your appointment has been cancelled by the patient",
        //     success: true,
        //     createdAt: new Date()
        // });
        // await userModel.findByIdAndUpdate(appointment.doctorId, { notification: doctorNotify.notification });

        
    } catch (error) {
        console.log(error); 
        res.status(500).send({
            message: "Error in cancelling appointment",
            success: false
        });
    }
}


const getBookedSlots = async (req, res) => {
    try {
        const { doctorId, date } = req.body;
        const doctor = await doctorModel.findById(doctorId);
        if (!doctor) {
            return res.status(404).send({
                message: "Doctor not found",
                success: false
            });
        }
        const appointments = await appointmentModel.find({ doctorId, date, status: "approved" });   
        const bookedSlots = appointments.map(appointment => appointment.timeSlot);
        res.status(200).send({
            success: true,
            message: "Booked slots found",
            data: bookedSlots
        });
    } catch (error) {
        console.log(error); 
        res.status(500).send({
            message: "Error in getting booked slots",
            success: false
        });
    }
}

// const getAppointment = async (req, res) => {
//     try {
//         const { userId } = req.body;
//         const appointment = await appointmentModel.find({ userId });
//         res.status(200).send({
//             success: true,
//             message: "Appointment data found",
//             data: appointment
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({
//             message: "Error in getting appointment data",
//             success: false
//         });
//     }   
// }

// const getAppointmentData = async (req, res) => {
//     try {
//         const { userId } = req.body;
//         const appointment = await appointmentModel.find({ userId });
//         res.status(200).send({
//             success: true,
//             message: "Appointment data found",
//             data: appointment
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({
//             message: "Error in getting appointment data",
//             success: false
//         });
//     }
// }




module.exports = { loginController, registerController, authController, markAllNotifications, deleteAllNotifications, bookAppointment, searchDoctor, getUserAppointments, rescheduleAppointment, cancelAppointment, getBookedSlots }