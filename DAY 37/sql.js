const mysql = require("mysql2");

const con = mysql.createConnection({
host : "localhost",
user:"root",
database:"college",
password:"kismatt@1516"
});

// try{
//     let query = "create table sanket (id varchar(50) primary key,username varchar(50) unique,email varchar(50) unique not null,password varchar(50) not null)";
//     con.query(query,(err,result)=>{
//         if (err) throw err;
//         console.log(result);
//         con.end();
//     })
// }catch{
//     console.log(err);
// }


// //Single Entry
// try{
//     let query = "insert into sanket (id,username,email,password) values (?,?,?,?)";

//     let data = ["31","sanket45","sanket1316@gmail.com254","12342545"];
            
//     con.query(query,data,(err,result)=>{
//         if(err) throw err;
//         console.log(result);
//         con.end();
//     })
// }catch{
//     console.log(err);
// }

// //Multiple entry
// try{
//     let query = "insert into sanket (id,username,email,password) values ?";
//     let data = [["2","sanket2","sanket1316@gmail.com2","12342"],
//                 ["3","sanket3","sanket1316@gmail.com3","12343"],
//             ];
//     con.query(query,[data],(err,result)=>{
//         if(err) throw err;
//         console.log(result);
//         con.end();
//     })
// }catch{
//     console.log(err);
// }