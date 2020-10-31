import React from 'react';
import "./LoginPage.css";

function LoginPage() {
    return (
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
                            <input type="email" class="form-control" id="email-input" placeholder="&#xf007;  Email"></input>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1"></label>
                            <input type="password" class="form-control" id="password-input" placeholder="&#xf023;  Password"></input>
                        </div>
                        <button type="submit" class="btn" id="login-btn">LOGIN</button>
                    </form>
                    <form class="forgotpass">
                        <p><button type="submit" class="btn">Forgot Password?</button></p>
                    </form>
                    <br />
                    <br />
                    <br />
                    <p>Create your account <a href="/signup.html"> <i
                        class="fas fa-arrow-right"></i></a></p>
                </div>
            </div>
        </div>


    );
}
export default LoginPage;