var app     = require('express')();
var http    = require('http').Server(app);
var io      = require('socket.io')(http);
var socket  = require('./js/socket.js')

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket);

http.listen(80,3000, function(){
  console.log('Ouvindo nas portas *: 80 e 3000');
});
