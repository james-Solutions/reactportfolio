import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Row, Col } from 'react-materialize';
import AddFileInput from './AddFileInput';

class AddWorkForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  };
  clear = () => {
    // @todo
    // clear values
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Row>
            <Col className="input-field" s={6}>
              <label htmlFor="name">Project Name</label>
              <Field name="name" component="input" type="text" />
            </Col>
            <Col className="input-field" s={6}>
              <label htmlFor="github">Github Link</label>
              <Field name="github" component="input" type="text" />
            </Col>
            <Col className="input-field" s={12}>
              <label htmlFor="comments">Comments</label>
              <Field
                name="comments"
                component="textarea"
                className="materialize-textarea"
                type="text"
              />
            </Col>
            <Col className="input-field" s={12}>
              <Field name="uploadFile" component={AddFileInput} type="file" />
            </Col>
            <input
              type="submit"
              className="btn waves-effect waves-light light-blue"
              value="Submit"
              onClick={this.clear}
              style={{ marginTop: '1rem', marginLeft: '0.68rem' }}
            />
          </Row>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'projectInput'
})(AddWorkForm);
