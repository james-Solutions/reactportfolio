import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { compose } from 'redux';
// import { connect } from 'react-redux';
// import { firebaseConnect } from 'react-redux-firebase';
import { firestoreConnect } from 'react-redux-firebase';
import AdminAppNavBar from '../layout/AdminAppNavBar';
import { Row, Card, Col } from 'react-materialize';
import AddWorkForm from '../layout/AddWorkForm';
import Work from '../pages/Work';

class EditWork extends Component {
  static propTypes = {
    firestore: PropTypes.object.isRequired,
    firebase: PropTypes.object.isRequired
  };
  // onChange = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };
  onSubmit = values => {
    if (
      (values.project &&
        values.github &&
        values.comments &&
        values.uploadFile) !== null
    ) {
      const { firestore, firebase } = this.props;
      console.log(values);
      try {
        const storageRef = firebase.storage().ref();
        // Create a reference to the uploaded image
        const uploadRef = storageRef
          .child(`project-images/${values.uploadFile.name}`)
          .put(values.uploadFile);

        uploadRef.on(
          'state_changed',
          function(snapshot) {
            // const progress =
            //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // console.log('Upload is ' + progress + '% done');
          },
          function(error) {
            // Handle unsuccessful uploads
          },
          function() {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadRef.snapshot.ref.getDownloadURL().then(function(downloadURL) {
              const newRecord = {
                name: values.name,
                github: values.github,
                comments: values.comments,
                filePath: downloadURL
              };
              try {
                firestore
                  .add({ collection: 'projects' }, newRecord)
                  .then(() => {
                    console.log(`Database record added for ${newRecord.name}`);
                    values = {};
                  });
              } catch (error) {
                console.log(error);
              }
            });
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  };
  // fileSubmit = values => {
  //   console.log(values.uploadFile);
  //   console.log(typeof values.uploadFile);
  //   const { firebase } = this.props;
  //   try {
  //     firebase.uploadFile('/project-images/', values.uploadFile);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  render() {
    return (
      <div>
        <AdminAppNavBar isWork="active" />
        <div className="container" style={{ marginTop: '2rem' }}>
          <Row>
            <Col s={12}>
              <Card>
                <h1>Add A New Project</h1>
                <AddWorkForm onSubmit={this.onSubmit} />
              </Card>
            </Col>
            <Col s={12}>
              <h2>Current work page:</h2>
              <Work isAdmin={true} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default firestoreConnect()(EditWork);
