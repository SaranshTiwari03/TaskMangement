const express= require("express");

const router=express.Router();

const taskController= require("../Controllers/taskController");


router.post("/insert",taskController.taskInsert)
router.post("/Delete",taskController.taskDelete)
router.post("/editsave",taskController.editsave)
router.post("/geteditdata",taskController.taskEditData)
router.get("/display",taskController.taskDisplay);
router.get("/Update",taskController.taskUpdate);
router.put('/display/:id', taskController.statusdisplay);
router.put("/:id", taskController.updateTaskPriority);


module.exports=router;