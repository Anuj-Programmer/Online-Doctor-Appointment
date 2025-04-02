const express = require('express');
const {registerController, loginController, authController, markAllNotifications, deleteAllNotifications, bookAppointment } = require('../controllers/userCtrl');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Define the login route || POST
router.post('/login', loginController);

// Define the registration route || POST
router.post('/register', registerController);

//Auth || POST
router.post('/getUserData', authMiddleware, authController)

router.post('/mark-all-notifications', authMiddleware, markAllNotifications);
router.post('/delete-all-notifications', authMiddleware, deleteAllNotifications);

//Booking || POST
router.post('/book-appointment', authMiddleware, bookAppointment);

module.exports = router;
