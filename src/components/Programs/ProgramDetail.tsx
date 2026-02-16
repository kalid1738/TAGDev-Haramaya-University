import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CloudRain, Users, Sprout, TreeDeciduous, Rocket, Building2,
  Target, CheckCircle, ArrowRight, Calendar, BookOpen, Download
} from 'lucide-react';
import { ProgramArea } from '../../data/programData';

interface ProgramDetailProps {
  program: ProgramArea;
}

const getIcon = (iconName: string, color: string) => {
  const iconProps = { className: `text-${color}-600`, size: 32 };
  
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

const ProgramDetail: React.FC<ProgramDetailProps> = ({ program }) => {
  return (
    <div className="bg-white">
      
      <section className={`relative bg-gradient-to-r from-${program.color}-800 to-green-700 text-white`}>
        <div className="container-custom py-20 md:py-24 lg:py-28">
          <div className="max-w-3xl">
            <div className="flex items-center mb-6">
              <Link to="/programs" className="text-white/80 hover:text-white flex items-center text-sm font-medium">
                ← All Programs
              </Link>
            </div>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              {getIcon(program.icon, 'white')}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {program.title}
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              {program.shortDescription}
            </p>
          </div>
        </div>
      </section>

      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {program.fullDescription}
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Objectives</h2>
                <div className="space-y-4 mb-12">
                  {program.objectives.map((objective) => (
                    <div key={objective.id} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Target className={`text-${program.color}-600`} size={20} />
                      </div>
                      <p className="ml-4 text-gray-700">{objective.description}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Activities & Approaches</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {program.activities.map((activity) => (
                    <div key={activity.id} className="bg-gray-50 rounded-xl p-6">
                      <h3 className="font-bold text-gray-900 mb-2">{activity.title}</h3>
                      <p className="text-gray-600 text-sm">{activity.description}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Expected Outcomes</h2>
                <div className="bg-blue-50 rounded-xl p-8 mb-12">
                  <div className="space-y-4">
                    {program.outcomes.map((outcome) => (
                      <div key={outcome.id} className="flex items-start">
                        <CheckCircle className={`text-${program.color}-600 flex-shrink-0 mt-1`} size={20} />
                        <p className="ml-4 text-gray-700 font-medium">{outcome.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Target Impact</h2>
                <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8">
                  <p className="text-xl font-bold text-gray-900 mb-2">By 2033</p>
                  <p className="text-gray-700 text-lg">{program.expectedImpact}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Target Audience</h3>
                  <div className="space-y-3">
                    {program.targetAudience.map((audience, index) => (
                      <div key={index} className="flex items-center">
                        <div className={`w-2 h-2 bg-${program.color}-600 rounded-full mr-3`}></div>
                        <span className="text-gray-700">{audience}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {program.relatedPrograms.length > 0 && (
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Related Programs</h3>
                    <div className="space-y-3">
                      {program.relatedPrograms.map((slug) => (
                        <Link
                          key={slug}
                          to={`/programs/${slug}`}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
                        >
                          <span className="text-gray-700 group-hover:text-blue-600 font-medium">
                            {slug.split('-').map(word => 
                              word.charAt(0).toUpperCase() + word.slice(1)
                            ).join(' ')}
                          </span>
                          <ArrowRight size={16} className="text-gray-400 group-hover:text-blue-600" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Program Resources</h3>
                  <div className="space-y-3">
                    <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                      <Download size={16} className="mr-2" />
                      Program Fact Sheet
                    </a>
                    <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                      <Download size={16} className="mr-2" />
                      Implementation Guide
                    </a>
                    <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                      <Calendar size={16} className="mr-2" />
                      Activity Calendar
                    </a>
                    <a href="/contact" className="flex items-center text-blue-600 hover:text-blue-800">
                      <Users size={16} className="mr-2" />
                      Contact Program Team
                    </a>
                  </div>
                </div>

                <div className={`bg-gradient-to-r from-${program.color}-50 to-green-50 rounded-2xl p-6`}>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Get Involved</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Interested in participating in this program?
                  </p>
                  <Link
                    to="/contact"
                    className="btn-primary w-full text-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Success Stories</h2>
            <p className="section-subtitle mx-auto text-center">
              Real stories of impact from our {program.title} program
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Users className="text-blue-600" size={48} />
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <p className="text-gray-700 text-lg italic mb-4">
                  "Through the {program.title} program, I was able to access training and mentorship that transformed my farming practices. My yields have increased by 40% and I'm now training other farmers in my community."
                </p>
                <p className="font-bold text-gray-900">- Alemitu Bekele</p>
                <p className="text-sm text-gray-600">Smallholder Farmer, Dire Dawa</p>
                <Link to="/resources" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mt-4">
                  Read More Success Stories <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Make an Impact?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Join us in transforming agriculture and empowering communities through {program.title}.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Contact Program Team
              </Link>
              <Link to="/resources" className="btn-secondary">
                Download Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramDetail;