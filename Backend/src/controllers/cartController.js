const cartModel=require("../models/CartModel");
const mongoose=require("mongoose");
const productModel=require("../models/ProductModel");
const {isValid}=require("./validation");

//AddToCart
const addToCart=async(req,res)=>{
    try{
        const userId=req.user.userId;
        const {productId, quantity} = req.body; 

        //Product
        if(!isValid(productId) || !mongoose.Types.ObjectId.isValid(productId)){
            return res.status(400).json({msg:"Valid ProductId is Required"})
        }  
        //quantity
              

    }catch(error){
        console.log(error);
         return res.status(500).json({msg:"Internal Server Error"})
    }
}

module.exports={addToCart};