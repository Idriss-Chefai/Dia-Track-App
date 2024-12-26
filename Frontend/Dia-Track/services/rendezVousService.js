import api from './api';

export const getRendezVous = async () => {
  try {
    const response = await api.get('/rendez-vous');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des rendez-vous:', error);
    throw error;
  }
};

export const getRendezVousById = async (id) => {
  try {
    const response = await api.get(`/rendez-vous/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la récupération du rendez-vous (ID: ${id}):`, error);
    throw error;
  }
};

export const createRendezVous = async (rendezVousData) => {
  try {
    const response = await api.post('/rendez-vous', rendezVousData);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'ajout du rendez-vous:', error);
    throw error;
  }
};

export const updateRendezVous = async (id, rendezVousData) => {
  try {
    const response = await api.put(`/rendez-vous/${id}`, rendezVousData);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la modification du rendez-vous (ID: ${id}):`, error);
    throw error;
  }
};

export const deleteRendezVous = async (id) => {
  try {
    const response = await api.delete(`/rendez-vous/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la suppression du rendez-vous (ID: ${id}):`, error);
    throw error;
  }
};

export const countRendezVous = async () => {
  try {
    const response = await api.get('/rendez-vous/count');
    return response.data;
  } catch (error) {
    console.error('Erreur lors du comptage des rendez-vous:', error);
    throw error;
  }
};