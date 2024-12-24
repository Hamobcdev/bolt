import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const transactions = [
  {
    id: 1,
    type: 'deposit',
    amount: '0.5 ETH',
    status: 'completed',
    timestamp: '2024-02-20 14:30',
    address: '0x1234...5678',
  },
  // Add more mock transactions
];

const TransactionList = () => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold">Recent Transactions</h3>
      </div>
      <div className="divide-y">
        {transactions.map((tx) => (
          <div key={tx.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
            <div className="flex items-center gap-3">
              {tx.type === 'deposit' ? (
                <ArrowDownRight className="text-green-500" />
              ) : (
                <ArrowUpRight className="text-red-500" />
              )}
              <div>
                <p className="font-medium">{tx.amount}</p>
                <p className="text-sm text-gray-500">{tx.address}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">{tx.timestamp}</p>
              <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">
                {tx.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;