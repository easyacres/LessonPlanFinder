import React from "react"
import "./AdminProfilePage.css"
import ProfileCard from "../../components/ProfileCard";
import { Container } from "../../components/Grid";
import { Row, Col } from "react-bootstrap"

function AdminProfilePage() {
    return (
        <section id="admin">
            <div id="adminlayer">
                <Container id="admin-container">
                    <Row>
                        <Col size="md-4">
                            <ProfileCard />
                        </Col>

                        <Col size="md-8">
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default AdminProfilePage