import React from 'react';
import { 
  CloudRain, 
  Users, 
  Sprout, 
  TreeDeciduous, 
  Rocket, 
  Building2,
  BookOpen,
  Factory
} from 'lucide-react';

const ProgramAreas: React.FC = () => {
  const focusAreas = [
    {
      icon: <CloudRain className="text-blue-600" size={28} />,
      title: 'Climate Smart TIMPs',
      description: 'Technologies, Innovations and Management Practices for climate resilience',
      items: ['Water management', 'Soil conservation', 'Adaptive cropping']
    },
    {
      icon: <Users className="text-green-600" size={28} />,
      title: 'Youth Advisory',
      description: 'Engaging students and local youth in agricultural innovation',
      items: ['Mentorship programs', 'Skill development', 'Leadership training']
    },
    {
      icon: <Sprout className="text-emerald-600" size={28} />,
      title: 'DLS & Farm Advisory',
      description: 'Digital and in-person advisory services for farmers',
      items: ['Extension services', 'Technology adoption', 'Best practices']
    },
    {
      icon: <TreeDeciduous className="text-teal-600" size={28} />,
      title: 'Tree Planting Campaigns',
      description: 'Large-scale afforestation and agroforestry initiatives',
      items: ['Community nurseries', 'Carbon sequestration', 'Biodiversity']
    },
    {
      icon: <Rocket className="text-purple-600" size={28} />,
      title: 'Startups & MSIPs',
      description: 'Supporting Micro, Small and Innovative Enterprises',
      items: ['Business incubation', 'Market access', 'Funding support']
    },
    {
      icon: <Building2 className="text-orange-600" size={28} />,
      title: 'ARI HUB',
      description: 'Alumni-led Research and Innovation Hub',
      items: ['Networking', 'Knowledge sharing', 'Collaborative projects']
    }
  ];

  const jobCreation = [
    {
      icon: <Users className="text-blue-600" size={28} />,
      title: 'Cooperatives',
      description: 'Youth and women-led agricultural cooperatives'
    },
    {
      icon: <BookOpen className="text-green-600" size={28} />,
      title: 'TVET Programs',
      description: 'Technical and Vocational Education Training'
    },
    {
      icon: <Factory className="text-purple-600" size={28} />,
      title: 'Youth Enterprises',
      description: 'Support for youth and women-owned businesses'
    },
    {
      icon: <Building2 className="text-orange-600" size={28} />,
      title: 'Out of School Youth',
      description: 'Skills training and employment pathways'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="section-title">Program Focus Areas</h2>
            <p className="section-subtitle mx-auto text-center">
              Six key areas driving our mission for agricultural transformation and youth empowerment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600 mb-5">{area.description}</p>
                <ul className="space-y-2">
                  {area.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-blue-200 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        
        <div>
          <div className="text-center mb-16">
            <h2 className="section-title">Job Creation Pathways</h2>
            <p className="section-subtitle mx-auto text-center">
              Multiple approaches to creating sustainable employment opportunities in agriculture
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {jobCreation.map((pathway, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {pathway.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{pathway.title}</h3>
                  <p className="text-gray-600 text-sm">{pathway.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Building Sustainable Livelihoods
                </h3>
                <p className="text-gray-700">
                  Our integrated approach connects education, entrepreneurship, and community engagement 
                  to create meaningful employment opportunities that contribute to food security and 
                  economic growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramAreas;