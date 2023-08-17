import express from'express'
import {getAllProducts, udpateProduct}  from "./controllers/index.js"
import bodyParser from 'body-parser';
import mongoose from './database/index.js';
import Product  from './modal/products.js';
import cors from 'cors'


const app = express();
const port = 3001;
app.use(bodyParser.json())
app.use(cors())
app.put('/api/products', udpateProduct);
app.get('/api/products', getAllProducts);

// app.post('/api/tree', checkValidNode,addTreeNode);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
