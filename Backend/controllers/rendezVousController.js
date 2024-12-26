import { afficherRendezVous, afficherRendezVousById, ajoutRendezVous, modifierRendezVous, effacerRendezVous , compterRendezVous } from '../models/rendezVousModel.js';

export const getRendezVous = async (req, res) => {
  const result = await afficherRendezVous();
  res.json(result);
};

export const getRendezVousById = async (req, res) => {
  const { id } = req.params;
  const result = await afficherRendezVousById(id);
  res.json(result);
};

export const createRendezVous = async (req, res) => {
  const { id_patient, date, heure, address } = req.body;
  const result = await ajoutRendezVous(id_patient, date, heure, address);
  res.json(result);
};

export const updateRendezVous = async (req, res) => {
  const { id } = req.params;
  const { id_patient, date, heure, address } = req.body;
  const result = await modifierRendezVous(id, id_patient, date, heure, address);
  res.json(result);
};

export const deleteRendezVous = async (req, res) => {
  const { id } = req.params;
  const result = await effacerRendezVous(id);
  res.json(result);
};

export const countRendezVous = async (req, res) => {
  const result = await compterRendezVous();
  res.json(result);
};