const Doctor = require('../models/doctorModel');
const User = require('../models/userModels');
const Appointment = require('../models/appointmentModel');

// Apply for doctor account
/*
const applyDoctor = async (req, res) => {
    try {
        // Check if doctor already exists with same phone number
        const existingDoctor = await Doctor.findOne({
            phoneNumber: req.body.phoneNumber
        });
         

        if (existingDoctor) {
            return res.status(400).json({
                success: false,
                message: 'Doctor already exists with this phone number'
            });
        }

        // Parse timeSlots if it's a string, otherwise use it as is
        let timeSlots;
        try {
            timeSlots = typeof req.body.timeSlots === 'string' 
                ? JSON.parse(req.body.timeSlots)
                : req.body.timeSlots;
        } catch (error) {
            console.log("TimeSlots parsing error:", error);
            timeSlots = [];
        }

        // Create new doctor
        const newDoctor = new Doctor({
            userId: req.body.userId,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address,
            specialization: req.body.specialization,
            experience: Number(req.body.experience),
            fee: Number(req.body.fee),
            timeSlots: timeSlots || [] // Provide default empty array if timeSlots is undefined
        });

        await newDoctor.save();

        // Find admin and update notifications
        const admin = await User.findOne({ isAdmin: true });
        console.log("user has registered");
        
        const notification = admin.notification || [];
        notification.push({
            type: "apply-doctor",
            message: `${newDoctor.firstName} ${newDoctor.lastName} has applied for doctor account`,
            onClickPath: "/admin/doctors",
            data: {
                doctorId: newDoctor._id,
                name: `${newDoctor.firstName} ${newDoctor.lastName}`
            },
            createdAt: new Date()
        });

        await User.findByIdAndUpdate(req.body.userId, { notification });

        // Send single response
        res.status(201).json({
            success: true,
            message: 'Doctor application submitted successfully',
            data: newDoctor
        });
    } catch (error) {
        console.error('Apply doctor error:', error);
        res.status(500).json({
            success: false,
            message: 'Error in applying for doctor',
            error: error.message
        });
    }
};
*/

// Apply for doctor account
const applyDoctor = async (req, res) => {
    try {
        // Check if doctor already exists with the same phone number
        const existingDoctor = await Doctor.findOne({
            phoneNumber: req.body.phoneNumber
        });

        if (existingDoctor) {
            return res.status(400).json({
                success: false,
                message: 'Doctor already exists with this phone number'
            });
        }

        // Parse timeSlots if it's a string, otherwise use it as is
        let timeSlots;
        try {   
            timeSlots = typeof req.body.timeSlots === 'string' 
                ? JSON.parse(req.body.timeSlots)
                : req.body.timeSlots;
        } catch (error) {
            console.log("TimeSlots parsing error:", error);
            timeSlots = [];
        }

        // Create new doctor
        const newDoctor = new Doctor({
            userId: req.body.userId,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address,
            specialization: req.body.specialization,
            experience: Number(req.body.experience),
            fee: Number(req.body.fee),
            timeSlots: timeSlots || [] 
        });

        await newDoctor.save();

        // Find admin and update notifications
        const admin = await User.findOne({ isAdmin: true });
        
        const updatedNotification = admin.notification || [];
        updatedNotification.push({
            type: "apply-doctor",
            message: `${newDoctor.firstName} ${newDoctor.lastName} has applied for doctor account`,
            onClickPath: "/admin/doctors",
            data: {
                doctorId: newDoctor._id,
                name: `${newDoctor.firstName} ${newDoctor.lastName}`
            },
            createdAt: new Date()
        });

        // Update admin's notifications
        await User.findByIdAndUpdate(
            admin._id, 
            { notification: updatedNotification },
            { new: true }
        );

        // Add notification to the user who applied
        const user = await User.findById(req.body.userId);
        const userNotification = user.notification || [];
        userNotification.push({
            type: "doctor-application",
            message: "Your doctor application has been submitted and is pending approval",
            onClickPath: "/doctor/profile",
            createdAt: new Date()
        });

        // Update user's notifications
        await User.findByIdAndUpdate(
            req.body.userId,
            { notification: userNotification },
            { new: true }
        );

        // Send response
        res.status(201).json({
            success: true,
            message: 'Doctor application submitted successfully',
            data: newDoctor
        });
    } catch (error) {
        console.error('Apply doctor error:', error);
        res.status(500).json({
            success: false,
            message: 'Error in applying for doctor',
            error: error.message
        });
    }
};


// Get all doctors
const getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find({})
            .populate('userId')
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            message: 'Doctors data fetched successfully',
            data: doctors
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error in getting doctors data',
            error: error.message
        });
    }
};

// Get doctor by ID
const getDoctorById = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id)
            .populate('userId');

        if (!doctor) {
            return res.status(404).json({
                success: false,
                message: 'Doctor not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Doctor info fetched successfully',
            data: doctor
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error in getting doctor info',
            error: error.message
        });
    }
};

// Update doctor profile
const updateDoctor = async (req, res) => {
    try {
        const updateData = { ...req.body };
        // Ensure timings is an array if provided
        if (updateData.timeSlots && !Array.isArray(updateData.timeSlots)) {
            return res.status(400).json({
                success: false,
                message: 'Timings must be an array of strings'
            });
        }

        const doctor = await Doctor.findOneAndUpdate(
            { userId: req.user._id },
            updateData,
            { new: true }
        );

        if (!doctor) {
            return res.status(404).json({
                success: false,
                message: 'Doctor not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Doctor profile updated successfully',
            data: doctor
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error in updating doctor profile',
            error: error.message
        });
    }
};

// Change doctor account status
const changeDoctorStatus = async (req, res) => {
    try {
        const { doctorId, status } = req.body;
        
        // Update doctor status
        const doctor = await Doctor.findByIdAndUpdate(
            doctorId,
            { status },
            { new: true }
        );

        // Find the user associated with the doctor
        const user = await User.findById(doctor.userId);
        
        // Update user's isDoctor status based on approval/rejection
        user.isDoctor = status === 'approved';
        await user.save();

        // Add notification for the doctor
        const notification = {
            type: "doctor-account-status",
            message: `Your doctor account has been ${status}`,
            onClickPath: "/doctor/profile",
            createdAt: new Date()
        };

        user.notification.push(notification);
        await user.save();

        res.status(200).json({
            success: true,
            message: `Doctor status updated to ${status}`,
            data: doctor
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Error in changing doctor status',
            error
        });
    }
};

// Get all appointments for a doctor
const getDoctorAppointments = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id)
            .populate('userId');    

        if (!doctor) {
            return res.status(404).json({
                success: false,
                message: 'Doctor not found'
            });
        }           

        const appointments = await Appointment.find({ doctorId: doctor._id })
            .populate('userId')
            .populate('doctorId');

        res.status(200).json({
            success: true,
            message: 'Doctor appointments fetched successfully',
            data: appointments
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Error in getting doctor appointments',
            error
        });
    }
};

// Update appointment status
const updateAppointmentStatus = async (req, res) => {
    try {


        const { appointmentId, status } = req.body;     

        const appointment = await Appointment.findByIdAndUpdate(
            appointmentId,
            { status },
            { new: true }
        );              

        res.status(200).json({
            success: true,
            message: 'Appointment status updated successfully',
            data: appointment
        });

        const notifyUser = await User.findById(appointment.userId);
        notifyUser.notification.push({
            type: "appointment-status",
            message: `Your appointment has been ${status} by the doctor`,
            onClickPath: "/doctor/appointments",
            createdAt: new Date()
        }); 

        await notifyUser.save();

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Error in updating appointment status',
            error
        });
    }
};  

const updateDoctorTimeSlot = async (req, res) => {
    try {
        const { doctorId } = req.body;
        let timeSlots = req.body.timeSlots;

        // Parse if timeSlots is a string
        if (typeof timeSlots === 'string') {
            try {
                timeSlots = JSON.parse(timeSlots);
            } catch (error) {
                return res.status(400).json({
                    success: false,
                    message: 'Invalid timeSlots JSON format',
                });
            }
        }

        // Validate timeSlots is an array
        if (!Array.isArray(timeSlots)) {
            return res.status(400).json({
                success: false,
                message: 'timeSlots must be an array'
            });
        }

        // Validate each timeSlot object
        for (const slot of timeSlots) {
            if (
                typeof slot.startTime !== 'string' ||
                typeof slot.endTime !== 'string'
            ) {
                return res.status(400).json({
                    success: false,
                    message: 'Each timeSlot must have startTime and endTime as strings'
                });
            }
        }

        // Update doctor's timeSlots
        const updatedDoctor = await Doctor.findByIdAndUpdate(
            doctorId,
            { timeSlots },
            { new: true }
        );

        if (!updatedDoctor) {
            return res.status(404).json({
                success: false,
                message: 'Doctor not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Doctor timeSlots updated successfully',
            data: updatedDoctor
        });
    } catch (error) {
        console.error('Error updating doctor timeSlots:', error);
        res.status(500).json({
            success: false,
            message: 'Error updating doctor timeSlots',
            error: error.message
        });
    }
};

const getTimeSlots = async (req, res) => {
    try {
        const doctor = await Doctor.findOne({ userId: req.params.doctorId });
        
        if (!doctor) {
            return res.status(404).json({
                success: false,
                message: 'Doctor not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Time slots fetched successfully',
            data: doctor.timeSlots || []
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error in getting time slots',
            error: error.message
        });
    }
};

const updateTimeSlots = async (req, res) => {
    try {
        let timeSlots = req.body.timeSlots;

        // Parse if timeSlots is a string
        if (typeof timeSlots === 'string') {
            try {
                timeSlots = JSON.parse(timeSlots);
            } catch (error) {
                return res.status(400).json({
                    success: false,
                    message: 'Invalid timeSlots JSON format',
                });
            }
        }

        // Validate timeSlots is an array
        if (!Array.isArray(timeSlots)) {
            return res.status(400).json({
                success: false,
                message: 'timeSlots must be an array'
            });
        }

        // Validate each timeSlot object
        for (const slot of timeSlots) {
            if (
                typeof slot.startTime !== 'string' ||
                typeof slot.endTime !== 'string'
            ) {
                return res.status(400).json({
                    success: false,
                    message: 'Each timeSlot must have startTime and endTime as strings'
                });
            }
        }

        const doctor = await Doctor.findOne({ userId: req.params.doctorId });
        
        if (!doctor) {
            return res.status(404).json({
                success: false,
                message: 'Doctor not found'
            });
        }

        // Update doctor's timeSlots
        const updatedDoctor = await Doctor.findOneAndUpdate(
            { userId: req.params.doctorId },
            { timeSlots },
            { new: true }
        );

        res.status(200).json({
            success: true,
            message: 'Time slots updated successfully',
            data: updatedDoctor.timeSlots
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error in updating time slots',
            error: error.message
        });
    }
};

module.exports = {
    applyDoctor,
    getAllDoctors,
    getDoctorById,
    updateDoctor,
    changeDoctorStatus,
    getDoctorAppointments,
    updateAppointmentStatus,
    updateDoctorTimeSlot,
    getTimeSlots,
    updateTimeSlots
};
