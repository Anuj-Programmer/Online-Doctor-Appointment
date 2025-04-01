const express = require('express');
const {
    applyDoctor,
    getAllDoctors,
    getDoctorById,
    updateDoctor,
    changeDoctorStatus
} = require('../controllers/doctorCtrl');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Apply for doctor account || POST
router.post('/apply', authMiddleware, applyDoctor);

// Get all doctors || GET
router.get('/get-all-doctors', authMiddleware, getAllDoctors);

// Get doctor by ID || GET
router.get('/:id', authMiddleware, getDoctorById);

// Update doctor profile || PUT
router.put('/update-profile', authMiddleware, updateDoctor);

// Change doctor status (admin only) || PUT
router.post('/change-status', authMiddleware, changeDoctorStatus);

module.exports = router; 