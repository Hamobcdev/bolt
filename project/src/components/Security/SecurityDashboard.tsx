import React from 'react';
import { Shield, Key, AlertTriangle } from 'lucide-react';
import { useMultiFactorAuth } from '../../hooks/useMultiFactorAuth';

const SecurityDashboard = () => {
  const { isMFAEnabled, setupMFA, isVerifying } = useMultiFactorAuth();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-6">Security Settings</h3>
      
      <div className="space-y-6">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-3">
            <Shield className="text-blue-500" />
            <div>
              <p className="font-medium">Multi-Factor Authentication</p>
              <p className="text-sm text-gray-500">Add an extra layer of security</p>
            </div>
          </div>
          <button
            onClick={setupMFA}
            disabled={isMFAEnabled || isVerifying}
            className={`px-4 py-2 rounded-lg ${
              isMFAEnabled 
                ? 'bg-green-100 text-green-700'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            {isMFAEnabled ? 'Enabled' : 'Enable MFA'}
          </button>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-3">
            <Key className="text-blue-500" />
            <div>
              <p className="font-medium">API Key Management</p>
              <p className="text-sm text-gray-500">Manage API access</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Manage Keys
          </button>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-3">
            <AlertTriangle className="text-yellow-500" />
            <div>
              <p className="font-medium">Security Audit Log</p>
              <p className="text-sm text-gray-500">View security events</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            View Logs
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecurityDashboard;