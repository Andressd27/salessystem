import getConnection from "./../db/database.js"

const getCategorias = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias");
        res.json(result);
    } catch (error) {
        console.error("Not possible connection database");
    }
}

const postCategorias = async (req, res) => {
    try {
        const { CategoriaNombre, Descripcion, Imagen } = req.body;
        const category = {
            CategoriaNombre,
            Descripcion,
            Imagen
        }
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO categorias SET ?",category);

        res.json(result);
    } catch (error) {
        console.error("Error 500");
    }
}

export const methodHTTP = {
    getCategorias,
    postCategorias
}