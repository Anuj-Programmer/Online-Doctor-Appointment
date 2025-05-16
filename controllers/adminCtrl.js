const userModel = require("../models/userModels")
const doctorModel = require("../models/doctorModel")
const appointmentModel = require("../models/appointmentModel")
const User = require("../models/userModels")

const getAllAppointments = async (req, res) => {
    try {
        const appointments = await appointmentModel.find({})
            .populate('doctorId')
            .populate('userId')
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            message: 'All appointments fetched successfully',
            data: appointments
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching appointments',
            error: error.message
        });
    }
};

const getAllApprovedDoctor = async (req, res) => {
    try {
        const doctors = await doctorModel.find({ status: 'approved' })
            .populate('userId')
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            message: 'All approved doctors fetched successfully',
            data: doctors
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching approved doctors',
            error: error.message
        });
    }
};

const getAllPendingDoctor = async (req, res) => {
    try {
        const doctors = await doctorModel.find({ status: 'pending' })
            .populate('userId')
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            message: 'All pending doctors fetched successfully',
            data: doctors
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching pending doctors',
            error: error.message
        });
    }
};

const getAllPatientList = async (req, res) => {
    try {
        // Find users who have booked appointments
        const appointments = await appointmentModel.find({})
            .populate('userId');

        // Extract unique userIds from appointments
        const userIds = [...new Set(appointments.map(app => app.userId?._id).filter(id => id))];

        // Fetch user details for these userIds
        const patients = await userModel.find({ _id: { $in: userIds } })
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            message: 'All patients fetched successfully',
            data: patients
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching patients',
            error: error.message
        });
    }
};

const deletePatient = async (req, res) => {
    try {
        const patientId = req.params.id;
        const deletedPatient = await userModel.findByIdAndDelete(patientId);
        if (!deletedPatient) {
            return res.status(404).json({
                success: false,
                message: 'Patient not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Patient deleted successfully',
            data: deletedPatient
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting patient',
            error: error.message
        });
    }
};

const deleteDoctor = async (req, res) => {
    try {
        const doctorId = req.params.id;
        
        // First find the doctor to get their userId
        const doctor = await doctorModel.findById(doctorId);
        if (!doctor) {
            return res.status(404).json({
                success: false,
                message: 'Doctor not found'
            });
        }

        // Store the userId before deleting the doctor
        const userId = doctor.userId;

        // Delete the doctor profile
        const deletedDoctor = await doctorModel.findByIdAndDelete(doctorId);
        
        // Delete the associated user account
        const deletedUser = await userModel.findByIdAndDelete(userId);
        
        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: 'Associated user account not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Doctor and associated user account deleted successfully',
            data: {
                doctor: deletedDoctor,
                user: deletedUser
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting doctor',
            error: error.message
        });
    }
};

const getAllDoctorsList = async (req, res) => {
    try {
        const doctors = await doctorModel.find({})
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

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({
            isDoctor: false,
            isAdmin: false
        }).select('-password'); // Exclude password from the response

        res.status(200).json({
            success: true,
            data: users
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error in fetching users',
            error: error.message
        });
    }
}

module.exports = {
    getAllAppointments,
    getAllApprovedDoctor,
    getAllPendingDoctor,
    getAllPatientList,
    deletePatient,
    deleteDoctor,
    getAllDoctorsList,
    getAllUsers
};
