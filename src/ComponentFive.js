import React, { useContext } from 'react';
import ValueContext from './ValueContext';

function ComponentFive() {
  const valueX = useContext(ValueContext);

  return (
    <div>
      <h2>ComponentFive</h2>
      <p>Value from ComponentOne: {valueX}</p>
    </div>
  );
}

export default ComponentFive;
