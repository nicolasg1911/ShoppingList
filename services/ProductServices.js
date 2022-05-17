const productProvider = require('../providers/ProductProvider');

const createServices = (app) => {
    
    app.get('/api/product/all', (req, res) => {
        productProvider.getAll(
            (result) =>{
                res.send(result);
            }
        );
    });
    
    app.post('/api/product/create', (req, res)=>{
        let product = req.body;
        productProvider.addProduct(product, (result)=>{
            res.send(result);
        });
    });

   



}

module.exports.createServices = createServices;