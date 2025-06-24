const router = require("express").Router();
const {
  addUsers,
  getUsers,
  updateUser,
  deleteUser,
  loginUser,
} = require("../controllers/userController");

const {
  addProducts,
  getAllProducts,
  getProductById,
  getProductsByQuery,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const authMiddleware = require("../middleware/authMiddleware");

router.get("/", (req, res) => {
  res.send("Hello From  Server");
});

// User
router.post("/addUser", addUsers);
router.get("/getAllUsers", authMiddleware, getUsers);
router.put("/updateuser/:id", authMiddleware, updateUser);
router.delete("/deleteUser/:id", authMiddleware, deleteUser);
router.post("/login", loginUser);

// Products
router.post("/addProducts", authMiddleware, addProducts);
router.get("/getAllProducts", getAllProducts);
router.get("/getProductById/:id", getProductById);
router.get("/getProductsByQuery", getProductsByQuery);
router.put("/updateProduct/:id", authMiddleware, updateProduct);
router.delete("/deleteProduct/:id", authMiddleware, deleteProduct);

module.exports = router;
