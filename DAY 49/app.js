const express = require("express");
const app = express();
const session = require("express-session");
const req = require("express/lib/request");
const path = require("path");
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));
const flash = require("connect-flash");


//we will store all the options of server middleware in it will pass later it will be easy to add more options in it
//the below code is commented for understanding
const serveroptions = {
   secret: "mysecretcode",
   resave : false,
   saveUninitialized : true
}

//it is a middleware so
//this is a basic syntax
//now this will create a session id for every session and store it in the cookie
// app.use(session({
//     secret: "mysecretcode", //it is used to signed a session id cokkie
//     //this two to resolve the warnings
//     //it resave the session even if the session is not modified
//     resave: false,
//     //it save the uninitialized seesion to session store
//     saveUninitialized: true,
//   }))

//we will pass that options here
app.use(session(serveroptions));
app.use(flash());

 app.get("/test",(req,res)=>{
  //creating a session variable
  //which will increment with each request if not then initialized
  if(req.session.count){
    req.session.count++;
  }
  else{
    req.session.count = 1;
  }

  res.send(`You send a req ${req.session.count} times`);
 })

 //how to create and use the express sesion

//  app.get("/register",(req,res)=>{
//   //we are accepting the name from query parameter
//   let {name = "guest"} = req.query;
//   req.session.name = name;
//   // console.log(name);
//   // res.send(req.session.name);
//   res.redirect("/hello");
//  })

//  //we can use same variable in another route also without re initializing
//  app.get("/hello",(req,res)=>{
//   res.send(`Hello ${req.session.name}`);
//  });


 //To create and display a flash msg ex uer is registering and we have flas mesg registered
 app.get("/register",(req,res)=>{
  let {name} = req.query;
  req.session.name = name;
  req.flash("success",`User ${name} registered successfully`);
  res.redirect("/hello");
 })

 app.get("/hello",(req,res)=>{
  res.render("new.ejs",{name : req.session.name, msg : req.flash("success")});
 })

const port = 8080;
app.listen(port, () => {
  console.log("Project is running!");
})