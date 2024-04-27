var express= require("express");
var cors=require('cors');
var bodyparser=require('body-parser')
require("dotenv").config();
const multer=require("multer");

const mongoose=require('mongoose');
const userRouter = require('./routes/user.router') ;
const taskRouter= require("./routes/task.router");
const messageRouter= require("./routes/message.router");

// Connect to MongoDB database
mongoose.connect(process.env.DATABASE_URL);

// Set up port
const PORT= process.env.PORT || 8000;

const app=express();

// Enable CORS
app.use(cors());
// Parse incoming requests with JSON payloads
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

// Multer storage configuration for file uploads
const storage=multer.diskStorage({
    destination:(req,file,cb)=> {
        cb(null,'../frontend/public/ProfileImg/')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
let upload=multer({storage:storage});

// Route for file uploads
app.post("/upload", upload.single('file'),(req, res)=>{
    res.json({file:req.file.originalname,size:req.file.size})
})

// Route handling for user-related operations
app.use("/user",userRouter);
// Route handling for task-related operations
app.use("/task",taskRouter);
// Route handling for message-related operations
app.use("/message",messageRouter);

// Start listening on the specified port
app.listen(PORT,()=>{
    console.log("Server running on Port 8000");
})
