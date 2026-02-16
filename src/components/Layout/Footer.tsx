import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Youtube, Twitter, Linkedin, Mail, Phone, MapPin, Clock, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Program Areas', path: '/programs' },
    { name: 'People', path: '/people' },
    { name: 'Partners', path: '/partners' },
    { name: 'News & Events', path: '/news' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Youtube size={20} />, href: '#', label: 'YouTube' },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white font-opensans relative">
      
      <button
        onClick={scrollToTop}
        className="hidden lg:flex absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 items-center gap-2"
        aria-label="Back to top"
      >
        <ChevronUp size={20} />
        <span className="text-sm font-medium">Back to Top</span>
      </button>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                <img 
                  src="/images/logo.png" 
                  alt="TAGDev 2.0 Logo" 
                  className="w-full h-full object-contain p-2"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <span class="text-blue-800 font-bold text-2xl font-poppins">TAGDev</span>
                    `;
                  }}
                />
              </div>
              <div>
                <h2 className="text-xl font-bold font-poppins">TAGDev 2.0</h2>
                <p className="text-sm text-gray-300">Haramaya University</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming agriculture and agrifood systems through education, innovation, and youth empowerment.
            </p>
            
            
            <button
              onClick={scrollToTop}
              className="lg:hidden flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium mb-4"
            >
              <ChevronUp size={16} />
              Back to Top
            </button>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-6 font-poppins">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:pl-2 block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-6 font-poppins">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-gray-300 mt-1 flex-shrink-0" />
                <span className="text-gray-300 leading-relaxed">
                  P.O.Box 138, Haramaya University, Dire Dawa, Ethiopia
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-gray-300" />
                <a
                  href="mailto:info@tagdevhu.edu.et"
                  className="text-gray-300 hover:text-white transition-all duration-300"
                >
                  info@tagdevhu.edu.et
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-gray-300" />
                <span className="text-gray-300">+251 25 553 0303</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={20} className="text-gray-300" />
                <span className="text-gray-300">8:00 AM – 5:00 PM EAT (Mon-Fri)</span>
              </div>
            </div>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-6 font-poppins">Connect With Us</h3>
            <div className="flex space-x-3 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 bg-gray-800 hover:bg-blue-800 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-sm text-gray-400 leading-relaxed">
                &copy; {new Date().getFullYear()} TAGDev 2.0 at Haramaya University. All rights reserved.
              </p>
              <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                In partnership with RUFORUM, Mastercard Foundation, and GCHERA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;