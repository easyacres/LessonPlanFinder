import React from "react"
import PDFViewer from '../../components/PDFViewer/index';
import PDFJSBackend from '../../backends/pdfjs';
<<<<<<< HEAD
import "./TeacherProfilePage.css"
import ProfileCard from "../../components/ProfileCard";
=======
import WebviewerBackend from '../../backends/webviewer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Button, Card } from "react-bootstrap"
import "./TeacherProfilePage.css"
>>>>>>> cd31270b0abd44525b5f73858026dc1f9348b774

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
<<<<<<< HEAD
                            <ProfileCard />
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
=======
                            <Card id="profileCard" className="shadow" style={shadow}>
                                <Card.Img variant="top" src="https://cultureamp.design/static/a489d86dba895745f93a8d1268fe713f/avatar.svg" />
                                <Card.Body>
                                    <Card.Title>{savedAccount.username}</Card.Title>
                                    <Card.Text>
                                        {savedAccount.email}
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            <Router></Router>
                        </div>

                        <div class="column" class="col-md-8">
                            <h2 id="lessonTitle"> Archive</h2>
                            < br />
                            <PDFViewer
                                backend={PDFJSBackend}
                                src="/demo.pdf"/>
                            {/* <PDFViewer backend={WebviewerBackend} src='/myPDF.pdf' /> */}
                           
>>>>>>> cd31270b0abd44525b5f73858026dc1f9348b774
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeacherProfilePage