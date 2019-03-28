import React from 'react';
import { Footer, Col, Row, Icon } from 'react-materialize';
import Button from 'react-materialize/lib/Button';

import '../../index.css';

export default function WebFooter() {
  return (
    <Footer copyrights="&copy; 2019 James Bromley" className="light-blue">
      <h5 className="white-text">Social Media</h5>
      <Row>
        <Col s={1}>
          <a
            style={{
              color: 'white'
            }}
            rel="noopener noreferrer"
            target="_BLANK"
            href="https://www.linkedin.com/in/james-bromley-bb2101113"
          >
            <i className="fab fa-linkedin fa-2x" />
          </a>
        </Col>
        <Col s={1}>
          <a
            style={{ color: 'white' }}
            target="_BLANK"
            rel="noopener noreferrer"
            href="https://github.com/james-Solutions"
          >
            <i className="fab fa-github fa-2x" />
          </a>
        </Col>
        <Col s={10}>
          <a href="https://firebasestorage.googleapis.com/v0/b/react-portfolio-58cba.appspot.com/o/Bromley-Resume.doc?alt=media&token=eebbec9f-8e67-4046-bcfc-01ee3147a780">
            <Button
              waves="light"
              className="light-blue lighten-2"
              tooltip="Download Resume in Word Format"
            >
              <Icon left>cloud</Icon>Resume
            </Button>
          </a>

          <a
            target="_BLANK"
            rel="noopener noreferrer"
            href="https://firebasestorage.googleapis.com/v0/b/react-portfolio-58cba.appspot.com/o/Bromley-CV.pdf?alt=media&token=e0d9e381-cfdd-41a2-8b6c-e2ee9bc23c48"
          >
            <Button
              waves="light"
              className="light-blue lighten-2 cvBtn"
              tooltip="Download CV in PDF Format"
            >
              <Icon left>cloud</Icon>CV
            </Button>
          </a>
        </Col>
      </Row>
    </Footer>
  );
}
