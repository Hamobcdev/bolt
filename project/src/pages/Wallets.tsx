import React from 'react';
import { Wallet, ArrowUpRight, ArrowDownRight, AlertTriangle } from 'lucide-react';
import { useAccount, useBalance } from 'wagmi';
import { formatEther } from 'viem';
import { useChainlinkPriceFeed } from '../hooks/useChainlinkPriceFeed';

const Wallets = () => {
  const { address } = useAccount();
  const { data: balance } = useBalance({ address });
  const { price: ethPrice } = useChainlinkPriceFeed('ETH');

  const recentTransactions = [
    {
      id: 1,
      type: 'incoming',
      amount: '0.5 ETH',
      from: '0x1234...5678',
      timestamp: '2024-02-20 14:30',
    },
    {
      id: 2,
      type: 'outgoing',
      amount: '0.2 ETH',
      to: '0x8765...4321',
      timestamp: '2024-02-20 13:15',
    },
  ];

  const walletStats = [
    { label: 'Total Balance', value: balance ? `${formatEther(balance.value)} ETH` : '0 ETH' },
    { label: 'USD Value', value: balance && ethPrice ? `$${(Number(formatEther(balance.value)) * ethPrice).toFixed(2)}` : '$0.00' },
    { label: 'Risk Score', value: 'Low' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Wallet Management</h2>
      
      {/* Wallet Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {walletStats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-sm text-gray-600">{stat.label}</p>
            <p className="text-2xl font-bold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">Recent Transactions</h3>
        </div>
        <div className="divide-y">
          {recentTransactions.map((tx) => (
            <div key={tx.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
              <div className="flex items-center gap-3">
                {tx.type === 'incoming' ? (
                  <ArrowDownRight className="text-green-500" />
                ) : (
                  <ArrowUpRight className="text-red-500" />
                )}
                <div>
                  <p className="font-medium">{tx.amount}</p>
                  <p className="text-sm text-gray-500">
                    {tx.type === 'incoming' ? `From: ${tx.from}` : `To: ${tx.to}`}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500">{tx.timestamp}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Security Status */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Security Status</h3>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
            Secure
          </span>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Wallet className="text-blue-500" />
              <span>Multi-Factor Authentication</span>
            </div>
            <span className="text-green-500">Enabled</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2">
              <AlertTriangle className="text-yellow-500" />
              <span>Last Security Audit</span>
            </div>
            <span>2024-02-20</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallets;