const express = require('express');
const {
    applyDoctor,
    getAllDoctors,
    getPublicDoctors,
    getDoctorById,
    updateDoctor,
    changeDoctorStatus,
    getDoctorAppointments,
    updateAppointmentStatus,
    updateDoctorTimeSlot,
    getTimeSlots,
    updateTimeSlots
} = require('../controllers/doctorCtrl');
const authMiddleware = require('../middlewares/authMiddleware');
const { isAdmin } = require('../middlewares/authMiddleware');

const router = express.Router();

// Apply for doctor account || POST
router.post('/apply', authMiddleware, applyDoctor);

// Get all doctors || GET
router.get('/get-all-doctors', authMiddleware, getAllDoctors);

// Get public doctors (no auth) || GET
router.get('/public', getPublicDoctors);

// Get doctor by ID || GET
router.get('/:id', authMiddleware, getDoctorById);

// Update doctor profile || PUT
router.put('/update-profile', authMiddleware, updateDoctor);

// Change doctor status (admin only) || PUT
router.post('/change-status', authMiddleware, changeDoctorStatus);

// Get doctor appointments || GET
router.get('/get-doctor-appointments/:id', authMiddleware, getDoctorAppointments);

// Update appointment status || PUT
router.post('/update-appointment-status', authMiddleware, updateAppointmentStatus);

// Update Doctor Time Slot || PUT
router.put('/update-doctor-timeslot', updateDoctorTimeSlot)

// Time slots routes
router.get('/time-slots/:doctorId', authMiddleware, getTimeSlots);
router.put('/time-slots/:doctorId', authMiddleware, updateTimeSlots);

module.exports = router; 
