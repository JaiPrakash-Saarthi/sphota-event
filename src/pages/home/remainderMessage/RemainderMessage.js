import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const RemainderMessage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <h3>
              Join us on 3rd February 2022 to learn from the frontrunners in
              these industries, on how they are achieving value from the
              Intelligent Packaging revolution! In this 1-hour session we
              discuss -
            </h3>
            <ul>
              <li>
                Opportunity analysis for Intelligent Packaging in - Consumer
                Products, Food & Beverages and Healthcare
              </li>
              <li>
                Use cases of Intelligent Packaging across leading enterprises
                <ul>
                  <li>
                    What are the path-breaking innovations in packaging design
                    and technology?
                  </li>
                  <li>The value delivered</li>
                </ul>
              </li>
              <li>
                What is needed for winning – agile innovations, re-evaluation of
                value chains or a complete business model reinvention?
              </li>
              <li>
                What challenges organizations are overcoming in the process
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RemainderMessage;
