import React from 'react';
import {useOnlineStatus} from "./hooks";

const OnlineStatusComponent = () => {
  const isOnline = useOnlineStatus();

  return (
    <div>
      {isOnline ? (
        <p>You are online!</p>
      ) : (
        <p>You are offline. Please check your connection.</p>
      )}
    </div>
  );
};

export default OnlineStatusComponent;
