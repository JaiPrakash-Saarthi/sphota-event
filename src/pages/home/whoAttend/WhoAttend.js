import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const WhoAttend = ( ) => {
    return(
        <>
        <Container>
            <Row>
                <Col>
                <h2>
                Who Should Attend? 
                </h2>
                <ul>
                    <li> CXOs  </li>
                    <li> Credit & Collection Leadership  </li>
                    <li> Contact Center Management  </li>
                    <li> VPs of Customer Experience, Product, and Digital Transformation  </li>
                    <li> Data Scientists  </li>
                    <li> NLP Practitioners  </li>
                    <li> Innovation Leads  </li>
                    <li> UI/UX Designers & Developers  </li>
                    <li> Marketing Leaders  </li>
                </ul>
                <p> And, anyone who aspires to or is playing a role in the Voice-led era of business.  </p>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default WhoAttend;