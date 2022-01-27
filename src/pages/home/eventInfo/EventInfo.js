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
            <h3>
                About Event
            </h3>
            </Col>
        </Row>
        <Row >
            <Col>
            <h5>
            Industry focus: Packaging, Food & Beverages, Consumer Products, Healthcare
            </h5>
            </Col>
        </Row>
        <Row className="eventInfoCol3">
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
        </Row>
        <Row>
            <Col>
            <p>
            The primary objective of Intelligent Packaging is to combat waste, maintain product integrity, and improve customer experience through interaction with the product inside and buyers.
            </p>
            <p>
            While Intelligent Packaging is in early stages of mainstream adoption, industries such as Food & Beverages, Consumer Products, Healthcare are clear leaders in embracing bold innovations in this space mainly in 3 areas
            </p>
            <ul>
                <li>
                Maintaining product integrity

                </li>
                <li>
                For the next level customer engagement
                    </li>
                    <li>
                    
Improving inventory and lifecycle management
                    </li>
            </ul>
            </Col>
        </Row>
        </Container>
        </>
    )
}

export default EventInfo;