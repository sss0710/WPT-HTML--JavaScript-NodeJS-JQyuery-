const fs = require('fs');
const filename = "./emp.txt";

fs.readFile(filename, function(err, data){
    if(err)
        return console.error(err);

    var emp = (data.toString().split("\n"));
    var sum = 0;
    for (let element of emp) 
    {
        sum += parseInt(element.split(":")[3]);     
    }
    console.log("The sum of salary is " + sum);
});