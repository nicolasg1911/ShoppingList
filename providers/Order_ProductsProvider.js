const db = require('../db/DBConnection');

const getAll = ()=>{
    db.con.query("SELECT * FROM Order_Products_A00365529", (err,result)=>{
        if(!err){
            console.log("Resultado"+result);
        }
    });
}

const addOrder_Products = (order_product)=>{
    db.con.query("INSERT INTO Order_Products_A00365529(orderId,productId,amount) VALUES ('"+order_product.orderId+"','"+order_product.productId+"','"+order_product.amount+"')", (err)=>{
        if(!err){
            console.log({result:"OK"});
        }else{
            console.log({result:"ERROR"})
        }
    });
}

module.exports.getAll = getAll;
module.exports.addOrder_Products = addOrder_Products;