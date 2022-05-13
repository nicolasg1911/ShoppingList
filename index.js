const express = require('express');

const app = express();
app.use(express.json());

const clientServices = require('./services/ClientServices');
clientServices.createServices(app);

const productServices = require('./services/ProductServices');
productServices.createServices(app);

const orderServices = require('./services/OrderServices');
orderServices.createServices(app);

const order_productsServices = require('./services/Order_ProductsServices');
order_productsServices.createServices(app);

app.listen(5000, ()=>{
    console.log("El servidor esta preparado");
});