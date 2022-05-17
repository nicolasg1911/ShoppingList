const res = require('express/lib/response');
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

    app.put('/api/order/edit/:id', (req, res)=>{
        let order = req.params.id;
        orderProvider.updatePayment(order, (result)=>{
            res.send(result);
        })
    });

    app.get('/api/ordersInformation/getOrder',(req,res)=>{
        let id = req.body;
        orderProvider.orderInfo(id,(result)=>{
            res.send(result);
        });
    });

}

module.exports.createServices = createServices;