const express = require('express');
const {registerController, loginController, authController, markAllNotifications, deleteAllNotifications, bookAppointment, searchDoctor, getUserAppointments, rescheduleAppointment } = require('../controllers/userCtrl');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Define the login route || POST
router.post('/login', loginController);

// Define the registration route || POST
router.post('/register', registerController);

//Auth || POST
router.post('/getUserData', authMiddleware, authController)

//Mark All Notifications || POST
router.post('/mark-all-notifications', authMiddleware, markAllNotifications);

//Delete All Notifications || POST
router.post('/delete-all-notifications', authMiddleware, deleteAllNotifications);

//Booking || POST
router.post('/book-appointment', authMiddleware, bookAppointment);

//Search Doctor || GET
router.get('/search-doctor', searchDoctor);

//Get User Appointments || POST
router.post('/get-user-appointments', authMiddleware, getUserAppointments);

//Reschedule Appointment || POST
router.post('/reschedule-appointment', authMiddleware, rescheduleAppointment);

module.exports = router;
