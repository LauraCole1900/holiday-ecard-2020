import React from "react";
import { Bounce, Fade, Flip, LightSpeed, Roll, Rotate, Zoom } from "react-reveal";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

const Holiday = () => {
  return (
    <Container className="container">
      <Row className="wishing">
        <div>
          <Fade>
            <Col sm={6}>
              <h1 className="opening">Wishing you a</h1>
            </Col>
          </Fade>
        </div>
      </Row>
      <Row className="holiday">
        <Col sm={4}></Col>
        <div>
          <Bounce top>
            <Col sm={8}>
              <h1 className="season">happy holiday season</h1>
            </Col>
          </Bounce>
        </div>
      </Row>
    </Container>
  )
}

export default Holiday;