const express = require("express");
const path = require("path");

const app = express();

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "./Table.html"));
});

app.get("/process", function(req, res){
  let num = parseInt(req.query.num);
  let str = "";
  for (let i = 1; i <= 10; i++) {
    str += "<li>" + "x "+ num + " = " + num * i + "</li>";
  }
  //console.log(str);
  res.send(str);
});

app.listen(3000, () => {
  console.log("App is listening on http://localhost:3000");
});