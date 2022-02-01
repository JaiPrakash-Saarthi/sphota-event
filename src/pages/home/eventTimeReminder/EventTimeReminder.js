import React, { useEffect, useState } from "react";
//import TimeCountDown from 'react-date-countdown-timer';
import { Container, Row, Col,Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EventTimeReminder.css";
import TimerSaarthi from "../../../components/timerSaarthi/TimerSaarthi";


const EventTimeReminder = () => {
    const[counterTime, setCounterTime] = useState(295200000);


    const calculateTimeDiff = () => {
        let date1 = new Date();
        let date2 = new Date(2022, 1, 1,10,5,35);
        let diffTime = date2.getTime() - date1.getTime();
        setCounterTime(prev => diffTime);  
    }

 
useEffect(() => {
    calculateTimeDiff();
},[]);




    return(
        <>
        <Container className="eventTimeContainer">
            <Row>
                <Col> </Col>
                <Col className="eventTimerRow1Col1" sm={10} lg={6}>
                    {/* <h4>
                        Sphot starts in
                    </h4> */}
                    <TimerSaarthi counterTime={counterTime} message=" Sphot is Live Now! "/>
                </Col>
                <Col > </Col>

            </Row>
        </Container>
       
        </>
    )
}

export default EventTimeReminder