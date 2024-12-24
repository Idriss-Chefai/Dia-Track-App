// models/medecinModel.js
import pool from '../config/db.js';

export async function afficherMedecins() {
  try {
    const [rows] = await pool.query("SELECT * FROM Medecin");
    return rows.length > 0
      ? { data: rows, message: "Liste des médecins récupérée avec succès" }
      : { message: "Aucun médecin trouvé" };
  } catch (error) {
    return { message: `Erreur lors de la récupération des médecins : ${error.message}` };
  }
}

export async function afficherMedecin(id) {
  try {
    const [rows] = await pool.query(`
      SELECT * 
      FROM Medecin
      WHERE id =?`, [id])
    return rows.length > 0
      ? { data: rows[0], message: `Médecin avec l'ID ${id} récupéré avec succès` }
      : { message: `Aucun médecin trouvé avec l'ID ${id}` };
  } catch (error) {
    return { message: `Erreur lors de la récupération du médecin (ID: ${id}) : ${error.message}` };
  }
}

export async function ajoutMedecin(idUser, specialite) {
  try {
    const [result] = await pool.query(`
      INSERT INTO Medecin (id_user, specialite)
      VALUES (?,?)`, [idUser, specialite])
    return result.insertId
      ? { id: result.insertId, message: "Médecin ajouté avec succès" }
      : { message: "Erreur lors de l'ajout du médecin" };
  } catch (error) {
    return { message: `Erreur lors de l'ajout du médecin : ${error.message}` };
  }
}

export async function modifierMedecin(id, idUser, specialite) {
  try {
    const [result] = await pool.query(`
      UPDATE Medecin
      SET id_user =?, specialite =?
      WHERE id =?`, [idUser, specialite, id])
    return result.affectedRows === 1
      ? { message: `Médecin avec l'ID ${id} modifié avec succès` }
      : { message: `Erreur lors de la modification du médecin (ID: ${id})` };
  } catch (error) {
    return { message: `Erreur lors de la modification du médecin (ID: ${id}) : ${error.message}` };
  }
}

export async function effacerMedecin(id) {
  try {
    const [result] = await pool.query(`
      DELETE FROM Medecin
      WHERE id =?`, [id])
    return result.affectedRows === 1
      ? { message: `Médecin avec l'ID ${id} supprimé avec succès` }
      : { message: `Erreur lors de la suppression du médecin (ID: ${id})` };
  } catch (error) {
    return { message: `Erreur lors de la suppression du médecin (ID: ${id}) : ${error.message}` };
  }
}