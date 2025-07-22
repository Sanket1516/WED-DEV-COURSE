let express = require("express");
let app = express();
let path = require("path");
let port = 8080;
const { v4: uuidv4 } = require('uuid');
var methodOverride = require('method-override');
app.use(methodOverride('_method'))
app.set("view engine","ejs");

app.use(express.urlencoded({extended : true}));

app.use(express.json());

//to access ejs and css
app.set("views" , path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname, "public")));
//array for users data

let posts = [
    {
        id : uuidv4(),
        username : "sanket mali",
        content : "I am coder"
    },
    {
        id : uuidv4(),
        username : "Lavesh Patil",
        content : "I am Droner"
    },
    {
        id : uuidv4(),
        username : "Asmith patili",
        content : "I am selected"
    }
]

app.listen(port,()=>{
    console.log("Server is listning");
})

//api for the main page
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})

//To add some data we have two step process 
//S1) we use the get req for getting the form and when thje form is submitted and send the post req
//S2) that post req is accepted and the data is post

//S1
app.get("/posts/new",(req,res)=>[
    res.render("new.ejs")
])

//S2
app.post("/posts",(req,res)=>{
    let {username , content } = req.body;
    posts.push({
        id : uuidv4(),
        username : username,
        content : content
    })
    res.redirect("/posts");
})

//To read the data of the particular post 
app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    //This is imp common to find the given id
    let post = posts.find( (p) =>
        id == p.id
     )
    res.render("show.ejs",{post});
})

//To update some data we have two step process 
//S1) we use the get req for getting the form and when thje form is submitted and send the post req
//S2) that post req is accepted and the data is post

//S1
app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id == p.id );

    res.render("edit.ejs",{post});
})


//S2
app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let newcontent = req.body.content;
    let post = posts.find((p)=> id == p.id);
    post.content = newcontent;
    res.redirect("/posts");
})

//Delete operation
app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params;
    //update the posts array with the while inserting all post except the the post having given id
    posts = posts.filter((p)=> id != p.id);
    res.redirect("/posts");
})