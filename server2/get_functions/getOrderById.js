const { getPool } = require('../db');
const pool = getPool();

const getOrderById = async (req, res) => {
    const orderId = req.params;
    try{
        const result = await pool.query(`SELECT * FROM orders
            INNER JOIN products ON orders.product_id = products.id
            WHERE id = $1`, [orderId])
        return res.json(result.rows);
    } catch (error){
        console.error("erroe de recuperer des produits", error);

    }
};
module.exports = {getOrderById}