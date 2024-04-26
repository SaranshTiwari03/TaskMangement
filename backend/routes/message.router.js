const express= require("express");

const router=express.Router();

const messageController= require("../Controllers/messageControllers");


router.post("/insert",messageController.messageInsert)
router.post("/Delete",messageController.messageDelete)
router.get("/display",messageController.messageDisplay);



module.exports=router;