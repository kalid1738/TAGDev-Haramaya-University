import React from 'react';
import { Mail, GraduationCap, Award, Users, Briefcase, Calculator, Heart } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  title: string;
  role: string;
  bio: string;
  qualifications: string;
  email?: string;
  phone?: string;
  image?: string;
  category: string;
}

interface TeamCategory {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  members: TeamMember[];
}


const teamData: TeamCategory[] = [
  {
    id: 1,
    name: 'Project Core Team',
    description: 'Leadership team overseeing TAGDev 2.0 implementation at Haramaya University',
    icon: <Award className="text-blue-600" size={24} />,
    members: [
      {
        id: 1,
        name: 'Dr. Getachew Shambel Endris',
        title: 'Program Coordinator',
        role: 'TAGDev 2.0-ASEC',
        qualifications: 'PhD, Associate Professor',
        bio: 'Getachew S Endris is an Associate Professor in Agricultural Innovation and Livelihood Studies at the School of Rural Development & Agricultural Innovation, Haramaya University. He leads the overall implementation of TAGDev 2.0 at Haramaya University.',
        email: 'getachew.endris@haramaya.edu.et',
        category: 'core',
        image: '/images/team-member1.jpg'
      },
      {
        id: 2,
        name: 'Dr. Muluken Gezahegn Wordofa',
        title: 'Associate Program Coordinator',
        role: 'Research & Development Lead',
        qualifications: 'PhD, Associate Professor',
        bio: 'Dr. Muluken Gezahegn Wordofa is an Associate Professor of Rural Development and Innovation Studies at the School of Rural Development & Agricultural Innovation, Haramaya University (HU). He coordinates research activities and innovation development.',
        email: 'muluken.wordofa@haramaya.edu.et',
        category: 'core',
        image: '/images/team-member2.jpg'
      },
      {
        id: 3,
        name: 'Dr. Jemal Yousuf Hassen',
        title: 'Institutional Advisor',
        role: 'Project Strategy & Planning',
        qualifications: 'PhD, Associate Professor',
        bio: 'Dr. Jemal Yousuf Hassen is an Associate Professor of Agricultural Extension at the School of Rural Development & Agricultural Innovation, Haramaya University (HU). He provides strategic guidance and ensures institutional alignment.',
        email: 'jemal.hassen@haramaya.edu.et',
        category: 'core',
        image: '/images/team-member3.jpg'
      },
      {
        id: 4,
        name: 'Prof. Jeylan Wolyie Hussein',
        title: 'Project Co-PI & GTA Coordinator',
        role: 'Graduate Training & Research',
        qualifications: 'PhD, Professor',
        bio: 'Prof. Jeylan Wolyie Hussein is a professor of Cultural and Social Analysis with research experiences and focuses on change-oriented education, perspective transformation, conflict analysis and environmental peacebuilding at the College of Social Sciences and Humanities, Haramaya University (HU).',
        email: 'jeylan.hussein@haramaya.edu.et',
        category: 'core',
        image: '/images/team-member4.jpg'
      }
    ]
  },
  {
    id: 2,
    name: 'Research Team',
    description: 'Researchers and academics driving innovation and knowledge creation',
    icon: <GraduationCap className="text-green-600" size={24} />,
    members: [
      {
        id: 5,
        name: 'Dr. Abebech Demissie',
        title: 'Senior Research Fellow',
        role: 'Climate-Smart Agriculture',
        qualifications: 'PhD, Agricultural Science',
        bio: 'Dr. Abebech Demissie specializes in climate-smart agricultural technologies and has over 12 years of experience in research and development. She leads the development of TIMPs for smallholder farmers.',
        email: 'abebech.demissie@haramaya.edu.et',
        category: 'research',
        image: '/images/team-placeholder.jpg'
      },
      {
        id: 6,
        name: 'Dr. Tadesse Alemu',
        title: 'Research Associate',
        role: 'Agri-Food Systems',
        qualifications: 'PhD, Food Science',
        bio: 'Dr. Tadesse Alemu focuses on post-harvest management and value chain development. His research aims to reduce food loss and improve market access for smallholder farmers.',
        email: 'tadesse.alemu@haramaya.edu.et',
        category: 'research',
        image: '/images/team-placeholder.jpg'
      },
      {
        id: 7,
        name: 'Dr. Yeshiwork Yitbarek',
        title: 'Research Fellow',
        role: 'Livestock Innovation',
        qualifications: 'PhD, Animal Science',
        bio: 'Dr. Yeshiwork Yitbarek leads research on climate-resilient livestock production systems and works with pastoral communities to improve animal husbandry practices.',
        email: 'yeshiwork.yitbarek@haramaya.edu.et',
        category: 'research',
        image: '/images/team-placeholder.jpg'
      },
      {
        id: 8,
        name: 'Dr. Berhanu Megerssa',
        title: 'Research Associate',
        role: 'Soil & Water Conservation',
        qualifications: 'PhD, Environmental Science',
        bio: 'Dr. Berhanu Megerssa conducts research on sustainable land management, soil fertility, and water conservation technologies for climate-adaptive agriculture.',
        email: 'berhanu.megerssa@haramaya.edu.et',
        category: 'research',
        image: '/images/team-placeholder.jpg'
      }
    ]
  },
  {
    id: 3,
    name: 'Finance Team',
    description: 'Financial management and grant administration professionals',
    icon: <Calculator className="text-purple-600" size={24} />,
    members: [
      {
        id: 9,
        name: 'Ato Tesfaye Hailu',
        title: 'Finance Manager',
        role: 'Financial Operations',
        qualifications: 'MBA, CPA',
        bio: 'Ato Tesfaye Hailu manages the financial operations of TAGDev 2.0 at Haramaya University, ensuring compliance with donor requirements and university financial regulations.',
        email: 'tesfaye.hailu@haramaya.edu.et',
        category: 'finance',
        image: '/images/team-placeholder.jpg'
      },
      {
        id: 10,
        name: 'W/ro Almaz Bekele',
        title: 'Grants Accountant',
        role: 'Donor Reporting',
        qualifications: 'MSc, Accounting',
        bio: 'W/ro Almaz Bekele handles grant accounting, financial reporting, and budget monitoring for the ASEC project.',
        email: 'almaz.bekele@haramaya.edu.et',
        category: 'finance',
        image: '/images/team-placeholder.jpg'
      },
      {
        id: 11,
        name: 'Ato Dereje Wolde',
        title: 'Procurement Officer',
        role: 'Supply Chain',
        qualifications: 'BA, Procurement',
        bio: 'Ato Dereje Wolde manages procurement of equipment, supplies, and services required for project implementation.',
        email: 'dereje.wolde@haramaya.edu.et',
        category: 'finance',
        image: '/images/team-placeholder.jpg'
      }
    ]
  },
  {
    id: 4,
    name: 'Community Engagement Team',
    description: 'Team working directly with farmers, youth, and local communities',
    icon: <Heart className="text-orange-600" size={24} />,
    members: [
      {
        id: 12,
        name: 'W/ro Etenesh Mamo',
        title: 'Community Engagement Officer',
        role: 'Farmer Outreach',
        qualifications: 'MSc, Extension Education',
        bio: 'W/ro Etenesh Mamo coordinates community engagement activities, farmer training programs, and facilitates knowledge exchange between researchers and farming communities.',
        email: 'etenesh.mamo@haramaya.edu.et',
        category: 'community',
        image: '/images/team-placeholder.jpg'
      },
      {
        id: 13,
        name: 'Ato Solomon Girma',
        title: 'Youth Engagement Specialist',
        role: 'Youth Programs',
        qualifications: 'MA, Development Studies',
        bio: 'Ato Solomon Girma leads youth engagement initiatives, including mentorship programs, entrepreneurship training, and the establishment of youth advisory councils.',
        email: 'solomon.girma@haramaya.edu.et',
        category: 'community',
        image: '/images/team-placeholder.jpg'
      },
      {
        id: 14,
        name: 'W/ro Hiwot Assefa',
        title: 'Gender & Inclusion Advisor',
        role: 'Women Empowerment',
        qualifications: 'MA, Gender Studies',
        bio: 'W/ro Hiwot Assefa ensures gender-responsive implementation of project activities and leads initiatives focused on empowering women in agriculture.',
        email: 'hiwot.assefa@haramaya.edu.et',
        category: 'community',
        image: '/images/team-placeholder.jpg'
      },
      {
        id: 15,
        name: 'Ato Birhanu Tadese',
        title: 'Extension Specialist',
        role: 'Field Implementation',
        qualifications: 'MSc, Agricultural Extension',
        bio: 'Ato Birhanu Tadese implements field-based agricultural extension services and manages demonstration farms for climate-smart technologies.',
        email: 'birhanu.tadese@haramaya.edu.et',
        category: 'community',
        image: '/images/team-placeholder.jpg'
      }
    ]
  }
];

const TeamSection: React.FC = () => {
  
  const teamImages: Record<number, string> = {
    1: '/images/team-member1.jpg',
    2: '/images/team-member2.jpg', 
    3: '/images/team-member3.jpg',
    4: '/images/team-member4.jpg',
    5: '/images/team-placeholder.jpg',
    6: '/images/team-placeholder.jpg',
    7: '/images/team-placeholder.jpg',
    8: '/images/team-placeholder.jpg',
    9: '/images/team-placeholder.jpg',
    10: '/images/team-placeholder.jpg',
    11: '/images/team-placeholder.jpg',
    12: '/images/team-placeholder.jpg',
    13: '/images/team-placeholder.jpg',
    14: '/images/team-placeholder.jpg',
    15: '/images/team-placeholder.jpg'
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
            <Users className="text-blue-600" size={40} />
          </div>
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle mx-auto text-center">
            Dedicated professionals driving agricultural transformation and youth empowerment
          </p>
        </div>

        {teamData.map((category) => (
          <div key={category.id} className="mb-20 last:mb-0">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                {category.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {category.members.map((member) => (
                <div 
                  key={member.id} 
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  
                  <div className="h-48 bg-gray-100 relative overflow-hidden">
                    <img 
                      src={teamImages[member.id] || '/images/team-placeholder.jpg'}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.className = 'h-48 bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center relative';
                        target.parentElement!.innerHTML = `
                          <div class="w-32 h-32 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                            <span class="text-white text-3xl font-bold">
                              ${member.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div class="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                            <svg class="text-blue-600" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                            </svg>
                          </div>
                        `;
                      }}
                    />
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
                      <p className="text-blue-600 font-semibold mb-1">{member.title}</p>
                      <p className="text-gray-600 text-sm mb-2">{member.role}</p>
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Award size={16} className="mr-2 flex-shrink-0" />
                        <span className="line-clamp-1">{member.qualifications}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{member.bio}</p>

                    {member.email && (
                      <div className="pt-4 border-t border-gray-100">
                        <a 
                          href={`mailto:${member.email}`}
                          className="flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <Mail size={16} className="mr-2 flex-shrink-0" />
                          <span className="truncate">{member.email}</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-800 mb-2">15+</div>
              <div className="text-gray-700">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-700 mb-2">8</div>
              <div className="text-gray-700">PhD Holders</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
              <div className="text-gray-700">Research Areas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">25+</div>
              <div className="text-gray-700">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;