import React from "react"
import PDFViewer from '../../components/PDFViewer/index';
import PDFJSBackend from '../../backends/pdfjs';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Button, Card, NavLink } from "react-bootstrap"
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
                            <Card id="profileCard" className="shadow" style={shadow}>
                                <Card.Img variant="top" src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'/>
                                <Card.Body>
                                    <Card.Title>John Smith</Card.Title>
                                    <Card.Text>
                                        johnsmith@email.com
                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                            <Router></Router>
                        </div>

                        <div class="column" class="col-md-8">
                            <h2 id="lessonTitle"> Lesson Board</h2>
                            < br />
                            <div class="row">
                                <div class="column" class="col-sm-6">
                                    <PDFViewer
                                        backend={PDFJSBackend}
                                    // src="../../assets/webviewwer-demo.pdf"
                                    />
                                </div>
                                <div class="column" class="col-sm-6">
                                    <PDFViewer
                                        backend={PDFJSBackend}
                                    // src="../../assets/webviewwer-demo.pdf"
                                    />
                                </div>
                            </div>
                            < br />
                            <div class="row">
                                <div class="column" class="col-sm-6">
                                    <PDFViewer
                                        backend={PDFJSBackend}
                                    // src="../../assets/webviewwer-demo.pdf"
                                    />
                                </div>
                                <div class="column" class="col-sm-6">
                                    <PDFViewer
                                        backend={PDFJSBackend}
                                    // src="../../assets/webviewwer-demo.pdf"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeacherProfilePage