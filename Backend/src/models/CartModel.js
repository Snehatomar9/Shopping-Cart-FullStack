const mongoose=require("mongoose");

const cartSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
        unique:true,
    },
    items:[
        {
            productId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"product",
                required:true,
            },
            quantity:{
                type:Number,
                required:true,
                min:1,
            },
        },
    ],
    totalItem:{
        type:Number,
        required:true,
        default:0,
    },
    totalPrice:{
        type:Number,
        required:true,
        default:0,
    }

},{timestamps:true});

mudule.exports=new mongoose.model("cart",cartSchema);