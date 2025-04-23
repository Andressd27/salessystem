import express from "express";
import categoriasRoutes from "./routes/categorias.routes.js";
import cors from "cors";

// asignamos a app toda funcionalidad para mi server web
const app = express();

// setear un puerto a mi web server
app.set("port", 5000);

// middleware
app.use(express.json());

app.use(cors());
// routes
app.use("/api/categorias",categoriasRoutes);

//hacemos disponible a mi server app para toda la aplicacion
export default app;