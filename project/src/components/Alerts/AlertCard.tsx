import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';

interface AlertCardProps {
  id: number;
  type: string;
  severity: 'high' | 'medium' | 'low';
  message: string;
  timestamp: string;
  resolved: boolean;
}

const AlertCard: React.FC<AlertCardProps> = ({ type, severity, message, timestamp, resolved }) => {
  const severityColors = {
    high: 'bg-red-50 border-red-200',
    medium: 'bg-yellow-50 border-yellow-200',
    low: 'bg-blue-50 border-blue-200'
  };

  return (
    <div className={`p-4 border rounded-lg ${severityColors[severity]}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <AlertTriangle className={`${severity === 'high' ? 'text-red-500' : 'text-yellow-500'}`} />
          <div>
            <p className="font-medium">{type}</p>
            <p className="text-sm text-gray-600">{message}</p>
          </div>
        </div>
        {resolved && (
          <div className="flex items-center gap-1 text-green-600">
            <CheckCircle size={16} />
            <span className="text-sm">Resolved</span>
          </div>
        )}
      </div>
      <div className="mt-2 text-sm text-gray-500">{timestamp}</div>
    </div>
  );
};

export default AlertCard;