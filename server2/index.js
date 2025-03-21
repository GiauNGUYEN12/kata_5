const express = require("express")
const cors = require ("cors")

const app = express();
app.use(express.json())
const port = 3000;
app.use(cors());

const {getPool} = require('./db')
const pool = getPool()

const {getAllProducts} = require("./get_functions/getAllproducts")
const {getOrders} = require("./get_functions/getOrders")
const {getOrderById} = require("./get_functions/getOrderById")

app.use(cors()); 

app.get("/menu", getAllProducts);
app.get("/allOrders", getOrders)
app.get("/getOrder/:id", getOrderById)
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
  