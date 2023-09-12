import React, { Component } from 'react';

export default class Publication extends Component {
  render() {
    const { item } = this.props;

    return (
      <div>
        <article>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </article>
      </div>
    );
  }
}
