// app.js
import express from 'express';
import dotenv from 'dotenv';
import medecinsRoutes from "./routes/medecinsRoutes.js";

dotenv.config();

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Use the medecins routes
app.use('/medecins', medecinsRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something broke" });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});