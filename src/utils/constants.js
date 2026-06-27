export const EMAILJS_CONFIG = {
  serviceId:  'service_fxqatjc',
  templateId: 'template_mypm73f',
  publicKey:  'ePGvu0q4o1-s2hBOw',
}

export const PERSONAL = {
  name:      'Sakthi',
  initials:  'KSP',
  email:     'sakthikp06@email.com',
  github:    'https://github.com/KSPRASATH-10',
  linkedin:  'https://www.linkedin.com/in/sakthi-prasath-k/',
  whatsapp:  'https://wa.me/917010729051?text=Hi%20Sakthi%2C%20I%27d%20like%20to%20discuss%20a%20project',
}

export const SKILLS_DATA = [
  { cat: 'Frontend',    icon: '🎨', skills: ['React', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'] },
  { cat: 'Backend',     icon: '⚙️', skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth'] },
  { cat: 'Programming', icon: '💻', skills: ['C++', 'JavaScript', 'Python (basics)', 'DSA'] },
  { cat: 'Tools & DB',  icon: '🛠', skills: ['Git', 'MongoDB', 'VS Code', 'Postman', 'Vercel'] },
]

/* ─────────────────────────────────────────
   FEATURED PROJECTS — shown on home page
───────────────────────────────────────── */
export const PROJECTS = [
  {
    title: 'FinPilot AI',
    desc: 'An autonomous, cross-platform financial tracking ecosystem featuring a high-concurrency Express gateway, sliding-window deduplication, and an asynchronous, non-blocking text tokenization pipeline.',
    tech: ['React Native', 'Node.js', 'Express.js', 'JavaScript', 'Tailwind CSS'],
    live: '#', 
    github: 'https://github.com/KSPRASATH-10/FinPilot-AI',
    details: {
      features: [
        'Asynchronous thread-isolated tokenization queue with custom punctuation-aware regex processing',
        'Server-side 5-minute sliding-window caching engine preventing state duplication errors',
        'Unified backend session schema architecture resolving transient local state continuity leaks',
        'Idempotent network request interceptors capturing race conditions with explicit 409 Conflict responses'
      ],
      challenges: 'Synchronous execution paths for text rendering caused critical UI runtime freezes on low-level native threads. Resolved by decoupling the parsing overhead into an asynchronous preprocessing pipeline, ensuring constant 60 FPS performance.'
    },
  },
  {
    title: 'TradeForge',
    desc: 'A containerized full-stack algorithmic backtesting engine that simulates trading strategy rules against historical market data arrays to compute institutional-grade portfolio risk-reward matrices.',
    tech: ['React.js', 'Node.js', 'Express.js', 'Python', 'Pandas', 'Docker Compose'],
    live: '#', 
    github: 'https://github.com/KSPRASATH-10/tradeforge',
    details: {
      features: [
        'Isolated multi-runtime compute execution layout splitting web services from heavy math calculations',
        'Dynamic time-series mathematical models parsing historical data matrices tick-by-tick',
        'Automated performance metric reporting calculating Sharpe Ratio variations and Maximum Drawdowns',
        'Multi-container environment orchestration using Docker Compose for seamless reproducible deployment'
      ],
      challenges: 'Heavy computational tracking arrays for mathematical backtesting caused high latency overhead when handled by the standard server thread. Mitigated by designing an isolated Python analytical core layer, reducing evaluation time while maintaining absolute data purity.'
    },
  },
{
  title: 'Orchestrate AI Support Agent',
  desc: 'A terminal-based autonomous triage agent built for the HackerRank Orchestrate 24-hour hackathon to classify, route, and resolve support tickets deterministically across distributed product ecosystems.',
  tech: ['Python', 'Node.js', 'TF-IDF Retrieval', 'Regex Parsing', 'JSON Schemas'],
  live: '#', 
  github: 'https://github.com/KSPRASATH-10/hackerrank-orchestrate-ai',
  details: {
    features: [
      'Deterministic rule-based classification pipeline categorizing multi-domain tickets with zero context loss',
      'Engineered a TF-IDF retrieval system over a local 774+ document corpus to eliminate LLM hallucinations',
      'Advanced escalation boundaries intercepting high-risk or unsupported user queries safely',
      'Fully structured schema-enforced JSON validation layers guaranteeing absolute data parsing integrity'
    ],
    challenges: 'Cross-domain query processing caused overlapping word arrays to return noisy, ungrounded data records. Mitigated by designing a metadata-driven domain routing algorithm that isolated matching scopes, dramatically improving precision.'
  },
},
]

export const CLIENT_PROJECTS = [
  {
    title:    'Freelancer Portfolio',
    desc:     'Clean, minimal portfolio for a stock market trader with services and contact form.',
    tech:     ['HTML','CSS'],
    category: 'Client',
    year:     '2024',
    live:     '#', github: '#',
  },
]

/* ─────────────────────────────────────────────────────────────────
   ALL_PROJECTS — master list for the /projects page.
   To add a new project in the future, just append to this array.

   Fields:
     title     — project name (required)
     desc      — short description (required)
     tech      — array of tech stack strings (required)
     category  — one of: 'Full Stack' | 'Frontend' | 'Backend' | 'Client' | 'Tool'
     year      — string e.g. '2024' (optional)
     live      — URL or '#' (optional)
     github    — URL or '#' (optional)
     details   — { features: string[], challenges: string } (optional)
───────────────────────────────────────────────────────────────── */
export const ALL_PROJECTS = [
  {
    title: 'FinPilot AI',
    desc: 'An autonomous, cross-platform financial tracking ecosystem featuring a high-concurrency Express gateway, sliding-window deduplication, and an asynchronous, non-blocking text tokenization pipeline.',
    tech: ['React Native', 'Node.js', 'Express.js', 'JavaScript', 'Tailwind CSS'],
    live: '#', 
    github: 'https://github.com/KSPRASATH-10/FinPilot-AI',
    details: {
      features: [
        'Asynchronous thread-isolated tokenization queue with custom punctuation-aware regex processing',
        'Server-side 5-minute sliding-window caching engine preventing state duplication errors',
        'Unified backend session schema architecture resolving transient local state continuity leaks',
        'Idempotent network request interceptors capturing race conditions with explicit 409 Conflict responses'
      ],
      challenges: 'Synchronous execution paths for text rendering caused critical UI runtime freezes on low-level native threads. Resolved by decoupling the parsing overhead into an asynchronous preprocessing pipeline, ensuring constant 60 FPS performance.'
    },
  },
  {
    title: 'TradeForge',
    desc: 'A containerized full-stack algorithmic backtesting engine that simulates trading strategy rules against historical market data arrays to compute institutional-grade portfolio risk-reward matrices.',
    tech: ['React.js', 'Node.js', 'Express.js', 'Python', 'Pandas', 'Docker Compose'],
    live: '#', 
    github: 'https://github.com/KSPRASATH-10/tradeforge',
    details: {
      features: [
        'Isolated multi-runtime compute execution layout splitting web services from heavy math calculations',
        'Dynamic time-series mathematical models parsing historical data matrices tick-by-tick',
        'Automated performance metric reporting calculating Sharpe Ratio variations and Maximum Drawdowns',
        'Multi-container environment orchestration using Docker Compose for seamless reproducible deployment'
      ],
      challenges: 'Heavy computational tracking arrays for mathematical backtesting caused high latency overhead when handled by the standard server thread. Mitigated by designing an isolated Python analytical core layer, reducing evaluation time while maintaining absolute data purity.'
    },
  },
{
  title: 'Orchestrate AI Support Agent',
  desc: 'A terminal-based autonomous triage agent built for the HackerRank Orchestrate 24-hour hackathon to classify, route, and resolve support tickets deterministically across distributed product ecosystems.',
  tech: ['Python', 'Node.js', 'TF-IDF Retrieval', 'Regex Parsing', 'JSON Schemas'],
  live: '#', 
  github: 'https://github.com/KSPRASATH-10/hackerrank-orchestrate-ai',
  details: {
    features: [
      'Deterministic rule-based classification pipeline categorizing multi-domain tickets with zero context loss',
      'Engineered a TF-IDF retrieval system over a local 774+ document corpus to eliminate LLM hallucinations',
      'Advanced escalation boundaries intercepting high-risk or unsupported user queries safely',
      'Fully structured schema-enforced JSON validation layers guaranteeing absolute data parsing integrity'
    ],
    challenges: 'Cross-domain query processing caused overlapping word arrays to return noisy, ungrounded data records. Mitigated by designing a metadata-driven domain routing algorithm that isolated matching scopes, dramatically improving precision.'
  },
},
  {
    title: 'Traffic Management System',
    desc: 'A database-driven full-stack web application built to monitor city operations, streamlining traffic incident tracking, violation logging, and parking capacity analytics.',
    tech: ['Flask', 'Python', 'MongoDB', 'JavaScript', 'HTML5', 'CSS3'],
    category: 'Full Stack',
    year: '2025',
    live: '#', 
    github: 'https://github.com/KSPRASATH-10/Traffic-Management-System',
    details: {
      features: [
        'Engineered dynamic CRUD entry routes managing real-time driver traffic violations and status logging',
        'Implemented database state seeding pipelines utilizing standalone initialization controllers',
        'Built aggregation pipelines providing descriptive analytical metrics over core operational datasets',
        'Structured modular rendering schemas decoupling frontend asset serving from backend routes'
      ],
      challenges: 'Handling real-time state mutations across concurrent reporting documents created transactional race conditions. Mitigated by designing isolated aggregation pipelines and atomic update operators, maintaining strict system synchronization.'
    },
  },
  {
    title:    'Freelancer Portfolio',
    desc:     'Clean, minimal portfolio for a stock market trader with services and contact form.',
    tech:     ['HTML','CSS'],
    category: 'Client',
    year:     '2024',
    live:     '#', github: '#',
  },
  {
    title: 'Asynchronous Weather Dashboard',
    desc: 'A lightweight frontend web application utilizing native web APIs to fetch, parse, and dynamically render real-time meteorological forecasts based on user location queries.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'REST APIs'],
    category: 'Frontend',
    year: '2025',
    live: 'https://ksprasath-10.github.io/Weather-App/', 
    github: 'https://github.com/KSPRASATH-10/Weather-App',
    details: {
      features: [
        'Integrated asynchronous HTTP network fetch streams connecting to external REST API web services',
        'Engineered dynamic DOM manipulation routines updating weather layouts seamlessly without page reloads',
        'Structured modular, scalable vanilla stylesheets ensuring clean responsive user viewports',
        'Configured automated client-side deployment hosting layouts publicly via GitHub Pages infrastructure'
      ],
      challenges: 'Handling latent network delays and missing JSON payload objects caused script execution halts on the client-side thread. Mitigated by wrapping API delivery calls inside robust try/catch blocks with explicit fallback UI states.'
    },
  },

  // ── Add your next project here ──
  // {
  //   title:    'New Project',
  //   desc:     'Description...',
  //   tech:     ['React', 'Node.js'],
  //   category: 'Full Stack',
  //   year:     '2025',
  //   live:     'https://...',
  //   github:   'https://...',
  // },
]

/* ─── Stats ─── */
export const STATS = [
  { label: 'Projects Built', value: 10,  suffix: '+', icon: '🏗' },
  { label: 'DSA Problems',   value: 150, suffix: '+', icon: '🧠' },
  { label: 'Technologies',   value: 15,  suffix: '+', icon: '⚡' },
  { label: 'Happy Clients',  value: 1,   suffix: '',  icon: '🤝' },
  { label: 'GitHub Repos',   value: 10,  suffix: '+', icon: '⬡' },
]

/* ─── Services & Why Me (used by Hire.jsx) ─── */
export const SERVICES = [
  { icon: '🌐', title: 'Portfolio Websites', desc: 'Clean, modern portfolios that make a lasting impression.', price: 'From ₹3,999' },
  { icon: '🏢', title: 'Business Websites',  desc: 'Professional sites with contact forms and SEO structure.', price: 'From ₹7,999' },
  { icon: '⚡', title: 'Web Applications',   desc: 'Full-stack apps with auth, dashboards, and APIs.',        price: 'Custom Quote' },
]

export const WHY_ME = [
  { icon: '🚀', label: 'Fast Delivery',  desc: 'MVPs in days, not months.' },
  { icon: '💰', label: 'Affordable',     desc: 'Competitive pricing, no hidden costs.' },
  { icon: '✨', label: 'Clean Code',     desc: 'Readable, documented, maintainable.' },
  { icon: '🔁', label: 'Free Revisions', desc: "Iterate until you're 100% satisfied." },
]
