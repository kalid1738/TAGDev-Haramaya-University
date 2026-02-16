export interface NewsArticle {
  id: number;
  title: string;
  slug: string;
  date: string;
  category: string;
  description: string;
  fullContent: string;
  readTime: string;
  featured: boolean;
  image: string;
  author?: string;
  authorTitle?: string;
  tags?: string[];
  views?: number;
}

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: 'GTA Students Application and Admission Process Opens',
    slug: 'gta-students-application-2024',
    date: 'March 15, 2024',
    category: 'Admissions',
    description: 'The Graduate Training Assistantship (GTA) program is now accepting applications for the 2024 academic year at Haramaya University.',
    fullContent: `The TAGDev 2.0 program at Haramaya University is pleased to announce the opening of applications for the Graduate Training Assistantship (GTA) program. This initiative provides opportunities for young academics to pursue advanced studies while contributing to agricultural research and innovation.

The GTA program is a key component of TAGDev 2.0, designed to build the next generation of agricultural researchers and educators. Successful applicants will receive full scholarships to pursue Master's or PhD degrees at Haramaya University, while also gaining practical experience through teaching and research assistantships.

Eligibility criteria include:
• Bachelor's degree (for Master's) or Master's degree (for PhD) in relevant agricultural fields
• Strong academic record with minimum GPA of 3.0
• Demonstrated interest in agricultural research and development
• Commitment to contribute to the program upon graduation

The application deadline is May 30, 2024. Interested candidates can submit their applications through the university's online portal or obtain paper forms from the TAGDev 2.0 project office.

"We are looking for passionate young scholars who want to make a difference in Ethiopian agriculture," said Dr. Getachew Shambel Endris, Program Coordinator. "The GTA program is not just about advanced degrees; it's about building a community of change-makers who will transform our agricultural systems."`,
    readTime: '3 min read',
    featured: true,
    image: '/images/news1.jpg',
    author: 'Dr. Getachew Shambel Endris',
    authorTitle: 'Program Coordinator',
    tags: ['Admissions', 'GTA', 'Scholarships'],
    views: 1245
  },
  {
    id: 2,
    title: 'RUFORUM Annual General Meeting 2025 Preparations Begin',
    slug: 'ruforum-agm-2025-preparations',
    date: 'April 1, 2024',
    category: 'Conference',
    description: 'Preparations are underway for the RUFORUM Annual General Meeting scheduled for 2025.',
    fullContent: `The Regional Universities Forum for Capacity Building in Agriculture (RUFORUM) will hold its Annual General Meeting in 2025, bringing together partner universities and stakeholders to discuss agricultural education and innovation in Africa. Haramaya University, as a key implementing partner of TAGDev 2.0, is actively participating in the planning process.

The AGM, themed "Transforming African Agriculture Through Youth Empowerment and Climate Action," will feature:
• Plenary sessions with high-level policymakers and thought leaders
• Scientific presentations of cutting-edge agricultural research
• Exhibition showcasing innovations from partner universities
• Side events on youth entrepreneurship, gender equality, and climate-smart agriculture
• Networking opportunities for researchers, students, and industry partners

Prof. Jeylan Wolyie Hussein, who is leading Haramaya University's preparatory committee, noted: "Hosting the RUFORUM AGM is a tremendous opportunity to showcase the innovative work being done at Ethiopian universities and to strengthen our partnerships across the continent."

The university has formed a multi-disciplinary committee to coordinate preparations, ensuring that Haramaya University makes a significant contribution to this premier gathering of agricultural education stakeholders in Africa.`,
    readTime: '4 min read',
    featured: false,
    image: '/images/news2.webp',
    author: 'Prof. Jeylan Wolyie Hussein',
    authorTitle: 'Project Co-PI',
    tags: ['RUFORUM', 'Conference', 'Partnership'],
    views: 892
  },
  {
    id: 3,
    title: 'Kidesena and TVET Institutions Training in Kenya',
    slug: 'kidesena-tvet-training-kenya',
    date: 'February 28, 2024',
    category: 'Training',
    description: 'Capacity building workshop for TVET institutions held in Kenya to enhance skills training.',
    fullContent: `A comprehensive training workshop was conducted for Technical and Vocational Education and Training (TVET) institutions in Kenya, focusing on innovative teaching methods and curriculum development. The training brought together TVET leaders and instructors from Ethiopia and Kenya to share experiences and best practices.

The workshop, organized under the TAGDev 2.0 program, addressed:
• Competency-based curriculum development
• Industry linkages and work-integrated learning
• Entrepreneurship education and incubation support
• Gender-responsive teaching approaches
• Digital tools for TVET instruction

Participants from Haramaya University and partner TVET institutions gained valuable insights that will inform the strengthening of TVET programs in Ethiopia. The exchange visit also facilitated the establishment of partnerships between Ethiopian and Kenyan institutions for ongoing collaboration.

"TVET institutions play a critical role in preparing youth for meaningful employment," noted Ato Solomon Girma, Youth Engagement Specialist. "This training has equipped us with practical approaches to make our programs more responsive to labor market needs and to better support young entrepreneurs."

The training is part of broader efforts under TAGDev 2.0 to strengthen the ecosystem for skills development and job creation in agriculture and agribusiness.`,
    readTime: '5 min read',
    featured: false,
    image: '/images/news3.jpg',
    author: 'Ato Solomon Girma',
    authorTitle: 'Youth Engagement Specialist',
    tags: ['TVET', 'Training', 'Kenya', 'Partnership'],
    views: 567
  },
  {
    id: 4,
    title: 'Strategic Consultations with University Top Management',
    slug: 'strategic-consultations-top-management',
    date: 'January 20, 2024',
    category: 'Meeting',
    description: 'Regular consultative meetings with university leadership to align program objectives.',
    fullContent: `The TAGDev 2.0 team held strategic consultations with the top management of Haramaya University to discuss program implementation and institutional alignment. The meeting, chaired by the University President, reviewed progress to date and identified opportunities for deeper integration of program activities with university systems.

Key discussion points included:
• Integration of TAGDev 2.0 objectives into university strategic plan
• Strengthening research capacity and graduate training
• Enhancing university-community engagement and outreach
• Sustainability strategies for program initiatives beyond the project period
• Resource mobilization and partnership development

University leadership reaffirmed its commitment to the success of TAGDev 2.0 and recognized the program's significant contributions to the university's mission of teaching, research, and community service.

"This consultation demonstrates the strong institutional ownership of TAGDev 2.0 at Haramaya University," said Dr. Jemal Yousuf Hassen, Institutional Advisor. "The support from top management is essential for creating an enabling environment for our activities and ensuring lasting impact."

The meeting resulted in concrete action plans for enhanced collaboration between the project team and various university units.`,
    readTime: '2 min read',
    featured: false,
    image: '/images/news1.jpg',
    author: 'Dr. Jemal Yousuf Hassen',
    authorTitle: 'Institutional Advisor',
    tags: ['Management', 'Strategy', 'Haramaya University'],
    views: 345
  },
  {
    id: 5,
    title: 'Launch of Climate-Smart Agriculture Initiative',
    slug: 'launch-climate-smart-agriculture',
    date: 'December 15, 2023',
    category: 'Initiative',
    description: 'New climate-smart agriculture program launched to support smallholder farmers.',
    fullContent: `A new initiative focusing on climate-smart agricultural practices has been launched to help smallholder farmers adapt to climate change and improve productivity. The initiative, implemented under the ASEC project, will introduce a portfolio of technologies and practices across three intervention districts.

The initiative includes:
• Distribution of drought-tolerant crop varieties
• Training on water harvesting and efficient irrigation
• Promotion of conservation agriculture and minimum tillage
• Integration of trees on farmland through agroforestry
• Weather-indexed insurance pilots for smallholders

Dr. Abebech Demissie, Senior Research Fellow leading the initiative, explained: "Climate change is already affecting Ethiopian farmers, with more frequent droughts and unpredictable rainfall patterns. Our approach combines proven technologies with participatory innovation development to build farmers' resilience."

The initiative aims to reach 72,000 smallholder farmers over the next five years, with particular attention to women farmers and vulnerable households. Demonstration plots have been established in each intervention district to facilitate farmer learning and adaptation of technologies.

Early results from pilot sites show promising yield improvements and farmer enthusiasm for the new practices.`,
    readTime: '4 min read',
    featured: false,
    image: '/images/news2.webp',
    author: 'Dr. Abebech Demissie',
    authorTitle: 'Senior Research Fellow',
    tags: ['Climate-Smart Agriculture', 'Farmers', 'Resilience'],
    views: 1567
  },
  {
    id: 6,
    title: 'Youth Entrepreneurship Summit 2023 Success',
    slug: 'youth-entrepreneurship-summit-2023',
    date: 'November 30, 2023',
    category: 'Event',
    description: 'Successful youth entrepreneurship summit attracts over 300 participants.',
    fullContent: `The Youth Entrepreneurship Summit brought together young entrepreneurs, investors, and mentors to discuss opportunities in the agricultural sector. The two-day event, organized by TAGDev 2.0 in collaboration with Haramaya University's Entrepreneurship Center, featured pitch competitions, networking sessions, and skill-building workshops.

Highlights of the summit included:
• 25 youth-led startups showcasing their innovations
• 12 successful agripreneurs sharing their journeys
• 8 investment-ready ventures pitched to potential funders
• 5 partnership agreements signed between startups and industry players
• Training sessions on business planning, marketing, and financial management

"The energy and creativity of young Ethiopian entrepreneurs is inspiring," said Dr. Muluken Gezahegn Wordofa, Associate Program Coordinator. "This summit demonstrates the immense potential of youth to drive agricultural transformation when given the right support and opportunities."

The summit also served as a platform to launch the TAGDev 2.0 Incubation Program, which will provide comprehensive support to 50 selected agripreneurs over the next three years. Applications for the incubation program opened immediately following the event.

Participants praised the summit for creating meaningful connections between young entrepreneurs and established players in the agricultural sector.`,
    readTime: '3 min read',
    featured: false,
    image: '/images/news3.jpg',
    author: 'Dr. Muluken Gezahegn Wordofa',
    authorTitle: 'Associate Program Coordinator',
    tags: ['Youth', 'Entrepreneurship', 'Summit', 'Startups'],
    views: 2103
  }
];

export const newsCategories = [
  'All',
  'Admissions',
  'Conference',
  'Training',
  'Meeting',
  'Initiative',
  'Event',
  'Research',
  'Partnership',
  'Success Stories'
];

export const getNewsBySlug = (slug: string): NewsArticle | undefined => {
  return newsArticles.find(article => article.slug === slug);
};

export const getFeaturedNews = (): NewsArticle[] => {
  return newsArticles.filter(article => article.featured);
};

export const getLatestNews = (limit?: number): NewsArticle[] => {
  const sorted = [...newsArticles].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return limit ? sorted.slice(0, limit) : sorted;
};