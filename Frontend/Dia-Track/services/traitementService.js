import api from './api';

export const getTraitements = async () => {
  try {
    const response = await api.get('/traitements');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des traitements:', error);
    throw error;
  }
};

export const getTraitementById = async (id) => {
  try {
    const response = await api.get(`/traitements/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la récupération du traitement (ID: ${id}):`, error);
    throw error;
  }
};

export const createTraitement = async (traitementData) => {
  try {
    const response = await api.post('/traitements', traitementData);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'ajout du traitement:', error);
    throw error;
  }
};

export const updateTraitement = async (id, traitementData) => {
  try {
    const response = await api.put(`/traitements/${id}`, traitementData);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la modification du traitement (ID: ${id}):`, error);
    throw error;
  }
};

export const deleteTraitement = async (id) => {
  try {
    const response = await api.delete(`/traitements/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la suppression du traitement (ID: ${id}):`, error);
    throw error;
  }
};
