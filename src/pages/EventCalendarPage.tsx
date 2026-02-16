import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import { Calendar, ChevronLeft, ChevronRight, MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import { events, getUpcomingEvents, Event as EventType } from '../data/eventData';

const EventCalendarPage: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('calendar');

  const upcomingEvents = getUpcomingEvents();

  
  const getDaysInMonth = (date: Date): number => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date): number => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const monthNames: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const prevMonth = (): void => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = (): void => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  
  const getEventsForDate = (day: number): EventType[] => {
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getDate() === day &&
        eventDate.getMonth() === currentMonth.getMonth() &&
        eventDate.getFullYear() === currentMonth.getFullYear()
      );
    });
  };

  return (
    <Layout>
    
      <section className="hero-section">
        <div className="hero-background">
          <img 
            src="/images/events-hero.jpg" 
            alt="TAGDev 2.0 Events" 
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
              Events Calendar
            </h1>
            <p className="hero-subtitle">
              Workshops, field days, symposiums, and community events
            </p>
          </div>
        </div>
      </section>

      
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <div className="inline-flex bg-white rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setViewMode('calendar')}
                className={`flex items-center px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  viewMode === 'calendar'
                    ? 'bg-[#155a90] text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                type="button"
              >
                <Calendar size={18} className="mr-2" />
                Calendar View
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-[#155a90] text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                type="button"
              >
                <Users size={18} className="mr-2" />
                List View
              </button>
            </div>

            {viewMode === 'list' && (
              <div className="text-sm text-gray-600">
                <span className="font-bold">{upcomingEvents.length}</span> upcoming events
              </div>
            )}
          </div>

          
          {viewMode === 'calendar' && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={prevMonth}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-[#f8921e] transition-colors"
                    type="button"
                    aria-label="Previous month"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextMonth}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-[#f8921e] transition-colors"
                    type="button"
                    aria-label="Next month"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              
              <div className="grid grid-cols-7 gap-2">
                
                {days.map(day => (
                  <div key={day} className="text-center font-semibold text-gray-600 py-3">
                    {day}
                  </div>
                ))}

                
                {Array.from({ length: firstDay }).map((_, index) => (
                  <div key={`empty-${index}`} className="aspect-square p-2" />
                ))}

                
                {Array.from({ length: daysInMonth }).map((_, index) => {
                  const day = index + 1;
                  const dayEvents = getEventsForDate(day);
                  const hasEvents = dayEvents.length > 0;
                  const isToday = new Date().toDateString() === 
                    new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day).toDateString();

                  return (
                    <div
                      key={day}
                      className={`
                        aspect-square p-2 border rounded-lg transition-all duration-200 cursor-pointer
                        ${hasEvents ? 'bg-blue-50 border-blue-200 hover:bg-blue-100' : 'border-gray-100 hover:bg-gray-50'}
                        ${isToday ? 'ring-2 ring-[#f8921e] ring-offset-2' : ''}
                      `}
                      onClick={() => hasEvents && setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day))}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if ((e.key === 'Enter' || e.key === ' ') && hasEvents) {
                          setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day));
                        }
                      }}
                    >
                      <div className="flex flex-col h-full">
                        <span className={`
                          text-sm font-medium
                          ${isToday ? 'text-[#f8921e]' : hasEvents ? 'text-blue-800' : 'text-gray-700'}
                        `}>
                          {day}
                        </span>
                        {hasEvents && (
                          <div className="mt-1">
                            <span className="inline-block w-2 h-2 bg-[#f8921e] rounded-full"></span>
                            <span className="text-xs text-[#f8921e] ml-1">
                              {dayEvents.length} {dayEvents.length === 1 ? 'event' : 'events'}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-6 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-50 border border-blue-200 rounded mr-2"></div>
                  <span className="text-gray-600">Has events</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white ring-2 ring-[#f8921e] rounded mr-2"></div>
                  <span className="text-gray-600">Today</span>
                </div>
              </div>
            </div>
          )}

          
          {viewMode === 'list' && (
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center">
                    
                    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                      <div className="bg-gradient-to-br from-[#155a90] to-[#f8921e] text-white rounded-xl p-4 text-center w-24">
                        <div className="text-lg font-bold">{event.month}</div>
                        <div className="text-3xl font-bold">{event.day}</div>
                      </div>
                    </div>

                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
                        <div className="flex items-center text-gray-600">
                          <Clock size={16} className="mr-2" />
                          <span className="text-sm">{event.time}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin size={16} className="mr-2" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">{event.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {event.registered}/{event.capacity} registered
                        </span>
                        <a
                          href={event.registrationLink}
                          className="inline-flex items-center text-[#155a90] hover:text-[#f8921e] font-medium transition-colors"
                        >
                          Register Now <ArrowRight size={16} className="ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {upcomingEvents.length === 0 && (
                <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
                  <Calendar size={64} className="mx-auto text-gray-300 mb-6" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No upcoming events</h3>
                  <p className="text-gray-600">Check back soon for new events and activities</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#155a90] to-[#f8921e] rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Never Miss an Event</h2>
            <p className="text-lg opacity-90 mb-8">
              Subscribe to our calendar and receive updates about workshops, trainings, and community events.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                className="px-8 py-3 bg-white text-[#155a90] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                type="button"
              >
                Add to Google Calendar
              </button>
              <button 
                className="px-8 py-3 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-colors"
                type="button"
              >
                Download iCal
              </button>
            </div>
            <p className="text-sm opacity-75 mt-6">
              Or follow us on social media for real-time updates
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EventCalendarPage;