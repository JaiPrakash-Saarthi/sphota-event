import React from 'react';
import { Container,Row,Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./OurPartner.css";

import EcoSystemPartner from './ecosystemPartner/EcoSystemPartner';
import OrganiserFeature from './organiserFeature/OrganiserFeature';
import EventPartner from './eventpartner/EventPartner';


const OurPartner = () => {
    return(
        <>
        <Container fluid>
            <Row>
               <Col>
               <EcoSystemPartner/>
               </Col>
            </Row>
        </Container>
        <Container fluid>
            <Row>
               <Col>
               <OrganiserFeature/>
               </Col>
            </Row>
        </Container>
        <Container fluid>
            <Row>
               <Col>
               <EventPartner/>
               </Col>
            </Row>
        </Container>
        </>
    )
}

export default OurPartner;