let express = require('express');
let app = express();

let port = 8080;



app.listen(port,()=>{
    console.log("listning");
}) 
//Special app.use usage

//to acces a patricular pattern of URL we can use app.use() method starting with a path
//it will match all the requests that start with that path
app.use("/home", (req, res, next) => {
    console.log("Home middleware working");
    next();
});



//Utility Middleware Logger
app.use((req,res,next)=>{
    //WE can also add our own properties to the request object 
    req.time = new Date().toString();
    //req.method - HTTP method (GET, POST, etc.)
    //req.url - URL of the request
    //req.hostname - Hostname of the request
    //req.time - Custom time property we added
    //req.path - Path of the request
    //req.ip - IP address of the client making the request
    console.log(req.method,req.url,req.hostname,req.time,req.path,req.ip);
    next();
});


//we will see othing but loader running continiously on browser
//and also the app..get() route will we not working
//it will run only when app.use() sends res or next operation
app.use((req,res,next)=>{
    console.log("middleware working");
    // res.send("HII");
    next();
})


//next() function

app.use((req,res,next)=>{
    console.log("middleware 2 working");
    return next(); //this will call the next middleware or route handler
    //if we return next() then the next middleware will be called below code will not run
    // console.log("after next");
});



app.get("/",(req,res)=>{
    res.send("root route")
})

app.get("/home",(req,res)=>{
    res.send("home route")
})


//If we do not have any route or middleware to handle the request fromm any of the above
//then it will go to the 404 middleware
//404 middleware should be at the end of all the routes and middlewares
app.use((req,res)=>{
    res.status(404).send("404 Not Found");
})
