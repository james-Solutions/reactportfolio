import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
// import { Link } from 'react-router-dom';
import { Col, Card, CardTitle, Row } from 'react-materialize';
import Spinner from '../layout/Spinner';
import AppNavBar from '../layout/AppNavBar';
import AdminEditWorkRow from '../admin/AdminEditWorkRow';

class Work extends Component {
  static propTypes = {
    projects: PropTypes.array,
    firestore: PropTypes.object.isRequired,
    isAdmin: PropTypes.bool
    // adminDelete: PropTypes.func
  };
  render() {
    const { projects, isAdmin } = this.props;
    if (isAdmin) {
      if (projects) {
        return (
          <div id="nav">
            <AppNavBar isWork="active" />
            <div className="container">
              <Row>
                <Card>
                  <h1>My Work</h1>
                  <h4>Check out of some my work</h4>
                  <Row>
                    {projects.map(project => (
                      <Col l={4} m={6} s={12} key={project.id}>
                        <Card
                          header={
                            <CardTitle image={project.filePath}>
                              {project.name}
                            </CardTitle>
                          }
                          actions={[
                            <Row key={project.id}>
                              <Col s={12}>
                                <AdminEditWorkRow />
                              </Col>
                              <Col s={12}>
                                <a
                                  href={project.github}
                                  style={{ marginLeft: '0.5rem' }}
                                >
                                  <i
                                    style={{ color: '#039be5' }}
                                    className="fab fa-github fa-2x"
                                  />
                                  <p
                                    style={{
                                      display: 'inline',
                                      color: '#039be5',
                                      marginLeft: '1rem'
                                    }}
                                  >
                                    {'<View Code>'}
                                  </p>
                                </a>
                              </Col>
                            </Row>
                          ]}
                          key={project.id}
                        >
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
              <h1 style={{ textAlign: 'center' }}>Loading</h1>
              <span style={{ textAlign: 'center' }}>
                <Spinner />
              </span>
            </div>
          </div>
        );
      }
    } else {
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
                    {projects.map(project => (
                      <Col l={4} m={6} s={12} key={project.id}>
                        <Card
                          header={
                            <CardTitle image={project.filePath}>
                              {project.name}
                            </CardTitle>
                          }
                          actions={[
                            <Row key={project.id}>
                              <a
                                key={project.id}
                                href={project.github}
                                style={{ marginLeft: '0.5rem' }}
                              >
                                <i
                                  style={{ color: '#039be5' }}
                                  className="fab fa-github fa-2x"
                                />
                                <p
                                  style={{
                                    display: 'inline',
                                    color: '#039be5',
                                    marginLeft: '1rem'
                                  }}
                                >
                                  {'<View Code>'}
                                </p>
                              </a>
                            </Row>
                          ]}
                          key={project.id}
                        >
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
              <h1 style={{ textAlign: 'center' }}>Loading</h1>
              <span style={{ textAlign: 'center' }}>
                <Spinner />
              </span>
            </div>
          </div>
        );
      }
    }
  }
}

export default compose(
  firestoreConnect([{ collection: 'projects' }]),
  connect((state, props) => ({
    projects: state.firestore.ordered.projects
  }))
)(Work);
