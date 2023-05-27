import React, { useState } from 'react';

const SubscriptionComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [subscription, setSubscription] = useState('Guest');

  const handleButtonClick = () => {
    setIsLoggedIn(true);
    setSubscription('You now have a subscription');
  };

  return (
    <div>
      <h2>Subscription Component</h2>
      <p>Status: {isLoggedIn ? 'Logged In' : 'Logged Out'}</p>
      <p>Subscription: {subscription}</p>
      <button onClick={handleButtonClick}>Update Subscription</button>
    </div>
  );
};

export default SubscriptionComponent;
