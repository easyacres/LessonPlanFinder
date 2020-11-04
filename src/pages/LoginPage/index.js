import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewAccountPage from '../NewAccountPage/NewAccountPage';
import "./LoginPage.css";

function LoginPage() {
    return (
        <section id="login">
        <div id="layer">
        <div class="container" id="login-container">

            <div class="row">
                <div class="column filter-image" class="col-md-6">
                    {/* <img id="user-login-img"
                        src="../img/connect.png"
                        alt="User Login"> */}
                </div>

                <div class="column" class="col-md-12">
                    <h2>Member Login</h2>
                    <form class="login">

                        <div class="form-group">
                            <label for="exampleInputEmail1"></label>
                            <input type="email" class="form-control" id="email-input" placeholder="&#xf007;  UserName"></input>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1"></label>
                            <input type="password" class="form-control" id="password-input" placeholder="&#xf023;  Password"></input>
                        </div>
                        <p>
                        <button type="submit" class="btn" id="signup-btn">Sign Up</button> 
                        {/* Link Page */}
                        <button type="submit" class="btn" id="login-btn">Login</button>
                        </p>
                    </form>
                    <form class="forgotpass">
                        <p><button type="submit" class="forgotPass-btn">Forgot Password?</button></p>
                    </form>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </div>
        </div>
        </section>

    );
}
export default LoginPage;