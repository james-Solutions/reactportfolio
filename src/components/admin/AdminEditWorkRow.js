import React, { Component } from 'react';

export default class AdminEditWorkRow extends Component {
  render() {
    return (
      <div className="row">
        <p>Admin:</p>
        <i
          style={{
            color: 'green',
            cursor: 'pointer',
            margin: '0 0.5rem'
          }}
          className="fas fa-edit"
        />
        <i
          style={{ color: 'red', cursor: 'pointer', margin: '0 0.5rem' }}
          className="far fa-trash-alt"
          onClick={this.onDeleteClick}
        />
      </div>
    );
  }

  onDeleteClick = event => {
    console.log('Delete Click!');
  };
}
