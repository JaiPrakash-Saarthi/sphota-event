import React,{useRef} from "react";
import AboutEvent from "./aboutEvent/AboutEvent";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingImage from "./landingImage/LandingImage";
import OurSpeaker from "./ourSpeaker/OurSpeaker";
import WhyAttend from "./whyAttend/WhyAttend";
import WhoAttend from "./whoAttend/WhoAttend";
import AboutSaarthi from "./aboutSaarthi/AboutSaarthi";
import NavigationBar from "./navigationbar/NavigationBar";
import EventTimeReminder from "./eventTimeReminder/EventTimeReminder";

const Home = () => {

  const myScrolltoForm = useRef(null)
     
  const executeScroll = () => myScrolltoForm.current.scrollIntoView() ;

  const goToRegister = () => {
    executeScroll();
  }
  return (
    <>
    <Container fluid className="homeNavigationBar">
        <Row>
          <Col>
            <NavigationBar onClicked={() => goToRegister()} />
          </Col>
        </Row>
      </Container>
      <Container fluid className="homeLandingImage">
        <Row>
          <Col>
            <LandingImage onClicked={() => goToRegister()} />
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
      <Container className="AboutEventComponent" ref={myScrolltoForm}>
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
