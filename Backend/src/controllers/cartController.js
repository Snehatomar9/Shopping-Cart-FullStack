const cartModel = require("../models/cartModel");
const mongoose = require("mongoose");
const productModel = require("../models/productModel");

const { isValid } = require("./validator");

// Add To Cart
const addToCart = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { productId, quantity } = req.body;

    // UserId Validation
    if (!isValid(userId) || !mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ msg: "Valid UserId is Required" });
    }

    // ProductId Validation
    if (!isValid(productId) || !mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ msg: "Valid ProductId is Required" });
    }

    // Quantity Validation
    if (
      !isValid(quantity) ||
      typeof quantity !== "number" ||
      quantity < 1 ||
      !Number.isInteger(quantity)
    ) {
      return res.status(400).json({ msg: "Valid Quantity is Required" });
    }

    const product = await productModel.findById(productId);

    if (!product) {
      return res.status(404).json({ msg: "Product Not Found" });
    }

    let cart = await cartModel.findOne({ userId });

    if (!cart) {
      cart = await cartModel.create({
        userId,
        items: [{ productId, quantity }],
        totalItems: 1,
        totalPrice: product.price * quantity,
      });
    } else {
      let found = false;

      cart.items = cart.items.map((item) => {
        if (item.productId.toString() === productId) {
          found = true;
          item.quantity += quantity;
        }
        return item;
      });

      if (!found) {
        cart.items.push({ productId, quantity });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error", error });
  }
};

module.exports = { addToCart };


// Optional Chaining
// Array Methods
// toString()