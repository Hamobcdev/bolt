import React from 'react';
import { User, Shield, AlertTriangle } from 'lucide-react';

const users = [
  {
    id: 1,
    address: '0x1234...5678',
    kycStatus: 'verified',
    riskLevel: 'low',
    lastActivity: '2024-02-20 14:30',
  },
  // Add more mock users
];

const UserList = () => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold">Registered Users</h3>
      </div>
      <div className="divide-y">
        {users.map((user) => (
          <div key={user.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
            <div className="flex items-center gap-3">
              <User className="text-gray-400" />
              <div>
                <p className="font-medium">{user.address}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-500">{user.kycStatus}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-yellow-500" />
                <span className="text-sm">{user.riskLevel} risk</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">{user.lastActivity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;