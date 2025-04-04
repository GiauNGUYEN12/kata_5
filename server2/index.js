const express = require("express") // après installée on importe express; express envoir une fonction appelle express()
const cors = require ("cors") 
//server est un server qui écoute 
const app = express(); //retourner un logiciel qui tranformer app devient un serveur 

const port = 3001;
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
//l'ordi écoute toutes les lien dans ce port 
//callBack est une function fleché

app.use(express.json())

app.use(cors());

const {getPool} = require('./db')
const pool = getPool()

const {getAllProducts} = require("./get_functions/getAllproducts")
const {getOrders} = require("./get_functions/getOrders")
const {getOrderById} = require("./get_functions/getOrderById")

const{postOrder} = require("./CRUD/post_order")

const{putOrder} = require("./CRUD/put_order")

const {deleteOrder} = require("./CRUD/delete_order")
app.use(cors()); 

app.get("/menu", getAllProducts); //on veut il écoute de GET donc on met app.get
app.get("/allOrders", getOrders)
app.get("/getOrder/:id", getOrderById)

//ajouter une commande 
app.post("/order", postOrder)
app.get("/prenom", async (req, res)=>{
    const result = await pool.query(`SELECT name FROM clients ORDER BY id DESC LIMIT 1`)
    res.json(result.rows)
})
app.post("/client", async (req, res) => {
    const prenom = req.body.firstname;
    const result = await pool.query(`INSERT INTO clients(name) VALUES ('${prenom}')` )
    res.json(result.rows)
})
//mettre à jour un order
app.put("/order/:id", putOrder)

//supprimer un order
app.delete("/order/:id", deleteOrder)