import { afficherPatients, afficherPatient, ajoutPatient, modifierPatient, effacerPatient, compterPatients } from '../models/patientModel.js';

export const getPatients = async (req, res) => {
  const result = await afficherPatients();
  res.json(result);
};

export const getPatientById = async (req, res) => {
  const { id } = req.params;
  const result = await afficherPatient(id);
  res.json(result);
};

export const createPatient = async (req, res) => {
  const { id_user, code_secret } = req.body;
  const result = await ajoutPatient(id_user, code_secret);
  res.json(result);
};

export const updatePatient = async (req, res) => {
  const { id } = req.params;
  const { id_user, code_secret } = req.body;
  const result = await modifierPatient(id, id_user, code_secret);
  res.json(result);
};

export const deletePatient = async (req, res) => {
  const { id } = req.params;
  const result = await effacerPatient(id);
  res.json(result);
};

export const countPatients = async (req, res) => {
  const result = await compterPatients();
  res.json(result);
};