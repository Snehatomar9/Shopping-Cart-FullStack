const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    freeDelivery: {
        type: Boolean,
    },
    ratings: {
        type: Number,
        required: true,
    }
}, { timestamps: true });

module.exports = new mongoose.model("product", productSchema);