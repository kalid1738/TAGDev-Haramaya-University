import React from 'react';
import { Calendar, Newspaper, Users, BookOpen, MapPin, ArrowRight } from 'lucide-react';

const NewsEventsSection: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      title: 'GTA Students Application & Admission',
      date: 'March 2024',
      category: 'Admissions',
      description: 'Graduate Training Assistantship program opens for applications at Haramaya University',
      link: '#',
      icon: <BookOpen className="text-blue-600" size={24} />
    },
    {
      id: 2,
      title: 'RUFORUM AGM 2025 Announcement',
      date: 'April 2024',
      category: 'Conference',
      description: 'Preparations begin for RUFORUM Annual General Meeting 2025',
      link: '#',
      icon: <Users className="text-green-600" size={24} />
    },
    {
      id: 3,
      title: 'Kidesena + TVETs Training in Kenya',
      date: 'February 2024',
      category: 'Training',
      description: 'Capacity building workshop for TVET institutions in Kenya',
      link: '#',
      icon: <BookOpen className="text-purple-600" size={24} />
    },
    {
      id: 4,
      title: 'TAGDev 2.0 Management Consultations',
      date: 'January 2024',
      category: 'Meeting',
      description: 'Strategic meetings with university top management',
      link: '#',
      icon: <Users className="text-orange-600" size={24} />
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Youth Entrepreneurship Workshop',
      date: 'March 15, 2024',
      time: '9:00 AM - 4:00 PM',
      location: 'Haramaya University Main Campus',
      description: 'Training on agribusiness and startup development for youth',
      link: '#'
    },
    {
      id: 2,
      title: 'Climate-Smart Agriculture Field Day',
      date: 'April 5, 2024',
      time: '8:00 AM - 2:00 PM',
      location: 'Demonstration Farm, Dire Dawa',
      description: 'Showcasing climate-resilient farming technologies',
      link: '#'
    },
    {
      id: 3,
      title: 'Research Symposium',
      date: 'May 20, 2024',
      time: '10:00 AM - 5:00 PM',
      location: 'College of Agriculture Conference Hall',
      description: 'Presenting latest research findings on agrifood systems',
      link: '#'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
            <Newspaper className="text-blue-600" size={40} />
          </div>
          <h2 className="section-title">Latest News & Events</h2>
          <p className="section-subtitle mx-auto text-center">
            Stay updated with our latest activities, achievements, and upcoming events
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Latest News</h3>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center">
                View All News <ArrowRight size={20} className="ml-2" />
              </a>
            </div>

            <div className="space-y-6">
              {newsItems.map((news) => (
                <div 
                  key={news.id} 
                  className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start">
                    <div className="mr-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        {news.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                          {news.category}
                        </span>
                        <span className="ml-3 text-sm text-gray-500">
                          <Calendar size={14} className="inline mr-1" />
                          {news.date}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{news.title}</h4>
                      <p className="text-gray-600 mb-4">{news.description}</p>
                      <a 
                        href={news.link} 
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                      >
                        Read More <ArrowRight size={16} className="ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Upcoming Events</h3>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center">
                View Calendar <ArrowRight size={20} className="ml-2" />
              </a>
            </div>

            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <div 
                  key={event.id} 
                  className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-600 text-white rounded-lg p-3 text-center mr-4 flex-shrink-0">
                      <div className="text-lg font-bold">MAR</div>
                      <div className="text-2xl font-bold">15</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h4>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-gray-600">
                          <Calendar size={16} className="mr-2" />
                          {event.date} • {event.time}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin size={16} className="mr-2" />
                          {event.location}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <a 
                        href={event.link} 
                        className="btn-primary inline-flex items-center"
                      >
                        Register Now <ArrowRight size={16} className="ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6">
              <div className="flex items-center">
                <Calendar className="text-blue-600 mr-4" size={32} />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Events Calendar</h4>
                  <p className="text-gray-600 text-sm">
                    View our complete events calendar for workshops, training sessions, 
                    and community engagement activities throughout the year.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Resources & Publications</h3>
            <p className="text-gray-700 max-w-3xl mx-auto mb-8">
              Access our research publications, policy briefs, annual reports, impact stories, 
              and multimedia resources documenting our journey in agricultural transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="btn-primary">
                View Publications
              </a>
              <a href="#" className="btn-secondary">
                Download Resources
              </a>
              <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-6 rounded-lg transition duration-300">
                Impact Stories
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;