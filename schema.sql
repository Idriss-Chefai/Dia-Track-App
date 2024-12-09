-- Creating the database
CREATE DATABASE DiabetesApp;
USE DiabetesApp;

-- Table: User
CREATE TABLE User (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(50) NOT NULL,
    sexe ENUM('M', 'F') NOT NULL,
    num_tel VARCHAR(15),
    date_naissance DATE,
    email VARCHAR(100) UNIQUE
);

-- Table: Patient
CREATE TABLE Patient (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_user INT NOT NULL,
    code_secret VARCHAR(100) NOT NULL,
    FOREIGN KEY (id_user) REFERENCES User(id) ON DELETE CASCADE
);

-- Table: Medecin
CREATE TABLE Medecin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_user INT NOT NULL,
    specialite VARCHAR(100) NOT NULL,
    FOREIGN KEY (id_user) REFERENCES User(id) ON DELETE CASCADE
);

-- Table: DossierMedical
CREATE TABLE DossierMedical (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_patient INT NOT NULL,
    id_medecin INT NOT NULL,
    type_diabete VARCHAR(50) NOT NULL,
    poids DECIMAL(5,2),
    taille DECIMAL(5,2),
    mois_diagnostic TINYINT,
    annee_diagnostic YEAR,
    FOREIGN KEY (id_patient) REFERENCES Patient(id) ON DELETE CASCADE,
    FOREIGN KEY (id_medecin) REFERENCES Medecin(id) ON DELETE CASCADE
);

-- Table: Traitement
CREATE TABLE Traitement (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_dossier_medical INT NOT NULL,
    type_traitement VARCHAR(100) NOT NULL,
    medicament VARCHAR(100),
    dosage VARCHAR(50),
    FOREIGN KEY (id_dossier_medical) REFERENCES DossierMedical(id) ON DELETE CASCADE
);

-- Table: DonneGlycemique
CREATE TABLE DonneGlycemique (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_patient INT NOT NULL,
    date DATE NOT NULL,
    heure TIME NOT NULL,
    valeur DECIMAL(5,2) NOT NULL,
    type_de_lecteur VARCHAR(50),
    FOREIGN KEY (id_patient) REFERENCES Patient(id) ON DELETE CASCADE
);

-- Table: Message
CREATE TABLE Message (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_patient INT NOT NULL,
    id_medecin INT NOT NULL,
    message TEXT NOT NULL,
    FOREIGN KEY (id_patient) REFERENCES Patient(id) ON DELETE CASCADE,
    FOREIGN KEY (id_medecin) REFERENCES Medecin(id) ON DELETE CASCADE
);

-- Table: RendezVous
CREATE TABLE RendezVous (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_patient INT NOT NULL,
    date DATE NOT NULL,
    heure TIME NOT NULL,
    address VARCHAR(255) NOT NULL,
    FOREIGN KEY (id_patient) REFERENCES Patient(id) ON DELETE CASCADE
);

-- Table: Notification
CREATE TABLE Notification (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_patient INT NOT NULL,
    id_rendezvous INT,
    text_notif VARCHAR(255) NOT NULL,
    FOREIGN KEY (id_patient) REFERENCES Patient(id) ON DELETE CASCADE,
    FOREIGN KEY (id_rendezvous) REFERENCES RendezVous(id) ON DELETE CASCADE
);

-- Table: Alerte
CREATE TABLE Alerte (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_medecin INT NOT NULL,
    id_patient INT NOT NULL,
    alerte_msg TEXT NOT NULL,
    FOREIGN KEY (id_medecin) REFERENCES Medecin(id) ON DELETE CASCADE,
    FOREIGN KEY (id_patient) REFERENCES Patient(id) ON DELETE CASCADE
);

-- Table: ActiviteRepas
CREATE TABLE ActiviteRepas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_patient INT NOT NULL,
    type_activite VARCHAR(100),
    repas TEXT,
    date_enregistrement DATETIME NOT NULL,
    FOREIGN KEY (id_patient) REFERENCES Patient(id) ON DELETE CASCADE
);
