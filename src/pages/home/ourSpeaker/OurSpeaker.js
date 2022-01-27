import React from "react";
import { Container,Row,Col,Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import SpeakerImage from "./speakerImage/SpeakerImage";




const OurSpeaker = () => {
    return(
        <>
        <Container fluid>
            <Row>
                <Col>
                <h2>
                    Our Speaker
                </h2>
                </Col>  
            </Row>
            <Row>
                <Col>
                    <SpeakerImage/>
                </Col>
                <Col>
                    <SpeakerImage/>
                </Col>
                <Col>
                    <SpeakerImage/>
                </Col>
                <Col>
                    <SpeakerImage/>
                </Col>
            </Row>
        </Container>
        </>
    )

}

export default OurSpeaker;