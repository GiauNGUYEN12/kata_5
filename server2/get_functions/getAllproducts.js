const { getPool } = require('../db');
const pool = getPool();

const getAllProducts = async (req, res) => {
    try{
        const result = await pool.query(`SELECT * FROM products`)
        return res.json(result.rows);
    } catch (error){
        console.error("erroe de recuperer des produits", error);

    }
};
module.exports = {getAllProducts}