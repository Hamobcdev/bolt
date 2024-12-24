import React from 'react';
import SecurityDashboard from '../components/Security/SecurityDashboard';
import { useChainlinkPriceFeed } from '../hooks/useChainlinkPriceFeed';

const Settings = () => {
  const { price: ethPrice } = useChainlinkPriceFeed('ETH');

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Settings</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SecurityDashboard />
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-6">Price Feed Settings</h3>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">Current ETH Price</p>
            <p className="text-2xl font-bold">${ethPrice?.toFixed(2) ?? 'Loading...'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;