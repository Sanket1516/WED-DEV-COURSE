const express = require("express");

let app = express();

let port = 8080;

app.listen(port,(req,res)=>{
    console.log(`server is running on port ${port}`);
})

app.get("/ig/:username",(req,res)=>{
    const data = require("./data.json");
    let {username} = req.params;
    let userdata = data[username];
    
    console.log(userdata);
    res.render("username.ejs",{userdata});
    
})