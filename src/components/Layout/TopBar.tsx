import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <div className="bg-[#155a90] text-white text-sm">
      <div className="container-custom">
        <div className="flex justify-between items-center py-3">
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-blue-100" />
              <a 
                href="mailto:info@tagdevhu.edu.et" 
                className="text-white hover:text-blue-100 hover:underline transition-colors duration-200 font-medium"
              >
                info@tagdevhu.edu.et
              </a>
            </div>
            
            <span className="text-blue-200">|</span>
            
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-blue-100" />
              <a 
                href="tel:+251255530303" 
                className="text-white hover:text-blue-100 hover:underline transition-colors duration-200 font-medium"
              >
                +251 25 553 0303
              </a>
            </div>
          </div>

          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-blue-100" />
              <a 
                href="https://maps.google.com/?q=Haramaya+University,Dire+Dawa,Ethiopia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-100 hover:underline transition-colors duration-200 font-medium"
              >
                Haramaya University, Dire Dawa
              </a>
            </div>
            
            <span className="text-blue-200">|</span>
            
            
            <div className="flex items-center gap-3">
              <a 
                href="#" 
                className="text-white hover:text-[#f8921e] transition-all duration-200 p-1 hover:scale-110 transform"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-[#f8921e] transition-all duration-200 p-1 hover:scale-110 transform"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-[#f8921e] transition-all duration-200 p-1 hover:scale-110 transform"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-[#f8921e] transition-all duration-200 p-1 hover:scale-110 transform"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;