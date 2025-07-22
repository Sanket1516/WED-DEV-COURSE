const express = require("express");
const app = express();
let port = 8080;

app.listen(port, () => {
    console.log("listening on port", port);
});

//For Access Token Middleware
//This middleware checks for an access token in the query parameters of the request
//Dont give the query paramenter in the URL in browser like this:
//http://localhost:8080/api?access_token="12345";
//correct one is
//http://localhost:8080/api?access_token=12345;
//same for strings

// app.use("/api", (req, res, next) => {
//     let {access_token} = req.query;
//     if(access_token === "kismatt@1516"){
//         console.log("Access granted");
//         next();
//     }
//     else{
//         console.log("Access denied");
//         return res.send("Access denied");
//     }
// });


//store the only function in a variable
//removed app.use("/api", access);
const access = (req, res, next) => {
    let {access_token} = req.query;
    if(access_token === "kismatt@1516"){
        console.log("Access granted");
        next();
    }
    else{
        //We are sending our own errors 
        throw new Error("Access Denied");
    }
};


//Using the access middleware in the route
//if access is granted then the next function will be called
//if access is denied then the response will be sent and the next function will not be called
app.get("/api", access , (req, res) => {
    res.send("IMP DATA");
});