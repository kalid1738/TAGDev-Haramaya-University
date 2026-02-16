export interface TeamMember {
  id: number;
  name: string;
  title: string;
  role: string;
  qualifications: string;
  bio: string;
  email: string;
  phone?: string;
  department: string;
  category: 'core' | 'research' | 'finance' | 'community';
  image: string;
  order: number;
  expertise?: string[];
  publications?: number;
  joinedYear?: number;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Dr. Getachew Shambel Endris',
    title: 'Program Coordinator',
    role: 'TAGDev 2.0-ASEC',
    qualifications: 'PhD, Associate Professor',
    bio: 'Getachew S Endris is an Associate Professor in Agricultural Innovation and Livelihood Studies at the School of Rural Development & Agricultural Innovation, Haramaya University. He leads the overall implementation of TAGDev 2.0 at Haramaya University, providing strategic direction and coordinating with partners. His research focuses on agricultural innovation systems, livelihood analysis, and rural development.',
    email: 'getachew.endris@haramaya.edu.et',
    department: 'School of Rural Development & Agricultural Innovation',
    category: 'core',
    image: '/images/team-member1.jpg',
    order: 1,
    expertise: ['Agricultural Innovation', 'Livelihood Studies', 'Rural Development'],
    publications: 25,
    joinedYear: 2023
  },
  {
    id: 2,
    name: 'Dr. Muluken Gezahegn Wordofa',
    title: 'Associate Program Coordinator',
    role: 'Research & Development Lead',
    qualifications: 'PhD, Associate Professor',
    bio: 'Dr. Muluken Gezahegn Wordofa is an Associate Professor of Rural Development and Innovation Studies at the School of Rural Development & Agricultural Innovation, Haramaya University (HU). He coordinates research activities and innovation development for the ASEC project. His research interests include rural livelihoods, technology adoption, and impact evaluation.',
    email: 'muluken.wordofa@haramaya.edu.et',
    department: 'School of Rural Development & Agricultural Innovation',
    category: 'core',
    image: '/images/team-member2.jpg',
    order: 2,
    expertise: ['Rural Development', 'Innovation Studies', 'Impact Evaluation'],
    publications: 20,
    joinedYear: 2023
  },
  {
    id: 3,
    name: 'Dr. Jemal Yousuf Hassen',
    title: 'Institutional Advisor',
    role: 'Project Strategy & Planning',
    qualifications: 'PhD, Associate Professor',
    bio: 'Dr. Jemal Yousuf Hassen is an Associate Professor of Agricultural Extension at the School of Rural Development & Agricultural Innovation, Haramaya University (HU). He provides strategic guidance and ensures institutional alignment for TAGDev 2.0. His expertise spans agricultural extension, adult education, and technology transfer.',
    email: 'jemal.hassen@haramaya.edu.et',
    department: 'School of Rural Development & Agricultural Innovation',
    category: 'core',
    image: '/images/team-member3.jpg',
    order: 3,
    expertise: ['Agricultural Extension', 'Adult Education', 'Technology Transfer'],
    publications: 18,
    joinedYear: 2023
  },
  {
    id: 4,
    name: 'Prof. Jeylan Wolyie Hussein',
    title: 'Project Co-PI & GTA Coordinator',
    role: 'Graduate Training & Research',
    qualifications: 'PhD, Professor',
    bio: 'Prof. Jeylan Wolyie Hussein is a professor of Cultural and Social Analysis with research experiences and focuses on change-oriented education, perspective transformation, conflict analysis and environmental peacebuilding at the College of Social Sciences and Humanities, Haramaya University (HU). He coordinates the Graduate Training Assistantship program.',
    email: 'jeylan.hussein@haramaya.edu.et',
    department: 'College of Social Sciences and Humanities',
    category: 'core',
    image: '/images/team-member4.jpg',
    order: 4,
    expertise: ['Cultural Analysis', 'Conflict Resolution', 'Environmental Peacebuilding'],
    publications: 35,
    joinedYear: 2023
  },


  {
    id: 5,
    name: 'Dr. Abebech Demissie',
    title: 'Senior Research Fellow',
    role: 'Climate-Smart Agriculture',
    qualifications: 'PhD, Agricultural Science',
    bio: 'Dr. Abebech Demissie specializes in climate-smart agricultural technologies and has over 12 years of experience in research and development. She leads the development and validation of TIMPs for smallholder farmers, with a focus on drought-tolerant crops and water conservation techniques.',
    email: 'abebech.demissie@haramaya.edu.et',
    department: 'Research & Innovation',
    category: 'research',
    image: '/images/team-placeholder.jpg',
    order: 5,
    expertise: ['Climate-Smart Agriculture', 'Crop Science', 'Water Management'],
    publications: 15,
    joinedYear: 2023
  },
  {
    id: 6,
    name: 'Dr. Tadesse Alemu',
    title: 'Research Associate',
    role: 'Agri-Food Systems',
    qualifications: 'PhD, Food Science',
    bio: 'Dr. Tadesse Alemu focuses on post-harvest management and value chain development. His research aims to reduce food loss and improve market access for smallholder farmers. He leads initiatives on grain storage, processing technologies, and quality assurance.',
    email: 'tadesse.alemu@haramaya.edu.et',
    department: 'Research & Innovation',
    category: 'research',
    image: '/images/team-placeholder.jpg',
    order: 6,
    expertise: ['Post-Harvest Management', 'Value Chains', 'Food Quality'],
    publications: 12,
    joinedYear: 2023
  },
  {
    id: 7,
    name: 'Dr. Yeshiwork Yitbarek',
    title: 'Research Fellow',
    role: 'Livestock Innovation',
    qualifications: 'PhD, Animal Science',
    bio: 'Dr. Yeshiwork Yitbarek leads research on climate-resilient livestock production systems and works with pastoral communities to improve animal husbandry practices. Her work includes feed improvement, animal health, and market integration for livestock keepers.',
    email: 'yeshiwork.yitbarek@haramaya.edu.et',
    department: 'Research & Innovation',
    category: 'research',
    image: '/images/team-placeholder.jpg',
    order: 7,
    expertise: ['Livestock Systems', 'Pastoral Development', 'Animal Nutrition'],
    publications: 10,
    joinedYear: 2024
  },
  {
    id: 8,
    name: 'Dr. Berhanu Megerssa',
    title: 'Research Associate',
    role: 'Soil & Water Conservation',
    qualifications: 'PhD, Environmental Science',
    bio: 'Dr. Berhanu Megerssa conducts research on sustainable land management, soil fertility, and water conservation technologies for climate-adaptive agriculture. He works with farming communities to test and adapt soil improvement practices.',
    email: 'berhanu.megerssa@haramaya.edu.et',
    department: 'Research & Innovation',
    category: 'research',
    image: '/images/team-placeholder.jpg',
    order: 8,
    expertise: ['Soil Science', 'Water Conservation', 'Land Management'],
    publications: 14,
    joinedYear: 2023
  },

  {
    id: 9,
    name: 'Ato Tesfaye Hailu',
    title: 'Finance Manager',
    role: 'Financial Operations',
    qualifications: 'MBA, CPA',
    bio: 'Ato Tesfaye Hailu manages the financial operations of TAGDev 2.0 at Haramaya University, ensuring compliance with donor requirements and university financial regulations. He has over 15 years of experience in project financial management.',
    email: 'tesfaye.hailu@haramaya.edu.et',
    department: 'Finance & Administration',
    category: 'finance',
    image: '/images/team-placeholder.jpg',
    order: 9,
    expertise: ['Financial Management', 'Donor Reporting', 'Audit Compliance'],
    joinedYear: 2023
  },
  {
    id: 10,
    name: 'W/ro Almaz Bekele',
    title: 'Grants Accountant',
    role: 'Donor Reporting',
    qualifications: 'MSc, Accounting',
    bio: 'W/ro Almaz Bekele handles grant accounting, financial reporting, and budget monitoring for the ASEC project. She ensures accurate tracking of expenditures and timely submission of financial reports to partners.',
    email: 'almaz.bekele@haramaya.edu.et',
    department: 'Finance & Administration',
    category: 'finance',
    image: '/images/team-placeholder.jpg',
    order: 10,
    expertise: ['Grant Accounting', 'Budget Monitoring', 'Financial Reporting'],
    joinedYear: 2023
  },
  {
    id: 11,
    name: 'Ato Dereje Wolde',
    title: 'Procurement Officer',
    role: 'Supply Chain',
    qualifications: 'BA, Procurement',
    bio: 'Ato Dereje Wolde manages procurement of equipment, supplies, and services required for project implementation. He ensures transparent and efficient procurement processes in compliance with university and donor policies.',
    email: 'dereje.wolde@haramaya.edu.et',
    department: 'Finance & Administration',
    category: 'finance',
    image: '/images/team-placeholder.jpg',
    order: 11,
    expertise: ['Procurement', 'Supply Chain', 'Contract Management'],
    joinedYear: 2023
  },

  {
    id: 12,
    name: 'W/ro Etenesh Mamo',
    title: 'Community Engagement Officer',
    role: 'Farmer Outreach',
    qualifications: 'MSc, Extension Education',
    bio: 'W/ro Etenesh Mamo coordinates community engagement activities, farmer training programs, and facilitates knowledge exchange between researchers and farming communities. She has extensive experience in participatory extension approaches.',
    email: 'etenesh.mamo@haramaya.edu.et',
    department: 'Community Engagement',
    category: 'community',
    image: '/images/team-placeholder.jpg',
    order: 12,
    expertise: ['Extension Education', 'Farmer Training', 'Participatory Methods'],
    joinedYear: 2023
  },
  {
    id: 13,
    name: 'Ato Solomon Girma',
    title: 'Youth Engagement Specialist',
    role: 'Youth Programs',
    qualifications: 'MA, Development Studies',
    bio: 'Ato Solomon Girma leads youth engagement initiatives, including mentorship programs, entrepreneurship training, and the establishment of youth advisory councils. He is passionate about creating opportunities for young people in agriculture.',
    email: 'solomon.girma@haramaya.edu.et',
    department: 'Community Engagement',
    category: 'community',
    image: '/images/team-placeholder.jpg',
    order: 13,
    expertise: ['Youth Development', 'Mentorship', 'Entrepreneurship'],
    joinedYear: 2023
  },
  {
    id: 14,
    name: 'W/ro Hiwot Assefa',
    title: 'Gender & Inclusion Advisor',
    role: 'Women Empowerment',
    qualifications: 'MA, Gender Studies',
    bio: 'W/ro Hiwot Assefa ensures gender-responsive implementation of project activities and leads initiatives focused on empowering women in agriculture. She works to address barriers that limit women\'s participation and benefit from agricultural programs.',
    email: 'hiwot.assefa@haramaya.edu.et',
    department: 'Community Engagement',
    category: 'community',
    image: '/images/team-placeholder.jpg',
    order: 14,
    expertise: ['Gender Equality', 'Women Empowerment', 'Social Inclusion'],
    joinedYear: 2024
  },
  {
    id: 15,
    name: 'Ato Birhanu Tadese',
    title: 'Extension Specialist',
    role: 'Field Implementation',
    qualifications: 'MSc, Agricultural Extension',
    bio: 'Ato Birhanu Tadese implements field-based agricultural extension services and manages demonstration farms for climate-smart technologies. He works directly with farmer groups to facilitate learning and technology adoption.',
    email: 'birhanu.tadese@haramaya.edu.et',
    department: 'Community Engagement',
    category: 'community',
    image: '/images/team-placeholder.jpg',
    order: 15,
    expertise: ['Field Extension', 'Demonstration Farms', 'Farmer Groups'],
    joinedYear: 2023
  }
];

export const teamCategories = [
  {
    id: 'core',
    name: 'Project Core Team',
    description: 'Leadership team overseeing TAGDev 2.0 implementation at Haramaya University',
    icon: 'Award',
    color: 'blue',
    memberCount: teamMembers.filter(m => m.category === 'core').length
  },
  {
    id: 'research',
    name: 'Research Team',
    description: 'Researchers and academics driving innovation and knowledge creation',
    icon: 'GraduationCap',
    color: 'green',
    memberCount: teamMembers.filter(m => m.category === 'research').length
  },
  {
    id: 'finance',
    name: 'Finance Team',
    description: 'Financial management and grant administration professionals',
    icon: 'Calculator',
    color: 'purple',
    memberCount: teamMembers.filter(m => m.category === 'finance').length
  },
  {
    id: 'community',
    name: 'Community Engagement Team',
    description: 'Team working directly with farmers, youth, and local communities',
    icon: 'Heart',
    color: 'orange',
    memberCount: teamMembers.filter(m => m.category === 'community').length
  }
];

export const getTeamMemberById = (id: number): TeamMember | undefined => {
  return teamMembers.find(member => member.id === id);
};

export const getTeamMembersByCategory = (category: string): TeamMember[] => {
  return teamMembers.filter(member => member.category === category);
};