import React from "react";
import { Container, Row, Col,Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WhoAttend.css";

import WhoAttendImage from "./WhoAttendImage.svg";


const WhoAttend = ( ) => {
    return(
        <>
        <Container fluid>
            <Row>
                <Col className="whoAttendRow1Col1">
                <h2>
                Who Should Attend? 
                </h2>
                <br></br>
                </Col>
            </Row>
            <Container className="whoAttendCardContainer">
            <Row  className="whoAttedCon2Row1">
                <Col>
                <h4>
                Credit & Collection Leadership
                </h4>
                
                </Col>
                <Col className="whoAttCont2Row1Col2">
                <h4>
                Contact Center Management
                </h4>
                 
                </Col>
            </Row>
            <Row>
                <Col className="whoAttCont2Row2Col1">
                <h4>
                CXOs
                </h4>
                <h4>
                UI/UX Designers<br/>
                & Developers 
                </h4>
                <h4>
                NLP practitioners 
                </h4>
                </Col>
                <Col className="whoAttCont2Row2Col2">
                <Image src={WhoAttendImage}/>
                </Col>
                <Col className="whoAttCont2Row2Col3">
                <h4>
                Innovation Leads 
                </h4>
                <h4>
                Data Scientists 
                </h4>
                <h4>
                Marketing Leaders 
                </h4>
                </Col>
            </Row>
            <Row>
                <Col className="whoAttCont2Row3Col1">
                <h4>
                VPs of Customer Experience, Product and Digital Transformation 
                </h4>
                </Col>
            </Row>
            </Container>
        </Container>
        </>
    )
}

export default WhoAttend;