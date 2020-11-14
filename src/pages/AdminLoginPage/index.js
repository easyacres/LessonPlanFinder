import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navigate, NavLink, Switch } from "react-router-dom"
import { Button, Form, Navbar, Nav } from "react-bootstrap"
import "./AdminLoginPage.css"

function AdminLoginPage () {
    return (
      <section id="login">
      <div id="layer">
          <Navbar className="loginNav">
              <Navbar.Brand></Navbar.Brand>
              <Nav className="justify-content-end">
                  <Button variant="outline-light" id="adminlogin">
                      <NavLink to="./" id="navlink">
                          Member Login
                      </NavLink>
                  </Button>
              </Nav>
          </Navbar>
          <div class="container" id="login-container">

              <div class="row">
                  <div class="column filter-image" class="col-md-6">
                      {/* <img id="user-login-img"
                  src="../img/connect.png"
                  alt="User Login"> */}
                  </div>

                  <div class="column" class="col-md-12">
                  <h1 id="loginHeader">Lesson</h1><h1 id="loginHeader2">Works</h1><h3 id="adminLoginHeader">-Admin-</h3>
                      <Form class="login">
                          <Form.Group controlId="formBasicEmail">
                              <Form.Label></Form.Label>
                              <Form.Control type="email" class="form-control" id="username-input" placeholder="&#xf007;  UserName" />
                          </Form.Group>

                          <Form.Group controlId="formBasicPassword">
                              <Form.Label></Form.Label>
                              <Form.Control type="password" class="form-control" id="password-input" placeholder="&#xf023;  Password" />
                          </Form.Group>



                          <Router>
                              <div>
                                  {/* <Button variant="outline-light" id="signup-btn">
                                      <NavLink to="./newaccount" id="navlink">
                                          Sign Up
                                      </NavLink>
                                  </Button> */}

                                  {/* A <Switch> looks through its children <Route>s and
                                  renders the first one that matches the current URL. */}


                                  <Button type="submit" class="btn" id="login-btn">Login</Button>
                              </div>
                          </Router>
                      </Form>
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
    )
}

export default AdminLoginPage