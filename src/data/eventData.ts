export interface Event {
  id: number;
  title: string;
  slug: string;
  date: string;
  month: string;
  day: string;
  year: string;
  time: string;
  endTime?: string;
  location: string;
  venue: string;
  description: string;
  fullDescription?: string;
  registrationLink?: string;
  registrationDeadline?: string;
  capacity?: number;
  registered?: number;
  category: string;
  featured: boolean;
  image?: string;
  organizer?: string;
  contactEmail?: string;
  contactPhone?: string;
  tags?: string[];
}

export const events: Event[] = [
  {
    id: 1,
    title: 'Youth Entrepreneurship Workshop',
    slug: 'youth-entrepreneurship-workshop-march-2024',
    date: 'March 15, 2024',
    month: 'MAR',
    day: '15',
    year: '2024',
    time: '9:00 AM - 4:00 PM',
    location: 'Haramaya University Main Campus',
    venue: 'College of Agriculture Conference Hall',
    description: 'Training on agribusiness and startup development for youth. Participants will learn business planning, marketing, financial management, and how to access funding for their agribusiness ideas.',
    fullDescription: `This intensive one-day workshop is designed for young aspiring agripreneurs who want to turn their business ideas into reality. The workshop combines interactive training sessions, practical exercises, and networking opportunities with successful entrepreneurs and industry experts.

Workshop topics include:
• Business model canvas and lean startup approaches
• Market research and customer discovery
• Financial planning and management
• Access to finance and investment readiness
• Digital marketing for agribusinesses
• Pitching and presentation skills

Participants will have the opportunity to receive feedback on their business ideas from a panel of experts and will be eligible to apply for the TAGDev 2.0 Incubation Program.

Light refreshments and lunch will be provided. Certificates of participation will be issued at the end of the workshop.`,
    registrationLink: '#',
    registrationDeadline: 'March 10, 2024',
    capacity: 50,
    registered: 38,
    category: 'Workshop',
    featured: true,
    image: '/images/event1.jpg',
    organizer: 'TAGDev 2.0 Community Engagement Team',
    contactEmail: 'solomon.girma@haramaya.edu.et',
    contactPhone: '+251 25 553 0303',
    tags: ['Youth', 'Entrepreneurship', 'Training', 'Agribusiness']
  },
  {
    id: 2,
    title: 'Climate-Smart Agriculture Field Day',
    slug: 'climate-smart-agriculture-field-day-april-2024',
    date: 'April 5, 2024',
    month: 'APR',
    day: '05',
    year: '2024',
    time: '8:00 AM - 2:00 PM',
    location: 'Demonstration Farm, Dire Dawa',
    venue: 'TAGDev 2.0 Climate-Smart Demonstration Site',
    description: 'Showcasing climate-resilient farming technologies including drought-tolerant crops, water harvesting techniques, and conservation agriculture practices.',
    fullDescription: `Join us for a hands-on field day at our demonstration farm, where researchers and extension specialists will showcase climate-smart agricultural technologies that are helping farmers adapt to changing weather patterns.

Demonstrations will include:
• Drought-tolerant maize and sorghum varieties
• Efficient irrigation systems (drip and sprinkler)
• Conservation agriculture and minimum tillage
• Agroforestry and tree integration on farmland
• Soil and water conservation structures
• Integrated pest management

Farmers, extension agents, students, and development practitioners are all welcome. The event will feature guided tours of demonstration plots, interactive sessions with researchers, and opportunities to ask questions and share experiences.

Transportation will be provided from Haramaya University main campus. Please register in advance to secure your spot and lunch.`,
    registrationLink: '#',
    registrationDeadline: 'April 3, 2024',
    capacity: 100,
    registered: 67,
    category: 'Field Day',
    featured: true,
    image: '/images/event2.jpg',
    organizer: 'TAGDev 2.0 Research Team',
    contactEmail: 'abebech.demissie@haramaya.edu.et',
    contactPhone: '+251 25 553 0303',
    tags: ['Climate-Smart Agriculture', 'Farmers', 'Demonstration', 'Field Day']
  },
  {
    id: 3,
    title: 'Research Symposium on Agri-Food Systems',
    slug: 'research-symposium-agrifood-systems-may-2024',
    date: 'May 20, 2024',
    month: 'MAY',
    day: '20',
    year: '2024',
    time: '10:00 AM - 5:00 PM',
    location: 'College of Agriculture Conference Hall',
    venue: 'Main Auditorium',
    description: 'Presenting latest research findings on agrifood systems transformation, climate adaptation, and youth employment in agriculture.',
    fullDescription: `The annual Research Symposium brings together researchers, graduate students, and development practitioners to share and discuss cutting-edge research on agrifood systems in Ethiopia and beyond.

This year's symposium will feature:
• Keynote address by a distinguished scholar on climate change and food security
• Oral presentations of research findings from TAGDev 2.0 funded studies
• Poster sessions featuring graduate student research
• Panel discussion on translating research into policy and practice
• Networking reception

Research themes include:
• Climate-smart agriculture and natural resource management
• Agricultural value chains and market systems
• Youth employment and entrepreneurship in agriculture
• Gender and social inclusion in agrifood systems
• Innovation systems and technology adoption

Abstract submission deadline is April 30, 2024. Selected presenters will receive travel support and a modest honorarium.`,
    registrationLink: '#',
    registrationDeadline: 'May 15, 2024',
    capacity: 150,
    registered: 42,
    category: 'Symposium',
    featured: false,
    image: '/images/event3.jpg',
    organizer: 'TAGDev 2.0 Research Team',
    contactEmail: 'muluken.wordofa@haramaya.edu.et',
    contactPhone: '+251 25 553 0303',
    tags: ['Research', 'Symposium', 'Agri-Food Systems', 'Graduate Students']
  },
  {
    id: 4,
    title: 'Farmers Innovation Fair',
    slug: 'farmers-innovation-fair-june-2024',
    date: 'June 10, 2024',
    month: 'JUN',
    day: '10',
    year: '2024',
    time: '8:00 AM - 6:00 PM',
    location: 'Community Center, Harar',
    venue: 'Harar Cultural Center Grounds',
    description: 'Showcasing innovations from local farmers and entrepreneurs, including improved implements, processing technologies, and value-added products.',
    fullDescription: `The Farmers Innovation Fair celebrates the creativity and ingenuity of Ethiopian farmers and rural entrepreneurs. This vibrant event brings together farmers, innovators, researchers, and policymakers to showcase and celebrate locally-developed solutions to agricultural challenges.

The fair will feature:
• Exhibitions of farmer innovations and improved implements
• Product tasting and demonstrations of value-added products
• Competitions for best innovation, best product, and best display
• Farmer-to-farmer knowledge exchange sessions
• Business-to-farmer networking opportunities
• Cultural performances and entertainment

Farmers and entrepreneurs interested in exhibiting can register by May 20, 2024. Exhibition spaces are free of charge, and selected exhibitors will receive transportation support.

This is a family-friendly event open to the general public. Come celebrate the creativity of our farming communities and discover locally-developed solutions that are transforming agriculture.`,
    registrationLink: '#',
    registrationDeadline: 'May 20, 2024',
    capacity: 500,
    registered: 120,
    category: 'Fair',
    featured: false,
    image: '/images/event4.jpg',
    organizer: 'TAGDev 2.0 Community Engagement Team',
    contactEmail: 'etenesh.mamo@haramaya.edu.et',
    contactPhone: '+251 25 553 0303',
    tags: ['Farmers', 'Innovation', 'Exhibition', 'Community']
  },
  {
    id: 5,
    title: 'GTA Orientation Program',
    slug: 'gta-orientation-program-july-2024',
    date: 'July 5, 2024',
    month: 'JUL',
    day: '05',
    year: '2024',
    time: '9:00 AM - 4:00 PM',
    location: 'Haramaya University',
    venue: 'Senate Hall',
    description: 'Orientation for newly admitted Graduate Training Assistantship (GTA) students.',
    fullDescription: `Welcome to the newest cohort of GTA scholars! This mandatory orientation program will introduce new GTA students to the TAGDev 2.0 program, Haramaya University, and the expectations of the GTA scholarship.

The orientation will cover:
• Overview of TAGDev 2.0 vision, goals, and activities
• GTA program requirements and responsibilities
• Academic policies and graduate program guidelines
• Research ethics and responsible conduct of research
• Teaching assistantship expectations and support
• Available resources and support services
• Introductions to faculty mentors and program staff

New GTA scholars will also have the opportunity to meet each other, form study groups, and begin building their professional networks. Current GTA students will share their experiences and offer advice.

Attendance is mandatory for all newly admitted GTA students.`,
    registrationLink: '#',
    registrationDeadline: 'June 30, 2024',
    capacity: 30,
    registered: 15,
    category: 'Orientation',
    featured: false,
    image: '/images/event5.jpg',
    organizer: 'TAGDev 2.0 Core Team',
    contactEmail: 'jeylan.hussein@haramaya.edu.et',
    contactPhone: '+251 25 553 0303',
    tags: ['GTA', 'Orientation', 'Graduate Students', 'Scholarships']
  }
];

export const eventCategories = [
  'All',
  'Workshop',
  'Field Day',
  'Symposium',
  'Fair',
  'Orientation',
  'Training',
  'Conference'
];

export const getEventBySlug = (slug: string): Event | undefined => {
  return events.find(event => event.slug === slug);
};

export const getUpcomingEvents = (limit?: number): Event[] => {
  const today = new Date();
  const sorted = [...events]
    .filter(event => new Date(event.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  return limit ? sorted.slice(0, limit) : sorted;
};

export const getFeaturedEvents = (): Event[] => {
  return events.filter(event => event.featured);
};