import api from './api';

export const getDossiersMedicaux = async () => {
  try {
    const response = await api.get('/dossiers-medicaux');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des dossiers médicaux:', error);
    throw error;
  }
};

export const getDossierMedicalById = async (id) => {
  try {
    const response = await api.get(`/dossiers-medicaux/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la récupération du dossier médical (ID: ${id}):`, error);
    throw error;
  }
};

export const createDossierMedical = async (dossierMedicalData) => {
  try {
    const response = await api.post('/dossiers-medicaux', dossierMedicalData);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'ajout du dossier médical:', error);
    throw error;
  }
};

export const updateDossierMedical = async (id, dossierMedicalData) => {
  try {
    const response = await api.put(`/dossiers-medicaux/${id}`, dossierMedicalData);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la modification du dossier médical (ID: ${id}):`, error);
    throw error;
  }
};

export const deleteDossierMedical = async (id) => {
  try {
    const response = await api.delete(`/dossiers-medicaux/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la suppression du dossier médical (ID: ${id}):`, error);
    throw error;
  }
};
