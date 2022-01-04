const fs = require('fs');
const filename = "./customer.json";

fs.readFile(filename, function(err, data)
{
    if(err)
        return console.error(err);
    
    const customer = JSON.parse(data);

    for(let i of customer)
        console.log(i.name + "    "+ i.ph_no);
})