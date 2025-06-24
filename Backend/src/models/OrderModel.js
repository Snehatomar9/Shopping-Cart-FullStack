const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true,
    },
    items: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
                min: 1,
            },
        },
    ],
    totalItem: {
        type: Number,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
     orderStatus: {
        type: String,
        enum: ['Processing','Confirmed', 'Shipped', 'Delivered', 'Cancelled'],
        default: 'pending',
        trim:true,

    },
    paymentStatus: {
        type: String,
        enum: ['Pending', 'Successfull', 'Failed'],
        default: 'Pending',
        trim:true,
    },
    shippingAddress: {
        type:String,
        required:true,
        trim:true,
        // address: { type: String, required: true },
        // city: { type: String, required: true },
        // postalCode: { type: String, required: true },
        // country: { type: String, required: true }
    },
    // paymentMethod: {
    //     type: String,
    //     required: true
    // },
    
   
    // isDelivered: {
    //     type: Boolean,
    //     default: false
    // },
    // deliveredAt: {
    //     type: Date
    // },
    // createdAt: {
    //     type: Date,
    //     default: Date.now
    // }
},{timestamps:true});

module.exports = mongoose.model("order", orderSchema);
