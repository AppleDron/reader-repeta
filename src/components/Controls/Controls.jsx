import React, { Component } from 'react';

export default class Controls extends Component {
  render() {
    const { total, current, changeIndex } = this.props;

    return (
      <>
        <button
          type="button"
          onClick={() => changeIndex(-1)}
          disabled={current === 1}
        >
          Back
        </button>
        <button
          type="button"
          onClick={() => changeIndex(1)}
          disabled={current === total}
        >
          Next
        </button>
      </>
    );
  }
}
