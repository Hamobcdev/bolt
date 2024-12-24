import React from 'react';
import UserList from '../components/Users/UserList';
import UserStats from '../components/Users/UserStats';

const Users = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">User Management</h2>
      <UserStats />
      <UserList />
    </div>
  );
};

export default Users;