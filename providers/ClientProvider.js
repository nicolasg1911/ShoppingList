const db = require('../db/DBConnection');

const getAll = ()=>{
    db.con.query("SELECT * FROM Client_A00365529", (err,result)=>{
        if(!err){
            console.log("Resultado"+result);
        }
    });
}

const addClient = (client)=>{
    db.con.query("INSERT INTO Client_A00365529(natId) VALUES ('"+client.natId+"')", (err)=>{
        if(!err){
            console.log({result:"OK"});
        }else{
            console.log({result:"ERROR"})
        }
    });
}

module.exports.getAll = getAll;
module.exports.addClient = addClient;