const { getPool } = require('../db');
const pool = getPool();

const getOrders = async (req, res) => {
    try{
        const result = await pool.query(`SELECT * FROM orders`)
        return res.json(result.rows);
    } catch (error){
        console.error("erreur de recuperer des produits", error);

    }
};
module.exports = {getOrders}