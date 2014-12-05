var app     = require('express')();
var http    = require('http').Server(app);
var io      = require('socket.io')(http);
var socket  = require('./js/socket.js')

app.get('/', function(req, res){
    var language = req.headers["accept-language"];
    
    switch (language) {
            case "pt-br":   // Portuguese
                res.sendFile(__dirname + '/index_ptbr.html');
                break;
//            case "fr":      // French
//                res.sendFile(__dirname + '/index_fr.html');
//                break;
//            case "de":      // German
//                res.sendFile(__dirname + '/index_de.html');
//                break;
//            case "ru":      // Russian
//                res.sendFile(__dirname + '/index_ru.html');
//                break;
//            case "ar":      // Arabic
//                res.sendFile(__dirname + '/index_ar.html');
//                break;
//            case "es":      // Spanish
//                res.sendFile(__dirname + '/index_es.html');
//                break;
//            case "hi":      // Hindi
//                res.sendFile(__dirname + '/index_hi.html');
//                break;
//            case "ko":      // Korean
//                res.sendFile(__dirname + '/index_ko.html');
//                break;
//            case "zh":      //  Chinese
//                res.sendFile(__dirname + '/index_zh.html');
//                break;
//            case "zh-Hans": //  Chinese (Simplified)
//                res.sendFile(__dirname + '/index_zhhans.html');
//                break;
//            case "zh-Hant": //  Chinese (Traditional)
//                res.sendFile(__dirname + '/index_zhhant.html');
//                break;
            default:        // English
                res.sendFile(__dirname + '/index_en.html');            
    };
    
});

io.on('connection', socket);

http.listen(80,3000, function(){
  console.log('Ouvindo nas portas *: 80 e 3000');
});
