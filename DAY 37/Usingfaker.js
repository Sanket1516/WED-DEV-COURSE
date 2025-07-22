const { faker } = require('@faker-js/faker');
const sql = require('mysql2')

let con = sql.createConnection({
  host : 'localhost',
  user:'root',
  database:'college',
  password : 'kismatt@1516',
})

 let createRandomUser = ()=>{
  return [
    faker.string.uuid(),
    faker.internet.username(), 
    faker.internet.email(),
    faker.internet.password(),
   ];
}

let query = "insert into sanket(id,username,email,password) values ? ";
let data = [];
for(let i = 1 ; i<=100;i++){
  data.push(createRandomUser());
}
try{
con.query(query,[data],(res,err)=>{
  if (err) throw err;
  console.log(res);
  con.end();
})
}catch(err){
console.log(err);
}
