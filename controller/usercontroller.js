const User = require("../models/User");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const Product = require("../models/Product");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;



exports.signup=async(req,res)=>{
    //Signup  logic 👇👇👇👇
    let newUser  = await User.create(req.body);
    

    const token = jwt.sign({id:newUser._id},process.env.SECRET);
    res.status(201).json({
        newUser,
        token,
        status:true,
        message:"User created !!"

    })

}
exports.getAllUsers = async(req,res)=>{
    let allUsers = await User.find();

    res.status(200).json({
        message:"users found",
        allUsers

    })

}

exports.login = async(req,res,next)=>{

    const {email ,password} = req.body;
    if(!email || !password){
        return next(new AppError("Kindly provide all credentials " , 400));

    }

    const user = await user.findOne({email});

    if(!user){
        return next(new AppError("No user exists",404));

    }
    const auth = await user.authenticate(password);
    if(!auth){
        return next(new AppError(400,"Invalid credentials"));

    }
    const token = jwt.sign({id:_id},process.env.SECRET);

    res.status(200).json({
        token,
        user
    })
}
exports.addToCart = async(req,res,next)=>{
try{
    let userId = req.params.id;
    let product = req.body.product;

    let user = await User.findById(userId);
    // let product = await Product.findById(productId);


    if(!user){
        return next(new AppError("user not found ",404));

    }
    if(!product){
        return next(new AppError("product not found ",404));

    }
    await user.addToCart(product);


    res.status(200).json({
        message:`${product.name} added to cart of ${user.name}` 
    })

}catch(e){
    res.status(400).json({
        message:e.message
    })
}
}

exports.getCart = async(req,res,next)=>{
    let id = req.params.id;
    let user = await User.findById(id);
    // let products = [];

    let products = await Promise.all(user.cart.map(async id => {
        return await Product.findById(new ObjectId(id));
    }));

    res.status(200).json({
        message:"User Cart",
        userCart:user.cart,
        products

    })

}




// /users/:userId/cart