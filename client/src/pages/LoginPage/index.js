import React from 'react';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { Button, Form, Navbar, Nav, Container } from "react-bootstrap"
import "./LoginPage.css";
import LoginForm from '../../components/LoginForm';

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
                <Container id="login-container">
                    <div class="row">
                        <div class="column" class="col-md-12">
                            <h1 id="loginHeader">Lesson</h1><h1 id="loginHeader2">Works</h1>
                            <LoginForm />
                        </div>
                    </div>
                </Container>
            </div>
        </section>

    );
}
export default LoginPage;