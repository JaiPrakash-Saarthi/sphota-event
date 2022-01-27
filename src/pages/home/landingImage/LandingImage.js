
import React from "react";
import { Container,Row,Col,Image, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingImageReal from "./LandingPageImage.svg";
import "./LandingImage.css";
const LandingImage = () => {
    return(
        <>
        <Container fluid className="landingImageContainer">
            <Row>
                <Col className="landingImageRow1Col1" >
                <img src={LandingImageReal} style={{width:"100%"}}/>
                </Col>
               
            </Row>
            <Row className="landingPageImgRow2">
            <Col className="landingPageImgRow2Col1">
                <h2>
                Defining Meaningful Innovation
                </h2>
                <h4>
                1st Feb, 2022 | Starts at 10am
                </h4>
                <Button className="landingPageImgRow2Col1Button"> Register </Button>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default LandingImage;