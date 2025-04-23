import app from "./app.js";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";

// Para poder usar __dirname en ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir archivos estáticos desde la carpeta frontend
app.use(express.static(path.join(__dirname, "../../frontend")));

// Ruta por defecto para servir index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/index.html"));
});

const main = () => {
  app.listen(app.get("port"));
  console.log(`The company's web server is running on port ${app.get("port")}`);
};

main();