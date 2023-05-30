import React, { Component } from 'react';
import XContext from './XContext';
import ComponentOne from './ComponentOne';
import ComponentThree from './ComponentThree';
import ComponentFive from './ComponentFive';

class NaderComponent extends Component {
  render() {
    const sharedProps = {
      propOne: 'Value One',
      propTwo: 'Value Two',
    };

    return (
      <XContext.Provider value={sharedProps}>
        <ComponentOne />
        <ComponentThree />
        <ComponentFive />
      </XContext.Provider>
    );
  }
}

export default NaderComponent;
