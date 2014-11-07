var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('um usuário conectou');
    
    socket.on('disconnect', function(){
        console.log('usuário desconectou');
    });
});

http.listen(3000, function(){
  console.log('Ouvindo na porta *:3000');
});