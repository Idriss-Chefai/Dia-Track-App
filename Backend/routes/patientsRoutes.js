import express from 'express';
import { getPatients, getPatientById, createPatient, updatePatient, deletePatient, countPatients } from "../controllers/patientsController.js";

const router = express.Router();

// Route to get all patients
router.get('/', getPatients);

// Route to count the number of patients
router.get('/count', countPatients);

// Route to get a specific patient by ID
router.get('/:id', getPatientById);

// Route to add a new patient
router.post('/', createPatient);

// Route to update an existing patient
router.put('/:id', updatePatient);

// Route to delete a patient
router.delete('/:id', deletePatient);



export default router;