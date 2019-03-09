import React from 'react';
import { Footer, Col, Row, Icon } from 'react-materialize';
import Button from 'react-materialize/lib/Button';

export default function WebFooter() {
  return (
    <Footer copyrights="&copy; 2019 James Perry" className="light-blue">
      <h5 className="white-text">Social Media</h5>
      <Row>
        <Col s={2}>
          <i className="fab fa-linkedin fa-2x" />
        </Col>
        <Col s={2}>
          <i className="fab fa-github fa-2x" />
        </Col>
        <Col s={6}>
          <Button
            waves="light"
            className="light-blue lighten-2"
            tooltip="Download Resume in Word Format"
          >
            <Icon left>cloud</Icon>Resume
          </Button>
        </Col>
      </Row>
    </Footer>
  );
}
