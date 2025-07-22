const mongoose =  require("mongoose");

//to create the connection
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

//run a async function that will return a promise
main()
//if resolved
.then(
    ()=>{
        console.log("Connection Established")
    }
)
//if rejected
.catch(
    (err)=>{
        console.log(err);
    }
)

//To define the schema for our documents in a collection
const userSchema = mongoose.Schema({
    name : String,
    email : String,
    age : Number
});

//To create a collecetion in a database
const User = mongoose.model( "User" , userSchema );

//Insert in database
// let user1 = new User({
//     name : "Sanket Mali",
//     email : 'sanketmali1516@yahho.com',
//     age : 21
// });

// let user2 = new User({
//     name : "Jayesh Mali",
//     email : 'jayesh1516@yahho.com',
//     age : 14
// })

//it wil also return a promise 
// user1.save();

//to print the data on the console we can wrrite then and catch after that
// user2.save()
// .then(
//     (res)=>{
//         console.log(res);
//     }
// )
// .catch(
//     (err)=>{
//         console.log(err);
//     }
// )

//Insert Multiple entery in database
// User.insertMany([
//     {name:'john' , email:'john@gmail.com',age:18},
//     {name:'mark' , email:'mark@gmail.com',age:14},
//     {name:'sujen' , email:'sujen@gmail.com',age:21}
// ])
// .then(
//     (res)=>{
//         console.log(res);
//     }
// )
// .catch(
//     (err)=>{
//         console.log(err);
//     }
// )

//To find the data
//to find all data
// User.find({})
// .then(
//     (res)=>{
//         console.log(res);
//     }
// )
// .catch(
//     (err)=>{
//         console.log(err);
//     }
// )

//to findMany(find only)/FindOne
// User.find({age:{$gt:20}})
// .then(
//     (res)=>{
//         console.log(res);
//     }
// )
// .catch(
//     (err)=>{
//         console.log(err);
//     }
// )

//find one
// User.findOne({age:{$gt:20}})
// .then(
//     (res)=>{
//         console.log(res);
//     }
// )
// .catch(
//     (err)=>{
//         console.log(err);
//     }
// )

//Many times we only find the user by the id the special function is 

// User.findById("686694d3ce781a796895118d")
// .then(
//     (res)=>{
//         console.log(res)
//     }
// )
// .catch(
//     (err)=>{
//         console.log(err);
//     }
// ) 

//Update in database
// User.updateMany({name:"john"},{age:55})
// .then(
//     (res)=>{
//         console.log(res);
//     }
// )
// .catch(
//     (err)=>{
//         console.log(err);
//     }
// )

//Update One
// User.updateOne({name:"sujen"},{age:55})
// .then(
//     (res)=>{
//         console.log(res);
//     }
// )
// .catch(
//     (err)=>{
//         console.log(err);
//     }
// )

//it will also give us the updated document in result
// Findone and update
// User.findOneAndUpdate({name:"sujen"}, {age:100},{new : true}) //we have written new:true key value for viewing the currentyly updated values(they are options parameters)
// .then(
//     (res)=>{
//         console.log(res);
//     }
// )
// .catch(
//     (err)=>{
//         console.log(err);
//     }
// )

//findonebyid and update
// User.findByIdAndUpdate('68661b66f1de306bb98e92fe', {age:100},{new : true})
// .then(
//     (res)=>{
//         console.log(res);
//     }
// )
// .catch(
//     (err)=>{
//         console.log(err);
//     }
// )


//Delete
// User.deleteOne({name:"mark"})
// .then(
//     (res)=>{
//         console.log(res);
//     }
// )
// .catch(
//     (err)=>{
//         console.log(err);
//     }
// )

//delete many

// User.deleteMany({name:"mark"})
// .then(
//     (res)=>{
//         console.log(res);
//     }
// )
// .catch(
//     (err)=>{
//         console.log(err);
//     }
// )

//findoneanddelete
// User.findOneAndDelete({name:"mark"})
// .then(
//     (res)=>{
//         console.log(res);
//     }
// )
// .catch(
//     (err)=>{
//         console.log(err);
//     }
// )

//findbyidanddelete
// User.findByIdAndDelete('68661b68bcfaafe602bae93e')
// .then(
//     (res)=>{
//         console.log(res);
//     }
// )
// .catch(
//     (err)=>{
//         console.log(err);
//     }
// )