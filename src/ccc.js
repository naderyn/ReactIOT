import React from 'react';
import ComponentOne from './ComponentOne';
import ComponentThree from './ComponentThree';
import ComponentFive from './ComponentFive';
import MyContext from './MyContext';

function ccc() {
  return (
    <div className="ccc">
      <MyContext.Provider value="Your value from ComponentOne">
        <ComponentOne />
        <ComponentThree />
        <ComponentFive />
      </MyContext.Provider>
    </div>
  );
}

export default ccc;
