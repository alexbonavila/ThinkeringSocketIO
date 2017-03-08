
var server = require('http').createServer();
var io = require('socket.io')(server);
io.on('connection', function(client){
    console.log("Connected");
  client.on('event', function(data){

  });
  client.on('disconnect', function(){

  });
});
server.listen(3001);