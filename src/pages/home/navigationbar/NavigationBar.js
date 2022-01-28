import React from "react";
import { Container,Row,Col,Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavigationBar.css";

import VirtualEventImg from "./VirtualEventIcon.svg";


const NavigationBar = (props) => {
    return(
        <>
        <Container fluid className="navigationBarContainer">
            <Row>
                <Col className="navigationBarRow1Col1">
                    <img src={VirtualEventImg} alt="img"/> &nbsp;&nbsp;&nbsp;
                   <h4>
                       Virtual Event
                   </h4>
                </Col>
                <Col className="navigationBarRow1Col2">
                    <Button className="navigationBarRow1Col2Button" onClick={()=>props.onClicked()}> Register </Button>
                </Col>
            </Row>
        </Container>

        </>
    )
}

export default NavigationBar