import React, { useState } from "react";
import { Container, Row, Col,Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EventTimeReminder.css";
import TimerSaarthi from "../../../components/timerSaarthi/TimerSaarthi";

const EventTimeReminder = () => {
    const[counterTime] = useState(295200000)
    return(
        <>
        <Container className="eventTimeContainer">
            <Row>
                <Col> </Col>
                <Col className="eventTimerRow1Col1" sm={10} lg={6}>
                    <h4>
                        Sphot starts in
                    </h4>
                    <TimerSaarthi counterTime={counterTime} message="Registeration Closed"/>
                </Col>
                <Col > </Col>

            </Row>
        </Container>
       
        </>
    )
}

export default EventTimeReminder