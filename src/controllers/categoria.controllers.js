import getConnection from "./../db/database.js"

const getCategorias = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT categoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias");
        res.json(result);
    } catch (error) {
        console.error("Not possible connection database");
        
    }
}

export const methodHTTP = {
        getCategorias
}