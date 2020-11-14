import React from 'react';
import { NavLink } from "react-router-dom"
import { Button, Navbar, Nav, Container } from "react-bootstrap"
import "./LoginPage.css";
import LoginForm from "../../components/LoginForm"

function LoginPage() {
    return (
        <section id="login">
            <div id="layer">
                <Navbar className="loginNav">
                    <Navbar.Brand></Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Button variant="outline-light" id="adminlogin">
                            <NavLink to="./adminlogin" id="navlink">
                                Admin Login
                            </NavLink>
                        </Button>
                    </Nav>
                </Navbar>
                <Container className="container" id="login-container">

                    <div className="row">
                        <div className="column" className="col-md-12">
                            <h2 id="loginHeader">Lesson</h2><h2 id="loginHeader2">Works</h2>
                            <LoginForm />
                        </div>
                    </div>
                </Container>
            </div>
        </section>

    );
}
export default LoginPage;