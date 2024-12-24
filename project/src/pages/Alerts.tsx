import React, { useState } from 'react';
import AlertCard from '../components/Alerts/AlertCard';
import AlertFilters from '../components/Alerts/AlertFilters';
import AlertStats from '../components/Alerts/AlertStats';

const Alerts = () => {
  const [filters, setFilters] = useState({ severity: 'all', status: 'all' });

  // Mock data - replace with actual data from your backend/contracts
  const alerts = [
    {
      id: 1,
      type: 'Suspicious Transaction',
      severity: 'high',
      message: 'Large transfer detected from flagged address',
      timestamp: '2024-02-20 15:30',
      resolved: false,
    },
    {
      id: 2,
      type: 'KYC Verification',
      severity: 'medium',
      message: 'Pending verification for high-value account',
      timestamp: '2024-02-20 14:15',
      resolved: true,
    },
    {
      id: 3,
      type: 'Compliance Check',
      severity: 'low',
      message: 'Regular audit notification',
      timestamp: '2024-02-20 13:00',
      resolved: false,
    },
  ] as const;

  const filteredAlerts = alerts.filter(alert => {
    if (filters.severity !== 'all' && alert.severity !== filters.severity) return false;
    if (filters.status !== 'all' && alert.resolved !== (filters.status === 'resolved')) return false;
    return true;
  });

  const stats = {
    totalAlerts: alerts.length,
    activeAlerts: alerts.filter(a => !a.resolved).length,
    resolvedAlerts: alerts.filter(a => a.resolved).length,
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Alert Management</h2>
      
      <AlertStats {...stats} />
      <AlertFilters onFilterChange={setFilters} />
      
      <div className="space-y-4">
        {filteredAlerts.map(alert => (
          <AlertCard key={alert.id} {...alert} />
        ))}
      </div>
    </div>
  );
};

export default Alerts;