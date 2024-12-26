import api from './api';

export const getPatients = async () => {
  try {
    const response = await api.get('/patients');
    return response.data.data; // Extract the 'data' property from the response
  } catch (error) {
    console.error('Erreur lors de la récupération des patients:', error);
    throw error;
  }
};

export const getPatientById = async (id) => {
  try {
    const response = await api.get(`/patients/${id}`);
    return response.data.data; // Extract the 'data' property from the response
  } catch (error) {
    console.error(`Erreur lors de la récupération du patient (ID: ${id}):`, error);
    throw error;
  }
};

export const createPatient = async (patientData) => {
  try {
    const response = await api.post('/patients', patientData);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'ajout du patient:', error);
    throw error;
  }
};

export const updatePatient = async (id, patientData) => {
  try {
    const response = await api.put(`/patients/${id}`, patientData);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la modification du patient (ID: ${id}):`, error);
    throw error;
  }
};

export const deletePatient = async (id) => {
  try {
    const response = await api.delete(`/patients/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la suppression du patient (ID: ${id}):`, error);
    throw error;
  }
};

export const countPatients = async () => {
  try {
    const response = await api.get('/patients/count');
    return response.data;
  } catch (error) {
    console.error('Erreur lors du comptage des patients:', error);
    throw error;
  }
};