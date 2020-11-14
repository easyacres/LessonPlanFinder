import React from "react"
import PDFViewer from '../../components/PDFViewer/index';
import PDFJSBackend from '../../backends/pdfjs';
import "./TeacherProfilePage.css"
import ProfileCard from "../../components/ProfileCard";

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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeacherProfilePage