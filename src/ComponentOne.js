import React from 'react';
import ComponentTwo from './ComponentTwo';

function ComponentOne() {
  return (
    <div>
      <h2>ComponentOne</h2>
      {/* Access the context value */}
      <MyContext.Consumer>
        {(value) => (
          <div>
            <p>Value from ComponentOne: {value}</p>
            <ComponentTwo value={value} />
          </div>
        )}
      </MyContext.Consumer>
    </div>
  );
}

export default ComponentOne;
