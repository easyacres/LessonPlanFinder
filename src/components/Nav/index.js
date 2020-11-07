import React from 'react';
import {Button, NavLink, Navbar, Nav } from "react-bootstrap"
import "./Nav.css";

function Navigation() {
    return (
        <Navbar className="Navigation">
            <Navbar.Brand></Navbar.Brand>
            <Nav className="justify-content-end">
                <Button variant="outline-light" id="logout">
                    <NavLink to="./" id="logout-link">
                        Logout
                    </NavLink>
                </Button>
            </Nav>
        </Navbar>

    );
}
export default Navigation;