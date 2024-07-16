const express  =  require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const mongoose= require("mongoose");



require("dotenv").config();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));



//Connecting to mongoose

mongoose.connect(process.env.DB).then((res)=>{console.log("Connected to database")}).catch(err=>{console.log(err)});


//Routes 👇👇👇👇

const userRoutes = require('./routes/userRoutes');
app.use("/user",userRoutes);



//Listening to PORT 👇👇

app.listen(process.env.PORT,()=>{
    console.log(`App listening at port ${process.env.PORT}`);
})


