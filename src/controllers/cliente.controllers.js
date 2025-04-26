import getConnection from "./../db/database.js"


const postCiente = async (req, res) => {
    try {
        const { ClienteID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax } = req.body;
        const cliente = {
            ClienteID,
            Compania,
            Contacto,
            Titulo,
            Direccion,
            Ciudad,
            Regiones,
            CodigoPostal,
            Pais,
            Telefono,
            Fax
        }
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO clientes SET ?", cliente);

        res.json(result);
    } catch (error) {
        console.error("Error 500");
    }
}

export const methodHTTP = {
    postCiente,
}