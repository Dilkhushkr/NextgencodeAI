// ─── Company Info ────────────────────────────────────────────────────────────
export const COMPANY = {
  name: "NextGenCodeAI",
  fullName: "NextGenCodeAI Innovations",
  tagline: "Building Intelligent Web, Mobile & AI Solutions",
  email: "nextgencodeai@gmail.com",
  whatsapp: "+919999999999", // Replace with actual number
  linkedin: "https://linkedin.com/company/nextgencodeai",
  github: "https://github.com/nextgencodeai",
};

// ─── Navigation Links ─────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

// ─── Services ─────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    id: 1,
    icon: "🌐",
    title: "Website Development",
    description:
      "Modern, fast, and responsive websites built with the latest frameworks. From landing pages to complex portals.",
    tags: ["React", "Next.js", "TailwindCSS"],
    comingSoon: false,
  },
  {
    id: 2,
    icon: "📱",
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications for iOS and Android using React Native with native-like performance.",
    tags: ["React Native", "Expo", "Firebase"],
    comingSoon: false,
  },
  {
    id: 3,
    icon: "⚙️",
    title: "Custom Web Applications",
    description:
      "Scalable, secure backend-powered web apps tailored to your business logic and workflows.",
    tags: ["Django", "Flask", "PostgreSQL"],
    comingSoon: false,
  },
  {
    id: 4,
    icon: "💼",
    title: "Freelance Software Solutions",
    description:
      "Flexible, affordable software development for startups and SMEs. Fast delivery, clean code.",
    tags: ["Agile", "MVP", "Full-Stack"],
    comingSoon: false,
  },
  {
    id: 5,
    icon: "🤖",
    title: "AI/ML Solutions",
    description:
      "Machine learning models, NLP pipelines, and AI-powered features to future-proof your product.",
    tags: ["Python", "TensorFlow", "OpenAI"],
    comingSoon: true,
  },
];

// ─── Tech Stack ───────────────────────────────────────────────────────────────
export const TECH_STACK = [
  { name: "React", icon: "⚛️", color: "#61DAFB", category: "Frontend" },
  { name: "Python", icon: "🐍", color: "#3776AB", category: "Backend" },
  { name: "Django", icon: "🎸", color: "#092E20", category: "Backend" },
  { name: "Flask", icon: "🌶️", color: "#000000", category: "Backend" },
  { name: "MySQL", icon: "🗄️", color: "#4479A1", category: "Database" },
  { name: "PostgreSQL", icon: "🐘", color: "#336791", category: "Database" },
  { name: "React Native", icon: "📱", color: "#61DAFB", category: "Mobile" },
  { name: "TailwindCSS", icon: "🎨", color: "#06B6D4", category: "Frontend" },
  { name: "JavaScript", icon: "🟨", color: "#F7DF1E", category: "Language" },
  { name: "TypeScript", icon: "🔷", color: "#3178C6", category: "Language" },
  { name: "Git & GitHub", icon: "🐙", color: "#F05032", category: "DevOps" },
  { name: "AI/ML", icon: "🤖", color: "#FF6F00", category: "AI" },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 1,
    title: "Admin Dashboard",
    description:
      "A feature-rich admin panel with analytics, user management, dark mode, and real-time charts.",
    tech: ["React", "TailwindCSS", "Chart.js", "Django REST"],
    category: "Web App",
    gradient: "from-blue-600 to-indigo-800",
    emoji: "📊",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Blog Application",
    description:
      "Full-stack blogging platform with markdown editor, categories, tags, comments, and SEO optimization.",
    tech: ["React", "Django", "PostgreSQL", "AWS S3"],
    category: "Full Stack",
    gradient: "from-violet-600 to-purple-800",
    emoji: "📝",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Job Portal",
    description:
      "End-to-end job portal with applicant tracking, resume parsing, and smart job recommendations.",
    tech: ["React", "Flask", "MySQL", "Redis"],
    category: "Full Stack",
    gradient: "from-cyan-600 to-blue-800",
    emoji: "💼",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Diamond Price Prediction",
    description:
      "ML model with 96%+ accuracy predicting diamond prices based on cut, carat, clarity, and color features.",
    tech: ["Python", "Scikit-learn", "Flask", "Pandas"],
    category: "AI/ML",
    gradient: "from-fuchsia-600 to-pink-800",
    emoji: "💎",
    demoUrl: "#",
    githubUrl: "#",
  },
];

// ─── About Highlights ─────────────────────────────────────────────────────────
export const HIGHLIGHTS = [
  { icon: "🚀", label: "Solo Founder-Led", description: "Direct communication, no middlemen" },
  { icon: "⚡", label: "Agile Development", description: "Fast iterations, rapid delivery" },
  { icon: "💡", label: "Modern Tech Stack", description: "Latest tools for future-ready apps" },
  { icon: "💰", label: "Affordable Pricing", description: "Startup-friendly rates, premium quality" },
];
