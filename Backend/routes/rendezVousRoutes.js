import express from 'express';
import { getRendezVous, getRendezVousById, createRendezVous, updateRendezVous, deleteRendezVous , countRendezVous } from "../controllers/rendezVousController.js";

const router = express.Router();

// Route to get all appointments
router.get('/', getRendezVous);

// Route to count the number of rendez-vous
router.get('/count', countRendezVous);

// Route to get a specific appointment by ID
router.get('/:id', getRendezVousById);

// Route to add a new appointment
router.post('/', createRendezVous);

// Route to update an existing appointment
router.put('/:id', updateRendezVous);

// Route to delete an appointment
router.delete('/:id', deleteRendezVous);

export default router;