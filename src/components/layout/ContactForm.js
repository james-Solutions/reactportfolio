import React, { Component } from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { Card, Col } from "react-materialize";
import Captcha from "./Captcha";

class ContactForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Col s={12}>
            <Card>
              <h3>Please fill out this form to contact me</h3>
              <hr />
              <div className="row">
                <div className="input-field col s6">
                  <Field
                    name="firstName"
                    component="input"
                    type="text"
                    className="validate"
                  />
                  <label htmlFor="firstName">First Name</label>
                </div>
                <div className="input-field col s6">
                  <Field
                    name="lastName"
                    component="input"
                    type="text"
                    className="validate"
                  />
                  <label htmlFor="lastName">Last Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <Field
                    name="email"
                    component="input"
                    type="email"
                    className="validate"
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input-field col s6">
                  <Field
                    name="phone"
                    component="input"
                    type="text"
                    className="validate"
                  />
                  <label htmlFor="phone">Phone Number</label>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <Field
                      name="message"
                      component="textarea"
                      className="materialize-textarea"
                    />
                    <label htmlFor="message">Your Message</label>
                  </div>
                </div>
                <div className="row">
                  <fieldset>
                    <Field name="captcharesponse" component={Captcha} />
                  </fieldset>
                </div>
                <button
                  className="btn waves-effect waves-light light-blue"
                  type="submit"
                  name="action"
                  style={{ width: "100%" }}
                >
                  Submit
                </button>
              </div>
            </Card>
          </Col>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "contactInput",
})(ContactForm);
