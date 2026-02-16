import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="text-blue-600" size={24} />,
      title: 'Address',
      content: 'P.O.Box 138, Haramaya University, Dire Dawa, Ethiopia',
      link: 'https://maps.google.com/?q=Haramaya+University,Dire+Dawa,Ethiopia'
    },
    {
      icon: <Mail className="text-green-600" size={24} />,
      title: 'Email',
      content: 'info@tagdevhu.edu.et',
      link: 'mailto:info@tagdevhu.edu.et'
    },
    {
      icon: <Phone className="text-purple-600" size={24} />,
      title: 'Phone',
      content: '+251 25 553 0303',
      link: 'tel:+251255530303'
    },
    {
      icon: <Clock className="text-orange-600" size={24} />,
      title: 'Working Hours',
      content: 'Monday - Friday: 8:00 AM – 5:00 PM EAT',
      link: null
    }
  ];

  const subjects = [
    'General Inquiry',
    'Partnership Opportunity',
    'Media & Press',
    'Research Collaboration',
    'Student Programs',
    'Farmer Support',
    'Technical Support',
    'Other'
  ];

  return (
    <Layout>
      <section className="hero-section">
        <div className="hero-background">
          <img 
            src="/images/contact-hero.jpg" 
            alt="Contact TAGDev 2.0" 
            className="hero-image"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.className = 'hero-background bg-gradient-to-r from-blue-800 to-green-700';
            }}
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <div className="max-w-3xl">
            <h1 className="hero-title">
              Contact Us
            </h1>
            <p className="hero-subtitle">
              Get in touch with the TAGDev 2.0 team at Haramaya University
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
                
                <div className="space-y-6 mb-10">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{info.title}</h3>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            target={info.link.startsWith('http') ? '_blank' : '_self'}
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-100 rounded-xl p-6 h-64 flex flex-col items-center justify-center">
                  <img 
                    src="/images/map-placeholder.png" 
                    alt="Haramaya University Location Map" 
                    className="w-full h-full object-cover rounded-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `
                        <div class="text-center">
                          <svg class="text-gray-400 mx-auto mb-4" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          <p class="text-gray-600 font-medium">Haramaya University Campus</p>
                          <p class="text-gray-500 text-sm mt-2">Dire Dawa, Ethiopia</p>
                          <a 
                            href="https://maps.google.com/?q=Haramaya+University,Dire+Dawa,Ethiopia"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn-primary mt-4 inline-block"
                          >
                            View on Google Maps
                          </a>
                        </div>
                      `;
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h2>
                  <p className="text-gray-600">
                    Have questions about our programs? Interested in partnership opportunities? 
                    Want to participate in our initiatives? Send us a message and we'll get back to you shortly.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                    <CheckCircle className="text-green-600 mx-auto mb-4" size={48} />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for contacting TAGDev 2.0 at Haramaya University. 
                      We'll get back to you within 24-48 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn-primary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="+251 ___ ___ ___"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        >
                          <option value="">Select a subject</option>
                          {subjects.map((subject, index) => (
                            <option key={index} value={subject}>
                              {subject}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <div className="text-sm text-gray-500">
                        * Required fields
                      </div>
                      <button
                        type="submit"
                        className="btn-primary flex items-center gap-2"
                      >
                        <Send size={20} />
                        Send Message
                      </button>
                    </div>
                  </form>
                )}

                <div className="mt-12 pt-8 border-t border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Other Ways to Connect</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 rounded-xl p-6 text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Phone className="text-blue-600" size={24} />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">Call Us</h4>
                      <p className="text-gray-600 text-sm">
                        Available during working hours for immediate assistance
                      </p>
                    </div>
                    
                    <div className="bg-green-50 rounded-xl p-6 text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail className="text-green-600" size={24} />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">Email Us</h4>
                      <p className="text-gray-600 text-sm">
                        For detailed inquiries and partnership discussions
                      </p>
                    </div>
                    
                    <div className="bg-purple-50 rounded-xl p-6 text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MapPin className="text-purple-600" size={24} />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">Visit Us</h4>
                      <p className="text-gray-600 text-sm">
                        Schedule a campus visit or meeting with our team
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;