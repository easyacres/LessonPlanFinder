import React from "react"
import PDFViewer from '../../components/PDFViewer/index';
import PDFJSBackend from '../../backends/pdfjs';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Button, Card, NavLink } from "react-bootstrap"
import "./LessonPlanPage.css"

function LessonPlanPage() {
    
    return (
        <section id="lesson">
        <div id="lessonlayer">
            <div class="container" id="lesson-container">
            <h2 id="lessonPageTitle"> Lesson Board</h2>
                <div class="row">
                    <div class="column" class="col-md-6">
                        <p>CONTENT HERE</p>
                    </div>

                    <div class="column" class="col-md-6">
                    <p>CONTENT HERE</p>
                    </div>
                </div>
            </div>
        </div>
    </section>  
    )
}

export default LessonPlanPage