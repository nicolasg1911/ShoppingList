const orderProvider = require('../providers/OrderProvider');

const createServices = (app) => {
    
    app.get('/api/order/all', (req, res) => {
        orderProvider.getAll(
            (result) =>{
                res.send(result);
            }
        );
    });
    
    app.post('/api/order/create', (req, res)=>{
        let order = req.body;
        orderProvider.addOrder(order, (result)=>{
            res.send(result);
        });
    });



}

module.exports.createServices = createServices;