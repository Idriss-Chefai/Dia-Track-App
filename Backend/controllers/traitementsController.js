import { afficherTraitements, afficherTraitement, ajoutTraitement, modifierTraitement, effacerTraitement } from '../models/traitementModel.js';

export const getTraitements = async (req, res) => {
  const result = await afficherTraitements();
  res.json(result);
};

export const getTraitementById = async (req, res) => {
  const { id } = req.params;
  const result = await afficherTraitement(id);
  res.json(result);
};

export const createTraitement = async (req, res) => {
  const { id_dossier_medical, type_traitement, medicament, dosage } = req.body;
  const result = await ajoutTraitement(id_dossier_medical, type_traitement, medicament, dosage);
  res.json(result);
};

export const updateTraitement = async (req, res) => {
  const { id } = req.params;
  const { id_dossier_medical, type_traitement, medicament, dosage } = req.body;
  const result = await modifierTraitement(id, id_dossier_medical, type_traitement, medicament, dosage);
  res.json(result);
};

export const deleteTraitement = async (req, res) => {
  const { id } = req.params;
  const result = await effacerTraitement(id);
  res.json(result);
};