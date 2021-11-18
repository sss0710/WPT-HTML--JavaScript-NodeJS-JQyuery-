var fs = require("fs");
var filename = "names.txt";
var arr = ["Hello", "Bella","Rambo", "Arnold", "Jason"];

fs.writeFile(filename, arr.join(" | "),function(err){
    if (err) 
        console.error("An error occured: " + err);
    else
        console.log("Successfully written to file");
});