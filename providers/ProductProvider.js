const db = require('../db/DBConnection');

const getAll = ()=>{
    db.con.query("SELECT * FROM Product_A00365529", (err,result)=>{
        if(!err){
            console.log("Resultado"+result);
        }
    });
}

const addProduct = (product)=>{
    db.con.query("INSERT INTO Product_A00365529(name,price) VALUES ('"+product.name+"','"+product.price+"')", (err)=>{
        if(!err){
            console.log({result:"OK"});
        }else{
            console.log({result:"ERROR"})
        }
    });
}

module.exports.getAll = getAll;
module.exports.addProduct = addProduct;