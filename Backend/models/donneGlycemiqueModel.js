import pool from '../config/db.js';

export async function ajouterDonneGlycemique(donneGlycemiqueData) {
  try {
    const [result] = await pool.query(`
      INSERT INTO DonneGlycemique (id_patient, date, heure, valeur, type_de_lecteur)
      VALUES (?, ?, ?, ?, ?)
    `, [
      donneGlycemiqueData.id_patient,
      donneGlycemiqueData.date,
      donneGlycemiqueData.heure,
      donneGlycemiqueData.valeur,
      donneGlycemiqueData.type_de_lecteur
    ]);
    return result.insertId
      ? { id: result.insertId, message: "Donnée glycémique ajoutée avec succès" }
      : { message: "Erreur lors de l'ajout de la donnée glycémique" };
  } catch (error) {
    return { message: `Erreur lors de l'ajout de la donnée glycémique : ${error.message}` };
  }
}

export async function afficherDonneesGlycemiques(idPatient) {
  try {
    const [rows] = await pool.query(`
      SELECT * FROM DonneGlycemique
      WHERE id_patient = ?
    `, [idPatient]);
    return rows.length > 0
      ? { data: rows, message: "Données glycémiques récupérées avec succès" }
      : { message: "Aucune donnée glycémique trouvée pour ce patient" };
  } catch (error) {
    return { message: `Erreur lors de la récupération des données glycémiques : ${error.message}` };
  }
}

export async function afficherDonneGlycemique(id) {
  try {
    const [rows] = await pool.query(`
      SELECT * FROM DonneGlycemique
      WHERE id = ?
    `, [id]);
    return rows.length > 0
      ? { data: rows[0], message: `Donnée glycémique avec l'ID ${id} récupérée avec succès` }
      : { message: `Aucune donnée glycémique trouvée avec l'ID ${id}` };
  } catch (error) {
    return { message: `Erreur lors de la récupération de la donnée glycémique (ID: ${id}) : ${error.message}` };
  }
}

export async function modifierDonneGlycemique(id, donneGlycemiqueData) {
  try {
    const [result] = await pool.query(`
      UPDATE DonneGlycemique
      SET id_patient = ?, date = ?, heure = ?, valeur = ?, type_de_lecteur = ?
      WHERE id = ?
    `, [
      donneGlycemiqueData.id_patient,
      donneGlycemiqueData.date,
      donneGlycemiqueData.heure,
      donneGlycemiqueData.valeur,
      donneGlycemiqueData.type_de_lecteur,
      id
    ]);
    return result.affectedRows === 1
      ? { message: `Donnée glycémique avec l'ID ${id} modifiée avec succès` }
      : { message: `Erreur lors de la modification de la donnée glycémique (ID: ${id})` };
  } catch (error) {
    return { message: `Erreur lors de la modification de la donnée glycémique (ID: ${id}) : ${error.message}` };
  }
}

export async function effacerDonneGlycemique(id) {
  try {
    const [result] = await pool.query(`
      DELETE FROM DonneGlycemique
      WHERE id = ?
    `, [id]);
    return result.affectedRows === 1
      ? { message: `Donnée glycémique avec l'ID ${id} supprimée avec succès` }
      : { message: `Erreur lors de la suppression de la donnée glycémique (ID: ${id})` };
  } catch (error) {
    return { message: `Erreur lors de la suppression de la donnée glycémique (ID: ${id}) : ${error.message}` };
  }
}