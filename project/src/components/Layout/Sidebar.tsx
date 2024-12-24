import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  LineChart, 
  Shield, 
  Users, 
  Wallet,
  Settings,
  AlertCircle
} from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-4 fixed left-0 top-0">
      <div className="flex items-center gap-2 mb-8">
        <Shield size={24} className="text-blue-400" />
        <h1 className="text-xl font-bold">Synergy Monitor</h1>
      </div>
      
      <nav className="space-y-2">
        <NavItem to="/" icon={<LayoutDashboard size={20} />} text="Dashboard" />
        <NavItem to="/transactions" icon={<LineChart size={20} />} text="Transactions" />
        <NavItem to="/compliance" icon={<Shield size={20} />} text="Compliance" />
        <NavItem to="/users" icon={<Users size={20} />} text="User Management" />
        <NavItem to="/wallets" icon={<Wallet size={20} />} text="Wallets" />
        <NavItem to="/alerts" icon={<AlertCircle size={20} />} text="Alerts" />
        <NavItem to="/settings" icon={<Settings size={20} />} text="Settings" />
      </nav>
    </div>
  );
};

const NavItem = ({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) => (
  <Link 
    to={to} 
    className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Sidebar;