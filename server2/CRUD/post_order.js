const { getPool } = require('../db');
const pool = getPool();

const postOrder = async (req, res) => {
    const {product_id, client_id, status} = req.body; 
    
    try{
        const result = await pool.query(
            `INSERT INTO orders (product_id, client_id, status) 
            VALUES (${product_id}, ${client_id}, '${status}')`)
        return res.json(result.rows);
    } catch (error){
        console.error("erroe de recuperer des produits", error);

    }
};
module.exports = {postOrder}