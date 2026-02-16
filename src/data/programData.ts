export interface ProgramObjective {
  id: number;
  description: string;
}

export interface ProgramOutcome {
  id: number;
  description: string;
}

export interface ProgramActivity {
  id: number;
  title: string;
  description: string;
}

export interface ProgramArea {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  color: string;
  objectives: ProgramObjective[];
  outcomes: ProgramOutcome[];
  activities: ProgramActivity[];
  expectedImpact: string;
  targetAudience: string[];
  relatedPrograms: string[];
  featuredImage: string;
}

export const programAreas: ProgramArea[] = [
  {
    id: 'climate-smart-timps',
    title: 'Climate Smart TIMPs',
    slug: 'climate-smart-timps',
    shortDescription: 'Technologies, Innovations and Management Practices for climate resilience',
    fullDescription: 'This program area focuses on developing, validating, and scaling up climate-smart Technologies, Innovations, and Management Practices (TIMPs) that enhance agricultural productivity while building resilience to climate change. We work with researchers, extension agents, and farmers to co-create context-specific solutions.',
    icon: 'CloudRain',
    color: 'blue',
    objectives: [
      { id: 1, description: 'Develop 26 climate-adaptive agricultural technologies by 2033' },
      { id: 2, description: 'Promote sustainable water management practices in drought-prone areas' },
      { id: 3, description: 'Enhance soil conservation and fertility management through integrated approaches' },
      { id: 4, description: 'Scale up adoption of climate-resilient crop varieties' },
      { id: 5, description: 'Establish demonstration sites for climate-smart practices' }
    ],
    outcomes: [
      { id: 1, description: 'Increased adoption of climate-smart practices by 72,000 smallholder farmers' },
      { id: 2, description: 'Improved crop yields and household food security' },
      { id: 3, description: 'Reduced vulnerability to climate-related shocks' },
      { id: 4, description: 'Enhanced knowledge of climate adaptation strategies' }
    ],
    activities: [
      { id: 1, title: 'Participatory Research', description: 'Collaborative technology development with farmers' },
      { id: 2, title: 'Demonstration Plots', description: 'Establishment of learning sites across intervention areas' },
      { id: 3, title: 'Farmer Field Schools', description: 'Season-long training on climate-smart practices' },
      { id: 4, title: 'Technology Validation', description: 'Multi-location testing of promising innovations' },
      { id: 5, title: 'Knowledge Documentation', description: 'Development of extension materials and manuals' }
    ],
    expectedImpact: '72,000 smallholder farmers adopting at least two climate-smart technologies',
    targetAudience: ['Smallholder farmers', 'Extension agents', 'Researchers', 'Students'],
    relatedPrograms: ['dls-farm-advisory', 'tree-planting-campaigns'],
    featuredImage: '/images/programs/climate-smart.jpg'
  },
  {
    id: 'youth-advisory',
    title: 'Youth Advisory & Engagement',
    slug: 'youth-advisory',
    shortDescription: 'Engaging students and local youth in agricultural innovation',
    fullDescription: 'The Youth Advisory program creates platforms for young people to actively participate in agricultural transformation. We establish youth advisory councils, provide mentorship, and create spaces for young innovators to develop and test their ideas.',
    icon: 'Users',
    color: 'green',
    objectives: [
      { id: 1, description: 'Establish youth advisory councils in all intervention districts' },
      { id: 2, description: 'Provide mentorship and leadership training to 5,000 young people' },
      { id: 3, description: 'Create youth-led innovation hubs at universities and TVETs' },
      { id: 4, description: 'Facilitate youth exchange programs and networking' },
      { id: 5, description: 'Develop youth-responsive agricultural extension approaches' }
    ],
    outcomes: [
      { id: 1, description: '3,260 youth supported with employment opportunities' },
      { id: 2, description: 'Increased youth participation in agricultural value chains' },
      { id: 3, description: 'Enhanced leadership and entrepreneurial skills' },
      { id: 4, description: 'Improved perception of agriculture as a career option' }
    ],
    activities: [
      { id: 1, title: 'Youth Advisory Councils', description: 'Structured platforms for youth voice and participation' },
      { id: 2, title: 'Mentorship Program', description: 'One-on-one guidance from experienced professionals' },
      { id: 3, title: 'Innovation Challenges', description: 'Competitions to identify and support young innovators' },
      { id: 4, title: 'Career Guidance', description: 'Exposure to diverse career paths in agriculture' },
      { id: 5, title: 'Youth Leadership Camps', description: 'Intensive training on leadership and advocacy' }
    ],
    expectedImpact: '3,260 youth in dignified and fulfilling work in agriculture',
    targetAudience: ['University students', 'TVET trainees', 'Out-of-school youth', 'Young farmers'],
    relatedPrograms: ['startups-msips', 'ari-hub'],
    featuredImage: '/images/programs/youth.jpg'
  },
  {
    id: 'dls-farm-advisory',
    title: 'Digital & Farm Advisory Services',
    slug: 'dls-farm-advisory',
    shortDescription: 'Digital and in-person advisory services for farmers',
    fullDescription: 'This program area strengthens agricultural extension systems through blended approaches combining digital tools and face-to-face advisory services. We develop digital platforms, train extension agents, and establish demonstration farms to facilitate learning and technology adoption.',
    icon: 'Sprout',
    color: 'emerald',
    objectives: [
      { id: 1, description: 'Develop and deploy digital extension platforms for real-time advisory' },
      { id: 2, description: 'Train 500 extension service providers in climate-smart agriculture' },
      { id: 3, description: 'Establish 50 demonstration farms as learning centers' },
      { id: 4, description: 'Create farmer-to-farmer knowledge sharing networks' },
      { id: 5, description: 'Integrate weather and market information into advisory services' }
    ],
    outcomes: [
      { id: 1, description: '72,000 smallholder farmers reached with adaptive innovations' },
      { id: 2, description: 'Improved access to timely agricultural information' },
      { id: 3, description: 'Strengthened capacity of public and private extension systems' },
      { id: 4, description: 'Increased adoption of digital tools in agriculture' }
    ],
    activities: [
      { id: 1, title: 'Digital Platform Development', description: 'Mobile and web-based advisory tools' },
      { id: 2, title: 'Extension Agent Training', description: 'Capacity building on climate-smart agriculture' },
      { id: 3, title: 'Demonstration Farms', description: 'Model farms showcasing best practices' },
      { id: 4, title: 'Farmer Learning Groups', description: 'Peer-to-peer knowledge exchange' },
      { id: 5, title: 'Advisory Content Creation', description: 'Development of localized extension messages' }
    ],
    expectedImpact: '72,000 farmers with access to climate-informed advisory services',
    targetAudience: ['Smallholder farmers', 'Extension agents', 'Development practitioners', 'Agri-tech entrepreneurs'],
    relatedPrograms: ['climate-smart-timps', 'tree-planting-campaigns'],
    featuredImage: '/images/programs/dls.jpg'
  },
  {
    id: 'tree-planting-campaigns',
    title: 'Afforestation & Agroforestry',
    slug: 'tree-planting-campaigns',
    shortDescription: 'Large-scale tree planting and sustainable land management',
    fullDescription: 'This initiative mobilizes communities for large-scale tree planting and promotes agroforestry systems that integrate trees with crops and livestock. We establish community nurseries, train farmers on tree management, and restore degraded landscapes.',
    icon: 'TreeDeciduous',
    color: 'teal',
    objectives: [
      { id: 1, description: 'Establish 20 community tree nurseries for seedling production' },
      { id: 2, description: 'Promote agroforestry systems on 1,000 hectares of farmland' },
      { id: 3, description: 'Restore degraded watersheds through participatory approaches' },
      { id: 4, description: 'Build farmer capacity on tree management and utilization' },
      { id: 5, description: 'Create green jobs for youth in nursery management and tree planting' }
    ],
    outcomes: [
      { id: 1, description: '100,000 trees planted for climate resilience and carbon sequestration' },
      { id: 2, description: 'Improved soil health and water retention on farmland' },
      { id: 3, description: 'Enhanced biodiversity and ecosystem services' },
      { id: 4, description: 'Additional income streams from tree products' }
    ],
    activities: [
      { id: 1, title: 'Community Nurseries', description: 'Youth-managed tree seedling production' },
      { id: 2, title: 'Mass Tree Planting', description: 'Seasonal campaigns engaging schools and communities' },
      { id: 3, title: 'Agroforestry Training', description: 'Farmer education on tree-crop integration' },
      { id: 4, title: 'Watershed Restoration', description: 'Participatory land management planning' },
      { id: 5, title: 'Monitoring & Evaluation', description: 'Tree survival and growth tracking' }
    ],
    expectedImpact: '100,000 trees planted and 1,000 hectares under agroforestry',
    targetAudience: ['Farming communities', 'Youth groups', 'Schools', 'Women cooperatives'],
    relatedPrograms: ['climate-smart-timps', 'dls-farm-advisory'],
    featuredImage: '/images/programs/tree.jpg'
  },
  {
    id: 'startups-msips',
    title: 'Entrepreneurship & Startups',
    slug: 'startups-msips',
    shortDescription: 'Supporting agricultural enterprises and innovations',
    fullDescription: 'This program area nurtures agricultural entrepreneurship by providing business development services, incubation support, and access to finance and markets. We work with aspiring entrepreneurs to transform innovative ideas into viable enterprises.',
    icon: 'Rocket',
    color: 'purple',
    objectives: [
      { id: 1, description: 'Provide business incubation services to 200 agripreneurs' },
      { id: 2, description: 'Facilitate access to markets and finance for startups' },
      { id: 3, description: 'Support technology commercialization and intellectual property protection' },
      { id: 4, description: 'Establish linkages between startups and industry partners' },
      { id: 5, description: 'Create an enabling environment for youth entrepreneurship' }
    ],
    outcomes: [
      { id: 1, description: '75 startups established and operational' },
      { id: 2, description: '420 incubation-based jobs created for youth' },
      { id: 3, description: 'Increased availability of locally-developed agricultural technologies' },
      { id: 4, description: 'Improved access to markets for smallholder farmers' }
    ],
    activities: [
      { id: 1, title: 'Business Incubation', description: 'Structured support for early-stage enterprises' },
      { id: 2, title: 'Entrepreneurship Training', description: 'Skills development in business management' },
      { id: 3, title: 'Access to Finance', description: 'Linkages to microfinance and investment' },
      { id: 4, title: 'Market Linkages', description: 'Connecting startups to buyers and processors' },
      { id: 5, title: 'Pitch Competitions', description: 'Platforms for startups to showcase innovations' }
    ],
    expectedImpact: '75 sustainable agribusinesses and 420 jobs created',
    targetAudience: ['Young entrepreneurs', 'University graduates', 'TVET graduates', 'Women innovators'],
    relatedPrograms: ['youth-advisory', 'ari-hub'],
    featuredImage: '/images/programs/startups.jpg'
  },
  {
    id: 'ari-hub',
    title: 'ARI HUB & Alumni Network',
    slug: 'ari-hub',
    shortDescription: 'Alumni-led Research and Innovation Hub',
    fullDescription: 'The Alumni Research and Innovation Hub (ARI HUB) connects TAGDev program alumni with current students and researchers. It serves as a platform for collaborative research, knowledge exchange, and mentorship, ensuring that the benefits of the program extend beyond graduation.',
    icon: 'Building2',
    color: 'orange',
    objectives: [
      { id: 1, description: 'Establish a physical and virtual hub for alumni engagement' },
      { id: 2, description: 'Foster collaborative research projects between alumni and faculty' },
      { id: 3, description: 'Create mentorship programs linking alumni with current students' },
      { id: 4, description: 'Document and share alumni success stories and lessons learned' },
      { id: 5, description: 'Leverage alumni networks for program sustainability' }
    ],
    outcomes: [
      { id: 1, description: 'Strong and active alumni network supporting program goals' },
      { id: 2, description: 'Increased alumni contribution to research and innovation' },
      { id: 3, description: 'Enhanced career opportunities for current students' },
      { id: 4, description: 'Sustainable community of practice in agricultural innovation' }
    ],
    activities: [
      { id: 1, title: 'Alumni Database', description: 'Comprehensive tracking of graduate outcomes' },
      { id: 2, title: 'Networking Events', description: 'Regular gatherings of alumni and stakeholders' },
      { id: 3, title: 'Collaborative Research', description: 'Joint projects addressing industry challenges' },
      { id: 4, title: 'Mentorship Program', description: 'Structured alumni-student mentoring relationships' },
      { id: 5, title: 'Success Story Documentation', description: 'Capturing and sharing impact narratives' }
    ],
    expectedImpact: 'Sustainable alumni network supporting TAGDev 2.0 goals',
    targetAudience: ['Program alumni', 'Current students', 'Researchers', 'Industry partners'],
    relatedPrograms: ['startups-msips', 'youth-advisory'],
    featuredImage: '/images/programs/ari.jpg'
  }
];

export const jobCreationPathways = [
  {
    id: 'cooperatives',
    title: 'Agricultural Cooperatives',
    description: 'Supporting youth and women-led agricultural cooperatives',
    target: 'Establish 50 new cooperatives',
    icon: 'Users',
    color: 'blue',
    fullDescription: 'We support the formation and strengthening of agricultural cooperatives led by youth and women. These cooperatives enable smallholder farmers to access inputs, services, and markets collectively, improving their bargaining power and profitability.',
    activities: [
      'Cooperative formation and registration support',
      'Governance and leadership training',
      'Business planning and financial management',
      'Market linkage development',
      'Value addition and processing'
    ]
  },
  {
    id: 'tvet',
    title: 'TVET Skills Training',
    description: 'Technical and Vocational Education Training programs',
    target: 'Train 2,000 youth in technical skills',
    icon: 'BookOpen',
    color: 'green',
    fullDescription: 'This pathway strengthens Technical and Vocational Education and Training (TVET) institutions to deliver market-relevant skills in agriculture and agribusiness. Trainees gain practical competencies that prepare them for employment or self-employment.',
    activities: [
      'Curriculum development and review',
      'Trainer capacity building',
      'Equipment and infrastructure support',
      'Industry attachment programs',
      'Certification and career guidance'
    ]
  },
  {
    id: 'enterprises',
    title: 'Agribusiness Enterprises',
    description: 'Support for youth and women-owned agribusinesses',
    target: 'Support 200 new enterprises',
    icon: 'Factory',
    color: 'purple',
    fullDescription: 'We provide comprehensive support to youth and women entrepreneurs to start and grow agribusinesses across agricultural value chains. Support includes business planning, incubation, access to finance, and market linkages.',
    activities: [
      'Business idea validation',
      'Incubation and acceleration',
      'Access to seed capital',
      'Mentorship and coaching',
      'Market access support'
    ]
  },
  {
    id: 'digital-agriculture',
    title: 'Digital Agriculture',
    description: 'Employment in digital agriculture and agri-tech',
    target: 'Create 150 digital agriculture jobs',
    icon: 'Sprout',
    color: 'orange',
    fullDescription: 'This emerging pathway creates employment opportunities at the intersection of agriculture and digital technology. Youth are trained as agri-tech specialists, digital extension agents, and data collectors serving the agricultural sector.',
    activities: [
      'Digital skills training',
      'Agri-tech solution development',
      'Drone pilot training for agriculture',
      'Agricultural data collection and analysis',
      'E-extension service delivery'
    ]
  }
];