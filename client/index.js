var socket = require('socket.io-client')('http://localhost:3000');
socket.on('connect', function(){
    console.log('Client connected ok to localhost port 3000')
});
socket.on('Hello', function(data_request){
    console.log('Event Hello received '+ data_request)
});
socket.on('disconnect', function(){
    console.log('Client disconnected ok to localhost port 3000')
});