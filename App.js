const express = require('express');
const http = require('http');
const app = express();
const path = require('path');

const server = http.createServer(app);






app.use(express.json());

app.use((req, res, next) => {


    //console.log('checked');

  // res.setHeader("Access-Control-Allow-Origin", '*');
  // res.setHeader('Access-Control-Allow-Methods', '*');
   // res.setHeader('Access-Control-Allow-Headers', '*');

   

    next();
});







app.use("/",express.static(path.join(__dirname, 'build')));


/**  const io = require('socket.io')(server, {

    cors: {
        origin: '*',
        methoda:['GET', 'POST']
    }
}); */

const io = require('socket.io')(server);


io.on('connection', (client) => {
    
   

    client.on('send', (req) => {

        console.log(req);
        io.emit('receive',req);
    })

   



});




server.listen(process.env.PORT || 5000);