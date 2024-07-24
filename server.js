const express  =  require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const mongoose= require("mongoose");
const http = require("http");



require("dotenv").config();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
const server = http.createServer(app);

// Setting the keepAliveTimeout and headersTimeout
server.keepAliveTimeout = 120000; // 120 seconds
server.headersTimeout = 120000; // 120 seconds


//Connecting to mongoose

mongoose.connect(process.env.DB).then((res)=>{console.log("Connected to database")}).catch(err=>{console.log(err)});


//Routes 👇👇👇👇

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productroutes');
app.use("/user",userRoutes);
app.use("/product",productRoutes);


//Listening to PORT 👇👇
const port = process.env.PORT || 5000;
server.listen(port,()=>{
    console.log(`App listening at port ${process.env.PORT}`);
})


