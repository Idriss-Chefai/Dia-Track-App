import pool from '../config/db.js';

export async function afficherDossiersMedicaux() {
  try {
    const [rows] = await pool.query("SELECT * FROM DossierMedical");
    return rows.length > 0
      ? { data: rows, message: "Liste des dossiers médicaux récupérée avec succès" }
      : { message: "Aucun dossier médical trouvé" };
  } catch (error) {
    return { message: `Erreur lors de la récupération des dossiers médicaux : ${error.message}` };
  }
}

export async function afficherDossierMedical(id) {
  try {
    const [rows] = await pool.query(`SELECT * FROM DossierMedical WHERE id = ?`, [id]);
    return rows.length > 0
      ? { data: rows[0], message: `Dossier médical avec l'ID ${id} récupéré avec succès` }
      : { message: `Aucun dossier médical trouvé avec l'ID ${id}` };
  } catch (error) {
    return { message: `Erreur lors de la récupération du dossier médical (ID: ${id}) : ${error.message}` };
  }
}

export async function ajoutDossierMedical(idPatient, idMedecin, typeDiabete, poids, taille, moisDiagnostic, anneeDiagnostic) {
  try {
    const [result] = await pool.query(`
      INSERT INTO DossierMedical (id_patient, id_medecin, type_diabete, poids, taille, mois_diagnostic, annee_diagnostic)
      VALUES (?, ?, ?, ?, ?, ?, ?)`, [idPatient, idMedecin, typeDiabete, poids, taille, moisDiagnostic, anneeDiagnostic]);
    return result.insertId
      ? { id: result.insertId, message: "Dossier médical ajouté avec succès" }
      : { message: "Erreur lors de l'ajout du dossier médical" };
  } catch (error) {
    return { message: `Erreur lors de l'ajout du dossier médical : ${error.message}` };
  }
}

export async function modifierDossierMedical(id, idPatient, idMedecin, typeDiabete, poids, taille, moisDiagnostic, anneeDiagnostic) {
  try {
    const [result] = await pool.query(`
      UPDATE DossierMedical
      SET id_patient = ?, id_medecin = ?, type_diabete = ?, poids = ?, taille = ?, mois_diagnostic = ?, annee_diagnostic = ?
      WHERE id = ?`, [idPatient, idMedecin, typeDiabete, poids, taille, moisDiagnostic, anneeDiagnostic, id]);
    return result.affectedRows === 1
      ? { message: `Dossier médical avec l'ID ${id} modifié avec succès` }
      : { message: `Erreur lors de la modification du dossier médical (ID: ${id})` };
  } catch (error) {
    return { message: `Erreur lors de la modification du dossier médical (ID: ${id}) : ${error.message}` };
  }
}

export async function effacerDossierMedical(id) {
  try {
    const [result] = await pool.query(`DELETE FROM DossierMedical WHERE id = ?`, [id]);
    return result.affectedRows === 1
      ? { message: `Dossier médical avec l'ID ${id} supprimé avec succès` }
      : { message: `Erreur lors de la suppression du dossier médical (ID: ${id})` };
  } catch (error) {
    return { message: `Erreur lors de la suppression du dossier médical (ID: ${id}) : ${error.message}` };
  }
}