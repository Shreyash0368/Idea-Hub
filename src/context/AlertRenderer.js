import React, { useContext } from 'react';
import { Alert } from 'react-bootstrap';
import { AlertsContext } from './AlertsContext'; // Adjust path if needed

function AlertRenderer() {
  const { alerts } = useContext(AlertsContext);

  return (
    <div>
      {alerts.map((alert) => (
        <Alert key={alert.id} variant={alert.variant}>
          {alert.message}
        </Alert>
      ))}
    </div>
  );
}

export default AlertRenderer;
