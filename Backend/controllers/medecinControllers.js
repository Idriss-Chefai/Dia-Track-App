// controllers/medecinsController.js
import { afficherMedecins, afficherMedecin, ajoutMedecin, modifierMedecin, effacerMedecin } from '../models/medecinModels.js';

export const getMedecins = async (req, res) => {
  const result = await afficherMedecins();
  res.json(result);
};

export const getMedecinById = async (req, res) => {
  const { id } = req.params;
  const result = await afficherMedecin(id);
  res.json(result);
};

export const createMedecin = async (req, res) => {
  const { id_user, specialite } = req.body;
  const result = await ajoutMedecin(id_user, specialite);
  res.json(result);
};

export const updateMedecin = async (req, res) => {
  const { id } = req.params;
  const { id_user, specialite } = req.body;
  const result = await modifierMedecin(id, id_user, specialite);
  res.json(result);
};

export const deleteMedecin = async (req, res) => {
  const { id } = req.params;
  const result = await effacerMedecin(id);
  res.json(result);
};