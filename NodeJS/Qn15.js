let http = require("http");
let fs = require('fs');
let url = require("url");
let r = require("./Rectangle")

http.createServer((req, resp) => {
    if( req.method == "GET" && req.url == "/")
    {
        fs.readFile("./Calculate.html", (err, data) => {
            resp.writeHead(200, {'Content-Type':'text/html'})
            resp.write(data);
            resp.end();
        });
    }
    else if(req.method=="GET" && req.url.substring(0,8) == "/process")
    {
        var rect = url.parse(req.url, true);
        var r_data = rect.query;
        let l = parseInt(r_data.length);
        console.log(l);
        let b = parseInt(r_data.breadth);
        console.log(b);
        let Area = r.calcArea(l,b);
        let Per = r.calPerim(l,b);
        resp.writeHead(200, {'Content-Type':'text/html'})
        resp.write("<h2>Area: " + Area + "</h2><br><h2> " + "Perimeter: " + Per + "</br>");
        resp.end();
    }
    else
    {
        resp.end("Not Found")
    }
}).listen(3000);
console.log("server listening on localhost:3000");