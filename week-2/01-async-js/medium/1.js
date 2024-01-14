const fs = require("fs");

function read(write){
    fs.readFile("a.txt", "utf-8",(err, data) => {
        if(err){
            console.log(err);
            return;
        }
        else{
            data = data.replace(/\s+/g, " ").trim();
            write(data);
        }
    });
}

function write(text){
    fs.writeFile("a.txt",text,"utf-8", (err) => {
        if(err){
            console.log("error occured", err);
        }
    });
}

read(write);