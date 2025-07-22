const mongoose = require("mongoose");
const chat = require("./Schema/app");

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

const data = [
  { from: "Sanket", to: "asmith", msg: "Hey there!", created_at: new Date() },
  { from: "Raj", to: "emma", msg: "How's it going?", created_at: new Date() },
  { from: "Priya", to: "john_d", msg: "Are we meeting today?", created_at: new Date() },
  { from: "Aman", to: "lucy_m", msg: "Got your email.", created_at: new Date() },
  { from: "Neha", to: "mike23", msg: "Thanks for the update.", created_at: new Date() },
  { from: "Ravi", to: "claire", msg: "Let’s connect tomorrow.", created_at: new Date() },
  { from: "Tina", to: "daniel", msg: "Can you call me?", created_at: new Date() },
  { from: "Yash", to: "natalie", msg: "Check the doc I sent.", created_at: new Date() },
  { from: "Anjali", to: "robert_k", msg: "Let’s schedule a call.", created_at: new Date() },
  { from: "Deepak", to: "sophie", msg: "See you at 5.", created_at: new Date() },
];

chat.insertMany(data)
.then(
    (res)=>{
        console.log(res);
    }
)
.catch(
    (err)=>{
        console.log(err);
    }
)