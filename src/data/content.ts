// ============================================================================
//  SITE CONTENT  —  placeholder sample (v4-inspired). REPLACE with your info.
//  After editing, commit & push to `main`; GitHub Actions redeploys to Pages.
// ============================================================================

export const profile = {
  // Small greeting shown above your name in the hero
  greet: 'Hi, my name is',
  name: 'Brittany Chiang',
  // The big tagline under your name
  headline: 'I build things for the web.',
  // Sub paragraph in the hero
  sub: "I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.",
  // About section bio (array of paragraphs)
  about: [
    'Hello! I\'m Brittany, a software engineer based in Boston, MA. I enjoy creating things that live on the internet — whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.',
    'Shortly after graduating from college, I joined the team at <strong>Upstatement</strong> where I work on a wide variety of interesting and meaningful projects on a daily basis.',
    'Here are a few technologies I\'ve been working with recently:',
  ],
  skills: [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Node.js',
    'Astro',
    'Tailwind CSS',
    'GraphQL',
    'PostgreSQL',
  ],
  email: 'hello@brittanychiang.com',
  resumeUrl: '#',
  socials: [
    { name: 'GitHub', url: 'https://github.com/bchiang7' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/bchiang7' },
    { name: 'Twitter', url: 'https://twitter.com/bchiang7' },
  ],
};

export const experience = [
  {
    company: 'Apple',
    role: 'Senior Software Engineer',
    range: '2021 — Present',
    location: 'Cupertino, CA',
    points: [
      'Lead the development of a cross-platform design system used by 30+ internal applications.',
      'Collaborated with design and product teams to ship a major redesign of the developer portal.',
      'Mentored 4 junior engineers through code reviews and pairing sessions.',
    ],
  },
  {
    company: 'Upstatement',
    role: 'Software Engineer',
    range: '2019 — 2021',
    location: 'Boston, MA',
    points: [
      'Built and maintained several high-traffic marketing and editorial sites for major clients.',
      'Implemented a component library adopted across the agency’s frontend projects.',
      'Improved Lighthouse performance scores by an average of 25 points per project.',
    ],
  },
  {
    company: 'Freelance',
    role: 'Software Engineer',
    range: '2017 — 2019',
    location: 'Remote',
    points: [
      'Delivered custom web applications for small businesses and startups.',
      'Owned projects end-to-end: discovery, design, build, and deployment.',
    ],
  },
];

export const projects = [
  {
    name: 'Crypto Dashboard',
    description:
      'A real-time dashboard for tracking cryptocurrency portfolios with interactive charts and price alerts.',
    tags: ['React', 'TypeScript', 'Chart.js', 'WebSocket'],
    repo: '#',
    demo: '#',
    featured: true,
  },
  {
    name: 'Notes App',
    description:
      'A minimal, offline-first note-taking app with markdown support and full-text search.',
    tags: ['Astro', 'IndexedDB', 'PWA'],
    repo: '#',
    demo: '#',
    featured: true,
  },
  {
    name: 'Weather Widget',
    description: 'A lightweight weather widget with geolocation and a clean, accessible UI.',
    tags: ['JavaScript', 'OpenWeather API'],
    repo: '#',
    demo: '#',
    featured: false,
  },
  {
    name: 'Task Tracker',
    description: 'A kanban-style task tracker with drag-and-drop and keyboard shortcuts.',
    tags: ['React', 'DnD'],
    repo: '#',
    demo: '#',
    featured: false,
  },
  {
    name: 'Blog Engine',
    description: 'A fast, static blog engine with MDX support and RSS feeds.',
    tags: ['Astro', 'MDX'],
    repo: '#',
    demo: '#',
    featured: false,
  },
  {
    name: 'CLI Tool',
    description: 'A command-line tool to scaffold projects with sensible defaults.',
    tags: ['Node.js', 'Ink'],
    repo: '#',
    demo: '#',
    featured: false,
  },
];
