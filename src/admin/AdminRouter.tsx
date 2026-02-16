import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLayout from './components/AdminLayout';
import Dashboard from './pages/Dashboard';
import NewsManagement from './pages/NewsManagement';

const AdminRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout><Dashboard /></AdminLayout>} />
      <Route path="/news" element={<AdminLayout><NewsManagement /></AdminLayout>} />
      <Route path="/events" element={<AdminLayout><div>Events Management - Coming Soon</div></AdminLayout>} />
      <Route path="/team" element={<AdminLayout><div>Team Management - Coming Soon</div></AdminLayout>} />
      <Route path="/settings" element={<AdminLayout><div>Settings - Coming Soon</div></AdminLayout>} />
    </Routes>
  );
};

export default AdminRouter;