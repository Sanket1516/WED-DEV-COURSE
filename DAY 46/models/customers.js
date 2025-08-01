//one to many

const mongoose = require("mongoose");

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/customer');
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


//DataBase Middlewares 
//Two types pre and post mongoose middlewares
//this function is caled as next as defaut to that function which is written in method_name and pass the data as a argument
//Syntax : Schema_name.pre or post ("method_name",async (data)=>{//block of code})

customerSchema.post("findByIdandDelete",async(data)=>{
    if(customer.orders.length > 0){
        let res1 = await order.deleteMany({ _id : {$in : customer.orders}})
    }
    console.log(res1);
})




let orderSchema = mongoose.Schema({
    item : String,
    price : Number,
});

let customerSchema = mongoose.Schema({
    name : String,
    //array of orders
    orders : [
        //where ecah element of order posseses this schema
        {
            //It is way to pass a refrence of a document from another table
            type : mongoose.Schema.Types.ObjectId,
            //It says from where to take the refrence means table
            ref : 'order',
        }
    ]
});

const order = mongoose.model('order', orderSchema);
const customer = mongoose.model("customer", customerSchema);

const addCustomer = async()=>{
    let cus1 = new customer({
        name : "sanket mali",
        orders : []
    })

    let order1 = await order.findOne({item : "pizza"});
    let order2 = await order.findOne({item : "burger"});
    let order3 = await order.findOne({item : "coke"});

    

    cus1.orders.push(order1);
    cus1.orders.push(order2);
    cus1.orders.push(order3);

    //as we are passing the whle order documemnt and aslo seesing the whole document in the res but in mongo db server they are saved as a id referene only
    let res = await cus1.save();
    console.log(res);
}


addCustomer();



//now we are done with inserting the object now we will take his objects as a refrence
let addOrders = async()=>{
    let res = await order.insertMany([
        {
            item : "pizza",
            price : 100,
        },
        {
            item : "burger",
            price : 50,
        },
        {
            item : "coke",
            price : 20,
        }
    ]);
    console.log(res);
}

addOrders();



//Using Populate IMP 
// let findCustomer = async ()=>{
//     let res = await customer.find({}).populate("orders") //populate argument is a field which containing the refrence || in our case the field is the orders from the customer table || as we are finding in customer then the field should be also of customer
//     //now this will return the objects in place of the _id now
//     // console.log(res);
//     //to show and open the object directly e can write res[0] this willnow show the whole document either than only showing [object] like this
//     console.log(res[0]);
// }

// findCustomer();