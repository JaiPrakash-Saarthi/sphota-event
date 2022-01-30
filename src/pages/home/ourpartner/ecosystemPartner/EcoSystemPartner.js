
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
               <Col style={{textAlign:"center"}}>
               <Image src={EcoSystemPartnerImage} alt="Ecosystem Image" className='ecoSysPartnerImg'/>
               </Col>
            </Row>
        </Container>
        </>
    )
}

export default EcoSystemPartner;