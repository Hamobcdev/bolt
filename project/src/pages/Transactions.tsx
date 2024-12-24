import React from 'react';
import TransactionList from '../components/Transactions/TransactionList';
import TransactionStats from '../components/Transactions/TransactionStats';

const Transactions = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Transaction Monitoring</h2>
      <TransactionStats />
      <TransactionList />
    </div>
  );
};

export default Transactions;