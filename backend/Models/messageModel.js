const mongoose=require("mongoose")

const messageSchema=mongoose.Schema({
    
    uname:String,
    message:String,
    
       
})

module.exports=mongoose.model("Message",messageSchema)