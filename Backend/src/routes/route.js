const express = require("express");
const Route = express.Router();
const { addUser, getUser, updateUser, deleteUser, loginUser } = require("../controllers/userController");
// const {createProduct, getProductByQuery} = require("../controllers/productController");

//user
Route.post("/addUser", addUser);
Route.get("/getData", getUser);
Route.put("/updateData/:id", updateUser);
Route.delete("/deleteData/:id", deleteUser);
Route.post("/loginUser", loginUser);
// Route.get("getUserByGender", getUserByGender);
// Route.post("/addProduct", createProduct);
// Route.get("/getProductByQuery",getProductByQuery);



module.exports = Route;