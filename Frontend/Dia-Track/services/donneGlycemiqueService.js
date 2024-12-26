import api from './api';

export const ajouterDonneGlycemique = async (donneGlycemiqueData) => {
  try {
    const response = await api.post('/glycemie', donneGlycemiqueData);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'ajout de la donnée glycémique:', error);
    throw error;
  }
};

export const afficherDonneesGlycemiques = async (idPatient) => {
  try {
    const response = await api.get(`/glycemie/patient/${idPatient}`);
    return response.data.data; // Extract the 'data' property from the response
  } catch (error) {
    console.error('Erreur lors de la récupération des données glycémiques:', error);
    throw error;
  }
};

export const afficherDonneGlycemique = async (id) => {
  try {
    const response = await api.get(`/glycemie/${id}`);
    return response.data.data; // Extract the 'data' property from the response
  } catch (error) {
    console.error(`Erreur lors de la récupération de la donnée glycémique (ID: ${id}):`, error);
    throw error;
  }
};

export const modifierDonneGlycemique = async (id, donneGlycemiqueData) => {
  try {
    const response = await api.put(`/glycemie/${id}`, donneGlycemiqueData);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la modification de la donnée glycémique (ID: ${id}):`, error);
    throw error;
  }
};

export const effacerDonneGlycemique = async (id) => {
  try {
    const response = await api.delete(`/glycemie/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la suppression de la donnée glycémique (ID: ${id}):`, error);
    throw error;
  }
};