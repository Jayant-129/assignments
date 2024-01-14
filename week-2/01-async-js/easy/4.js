const fs = require("fs");
const data = "hello everyone my name is jayant agrawal  i am form india how are you";
fs.writeFile("output.txt",data,"utf-8" ,(err) => {
    if(err){
        console.log(err);
    }
});