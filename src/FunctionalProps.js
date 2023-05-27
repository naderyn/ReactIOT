import React from 'react';

const FunctionalProps = ({ name, age, location, occupation, children }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
      <p>Occupation: {occupation}</p>
      <div>{children}</div>
    </div>
  );
};

export default FunctionalProps;
