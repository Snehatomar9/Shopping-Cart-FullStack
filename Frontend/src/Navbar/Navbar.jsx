import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import LOGO from "../assets/logo.png"

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="#" className="nav-logo"><img src={LOGO} alt="img" /></Link>
            <ul className="nav-items">
                <li className="nav-itm">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-itm">
                    <Link to="/addProduct" className="nav-link">Add-Product</Link>
                </li>
                <li className="nav-itm">
                    <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-itm">
                    <Link to="/contact" className="nav-link">Contact</Link>
                </li>
                <li className="nav-itm">
                    <Link to="/login" className="nav-link">Login </Link>
                </li>
            </ul>
            <div className="icons">
                <div className="search-form">
                    <label htmlFor="searchBox" className="fas fa-search"></label>
                    <input type="search" placeholder="Search here for products and others" />
                </div>
                <div className="icons-box">
                    <Link to="/myProfile" className="nav-link"> <i className="fa-solid fa-user"></i></Link>
                    <p>Profile</p>
                </div>
                <div className="icons-box">
                    <Link to="/myProfile" className="nav-link"><i className="fa-solid fa-heart"></i></Link>
                    <p>Wish-List</p>
                </div>
                <div className="icons-box">
                    <Link to="/cart" className="nav-link"> <i className="fa-solid fa-cart-shopping"></i></Link>
                    <p>Cart</p>
                </div>
            </div>

        </nav>
        // <nav className="nav-container">
        //     <Link to="#" className="nav-logo"><img src={LOGO} alt="img" /></Link>


        //     {/* <div className="search-form">
        //         <label htmlFor="searchBox" className="fas fa-search"></label>
        //         <input type="search" placeholder="Search here for products and others"/>
        //     </div> */}
        //     <div className="menu-items">
        //         <ul className="nav-items">
        //             <li className="nav-itm">
        //                 <Link to="/" className="nav-link">Home</Link>
        //             </li>
        //             <li className="nav-itm">
        //                 <Link to="/addProduct" className="nav-link">Add-Product</Link>
        //             </li>
        //             <li className="nav-itm">
        //                 <Link to="/about" className="nav-link">About</Link>
        //             </li>
        //             <li className="nav-itm">
        //                 <Link to="/contact" className="nav-link">Contact</Link>
        //             </li>
        //             <li className="nav-itm">
        //                 <Link to="/login" className="nav-link">Login </Link>
        //             </li>
        //         </ul>
        //         <i className="fas fa-bars"></i>
        //     </div>
        //     <div className="icons">
        //         <div className="search-bar">
        //             <a href="#" className="nav-link"> <i className="fa-solid fa-magnifying-glass"></i></a>
        //             <input type="search" placeholder="Search here for products and others" />
        //         </div>
        //         <div className="icons-box">
        //             <Link to="/myProfile" className="nav-link"> <i className="fa-solid fa-user"></i></Link>
        //             <p>Profile</p>
        //         </div>
        //         <div className="icons-box">
        //             <Link to="/myProfile" className="nav-link"><i className="fa-solid fa-heart"></i></Link>
        //             <p>Wish-List</p>
        //         </div>
        //         <div className="icons-box">
        //             <Link to="/cart" className="nav-link"> <i className="fa-solid fa-cart-shopping"></i></Link>
        //             <p>Cart</p>
        //         </div>
        //     </div>


        // </nav>
    )
}
export default Navbar;