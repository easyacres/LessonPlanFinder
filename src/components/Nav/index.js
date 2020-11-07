import React from 'react';
import {Button, NavLink, Navbar, Nav } from "react-bootstrap"
import "./Nav.css";

function Navigation() {
    return (
        <Navbar className="Navigation">
            <Navbar.Brand></Navbar.Brand>
            <Nav className="justify-content-end">
                <Button variant="outline-light" id="adminlogin">
                    <NavLink to="./" id="navlink">
                        Logout
                    </NavLink>
                </Button>
            </Nav>
        </Navbar>

    );
}
export default Navigation;