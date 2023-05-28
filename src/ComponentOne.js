import React, { useContext } from 'react';
import ValueContext from './ValueContext';
import ComponentThree from './ComponentThree';
import ComponentFive from './ComponentFive';

function ComponentOne() {
  const valueX = useContext(ValueContext);

  return (
    <div>
      <h2>ComponentOne</h2>
      <ValueContext.Provider value={valueX}>
        <ComponentThree />
        <ComponentFive />
      </ValueContext.Provider>
    </div>
  );
}

export default ComponentOne;
