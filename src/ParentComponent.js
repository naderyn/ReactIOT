import React from 'react';
import FunctionalProps from './FunctionalProps';

const ParentComponent = () => {
  return (
    <div>
      <FunctionalProps
        name="johan liebert"
        age={25}
        location="New York"
        occupation="Software Developer"
      >
        <p>This is the child element passed from the parent component.</p>
      </FunctionalProps>
    </div>
  );
};

export default ParentComponent;
