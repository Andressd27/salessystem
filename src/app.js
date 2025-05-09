import express from "express";
import categoriasRoutes from "./routes/categorias.routes.js";
import empleadosRoutes from "./routes/empleados.routes.js";
import clientesRoutes from "./routes/clientes.routes.js";
import productosRoutes from "./routes/productos.routes.js";
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
app.use("/api/empleados",empleadosRoutes);
app.use("/api/clientes",clientesRoutes);
app.use("/api/productos",productosRoutes);

app.get('/',(req,res)=>{
    res.send('REST API EN RENDER WITHOUT DATABASE ENDPOINT');
})

//hacemos disponible a mi server app para toda la aplicacion
export default app;