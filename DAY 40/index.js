const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const chat = require("./Schema/app");
var methodOverride = require('method-override');
//Including error handler
const ExpressError = require("./ExpressError");

app.use(methodOverride('_method'))

app.set("views",path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({extended : true}));
app.use(express.json());


//If we use async await we dont write then and catch
async function  main() {
    mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

main()
.then(
    (res)=>{
        console.log("Conncetion installed")
    }
)
.catch(
    (err)=>{
        console.log("Error in conncetion"+err)
    }
)

let port = 8080;

app.listen(port,()=>{
    console.log("App is listining on port no" + port)
})

app.get("/",(req,res)=>{
    res.send("This is root path");
})

app.get("/show",async (req,res)=>{
    let data = await chat.find()
    res.render("show.ejs",{data})
})

app.get("/chats/new",(req,res)=>{
    res.render("new.ejs")
})

app.post("/new",(req,res)=>{
    let {from,msg,to} = req.body;
    let data = new chat(
        {
            from : from,
            msg : msg,
            to : to,
            created_at : new Date()
        }
    )
    data.save()
    .then(
        (res)=>{
            console.log("data subbmitted")
        }
    )
    .catch(
        (err)=>{
            console.log(err)
        }
    )
    res.redirect("/show")
})
//This is a origial code of project
app.get("/chats/:id/edit",async (req,res)=>{
    let {id : newid} = req.params;
    let newdata = await chat.findById(newid);
    res.render("edit.ejs",{newdata});
})

//For experimental purpose of errors middelewares


// app.get("/chats/:id/edit",async (req,res,next)=>{
//     let {id : newid} = req.params;
//     let newdata = await chat.findById(newid);
//     if(!newdata){
//         //for throwing error in async function we wrap error code in next function
//         next(new ExpressError(404,"CHAT NOT found"));
//     }
//     res.render("edit.ejs",{newdata});
// })

//using try catch
// app.get("/chats/:id/edit",async (req,res)=>{
//     try{
//         let {id : newid} = req.params;
//         let newdata = await chat.findById(newid);
//         res.render("edit.ejs",{newdata});
//     }
//     catch(err){
//         next(err);
//     }
// })

//combination of both above
// app.get("/chats/:id/edit",async (req,res,next)=>{
//     try{
//     let {id : newid} = req.params;
//     let newdata = await chat.findById(newid);
//     if(!newdata){
//         //for throwing error in async function we wrap error code in next function
//         next(new ExpressError(404,"CHAT NOT found"));
//     }
//     res.render("edit.ejs",{newdata});
// }
//     catch(err){
//         next(err);
//     }
// })

//The try catch is a bulky as we have to write try catch repetedly
//using the wrapAsync 
//Declare a normal wrapAsync function
//Working
//it is only way to run a function in tricky way as it gets error it trapped here no need to write try caych again and again
//takes a function as a parameter first
// function wrapAsync(fn){
//     //Then returns a function which is executing the function passed as a parameter
//     //and if it gets error it will catch the error
//     return function(req,res,next){
//         fn(req,res,next)
//         .catch(err=>{
//             next(err);
//         })
//     }
// }

// app.get("/chats/:id/edit",wrapAsync(async(req,res)=>{
//     let {id : newid} = req.params;
//     let newdata = await chat.findById(newid);
//     res.render("edit.ejs",{newdata});
// }));

//How to deal with the mangoose errors like validation errors parse errors etc
// app.get("/chats/:id/edit",async (req,res)=>{
//     let {id : newid} = req.params;
//     let newdata = await chat.findById(newid);
//     res.render("edit.ejs",{newdata});
// })

//This is a validation error function fr performng extra operations
// function valdationerror(err){
//     console.log(err); 
//     //This is a validation error
//     console.dir(err.message);
//     //More Operations
// }

// app.use((err,req,res,next)=>{
//     console.log(err.name);
//     if(err.name === "validationError"){
//         //This is a validation error
//         //We can send our own error message
//         // next(new ExpressError(400,err.message));
//         //or a function to send the error message or perform more operation if needed
//         err = valdationerror(err);
//     }   
//     next(err);
// });



app.put("/chats/:id/edit",async(req,res)=>{
    let {id:id} = req.params;
    let {msg:newmsg} = req.body;

    await chat.findByIdAndUpdate(
        id,
        {
            msg : newmsg
        },
        {
        new : true,
        runValidators : true
        }
    );
    res.redirect("/show")
})  

app.delete("/chats/:id/delete",async (req,res)=>{
    let {id:id} = req.params;
    console.log(id);
    await  chat.findByIdAndDelete(id);
    res.redirect("/show");
})


//For experimental purpose of errors middelewares
// app.use((err,req,res,next)=>{
//     console.log("Error Occured"); 
//     let {status = 500, message = "Something went wrong"} = err;
//     res.status(status).send(message);   
// })