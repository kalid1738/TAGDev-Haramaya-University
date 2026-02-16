import React, { useState } from 'react';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Search, 
  Filter,
  Calendar,
  MoreVertical,
  CheckCircle,
  Clock,
  FileText
} from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  status: 'published' | 'draft';
  views: number;
}

const NewsManagement: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([
    { 
      id: 1, 
      title: 'GTA Students Application Opens', 
      category: 'Admissions', 
      date: '2024-03-15', 
      status: 'published',
      views: 1245
    },
    { 
      id: 2, 
      title: 'RUFORUM AGM 2025 Announcement', 
      category: 'Conference', 
      date: '2024-04-01', 
      status: 'published',
      views: 892
    },
    { 
      id: 3, 
      title: 'Climate-Smart Agriculture Workshop', 
      category: 'Training', 
      date: '2024-02-28', 
      status: 'published',
      views: 1567
    },
    { 
      id: 4, 
      title: 'New Research Partnership', 
      category: 'Partnership', 
      date: '2024-03-10', 
      status: 'draft',
      views: 0
    },
    { 
      id: 5, 
      title: 'Youth Entrepreneurship Success Stories', 
      category: 'Success Stories', 
      date: '2024-03-05', 
      status: 'published',
      views: 2103
    },
  ]);

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Admissions', 'Conference', 'Training', 'Partnership', 'Success Stories', 'Research'];

  const filteredNews = news.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDelete = (id: number): void => {
    if (window.confirm('Are you sure you want to delete this news article?')) {
      setNews(news.filter(item => item.id !== id));
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedCategory(e.target.value);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  const getStatusBadge = (status: string): React.ReactNode => {
    switch (status) {
      case 'published':
        return (
          <span className="flex items-center text-green-700 bg-green-100 px-3 py-1 rounded-full text-sm">
            <CheckCircle size={14} className="mr-1" /> Published
          </span>
        );
      case 'draft':
        return (
          <span className="flex items-center text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full text-sm">
            <Clock size={14} className="mr-1" /> Draft
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">News Management</h1>
          <p className="text-gray-600">Create, edit, and manage news articles</p>
        </div>
        <button className="bg-[#155a90] hover:bg-[#0f3d66] text-white font-semibold px-6 py-3 rounded-lg transition-colors mt-4 md:mt-0 flex items-center">
          <Plus size={20} className="mr-2" />
          Create New Article
        </button>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">Search</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                id="search"
                type="text"
                placeholder="Search news articles..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f8921e] focus:border-[#f8921e]"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                id="category"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f8921e] focus:border-[#f8921e] appearance-none bg-white"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                id="date"
                type="date"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f8921e] focus:border-[#f8921e]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Views
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredNews.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{item.title}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {new Date(item.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </td>
                  <td className="px-6 py-4">
                    {getStatusBadge(item.status)}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <Eye size={16} className="text-gray-400 mr-2" />
                      <span className="font-medium">{item.views.toLocaleString()}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <button 
                        className="text-[#155a90] hover:text-[#f8921e] p-1 transition-colors"
                        aria-label="Edit"
                      >
                        <Edit size={18} />
                      </button>
                      <button 
                        className="text-green-600 hover:text-[#f8921e] p-1 transition-colors"
                        aria-label="View"
                      >
                        <Eye size={18} />
                      </button>
                      <button 
                        className="text-red-600 hover:text-[#f8921e] p-1 transition-colors"
                        onClick={() => handleDelete(item.id)}
                        aria-label="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                      <button 
                        className="text-gray-600 hover:text-[#f8921e] p-1 transition-colors"
                        aria-label="More options"
                      >
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">No news articles found</div>
            <button className="bg-[#155a90] hover:bg-[#0f3d66] text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center mx-auto">
              <Plus size={20} className="mr-2" />
              Create Your First Article
            </button>
          </div>
        )}

        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{' '}
            <span className="font-medium">{filteredNews.length}</span> results
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors">
              Previous
            </button>
            <button className="px-3 py-1 bg-[#155a90] text-white rounded text-sm hover:bg-[#0f3d66] transition-colors">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors">
              2
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-600">Total Articles</p>
              <p className="text-2xl font-bold text-gray-900">{news.length}</p>
            </div>
            <FileText className="text-blue-600" size={32} />
          </div>
        </div>
        
        <div className="bg-green-50 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-600">Published</p>
              <p className="text-2xl font-bold text-gray-900">
                {news.filter(item => item.status === 'published').length}
              </p>
            </div>
            <CheckCircle className="text-green-600" size={32} />
          </div>
        </div>
        
        <div className="bg-purple-50 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-600">Total Views</p>
              <p className="text-2xl font-bold text-gray-900">
                {news.reduce((sum, item) => sum + item.views, 0).toLocaleString()}
              </p>
            </div>
            <Eye className="text-purple-600" size={32} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsManagement;