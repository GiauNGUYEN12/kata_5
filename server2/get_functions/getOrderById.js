const { getPool } = require('../db');
const pool = getPool();

const getOrderById = async (req, res) => {
    const orderId = req.params.id;
    console.log(orderId)
    try{
        const result = await pool.query(`SELECT orders.id, orders.product_id,plate,status, description, image, products.id FROM orders
            INNER JOIN products ON orders.product_id = products.id
            WHERE orders.id = $1`, [orderId])
        return res.json(result.rows);
    } catch (error){
        console.error("erroe de recuperer des produits", error);

    }
};
module.exports = {getOrderById}