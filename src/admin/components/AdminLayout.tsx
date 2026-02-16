import React, { useState } from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Newspaper, 
  Calendar, 
  FileText, 
  Users, 
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  Search,
  ChevronDown
} from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
  isAuthenticated?: boolean;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, isAuthenticated = true }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();


  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/admin' },
    { icon: <Newspaper size={20} />, label: 'News Management', path: '/admin/news' },
    { icon: <Calendar size={20} />, label: 'Events Calendar', path: '/admin/events' },
    { icon: <FileText size={20} />, label: 'Publications', path: '/admin/publications' },
    { icon: <Users size={20} />, label: 'Team Members', path: '/admin/team' },
    { icon: <Settings size={20} />, label: 'Settings', path: '/admin/settings' },
  ];

  const stats = [
    { label: 'Total News', value: '24', color: 'bg-[#155a90]' },
    { label: 'Upcoming Events', value: '8', color: 'bg-[#f8921e]' },
    { label: 'Team Members', value: '12', color: 'bg-purple-600' },
    { label: 'Publications', value: '45', color: 'bg-green-600' },
  ];

  const handleLogout = (): void => {
    console.log('Logging out...');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
        aria-label="Toggle sidebar"
      >
        {sidebarOpen ? <X size={24} className="text-[#155a90]" /> : <Menu size={24} className="text-[#155a90]" />}
      </button>


      <aside className={`
        fixed lg:static inset-y-0 left-0 z-40 w-64 bg-gradient-to-b from-[#155a90] to-[#0f3d66] text-white
        transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col h-screen
      `}>
        <div className="p-6 border-b border-white/20">
          <Link to="/admin" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#f8921e] to-[#e07f1a] rounded-lg flex items-center justify-center shadow-lg">
              <span className="font-bold text-white text-xl">AD</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">TAGDev Admin</h1>
              <p className="text-sm text-blue-200">Control Panel</p>
            </div>
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`
                      flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200
                      ${isActive 
                        ? 'bg-[#f8921e] text-white shadow-lg' 
                        : 'text-blue-100 hover:bg-white/10 hover:text-white'
                      }
                    `}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className={isActive ? 'text-white' : 'text-blue-200'}>{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="p-4 border-t border-white/20 bg-[#0f3d66]/50">
          <div className="relative">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#f8921e] to-[#e07f1a] rounded-full flex items-center justify-center shadow-md">
                  <span className="font-bold text-white">AU</span>
                </div>
                <div className="text-left">
                  <p className="font-medium text-white">Admin User</p>
                  <p className="text-xs text-blue-200">Administrator</p>
                </div>
              </div>
              <ChevronDown size={16} className={`text-blue-200 transition-transform duration-200 ${userMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {userMenuOpen && (
              <div className="absolute bottom-full left-0 right-0 mb-2 bg-white rounded-lg shadow-xl overflow-hidden">
                <Link
                  to="/admin/profile"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#f8921e] transition-colors"
                  onClick={() => {
                    setUserMenuOpen(false);
                    setSidebarOpen(false);
                  }}
                >
                  Profile Settings
                </Link>
                <Link
                  to="/admin/settings"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#f8921e] transition-colors"
                  onClick={() => {
                    setUserMenuOpen(false);
                    setSidebarOpen(false);
                  }}
                >
                  Account Settings
                </Link>
                <button
                  onClick={() => {
                    setUserMenuOpen(false);
                    handleLogout();
                  }}
                  className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors border-t border-gray-100 flex items-center space-x-2"
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        
        <header className="bg-white shadow-sm sticky top-0 z-30 border-b border-gray-200">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900">Admin Dashboard</h2>
                <p className="text-gray-600 text-sm mt-1">Welcome back, Admin User</p>
              </div>
              
              <div className="flex items-center space-x-4">
                
                <div className="relative hidden md:block">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f8921e] focus:border-[#f8921e] w-64"
                  />
                </div>
                
                
                <button 
                  className="relative p-2 text-gray-600 hover:bg-gray-100 hover:text-[#f8921e] rounded-lg transition-colors"
                  aria-label="Notifications"
                >
                  <Bell size={20} />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                
                <button 
                  className="md:hidden p-2 text-gray-600 hover:bg-gray-100 hover:text-[#f8921e] rounded-lg transition-colors"
                  aria-label="Search"
                >
                  <Search size={20} />
                </button>
              </div>
            </div>
          </div>
        </header>

        
        <div className="px-6 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center shadow-sm`}>
                    <span className="text-white font-bold text-lg">{stat.value}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <main className="flex-1 px-6 pb-6 overflow-y-auto">
          <div className="bg-white rounded-xl shadow-sm p-6 min-h-full">
            {children}
          </div>
        </main>
      </div>

      
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default AdminLayout;