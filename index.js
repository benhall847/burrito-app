const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

<<<<<<< HEAD
const BurritoOrders = require('./models/burrito-orders')
=======
const coffeeOrders = require('./models/coffee-orders')
>>>>>>> 3940ed841ccc16e01cce440227abb5ac0ba78cbf

const server = http.createServer(async(req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/JSON');
    let response = '';
    const reqURL = req.url.split('/');
    console.log(reqURL[2])
    const method = req.method;
    if(req.url.startsWith('/orders')){
        if (method === 'GET'){
            if (reqURL.length === 2){
<<<<<<< HEAD
                response = await BurritoOrders.getAll();
                response = JSON.stringify(response);
            }else if (reqURL.length === 3){
                response = await BurritoOrders.getByName(reqURL[2]);
=======
                response = await coffeeOrders.getAll();
                response = JSON.stringify(response);
            }else if (reqURL.length === 3){
                response = await coffeeOrders.getByName(reqURL[2]);
>>>>>>> 3940ed841ccc16e01cce440227abb5ac0ba78cbf
                response = JSON.stringify(response);
            };
        };
    };
    

    res.end(response);

});
server.listen(port, hostname, ()=>{
    console.log(`listening on http://${hostname}:${port}`)
});