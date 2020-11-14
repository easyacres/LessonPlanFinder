import React from "react"
import { NavLink } from "react-router-dom"
import { Button, Container, Navbar, Nav } from "react-bootstrap"
import "./AdminLoginPage.css"
import LoginForm from "../../components/LoginForm";

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
          <Container className="container" id="login-container">
              <div className="row">
                  <div className="column" className="col-md-12">
                  <h1 id="loginHeader">Lesson</h1><h1 id="loginHeader2">Works</h1><h3 id="adminLoginHeader">-Admin-</h3>
                      <LoginForm />
                  </div>
              </div>
          </Container>
      </div>
  </section>
    )
}

export default AdminLoginPage