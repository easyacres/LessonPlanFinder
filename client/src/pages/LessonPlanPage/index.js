import React from "react"
import { Container } from "react-bootstrap"
import "./LessonPlanPage.css"

function LessonPlanPage() {
    
    return (
        <section id="lesson">
        <div id="lessonlayer">
            <Container className="container" id="lesson-container">
            <h2 id="lessonPageTitle"> Lesson Board</h2>
                <div className="row">
                    <div className="column" className="col-md-6">
                        <p>CONTENT HERE</p>
                    </div>

                    <div className="column" className="col-md-6">
                    <p>CONTENT HERE</p>
                    </div>
                </div>
            </Container>
        </div>
    </section>  
    )
}

export default LessonPlanPage