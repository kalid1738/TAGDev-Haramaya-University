import React from 'react';
import { Target, Users, Briefcase, TreePine, Leaf, TrendingUp } from 'lucide-react';

const KeyTargets: React.FC = () => {
  const targets = [
    {
      icon: <Users className="text-blue-600" size={32} />,
      value: '3,260',
      label: 'Youth in Employment',
      description: 'Young people supported with employment opportunities',
      color: 'bg-blue-50'
    },
    {
      icon: <Briefcase className="text-green-600" size={32} />,
      value: '75',
      label: 'Startups Established',
      description: 'New agricultural enterprises created',
      color: 'bg-green-50'
    },
    {
      icon: <Target className="text-purple-600" size={32} />,
      value: '420',
      label: 'Incubation Jobs',
      description: 'Jobs created through incubation programs',
      color: 'bg-purple-50'
    },
    {
      icon: <TreePine className="text-emerald-600" size={32} />,
      value: '100,000',
      label: 'Trees Planted',
      description: 'Trees planted for climate resilience',
      color: 'bg-emerald-50'
    },
    {
      icon: <Users className="text-orange-600" size={32} />,
      value: '72,000',
      label: 'Smallholder Farmers',
      description: 'Farmers reached with adaptive innovations',
      color: 'bg-orange-50'
    },
    {
      icon: <Leaf className="text-teal-600" size={32} />,
      value: '26',
      label: 'Climate-Smart TIMPs',
      description: 'Technologies, Innovations & Management Practices',
      color: 'bg-teal-50'
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Key Targets & Impact</h2>
          <p className="section-subtitle mx-auto text-center">
            Our measurable targets for transforming agriculture and empowering youth across Ethiopia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {targets.map((target, index) => (
            <div 
              key={index} 
              className={`${target.color} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-md">
                    {target.icon}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{target.value}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{target.label}</h3>
                  <p className="text-gray-600 text-sm">{target.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Driving Agricultural Transformation
              </h3>
              <p className="text-gray-700 max-w-2xl">
                Through the ASEC Project, we're creating sustainable impact by combining 
                education, innovation, and community engagement to build climate-resilient 
                agrifood systems.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center space-x-4">
                <TrendingUp className="text-green-600" size={40} />
                <div>
                  <div className="text-2xl font-bold text-gray-900">10-Year</div>
                  <div className="text-gray-600">Strategic Initiative</div>
                  <div className="text-sm text-gray-500">2023 - 2033</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyTargets;