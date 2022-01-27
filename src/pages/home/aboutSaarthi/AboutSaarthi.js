import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const AboutSaarthi = () => {
    return(
        <>
        <Container>
            <Row>
                <Col>
                <h2>
                About Saarthi.ai 
                </h2>
                <p>
                Saarthi.ai helps global enterprises automate customer communication with multilingual contact center AI 
                </p>
                <p>
                With our Voice AI and analytics solutions, we are scaling the contact centers of Avail Finance, Manappuram Finance Ltd., Cred, Shriram Finance, Bada Business, Ola Money among others 
                </p>
                <p>
                We are endorsed by industry bodies such as NASSCOM, FICCI, MEITY, IAMAI, and many others. We are also part of NVIDIA Inception Accelerator, Microsoft for Startups, AWS ML Elevate, and NASSCOM DeepTech Club 
                </p>
                <p>
                We are working to simplify and standardize voice and non-voice customer communication for enterprises. 
                </p>
                <p>
                Visit <a href="https://saarthi.ai/" target="_blank">  https://saarthi.ai/ </a>
                for more information
                </p>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default AboutSaarthi;