var io = require('socket.io')();
io.on('connection', function(client){
    console.log('Hello Word');
});
io.listen(3000);