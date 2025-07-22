const express = require("express");
const app = express();

const port = 8080;

app.set("view engine","ejs");
app.listen(port,()=>{
    console.log("Server is listining");
})

app.get("/",(req,res)=>{
    res.render("HOME");
})

//Pure EJS

//Embedde Interpolation
//we can print any value or logic in html code only 

//Done in home .ejs file


//PArsing data from app.js to home.ejs

app.get("/parsing",(req,res)=>{
    let followers = ["sanket","bob","john","adam"];
    let num = Math.floor(Math.random()*6)+1;
    let name = "Rahul";
    res.render("parse.ejs",{num,name,followers});
})


//if - else and loops
//in parse.ejs


//ig page

app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    res.render("ig.ejs",{username});
})
