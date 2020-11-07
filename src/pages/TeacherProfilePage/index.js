import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navigate, NavLink, Switch } from "react-router-dom"
import { Button, Card, Tab, Sonnet } from "react-bootstrap"
import "./TeacherProfilePage.css"

function TeacherProfilePage() {
    var shadow = {
        boxShadow: "1px 3px 1px #f5f5f5"
    }
    return (
        <section id="teacher">
            <div id="teacherlayer">
                <div class="container" id="teacher-container">
                    <div class="row">
                        <div class="column" class="col-md-4">
                            <Card id="profileCard" class="shadow" style={shadow}>
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

export default TeacherProfilePage