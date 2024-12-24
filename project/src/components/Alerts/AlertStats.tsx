import React from 'react';
import { AlertTriangle, Bell, ShieldCheck } from 'lucide-react';

interface AlertStatsProps {
  totalAlerts: number;
  activeAlerts: number;
  resolvedAlerts: number;
}

const AlertStats: React.FC<AlertStatsProps> = ({ totalAlerts, activeAlerts, resolvedAlerts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-2 text-blue-500 mb-2">
          <Bell size={20} />
          <h3 className="font-medium">Total Alerts</h3>
        </div>
        <p className="text-2xl font-bold">{totalAlerts}</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-2 text-yellow-500 mb-2">
          <AlertTriangle size={20} />
          <h3 className="font-medium">Active Alerts</h3>
        </div>
        <p className="text-2xl font-bold">{activeAlerts}</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-2 text-green-500 mb-2">
          <ShieldCheck size={20} />
          <h3 className="font-medium">Resolved Alerts</h3>
        </div>
        <p className="text-2xl font-bold">{resolvedAlerts}</p>
      </div>
    </div>
  );
};

export default AlertStats;