import pool from '../config/db.js';

export async function afficherRendezVous() {
  try {
    const [rows] = await pool.query("SELECT * FROM RendezVous");
    return rows.length > 0
      ? { data: rows, message: "Liste des rendez-vous récupérée avec succès" }
      : { message: "Aucun rendez-vous trouvé" };
  } catch (error) {
    return { message: `Erreur lors de la récupération des rendez-vous : ${error.message}` };
  }
}

export async function afficherRendezVousById(id) {
  try {
    const [rows] = await pool.query(`SELECT * FROM RendezVous WHERE id = ?`, [id]);
    return rows.length > 0
      ? { data: rows[0], message: `Rendez-vous avec l'ID ${id} récupéré avec succès` }
      : { message: `Aucun rendez-vous trouvé avec l'ID ${id}` };
  } catch (error) {
    return { message: `Erreur lors de la récupération du rendez-vous (ID: ${id}) : ${error.message}` };
  }
}

export async function ajoutRendezVous(idPatient, date, heure, address) {
  try {
    const [result] = await pool.query(`
      INSERT INTO RendezVous (id_patient, date, heure, address)
      VALUES (?, ?, ?, ?)`, [idPatient, date, heure, address]);
    return result.insertId
      ? { id: result.insertId, message: "Rendez-vous ajouté avec succès" }
      : { message: "Erreur lors de l'ajout du rendez-vous" };
  } catch (error) {
    return { message: `Erreur lors de l'ajout du rendez-vous : ${error.message}` };
  }
}

export async function modifierRendezVous(id, idPatient, date, heure, address) {
  try {
    const [result] = await pool.query(`
      UPDATE RendezVous
      SET id_patient = ?, date = ?, heure = ?, address = ?
      WHERE id = ?`, [idPatient, date, heure, address, id]);
    return result.affectedRows === 1
      ? { message: `Rendez-vous avec l'ID ${id} modifié avec succès` }
      : { message: `Erreur lors de la modification du rendez-vous (ID: ${id})` };
  } catch (error) {
    return { message: `Erreur lors de la modification du rendez-vous (ID: ${id}) : ${error.message}` };
  }
}

export async function effacerRendezVous(id) {
  try {
    const [result] = await pool.query(`DELETE FROM RendezVous WHERE id = ?`, [id]);
    return result.affectedRows === 1
      ? { message: `Rendez-vous avec l'ID ${id} supprimé avec succès` }
      : { message: `Erreur lors de la suppression du rendez-vous (ID: ${id})` };
  } catch (error) {
    return { message: `Erreur lors de la suppression du rendez-vous (ID: ${id}) : ${error.message}` };
  }
}

export async function compterRendezVous() {
  try {
    const [rows] = await pool.query("SELECT COUNT(*) AS count FROM RendezVous");
    return { count: rows[0].count, message: "Nombre de rendez-vous récupéré avec succès" };
  } catch (error) {
    return { message: `Erreur lors du comptage des rendez-vous : ${error.message}` };
  }
}