import React from 'react';
import TransactionChart from '../components/Dashboard/TransactionChart';
import ComplianceStatus from '../components/Dashboard/ComplianceStatus';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ComplianceStatus />
        <TransactionChart />
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
        {/* Transaction list component will be added here */}
      </div>
    </div>
  );
};

export default Dashboard;