const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");


let port = 8080;

app.listen(port, () => {
    console.log("listening on port", port);
});

const access = (req, res, next) => {
    let {access_token} = req.query;
    if(access_token === "kismatt@1516"){
        console.log("Access granted");
        next();
    }
    else{
        //We are sending our own errors 
        throw new ExpressError(401,"Access Denied");
    }
};

app.get("/api", access , (req, res) => {
    res.send("IMP DATA");
});


//This is User Defined Error Handler Middleware
//It takes four parameters
//err - the error object extra
// app.use((err, req, res, next) => {
//     console.log(err);
//     //It calls the another error handling middleware with passing the error as a argument
//     //By default it is express default error handler is called
//     next(err);
// });

//if default error handler is called then the staus code and the error msg is automatically sends back on the console of webpage
//Not for our custom error handler


//This is our custom error handler middleware which will handle there own error without calling exprress default error handler
// app.use((err, req, res, next) => {
//     let {status, message} = err;
//     res.status(status).send(message);
// });

//Now this will handle the error which are thrown by us explicitly what is some error occured like a=a
//In this case the error obj will have status code 500 and the message will be the error message
app.use((err, req, res, next) => {
    console.log("Error Occured");
    //status = 500 says if the error object does not have a status code then it will be 500  FACT = expreess also sets status default value to 500
    //message = "Something went wrong" says if the error object does not have a message
    //but err obj carries its own message it occurs rarely
    let {status = 500, message = "Something went wrong"} = err;
    res.status(status).send(message);
});
