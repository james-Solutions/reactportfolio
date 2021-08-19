import React from "react";
import { Col, Card, CardTitle, Row } from "react-materialize";
import Spinner from "../layout/Spinner";
import AppNavBar from "../layout/AppNavBar";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";

const Work = () => {
  document.title = "Portfolio - Work";
  useFirestoreConnect([{ collection: "projects" }]);
  const projects = useSelector((state) => state.firestore.ordered.projects);
  if (projects) {
    return (
      <div id="nav">
        <AppNavBar isWork="active" />
        <div className="container">
          <Row>
            <Card>
              <h1>
                My <span className="light-blue-text">Work</span>
              </h1>
              <h4>Check out of some my work</h4>
              <Row>
                {projects.map((project) => (
                  <Col l={4} m={6} s={12} key={project.id}>
                    <Card
                      header={<CardTitle image={project.filePath} />}
                      actions={[
                        <Row key={project.id}>
                          <a
                            key={project.id}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ marginLeft: "0.5rem" }}
                          >
                            <i
                              style={{ color: "#039be5" }}
                              className="fab fa-github fa-2x"
                            />
                            <p
                              style={{
                                display: "inline",
                                color: "#039be5",
                                marginLeft: "1rem",
                              }}
                            >
                              {"<View Code>"}
                            </p>
                          </a>
                        </Row>,
                      ]}
                      key={project.id}
                    >
                      <span className="card-title">{project.name}</span>
                      <p>{project.comments}</p>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card>
          </Row>
        </div>
      </div>
    );
  } else {
    return (
      <div id="nav">
        <AppNavBar isWork="active" />
        <div className="container">
          <h1 style={{ textAlign: "center" }}>Loading</h1>
          <span style={{ textAlign: "center" }}>
            <Spinner />
          </span>
        </div>
      </div>
    );
  }
};

export default Work;
