import pool from '../config/db.js';

export async function afficherTraitements() {
  try {
    const [rows] = await pool.query("SELECT * FROM Traitement");
    return rows.length > 0
      ? { data: rows, message: "Liste des traitements récupérée avec succès" }
      : { message: "Aucun traitement trouvé" };
  } catch (error) {
    return { message: `Erreur lors de la récupération des traitements : ${error.message}` };
  }
}

export async function afficherTraitement(id) {
  try {
    const [rows] = await pool.query(`SELECT * FROM Traitement WHERE id = ?`, [id]);
    return rows.length > 0
      ? { data: rows[0], message: `Traitement avec l'ID ${id} récupéré avec succès` }
      : { message: `Aucun traitement trouvé avec l'ID ${id}` };
  } catch (error) {
    return { message: `Erreur lors de la récupération du traitement (ID: ${id}) : ${error.message}` };
  }
}

export async function ajoutTraitement(idDossierMedical, typeTraitement, medicament, dosage) {
  try {
    const [result] = await pool.query(`
      INSERT INTO Traitement (id_dossier_medical, type_traitement, medicament, dosage)
      VALUES (?, ?, ?, ?)`, [idDossierMedical, typeTraitement, medicament, dosage]);
    return result.insertId
      ? { id: result.insertId, message: "Traitement ajouté avec succès" }
      : { message: "Erreur lors de l'ajout du traitement" };
  } catch (error) {
    return { message: `Erreur lors de l'ajout du traitement : ${error.message}` };
  }
}

export async function modifierTraitement(id, idDossierMedical, typeTraitement, medicament, dosage) {
  try {
    const [result] = await pool.query(`
      UPDATE Traitement
      SET id_dossier_medical = ?, type_traitement = ?, medicament = ?, dosage = ?
      WHERE id = ?`, [idDossierMedical, typeTraitement, medicament, dosage, id]);
    return result.affectedRows === 1
      ? { message: `Traitement avec l'ID ${id} modifié avec succès` }
      : { message: `Erreur lors de la modification du traitement (ID: ${id})` };
  } catch (error) {
    return { message: `Erreur lors de la modification du traitement (ID: ${id}) : ${error.message}` };
  }
}

export async function effacerTraitement(id) {
  try {
    const [result] = await pool.query(`DELETE FROM Traitement WHERE id = ?`, [id]);
    return result.affectedRows === 1
      ? { message: `Traitement avec l'ID ${id} supprimé avec succès` }
      : { message: `Erreur lors de la suppression du traitement (ID: ${id})` };
  } catch (error) {
    return { message: `Erreur lors de la suppression du traitement (ID: ${id}) : ${error.message}` };
  }
}