import React from 'react';
import { useAnalytics } from '../../hooks/useAnalytics';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface MetricsDisplayProps {
  metricType: string;
  title: string;
}

const MetricsDisplay: React.FC<MetricsDisplayProps> = ({ metricType, title }) => {
  const { metrics } = useAnalytics(metricType);

  const formatData = (data: any[]) => {
    return data.map(m => ({
      timestamp: new Date(m.timestamp).toLocaleTimeString(),
      value: m.value
    }));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={formatData(metrics)}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#3B82F6" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MetricsDisplay;