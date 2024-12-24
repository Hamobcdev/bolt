import React from 'react';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';

const TransactionStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard 
        title="Total Volume" 
        value="$1.2M" 
        change="+12.5%" 
        icon={<Activity className="text-blue-500" />} 
      />
      <StatCard 
        title="Inbound" 
        value="$720K" 
        change="+8.2%" 
        icon={<TrendingUp className="text-green-500" />} 
      />
      <StatCard 
        title="Outbound" 
        value="$480K" 
        change="-3.1%" 
        icon={<TrendingDown className="text-red-500" />} 
      />
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon }) => {
  const isPositive = change.startsWith('+');
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        {icon}
        <span className={`text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </span>
      </div>
      <h3 className="text-gray-600 text-sm">{title}</h3>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );
};

export default TransactionStats;