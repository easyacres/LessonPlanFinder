import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navigate, NavLink, Switch } from "react-router-dom"
import { Button, Card, Tab, Sonnet } from "react-bootstrap"
import "./AdminProfilePage.css"

function AdminProfilePage() {
    return (
        <section id="admin">
            <div id="adminlayer">
                <div class="container" id="admin-container">
                    <div class="row">
                        <div class="column" class="col-md-4">
                            <Card class="z-depth-1-half" style={{ width: '18rem' }} >
                                <Card.Img variant="top" src="https://cultureamp.design/static/a489d86dba895745f93a8d1268fe713f/avatar.svg" />
                                <Card.Body>
                                    <Card.Title>User Name</Card.Title>
                                    <Card.Text>
                                        useremail@email.com
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            <Router></Router>
                        </div>

                        <div class="column" class="col-md-8">
                            

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminProfilePage