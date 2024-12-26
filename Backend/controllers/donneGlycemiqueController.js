import { ajouterDonneGlycemique, afficherDonneesGlycemiques, afficherDonneGlycemique, modifierDonneGlycemique, effacerDonneGlycemique } from '../models/donneGlycemiqueModel.js';

export const ajouterDonneGlycemiqueController = async (req, res) => {
  const donneGlycemiqueData = req.body;
  const result = await ajouterDonneGlycemique(donneGlycemiqueData);
  res.json(result);
};

export const afficherDonneesGlycemiquesController = async (req, res) => {
  const { idPatient } = req.params;
  const result = await afficherDonneesGlycemiques(idPatient);
  res.json(result);
};

export const afficherDonneGlycemiqueController = async (req, res) => {
  const { id } = req.params;
  const result = await afficherDonneGlycemique(id);
  res.json(result);
};

export const modifierDonneGlycemiqueController = async (req, res) => {
  const { id } = req.params;
  const donneGlycemiqueData = req.body;
  const result = await modifierDonneGlycemique(id, donneGlycemiqueData);
  res.json(result);
};

export const effacerDonneGlycemiqueController = async (req, res) => {
  const { id } = req.params;
  const result = await effacerDonneGlycemique(id);
  res.json(result);
};