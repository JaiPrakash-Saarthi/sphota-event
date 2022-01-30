import React from "react";
import { Container,Row,Col,Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavigationBar.css";

import VirtualEventImg from "./VirtualEventIcon.svg";


const NavigationBar = (props) => {
    return(
        <>
        <Container fluid className="navigationBarContainer">
            <Row className="navigationBarRow1">
                <Col className="navigationBarRow1Col1">
                    <img src={VirtualEventImg} alt="img"/> &nbsp;&nbsp;&nbsp;
                   <h4>
                       Virtual Event
                   </h4>
                </Col>
                <Col className="navigationBarRow1Col2">
                    <Button className="navigationBarRow1Col2Button" onClick={()=>props.onClicked()}>
                        <a style={{textDecoration:"none",color:"black"}} href="https://www.airmeet.com/e/2dc28110-8119-11ec-9887-b344f2c0406f" target="_blank">
                             Register </a></Button>
                </Col>
            </Row>
        </Container>

        </>
    )
}

export default NavigationBar