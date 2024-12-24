import express from 'express';

import { getMedecins, getMedecinById, createMedecin, updateMedecin, deleteMedecin } from "../controllers/medecinControllers.js";

const router = express.Router();

// Route to get all doctors
router.get('/', getMedecins);

// Route to get a specific doctor by ID
router.get('/:id', getMedecinById);

// Route to add a new doctor
router.post('/', createMedecin);

// Route to update an existing doctor
router.put('/:id', updateMedecin);

// Route to delete a doctor
router.delete('/:id', deleteMedecin);

export default router;