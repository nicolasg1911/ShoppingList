const order_productProvider = require('../providers/Order_ProductsProvider');

const createServices = (app) => {
    
    app.get('/api/order_product/all', (req, res) => {
        order_productProvider.getAll(
            (result) =>{
                res.send(result);
            }
        );
    });
    
    app.post('/api/order_product/create', (req, res)=>{
        let order_product = req.body;
        order_productProvider.addOrder_Products(order_product, (result)=>{
            res.send(result);
        });
    });

    app.delete('/api/order_product/delete', (req, res)=>{
        let product = req.body;
        order_productProvider.delete_Product(product, (result)=>{
            res.send(result);
        });
    });


}

module.exports.createServices = createServices;