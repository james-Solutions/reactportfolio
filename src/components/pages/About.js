import React, { Component } from 'react';
import { Col, Card } from 'react-materialize';
import AppNavBar from '../layout/AppNavBar';

class About extends Component {
  render() {
    return (
      <div id="about-container">
        <AppNavBar isAbout="active" />
        <div className="container">
          <div className="row">
            <Col s={12}>
              <h1>
                About <span className="light-blue-text">Me</span>
              </h1>
            </Col>
            <div className="row">
              <Col m={4} s={12}>
                <img
                  src="project-images/nigra-cropped.png"
                  alt="James"
                  style={{
                    borderRadius: '50%',
                    border: '#03a9f4 3px solid'
                  }}
                />
              </Col>
              <Col m={8} s={12}>
                <Card>
                  <h2 className="center-align">
                    <span className="light-blue-text">BIO</span>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit atque laboriosam libero voluptate, doloremque
                    itaque quis dolorem inventore excepturi possimus beatae enim
                    modi? Quidem mollitia ipsum expedita nihil adipisci qui.
                  </p>
                </Card>
              </Col>
            </div>
            <div className="row">
              <Col m={6} s={12}>
                <Card className="white-text light-blue lighten-2">
                  <h3>ABC Financial Services</h3>
                  <h6>OnSite Implementation Manager</h6>
                  <p style={{ fontStyle: 'italic' }}>May 2015 - Jan 2017</p>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    iure, quam maxime alias distinctio sit cumque consequuntur!
                    Voluptate suscipit temporibus, illum a quos ducimus
                    asperiores pariatur voluptatum impedit numquam harum.
                  </p>
                </Card>
              </Col>
              <Col m={6} s={12}>
                <Card className="white-text light-blue lighten-2">
                  <h3>U.S. Army</h3>
                  <h6>Fire Support Sergeant</h6>
                  <p style={{ fontStyle: 'italic' }}>Mar 2011 - Apr 2015</p>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequuntur ea quaerat ipsum vero blanditiis porro numquam
                    facilis id quibusdam, magnam totam eaque possimus tempora,
                    in, fugit molestias quos est! Officiis expedita cupiditate
                    laboriosam, quod, ipsam, tenetur velit quibusdam magni
                    inventore voluptatum mollitia nostrum saepe ab nulla
                    architecto? Impedit, sunt voluptatibus!
                  </p>
                </Card>
              </Col>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
