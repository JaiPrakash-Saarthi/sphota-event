
import React from 'react';
import { Container,Row,Col,Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./EventPartner.css";
import EventPartnerImage from "../../../../assets/ourpartner/EventPartner.svg";


const EventPartner = () => {
    return(
        <>
        <Container>
            <Row>
                <Col className='ecoSysPartnerRow1Col1'>
                <h2>
                Event Partner
                </h2>
                </Col>
            </Row>
            <Row>
               <Col style={{textAlign:"center"}}>
               <img src={EventPartnerImage} alt="Ecosystem Image" className='eventPartnerImageCss'/>
               </Col>
            </Row>
        </Container>
        </>
    )
}

export default EventPartner;