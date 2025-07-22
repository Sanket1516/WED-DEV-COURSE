let http = require("http");
let fs = require("fs");

let app = http.createServer((req,res)=>{
let text = fs.readFileSync("file.html","utf-8");
res.end(text);    
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});