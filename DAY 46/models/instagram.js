const mongoose = require("mongoose");

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/customers');
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

const userSchema = mongoose.Schema(
    {
        username : String,
        email : String
    }
)

const postSchema = mongoose.Schema({
    content : String,
    likes : Number,
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
    }
})

const user = mongoose.model("user",userSchema);

const post = mongoose.model("post",postSchema);

// const addData = async ()=>{
//     let user1 = new user({
//         username : "Sanket Mali",
//         email : "sanketmali1516@gmail.com"
//     })

//     user1.save();
// }

// addData();

// const addData = async()=>{
//     let user1 = await user.findOne({username : "Sanket Mali"});

//     let post1 = new post({
//         content : "Hii iam ready",
//         likes : 45
//     })

//     let post2 = new post({
//     content : "I am full stack dev",
//     likes : 50
//     })

//     post1.user = user1;
//     post2.user = user1;

//     let res1 = await post1.save();
//     let res2 = await post2.save();

//     console.log(res1,res2);
// }

// addData();

//now lets check the data 
const readData = async()=>{

    //In this if we pass another parameter after user populate then it will only show that data of the object || means in tis case it willshow the username and id only in the document  
    let result = await post.findOne({}).populate("user","username");
    console.log(result);
}


readData();