import React from "react";
import { Container,Row,Col,Image} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./EventInfo.css";

//import AboutInfoImage from "../eventForm/registerImageIcon.svg";

const EventInfo = () => {
    return(
        <>
        <Container className="eventInfoContainer">
        <Row className="eventInfoRow1">
            <Col className="eventInfoRow1Col1">
            <h2>
                 About Sphot 
            </h2>
            <br></br>
            </Col>
        </Row>
        <Row >
            <Col className="eventInfoRow2Col1">
            <p>
                We’re turning 5 on Feb 1.
            </p>
            <br></br>
            </Col>
        </Row>
        <Row>
            <Col className="eventInfoRow2Col1 eventInfoRow3Col1">
            <p>
            And, we’re celebrating the day with Sphot: A full-day virtual event that’ll bring together the best minds from the field of Linguistics, AI, and BFSI.
            </p>
            <br></br>
            <h5>
            Thought-provoking Talks Revolving Around
            </h5>
            <div className="TPTEventInfoImage">
            <ul>
                <li>
                Evolution of languages 
                </li>
                <li>
                Advancement of Indian Languages 
                    </li>
                    <li>
                      Linguistic Diversity 
                    </li>
                    <li>
                    Careers in Voice AI  
                    </li>
                    <li>
                    Multilingual Customer Experience 
                    </li>
                    <li>
                      Contact Center Automation 
                    </li>
                    <li>
                    AI in Banking and Finance 
                    </li>
                    <li>
                    Analytics 
                    </li>
            </ul>
            {/* <div className="eventInfoImageRow2Col2TPT">
            <Image src={AboutInfo} alt="About Image"/>
            </div> */}
            </div>
            </Col>
        </Row>
        </Container>
        </>
    )
}

export default EventInfo;