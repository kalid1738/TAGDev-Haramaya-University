import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import { Calendar, Newspaper, MapPin, ArrowRight, Clock, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { newsArticles, getFeaturedNews, getLatestNews, NewsArticle } from '../data/newsData';
import { events, Event } from '../data/eventData';

const NewsPage: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState<string>('March 2024');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const featuredNews = getFeaturedNews();
  const latestNews = getLatestNews(6);
  const upcomingEvents: Event[] = events.filter(event => new Date(event.date) >= new Date()).slice(0, 4);

  const categories: string[] = ['All', 'Admissions', 'Conference', 'Training', 'Meeting', 'Initiative', 'Event', 'Research'];

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedCategory(e.target.value);
  };

  const handlePrevMonth = (): void => {
    
    console.log('Previous month');
  };

  const handleNextMonth = (): void => {
    
    console.log('Next month');
  };

  return (
    <Layout>
      
      <section className="hero-section">
        <div className="hero-background">
          <img 
            src="/images/news-hero.jpg" 
            alt="TAGDev 2.0 News" 
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
              News & Events
            </h1>
            <p className="hero-subtitle">
              Latest updates, announcements, and upcoming events from TAGDev 2.0
            </p>
          </div>
        </div>
      </section>

      {featuredNews.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="section-title">Featured News</h2>
              <p className="section-subtitle mx-auto text-center">
                Important announcements and major updates
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
              {featuredNews.map((news: NewsArticle) => (
                <div key={news.id} className="md:flex">
                  <div className="md:w-2/5 relative">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        if (target.parentElement) {
                          target.parentElement.className = 'md:w-2/5 bg-gradient-to-br from-[#155a90] to-[#f8921e] p-12 text-white flex flex-col justify-center';
                        }
                      }}
                    />
                  </div>
                  <div className="md:w-3/5 p-12">
                    <span className="inline-block px-4 py-2 bg-blue-100 text-[#155a90] rounded-full text-sm font-semibold mb-4">
                      FEATURED
                    </span>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{news.title}</h3>
                    <div className="flex items-center text-gray-600 mb-6">
                      <Calendar size={20} className="mr-2" />
                      <span>{news.date}</span>
                      <span className="mx-3">•</span>
                      <Clock size={20} className="mr-2" />
                      <span>{news.readTime}</span>
                    </div>
                    <p className="text-gray-700 text-lg mb-8">{news.fullContent}</p>
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-blue-100 text-[#155a90] rounded-full text-sm font-semibold">
                        {news.category}
                      </span>
                      <a href="#" className="text-[#155a90] hover:text-[#f8921e] font-semibold transition-colors">
                        Share This Story
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <h2 className="section-title">Latest News</h2>
              <p className="text-gray-600">Stay updated with our activities and achievements</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <label htmlFor="category-select" className="sr-only">Filter by category</label>
                <select 
                  id="category-select"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f8921e] focus:border-[#f8921e] appearance-none bg-white"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  title="Filter news by category"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {latestNews.map((news: NewsArticle) => (
              <div key={news.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-green-100 relative">
                  <img 
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.className = 'h-48 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center';
                      }
                    }}
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-[#155a90] rounded-full text-sm font-semibold">
                      {news.category}
                    </span>
                    <span className="text-sm text-gray-500">{news.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{news.title}</h3>
                  <p className="text-gray-600 mb-6">{news.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock size={16} className="mr-1" />
                      {news.readTime}
                    </div>
                    <a href="#" className="text-[#155a90] hover:text-[#f8921e] font-medium flex items-center transition-colors">
                      Read More <ArrowRight size={16} className="ml-2" />
                    </a>
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
            <h2 className="section-title">Upcoming Events</h2>
            <p className="section-subtitle mx-auto text-center">
              Join our workshops, training sessions, and community events
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event: Event) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-br from-[#155a90] to-[#f8921e] text-white rounded-xl p-4 text-center w-24">
                      <div className="text-lg font-bold">{event.month}</div>
                      <div className="text-3xl font-bold">{event.day}</div>
                    </div>
                  </div>
                  <div className="ml-6 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar size={18} className="mr-3" />
                        <span>{event.date} • {event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin size={18} className="mr-3" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6">{event.description}</p>
                    <div className="flex items-center justify-between">
                      <a href={event.registrationLink} className="bg-[#155a90] hover:bg-[#0f3d66] text-white font-semibold px-6 py-2 rounded-lg transition-colors">
                        Register Now
                      </a>
                      <a href="#" className="text-[#155a90] hover:text-[#f8921e] font-medium transition-colors">
                        Add to Calendar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-center space-x-4">
            <button 
              onClick={handlePrevMonth}
              className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-[#f8921e] transition-colors"
              type="button"
              aria-label="Previous month"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="font-semibold text-gray-900">{currentMonth}</span>
            <button 
              onClick={handleNextMonth}
              className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-[#f8921e] transition-colors"
              type="button"
              aria-label="Next month"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-6">
              <Calendar className="text-[#155a90]" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">View Full Events Calendar</h3>
            <p className="text-gray-700 max-w-2xl mx-auto mb-8">
              Browse our complete calendar of workshops, training sessions, and community engagement activities.
            </p>
            <a href="/events" className="bg-[#155a90] hover:bg-[#0f3d66] text-white font-semibold px-8 py-3 rounded-lg transition-colors inline-flex items-center">
              View Calendar <ArrowRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#155a90] to-[#f8921e] rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-lg opacity-90 mb-8">
              Subscribe to our newsletter to receive the latest news, event invitations, 
              and program updates directly in your inbox.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Email address"
              />
              <button type="submit" className="px-6 py-3 bg-white text-[#155a90] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </form>
            <p className="text-sm opacity-75 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsPage;