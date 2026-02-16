import React from 'react';
import Layout from '../components/Layout/Layout';
import { Building2, Handshake, Globe, Award, Users, Target, Link as LinkIcon } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const strategicPartners = [
    {
      name: 'RUFORUM',
      fullName: 'Regional Universities Forum for Capacity Building in Agriculture',
      description: 'A network of 163 universities in 40 African countries focused on agricultural development',
      role: 'Lead implementing partner and network coordinator',
      website: 'https://www.ruforum.org',
      logoColor: 'bg-blue-100',
      icon: <Building2 className="text-blue-600" size={32} />
    },
    {
      name: 'Mastercard Foundation',
      fullName: 'Mastercard Foundation',
      description: 'Global philanthropic organization with a focus on youth employment in Africa',
      role: 'Primary funding partner and strategic collaborator',
      website: 'https://mastercardfdn.org',
      logoColor: 'bg-yellow-100',
      icon: <Award className="text-yellow-600" size={32} />
    },
    {
      name: 'GCHERA',
      fullName: 'Global Confederation of Higher Education Associations for Agricultural and Life Sciences',
      description: 'Global network of higher education associations in agriculture and life sciences',
      role: 'Knowledge partner and global network connector',
      website: 'https://www.gchera.com',
      logoColor: 'bg-green-100',
      icon: <Globe className="text-green-600" size={32} />
    },
    {
      name: '12 African Universities',
      fullName: 'Network of 12 Leading African Universities',
      description: 'Consortium of African universities collaborating on agricultural transformation',
      role: 'Implementation partners and regional hubs',
      website: '#',
      logoColor: 'bg-purple-100',
      icon: <Users className="text-purple-600" size={32} />
    }
  ];

  const collaborators = [
    { name: 'Haramaya University', role: 'Host institution and lead implementer' },
    { name: 'Ethiopian Ministry of Agriculture', role: 'Policy and regulatory support' },
    { name: 'Agricultural Transformation Institute (ATI)', role: 'Technical assistance and scaling' },
    { name: 'Ethiopian Institute of Agricultural Research (EIAR)', role: 'Research collaboration' },
    { name: 'Local TVET Institutions', role: 'Skills training and youth outreach' },
    { name: 'Farmers Cooperatives & Unions', role: 'Community engagement and field implementation' },
    { name: 'Private Sector Agribusinesses', role: 'Market access and enterprise development' },
    { name: 'International Research Centers', role: 'Innovation and technology transfer' },
  ];

  return (
    <Layout>
      <section className="hero-section">
        <div className="hero-background">
          <img 
            src="/images/partners-hero.jpg" 
            alt="TAGDev 2.0 Partners" 
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
              Our Partners
            </h1>
            <p className="hero-subtitle">
              Strategic collaborations driving agricultural transformation across Africa
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Strategic Partners</h2>
            <p className="section-subtitle mx-auto text-center">
              Our core partners who provide strategic direction, funding, and technical support
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {strategicPartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 ${partner.logoColor} rounded-xl flex items-center justify-center`}>
                      {partner.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                    <p className="text-gray-600 mb-3">{partner.fullName}</p>
                    <p className="text-gray-700 mb-4">{partner.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-1">Role in TAGDev 2.0:</h4>
                      <p className="text-gray-600">{partner.role}</p>
                    </div>
                    {partner.website && (
                      <a 
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                      >
                        <LinkIcon size={16} className="mr-2" />
                        Visit Website
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Key Collaborators</h2>
            <p className="section-subtitle mx-auto text-center">
              Organizations and institutions working with us to achieve our mission
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {collaborators.map((collaborator, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors duration-300">
                  <div className="flex items-start">
                    <Target className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{collaborator.name}</h4>
                      <p className="text-sm text-gray-600">{collaborator.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Partnership Model</h3>
                <p className="text-gray-700">
                  Our partnership approach combines strategic alliances with core partners and 
                  collaborative networks with implementers. This multi-level partnership model 
                  ensures we have the strategic direction, resources, and on-ground presence 
                  needed to drive meaningful agricultural transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-6">
              <Handshake className="text-blue-600" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Become a Partner</h2>
            <p className="text-lg text-gray-700 mb-8">
              Interested in partnering with TAGDev 2.0? Whether you're a research institution, 
              government agency, private sector company, or development organization, we welcome 
              opportunities for collaboration.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn-primary">
                Contact Us About Partnership
              </a>
              <a href="#" className="btn-secondary">
                Download Partnership Prospectus
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PartnersPage;