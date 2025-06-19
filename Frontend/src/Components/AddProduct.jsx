import React from "react";
import "./Addproduct.css";
import IMG from "../assets/Shoppingimg2.png"

function AddProduct() {
    return (
        // <div className="add-container">
        <form action="" className="add-form">
            <div>
                <img  className="add-img " src={IMG} alt="" />
            </div>
            <div className="box">
                <h1 className="heading-add">ADD <span>PRODUCT</span></h1>
                <div className="box-2">
                <div className="box-1">
                    <label htmlFor="p-name">Product Name :</label>
                    <input type="text" id="p-name" placeholder="Enter product Name here...." />
                </div>
                <div className="box-1">
                    <label htmlFor="p-img">Product Image :</label>
                    <input type="file" id="p-img" />
                </div>
                <div className="box-1">
                    <label htmlFor="p-category">Product Category :</label>
                    <input type="text" id="p-category" placeholder="Enter product Category...." />
                </div>
                <div className="box-1">
                    <label htmlFor="p-price">Product price:</label>
                    <input type="number" id="p-price" placeholder="Enter price...." />
                </div>
                <div className="box-1">
                    <label htmlFor="p-des">Product Description :</label>
                    <textarea type="text" id="p-des" placeholder="Enter product Description...." cols="30" rows="1.5" />
                </div>
                <div className="box-1">
                    <label htmlFor="p-name">IsFree Delivery :</label>
                    <select name="" id="p-name">
                        <option value="">Is Free Delivery</option>
                        <option value="">yes</option>
                        <option value="">No</option>
                    </select>
                </div>

                <div className="box-1">
                    <label htmlFor="p-rating">Product Rating:</label>
                    <input type="text" id="p-rating" placeholder="Enter product rating here...." />
                </div>
                <div className="box-1">
                    <button className="btn">Create Product</button>
                </div>
                </div>

            </div>
        </form>


        // </div>
    )
}
export default AddProduct;