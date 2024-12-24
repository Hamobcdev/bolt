import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WagmiConfig, createConfig, configureChains } from 'wagmi';
import { mainnet, polygon } from 'wagmi/chains';
import { EthereumClient, w3mConnector, w3mProvider } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';

import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Compliance from './pages/Compliance';
import Users from './pages/Users';
import Wallets from './pages/Wallets';
import Alerts from './pages/Alerts';
import Settings from './pages/Settings';

// Web3Modal Configuration
const projectId = 'YOUR_WALLET_CONNECT_PROJECT_ID';

const chains = [mainnet, polygon];
const { provider } = configureChains(chains, [w3mProvider({ projectId })]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [w3mConnector({ projectId, chains })],
  provider
});

const ethereumClient = new EthereumClient(wagmiConfig, chains);

function App() {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <Router>
          <div className="flex">
            <Sidebar />
            <div className="flex-1 ml-64">
              <Header />
              <main className="mt-16 p-6 bg-gray-100 min-h-screen">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/transactions" element={<Transactions />} />
                  <Route path="/compliance" element={<Compliance />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/wallets" element={<Wallets />} />
                  <Route path="/alerts" element={<Alerts />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </main>
            </div>
          </div>
        </Router>
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}

export default App;