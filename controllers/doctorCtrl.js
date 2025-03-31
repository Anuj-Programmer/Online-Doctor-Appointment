const Doctor = require('../models/doctorModel');
const User = require('../models/userModels');

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
        const doctor = await Doctor.findByIdAndUpdate(
            doctorId,
            { status },
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
            message: 'Doctor status updated successfully',
            data: doctor
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error in changing doctor status',
            error: error.message
        });
    }
};

module.exports = {
    applyDoctor,
    getAllDoctors,
    getDoctorById,
    updateDoctor,
    changeDoctorStatus
}; 