
import React from 'react';
import { Container,Row,Col,Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./EcoSystemPartner.css";
import EcoSystemPartnerImage from "../../../../assets/ourpartner/ecosystem.svg";


const EcoSystemPartner = () => {
    return(
        <>
        <Container>
            <Row>
                <Col className='ecoSysPartnerRow1Col1'>
                <h2>
                Ecosystem Partners
                </h2>
                </Col>
            </Row>
            <Row>
               <Col>
               <Image src={EcoSystemPartnerImage} alt="Ecosystem Image" style={{width:"100%"}}/>
               </Col>
            </Row>
        </Container>
        </>
    )
}

export default EcoSystemPartner;