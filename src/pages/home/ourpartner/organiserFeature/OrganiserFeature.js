
import React from 'react';
import { Container,Row,Col,Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./OrganiserFeature.css";
import OrganiserFeaturePartnerImage from "../../../../assets/ourpartner/OrganiserFeatureImage.svg";


const OrganiserFeature = () => {
    return(
        <>
        <Container>
            <Row>
                <Col className='ecoSysPartnerRow1Col1'>
                <h2>
                    Organiser Featured In
                </h2>
                </Col>
            </Row>
            <Row>
               <Col style={{textAlign:"center"}}>
               <Image src={OrganiserFeaturePartnerImage} alt="Ecosystem Image" className='ecoSysPartnerImg'/>
               </Col>
            </Row>
        </Container>
        </>
    )
}

export default OrganiserFeature;