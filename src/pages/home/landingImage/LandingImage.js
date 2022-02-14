import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//import LandingImageReal from "./LandingPageImage.svg";
import LandingImageReal from "./zsmallzsphot.jpg";
//import LandingImageReal from "../../../assets/LandingPage.png";
import "./LandingImage.css";
const LandingImage = (props) => {
  return (
    <>
      <Container fluid className="landingImageContainer">
        <Row>
          <Col className="landingImageRow1Col1">
            <img src={LandingImageReal} style={{ width: "100%" }} alt="img" />
          </Col>
        </Row>
        <Row className="landingPageImgRow2">
          <Col className="landingPageImgRow2Col1">
            <h2>Defining Meaningful Innovation</h2>
            <h4>1st Feb, 2022 | Starts at 10am</h4>
            <Button
              className="landingPageImgRow2Col1Button"
              onClick={() => props.onClicked()}
            >
              <a
                style={{ textDecoration: "none",color:"black" }}
                href="https://www.youtube.com/channel/UC86D05-Ia_2oZoMSGlIKYbQ"
                target="_blank"
              >
                Revisit Sphot {" "}
              </a>{" "}
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LandingImage;
