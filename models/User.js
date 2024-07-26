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
    },
    cart:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product"
        }
    ]

})
userSchema.methods.authenticate = function(password){
    return this.password === password;
}
userSchema.methods.addToCart = async function(productId){
    this.cart.push(productId);
    await this.save();


}

const User = new mongoose.model("User",userSchema);

module.exports = User;  