var express= require('express');
const router = express.Router();

const userController = require('../Controllers/user.controller');

router.post("/save",userController.save);

router.get("/fetch",userController.fetch);

router.delete("/delete/",userController.deleteUser);

router.patch("/update",userController.updateUser);

router.post("/login",userController.login);

module.exports=router;


