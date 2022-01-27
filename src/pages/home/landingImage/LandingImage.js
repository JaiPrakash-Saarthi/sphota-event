
import React from "react";
import { Container,Row,Col,Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingImageReal from "./LandingPage.png"

const LandingImage = () => {
    return(
        <>
        <Container fluid p-0 m-0 style={{padding:"0px",margin:"0px"}}>
            <Row >
                <Col>
                <Image src={LandingImageReal} style={{width:"100%"}}/>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default LandingImage;