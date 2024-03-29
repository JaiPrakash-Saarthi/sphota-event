import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./OurSpeaker.css";
import SpeakerImage from "./speakerImage/SpeakerImage";


import DhirajAgarwal from "../../../assets/speakerImage/Dhiraj Agarwal.jpeg"
import GirishNathJha from "../../../assets/speakerImage/Girish Nath Jha.jpeg"

import PrassannaLohar from "../../../assets/speakerImage/Prasanna Lohar.jpeg"

import RishabhGarg from "../../../assets/speakerImage/Rishabh Garg.jpeg"





const OurSpeaker = () => {

    const speakerInfo = [
        {
            imgUrl:GirishNathJha,
            name:"Prof. Girish Nath Jha",
            designation:"Professor of Computational Linguistics School for Sanskrit and Indic Studies, JNU"
        },
        {
            imgUrl:"",
            name:"Dr. Sriparna Saha",
            designation:"Associate Prof. of AIML IIT Patna"
        },
        {
            imgUrl:"",
            name:"Ritesh",
            designation:"Associate Professor CTRANS"
        },
        {
            imgUrl:"",
            name:"Dr. Pushpak Bhattacharya",
            designation:"Professor at Computer Science and Engineering Department, IIT Bombay, ex-Director of Indian Institute of Technology Patna"
        },
        {
            imgUrl:DhirajAgarwal,
            name:"Dhiraj Agarwal",
            designation:"CEO TW & EV BUSINESS at Mannapuram Finance Shreejit Menon - CEO, Indostar Capital"
        },
        {
            imgUrl:"",
            name:"Sivakumar Nandipati",
            designation:"Chief Digital Officer,FedFina"
        },
        {
            imgUrl:PrassannaLohar,
            name:"Prassanna Lohar",
            designation:"VP - Technology, DCB Bank"  
        },
        {
            imgUrl:RishabhGarg,
            name:"Rishabh Garg",
            designation:"CTO @ U Gro Capital"     
        },
    ]
    return(
        <>
        <Container fluid>
            <Row>
                <Col className="speakerHeading">
                <h2>
                Our Speakers 
                </h2>
                </Col>  
            </Row>
            <Row>
            {
                speakerInfo?.map( ( item ,i) => {
                    return(
                        <>
                        <Col key={i} lg="4">
                        <SpeakerImage item={item} i={i}/>
                        </Col>
                        </>
                    )
                })
            }
            </Row>
        </Container>
        </>
    )

}

export default OurSpeaker;