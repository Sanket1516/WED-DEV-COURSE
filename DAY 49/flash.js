const express = require("express");
const app = express();
const session = require("express-session");
const req = require("express/lib/request");
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