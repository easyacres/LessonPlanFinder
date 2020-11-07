import { Navbar, Nav, Button, Form, FormControl, NavLink } from "react-bootstrap"
import React from "react"

function Navigate() {
    return (
        <Navbar variant="dark">
        <Navbar.Brand></Navbar.Brand>
        <Nav className="justify-content-end">
        <Button variant="outline-info">
        <NavLink to="./adminlogin">
            Admin Login
        </NavLink>
        </Button>
        </Nav>
      </Navbar>
    );
}
export default Navigate;