// alerts-context.js
import { v4 as uuidv4 } from 'uuid';
import React, { createContext, useState, useEffect } from 'react';

const AlertsContext = createContext({
  alerts: [],
  addAlert: () => {},
  removeAlert: () => {},
});

const AlertsProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);
  function createUniqueID() {
    return uuidv4(); // Generates a unique, random string ID
  }

  const addAlert = (message, variant = 'success', timeout = 2000) => {
    if (alerts.length > 4) return;
    setAlerts((prevAlerts) => [
      ...prevAlerts,
      { message, variant, timeout, id: createUniqueID() }, // Add a unique ID
    ]);
  };

  const removeAlert = (alertId) => {
    setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== alertId));
  };

  useEffect(() => {
    // Remove alerts after their timeout
    const timeoutIds = alerts.map((alert) => setTimeout(() => {
      removeAlert(alert.id);
    }, alert.timeout));

    // Cleanup function to clear timeouts when alerts change
    return () => timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
  }, [alerts, removeAlert]);

  return (
    <AlertsContext.Provider
      value={{ alerts, addAlert, removeAlert }}
    >
      {children}
    </AlertsContext.Provider>
  );
};

export { AlertsContext, AlertsProvider };
