const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[1,"Product must have a name"]


    },
    image:[{
        type:String
    }],
    
    price:{
        type:Number,
        required:[1,"Product must have a name"]
        

    },
    category:{
        type :String,
        enum:["women","men","shoe","accessories"]

    },
    description:{
        type:String,
        default:"Standard prodduct by KKart Pvt Ltd"
    }
}) 


const Product= new mongoose.model("Product",productSchema);

module.exports = Product;