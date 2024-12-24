import React from 'react';
import { Users, UserCheck, UserX } from 'lucide-react';

const UserStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard 
        title="Total Users" 
        value="1,234" 
        subtitle="Active accounts" 
        icon={<Users className="text-blue-500" />} 
      />
      <StatCard 
        title="Verified Users" 
        value="892" 
        subtitle="KYC completed" 
        icon={<UserCheck className="text-green-500" />} 
      />
      <StatCard 
        title="Pending Verification" 
        value="342" 
        subtitle="Awaiting KYC" 
        icon={<UserX className="text-yellow-500" />} 
      />
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, subtitle, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <div>
          <h3 className="text-gray-600 text-sm">{title}</h3>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
  );
};

export default UserStats;