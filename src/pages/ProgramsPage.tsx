import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom';
import { 
  CloudRain, 
  Users, 
  Sprout, 
  TreeDeciduous, 
  Rocket, 
  Building2,
  Target,
  BarChart3,
  GraduationCap,
  Shield,
  ArrowRight
} from 'lucide-react';
import { programAreas, jobCreationPathways } from '../data/programData';

const getIcon = (iconName: string, color: string) => {
  const iconProps = { className: `text-${color}-600`, size: 28 };
  
  switch (iconName) {
    case 'CloudRain': return <CloudRain {...iconProps} />;
    case 'Users': return <Users {...iconProps} />;
    case 'Sprout': return <Sprout {...iconProps} />;
    case 'TreeDeciduous': return <TreeDeciduous {...iconProps} />;
    case 'Rocket': return <Rocket {...iconProps} />;
    case 'Building2': return <Building2 {...iconProps} />;
    default: return <Target {...iconProps} />;
  }
};

const ProgramsPage: React.FC = () => {
  return (
    <Layout>
      <section className="hero-section">
        <div className="hero-background">
          <img 
            src="/images/programs-hero.jpg" 
            alt="TAGDev 2.0 Programs" 
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
              Program Areas
            </h1>
            <p className="hero-subtitle">
              Six strategic focus areas driving agricultural transformation and youth empowerment
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="section-title">Our Integrated Approach</h2>
            <p className="text-lg text-gray-700 mb-8">
              TAGDev 2.0 at Haramaya University implements an integrated approach through six 
              interconnected program areas. Each area addresses specific challenges while 
              contributing to our overall mission of transforming agriculture and empowering youth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-blue-800 mb-2">10-Year</div>
                <div className="text-gray-700">Strategic Initiative</div>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-green-800 mb-2">6</div>
                <div className="text-gray-700">Focus Areas</div>
              </div>
              <div className="bg-purple-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-purple-800 mb-2">3</div>
                <div className="text-gray-700">Strategic Outcomes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Focus Areas</h2>
            <p className="section-subtitle mx-auto text-center">
              Six interconnected areas driving our mission for agricultural transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programAreas.map((area) => (
              <Link
                key={area.id}
                to={`/programs/${area.slug}`}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mb-6">
                    {getIcon(area.icon, area.color)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h3>
                  <p className="text-gray-600 mb-6">{area.shortDescription}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Objectives:</h4>
                    <ul className="space-y-2">
                      {area.objectives.slice(0, 3).map((objective) => (
                        <li key={objective.id} className="flex items-start text-sm text-gray-600">
                          <Target size={16} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="line-clamp-2">{objective.description}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-blue-600 font-medium text-sm">Learn more</span>
                    <ArrowRight size={16} className="text-blue-600" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Job Creation Pathways</h2>
            <p className="section-subtitle mx-auto text-center">
              Multiple approaches to creating sustainable employment opportunities in agriculture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {jobCreationPathways.map((pathway, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  {getIcon(pathway.icon, pathway.color)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{pathway.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{pathway.description}</p>
                <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-4 text-center">
                  <p className="font-bold text-gray-900">{pathway.target}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Program Impact Framework</h2>
              <p className="text-lg text-gray-700">
                Our program areas are designed to create measurable impact through a results-based framework
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="text-blue-600" size={28} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Inputs</h3>
                  <p className="text-gray-600">Funding, expertise, partnerships, and infrastructure</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="text-green-600" size={28} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Activities</h3>
                  <p className="text-gray-600">Training, research, advisory services, and enterprise support</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="text-purple-600" size={28} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Outcomes</h3>
                  <p className="text-gray-600">Youth employment, climate resilience, and education quality</p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100">
                <div className="flex items-center justify-center">
                  <Shield className="text-orange-600 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-900">Monitoring & Evaluation</h3>
                </div>
                <p className="text-gray-700 text-center mt-4">
                  Regular monitoring and evaluation ensures program effectiveness and enables 
                  evidence-based decision making for continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center bg-white rounded-3xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Involved</h2>
            <p className="text-lg text-gray-700 mb-8">
              Interested in participating in our programs? Whether you're a student, farmer, 
              researcher, or partner organization, there are multiple ways to get involved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn-primary">
                Contact Program Team
              </a>
              <a href="/resources" className="btn-secondary">
                Download Program Brochure
              </a>
              <a href="/events" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-6 rounded-lg transition duration-300">
                View Program Calendar
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProgramsPage;