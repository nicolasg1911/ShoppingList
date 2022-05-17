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

function findUserNatId(natId){
    var id = "XDDDDDDDDDDDDDD"+ db.con.query("SELECT id FROM Client_A00365529 WHERE natId = ('"+natId+"')");
     return id;
 }
 

 const getNatId = (natId,onresult)=>{
    db.con.query("SELECT id FROM Client_A00365529 WHERE natId = ('"+natId.natId+"')", function(err,resul){
        if(!err){
            console.log(resul[0].id);
        //  const myJSON = JSON.stringify(resul);
            var myJSON = resul[0].id;
        db.con.query("SELECT * FROM Order_A00365529 WHERE userId=('"+myJSON+"')" , (err,result)=>{
            if(!err){
                onresult(result);
            }
        });
    }

    });

    
}



module.exports.getAll = getAll;
module.exports.addClient = addClient;
module.exports.getNatId=getNatId;
module.exports.findUserNatId=findUserNatId;