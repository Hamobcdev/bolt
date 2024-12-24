import React from 'react';
import { FileText, Download, CheckCircle } from 'lucide-react';

const RegulatoryReports = () => {
  const reports = [
    {
      id: 1,
      name: 'Monthly Compliance Report',
      date: '2024-02-01',
      status: 'completed'
    },
    {
      id: 2,
      name: 'KYC Verification Summary',
      date: '2024-02-15',
      status: 'completed'
    },
    {
      id: 3,
      name: 'Transaction Analysis Report',
      date: '2024-02-20',
      status: 'pending'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6 border-b">
        <h3 className="text-lg font-semibold">Regulatory Reports</h3>
      </div>
      <div className="divide-y">
        {reports.map(report => (
          <div key={report.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
            <div className="flex items-center gap-3">
              <FileText className="text-blue-500" />
              <div>
                <p className="font-medium">{report.name}</p>
                <p className="text-sm text-gray-500">{report.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {report.status === 'completed' ? (
                <>
                  <CheckCircle className="text-green-500" size={20} />
                  <button className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                    <Download size={16} />
                    <span>Download</span>
                  </button>
                </>
              ) : (
                <span className="text-yellow-600">Pending</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegulatoryReports;