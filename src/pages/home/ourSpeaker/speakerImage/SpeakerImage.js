import React from "react";
import { Container,Row,Col,Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SpeakerImage.css";

import LandingImageReal from "../../landingImage/LandingPage.png";

const SpeakerImage = () => {
    return(
        <>
        <Container fluid>
            <Row>
                <Col >
                <Image src={LandingImageReal} roundedCircle className="speakerImgageCss" />
                </Col>
            </Row>
            <Row>
                <Col >
                <h4>
                Saurabh Sharma
                </h4>
                <h5>
                General Manager, Healthcare
                </h5>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default SpeakerImage;