import React from 'react';
import { Calendar, Target, Users, Globe, Building2, Award } from 'lucide-react';

const AboutContent: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
       
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <Globe className="text-blue-600" size={40} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">TAGDev 2.0 Profile</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A 10-year collaborative initiative transforming agricultural education and agrifood systems in Africa
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <div className="flex items-center mb-6">
                  <Calendar className="text-blue-600 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-900">Initiative Timeline</h3>
                </div>
                <div className="text-center bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">2023 - 2033</div>
                  <p className="text-gray-600">10-Year Strategic Initiative</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <Users className="text-green-600 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-900">Partnership Network</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <Building2 className="text-blue-600 mr-3" size={20} />
                    <span className="font-medium">RUFORUM</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <Award className="text-yellow-600 mr-3" size={20} />
                    <span className="font-medium">Mastercard Foundation</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <Globe className="text-green-600 mr-3" size={20} />
                    <span className="font-medium">GCHERA</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <Building2 className="text-purple-600 mr-3" size={20} />
                    <span className="font-medium">12 African Universities</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                TAGDev 2.0 is a 10-year collaborative initiative (2023-2033) between RUFORUM, 
                the Mastercard Foundation, 12 African universities, and the Global Confederation 
                of Higher Education Associations for Agricultural and Life Sciences (GCHERA).
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The main goal of the initiative is to strengthen universities and TVET institutions' 
                overall capacity to effectively serve communities by skilling and empowering Africa's 
                young people and their institutions to drive inclusive, equitable and climate resilient 
                transformative agriculture and agrifood systems.
              </p>
              
              <div className="bg-blue-50 rounded-xl p-6 mt-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Strategic Outcomes:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Target className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Expanded equal work opportunities for young women and men in the agricultural sector</span>
                  </li>
                  <li className="flex items-start">
                    <Target className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Improved climate adaptive agricultural production and productivity</span>
                  </li>
                  <li className="flex items-start">
                    <Target className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>Strengthened quality of higher agricultural education outcomes in training, research and innovation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              TAGDev 2.0 at Haramaya University
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Implementing the Agrifood Systems and Entrepreneurship Consortium (ASEC) Project
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">ASEC Project Overview</h3>
              <p className="text-gray-700 mb-4">
                Haramaya University implements the program through the TAGDev 2.0 Agrifood Systems 
                and Entrepreneurship Consortium (ASEC) Project, which partners with universities and 
                Technical and Vocational Education and Training (TVET) institutions to equip the youth 
                with important skills, enhance their problem-solving capacities, build their confidence, 
                and increase their economic productivity.
              </p>
              <p className="text-gray-700">
                In addition, the university implements the project to strengthen smallholder farmers' 
                resilience and adaptive capacities to climate change and other risk factors.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Project Objectives</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-blue-800 font-bold">1</span>
                  </div>
                  <span className="text-gray-700">
                    Strengthen the capacity of higher education institutions (HEIs) to conduct 
                    high-impact research to support agri-food system transformation and innovation
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-green-800 font-bold">2</span>
                  </div>
                  <span className="text-gray-700">
                    Enable women and youth to create viable agricultural enterprises in the 
                    intervention areas
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-purple-800 font-bold">3</span>
                  </div>
                  <span className="text-gray-700">
                    Scale up adoption of climate-adaptive TIMPs by smallholder farmers
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Project Impact Areas:</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-800 mb-1">✓</div>
                <div className="font-medium">Youth Employment</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-800 mb-1">✓</div>
                <div className="font-medium">Climate-Smart Agriculture</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-800 mb-1">✓</div>
                <div className="font-medium">Food Security</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;