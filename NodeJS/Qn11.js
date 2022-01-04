const fs = require('fs');
const filename = "./bookObj.json";
var book_str = "";


fs.readFile(filename, function(err, data)
{
    if(err)
        return console.error(err);

    const book = JSON.parse(data.toString());

    for(let i of book)
    {
        book_str += i.bookId + " : " + i.bookName + " : " + i.author + " : " + i.price;
    }
    console.log(book_str);

    fs.writeFile("./book.txt", book_str, function(err){
        if (err) 
            console.error("An error occured: " + err);
        else
            console.log("Successfully written to file");
    });
});

