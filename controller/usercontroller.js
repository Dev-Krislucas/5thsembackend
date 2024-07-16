const User = require("../models/User");
const jwt = require("jsonwebtoken");


exports.signup=async(req,res)=>{
    //Signup  logic 👇👇👇👇
    let newUser  = await User.create(req.body);
    

    const token = jwt.sign({id:newUser._id},process.env.secret);
    res.status(200).json({
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

exports.login = async()=>{

}