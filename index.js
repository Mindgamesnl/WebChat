var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
users = [];
connections = [];

app.use(express.static(path.join(__dirname, "")));

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('Message: ' + msg);
  });
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});
