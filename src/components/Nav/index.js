import React from 'react';
import "./Nav.css";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap"

function Navigation() {
    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="loginpage">Login</Nav.Link>
            <Nav.Link href="adminlogin">Admin Login</Nav.Link>
            <Nav.Link href="newaccount">Sign Up</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </>
    );
}
export default Navigation