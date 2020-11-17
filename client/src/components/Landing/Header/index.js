import React from 'react';
import { Row, Col, Button, NavLink, Container, } from 'react-bootstrap'
import "./Header.css";


function Header() {
    return (
        <Container id="landing-container">
            <Row>
                <Col id="heading-col" xs lg="5">
                    <h1>Lesson Planning Made Easy</h1>
                    <p>All the lessons you need,
                    convienient annotating made accessible,
                    automated orginization, and more.
                        </p>
                    <Button variant="outline-light" id="btn-control">
                        <NavLink href="/login" id="link-control">
                            Member Login
                            </NavLink>
                    </Button>

                    <Button variant="outline-light" id="btn-control">
                        <NavLink href="/adminlogin" id="link-control">
                            Admin Login
                            </NavLink>
                    </Button>
                </Col>
                <Col size="md-8">
                </Col>
            </Row>
        </Container>

    );
}

export default Header;