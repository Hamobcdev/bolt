import React from 'react';

interface AlertFiltersProps {
  onFilterChange: (filters: { severity: string; status: string }) => void;
}

const AlertFilters: React.FC<AlertFiltersProps> = ({ onFilterChange }) => {
  return (
    <div className="flex gap-4 mb-6">
      <select 
        className="px-3 py-2 border rounded-lg"
        onChange={(e) => onFilterChange({ severity: e.target.value, status: 'all' })}
      >
        <option value="all">All Severities</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      
      <select 
        className="px-3 py-2 border rounded-lg"
        onChange={(e) => onFilterChange({ severity: 'all', status: e.target.value })}
      >
        <option value="all">All Status</option>
        <option value="active">Active</option>
        <option value="resolved">Resolved</option>
      </select>
    </div>
  );
};

export default AlertFilters;