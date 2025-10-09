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
    title: 'UVA Basketball Returns: What to Know About the Hoos This Season',
    excerpt: 'The UVA men&apos;s basketball team begins a new era under interim coach Ron Sanchez after Tony Bennett&apos;s retirement, while the women&apos;s team aims to reach the NCAA Tournament under coach Amaka "Mox" Agugua-Hamilton. No Tony Bennett, but intrigue and excitement abound as UVA begins a new hoops year this week.',
    date: '2025-10-07',
    image: '/news-basketball.jpg',
    link: 'https://news.virginia.edu/content/basketball-season-returns-what-know-about-hoos-season'
  },
  {
    id: '3',
    title: 'The Unplugged Classroom: No Midterms or Finals, Just Lots of Writing and Creativity',
    excerpt: 'Psychology professor Jim Coan reimagines learning by eliminating traditional exams and focusing on handwritten, creative note-taking that promotes deeper engagement with course material. After 20 years at UVA, Coan is embracing a new approach for deeper learning. His students say it works.',
    date: '2025-10-06',
    image: '/news-unplugged.jpg',
    link: 'https://news.virginia.edu/content/unplugged-classroom-no-midterms-or-finals-just-lots-writing-and-creativity'
  },
  {
    id: '4',
    title: 'BOV Approves Design for New UVA Center for the Arts',
    excerpt: 'The University of Virginia&apos;s Board of Visitors has approved the schematic design for a new 220,000-square-foot Center for the Arts, which will house performing arts, museum, and music facilities. The new center will unite museums, music and performance in a single hub on Grounds.',
    date: '2025-10-02',
    image: '/news-arts-center.jpg',
    link: 'https://news.virginia.edu/content/bov-approves-design-new-uva-center-arts'
  },
  {
    id: '5',
    title: 'UVA Alumni Association Breaks Ground on Its New Home',
    excerpt: 'The UVA Alumni Association is constructing a new 50,000-square-foot facility called Aggarwal Hall, named after its largest individual donor, Reggie Aggarwal. The new facility is expected to welcome alumni in spring 2027 and will serve as a central gathering place for the UVA community.',
    date: '2025-10-01',
    image: '/news-alumni.jpg',
    link: 'https://news.virginia.edu/content/uva-alumni-association-breaks-ground-its-new-home'
  }
];
