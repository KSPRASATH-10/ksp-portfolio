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
    title: 'E-Commerce Platform',
    desc:  'Full-stack shopping platform with cart, auth, and payment integration.',
    tech:  ['React', 'Node.js', 'MongoDB', 'Stripe'],
    live:  '#', github: '#',
    details: {
      features:   ['User auth with JWT', 'Product CRUD', 'Cart & checkout', 'Payment via Stripe'],
      challenges: 'Handling concurrent cart updates and payment consistency required careful state management and transaction handling.',
    },
  },
  {
    title: 'Task Management App',
    desc:  'Kanban-style project manager with drag-and-drop and real-time sync.',
    tech:  ['React', 'Socket.io', 'Express', 'MongoDB'],
    live:  '#', github: '#',
    details: {
      features:   ['Drag-and-drop boards', 'Real-time collaboration', 'Role-based access', 'Analytics dashboard'],
      challenges: 'Implementing real-time sync without conflicts across multiple clients using Socket.io rooms.',
    },
  },
  {
    title: 'Portfolio Generator',
    desc:  'SaaS tool that generates professional portfolios from JSON data.',
    tech:  ['React', 'Vite', 'Tailwind', 'Node.js'],
    live:  '#', github: '#',
    details: {
      features:   ['Template engine', 'PDF export', 'Custom domains', 'Analytics'],
      challenges: 'Designing a flexible template system that allows customization while maintaining consistent design quality.',
    },
  },
]

export const CLIENT_PROJECTS = [
  {
    title: 'Restaurant Website',
    desc:  'Responsive website for a local restaurant with online menu, reservation system, and Google Maps integration.',
    tech:  ['React', 'Tailwind', 'EmailJS'],
    live:  '#', github: '#',
  },
  {
    title: 'Freelancer Portfolio',
    desc:  'Clean, minimal portfolio for a graphic designer with gallery, testimonials, and contact form.',
    tech:  ['React', 'Framer Motion', 'Tailwind'],
    live:  '#', github: '#',
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
    title:    'E-Commerce Platform',
    desc:     'Full-stack shopping platform with cart, auth, and Stripe payment integration.',
    tech:     ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
    category: 'Full Stack',
    year:     '2024',
    live:     '#', github: '#',
    details: {
      features:   ['User auth with JWT', 'Product CRUD', 'Cart & checkout', 'Payment via Stripe'],
      challenges: 'Handling concurrent cart updates and payment consistency required careful state management and transaction handling.',
    },
  },
  {
    title:    'Task Management App',
    desc:     'Kanban-style project manager with drag-and-drop and real-time collaboration.',
    tech:     ['React', 'Socket.io', 'Express', 'MongoDB'],
    category: 'Full Stack',
    year:     '2024',
    live:     '#', github: '#',
    details: {
      features:   ['Drag-and-drop boards', 'Real-time collaboration', 'Role-based access'],
      challenges: 'Implementing real-time sync without conflicts across multiple clients using Socket.io rooms.',
    },
  },
  {
    title:    'Portfolio Generator',
    desc:     'SaaS tool that generates professional portfolios from a JSON config.',
    tech:     ['React', 'Vite', 'Tailwind', 'Node.js'],
    category: 'Full Stack',
    year:     '2024',
    live:     '#', github: '#',
    details: {
      features:   ['Template engine', 'PDF export', 'Custom domains', 'Analytics'],
      challenges: 'Designing a flexible template system while maintaining consistent design quality.',
    },
  },
  {
    title:    'Restaurant Website',
    desc:     'Responsive website for a local restaurant with menu, reservations, and Maps.',
    tech:     ['React', 'Tailwind', 'EmailJS'],
    category: 'Client',
    year:     '2024',
    live:     '#', github: '#',
  },
  {
    title:    'Freelancer Portfolio',
    desc:     'Clean, minimal portfolio for a graphic designer with gallery and contact form.',
    tech:     ['React', 'Framer Motion', 'Tailwind'],
    category: 'Client',
    year:     '2023',
    live:     '#', github: '#',
  },
  {
    title:    'DSA Visualizer',
    desc:     'Interactive tool to visualize sorting and graph algorithms step by step.',
    tech:     ['React', 'JavaScript', 'CSS Animations'],
    category: 'Frontend',
    year:     '2023',
    live:     '#', github: '#',
    details: {
      features:   ['Bubble, merge, quick sort', 'BFS / DFS graph traversal', 'Adjustable speed'],
      challenges: 'Syncing animation timing with algorithm steps required a custom async step-runner.',
    },
  },
  {
    title:    'Blog REST API',
    desc:     'Full-featured REST API with auth, posts, comments, and pagination.',
    tech:     ['Node.js', 'Express', 'MongoDB', 'JWT'],
    category: 'Backend',
    year:     '2023',
    live:     '#', github: '#',
    details: {
      features:   ['JWT auth & refresh tokens', 'CRUD posts & comments', 'Pagination & search'],
      challenges: 'Designing a clean, versioned API structure that stays maintainable as features grow.',
    },
  },
  {
    title:    'CLI Todo Tool',
    desc:     'Command-line task manager written in C++ with file persistence.',
    tech:     ['C++', 'File I/O', 'CLI'],
    category: 'Tool',
    year:     '2022',
    live:     '#', github: '#',
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