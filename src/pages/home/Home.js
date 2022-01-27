import React from "react";
import AboutEvent from "./aboutEvent/AboutEvent";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingImage from "./landingImage/LandingImage";
import OurSpeaker from "./ourSpeaker/OurSpeaker";
import RemainderMessage from "./remainderMessage/RemainderMessage";
import WhyAttend from "./whyAttend/WhyAttend";
import WhoAttend from "./whoAttend/WhoAttend";
import AboutSaarthi from "./aboutSaarthi/AboutSaarthi";

const Home = () => {
  return (
    <>
      <Container fluid p-0 m-0 style={{padding:"0px",margin:"0px"}}>
        <Row>
          <Col>
            <LandingImage />
          </Col>
        </Row>
      </Container>
      <Container className="AboutEventComponent">
        <Row>
          <Col>
            <AboutEvent />
          </Col>
        </Row>
        </Container>
        <Container>
        <Row>
          <Col>
            <OurSpeaker/>
          </Col>
        </Row>
      </Container>
      <Container className="AboutEventComponent">
        <Row>
          <Col>
            <WhyAttend/>
          </Col>
          <Col>
            <WhoAttend/>
          </Col>
        </Row>
      </Container>
      {/* <Container>
        <Row>
          <Col>
            <WhoAttend/>
          </Col>
        </Row>
      </Container> */}
      <Container>
        <Row>
          <Col>
            <AboutSaarthi/>
          </Col>
        </Row>
      </Container>
      {/* <Container className="AboutEventComponent">
        <Row>
          <Col>
            <RemainderMessage/>
          </Col>
        </Row>
      </Container> */}
    </>
  );
};

export default Home;
