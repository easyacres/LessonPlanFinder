import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navigate, NavLink, Switch } from "react-router-dom"
import { Button } from "react-bootstrap"
import NewAccountPage from "../NewAccountPage/index.js"
import AdminLoginPage from "../AdminLoginPage/index.js"
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
                    <h2 id="loginHeader">Member Login</h2>
                    <form class="login">

                        <div class="form-group">
                            <label for="exampleInputEmail1"></label>
                            <input type="email" class="form-control" id="email-input" placeholder="&#xf007;  UserName"></input>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1"></label>
                            <input type="password" class="form-control" id="password-input" placeholder="&#xf023;  Password"></input>
                        </div>
                        
                        {/* <button type="submit" class="btn" id="signup-btn">Sign Up</button>  */}
                        
                        <Router>
                        
                        
        <div>
    <Button variant="outline-info" id="adminlogin">
        <NavLink to="./adminlogin">
            Admin Login
        </NavLink>
    </Button>
    <Button variant="outline-info">
        <NavLink to="./newaccount">
        Sign Up
        </NavLink>
        </Button>

  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
             
           
                        <Button type="submit" class="btn" id="login-btn">Login</Button>
                        
                        </div>
                        </Router>
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