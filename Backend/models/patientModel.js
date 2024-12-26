import pool from '../config/db.js';

export async function afficherPatients() {
  try {
    const [rows] = await pool.query("SELECT * FROM Patient");
    return rows.length > 0
      ? { data: rows, message: "Liste des patients récupérée avec succès" }
      : { message: "Aucun patient trouvé" };
  } catch (error) {
    return { message: `Erreur lors de la récupération des patients : ${error.message}` };
  }
}

export async function afficherPatient(id) {
  try {
    const [rows] = await pool.query(`SELECT * FROM Patient WHERE id = ?`, [id]);
    return rows.length > 0
      ? { data: rows[0], message: `Patient avec l'ID ${id} récupéré avec succès` }
      : { message: `Aucun patient trouvé avec l'ID ${id}` };
  } catch (error) {
    return { message: `Erreur lors de la récupération du patient (ID: ${id}) : ${error.message}` };
  }
}

export async function ajoutPatient(idUser, codeSecret) {
  try {
    const [result] = await pool.query(`
      INSERT INTO Patient (id_user, code_secret)
      VALUES (?, ?)`, [idUser, codeSecret]);
    return result.insertId
      ? { id: result.insertId, message: "Patient ajouté avec succès" }
      : { message: "Erreur lors de l'ajout du patient" };
  } catch (error) {
    return { message: `Erreur lors de l'ajout du patient : ${error.message}` };
  }
}

export async function modifierPatient(id, idUser, codeSecret) {
  try {
    const [result] = await pool.query(`
      UPDATE Patient
      SET id_user = ?, code_secret = ?
      WHERE id = ?`, [idUser, codeSecret, id]);
    return result.affectedRows === 1
      ? { message: `Patient avec l'ID ${id} modifié avec succès` }
      : { message: `Erreur lors de la modification du patient (ID: ${id})` };
  } catch (error) {
    return { message: `Erreur lors de la modification du patient (ID: ${id}) : ${error.message}` };
  }
}

export async function effacerPatient(id) {
  try {
    const [result] = await pool.query(`DELETE FROM Patient WHERE id = ?`, [id]);
    return result.affectedRows === 1
      ? { message: `Patient avec l'ID ${id} supprimé avec succès` }
      : { message: `Erreur lors de la suppression du patient (ID: ${id})` };
  } catch (error) {
    return { message: `Erreur lors de la suppression du patient (ID: ${id}) : ${error.message}` };
  }
}

export async function compterPatients() {
  try {
    const [rows] = await pool.query("SELECT COUNT(*) AS count FROM Patient");
    return { count: rows[0].count, message: "Nombre de patients récupéré avec succès" };
  } catch (error) {
    return { message: `Erreur lors du comptage des patients : ${error.message}` };
  }
}