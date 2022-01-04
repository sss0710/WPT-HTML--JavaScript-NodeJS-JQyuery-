const express = require("express")
const http = require('http');
const url = require('url');
const fs = require('fs');
const app = express();
const path = require('path');

app.get("/" ,(req,res) => {
    res.sendFile(path.join(__dirname,"/3_names.html"));
    //console.log(req.data);
});
app.get("/process",function (req,res) {
    //console.log(req);   
    let string1= req.query.name1;  
    let string2= req.query.name2;
    let string3= req.query.name3;  

    res.setHeader('Content-Type', 'text/html');
    res.write("<h4>The Parameter are :</h4>");
    res.write("<ul><li>"+string1+"</li><li>"+string2+"</li><li>"+string3+"</li></ul>")
    res.end();
});

app.get('*', function(req, res){  
    res.send('404 Error: Sorry, this is an invalid URL.');  
});

app.listen(3000, ()=> {
    console.log("App is listening on http://localhost:3000")
})