const productModel = require("../models/ProductModel");
const { isValid } = require("./validation");
const mongoose = require("mongoose");

// add product
const createProduct = async (req, res) => {
    try {
        const productData = req.body;

        if (Object.keys(productData).length === 0) {
            return res.status(400).json({ msg: "Bad request, No data provide" })
        }

        const { name, image, price, description, ratings, category } = productData

        if (!isValid(name)) {
            return res.status(400).json({ msg: "Product name is required" })
        }

        if (!isValid(image)) {
            return res.status(400).json({ msg: "Product Image required" })
        }

        if (!isValid(price)) {
            return res.status(400).json({ msg: "Product price is required" })
        }

        if (!isValid(description)) {
            return res.status(400).json({ msg: "Product Description required" })
        }

        if (!isValid(ratings)) {
            return res.status(400).json({ msg: "Product rating is required" })
        }

        if (!isValid(category)) {
            return res.status(400).json({ msg: "category is required" })
        }

        const product = await productModel.create(productData);
        return res.status(201).json({ msg: "product data added successfully", product });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Internal server error" })
    }
}
//get all products

// get product
const getProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        let product = await productModel.findById(productId);

        if (!product) {
            return res.status(404).json({ msg: "Product Id not found" })
        }

        return res.status(200).json({ product });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Internal server error" });
    }
}

// update Product
const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const data = req.body;

        if (!mongoose.Types.ObjectId.isValid(productId)) {
            return res.status(404).json({ msg: "Invalid product Id" })
        }

        const { name, image, price, description, ratings } = data;

        if (!isValid(name)) {
            return res.status(400).json({ msg: "Product name is required" })
        }

        if (!isValid(image)) {
            return res.status(400).json({ msg: "Product Image required" })
        }

        if (!isValid(price)) {
            return res.status(400).json({ msg: "Product price is required" })
        }

        if (!isValid(description)) {
            return res.status(400).json({ msg: "Product Description required" })
        }

        if (!isValid(ratings)) {
            return res.status(400).json({ msg: "Product rating is required" })
        }


        let update = await productModel.findByIdAndUpdate(productId, data, { new: true });
        return res.status(200).json({ msg: "product updated successfully", update });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Internal server error" })
    }
}

// delete Peoduct
const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const deleteProductById = await productModel.findByIdAndDelete(productId);

        if (!deleteProductById) {
            return res.status(400).json({ msg: "Product not found" })
        }

        return res.status(200).json({ msg: "product deleted successfully" })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Internal server error" })

    }
}

// get product by querry
const getProductByQuery = async (req, res) => {
    try {
        // get by category
        const product = req.query.category;

        if (!isValid(product)) {
            return res.status(400).json({ msg: "Category is required" })
        }

        const productData = await productModel.find({ category: product.toLowerCase() });
if (productData.length === 0) {
            return res.status(404).json({ msg: "No product data found" })
        }
        
        // get by ratings
        const ratings = req.query.ratings;
        const ratingVal = parseFloat(ratings);

        if (ratings) {
            if (isNaN(ratingVal) || ratingVal < 0 || ratingVal > 5) {
                return res.status(400).json({ msg: "rating is Invalid" })
            }
            return res.status(200).json({ ratingVal })
        }

        return res.status(200).json({ productData });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Internal server error" })
    }
}


module.exports = { createProduct, getProduct, updateProduct, deleteProduct, getProductByQuery };
