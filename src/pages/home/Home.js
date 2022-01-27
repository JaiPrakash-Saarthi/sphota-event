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
import NavigationBar from "./navigationbar/NavigationBar";
import EventTimeReminder from "./eventTimeReminder/EventTimeReminder";

const Home = () => {
  return (
    <>
    <Container fluid className="homeNavigationBar">
        <Row>
          <Col>
            <NavigationBar />
          </Col>
        </Row>
      </Container>
      <Container fluid className="homeLandingImage">
        <Row>
          <Col>
            <LandingImage />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <EventTimeReminder/>
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
            <WhyAttend/>
          </Col>
        </Row>
      </Container>
      <Container className="AboutEventComponent">
        <Row>
          <Col>
            <WhoAttend/>
          </Col>
        </Row>
      </Container>
      <Container >
        <Row>
          <Col>
            <OurSpeaker/>
          </Col>
        </Row>
      </Container>
      <Container  className="AboutEventComponent">
        <Row>
          <Col>
            <AboutSaarthi/>
          </Col>
        </Row>
      </Container>
   
    </>
  );
};

export default Home;
