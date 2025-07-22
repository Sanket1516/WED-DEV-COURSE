const express = require('express');
const app = express();
const ExpressError = require('./ExpressError');

let port = 8080;

app.listen(port, () => {
    console.log("listening on port", port);
});     

//Access to admin route
//this will thorow when the normal user tries to access the admin route
//and it will be handled by the error handler middleware
app.get("/admin",(req,res)=>{
    console.log("Admin route accessed");
    throw new ExpressError(403,"Access Forbidden");
})


//This is User Defined Error Handler Middleware
app.use((err,req,res,next)=>{
    let {status,message} = err;
    res.status(status).send(message);
})