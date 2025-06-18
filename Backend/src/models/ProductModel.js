const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
        trim:true,
    },
    category:{
        type:String,
        enum:["clothing", "Electronics","Toys and Games","Sports","Books and Media","Home and Kitchen"],
        required:true,
        trim:true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim:true
    },
    isfreeDelivery: {
        type: Boolean,
        default:true,
    },
    ratings: {
        type: Number,
        required: true,
    }
}, { timestamps: true });

module.exports = new mongoose.model("product", productSchema);