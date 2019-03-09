import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Row, Col } from 'react-materialize';
import AddFileInput from './AddFileInput';

class AddFileForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  };
  clear = () => {
    console.log('clear the values');
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Row>
            <Col className="input-field" s={12}>
              <Field name="uploadFile" component={AddFileInput} type="file" />
              <input
                type="submit"
                className="btn waves-effect waves-light"
                value="Submit"
              />
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'fileInput'
})(AddFileForm);
