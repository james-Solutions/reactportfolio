import React, { Component } from 'react';
import AppNavBar from '../layout/AppNavBar';

class NotFound extends Component {
  render() {
    document.title = 'Portfolio - 404 Not Found';
    return (
      <div>
        <AppNavBar />
        <div className="container" style={{ height: '70vh' }}>
          <div className="row">
            <div className="col s12">
              <h1>
                <span className="red-text">404</span>, Page Not Found
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
