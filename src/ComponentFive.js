import React from 'react';
import MyContext from './MyContext';

function ComponentFive() {
  return (
    <div>
      <h2>ComponentFive</h2>
      {/* Access the context value */}
      <MyContext.Consumer>
        {(value) => <p>Value from ComponentOne: {value}</p>}
      </MyContext.Consumer>
    </div>
  );
}

export default ComponentFive;
