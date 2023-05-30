import React, { Component } from 'react';
import XContext from './XContext';

class ComponentThree extends Component {
  render() {
    return (
      <XContext.Consumer>
        {(sharedProps) => (
          <div>
            <h2>Component Three</h2>
            <p>Prop One: {sharedProps.propOne}</p>
            <p>Prop Two: {sharedProps.propTwo}</p>
          </div>
        )}
      </XContext.Consumer>
    );
  }
}

export default ComponentThree;
