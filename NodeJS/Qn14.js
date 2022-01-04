var http = require('http');
var greetDay = require("./mod_greet");

 http.createServer(function (req, res) { 
    res.write(greetDay.greetDay()); 
    res.end(); 
}).listen(3000);