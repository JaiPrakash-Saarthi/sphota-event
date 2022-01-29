import React from 'react';
import { Container,Row,Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./OurPartner.css";

import IndiaVoiceTec from "../../../assets/ourpartner/india.png";
import AsiaVoiceTec from "../../../assets/ourpartner/asia.png";
import MiddleEastVoiceTec from "../../../assets/ourpartner/middleeast.png";
import AmericaVoiceTec from "../../../assets/ourpartner/america.png";
import Iamai from "../../../assets/ourpartner/iamai.png";
import gwfm from "../../../assets/ourpartner/gwfm.png";


const OurPartner = () => {
    return(
        <>
        <Container>
            <Row>
                <Col className="ourPartnerCont1Row1Col1">
                <h2>
                    Our Partners: 
                </h2>
                </Col>
            </Row>
            <Row className='ourPartnerRow2'>
                <Col className="ourPartnerCont1Row2Col1IMg">
                <img src={IndiaVoiceTec} alt="india voice tech"/>
                </Col>
                <Col className="ourPartnerCont1Row2Col1IMg">
                <img src={AmericaVoiceTec} alt="america voice tech"/>
                </Col>
                <Col className="ourPartnerCont1Row2Col1IMg">
                <img src={AsiaVoiceTec} alt="asia voice tech"/>
                </Col>
                <Col className="ourPartnerCont1Row2Col1IMg">
                <img src={MiddleEastVoiceTec} alt="middle voice tech"/>
                </Col>
                <Col className="ourPartnerCont1Row2Col1IMg">
                <img src={Iamai} alt="Iamai voice tech"/>
                </Col>
                <Col className="ourPartnerCont1Row2Col1IMg">
                <img src={gwfm} alt="gwfm voice tech"/>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default OurPartner;