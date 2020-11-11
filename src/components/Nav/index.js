import React from 'react';
import {Button, NavLink, Navbar, Nav } from "react-bootstrap"
import "./Nav.css";
import {Form, FormControl } from "react-bootstrap"

function Navigation() {
    return (
        <>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">iPlan</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Logout</Nav.Link>
          </Nav>
        </Navbar>
      </>
    );
}
export default Navigation
