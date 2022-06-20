import React from "react";
import "./login.scss";

const Login = ()=>{
    return (
        <div className="login__container">
            <div className="aside">
                <h3>Quick Credit</h3>
                <div className="aside__avata">images</div>
                <div className="text__abtUs">
                    <p>Apply for up to ₦100,000 with loan tenors of up to 90days and have your money sent straight to your bank account in minutes.</p>
                </div>
                <div className="aside__footer">
                    <p>Terms and Conditions | Privacy</p>
                    <p>&copy;2022 Quick Credit Inc. All Rights Reserved.</p>
                </div>
            </div>
            <div className="loginForm__container">
                <form>
                    <h3 className="header">Sign in to <span>Request</span> a Loan</h3>
                    <div>
                        <label>Email Address</label>
                        <input type="email" placeholder="Your Email" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" placeholder="Enter Password" />
                    </div>
                    <p>Forgot Password</p>
                    <button>Sign In</button>
                    <div><p>Don't have an account?</p><span>Register</span></div>
                </form>

            </div>
        </div>
    )
}

export default Login;