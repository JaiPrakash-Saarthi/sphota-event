import React from "react";
import { Container,Row,Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./EventInfo.css";
const EventInfo = () => {
    return(
        <>
        <Container>
        <Row>
            <Col>
            <h2>
                 About Sphot 
            </h2>
            </Col>
        </Row>
        <Row >
            <Col>
            <p>
                We’re turning 5 on Feb 1.
            </p>
            </Col>
        </Row>
        {/* <Row className="eventInfoCol3">
            <Col>
            <p>
            Just how much is the potential for Intelligent Packaging in these industries? Here are some statistics from our analysis
            </p>
           <ul>
               <li>
               Food & Beverages industry is by far the frontrunner in adoption of Intelligent packaging solutions, accounting for 45% share
               </li>
               <li>
               Intelligent Packaging to record growth avenues worth $3.5 Bn in Healthcare due to stringent packaging and transport norms for various medicinal drugs and supplies
               </li>
               <li>
               Intelligent packaging solutions that are interactive, smart, and connected will generate $1 Bn opportunities in Consumer Products
               </li>
           </ul>
            </Col>
        </Row> */}
        <Row>
            <Col>
            <p>
            And, we’re celebrating the day with Sphot: A full-day virtual event that’ll bring together the best minds from the field of Linguistics, AI, and BFSI.             </p>
            <h5>
            Thought-provoking Talks Revolving Around
            </h5>
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
            </Col>
        </Row>
        </Container>
        </>
    )
}

export default EventInfo;