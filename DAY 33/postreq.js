const express = require("express");
const app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.json());

const port = 8080;

app.listen(port,()=>{
    console.log("Server is listning");
})

app.post("/register",(req,res)=>{
    let {name,pass} = req.body;
    res.send(`Your name is ${name}`);
    console.log(pass);
    console.log(name);
})