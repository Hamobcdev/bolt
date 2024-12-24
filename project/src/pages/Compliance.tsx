import React from 'react';
import KYCVerificationPanel from '../components/Compliance/KYCVerificationPanel';
import AMLMonitoring from '../components/Compliance/AMLMonitoring';
import RegulatoryReports from '../components/Compliance/RegulatoryReports';

const Compliance = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Compliance Management</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <KYCVerificationPanel />
        <AMLMonitoring />
      </div>
      <RegulatoryReports />
    </div>
  );
};

export default Compliance;