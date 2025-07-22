//we define schema and model differenty as we can have the many models and shema for a singlr website

const mongoose = require('mongoose');

const chat_schema = mongoose.Schema(
    {
        from : {
            type : String,
            required : true
        },
        to : {
            type: String,
            required : true
        },
        msg : {
            type : String
        },
        created_at : {
            type: Date,
            required : true
        }
    }
)

const chat = mongoose.model("chat",chat_schema);

module.exports = chat;