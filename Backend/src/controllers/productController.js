const productModel = require("../models/ProductModel");
const { isValid } = require("./validation");

// add product
const createProduct = async (req, res) => {
    try {
        const productData = req.body;

        if (Object.keys(productData).length === 0) {
            return res.status(400).json({ msg: "Bad request, No data provide" })
        }

        const { name, image, price, description, rating } = productData

        if (!isValid(name)) {
            return res.status(400).json({ msg: "Product name is required" })
        }
        
        if (!isValid(image)) {
            return res.status(400).json({ msg: "Product Image required" })
        }

        if (!isValid(price)) {
            return res.status(400).json({ msg: "Product price is required" })
        }

        if(!isValid(description)){
            return res.status(400).json({msg: "Product Description required"})
        }

        if(!isValid(rating)){
            return res.status(400).json({msg: "Product rating is required"})
        }
       
        const product = await productModel.create(productData);
        return res.status(201).json({ msg: "product data added successfully", product });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Internal server error" })
    }
}


module.exports = { createProduct };