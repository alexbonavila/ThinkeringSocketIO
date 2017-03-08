var io = require('socket.io')();
io.on('connection', function(client){
    console.log('Client connected');
    console.log(client);
});
io.listen(3000);