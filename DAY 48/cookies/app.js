//The only code is below commented out


// This line imports the 'express' framework, which is used to create our web server.
const express = require('express');

// This line creates an instance of an Express application.
// We'll use this 'app' object to define routes and start the server.
const app = express();

// This line imports the 'cookie-parser' middleware.
// Middleware are functions that have access to the request object, the response object,
// and the next middleware function in the application’s request-response cycle.
// 'cookie-parser' is specifically for handling cookies.
const cookieparser = require('cookie-parser');

// This line tells our Express app to use the 'cookie-parser' middleware.
// This is necessary to be able to read and write cookies in our routes.
app.use(cookieparser("our_secretcode"));


// This defines a GET route at the path "/setcookies".
// When a user visits this URL, the function inside will be executed.
app.get("/setcookies",(req,res)=>{
  // 'res.cookie()' is a method provided by Express to set a cookie.
  // The first argument is the cookie's name ("name").
  // The second argument is the cookie's value ("sanket").
  res.cookie("name","sanket");

  // We can set multiple cookies in the same route.
  res.cookie("age", "20");

  // After setting the cookies, we send a response back to the user.
  res.send("cookies set successfully");
})


// This defines another GET route at the path "/getcookies".
app.get("/getcookies",(req, res)=>{
  // 'req.cookies' is an object provided by the 'cookie-parser' middleware.
  // It contains all the cookies sent by the client.
  // We're using object destructuring to get the value of the "name" cookie.
  // We also provide a default value of "none" in case the "name" cookie doesn't exist.
  let {name="none"} = req.cookies;

  // We send a response back to the user, displaying the value of the "name" cookie.
  res.send(`your name is ${name}`);
})


// This line starts the server and makes it listen for incoming requests on a specific port.
app.listen(8080, () => {
  // Once the server is running, this message will be logged to the console.
  console.log('Server is running on port 3000');
});

//for sending signed cookies 
app.get("/getSignedCookies",(req,res)=>{
  res.cookie("name","sanket",{signed:true});
  res.cookie("age",20,{signed:true});
  res.send("Cookie Send");
})

//for verifying the signed cookie
app.get("/verify",(req,res)=>{
  let {name="safety issues",age="safety issues"} = req.signedCookies;
  res.send(`Hii ${name} your age is ${age}`);
})

//only code
// const express = require('express');
// const app = express();
// const cookieparser = require('cookie-parser');

// app.use(cookieparser());


// app.get("/setcookies",(req,res)=>{
//   res.cookie("name","sanket");
//   res.cookie("age", "20");
//   res.send("cookies set successfully");
// })


// app.get("/getcookies",(req, res)=>{
//   let {name="none"} = req.cookies;
//   res.send(`your name is ${name}`);
// })


// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });