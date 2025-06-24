import React from "react";
import { Link } from "react-router-dom";
import "./Login.css"
import Shp from "../assets/Shoppingimg1.png"

function Login() {
    return (
        // <div className="login-form">
        //     <div>
        //         <img className="login-img" src={Shp} alt="image" />
        //     </div>
        //     <div className="login-box">
        //         <h1 className="login-heading">Log <span>in</span></h1>
        //     </div>
        //     <div className="login-box1">
        //         <div className="login-form1">
        //             <i className="fas fa-envelope"></i>
        //             <input type="text" placeholder="Email or Phone Number"></input>
        //         </div>
        //         <div className="login-form1">
        //             <i className="fas fa-lock"></i>
        //             <input type="password" placeholder="Password"></input>
        //             <i className="fas fa-eye-slash toggle-password"></i>
        //         </div>
        //         <div className="options">
        //                 <label>
        //                      <input type="checkbox"> remember me</input>
        //                  </label>
        //                  <a href="#">Forgot Password?</a>
        //              </div>
        //     </div>
        // </div>
        // <div className="login-container">
        //     <div className="login-box">
        //         <h1 className="login-heading">Log <span>in</span></h1>
        //         <div className="login-box1">
        //             <div className="box1">
        //                 <label htmlFor="userName"><i class="fa-solid fa-user"></i></label>
        //                 <input type="text" placeholder="Email" />
        //             </div>
        //             <div className="box1">
        //                 <label htmlFor="userPass"><i class="fa-solid fa-lock"></i></label>
        //                 <input type="text" placeholder="Email" />
        //             </div>
        //             <div>
        //                 <div className="box2">
        //                     <input type="checkbox" name="remember me" id="bx" />
        //                     <label htmlFor="bx">Remember me</label>
        //                 </div>
        //                 <div>
        //                     <Link to="/forget" className="forget-pass"> Forget password?</Link>
        //                 </div>
        //             </div>
        //             <div>
        //             <button className="btn">Log in</button>
        //             </div>  
        //         </div>
        //     </div>
        //     <div className="login-img">
        //         <img src={Shp} alt="image" />
        //     </div>
        // </div>
        <div className="login-container">
        <div className="container">
            <div className="design">design area</div>
            <div className="login">login area</div>
        </div>
        
            <div className="container">
            <div className="login-section">
                <h2>Log in</h2>
                <form>
                    <div className="input-group">
                        <i className="fas fa-envelope"></i>
                        <input type="text" placeholder="Email or Phone Number"></input>
                    </div>
                    <div className="input-group">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password"></input>
                        <i className="fas fa-eye-slash toggle-password"></i>
                    </div>
                    <div className="options">
                        <label>
                            {/* <input type="checkbox"> remember me</input> */}
                        </label>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit" className="login-button">Log in</button>
                </form>
                <div className="social-login">
                    <p>Log in with</p>
                    <div className="social-buttons">
                        <button className="google-button">
                            <img src="google-icon.png" alt="Google"/> Google</button>
                        <button className="facebook-button"><img src="facebook-icon.png" alt="Facebook"/> Facebook</button>
                    </div>
                </div>
                <div className="register-link">
                    Don't have an account? <a href="#">Register Now</a>
                </div>
            </div>
            <div className="aesthetic-section">
                </div>
        </div>
        </div>
    )
}
export default Login;