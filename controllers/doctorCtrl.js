const Doctor = require('../models/doctorModel');

// Apply for doctor account
const applyDoctor = async (req, res) => {
    try {
        // Check if doctor already exists with same email or phone
        const existingDoctor = await Doctor.findOne({
            $or: [
                { email: req.body.email },
                { phone: req.body.phone }
            ]
        });

        if (existingDoctor) {
            return res.status(400).json({
                success: false,
                message: 'Doctor already exists with this email or phone number'
            });
        }

        // If doctor doesn't exist, create new doctor
        const newDoctor = new Doctor({
            ...req.body,
            userId: req.body.userId,
            // Make sure timings is passed as an array
            timings: Array.isArray(req.body.timings) ? req.body.timings : [req.body.timings]
        });

        await newDoctor.save();
        
        res.status(201).json({
            success: true,
            message: 'Doctor application submitted successfully',
            data: newDoctor
        });
    } catch (error) {
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
        if (updateData.timings && !Array.isArray(updateData.timings)) {
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