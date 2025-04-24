import { Router } from "express";
import { methodHTTP as categoriaController } from "../controllers/categoria.controllers.js";

const router = Router();

router.get("/", categoriaController.getCategorias);
router.post("/", categoriaController.postCategorias);

// Ruta que recibe un parametro
router.get("/:id", categoriaController.getCategory);

// Ruta para eliminar un registro por parametro
router.delete("/:id", categoriaController.deleteCategory);

// Actualizar registros
router.put("/:id", categoriaController.updateCategory);

export default router;