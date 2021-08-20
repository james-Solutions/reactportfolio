import React from "react";
import { Col, Card } from "react-materialize";
import AppNavBar from "../layout/AppNavBar";

const About = () => {
  document.title = "Portfolio - About";
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
                src="https://firebasestorage.googleapis.com/v0/b/react-portfolio-58cba.appspot.com/o/project-images%2Fprofile.png?alt=media&token=0e0aa612-011a-4dd7-8621-f00980e7dd72"
                alt="James"
                width="300"
                style={{
                  borderRadius: "50%",
                  border: "#03a9f4 3px solid",
                }}
              />
            </Col>
            <Col m={8} s={12}>
              <Card>
                <h2 className="center-align">
                  <span className="light-blue-text">BIO</span>
                </h2>
                <p>
                  I grew up in central Arkansas and graduated from ITT Technical
                  Institute in 2009 with an Associates in Software Application
                  Programming. Afterwards I joined the U.S. Army as a Fire
                  Support Specialist. I deployed to Afghanistan in 2012,
                  returning in 2013. I was honorably discharged as a Sergeant
                  after 4 years of service. After the military I was lucky
                  enough to do a travelling position with ABC Financial
                  Services. In which I conducted my own travel around the U.S.
                  and Canada to provide software training and support for ABC
                  Clients.
                </p>
                <br />
                <p>
                  In August 2020 I was hired as an Undergraduate Intern at the
                  Emerging Analytics Center. Where I put my self-taught React
                  skills to use. I shortly later received my Bachelors of
                  Computer Science from the University of Arkansas at Little
                  Rock in May 2021. I am now pursuing a Masters of Computer
                  Science at the University of Arkansas at Little Rock. As well,
                  I am a Graduate Research Assistant at the EAC.
                </p>
                <br />
                <p>
                  My skills are focused in the Web Development and Mobile
                  Development areas. I enjoy working in React and React Native,
                  along with using Cloud Database Services like Google's
                  Firestore/Firebase. I enjoy producing quality Websites and
                  Applications that focus on the users experience.
                </p>
              </Card>
            </Col>
          </div>
          <div className="row">
            <Col m={6} s={12}>
              <Card className="white-text light-blue lighten-2">
                <h3>Emerging Analytics Center</h3>
                <h6>Graduate Research Assistant</h6>
                <p style={{ fontStyle: "italic" }}>Aug 2021 - current</p>
                <hr />
                <p>I perform research work on graduate projects.</p>
              </Card>
            </Col>
            <Col m={6} s={12}>
              <Card className="white-text light-blue lighten-2">
                <h3>Emerging Analytics Center</h3>
                <h6>Undergraduate Intern</h6>
                <p style={{ fontStyle: "italic" }}>Aug 2020 - Aug 2021</p>
                <hr />
                <p>
                  I was brought onboard to work on a React Project that was
                  using machine learning with x-ray imagery. Being the most
                  experienced with React on the team, I implemented numerous
                  React Design patterns. Namely, the Redux architecture using
                  Redux Toolkit. As well, I worked on the server communication
                  in Node.js using Socket.IO and REST API's.
                </p>
              </Card>
            </Col>
            <Col m={6} s={12}>
              <Card className="white-text light-blue lighten-2">
                <h3>ABC Financial Services</h3>
                <h6>OnSite Implementation Manager</h6>
                <p style={{ fontStyle: "italic" }}>May 2015 - Jan 2017</p>
                <hr />
                <p>
                  I traveled the U.S. and Canada for ABC Financial to train new
                  and existing clients for the ABC provided software called
                  ’DataTrak.’ Each clients needs in training were coordinated
                  based upon client's business model. Travel arrangements were
                  coordinated based upon the clients schedule to meet
                  appropriate deadlines. Managed expense reports of said
                  arrangements. Along with detailing daily update reports to
                  account executives and others.
                </p>
              </Card>
            </Col>
            <Col m={6} s={12}>
              <Card className="white-text light-blue lighten-2">
                <h3>U.S. Army</h3>
                <h6>Fire Support Sergeant</h6>
                <p style={{ fontStyle: "italic" }}>Mar 2011 - Apr 2015</p>
                <hr />
                <p>
                  While in the Army my main job was targeting of enemy assets.
                  Analyzing these targets in combination with terrain to provide
                  accurate effects and location data for indirect fire; mortars,
                  artillery, aviation, jets etc. Utilized equipment such as
                  laser range finders and radios of varying types to report this
                  information. Trained to coordinate between multiple branches
                  of military, as a qualified Joint Fires Operator.
                </p>
              </Card>
            </Col>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
