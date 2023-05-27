import React from 'react';
import ClassProps from './ClassProps';

const PC = () => {
  const courses = [
    { name: 'React.JS', color: 'blue' },
    { name: 'Node.JS', color: 'green' },
  ];

  return (
    <div>
      <ClassProps courses={courses}>
        <p>Internet of Things</p>
      </ClassProps>
    </div>
  );
};

export default PC;
