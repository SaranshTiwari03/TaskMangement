const url = require("url");
const UserSchemaModel = require('../Models/user.model.js');
const jwt = require('jsonwebtoken') ;
const rs = require('randomstring');

// Saves user data
var save = async (req, res, next) => {
  try {
      var userDetails = req.body;
      var userList = await UserSchemaModel.find().sort({"_id": -1}).limit(1);
      var l = userList.length;
      var _id = l == 0 ? 1 : userList[0]._id + 1;
      userDetails = {...userDetails, "_id": _id, "status": 0, "role": "user", "info": Date()};
      var user = await UserSchemaModel.create(userDetails);
      if (user) {
          return res.status(201).json({"result": "User registered successfully."});
      } 
  } catch (error) {
      console.error("An error occurred:", error);
      return res.status(500).json({"result": "An error occurred while processing the request."});
  }
}

// Fetches user data based on conditions
const fetch = async (req, res, next) => {
  try {
    var condition_object = url.parse(req.url, true).query;
    var userList = await UserSchemaModel.find(condition_object);
    var l = userList.length;
    if (l !== 0)
      return res.status(201).json(userList);
  } catch (error) {
    console.error("Error fetching user data:", error);
    return res.status(500).json({ "error": "Internal Server Error" });
  }
}

// Displays all user data
const userDisplay = async (req, res) => {
  try {
      const data = await UserSchemaModel.find();
      res.send(data);
  } catch (error) {
      console.error("Error displaying tasks:", error);
      res.status(500).send("Internal Server Error");
  }
};

// Deletes a user
var deleteUser = async (request, response, next) => {
  try {
    var user = await UserSchemaModel.find(request.body);
    if (user.length !== 0) {
      let result = await UserSchemaModel.deleteMany(request.body);
      if (result)
        return response.status(201).json({ "msg": "success" });
      else
        return response.status(500).json({ error: "Server Error" });
    } else
      return response.status(404).json({ error: "Resource not found" });
  } catch (error) {
    console.error("Error deleting user:", error);
    return response.status(500).json({ error: "Internal Server Error" });
  }
}

// Updates user data
var updateUser = async (request, response, next) => {
  try {
    let userDetails = await UserSchemaModel.findOne(request.body.condition_object);
    if (userDetails) {
      let user = await UserSchemaModel.updateOne(request.body.condition_object, { $set: request.body.set_condition });
      if (user)
        return response.status(201).json({ "msg": "success" });
      else
        return response.status(500).json({ error: "Server Error" });
    } else
      return response.status(404).json({ error: "Requested resource not available" });
  } catch (error) {
    console.error("Error updating user:", error);
    return response.status(500).json({ error: "Internal Server Error" });
  }
}

// User login
var login = async (req, res, next) => {
  try {
    var userDetails = req.body;
    userDetails = { ...userDetails, "status": 1 };
    var userList = await UserSchemaModel.find(userDetails);
    var l = userList.length;
    if (l !== 0) {
      let payload = { "subject": userList[0].email };
      let key = rs.generate();
      let token = jwt.sign(payload, key);
      return res.status(201).json({ "token": token, "userDetails": userList[0] });
    } else {
      return res.status(500).json({ "token": "error" });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports={
  save,
  fetch,
  deleteUser,
  updateUser,
  login,
  userDisplay
}
