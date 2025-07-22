const sql = require("mysql");
const con = sql.createConnection({
    host : "localhost",
    user : "root",
    password : ""
})
con.connect((err)=>{
    if (err) throw err;
    console.log("Connection Established");
    const cd = "create database if not exists mydb";
    con.query(cd,(err,res)=>{
        if (err) throw err;
        console.log("Database Created");
    const ud = "use mydb";
    con.query(ud,(err,res)=>{
        if (err) throw err;
        console.log("using the my db database");
    const ct = "create table if not exists students( id int auto_increment primary key,name varchar(200),course varchar(20))";
    con.query(ct,(err,res)=>{
        if (err) throw err;
        console.log("Table Created ");
    const it = "insert into students (name , course) values ?";
    const values = [
        ["Sanket","CS"],
        ["Asmith","IT"],
        ["Pinak","AIML"]
    ];
    con.query(it,[values],(err,res)=>{
        if (err) throw err;
        console.log("Values Inserted " + res.affectedRows);
    const pt = "select * from students";
    con.query(pt,(err,res)=>{
        if (err) throw err;
        console.log("The table data is : ");
        console.table(res); 
        con.end();
    })
    })
    })
    })
    })
})
