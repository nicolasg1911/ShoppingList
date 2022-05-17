const db = require('../db/DBConnection');

const getAll = ()=>{
    db.con.query("SELECT * FROM Order_A00365529", (err,result)=>{
        if(!err){
            console.log("Resultado"+result);
        }
    });
}

const addOrder = (order)=>{
    db.con.query("INSERT INTO Order_A00365529(userId) VALUES ('"+order.userId+"')", (err)=>{
        if(!err){
            console.log({result:"OK"});
        }else{
            console.log({result:"ERROR"})
        }
    });
}

const updatePayment = (order, onresult)=>{
    db.con.query("UPDATE Order_A00365529 SET paid = 1, payDate = CURRENT_TIMESTAMP WHERE id =('"+order+"')",(err)=>{
        if(!err){
            console.log({result:"OK"});
        }else{
            console.log({result:"ERROR"})
        }
    });
}

const orderInfo = (order, onresult)=>{
    db.con.query("SELECT Product_A00365529.id, Product_A00365529.name, Product_A00365529.price, Product_A00365529.id, Order_Products_A00365529.amount FROM (Product_A00365529 INNER JOIN Order_Products_A00365529 "+" ON Product_A00365529.id=Order_Products_A00365529.productId)INNER JOIN Order_A00365529 ON Order_Products_A00365529.orderId = Order_A00365529.id WHERE Order_A00365529.id = ('"+order.id+"')",(err,result)=>{
        if(!err){
            onresult(result);
        }
    });

   
}


module.exports.getAll = getAll;
module.exports.addOrder = addOrder;
module.exports.updatePayment=updatePayment;
module.exports.orderInfo=orderInfo;