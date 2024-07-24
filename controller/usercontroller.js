const User = require("../models/User");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/AppError");


exports.signup=async(req,res)=>{
    //Signup  logic 👇👇👇👇
    let newUser  = await User.create(req.body);
    

    const token = jwt.sign({id:newUser._id},process.env.SECRET);
    res.status(201).json({
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
