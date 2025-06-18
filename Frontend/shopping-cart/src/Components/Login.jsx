import React from "react";
import { Link } from "react-router-dom";
import "./Login.css"
import Shp from "../assets/Shoppingimg1.png"

function Login() {
    return (
        <div className="login-container">
            <h1 className="login-heading ">Login</h1>
            <div className="cont-1">
                <div className="container">
                    <div className="bx-1">
                        <img src={Shp} alt="" />
                    </div>
                </div>
                <div className="container1">
                    <div>
                        <label htmlFor="userName"><i class="fa-solid fa-user"></i></label>
                        <input type="text" id="userName" placeholder="Enter username..." />
                    </div>
                    <div>
                        <label htmlFor="userPassword"><i class="fa-solid fa-lock"></i></label>
                        <input type="password" id="userPassword" placeholder="Enter password...." />
                    </div>
                    <div class="remember" >
                        <input type="checkbox" id="login-remember" />
                        <label htmlfor="login-remember" className="ms-2">remember me</label>
                    </div>
                    <input type="submit" className="btn" value="login" />

                    <div><Link to="/login">Forget Password</Link></div>

                    <p>Not a Member? <Link to="/signup">Sign Up Now</Link></p>
                </div>
            </div>
        </div>
        // <div className="login-container">
        // <div className="container">
        //     <div className="design">design area</div>
        //     <div className="login">login area</div>
        // </div>
        // </div>
    )
}
export default Login;