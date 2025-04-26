import getConnection from "./../db/database.js"


const getEmpleados = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM empleados");
        res.json(result);
    } catch (error) {
        console.error("Not possible connection database");
    }
}

export const methodHTTP = {
    getEmpleados,
}