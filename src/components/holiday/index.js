import React from "react";
import { Animate, AnimateGroup } from "react-simple-animate";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

const Holiday = () => {
  return (
    <Container className="container">
      <AnimateGroup play>
        <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={0}>
          <Row>
            <Col>
              <h2 className="wishing">Wishing you</h2>
            </Col>
          </Row>
        </Animate>
        <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={1}>
          <Row>
            <Col>
              <h2 className="holiday">a happy holiday season</h2>
            </Col>
          </Row>
        </Animate>
        <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={2}>
          <Row>
            <Col>
              <h2 className="anda">and a</h2>
            </Col>
          </Row>
        </Animate>
        <Row className="joyous">
          <Col sm={1}>
            <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={3}>
              <h1 className="red">j</h1>
            </Animate>
          </Col>
          <Col sm={1}>
            <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={4}>
              <h1 className="yellow">o</h1>
            </Animate>
          </Col>
          <Col sm={1}>
            <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={5}>
              <h1 className="green">y</h1>
            </Animate>
          </Col>
          <Col sm={1}>
            <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={6}>
              <h1 className="purple">o</h1>
            </Animate>
          </Col>
          <Col sm={1}>
            <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={7}>
              <h1 className="orange">u</h1>
            </Animate>
          </Col>
          <Col sm={1}>
            <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={8}>
              <h1 className="yellowgreen">s</h1>
            </Animate>
          </Col>
        </Row>
        <Row className="new">
          <Col sm={5}></Col>
          <Col sm={1}>
            <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={9}>
              <h1 className="yellow">n</h1>
            </Animate>
          </Col>
          <Col sm={1}>
            <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={10}>
              <h1 className="red">e</h1>
            </Animate>
          </Col>
          <Col sm={1}>
            <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={11}>
              <h1 className="orange">w</h1>
            </Animate>
          </Col>
        </Row>
        <Row className="year">
          <Col sm={7}></Col>
          <Col sm={1}>
            <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={12}>
              <h1 className="yellowgreen">y</h1>
            </Animate>
          </Col>
          <Col sm={1}>
            <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={13}>
              <h1 className="blue">e</h1>
            </Animate>
          </Col>
          <Col sm={1}>
            <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={14}>
              <h1 className="red">a</h1>
            </Animate>
          </Col>
          <Col sm={1}>
            <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={15}>
              <h1 className="green">r</h1>
            </Animate>
          </Col>
          <Col sm={1}>
            <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={16}>
              <h1 className="yellow">!</h1>
            </Animate>
          </Col>
        </Row>
        <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={17}>
          <Row className="happy2021">
            <Col>
              <h2 className="holiday">Have a safe and happy 2021!</h2>
            </Col>
          </Row>
        </Animate>
      </AnimateGroup>
    </Container >
  )
}

export default Holiday;