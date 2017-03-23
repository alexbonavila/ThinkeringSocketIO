var io = require('socket.io')();

var nivel = 100;


io.on('connection', function(client){
    console.log('Client connected');

    client.emit('Hello',nivel);

    client.disconnect()
});

io.listen(3000);