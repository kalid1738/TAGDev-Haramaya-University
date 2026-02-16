import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search, ChevronDown } from 'lucide-react';


interface SearchItem {
  id: number;
  title: string;
  type: string;
  path: string;
  icon?: string;
}

const searchData: SearchItem[] = [

  { id: 1, title: 'About TAGDev 2.0', type: 'Page', path: '/about' },
  { id: 2, title: 'Program Areas', type: 'Page', path: '/programs' },
  { id: 3, title: 'Team Members', type: 'Page', path: '/people' },
  { id: 4, title: 'Partners List', type: 'Page', path: '/partners' },
  { id: 5, title: 'Latest News', type: 'Page', path: '/news' },
  { id: 6, title: 'Contact Information', type: 'Page', path: '/contact' },
  { id: 7, title: 'Resources & Publications', type: 'Page', path: '/resources' },
  { id: 8, title: 'Media Gallery', type: 'Page', path: '/media' },
  
  { id: 9, title: 'Climate Smart Agriculture', type: 'Program', path: '/programs' },
  { id: 10, title: 'Youth Employment', type: 'Program', path: '/programs' },
  { id: 11, title: 'Climate Smart TIMPs', type: 'Program', path: '/programs' },
  { id: 12, title: 'Youth Advisory', type: 'Program', path: '/programs' },
  { id: 13, title: 'Tree Planting Campaigns', type: 'Program', path: '/programs' },
  { id: 14, title: 'Startups & MSIPs', type: 'Program', path: '/programs' },
  { id: 15, title: 'DLS & Farm Advisory', type: 'Program', path: '/programs' },
  { id: 16, title: 'ARI HUB', type: 'Program', path: '/programs' },
  
  
  { id: 17, title: 'Dr. Getachew Shambel Endris', type: 'Team Member', path: '/people' },
  { id: 18, title: 'Dr. Muluken Gezahegn Wordofa', type: 'Team Member', path: '/people' },
  { id: 19, title: 'Dr. Jemal Yousuf Hassen', type: 'Team Member', path: '/people' },
  { id: 20, title: 'Prof. Jeylan Wolyie Hussein', type: 'Team Member', path: '/people' },
  { id: 21, title: 'Dr. Abebech Demissie', type: 'Team Member', path: '/people' },
  { id: 22, title: 'Dr. Tadesse Alemu', type: 'Team Member', path: '/people' },
  { id: 23, title: 'Ato Tesfaye Hailu', type: 'Team Member', path: '/people' },
  { id: 24, title: 'W/ro Etenesh Mamo', type: 'Team Member', path: '/people' },
  
  
  { id: 25, title: 'RUFORUM', type: 'Partner', path: '/partners' },
  { id: 26, title: 'Mastercard Foundation', type: 'Partner', path: '/partners' },
  { id: 27, title: 'GCHERA', type: 'Partner', path: '/partners' },
  { id: 28, title: 'Haramaya University', type: 'Partner', path: '/partners' },
  
  
  { id: 29, title: 'GTA Students Application', type: 'News', path: '/news' },
  { id: 30, title: 'RUFORUM AGM 2025', type: 'News', path: '/news' },
  { id: 31, title: 'Youth Entrepreneurship Workshop', type: 'Event', path: '/news' },
  { id: 32, title: 'Climate-Smart Agriculture Field Day', type: 'Event', path: '/news' },
  
  
  { id: 33, title: 'Annual Report 2023', type: 'Publication', path: '/resources' },
  { id: 34, title: 'Climate-Smart Agriculture Guide', type: 'Publication', path: '/resources' },
  { id: 35, title: 'GTA Application Form', type: 'Form', path: '/resources' },
  
  
  { id: 36, title: 'Agriculture', type: 'Topic', path: '/programs' },
  { id: 37, title: 'Youth Empowerment', type: 'Topic', path: '/programs' },
  { id: 38, title: 'Climate Change', type: 'Topic', path: '/programs' },
  { id: 39, title: 'Entrepreneurship', type: 'Topic', path: '/programs' },
  { id: 40, title: 'Research', type: 'Topic', path: '/resources' },
  { id: 41, title: 'Training', type: 'Topic', path: '/programs' },
  { id: 42, title: 'Innovation', type: 'Topic', path: '/programs' },
  { id: 43, title: 'TVET', type: 'Topic', path: '/programs' },
];


interface DropdownItem {
  name: string;
  path: string;
}


interface NavItem {
  name: string;
  path: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const aboutDropdownRef = useRef<HTMLDivElement>(null);

  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { 
      name: 'About Us', 
      path: '/about',
      hasDropdown: true,
      dropdownItems: [
        { name: 'About TAGDev 2.0', path: '/about' },
        { name: 'Program Areas', path: '/programs' },
        { name: 'Our People', path: '/people' },
        { name: 'Partners', path: '/partners' },
      ]
    },
    { name: 'News & Events', path: '/news' },
    { name: 'Resources', path: '/resources' },
    { name: 'Media', path: '/media' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };

  const isAnyDropdownItemActive = (): boolean => {
    const dropdownPaths = ['/about', '/programs', '/people', '/partners'];
    return dropdownPaths.includes(location.pathname);
  };

  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target as Node)) {
        setIsAboutDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (query: string): void => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase().trim();
    const queryWords = lowerQuery.split(/\s+/).filter(word => word.length > 0);
    
    const results = searchData.filter(item => {
      const itemText = `${item.title.toLowerCase()} ${item.type.toLowerCase()}`;
      return queryWords.every(word => itemText.includes(word));
    });

    results.sort((a, b) => {
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

    setSearchResults(results.slice(0, 8));
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
      setSearchResults([]);
    }
  };

  const handleSearchItemClick = (path: string): void => {
    navigate(path);
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  const clearSearch = (): void => {
    setSearchQuery('');
    setSearchResults([]);
  };

  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
        setSearchResults([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); 

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  
  const handleViewAllResults = (): void => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
      setSearchResults([]);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md font-poppins">
        <div className="container-custom">
          <div className="flex justify-between items-center h-16">
            
            <div className="flex items-center flex-shrink-0">
              <Link to="/" className="flex items-center">
                <div className="h-12 w-auto">
                  <img 
                    src="/images/logo.jpg" 
                    alt="TAGDev 2.0 Haramaya University" 
                    className="h-full w-auto object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="h-12 w-12 bg-[#155a90] flex items-center justify-center">
                            <span class="text-white font-bold text-lg">T2</span>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
              </Link>
            </div>

            
            <div className="flex items-center justify-end">
              
              <nav className="hidden lg:flex items-center h-16">
                {navItems.map((item) => {
                  if (item.hasDropdown) {
                    const isDropdownActive = isAnyDropdownItemActive();
                    return (
                      <div 
                        key={item.name} 
                        className="relative h-full"
                        ref={aboutDropdownRef}
                        onMouseEnter={() => setIsAboutDropdownOpen(true)}
                        onMouseLeave={() => setIsAboutDropdownOpen(false)}
                      >
                        <button
                          className={`
                            relative h-full flex items-center justify-center px-2.5 text-sm font-semibold 
                            transition-all duration-200 group mx-[1px]
                            ${isDropdownActive 
                              ? 'text-white' 
                              : 'text-gray-800 hover:text-white'
                            }
                          `}
                          aria-expanded={isAboutDropdownOpen}
                          aria-haspopup="true"
                          type="button"
                        >
                          <span className="relative z-10 transform transition-transform duration-200 group-hover:scale-105 whitespace-nowrap flex items-center gap-1">
                            {item.name}
                            <ChevronDown size={16} className={`transition-transform duration-200 ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
                          </span>
                          
                          
                          {isDropdownActive && (
                            <div className="absolute inset-0 bg-[#f8921e] transition-all duration-200"></div>
                          )}
                          
                          
                          {!isDropdownActive && (
                            <div className="absolute inset-0 bg-[#f8921e] opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-200"></div>
                          )}
                          
                          
                          {isDropdownActive && (
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#f8921e]"></div>
                          )}
                        </button>

                        
                        {isAboutDropdownOpen && item.dropdownItems && (
                          <div className="absolute left-0 top-full mt-0 w-56 bg-white shadow-xl border-t-2 border-[#f8921e] rounded-b-lg overflow-hidden z-50">
                            {item.dropdownItems.map((dropdownItem) => {
                              const active = isActive(dropdownItem.path);
                              return (
                                <Link
                                  key={dropdownItem.name}
                                  to={dropdownItem.path}
                                  className={`
                                    block px-5 py-3 text-sm font-semibold transition-all duration-200
                                    ${active 
                                      ? 'bg-[#f8921e] text-white' 
                                      : 'text-gray-700 hover:bg-orange-50 hover:text-[#f8921e]'
                                    }
                                    border-b border-gray-100 last:border-b-0
                                  `}
                                  onClick={() => setIsAboutDropdownOpen(false)}
                                >
                                  {dropdownItem.name}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  }

                  const active = isActive(item.path);
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`
                        relative h-full flex items-center justify-center px-2.5 text-sm font-semibold 
                        transition-all duration-200 group mx-[1px]
                        ${active 
                          ? 'text-white' 
                          : 'text-gray-800 hover:text-white'
                        }
                      `}
                    >
                      <span className="relative z-10 transform transition-transform duration-200 group-hover:scale-105 whitespace-nowrap">
                        {item.name}
                      </span>
                      
                      
                      {active && (
                        <div className="absolute inset-0 bg-[#f8921e] transition-all duration-200"></div>
                      )}
                      
                      
                      {!active && (
                        <div className="absolute inset-0 bg-[#f8921e] opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-200"></div>
                      )}
                      
                      
                      {active && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#f8921e]"></div>
                      )}
                    </Link>
                  );
                })}
              </nav>

              
              <div className="relative flex-shrink-0 ml-2" ref={searchRef}>
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2.5 text-gray-800 hover:text-white hover:bg-[#f8921e] transition-all duration-200 hover:scale-105 transform"
                  aria-label="Search"
                  type="button"
                >
                  <Search size={20} />
                </button>

                
                {isSearchOpen && (
                  <div className="absolute right-0 top-full mt-2 w-80 bg-white shadow-xl border border-gray-200 z-50">
                    <form onSubmit={handleSearchSubmit} className="p-4">
                      <div className="relative">
                        <input
                          ref={searchInputRef}
                          type="text"
                          placeholder="Search website..."
                          className="w-full pl-10 pr-10 py-2.5 border border-gray-300 focus:ring-2 focus:ring-[#f8921e] focus:border-[#f8921e] text-sm"
                          value={searchQuery}
                          onChange={(e) => handleSearch(e.target.value)}
                          autoFocus
                        />
                        <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        {searchQuery && (
                          <button
                            type="button"
                            onClick={clearSearch}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            aria-label="Clear search"
                          >
                            <X size={18} />
                          </button>
                        )}
                      </div>
                      
                      
                      {searchResults.length > 0 && (
                        <div className="mt-2 max-h-64 overflow-y-auto border-t border-gray-100">
                          {searchResults.map((result) => (
                            <button
                              key={result.id}
                              onClick={() => handleSearchItemClick(result.path)}
                              className="w-full text-left px-2 py-2 hover:bg-orange-50 transition-all duration-200 hover:scale-[1.02] transform origin-left flex items-start"
                              type="button"
                            >
                              <div className="flex-1">
                                <div className="font-medium text-gray-900 text-sm">{result.title}</div>
                                <div className="text-xs text-[#155a90] mt-0.5 font-medium">{result.type}</div>
                              </div>
                            </button>
                          ))}
                          
                          
                          <div className="pt-2 mt-2 border-t border-gray-100">
                            <button
                              type="button"
                              onClick={handleViewAllResults}
                              className="w-full text-center text-sm text-blue-600 hover:text-blue-800 font-medium py-2"
                            >
                              View all results for "{searchQuery}"
                            </button>
                          </div>
                        </div>
                      )}

                      {searchQuery && searchResults.length === 0 && (
                        <div className="mt-2 p-2 text-center text-sm text-gray-500">
                          No results found for "{searchQuery}"
                        </div>
                      )}
                    </form>
                  </div>
                )}
              </div>

              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2.5 text-gray-800 hover:text-white hover:bg-[#f8921e] transition-all duration-200 hover:scale-105 transform ml-1"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
                type="button"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 mt-2 pt-4 pb-6 font-poppins">
              <div className="space-y-1">
                <Link
                  to="/"
                  className="block px-4 py-3 text-base font-semibold text-gray-800 hover:text-white hover:bg-[#f8921e] transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                
                
                <div className="space-y-1">
                  <Link
                    to="/about"
                    className="block px-4 py-3 text-base font-semibold text-gray-800 hover:text-white hover:bg-[#f8921e] transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About TAGDev 2.0
                  </Link>
                  <Link
                    to="/programs"
                    className="block px-8 py-3 text-base font-medium text-gray-700 hover:text-white hover:bg-[#f8921e] transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Program Areas
                  </Link>
                  <Link
                    to="/people"
                    className="block px-8 py-3 text-base font-medium text-gray-700 hover:text-white hover:bg-[#f8921e] transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Our People
                  </Link>
                  <Link
                    to="/partners"
                    className="block px-8 py-3 text-base font-medium text-gray-700 hover:text-white hover:bg-[#f8921e] transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Partners
                  </Link>
                </div>

                <Link
                  to="/news"
                  className="block px-4 py-3 text-base font-semibold text-gray-800 hover:text-white hover:bg-[#f8921e] transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  News & Events
                </Link>
                <Link
                  to="/resources"
                  className="block px-4 py-3 text-base font-semibold text-gray-800 hover:text-white hover:bg-[#f8921e] transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Resources
                </Link>
                <Link
                  to="/media"
                  className="block px-4 py-3 text-base font-semibold text-gray-800 hover:text-white hover:bg-[#f8921e] transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Media
                </Link>
                <Link
                  to="/contact"
                  className="block px-4 py-3 text-base font-semibold text-gray-800 hover:text-white hover:bg-[#f8921e] transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      
      {isSearchOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => {
            setIsSearchOpen(false);
            setSearchResults([]);
          }}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Header;