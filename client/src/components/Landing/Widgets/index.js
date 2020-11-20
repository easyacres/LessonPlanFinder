import React from 'react';
import { Row, Col, Container, Figure } from 'react-bootstrap'
import "./Widgets.css";


function Widgets() {
    return (

        <Container id="widget-container">
            <Row>
                <Col xs={6} md={3}>
                    <Figure>
                        <Figure.Image id="widget-icons"
                            width={95}
                            height={95}
                            alt="171x180"
                            src="https://www.kindpng.com/picc/m/78-785975_icon-profile-bio-avatar-person-symbol-chat-icon.png" roundedCircle
                        />
                        <h6 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '28px', color: 'rgb(49, 49, 49)'}}>Easy to Use</h6>
                        <Figure.Caption>
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                            </Figure.Caption>
                    </Figure>
                </Col>
                <Col xs={6} md={3}>
                    <Figure>
                        <Figure.Image id="widget-icons"
                            width={95}
                            height={95}
                            alt="171x180"
                            src="https://www.iconarchive.com/download/i86458/graphicloads/long-shadow-documents/document-filetype-pdf.ico" roundedCircle
                        />
                        <h6 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '28px', color: 'rgb(49, 49, 49)'}}>Easy to Use</h6>
                        <Figure.Caption>
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                            </Figure.Caption>
                    </Figure>
                </Col>
                <Col xs={6} md={3}>
                    <Figure>
                        <Figure.Image id="widget-icons"
                            width={95}
                            height={95}
                            alt="171x180"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHwrvdunU3Id6Up8-RJfgZurlJHUIQRrARzQ&usqp=CAU" roundedCircle
                        />
                        <h6 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '28px', color: 'rgb(49, 49, 49)'}}>Easy to Use</h6>
                        <Figure.Caption>
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                            </Figure.Caption>
                    </Figure>
                </Col>
                <Col xs={6} md={3}>
                    <Figure>
                        <Figure.Image id="widget-icons"
                            width={95}
                            height={95}
                            alt="171x180"
                            src="https://icons-for-free.com/iconfiles/png/512/file+folder+office+paper+report+icon-1320184210820326687.png" roundedCircle
                        />
                        <h6 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '28px', color: 'rgb(49, 49, 49)'}}>Easy to Use</h6>
                        <Figure.Caption>
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                            </Figure.Caption>
                    </Figure>
                </Col>
            </Row>
        </Container>
    
    );
}

export default Widgets;