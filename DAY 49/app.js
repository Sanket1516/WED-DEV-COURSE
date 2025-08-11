const express = require("express");
const app = express();
const session = require("express-session");
const req = require("express/lib/request");

//it is a middleware so

//this is a basic syntax
//now this will create a session id for every session and store it in the cookie
app.use(session({
    secret: "mysecretcode", //it is used to signed a session id cokkie
    //this two to resolve the warnings
    resave: false,
    saveUninitialized: true,
  }))


 app.get("/test",(req,res)=>{
    res.send("This is the test route");
 })


port = 8080;
app.listen(port, () => {
  console.log("Project is running!");
})