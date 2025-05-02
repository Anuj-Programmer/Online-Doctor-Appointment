const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middlewares/authMiddleware');
const {
    createBooking,
    getMyBookings,
    getDoctorAppointments,
    updateBookingStatus,
    deleteBooking
} = require('../controllers/bookingCtrl');

// Create a new booking
router.post('/create', authMiddleware, createBooking);

// Get patient's bookings
router.get('/my-bookings', authMiddleware, getMyBookings);

// Get doctor's appointments
router.get('/doctor-appointments', authMiddleware, getDoctorAppointments);

// Update booking status
router.put('/update-status/:id', authMiddleware, updateBookingStatus);

// Delete booking
router.delete('/delete/:id', authMiddleware, deleteBooking);

module.exports = router; 