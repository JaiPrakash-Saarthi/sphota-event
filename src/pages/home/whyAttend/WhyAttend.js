import React from "react";
import { Container,Row,Col,Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./WhyAttend.css";

import WhyAttendImage from "./WhyAttendImage.svg";


const WhyAttend = () => {
    return(
        <>
        <Container>
            <Row>
                <Col className="whyAttendRow1Col1">
                <h2>
                Why Should you Attend? 
                </h2>
                <br></br>
                <ul>
                <li>
                Hear directly from experts 
                </li>
                <li>
                Learn from experiences of Saarthi SMEs 
                </li>
                <li>
                Bust myths surrounding AI implementation in customer experience 
                </li>
                <li>
                Get holistic picture of past, present, and future of multilingual Voice AI 
                </li>
                <li>
                Know clashes of opinion/expectation between research and business 
                </li>
                <li>
                Network with business and innovation leaders, and like-minded AI enthusiasts 
                </li>
                </ul>
                </Col>

                <Col className="whoAttendRow1Col2">
                <Image  src={WhyAttendImage} alt="img"/>
                </Col>
            </Row>

        </Container>
        </>
    )
}

export default WhyAttend;