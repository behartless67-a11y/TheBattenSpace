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
    title: 'UVA Presidential Search Committee Gets First Look at Initial Candidates',
    excerpt: 'The special committee will narrow the candidate pool and schedule in-person interviews in late November. The search for UVA&apos;s next president continues as the committee reviews applications from leaders across academia and beyond, seeking someone who can guide the University through its next chapter of excellence and innovation.',
    date: '2025-10-08',
    image: '/news-presidential.jpg',
    link: 'https://news.virginia.edu/content/uvas-presidential-search-committee-gets-first-look-initial-candidates'
  },
  {
    id: '2',
    title: 'Faculty Spotlight: Gerald Warburg Helps Batten School Grow Next Generation of Leaders',
    excerpt: 'Gerald Warburg, a longtime professor at UVA&apos;s Batten School, has been instrumental in developing the school from its early days, helping to grow it from 25 students to hundreds and empowering young people to become effective leaders. Warburg received the prestigious 2024 All-University Teaching Award for his dedication to student mentorship and excellence in teaching.',
    date: '2024-08-15',
    image: '/news-warburg.jpg',
    link: 'https://news.virginia.edu/content/faculty-spotlight-how-gerald-warburg-helping-batten-school-grow-next-generation-leaders'
  },
  {
    id: '3',
    title: 'Batten School Helps Local Teens Explore Public Policy, Leadership',
    excerpt: 'A summer program at UVA&apos;s Batten School introduced local high school students to public policy and leadership through interactive workshops and game design, helping them understand how policy affects their lives. Dozens of local high school students participated in the program, exploring how they can influence policy and make a difference in their communities.',
    date: '2024-07-22',
    image: '/news-teens.jpg',
    link: 'https://news.virginia.edu/content/batten-school-helps-local-teens-explore-public-policy-leadership'
  },
  {
    id: '4',
    title: 'Fast-Growing Batten School Launches Five Dual Degree Programs',
    excerpt: 'The Batten School at the University of Virginia has expanded its enrollment by introducing an inaugural graduate class of 22 students and creating five new dual-degree programs with partner schools. This expansion reflects the school&apos;s commitment to providing students with interdisciplinary training and preparing them for leadership roles in an increasingly complex policy landscape.',
    date: '2024-06-10',
    image: '/garrett-hall-sunset.jpg',
    link: 'https://news.virginia.edu/content/fast-growing-batten-school-launches-five-dual-degree-programs-welcomes-first-post-graduate'
  }
];
