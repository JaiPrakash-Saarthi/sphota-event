import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./OurSpeaker.css";
import SpeakerImage from "./speakerImage/SpeakerImage";




const OurSpeaker = () => {

    const speakerInfo = [
        {
            imgurl:"",
            name:"Prof. Girish Nath Jha",
            designation:"Professor of Computational Linguistics School for Sanskrit and Indic Studies, JNU"
        },
        {
            imgurl:"",
            name:"Dr. Sriparna saha",
            designation:"Associate Prof. of AIML IIT Patna"
        },
        {
            imgurl:"",
            name:"Ritesh",
            designation:"Associate Professor CTRANS"
        },
        {
            imgurl:"",
            name:"Dr. Pushpak Bhattacharya",
            designation:"Professor at Computer Science and Engineering Department, IIT Bombay, ex-Director of Indian Institute of Technology Patna"
        },
        {
            imgurl:"",
            name:"Dhiraj agarwal",
            designation:"CEO TW & EV BUSINESS at Mannapuram Finance Shreejit Menon - CEO, Indostar Capital"
        },
        {
            imgurl:"",
            name:"Sivakumar Nandipati",
            designation:"Chief Digital Officer,FedFina"
        },
        {
            imgurl:"",
            name:"Prassanna Lohar",
            designation:"VP - Technology, DCB Bank"
        },
    ]
    return(
        <>
        <Container fluid>
            <Row>
                <Col className="speakerHeading">
                <h2>
                Speakers 
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