export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  link: string;
}

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Batten School Launches New Leadership Initiative',
    excerpt: 'A groundbreaking program designed to develop the next generation of public policy leaders. The new initiative brings together experienced practitioners, academic scholars, and emerging leaders to collaborate on real-world policy challenges. Students will have the opportunity to work directly with government agencies, nonprofit organizations, and international institutions while developing critical leadership skills. The program emphasizes ethical decision-making, inclusive governance, and innovative approaches to solving complex societal problems.',
    date: '2025-10-01',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80',
    link: '/news/leadership-initiative'
  },
  {
    id: '2',
    title: 'Students Win National Policy Competition',
    excerpt: 'Batten MPP students take first place in prestigious national policy case competition. The team of five students presented a comprehensive policy proposal addressing urban housing affordability, impressing judges with their thorough research, innovative solutions, and compelling presentation. Their winning proposal combines zoning reform, public-private partnerships, and community engagement strategies to create sustainable, affordable housing options in rapidly growing cities. This victory marks the third consecutive year that Batten students have placed in the top three at this nationally recognized competition.',
    date: '2025-09-28',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
    link: '/news/policy-competition'
  },
  {
    id: '3',
    title: 'Dean Announces Expansion of Research Centers',
    excerpt: 'Three new research centers will focus on climate policy, democratic governance, and public health. The expansion represents a significant investment in addressing the most pressing challenges facing society today. Each center will bring together interdisciplinary teams of faculty, researchers, and practitioners to conduct rigorous analysis and develop evidence-based policy recommendations. The Climate Policy Center will examine pathways to carbon neutrality, the Democratic Governance Center will study threats to democratic institutions, and the Public Health Policy Center will address health equity and pandemic preparedness.',
    date: '2025-09-25',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80',
    link: '/news/research-centers'
  },
  {
    id: '4',
    title: 'Distinguished Speaker Series Features Former Ambassador',
    excerpt: 'Join us for an exclusive conversation on international diplomacy and global challenges. Ambassador Maria Rodriguez will share insights from her distinguished 30-year career in foreign service, including her experiences navigating complex international negotiations and building coalitions across cultural divides. The conversation will explore current challenges in global diplomacy, the future of multilateral cooperation, and advice for students interested in careers in international relations. This event is part of our Distinguished Speaker Series, which brings world-renowned leaders to engage directly with the Batten community.',
    date: '2025-09-20',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
    link: '/news/speaker-series'
  }
];
