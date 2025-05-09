const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { getAllAppointments, getAllApprovedDoctor, getAllPendingDoctor, getAllPatientList, deletePatient, deleteDoctor, getAllDoctorsList } = require('../controllers/adminCtrl');

const router = express.Router();

router.get('/appointments', authMiddleware, getAllAppointments);
router.get('/doctors/approved', authMiddleware, getAllApprovedDoctor);
router.get('/doctors/pending', authMiddleware, getAllPendingDoctor);
router.get('/patients', authMiddleware, getAllPatientList);
router.delete('/doctors/:id', authMiddleware, deleteDoctor);
router.get('/doctors', authMiddleware, getAllDoctorsList);
router.delete('/patients/:id', authMiddleware, deletePatient);

module.exports = router; 
