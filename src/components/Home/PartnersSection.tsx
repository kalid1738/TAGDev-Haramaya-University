import React from 'react';
import { Building2, Handshake, Globe, Award, Users, Target, Link as LinkIcon } from 'lucide-react';

const PartnersSection: React.FC = () => {
  const partners = [
    {
      name: 'RUFORUM',
      description: 'Regional Universities Forum for Capacity Building in Agriculture',
      role: 'Lead implementing partner and network coordinator',
      icon: <Building2 className="text-blue-600" size={32} />,
      logo: '/images/ruforum-logo.jpg'
    },
    {
      name: 'Mastercard Foundation',
      description: 'Global philanthropic organization focused on youth employment',
      role: 'Primary funding partner and strategic collaborator',
      icon: <Award className="text-yellow-600" size={32} />,
      logo: '/images/mastercard-logo.jpg'
    },
    {
      name: 'GCHERA',
      description: 'Global Confederation of Higher Education Associations for Agricultural and Life Sciences',
      role: 'Knowledge partner and global network connector',
      icon: <Globe className="text-green-600" size={32} />,
      logo: '/images/gchera-logo.png'
    },
    {
      name: '12 African Universities',
      description: 'Network of leading agricultural universities across Africa',
      role: 'Implementation partners and knowledge sharing hubs',
      icon: <Users className="text-purple-600" size={32} />,
      logo: ''
    }
  ];

  const collaborators = [
    {
      name: 'Haramaya University',
      role: 'Host institution and lead implementer',
      logo: '/images/haramaya-logo.png'
    },
    {
      name: 'Ethiopian Ministry of Agriculture',
      role: 'Policy and regulatory support',
      logo: ''
    },
    {
      name: 'Local TVET Institutions',
      role: 'Skills training and youth outreach',
      logo: ''
    },
    {
      name: 'Farmers Cooperatives',
      role: 'Community engagement and field implementation',
      logo: ''
    },
    {
      name: 'Private Sector Partners',
      role: 'Market access and enterprise development',
      logo: ''
    },
    {
      name: 'Research Institutions',
      role: 'Innovation and technology development',
      logo: ''
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
            <Handshake className="text-blue-600" size={40} />
          </div>
          <h2 className="section-title">Our Partners & Collaborators</h2>
          <p className="section-subtitle mx-auto text-center">
            Strategic partnerships driving agricultural transformation across Africa
          </p>
        </div>

        
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">Strategic Partners</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-24 h-24 bg-gray-50 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  {partner.logo ? (
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-full h-full object-contain p-2"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `<div class="text-blue-600">${partner.icon}</div>`;
                      }}
                    />
                  ) : (
                    <div className="text-blue-600">{partner.icon}</div>
                  )}
                </div>
                <h4 className="text-xl font-bold text-gray-900 text-center mb-3">{partner.name}</h4>
                <p className="text-gray-600 text-center mb-4">{partner.description}</p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-blue-800 text-center">{partner.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">Key Collaborators</h3>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collaborators.map((collaborator, index) => (
                <div 
                  key={index} 
                  className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    {collaborator.logo ? (
                      <img 
                        src={collaborator.logo} 
                        alt={collaborator.name}
                        className="w-full h-full object-contain p-1"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = '<Building2 className="text-gray-400" size={24} />';
                        }}
                      />
                    ) : (
                      <Building2 className="text-gray-400" size={24} />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{collaborator.name}</h4>
                    <p className="text-sm text-gray-600">{collaborator.role}</p>
                  </div>
                </div>
              ))}
            </div>
            
            
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="max-w-3xl mx-auto text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Partnership Impact</h4>
                <p className="text-gray-700">
                  Through these strategic partnerships, we're creating a powerful ecosystem for agricultural 
                  transformation, combining research excellence, youth empowerment, community engagement, 
                  and policy influence to drive sustainable change across Ethiopia and Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;