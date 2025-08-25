const express = require("express");
const app = express();
const session = require("express-session");
const path = require("path");
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));
const flash = require("connect-flash");

const serveroptions = {
   secret: "mysecretcode",
   resave : false,
   saveUninitialized : true
}

app.use(session(serveroptions));
app.use(flash());
//for local variables
app.use((req,res,next)=>{
   res.locals.successmsg = req.flash("success");
   res.locals.errormsg = req.flash("error");
   next();
})

 app.get("/register",(req,res)=>{
  let {name="ananyomous"} = req.query;
  req.session.name = name;
  if(name === "ananyomous"){
    req.flash("error", "User not registered");
  }
  else{
   req.flash("success", "User registered successfully");
  }
  res.redirect("/hello");
 })

 app.get("/hello",(req,res)=>{
   //we can store them locally to resuse and we dont have to pas them explicitly in ejs templete they will be automatically accepted
   // res.locals.success = req.flash("success");
   // res.locals.error = req.flash("error");
   //or we can pass them as a middleware and store there
  res.render("new.ejs",{name : req.session.name});
  //all these three methods will work same as the one we implimented before
  //But benifit of this is it make the code less bulky
 })

const port = 8080;
app.listen(port, () => {
  console.log("Project is running!");
})