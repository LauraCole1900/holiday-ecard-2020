import React from "react";
import { CSSTransitionGroup } from 'react-transition-group';
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
          <CSSTransitionGroup
            transitionName="holidays"
            transitionEnterTimeout={5000}
            transitionLeaveTimeout={300}>
            <Bounce top>
              <Col sm={8}>
                <h1 className="season">happy holiday season</h1>
              </Col>
            </Bounce>
          </CSSTransitionGroup>
        </div>
      </Row>
      <Row className="anda">
        <Col sm={9}></Col>
        <div>
          <Fade>
            <Col sm={2}>
              <h1>and a</h1>
            </Col>
          </Fade>
        </div>
      </Row>
      <Row className="joyous">
        <Col sm={3}></Col>
        <Col sm={2}>
          <h1>joyous</h1>
        </Col>
      </Row>
      <Row className="new">
        <Col sm={6}></Col>
        <Col sm={2}>
          <h1>new</h1>
        </Col>
      </Row>
      <Row className="year">
        <Col sm={9}></Col>
        <Col sm={2}>
          <h1>year!</h1>
        </Col>
      </Row>
      <Row className="happy2021">
        <Col sm={5}></Col>
        <Col sm={3}>
          <h1>Happy 2021!</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default Holiday;