import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import LOGO from "../assets/Navlogo.png"

function Navbar() {
    return (
        <nav className="nav-container">
            <Link to="#" className="nav-logo"><img src={LOGO} alt="img" /></Link>
            <div className="menu-icon" ><i className="fas fa-bars"></i>
            </div>

            <div className="search-form">
                <label htmlFor="searchBox" className="fas fa-search"></label>
                <input type="search" placeholder="Search here for products and others" />
            </div>
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
                <div className="icons">
                    <Link to="/cart" className="nav-link"> <i className="fa-solid fa-cart-shopping"></i></Link>
                    <Link to="/myProfile" className="nav-link"> <i className="fa-solid fa-user"></i></Link>

                </div>

            </ul>
        </nav>
    )
}
export default Navbar;