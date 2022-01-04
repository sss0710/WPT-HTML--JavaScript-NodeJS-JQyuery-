const express = require("express")
const http = require('http');
const url = require('url');
const fs = require('fs');
const app = express();
const path = require('path');

app.get("/" ,(req,res) => {
    res.sendFile(path.join(__dirname,"/SimpleInt.html"));
});

app.get("/process",function (req,res) { 
    let p= parseInt(req.query.principle);  
    let r= parseInt(req.query.rate);
    let n= parseInt(req.query.period);  

    var intst = (p*r*n)/100;

    res.setHeader('Content-Type', 'text/html');
    res.write("<h2>The Interest amount is :" + intst + "</h2>");
    //res.write("<ul><li>"+string1+"</li><li>"+string2+"</li><li>"+string3+"</li></ul>")
    res.end();
});

app.get('*', function(req, res){  
    res.send('404 Error: Sorry, this is an invalid URL.');  
});

app.listen(3000, ()=> {
    console.log("App is listening on http://localhost:3000")
})