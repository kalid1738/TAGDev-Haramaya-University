import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import { 
  FileText, 
  Download, 
  BookOpen, 
  FileSpreadsheet, 
  BarChart3,
  Video,
  Image,
  Search,
  Filter
} from 'lucide-react';
import { resources, resourceCategories, Resource } from '../data/resourceData';

const ResourcesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Resources');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('date');

  const publications: Resource[] = resources.filter(r => r.category === 'publication' || r.category === 'report');
  const forms: Resource[] = resources.filter(r => r.category === 'form');
  const research: Resource[] = resources.filter(r => r.category === 'research');
  const multimedia: Resource[] = resources.filter(r => r.category === 'multimedia');

  const getIcon = (iconName: string): React.ReactNode => {
    switch (iconName) {
      case 'FileText': return <FileText size={24} className="text-[#155a90]" />;
      case 'BookOpen': return <BookOpen size={24} className="text-[#f8921e]" />;
      case 'FileSpreadsheet': return <FileSpreadsheet size={24} className="text-purple-600" />;
      case 'BarChart3': return <BarChart3 size={24} className="text-orange-600" />;
      case 'Video': return <Video size={24} className="text-blue-600" />;
      default: return <FileText size={24} className="text-[#155a90]" />;
    }
  };

  const handleCategoryClick = (category: string): void => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSortBy(e.target.value);
  };

  const handleDownload = (resource: Resource): void => {
    console.log('Downloading:', resource.title);
    
  };

  return (
    <Layout>
      
      <section className="hero-section">
        <div className="hero-background">
          <img 
            src="/images/resources-hero.jpg" 
            alt="TAGDev 2.0 Resources" 
            className="hero-image"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              if (target.parentElement) {
                target.parentElement.className = 'hero-background bg-gradient-to-r from-blue-800 to-green-700';
              }
            }}
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <div className="max-w-3xl">
            <h1 className="hero-title">
              Resources
            </h1>
            <p className="hero-subtitle">
              Publications, forms, research papers, and multimedia resources
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Resource Categories</h2>
            <p className="section-subtitle mx-auto text-center">
              Browse our collection of valuable resources organized by category
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            {resourceCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(category.name)}
                className={`bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  selectedCategory === category.name ? 'ring-2 ring-[#f8921e] ring-offset-2' : ''
                }`}
                type="button"
                aria-label={`Filter by ${category.name}`}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {getIcon(category.icon)}
                </div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm">{category.name}</h3>
                <div className="text-2xl font-bold text-[#155a90]">{category.count}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <h2 className="section-title">Featured Publications</h2>
              <p className="text-gray-600">Latest reports, manuals, and research papers</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search resources..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f8921e] focus:border-[#f8921e]"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  aria-label="Search resources"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <label htmlFor="sort-select" className="sr-only">Sort resources by</label>
                <select 
                  id="sort-select"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f8921e] focus:border-[#f8921e] appearance-none bg-white"
                  value={sortBy}
                  onChange={handleSortChange}
                  title="Sort resources by"
                >
                  <option value="date">Sort by Date</option>
                  <option value="downloads">Sort by Downloads</option>
                  <option value="name">Sort by Name</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {publications.map((pub) => (
              <div key={pub.id} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mr-6">
                    {getIcon(pub.icon)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-[#155a90] rounded-full text-sm font-semibold">
                        {pub.type}
                      </span>
                      <span className="text-sm text-gray-500">{pub.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{pub.title}</h3>
                    <p className="text-gray-600 mb-6">{pub.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-500">{pub.size}</span>
                        <span className="text-sm text-gray-500">{pub.downloads} downloads</span>
                      </div>
                      <button 
                        onClick={() => handleDownload(pub)}
                        className="bg-[#155a90] hover:bg-[#0f3d66] text-white font-semibold px-4 py-2 rounded-lg transition-colors flex items-center"
                        type="button"
                        aria-label={`Download ${pub.title}`}
                      >
                        <Download size={18} className="mr-2" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Forms & Templates</h2>
            <p className="section-subtitle mx-auto text-center">
              Downloadable forms and templates for various purposes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {forms.map((form) => (
              <div key={form.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-4">
                  {getIcon(form.icon)}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{form.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{form.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Updated: {form.date}</span>
                  <button 
                    onClick={() => handleDownload(form)}
                    className="text-[#155a90] hover:text-[#f8921e] transition-colors"
                    type="button"
                    aria-label={`Download ${form.title}`}
                  >
                    <Download size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Research Papers</h2>
            <p className="section-subtitle mx-auto text-center">
              Latest research findings and academic publications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {research.map((paper) => (
              <div key={paper.id} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mr-6">
                    {getIcon(paper.icon)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
                        {paper.type}
                      </span>
                      <span className="text-sm text-gray-500">{paper.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{paper.title}</h3>
                    <p className="text-gray-600 mb-4">{paper.description}</p>
                    {paper.author && (
                      <p className="text-sm text-gray-500 mb-2">Author: {paper.author}</p>
                    )}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-500">{paper.size}</span>
                      <button 
                        onClick={() => handleDownload(paper)}
                        className="text-[#155a90] hover:text-[#f8921e] transition-colors flex items-center"
                        type="button"
                        aria-label={`Download ${paper.title}`}
                      >
                        <Download size={18} className="mr-2" />
                        Download PDF
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-6">
              <FileText className="text-[#155a90]" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Can't Find What You Need?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Looking for specific resources, data, or information that's not listed here? 
              Contact our resource center and we'll help you find what you need.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-[#155a90] hover:bg-[#0f3d66] text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                Request Resources
              </a>
              <a href="mailto:resources@tagdevhu.edu.et" className="bg-[#f8921e] hover:bg-[#e07f1a] text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                Email Resource Center
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResourcesPage;