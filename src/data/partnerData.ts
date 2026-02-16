export interface Partner {
  id: number;
  name: string;
  fullName: string;
  type: 'strategic' | 'collaborator';
  description: string;
  role: string;
  website?: string;
  logo: string;
  logoColor: string;
  icon: string;
  since?: number;
  headquarters?: string;
  focusAreas?: string[];
}

export const partners: Partner[] = [
  {
    id: 1,
    name: 'RUFORUM',
    fullName: 'Regional Universities Forum for Capacity Building in Agriculture',
    type: 'strategic',
    description: 'A network of 163 universities in 40 African countries focused on agricultural development',
    role: 'Lead implementing partner and network coordinator',
    website: 'https://www.ruforum.org',
    logo: '/images/ruforum-logo.jpg',
    logoColor: 'bg-blue-100',
    icon: 'Building2',
    since: 2023,
    headquarters: 'Kampala, Uganda',
    focusAreas: ['Higher Education', 'Research', 'Policy', 'Networking']
  },
  {
    id: 2,
    name: 'Mastercard Foundation',
    fullName: 'Mastercard Foundation',
    type: 'strategic',
    description: 'Global philanthropic organization with a focus on youth employment in Africa',
    role: 'Primary funding partner and strategic collaborator',
    website: 'https://mastercardfdn.org',
    logo: '/images/mastercard-logo.jpg',
    logoColor: 'bg-yellow-100',
    icon: 'Award',
    since: 2023,
    headquarters: 'Toronto, Canada',
    focusAreas: ['Youth Employment', 'Education', 'Financial Inclusion']
  },
  {
    id: 3,
    name: 'GCHERA',
    fullName: 'Global Confederation of Higher Education Associations for Agricultural and Life Sciences',
    type: 'strategic',
    description: 'Global network of higher education associations in agriculture and life sciences',
    role: 'Knowledge partner and global network connector',
    website: 'https://www.gchera.com',
    logo: '/images/gchera-logo.png',
    logoColor: 'bg-green-100',
    icon: 'Globe',
    since: 2023,
    headquarters: 'Washington, DC, USA',
    focusAreas: ['Agricultural Education', 'Life Sciences', 'Global Networking']
  },
  {
    id: 4,
    name: '12 African Universities',
    fullName: 'Network of 12 Leading African Universities',
    type: 'strategic',
    description: 'Consortium of African universities collaborating on agricultural transformation',
    role: 'Implementation partners and regional hubs',
    logo: '',
    logoColor: 'bg-purple-100',
    icon: 'Users',
    since: 2023,
    focusAreas: ['Higher Education', 'Research', 'Community Engagement']
  },

  {
    id: 5,
    name: 'Haramaya University',
    fullName: 'Haramaya University',
    type: 'collaborator',
    description: 'Premier public university in Ethiopia, host institution for TAGDev 2.0',
    role: 'Host institution and lead implementer',
    website: 'https://www.haramaya.edu.et',
    logo: '/images/haramaya-logo.png',
    logoColor: 'bg-blue-50',
    icon: 'Building2',
    since: 2023,
    headquarters: 'Haramaya, Ethiopia',
    focusAreas: ['Education', 'Research', 'Community Service']
  },
  {
    id: 6,
    name: 'Ethiopian Ministry of Agriculture',
    fullName: 'Ministry of Agriculture, Ethiopia',
    type: 'collaborator',
    description: 'Government ministry responsible for agricultural policy and development',
    role: 'Policy and regulatory support',
    website: 'https://www.moa.gov.et',
    logo: '',
    logoColor: 'bg-green-50',
    icon: 'Building2',
    since: 2023,
    headquarters: 'Addis Ababa, Ethiopia',
    focusAreas: ['Agricultural Policy', 'Extension', 'Regulation']
  },
  {
    id: 7,
    name: 'Agricultural Transformation Institute (ATI)',
    fullName: 'Agricultural Transformation Institute',
    type: 'collaborator',
    description: 'Ethiopian government agency driving agricultural transformation',
    role: 'Technical assistance and scaling',
    website: 'https://www.ati.gov.et',
    logo: '',
    logoColor: 'bg-orange-50',
    icon: 'Building2',
    since: 2023,
    headquarters: 'Addis Ababa, Ethiopia',
    focusAreas: ['Agricultural Transformation', 'Value Chains', 'Technology Scaling']
  },
  {
    id: 8,
    name: 'Ethiopian Institute of Agricultural Research (EIAR)',
    fullName: 'Ethiopian Institute of Agricultural Research',
    type: 'collaborator',
    description: 'National agricultural research institute',
    role: 'Research collaboration',
    website: 'https://www.eiar.gov.et',
    logo: '',
    logoColor: 'bg-green-50',
    icon: 'BookOpen',
    since: 2023,
    headquarters: 'Addis Ababa, Ethiopia',
    focusAreas: ['Agricultural Research', 'Technology Development', 'Breeding']
  },
  {
    id: 9,
    name: 'Local TVET Institutions',
    fullName: 'Technical and Vocational Education and Training Institutions',
    type: 'collaborator',
    description: 'Regional TVET colleges providing skills training',
    role: 'Skills training and youth outreach',
    logo: '',
    logoColor: 'bg-purple-50',
    icon: 'Users',
    since: 2023,
    focusAreas: ['Skills Training', 'Youth Employment', 'TVET']
  },
  {
    id: 10,
    name: 'Farmers Cooperatives & Unions',
    fullName: 'Farmers Cooperatives and Unions',
    type: 'collaborator',
    description: 'Farmer organizations across intervention districts',
    role: 'Community engagement and field implementation',
    logo: '',
    logoColor: 'bg-green-50',
    icon: 'Users',
    since: 2023,
    focusAreas: ['Farmer Organization', 'Collective Marketing', 'Input Supply']
  },
  {
    id: 11,
    name: 'Private Sector Agribusinesses',
    fullName: 'Private Sector Agribusiness Companies',
    type: 'collaborator',
    description: 'Agribusiness firms operating in Ethiopia',
    role: 'Market access and enterprise development',
    logo: '',
    logoColor: 'bg-blue-50',
    icon: 'Building2',
    since: 2023,
    focusAreas: ['Agribusiness', 'Market Linkages', 'Value Addition']
  },
  {
    id: 12,
    name: 'International Research Centers',
    fullName: 'International Agricultural Research Centers',
    type: 'collaborator',
    description: 'CGIAR centers and international research organizations',
    role: 'Innovation and technology transfer',
    logo: '',
    logoColor: 'bg-teal-50',
    icon: 'Globe',
    since: 2023,
    focusAreas: ['Research', 'Technology Transfer', 'Capacity Building']
  }
];

export const getStrategicPartners = (): Partner[] => {
  return partners.filter(p => p.type === 'strategic');
};

export const getCollaborators = (): Partner[] => {
  return partners.filter(p => p.type === 'collaborator');
};