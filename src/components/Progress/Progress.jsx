import React, { Component } from 'react';

export default class Progress extends Component {
  render() {
    const { current, total } = this.props;

    return (
      <>
        <p>
          {current}/{total}
        </p>
      </>
    );
  }
}
