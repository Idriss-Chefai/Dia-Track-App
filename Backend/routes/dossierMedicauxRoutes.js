import express from 'express';
import { getDossiersMedicaux, getDossierMedicalById, createDossierMedical, updateDossierMedical, deleteDossierMedical } from "../controllers/dossierMedicauxController.js";

const router = express.Router();

// Route to get all medical records
router.get('/', getDossiersMedicaux);

// Route to get a specific medical record by ID
router.get('/:id', getDossierMedicalById);

// Route to add a new medical record
router.post('/', createDossierMedical);

// Route to update an existing medical record
router.put('/:id', updateDossierMedical);

// Route to delete a medical record
router.delete('/:id', deleteDossierMedical);

export default router;