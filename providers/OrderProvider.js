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

module.exports.getAll = getAll;
module.exports.addOrder = addOrder;