// app.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import medecinsRoutes from "./routes/medecinsRoutes.js";
import patientsRoutes from './routes/patientsRoutes.js';
import dossierMedicauxRoutes from './routes/dossierMedicauxRoutes.js';
import traitementsRoutes from './routes/traitementsRoutes.js';
import rendezVousRoutes from './routes/rendezVousRoutes.js';
import donneGlycemiqueRoutes from "./routes/donneGlycemiqueRoutes.js";

dotenv.config();

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// CORS Middleware
app.use(cors({
  origin: 'http://localhost:8081', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  credentials: true, // Allow cookies and other credentials
}));

// Routes
app.use('/medecins', medecinsRoutes);
app.use('/patients', patientsRoutes);
app.use('/dossiers-medicaux', dossierMedicauxRoutes);
app.use('/traitements', traitementsRoutes);
app.use('/rendez-vous', rendezVousRoutes);
app.use('/glycemie', donneGlycemiqueRoutes);
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something broke" });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});