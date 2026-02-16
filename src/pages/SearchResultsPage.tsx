import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { Search, FileText, Calendar, Users, Building2, BookOpen, Newspaper, ArrowRight } from 'lucide-react';


const searchData = [
  
  { id: 1, title: 'About TAGDev 2.0', type: 'Page', path: '/about', icon: 'FileText' },
  { id: 2, title: 'Program Areas', type: 'Page', path: '/programs', icon: 'FileText' },
  { id: 3, title: 'Team Members', type: 'Page', path: '/people', icon: 'FileText' },
  { id: 4, title: 'Partners List', type: 'Page', path: '/partners', icon: 'FileText' },
  { id: 5, title: 'Latest News', type: 'Page', path: '/news', icon: 'FileText' },
  { id: 6, title: 'Contact Information', type: 'Page', path: '/contact', icon: 'FileText' },
  { id: 7, title: 'Resources & Publications', type: 'Page', path: '/resources', icon: 'FileText' },
  { id: 8, title: 'Media Gallery', type: 'Page', path: '/media', icon: 'FileText' },
  
  { id: 9, title: 'Climate Smart Agriculture', type: 'Program', path: '/programs', icon: 'BookOpen' },
  { id: 10, title: 'Youth Employment', type: 'Program', path: '/programs', icon: 'Users' },
  { id: 11, title: 'Climate Smart TIMPs', type: 'Program', path: '/programs', icon: 'BookOpen' },
  { id: 12, title: 'Youth Advisory', type: 'Program', path: '/programs', icon: 'Users' },
  { id: 13, title: 'Tree Planting Campaigns', type: 'Program', path: '/programs', icon: 'BookOpen' },
  { id: 14, title: 'Startups & MSIPs', type: 'Program', path: '/programs', icon: 'Building2' },
  { id: 15, title: 'DLS & Farm Advisory', type: 'Program', path: '/programs', icon: 'BookOpen' },
  { id: 16, title: 'ARI HUB', type: 'Program', path: '/programs', icon: 'Building2' },
  
  { id: 17, title: 'Dr. Getachew Shambel Endris', type: 'Team Member', path: '/people', icon: 'Users' },
  { id: 18, title: 'Dr. Muluken Gezahegn Wordofa', type: 'Team Member', path: '/people', icon: 'Users' },
  { id: 19, title: 'Dr. Jemal Yousuf Hassen', type: 'Team Member', path: '/people', icon: 'Users' },
  { id: 20, title: 'Prof. Jeylan Wolyie Hussein', type: 'Team Member', path: '/people', icon: 'Users' },
  { id: 21, title: 'Dr. Abebech Demissie', type: 'Team Member', path: '/people', icon: 'Users' },
  { id: 22, title: 'Dr. Tadesse Alemu', type: 'Team Member', path: '/people', icon: 'Users' },
  { id: 23, title: 'Ato Tesfaye Hailu', type: 'Team Member', path: '/people', icon: 'Users' },
  { id: 24, title: 'W/ro Etenesh Mamo', type: 'Team Member', path: '/people', icon: 'Users' },
  
  
  { id: 25, title: 'RUFORUM', type: 'Partner', path: '/partners', icon: 'Building2' },
  { id: 26, title: 'Mastercard Foundation', type: 'Partner', path: '/partners', icon: 'Building2' },
  { id: 27, title: 'GCHERA', type: 'Partner', path: '/partners', icon: 'Building2' },
  { id: 28, title: 'Haramaya University', type: 'Partner', path: '/partners', icon: 'Building2' },
  
  
  { id: 29, title: 'GTA Students Application', type: 'News', path: '/news', icon: 'Newspaper' },
  { id: 30, title: 'RUFORUM AGM 2025', type: 'News', path: '/news', icon: 'Newspaper' },
  { id: 31, title: 'Youth Entrepreneurship Workshop', type: 'Event', path: '/news', icon: 'Calendar' },
  { id: 32, title: 'Climate-Smart Agriculture Field Day', type: 'Event', path: '/news', icon: 'Calendar' },
  
  
  { id: 33, title: 'Annual Report 2023', type: 'Publication', path: '/resources', icon: 'FileText' },
  { id: 34, title: 'Climate-Smart Agriculture Guide', type: 'Publication', path: '/resources', icon: 'FileText' },
  { id: 35, title: 'GTA Application Form', type: 'Form', path: '/resources', icon: 'FileText' },
  
  
  { id: 36, title: 'Agriculture', type: 'Topic', path: '/programs', icon: 'BookOpen' },
  { id: 37, title: 'Youth Empowerment', type: 'Topic', path: '/programs', icon: 'Users' },
  { id: 38, title: 'Climate Change', type: 'Topic', path: '/programs', icon: 'BookOpen' },
  { id: 39, title: 'Entrepreneurship', type: 'Topic', path: '/programs', icon: 'Building2' },
  { id: 40, title: 'Research', type: 'Topic', path: '/resources', icon: 'FileText' },
  { id: 41, title: 'Training', type: 'Topic', path: '/programs', icon: 'BookOpen' },
  { id: 42, title: 'Innovation', type: 'Topic', path: '/programs', icon: 'Building2' },
  { id: 43, title: 'TVET', type: 'Topic', path: '/programs', icon: 'BookOpen' },
];

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'FileText': return <FileText size={20} />;
    case 'Calendar': return <Calendar size={20} />;
    case 'Users': return <Users size={20} />;
    case 'Building2': return <Building2 size={20} />;
    case 'BookOpen': return <BookOpen size={20} />;
    case 'Newspaper': return <Newspaper size={20} />;
    default: return <FileText size={20} />;
  }
};

const SearchResultsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<typeof searchData>([]);
  const [groupedResults, setGroupedResults] = useState<Record<string, typeof searchData>>({});

  useEffect(() => {
    if (!query) {
      setResults([]);
      setGroupedResults({});
      return;
    }

    const lowerQuery = query.toLowerCase().trim();
    const queryWords = lowerQuery.split(/\s+/).filter(word => word.length > 0);
    
    const searchResults = searchData.filter(item => {
      const itemText = `${item.title.toLowerCase()} ${item.type.toLowerCase()}`;
      return queryWords.every(word => itemText.includes(word));
    });

    
    searchResults.sort((a, b) => {
      const aTitle = a.title.toLowerCase();
      const bTitle = b.title.toLowerCase();
      
      if (aTitle === lowerQuery) return -1;
      if (bTitle === lowerQuery) return 1;
      if (aTitle.startsWith(lowerQuery)) return -1;
      if (bTitle.startsWith(lowerQuery)) return 1;
      
      const aHasAllWords = queryWords.every(word => aTitle.includes(word));
      const bHasAllWords = queryWords.every(word => bTitle.includes(word));
      if (aHasAllWords && !bHasAllWords) return -1;
      if (!aHasAllWords && bHasAllWords) return 1;
      
      const aMatchCount = queryWords.filter(word => aTitle.includes(word)).length;
      const bMatchCount = queryWords.filter(word => bTitle.includes(word)).length;
      return bMatchCount - aMatchCount;
    });

    setResults(searchResults);

    
    const grouped = searchResults.reduce((acc, item) => {
      if (!acc[item.type]) {
        acc[item.type] = [];
      }
      acc[item.type].push(item);
      return acc;
    }, {} as Record<string, typeof searchData>);
    
    setGroupedResults(grouped);
  }, [query]);

  return (
    <Layout>
      <section className="relative bg-gradient-to-r from-blue-800 to-green-700 text-white">
        <div className="container-custom py-20 md:py-24 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <Search size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Search Results
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              {results.length} {results.length === 1 ? 'result' : 'results'} found for "{query}"
            </p>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom">
          {!query ? (
            <div className="text-center py-16">
              <Search size={64} className="mx-auto text-gray-300 mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Enter a search term</h2>
              <p className="text-gray-600 mb-8">Type something in the search box to find content</p>
              <Link to="/" className="btn-primary">Back to Home</Link>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-16">
              <Search size={64} className="mx-auto text-gray-300 mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No results found</h2>
              <p className="text-gray-600 mb-2">We couldn't find any matches for "{query}"</p>
              <p className="text-gray-500 mb-8">Try different keywords or browse our sections</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/programs" className="btn-primary">Browse Programs</Link>
                <Link to="/news" className="btn-secondary">Latest News</Link>
                <Link to="/resources" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-6 rounded-lg transition duration-300">
                  View Resources
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Filter by Type</h3>
                  <div className="space-y-2">
                    <button className="w-full text-left px-4 py-2 bg-blue-50 text-blue-800 rounded-lg font-medium">
                      All Results ({results.length})
                    </button>
                    {Object.entries(groupedResults).map(([type, items]) => (
                      <button key={type} className="w-full text-left px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors">
                        {type} ({items.length})
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Results for "{query}"
                    </h2>
                    <p className="text-gray-600 mt-2">
                      Found {results.length} {results.length === 1 ? 'item' : 'items'}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {results.map((result) => (
                      <Link
                        key={result.id}
                        to={result.path}
                        className="block p-4 border border-gray-100 rounded-lg hover:border-blue-200 hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex items-start">
                          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            <div className="text-blue-600">
                              {getIcon(result.icon)}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center mb-1">
                              <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                                {result.type}
                              </span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1">
                              {result.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {result.path === '/about' && 'Learn about TAGDev 2.0 initiative and mission'}
                              {result.path === '/programs' && 'Explore our program areas and focus initiatives'}
                              {result.path === '/people' && 'Meet our team members and leadership'}
                              {result.path === '/partners' && 'View our partners and collaborators'}
                              {result.path === '/news' && 'Read latest news and events'}
                              {result.path === '/resources' && 'Access publications and resources'}
                              {result.path === '/contact' && 'Get in touch with our team'}
                              {result.path === '/media' && 'Browse photos and videos'}
                              {!result.path.includes('/') && 'Click to view details'}
                            </p>
                            <div className="flex items-center mt-2 text-blue-600 text-sm font-medium">
                              View <ArrowRight size={14} className="ml-1" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help Finding Something?</h2>
            <p className="text-gray-700 mb-8">
              If you can't find what you're looking for, our team is ready to assist you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link to="/resources" className="btn-secondary">
                Browse All Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SearchResultsPage;