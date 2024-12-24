import React from 'react';
import { useKYCContract } from '../../hooks/useKYCContract';

const KYCVerificationPanel = () => {
  const { kycStatus, isStatusLoading, submitKYC } = useKYCContract();

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-4">KYC Verification</h3>
      
      <div className="space-y-4">
        <div className="p-4 rounded-lg bg-gray-50">
          <p className="text-sm font-medium text-gray-600">Current Status</p>
          <p className="text-lg font-bold mt-1">
            {isStatusLoading ? 'Loading...' : kycStatus}
          </p>
        </div>

        <button
          onClick={() => submitKYC()}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Submit KYC Documents
        </button>
      </div>
    </div>
  );
};

export default KYCVerificationPanel;