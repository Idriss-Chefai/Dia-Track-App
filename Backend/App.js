import express from "express";
import { afficherMedecins, afficherMedecin, ajoutMedecin, modifierMedecin, effacerMedecin } from "./database.js";

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Route to get all doctors
app.get("/medecins", async (req, res) => {
    const medecins = await afficherMedecins();
    res.json(medecins);
});

// Route to get a specific doctor by ID
app.get("/medecins/:id", async (req, res) => {
    const { id } = req.params;
    const medecin = await afficherMedecin(id);
    res.json(medecin);
});

// Route to add a new doctor
app.post("/medecins", async (req, res) => {
    const { id_user, specialite } = req.body;
    const result = await ajoutMedecin(id_user, specialite);
    res.json(result);
});

// Route to update an existing doctor
app.put("/medecins/:id", async (req, res) => {
    const { id } = req.params;
    const { id_user, specialite } = req.body;
    const result = await modifierMedecin(id, id_user, specialite);
    res.json(result);
});

// Route to delete a doctor
app.delete("/medecins/:id", async (req, res) => {
    const { id } = req.params;
    const result = await effacerMedecin(id);
    res.json(result);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something broke" });
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});