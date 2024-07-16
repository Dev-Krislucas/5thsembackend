const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({ 
    name:{
        type:String,
        required:[true,'A user must have name']
    },
    email:{
        type:String,
        required:[true,'A user must have email']
    },
    password:{
        type:String,
        required:[true,'A user must have password']
    },
    city:{
        type:String,
        required:[true,'A user must have a city'],
        lowercase:true
    },
    number:{
        type:String,
        required:[true,'A user must have number']
    }

})


const User = new mongoose.model("User",userSchema);

module.exports = User;  