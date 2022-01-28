import React from "react";

import { Container,Row,Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./AboutEvent.css";

import EventInfo from "../eventInfo/EventInfo";
import RegisterationForm from "../eventForm/RegisterationForm";
const AboutEvent = () => {
    return(
        <>
        <Container>
        <Row className="aboutEventContRow1Col1">
            <Col><EventInfo/></Col>
            <Col><RegisterationForm/></Col>
        </Row>
        <Row style={{borderBottom:"0.5px solid #ffffff",opacity:"0.5",paddingTop:"20px"}}>
                <Col className="anyoneCont3Row1Col1">
                
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default AboutEvent;