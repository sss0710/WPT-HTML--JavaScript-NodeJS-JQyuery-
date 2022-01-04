let express = require("express")

let app = express();

app.get("/", function(req,res){
    res.send("<h1>Welcome to first Page</h1>")
})

app.listen(3000, ()=> {
    console.log("App is listening on http://localhost:3000")
})