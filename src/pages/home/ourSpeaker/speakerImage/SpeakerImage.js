import React from "react";
import { Container,Row,Col,Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SpeakerImage.css";

import LandingImageReal from "../../landingImage/LandingPage.png";

const SpeakerImage = (props) => {
    const {imgUrl,name,designation} = props.item;
    return(
        <>
        <Container fluid className="speakerImageContainer">
            <Row >
                <Col >
                <Image src={LandingImageReal} roundedCircle className="speakerImgageCss" />
                </Col>
            </Row>
            <Row >
                <Col className="speakerImageRow2Col1">
                <h4>
               {name}
                </h4>
                <h6>
               {designation}
                </h6>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default SpeakerImage;