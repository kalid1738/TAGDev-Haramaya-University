import React from 'react';
import Layout from '../components/Layout/Layout';
import { Users, Award, Mail, Building2, BookOpen, Calculator, Heart, GraduationCap } from 'lucide-react';

const PeoplePage: React.FC = () => {
  const teamMembers = [
    
    {
      id: 1,
      name: 'Dr. Getachew Shambel Endris',
      title: 'Program Coordinator',
      role: 'TAGDev 2.0-ASEC',
      qualifications: 'PhD, Associate Professor',
      bio: 'Getachew S Endris is an Associate Professor in Agricultural Innovation and Livelihood Studies at the School of Rural Development & Agricultural Innovation, Haramaya University.',
      email: 'getachew.endris@haramaya.edu.et',
      department: 'School of Rural Development & Agricultural Innovation',
      category: 'core',
      icon: <Award className="text-blue-600" size={24} />
    },
    {
      id: 2,
      name: 'Dr. Muluken Gezahegn Wordofa',
      title: 'Associate Program Coordinator',
      role: 'Research & Development Lead',
      qualifications: 'PhD, Associate Professor',
      bio: 'Dr. Muluken Gezahegn Wordofa is an Associate Professor of Rural Development and Innovation Studies at the School of Rural Development & Agricultural Innovation, Haramaya University (HU).',
      email: 'muluken.wordofa@haramaya.edu.et',
      department: 'School of Rural Development & Agricultural Innovation',
      category: 'core',
      icon: <Award className="text-blue-600" size={24} />
    },
    {
      id: 3,
      name: 'Dr. Jemal Yousuf Hassen',
      title: 'Institutional Advisor',
      role: 'Project Strategy & Planning',
      qualifications: 'PhD, Associate Professor',
      bio: 'Dr. Jemal Yousuf Hassen is an Associate Professor of Agricultural Extension at the School of Rural Development & Agricultural Innovation, Haramaya University (HU).',
      email: 'jemal.hassen@haramaya.edu.et',
      department: 'School of Rural Development & Agricultural Innovation',
      category: 'core',
      icon: <Award className="text-blue-600" size={24} />
    },
    {
      id: 4,
      name: 'Prof. Jeylan Wolyie Hussein',
      title: 'Project Co-PI & GTA Coordinator',
      role: 'Graduate Training & Research',
      qualifications: 'PhD, Professor',
      bio: 'Prof. Jeylan Wolyie Hussein is a professor of Cultural and Social Analysis with research experiences and focuses on change-oriented education, perspective transformation, conflict analysis and environmental peacebuilding.',
      email: 'jeylan.hussein@haramaya.edu.et',
      department: 'College of Social Sciences and Humanities',
      category: 'core',
      icon: <Award className="text-blue-600" size={24} />
    },
    
    {
      id: 5,
      name: 'Dr. Abebech Demissie',
      title: 'Senior Research Fellow',
      role: 'Climate-Smart Agriculture',
      qualifications: 'PhD, Agricultural Science',
      bio: 'Dr. Abebech Demissie specializes in climate-smart agricultural technologies and has over 12 years of experience in research and development.',
      email: 'abebech.demissie@haramaya.edu.et',
      department: 'Research & Innovation',
      category: 'research',
      icon: <GraduationCap className="text-green-600" size={24} />
    },
    {
      id: 6,
      name: 'Dr. Tadesse Alemu',
      title: 'Research Associate',
      role: 'Agri-Food Systems',
      qualifications: 'PhD, Food Science',
      bio: 'Dr. Tadesse Alemu focuses on post-harvest management and value chain development.',
      email: 'tadesse.alemu@haramaya.edu.et',
      department: 'Research & Innovation',
      category: 'research',
      icon: <GraduationCap className="text-green-600" size={24} />
    },
    {
      id: 7,
      name: 'Dr. Yeshiwork Yitbarek',
      title: 'Research Fellow',
      role: 'Livestock Innovation',
      qualifications: 'PhD, Animal Science',
      bio: 'Dr. Yeshiwork Yitbarek leads research on climate-resilient livestock production systems.',
      email: 'yeshiwork.yitbarek@haramaya.edu.et',
      department: 'Research & Innovation',
      category: 'research',
      icon: <GraduationCap className="text-green-600" size={24} />
    },
    {
      id: 8,
      name: 'Dr. Berhanu Megerssa',
      title: 'Research Associate',
      role: 'Soil & Water Conservation',
      qualifications: 'PhD, Environmental Science',
      bio: 'Dr. Berhanu Megerssa conducts research on sustainable land management and soil fertility.',
      email: 'berhanu.megerssa@haramaya.edu.et',
      department: 'Research & Innovation',
      category: 'research',
      icon: <GraduationCap className="text-green-600" size={24} />
    },
    
    {
      id: 9,
      name: 'Ato Tesfaye Hailu',
      title: 'Finance Manager',
      role: 'Financial Operations',
      qualifications: 'MBA, CPA',
      bio: 'Ato Tesfaye Hailu manages the financial operations of TAGDev 2.0 at Haramaya University.',
      email: 'tesfaye.hailu@haramaya.edu.et',
      department: 'Finance & Administration',
      category: 'finance',
      icon: <Calculator className="text-purple-600" size={24} />
    },
    {
      id: 10,
      name: 'W/ro Almaz Bekele',
      title: 'Grants Accountant',
      role: 'Donor Reporting',
      qualifications: 'MSc, Accounting',
      bio: 'W/ro Almaz Bekele handles grant accounting and financial reporting.',
      email: 'almaz.bekele@haramaya.edu.et',
      department: 'Finance & Administration',
      category: 'finance',
      icon: <Calculator className="text-purple-600" size={24} />
    },
    {
      id: 11,
      name: 'Ato Dereje Wolde',
      title: 'Procurement Officer',
      role: 'Supply Chain',
      qualifications: 'BA, Procurement',
      bio: 'Ato Dereje Wolde manages procurement of equipment and supplies.',
      email: 'dereje.wolde@haramaya.edu.et',
      department: 'Finance & Administration',
      category: 'finance',
      icon: <Calculator className="text-purple-600" size={24} />
    },
    
    {
      id: 12,
      name: 'W/ro Etenesh Mamo',
      title: 'Community Engagement Officer',
      role: 'Farmer Outreach',
      qualifications: 'MSc, Extension Education',
      bio: 'W/ro Etenesh Mamo coordinates community engagement activities and farmer training programs.',
      email: 'etenesh.mamo@haramaya.edu.et',
      department: 'Community Engagement',
      category: 'community',
      icon: <Heart className="text-orange-600" size={24} />
    },
    {
      id: 13,
      name: 'Ato Solomon Girma',
      title: 'Youth Engagement Specialist',
      role: 'Youth Programs',
      qualifications: 'MA, Development Studies',
      bio: 'Ato Solomon Girma leads youth engagement initiatives and mentorship programs.',
      email: 'solomon.girma@haramaya.edu.et',
      department: 'Community Engagement',
      category: 'community',
      icon: <Heart className="text-orange-600" size={24} />
    },
    {
      id: 14,
      name: 'W/ro Hiwot Assefa',
      title: 'Gender & Inclusion Advisor',
      role: 'Women Empowerment',
      qualifications: 'MA, Gender Studies',
      bio: 'W/ro Hiwot Assefa ensures gender-responsive implementation of project activities.',
      email: 'hiwot.assefa@haramaya.edu.et',
      department: 'Community Engagement',
      category: 'community',
      icon: <Heart className="text-orange-600" size={24} />
    },
    {
      id: 15,
      name: 'Ato Birhanu Tadese',
      title: 'Extension Specialist',
      role: 'Field Implementation',
      qualifications: 'MSc, Agricultural Extension',
      bio: 'Ato Birhanu Tadese implements field-based agricultural extension services.',
      email: 'birhanu.tadese@haramaya.edu.et',
      department: 'Community Engagement',
      category: 'community',
      icon: <Heart className="text-orange-600" size={24} />
    }
  ];

  const teamCategories = [
    {
      name: 'Project Core Team',
      description: 'Leadership team overseeing TAGDev 2.0 implementation',
      count: teamMembers.filter(m => m.category === 'core').length,
      icon: <Award className="text-blue-600" size={28} />,
      color: 'blue'
    },
    {
      name: 'Research Team',
      description: 'Researchers driving innovation and knowledge creation',
      count: teamMembers.filter(m => m.category === 'research').length,
      icon: <GraduationCap className="text-green-600" size={28} />,
      color: 'green'
    },
    {
      name: 'Finance Team',
      description: 'Financial management and grant administration',
      count: teamMembers.filter(m => m.category === 'finance').length,
      icon: <Calculator className="text-purple-600" size={28} />,
      color: 'purple'
    },
    {
      name: 'Community Engagement Team',
      description: 'Working directly with farmers and local communities',
      count: teamMembers.filter(m => m.category === 'community').length,
      icon: <Heart className="text-orange-600" size={28} />,
      color: 'orange'
    }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  const filteredMembers = selectedCategory === 'all' 
    ? teamMembers 
    : teamMembers.filter(m => m.category === selectedCategory);

  return (
    <Layout>
      <section className="hero-section">
        <div className="hero-background">
          <img 
            src="/images/people-hero.jpg" 
            alt="TAGDev 2.0 Team" 
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
              Our Team
            </h1>
            <p className="hero-subtitle">
              Meet the dedicated professionals driving TAGDev 2.0 at Haramaya University
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Team Structure</h2>
            <p className="section-subtitle mx-auto text-center">
              Our multidisciplinary team combines expertise across four key areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {teamCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.name === 'Project Core Team' ? 'core' : 
                  category.name === 'Research Team' ? 'research' :
                  category.name === 'Finance Team' ? 'finance' : 'community')}
                className={`bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  (category.name === 'Project Core Team' && selectedCategory === 'core') ||
                  (category.name === 'Research Team' && selectedCategory === 'research') ||
                  (category.name === 'Finance Team' && selectedCategory === 'finance') ||
                  (category.name === 'Community Engagement Team' && selectedCategory === 'community')
                    ? 'ring-2 ring-blue-600 ring-offset-2'
                    : ''
                }`}
              >
                <div className={`w-16 h-16 bg-${category.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {category.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{category.count}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-50'
              }`}
            >
              All Team Members ({teamMembers.length})
            </button>
            <button
              onClick={() => setSelectedCategory('core')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === 'core'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-50'
              }`}
            >
              Core Team ({teamMembers.filter(m => m.category === 'core').length})
            </button>
            <button
              onClick={() => setSelectedCategory('research')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === 'research'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-green-50'
              }`}
            >
              Research ({teamMembers.filter(m => m.category === 'research').length})
            </button>
            <button
              onClick={() => setSelectedCategory('finance')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === 'finance'
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-purple-50'
              }`}
            >
              Finance ({teamMembers.filter(m => m.category === 'finance').length})
            </button>
            <button
              onClick={() => setSelectedCategory('community')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === 'community'
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-orange-50'
              }`}
            >
              Community ({teamMembers.filter(m => m.category === 'community').length})
            </button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                    {member.icon}
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-1">{member.title}</p>
                    <p className="text-gray-600 text-sm mb-2">{member.role}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Award size={16} className="mr-2 flex-shrink-0" />
                      <span className="line-clamp-1">{member.qualifications}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Building2 size={16} className="mr-2 flex-shrink-0" />
                      <span className="line-clamp-1">{member.department}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{member.bio}</p>

                  <div className="pt-4 border-t border-gray-100">
                    <a 
                      href={`mailto:${member.email}`}
                      className="flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Mail size={16} className="mr-2 flex-shrink-0" />
                      <span className="truncate">{member.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-6">
              <Users className="text-blue-600" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Team</h2>
            <p className="text-lg text-gray-700 mb-8">
              We're always looking for passionate individuals to join our mission of transforming 
              agriculture and empowering youth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn-primary">
                Contact Us About Opportunities
              </a>
              <a href="#" className="btn-secondary">
                View Current Openings
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PeoplePage;