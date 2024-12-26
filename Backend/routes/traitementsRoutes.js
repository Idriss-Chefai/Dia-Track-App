import express from 'express';
import { getTraitements, getTraitementById, createTraitement, updateTraitement, deleteTraitement } from "../controllers/traitementsController.js";

const router = express.Router();

// Route to get all treatments
router.get('/', getTraitements);

// Route to get a specific treatment by ID
router.get('/:id', getTraitementById);

// Route to add a new treatment
router.post('/', createTraitement);

// Route to update an existing treatment
router.put('/:id', updateTraitement);

// Route to delete a treatment
router.delete('/:id', deleteTraitement);

export default router;