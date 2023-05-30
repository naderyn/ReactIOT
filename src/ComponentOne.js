import React, { Component } from 'react';
import XContext from './XContext';

class ComponentOne extends Component {
  static contextType = XContext;

  render() {
    const { propOne, propTwo } = this.context;

    return (
      <div>
        <h2>Component One</h2>
        <p>Prop One: {propOne}</p>
        <p>Prop Two: {propTwo}</p>
      </div>
    );
  }
}

export default ComponentOne;
