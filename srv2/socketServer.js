var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });

    socket.on('message', function(msg){
        console.log('message: ' + msg);
        socket.emit('news', msg);
     
    });

    setInterval(function(){
              socket.emit('news', 'ping');
        },1000);
});

http.listen(8889, function(){
    console.log('listening on *:8889');
});