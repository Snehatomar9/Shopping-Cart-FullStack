const express = require("express");
const Route = express.Router();
const { addUser, getUser, updateUser, deleteUser, getUserByGender } = require("../controllers/userController");
const {createProduct} = require("../controllers/productController");

Route.post("/addUser", addUser);
Route.get("/getData", getUser);
Route.put("/updateData/:id", updateUser);
Route.delete("/deleteData/:id", deleteUser);
Route.get("getUserByGender", getUserByGender);
Route.post("/addProduct", createProduct);


module.exports = Route;