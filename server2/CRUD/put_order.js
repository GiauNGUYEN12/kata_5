const { getPool } = require('../db');
const pool = getPool();

const putOrder = async (req, res) => {
    const {product_id, client_id, status} = req.body; 
    const orderId = req.params.id;
    try{
        const result = await pool.query(
            `UPDATE orders
            SET (product_id, client_id, status) = (${product_id}, ${client_id}, '${status}')
            WHERE orders.id = $1`, [orderId])
        return res.json(result.rows);
    } catch (error){
        console.error("erroe de recuperer des produits", error);
    }
};
module.exports = {putOrder}