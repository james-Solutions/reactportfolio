import React, { Component } from 'react';
import AppNavBar from '../layout/AppNavBar';
import ContactForm from '../layout/ContactForm';
import { firestoreConnect } from 'react-redux-firebase';
import { reset } from 'redux-form';
import PropTypes from 'prop-types';

//Todo
// Make a toast for if can't push data to server
class Contact extends Component {
  static propTypes = {
    firestore: PropTypes.object.isRequired,
    firebase: PropTypes.object.isRequired
  };
  onSubmit = (values, dispatch) => {
    if (
      values.firstName !== undefined &&
      values.lastName !== undefined &&
      values.message !== undefined &&
      values.phone !== undefined &&
      values.email !== undefined
    ) {
      if (window.grecaptcha.getResponse().length !== 0) {
        const { firestore } = this.props;

        try {
          let today = new Date();
          const dd = String(today.getDate()).padStart(2, '0');
          const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
          const yyyy = today.getFullYear();
          today = mm + '/' + dd + '/' + yyyy;
          const newRecord = {
            firstName: values.firstName,
            lastName: values.lastName,
            message: values.message,
            phone: values.phone,
            email: values.email,
            date: today
          };
          firestore
            .add({ collection: 'contactRequests' }, newRecord)
            .then(() => {
              window.Materialize.toast(
                `Thank you for submitting ${values.firstName}`,
                4000
              );
              dispatch(reset('contactInput'));
              window.grecaptcha.reset();
              values = {};
            });
        } catch (error) {
          console.log(error);
        }
      } else {
        window.Materialize.toast('Please verify you are human', 4000);
      }
    } else {
      window.Materialize.toast('Please enter all information', 4000);
    }
  };
  render() {
    document.title = 'Portfolio - Contact';
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
