//just look for router functionality dont look for the apis or tey to understand they are demo

const express = require("express");
const app = express();

//require the created routes 
let users = require("./routes/users.js");
let posts = require("./routes/posts.js");

//then declare the entry route for /users 
//it will check in users the particular api req starting from /users in the users routes
app.use("/users",users);
app.use("/posts",posts);
app.get("/",(req,res)=>{
    res.send("Home Route");
})

app.listen(8080,()=>{
    console.log("listening on port 8080");
});








