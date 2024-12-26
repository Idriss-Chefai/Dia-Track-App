import express from 'express';
import { 
  ajouterDonneGlycemiqueController, 
  afficherDonneesGlycemiquesController, 
  afficherDonneGlycemiqueController, 
  modifierDonneGlycemiqueController, 
  effacerDonneGlycemiqueController 
} from '../controllers/donneGlycemiqueController.js';

const router = express.Router();

// Route to add a new glucose reading
router.post('/', ajouterDonneGlycemiqueController);

// Route to get all glucose readings for a specific patient
router.get('/patient/:idPatient', afficherDonneesGlycemiquesController);

// Route to get a specific glucose reading by ID
router.get('/:id', afficherDonneGlycemiqueController);

// Route to update a specific glucose reading by ID
router.put('/:id', modifierDonneGlycemiqueController);

// Route to delete a specific glucose reading by ID
router.delete('/:id', effacerDonneGlycemiqueController);

export default router;