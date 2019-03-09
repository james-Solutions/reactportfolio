import React from 'react';
import { Col, Preloader } from 'react-materialize';

export default function Spinner() {
  return (
    <div className="container">
      <Col s={12}>
        <Preloader size="big" />
      </Col>
    </div>
  );
}
