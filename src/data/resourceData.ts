export interface Resource {
  id: number;
  title: string;
  slug: string;
  type: string;
  category: 'publication' | 'form' | 'research' | 'multimedia' | 'report' | 'policy';
  date: string;
  description: string;
  fullDescription?: string;
  size: string;
  downloads: number;
  icon: string;
  fileUrl?: string;
  thumbnail?: string;
  author?: string;
  publisher?: string;
  pages?: number;
  language?: string;
  tags?: string[];
}

export const resources: Resource[] = [
  {
    id: 1,
    title: 'TAGDev 2.0 Annual Report 2023',
    slug: 'annual-report-2023',
    type: 'Annual Report',
    category: 'report',
    date: 'December 2023',
    description: 'Comprehensive overview of program activities, achievements, and impact in the first year.',
    fullDescription: `This inaugural annual report documents the achievements and learnings from the first year of TAGDev 2.0 implementation at Haramaya University. It provides a comprehensive overview of our activities across all program areas, highlights key results, and shares stories of change from the communities we serve.

The report includes:
• Program overview and strategic framework
• Detailed progress against key targets and indicators
• Case studies and impact stories
• Research highlights and innovations
• Financial summary
• Lessons learned and adaptive management
• Plans for Year 2

This report is essential reading for partners, donors, policymakers, and anyone interested in understanding TAGDev 2.0's approach and early achievements.`,
    size: '5.2 MB',
    downloads: 245,
    icon: 'FileText',
    fileUrl: '/resources/annual-report-2023.pdf',
    author: 'TAGDev 2.0 Team',
    publisher: 'Haramaya University',
    pages: 48,
    language: 'English',
    tags: ['Annual Report', 'Impact', 'Achievements']
  },
  {
    id: 2,
    title: 'Climate-Smart Agriculture Implementation Guide',
    slug: 'climate-smart-agriculture-guide',
    type: 'Technical Manual',
    category: 'publication',
    date: 'November 2023',
    description: 'Step-by-step guide for implementing climate-smart agricultural practices.',
    fullDescription: `This practical guide provides extension agents, development practitioners, and farmers with detailed, easy-to-follow instructions for implementing climate-smart agricultural practices. Developed through participatory research with farming communities, the guide reflects local contexts and farmer preferences.

The guide covers:
• Understanding climate change and its impacts on agriculture
• Drought-tolerant crop varieties and management
• Water harvesting and efficient irrigation techniques
• Conservation agriculture and minimum tillage
• Agroforestry and tree integration on farms
• Soil fertility management
• Integrated pest management
• Weather information services

Each chapter includes step-by-step instructions, illustrations, input requirements, and farmer testimonials. The guide is designed for field use and includes checklists and decision-support tools.`,
    size: '3.8 MB',
    downloads: 189,
    icon: 'BookOpen',
    fileUrl: '/resources/csa-guide.pdf',
    author: 'Dr. Abebech Demissie, Dr. Berhanu Megerssa',
    publisher: 'TAGDev 2.0',
    pages: 124,
    language: 'English',
    tags: ['Climate-Smart Agriculture', 'Extension', 'Technical Manual']
  },
  {
    id: 3,
    title: 'Youth Entrepreneurship in Agriculture Study',
    slug: 'youth-entrepreneurship-study',
    type: 'Research Paper',
    category: 'research',
    date: 'October 2023',
    description: 'Research findings on youth engagement and entrepreneurship in agricultural value chains.',
    fullDescription: `This research paper presents findings from a comprehensive study on youth entrepreneurship in Ethiopia's agricultural sector. The study, conducted across three regions, examines the barriers and enablers for youth engagement in agribusiness and identifies promising interventions.

Key research questions:
• What motivates youth to pursue entrepreneurship in agriculture?
• What are the main barriers faced by young agripreneurs?
• Which interventions are most effective in supporting youth entrepreneurship?
• How can universities and TVETs better prepare youth for agribusiness careers?

The paper contributes new knowledge to the growing literature on youth employment in Africa and provides evidence-based recommendations for policymakers, educators, and development practitioners.`,
    size: '2.1 MB',
    downloads: 312,
    icon: 'BarChart3',
    fileUrl: '/resources/youth-entrepreneurship-study.pdf',
    author: 'Dr. Muluken Gezahegn Wordofa, Ato Solomon Girma',
    publisher: 'Journal of African Agricultural Development',
    pages: 28,
    language: 'English',
    tags: ['Research', 'Youth', 'Entrepreneurship', 'Employment']
  },
  {
    id: 4,
    title: 'TVET Curriculum Development Framework',
    slug: 'tvet-curriculum-framework',
    type: 'Curriculum',
    category: 'publication',
    date: 'September 2023',
    description: 'Framework for developing technical and vocational education training programs in agriculture.',
    fullDescription: `This framework provides guidance for TVET institutions seeking to develop or revise competency-based curricula in agriculture and agribusiness. Developed through consultation with industry stakeholders, the framework ensures that training programs are responsive to labor market needs.

The framework includes:
• Principles of competency-based curriculum design
• Step-by-step curriculum development process
• Guidelines for industry engagement and validation
• Assessment strategies and tools
• Integration of employability and entrepreneurship skills
• Quality assurance mechanisms
• Case studies from successful TVET programs

The framework is designed to be adaptable to different contexts and can be used for developing curricula at certificate, diploma, and advanced diploma levels.`,
    size: '4.5 MB',
    downloads: 167,
    icon: 'FileSpreadsheet',
    fileUrl: '/resources/tvet-curriculum-framework.pdf',
    author: 'TAGDev 2.0 TVET Task Force',
    publisher: 'Haramaya University',
    pages: 86,
    language: 'English',
    tags: ['TVET', 'Curriculum', 'Skills Development']
  },
  {
    id: 5,
    title: 'GTA Application Form 2024',
    slug: 'gta-application-form-2024',
    type: 'Form',
    category: 'form',
    date: 'March 2024',
    description: 'Graduate Training Assistantship program application form for the 2024 academic year.',
    size: '0.8 MB',
    downloads: 423,
    icon: 'FileText',
    fileUrl: '/resources/gta-application-2024.pdf',
    tags: ['GTA', 'Application', 'Scholarship']
  },
  {
    id: 6,
    title: 'Research Proposal Template',
    slug: 'research-proposal-template',
    type: 'Form',
    category: 'form',
    date: 'February 2024',
    description: 'Standard template for research proposals submitted to TAGDev 2.0.',
    size: '0.5 MB',
    downloads: 278,
    icon: 'FileText',
    fileUrl: '/resources/research-proposal-template.docx',
    tags: ['Research', 'Proposal', 'Template']
  },
  {
    id: 7,
    title: 'Partnership Inquiry Form',
    slug: 'partnership-inquiry-form',
    type: 'Form',
    category: 'form',
    date: 'December 2023',
    description: 'Form for organizations interested in partnership with TAGDev 2.0.',
    size: '0.3 MB',
    downloads: 145,
    icon: 'FileText',
    fileUrl: '/resources/partnership-inquiry-form.pdf',
    tags: ['Partnership', 'Collaboration', 'Inquiry']
  },
  {
    id: 8,
    title: 'Climate-Resilient Agriculture Policy Brief',
    slug: 'climate-policy-brief',
    type: 'Policy Brief',
    category: 'policy',
    date: 'January 2024',
    description: 'Policy recommendations for scaling climate-resilient agricultural practices in Ethiopia.',
    size: '1.2 MB',
    downloads: 98,
    icon: 'FileText',
    fileUrl: '/resources/climate-policy-brief.pdf',
    author: 'Dr. Getachew Shambel Endris',
    publisher: 'TAGDev 2.0',
    pages: 12,
    language: 'English',
    tags: ['Policy', 'Climate Change', 'Agriculture']
  },
  {
    id: 9,
    title: 'Success Stories: Transforming Lives Through TAGDev 2.0',
    slug: 'success-stories-2023',
    type: 'Impact Stories',
    category: 'multimedia',
    date: 'December 2023',
    description: 'Collection of stories highlighting the impact of TAGDev 2.0 on individuals and communities.',
    size: '8.5 MB',
    downloads: 356,
    icon: 'FileText',
    fileUrl: '/resources/success-stories-2023.pdf',
    pages: 32,
    language: 'English',
    tags: ['Success Stories', 'Impact', 'Testimonials']
  }
];

export const resourceCategories = [
  { name: 'All Resources', count: 48, icon: 'FileText' },
  { name: 'Publications', count: 24, icon: 'BookOpen' },
  { name: 'Forms & Templates', count: 12, icon: 'FileSpreadsheet' },
  { name: 'Research Papers', count: 8, icon: 'BarChart3' },
  { name: 'Reports', count: 6, icon: 'FileText' },
  { name: 'Policy Briefs', count: 4, icon: 'FileText' },
  { name: 'Multimedia', count: 4, icon: 'Video' }
];

export const getResourceBySlug = (slug: string): Resource | undefined => {
  return resources.find(resource => resource.slug === slug);
};

export const getResourcesByCategory = (category: string): Resource[] => {
  if (category === 'All') return resources;
  return resources.filter(r => r.category === category);
};