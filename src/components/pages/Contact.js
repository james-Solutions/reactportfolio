import React, { Component } from 'react';
import AppNavBar from '../layout/AppNavBar';
import ContactForm from '../layout/ContactForm';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

class Contact extends Component {
  static propTypes = {
    firestore: PropTypes.object.isRequired,
    firebase: PropTypes.object.isRequired
  };
  onSubmit = values => {
    if (
      values.firstName !== undefined &&
      values.lastName !== undefined &&
      values.message !== undefined &&
      values.phone !== undefined &&
      values.email !== undefined
    ) {
      const { firestore } = this.props;
      try {
        const newRecord = {
          firstName: values.firstName,
          lastName: values.lastName,
          message: values.message,
          phone: values.phone,
          email: values.email
        };
        firestore.add({ collection: 'contactRequests' }, newRecord).then(() => {
          window.Materialize.toast(
            `Thank you for submitting ${values.firstName}`,
            4000
          );
          values = {};
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      window.Materialize.toast('Please enter all information', 4000);
    }
  };
  render() {
    return (
      <div id="contact-container">
        <AppNavBar isContact="active" />
        <div className="container">
          <div className="row">
            <h1>Contact</h1>
            <ContactForm onSubmit={this.onSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default firestoreConnect()(Contact);
