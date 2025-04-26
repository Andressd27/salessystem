import { Router } from "express";
import { methodHTTP as productoController } from "../controllers/producto.controllers.js";

const router = Router();

router.post("/:id", productoController.updateProductos);


export default router;