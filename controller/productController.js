const Product = require("../models/Product");
const AppError = require("../utils/AppError");


exports.getAllProducts = async(req,res)=>{

    let products = await Product.find();
    res.status(200).json({
        message:"Products found",
        products
    })

}

exports.createProduct = async(req,res)=>{
    let newProduct = await Product.create(req.body);
    res.status(201).json({
        message:"product created",
        newProduct

    })
}
exports.getSpecificProduct = async(req,res,next)=>{
    let id = req.params.id;
    let product = await Product.findById(id);

    if(!product){
        return next(new AppError("Product not found",404));

    }
    res.status(200).json({
        message:"Product Found",
        product 
    })
}

exports.getProductByCategory = async(req,res,next)=>{
    let category = req.params.category;
    console.log("inside category method")
    let products = await Product.find({category});

    //error handler 👇👇👇

    res.status(200).json({
        message:"Products of a specific category",
        products

    })

}
