import React from 'react';
import { Row, Col, Button, NavLink, Container, Image } from 'react-bootstrap'
import "./Module.css";

function Module() {
    
    return (
        <Container id="module-container">
            <Row>
            <Col xs={0} md={6} id="img-col">
            <img src="./hiclipart.com.png" alt="phoneimg" width="500" height="auto"></img>
            </Col>
                <Col xs={12} md={6}>
                    <h1>Lesson Planning Made Easy</h1>
                    <p>All the lessons you need,
                    convienient annotating made accessible,
                    automated orginization, and more.
                        </p>
                    <Button variant="outline-light" id="btn-control">
                        <NavLink to="" id="link-control">
                            Member Login
                            </NavLink>
                    </Button>

                    <Button variant="outline-light" id="btn-control">
                        <NavLink to="" id="link-control">
                            Admin Login
                            </NavLink>
                    </Button>
                </Col>
            </Row>
        </Container>

    );
}

export default Module;