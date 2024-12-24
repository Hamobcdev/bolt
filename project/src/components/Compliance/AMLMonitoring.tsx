import React from 'react';
import { useAMLContract } from '../../hooks/useAMLContract';
import { AlertTriangle } from 'lucide-react';

const AMLMonitoring = () => {
  const { alerts, isAlertsLoading } = useAMLContract();

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-4">AML Monitoring</h3>
      
      {isAlertsLoading ? (
        <p>Loading alerts...</p>
      ) : (
        <div className="space-y-4">
          {alerts?.map((alert: any) => (
            <div key={alert.id} className="flex items-center gap-3 p-3 rounded-lg bg-red-50">
              <AlertTriangle className="text-red-500" />
              <div>
                <p className="font-medium text-red-700">{alert.alertType}</p>
                <p className="text-sm text-red-600">Risk Score: {alert.riskScore}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AMLMonitoring;