const express = require("express");
const app = express();
const port = 8080;

// Start the server and listen on specified port
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

//for get the req or res from the user / to communicatee with the user

//we can send any ting in res.send like string,object,html code,image,audio,etc;
//what will it send


app.use((req,res)=>{
    console.log("Someone is comed");
    res.send("I am sanket Mali");
});

app.use((req,res)=>{
    code="<h1>HII i am sanket</h1>"
    res.send(code);
})


// ROUTES

// Root route
app.get("/", (req, res) => {
    res.send("Root path");
});

// Custom route: /home/iam
app.get("/home/iam", (req, res) => {
    res.send("Home page");
});

// Custom route: /contactus
app.get("/contactus", (req, res) => {
    res.send("Contact us page");
});

// Catch-all route (handles any undefined routes)

app.get("*", (req, res) => {
    res.send("Wrong path");
});

app.get("/:username/:DOB",(req,res)=>{
    let {username,DOB} = req.params;
    console.log(username,DOB);
    res.send(`you are seeing ${username} ${DOB} page`);
});

app.get("/serach",(req,res)=>{
        let {q,skill} = req.query;
    //if nothing is serached
    if(!q&&!skill){
        res.send("Nothing is serached");
    }
    else{
    res.send(`You have serached for ${q} ${skill}`);
    }
})