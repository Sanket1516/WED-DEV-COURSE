const mongoose = require("mongoose");

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

main()
.then(
    ()=>{
        console.log("Connection Established")
    }
)
.catch(
    (err)=>{
        console.log(err);
    }
)

//by this the address object is also giving one another id by default  
// const userSchema = mongoose.Schema({
//     name : {
//         type : String
//     },
//     address : [
//         {
//             location : 
//             {
//                 type : String,
//             },
//             country : {
//                 type : String,
//             },
//         },
//     ],
// });

//To remove it 
const userSchema = mongoose.Schema({
    name : {
        type : String
    },
    address : [
        {
            _id : false,
            location : 
            {
                type : String,
            },
            country : {
                type : String,
            },
        },
    ],
});

const User = mongoose.model("User",userSchema);

let addUser = async ()=>{
    let user1 = new User({
    name : "sanket mali",
    address : [
    {
        location : "warvade",
        country : "India",
    },
    {
        location :  "NMIMS",
        country : "India",
    },
],
});

let res = await user1.save();
console.log(res);
}

addUser();