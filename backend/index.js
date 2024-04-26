var express= require("express");
var cors=require('cors');
var bodyparser=require('body-parser')
require("dotenv").config();


const mongoose=require('mongoose');
const userRouter = require('./routes/user.router') ;
const taskRouter= require("./routes/task.router");
const messageRouter= require("./routes/message.router");


mongoose.connect(process.env.DATABASE_URL);

const PORT= process.env.PORT || 8000;


const app=express();

app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
 



app.use("/user",userRouter);
app.use("/task",taskRouter);
app.use("/message",messageRouter);

app.listen(PORT,()=>{
    console.log("Server running on Port 8000");
})