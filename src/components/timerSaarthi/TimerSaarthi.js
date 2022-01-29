import React from "react";
import Countdown from "react-countdown";


import "./TimerSaarthi.css";

const TimerSaarthi = (props) => {

    // Random component
const Completionist = () => <span>{props.message ? props.message : "You are good to go!"}</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <span>{days} <span style={{color:"#ffffff"}}>d</span> &nbsp;&nbsp;{hours} <span style={{color:"#ffffff"}}>h</span> &nbsp;&nbsp;{minutes} <span style={{color:"#ffffff"}}>m</span> &nbsp;&nbsp;{seconds} <span style={{color:"#ffffff"}}>s</span></span>;
    }
  };

//Time to count
const counterTime = props.counterTime ? props.counterTime : 5000

    return(
        <>
        <div className="timerSaarthiTopDiv">
        <Countdown date={Date.now() + counterTime } renderer={renderer}>
            <Completionist />
        </Countdown>
        </div>
        </>
    )
}

export default TimerSaarthi;