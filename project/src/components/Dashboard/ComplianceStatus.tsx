import React from 'react';
import { Shield, AlertTriangle, CheckCircle } from 'lucide-react';

const ComplianceStatus = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Compliance Status</h3>
      
      <div className="grid grid-cols-3 gap-4">
        <StatusCard 
          title="KYC Verification"
          value="98%"
          icon={<Shield className="text-green-500" />}
          status="success"
        />
        <StatusCard 
          title="AML Alerts"
          value="2"
          icon={<AlertTriangle className="text-yellow-500" />}
          status="warning"
        />
        <StatusCard 
          title="Regulatory Reports"
          value="100%"
          icon={<CheckCircle className="text-blue-500" />}
          status="success"
        />
      </div>
    </div>
  );
};

const StatusCard = ({ 
  title, 
  value, 
  icon, 
  status 
}: { 
  title: string; 
  value: string; 
  icon: React.ReactNode; 
  status: 'success' | 'warning' | 'error';
}) => {
  const statusColors = {
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800'
  };

  return (
    <div className="p-4 rounded-lg border">
      <div className="flex items-center justify-between mb-2">
        {icon}
        <span className={`px-2 py-1 rounded-full text-xs ${statusColors[status]}`}>
          {status.toUpperCase()}
        </span>
      </div>
      <h4 className="text-sm text-gray-600">{title}</h4>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );
};

export default ComplianceStatus;