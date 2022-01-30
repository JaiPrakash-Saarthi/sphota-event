import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./OurSpeaker.css";
import SpeakerImage from "./speakerImage/SpeakerImage";


import DhirajAgarwal from "../../../assets/speakerImage/Dhiraj Agarwal.jpeg"
import GirishNathJha from "../../../assets/speakerImage/Girish Nath Jha.jpeg"
import PrassannaLohar from "../../../assets/speakerImage/Prasanna Lohar.jpeg"
import RishabhGarg from "../../../assets/speakerImage/Rishabh Garg.jpeg"
import RiteshKumar from "../../../assets/speakerImage/Ritesh Kumar.jpeg"
import ShreejitMenon from "../../../assets/speakerImage/Shreejit Menon.jpeg"
import SriparnaSaha from "../../../assets/speakerImage/Sriparna Saha.jpeg"
import KVDipu from "../../../assets/speakerImage/MrKVDipu.jpg"
import AnujeetKudva from "../../../assets/speakerImage/anujeetkudva.png"
import Aishwarya from "../../../assets/speakerImage/aishwarya.png"






const OurSpeaker = () => {
    
    const speakerInfo = [
        {
            imgUrl:GirishNathJha,
            name:"Prof. Girish Nath Jha",
            designation:"Professor of Computational Linguistics School for Sanskrit and Indic Studies, JNU"
        },
        {
            imgUrl:ShreejitMenon,
            name:"Shreejit Menon",
            designation:"CEO - Indostar Home Finance"
        },
        {
            imgUrl:SriparnaSaha,
            name:"Dr. Sriparna Saha",
            designation:"Associate Prof. of AIML IIT Patna"
        },
        {
            imgUrl:RiteshKumar,
            name:"Ritesh Kumar",
            designation:"Associate Professor CTRANS"
        },
        // {
        //     imgUrl:"",
        //     name:"Dr. Pushpak Bhattacharya",
        //     designation:"Professor at Computer Science and Engineering Department, IIT Bombay, ex-Director of Indian Institute of Technology Patna"
        // },
        {
            imgUrl:DhirajAgarwal,
            name:"Dhiraj Agarwal",
            designation:"CEO TW & EV BUSINESS at Mannapuram Finance"
        },
        // {
        //     imgUrl:"",
        //     name:"Sivakumar Nandipati",
        //     designation:"Chief Digital Officer,FedFina"
       // 
        // },
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
        {
            imgUrl:KVDipu,
            name:"Mr K V Dipu ",
            designation:"President - Bajaj Allianz General Insurance Company"     
        },
        {
            imgUrl:AnujeetKudva,
            name:" Anujeet Kudva ",
            designation:"Cheif Risk Officer, Avail Finance"     
        },
        {
            imgUrl:Aishwarya,
            name:"Aishwarya Jaishankar",
            designation:"Co-founder, Hyperface Technologies"     
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