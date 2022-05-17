const clientProvider = require('../providers/ClientProvider');

const createServices = (app) => {
    
    app.get('/api/client/all', (req, res) => {
        clientProvider.getAll(
            (result) =>{
                res.send(result);
            }
        );
    });
    
    app.post('/api/client/create', (req, res)=>{
        let client = req.body;
        clientProvider.addClient(client, (result)=>{
            res.send(result);
        });
    });

    app.get('/api/users/getId', (req, res)=>{
        let natId = req.body;
        userProvider.getNatId(natId, (result)=>{
            res.send(result);
        });
    });


}

module.exports.createServices = createServices;