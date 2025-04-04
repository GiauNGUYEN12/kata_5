const { getPool } = require('../db');
const pool = getPool();

const deleteOrder = async (req, res) => {
    const orderId = req.params.id;
    try{
        const result = await pool.query(
            `DELETE from orders
            WHERE orders.id = $1`, [orderId])
        return res.json(result.rows);
    } catch (error){
        console.error("error de recuperer des produits", error);
    }
};
module.exports = {deleteOrder}