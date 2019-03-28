import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';

class Captcha extends Component {
  onChange = response => {};
  verifyCallback = response => {
    if (response) {
      this.setState({
        isVerified: true
      });
    }
  };
  render() {
    return (
      <div>
        <Recaptcha
          sitekey=""
          render="explicit"
          onloadCallback={this.onChange}
          verifyCallback={this.verifyCallback}
        />
      </div>
    );
  }
}

export default Captcha;
