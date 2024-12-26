import { afficherDossiersMedicaux, afficherDossierMedical, ajoutDossierMedical, modifierDossierMedical, effacerDossierMedical } from '../models/dossierMedicalModel.js';

export const getDossiersMedicaux = async (req, res) => {
  const result = await afficherDossiersMedicaux();
  res.json(result);
};

export const getDossierMedicalById = async (req, res) => {
  const { id } = req.params;
  const result = await afficherDossierMedical(id);
  res.json(result);
};

export const createDossierMedical = async (req, res) => {
  const { id_patient, id_medecin, type_diabete, poids, taille, mois_diagnostic, annee_diagnostic } = req.body;
  const result = await ajoutDossierMedical(id_patient, id_medecin, type_diabete, poids, taille, mois_diagnostic, annee_diagnostic);
  res.json(result);
};

export const updateDossierMedical = async (req, res) => {
  const { id } = req.params;
  const { id_patient, id_medecin, type_diabete, poids, taille, mois_diagnostic, annee_diagnostic } = req.body;
  const result = await modifierDossierMedical(id, id_patient, id_medecin, type_diabete, poids, taille, mois_diagnostic, annee_diagnostic);
  res.json(result);
};

export const deleteDossierMedical = async (req, res) => {
  const { id } = req.params;
  const result = await effacerDossierMedical(id);
  res.json(result);
};