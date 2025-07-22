//"C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" -u root -p
// ===================
// REQUIRED PACKAGES
// ===================
const { v4: uuidv4 } = require('uuid');
const express = require('express');
const sql = require('mysql2');
const path = require("path");
const { faker } = require('@faker-js/faker');
const methodOverride = require('method-override');

// ===================
// APP CONFIG
// ===================
const app = express();
const port = 8080;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// View Engine Setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// ===================
// DATABASE CONNECTION
// ===================
let con = sql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'college',
    password: 'kismatt@1516',
});

// ===================
// START SERVER
// ===================
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

// ===================
// ROUTES
// ===================

// Root Route - Show number of users
app.get("/", (req, res) => {
    let q = "SELECT COUNT(*) FROM sanket";
    try {
        con.query(q, (err, result) => {
            if (err) throw err;
            let data = result[0]["count(*)"];
            res.render("home.ejs", { data });
        });
    } catch (err) {
        console.log(err);
    }
});

// Show all users
app.get("/users", (req, res) => {
    let q = "SELECT * FROM sanket";
    try {
        con.query(q, (err, result) => {
            if (err) throw err;
            res.render("showusers.ejs", { data: result });
        });
    } catch (err) {
        console.log(err);
    }
});

// Show edit form for user
app.get("/users/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM sanket WHERE id = '${id}'`;
    con.query(q, (err, result) => {
        try {
            if (err) throw err;
            let data = result[0];
            res.render("makeedit.ejs", { data });
        } catch (err) {
            console.log(err);
        }
    });
});

// Update user if password matches
app.patch("/users/:id/edit", (req, res) => {
    let { id } = req.params;
    let email = req.body.Email;
    let password = req.body.Password;
    let username = req.body.name;

    let passq = `SELECT password FROM sanket WHERE id = '${id}'`;
    con.query(passq, (err, result) => {
        try {
            if (err) throw err;
            let passwordo = result[0]["password"];
            if (passwordo == password) {
                let q = `UPDATE sanket SET email='${email}', username='${username}' WHERE id = '${id}'`;
                con.query(q, (err, result) => {
                    try {
                        if (err) throw err;
                        res.send("updated successfully");
                    } catch (err) {
                        console.log(err);
                    }
                });
            } else {
                res.send("password is wrong");
            }
        } catch (err) {
            console.log(err);
        }
    });
});

//Add new user to the data base

app.get("/users/add",(req,res)=>{
    res.render("addnewuser.ejs");
})

//update the new user with database

app.post("/users/add/new",(req,res)=>{
    let id = uuidv4();
    let {username,email,password} = req.body;
    let q = `insert into sanket (id,username,email,password) values ('${id}','${username}','${email}','${password}')`;
    con.query(q,(err,result)=>{
        try{
            if (err) throw err;
            res.redirect("/users");
        }catch(err){
            console.log(err);
        }
    })
})
//delete uesr form
app.get("/users/:id/deluser",(req,res)=>{
    let {id} = req.params;
    res.render("deleteuser.ejs",{id});
})

//delete user
app.delete("/users/:id/delete",(req,res)=>{
    let {id} = req.params;
    let {email : emailform,password : passwordform} = req.body;
    console.log(passwordform);
    console.log(emailform);
    let q =`select email,password from sanket where id='${id}'`;
    try{
    con.query(q,(err,result)=>{
            if (err) throw err;
            let {email,password} = result[0];
            console.log(email);
            console.log(password);

            if(emailform === email && passwordform === password){
                let q2=`delete from sanket where id = '${id}'`;
                try{
                    con.query(q2,(err,result)=>{
                    console.log(result); 
                    res.redirect("/users");
                })
                }catch(err){
                    console.log(err);
                }
            }
            else{
                res.send("Wrong Credentails");
            }
    })
    }catch(err){
        console.log(err);
    }
});
// ===================
// FAKE USER GENERATOR (COMMENTED OUT)
// ===================
/*
let createRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};

let query = "INSERT INTO sanket(id, username, email, password) VALUES ?";
let data = [];
for (let i = 1; i <= 100; i++) {
    data.push(createRandomUser());
}

try {
    con.query(query, [data], (res, err) => {
        if (err) throw err;
        console.log(res);
        con.end();
    });
} catch (err) {
    console.log(err);
}
*/


// app.get("/users/try",(req,res)=>{
//     
// })