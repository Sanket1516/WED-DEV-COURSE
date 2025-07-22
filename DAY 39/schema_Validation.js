const mongoose = require("mongoose");

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

main()
.then(
    (res)=>{
        console.log("Connection Succesful");
    }
)
.catch(
    (err)=>{
        console.log("error occured" + err)
    }
)

const amazonschema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    author : {
        type:[String]
    },
    price : {
        type : Number,
        min : [150,"Too low"]
    }
})

let book = mongoose.model("book",amazonschema);

// let user1 = new book({
//     title : 1245,
//     author: ["saket","Asmith","ALvesh"],
// })

// user1.save()
// .then(
//     (res)=>{
//         console.log(res);
//     }
// )
// .catch(
//     (err)=>{
//         //this all by looking the error only where the objects are nested
//         console.log(err.errors.price.properties.message);
//     }
// )

//While updation to follow conatraints
book.findByIdAndUpdate('6867e9648a91ecac396e18a6', {price:100},{runValidators : true})
.then(
    (res)=>{
        console.log(res);
    }
)
.catch(
    (err)=>{
        console.log(err.errors.price.properties.message);
    }
)

