import React, { Component } from 'react';
import XContext from './XContext';

class ComponentFive extends Component {
  render() {
    return (
      <XContext.Consumer>
        {(sharedProps) => (
          <div>
            <h2>Component Five</h2>
            <p>Prop One: {sharedProps.propOne}</p>
            <p>Prop Two: {sharedProps.propTwo}</p>
          </div>
        )}
      </XContext.Consumer>
    );
  }
}

export default ComponentFive;
