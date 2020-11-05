import { Navbar, Nav, Button, Form, FormControl, NavLink } from "react-bootstrap"
import React from "react"

function Navigate() {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand></Navbar.Brand>
        <Nav className="mr-auto">
        <Button variant="outline-info">
        <NavLink to="./adminlogin">
            Admin Login
        </NavLink>
        </Button>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    );
}
export default Navigate;