const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { getAllAppointments, getAllApprovedDoctor, getAllPendingDoctor, getAllPatientList, deletePatient, deleteDoctor } = require('../controllers/adminCtrl');

const router = express.Router();

router.get('/appointments', getAllAppointments);
router.get('/doctors/approved', getAllApprovedDoctor);
router.get('/doctors/pending', getAllPendingDoctor);
router.get('/patients', getAllPatientList);
router.delete('delete-patient', deletePatient);
router.delete('delete-doctor', deleteDoctor);



module.exports = router; 
