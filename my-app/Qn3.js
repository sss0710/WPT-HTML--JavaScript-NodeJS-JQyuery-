const express = require("express")
const http = require('http');
const url = require('url');
const fs = require('fs');
const app = express();
const path = require('path');

app.get("/" ,(req,res) => {
    res.sendFile(path.join(__dirname,"/CustOrd.html"));
});

app.get("/process",function (req,res) { 
    let cid = req.query.id;  
    let custName = req.query.cname;
    let cbill = req.query.bill;
    let cship = req.query.ship;
    let ctotal = req.query.total;

    var str = "";
    str += cid + "|" +custName+ "|" +cbill+ "|" +cship+ "|" +ctotal+ "\r\n";

    fs.appendFile("Output.txt", str, (err) => {
        if(err)
            console.log("Unsuccessful");          
    });

    res.write("Data Added successfully");
    res.end();
});

app.get('*', function(req, res){  
    res.send('404 Error: Sorry, this is an invalid URL.');  
});

app.listen(3000, ()=> {
    console.log("App is listening on http://localhost:3000")
})