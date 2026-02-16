import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Eye, 
  Calendar,
  FileText,
  Download
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const recentActivity = [
    { id: 1, action: 'Published new article', user: 'Admin User', time: '2 hours ago', type: 'news' },
    { id: 2, action: 'Updated team member profile', user: 'Admin User', time: '4 hours ago', type: 'team' },
    { id: 3, action: 'Scheduled new event', user: 'Admin User', time: '1 day ago', type: 'event' },
    { id: 4, action: 'Uploaded publication', user: 'Admin User', time: '2 days ago', type: 'publication' },
    { id: 5, action: 'Updated website content', user: 'Admin User', time: '3 days ago', type: 'content' },
  ];

  const quickActions = [
    { icon: <FileText size={20} />, label: 'Create News', color: 'bg-[#155a90] text-white', path: '/admin/news/create' },
    { icon: <Calendar size={20} />, label: 'Add Event', color: 'bg-[#f8921e] text-white', path: '/admin/events/create' },
    { icon: <Users size={20} />, label: 'Add Team Member', color: 'bg-purple-600 text-white', path: '/admin/team/create' },
    { icon: <Eye size={20} />, label: 'Preview Site', color: 'bg-green-600 text-white', path: '/' },
  ];

  return (
    <div>
      
      <div className="bg-gradient-to-r from-[#155a90] to-[#f8921e] rounded-xl p-6 text-white mb-8 shadow-lg">
        <h1 className="text-2xl font-bold mb-2">Welcome to TAGDev 2.0 Admin Panel</h1>
        <p className="opacity-90">Manage website content, news, events, and team members from this dashboard</p>
      </div>

      
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className={`${action.color} p-6 rounded-xl text-left hover:opacity-90 transition-opacity shadow-md hover:shadow-lg`}
            >
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mr-3">
                  {action.icon}
                </div>
                <span className="font-semibold">{action.label}</span>
              </div>
              <p className="text-sm opacity-80">Click to {action.label.toLowerCase()}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
            <button className="text-[#155a90] hover:text-[#f8921e] text-sm font-medium transition-colors">
              View All
            </button>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <ul className="space-y-4">
              {recentActivity.map((activity) => (
                <li key={activity.id} className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                    {activity.type === 'news' && <FileText size={20} className="text-[#155a90]" />}
                    {activity.type === 'team' && <Users size={20} className="text-purple-600" />}
                    {activity.type === 'event' && <Calendar size={20} className="text-[#f8921e]" />}
                    {activity.type === 'publication' && <FileText size={20} className="text-orange-600" />}
                    {activity.type === 'content' && <Eye size={20} className="text-gray-600" />}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-gray-600">by {activity.user}</p>
                  </div>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Analytics Overview</h2>
            <button className="text-[#155a90] hover:text-[#f8921e] text-sm font-medium flex items-center transition-colors">
              <Download size={16} className="mr-1" />
              Export
            </button>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Website Visitors</span>
                  <span className="font-bold text-gray-900">1,234</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#155a90] h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">News Views</span>
                  <span className="font-bold text-gray-900">4,567</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#f8921e] h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Event Registrations</span>
                  <span className="font-bold text-gray-900">289</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center">
                <BarChart3 className="text-gray-400 mr-2" size={20} />
                <span className="text-gray-600">Last updated: Today, 10:30 AM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-6 border border-blue-100">
        <h3 className="text-lg font-bold text-gray-900 mb-3">Quick Tips</h3>
        <ul className="space-y-2">
          <li className="flex items-center">
            <TrendingUp size={16} className="text-[#155a90] mr-2" />
            <span>Keep news articles updated regularly to engage visitors</span>
          </li>
          <li className="flex items-center">
            <Calendar size={16} className="text-[#f8921e] mr-2" />
            <span>Schedule events at least 2 weeks in advance for better attendance</span>
          </li>
          <li className="flex items-center">
            <Users size={16} className="text-purple-600 mr-2" />
            <span>Update team profiles when there are changes in roles or achievements</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;