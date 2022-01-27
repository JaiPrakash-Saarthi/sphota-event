import React from "react";

import { Container,Row,Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import EventInfo from "../eventInfo/EventInfo";
import RegisterationForm from "../eventForm/RegisterationForm";
const AboutEvent = () => {
    return(
        <>
        <Container>
        <Row>
            <Col><EventInfo/></Col>
            <Col><RegisterationForm/></Col>
        </Row>
        </Container>
        </>
    )
}

export default AboutEvent;