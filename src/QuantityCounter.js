import React, { useState } from 'react';

let QuantityCounter = () => {
  let [quantity, setQuantity] = useState(1);

  let handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <p>Quantity: {quantity}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default QuantityCounter;
