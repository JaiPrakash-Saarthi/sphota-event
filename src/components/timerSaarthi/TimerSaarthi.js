import React from "react";
import Countdown from "react-countdown";

import "./TimerSaarthi.css";

const TimerSaarthi = (props) => {

    // Random component
const Completionist = () => <span>{props.message ? props.message : "You are good to go!"}</span>;

//Time to count
const counterTime = props.counterTime ? props.counterTime : 5000

    return(
        <>
        <div className="timerSaarthiTopDiv">
        <Countdown date={Date.now() + counterTime }>
            <Completionist />
        </Countdown>
        </div>
        </>
    )
}

export default TimerSaarthi;