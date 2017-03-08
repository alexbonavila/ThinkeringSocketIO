var io = require('socket.io')();
io.on('connection', function(client){
    console.log('Client connected');
    //console.log(client);
    client.emit('Hello','test hello event')
    client.disconnect()
});
io.listen(3000);