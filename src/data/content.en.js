// English mirror of content.js — same shape, translated text only.
// Names, emails, links, dates, and tech stack names stay identical.

export const profile = {
  name: "Chloé Hintegni",
  title: "Front-end React Developer",
  location: "Porto-Novo, Benin",
  tagline:
    "I build clean, high-performing React interfaces, with a real eye for the details that make the difference.",
  bio: "Front-end developer, I pay close attention to how a problem is framed before solving it: identifying the real cause rather than patching a symptom. Holder of a Professional Degree in Software Architecture (ESGIS Benin), I recently completed my apprenticeship at RightCom, where I contributed to the frontend of a SaaS product used in production. I'm now looking for an opportunity to keep growing alongside an experienced team, on projects with real impact.",
  email: "hintegnijeannemarie@gmail.com",
  phone: "+229 01 54 91 96 45",
  whatsapp: "+229 01 40 54 26 21",
  github: "https://github.com/JeanneMarieHINTEGNI",
  linkedin: "https://www.linkedin.com/in/jeanne-marie-hintegni-b88277319/",
}

export const skills = {
  "Front-end": ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "React-Bootstrap"],
  "Back-end & API": ["REST API / Axios", "Parse-Server"],
  Databases: ["SQL Server", "MySQL"],
  Tools: ["Git & GitHub", "Canva", "Bun"],
}

export const projects = [
  {
    id: "righttime",
    name: "RightTime",
    role: "Frontend contribution — RightCom",
    stack: ["React", "TypeScript", "React-Bootstrap", "Parse Cloud Code", "i18next"],
    description:
      "SaaS scheduling and appointment management platform that I worked on as part of the frontend team: user role management (RBAC), contextual breadcrumb navigation, FR/EN internationalization, bug fixes on calendar and localization modules.",
    link: null,
  },
  {
    id: "paie",
    name: "Benin/Togo Payroll Simulator",
    role: "Personal project",
    stack: ["React", "Node.js"],
    description:
      "Payroll simulation app implementing local tax and social rules, with a versioned calculation engine, simulation history, and result export.",
    link: "https://github.com/JeanneMarieHINTEGNI/Projet_soutenance",
  },
  {
    id: "voyages",
    name: "Travel Management",
    role: "Academic project",
    stack: ["Laravel"],
    description:
      "Destination catalog, bookings, customer management, authentication, and admin dashboard.",
    link: null,
  },
  {
    id: "commandes",
    name: "Order Management",
    role: "Academic project",
    stack: ["Laravel"],
    description:
      "CRUD for products and categories, cart and order validation, role management (admin/client), and order status tracking.",
    link: null,
  },
  {
    id: "inscription",
    name: "Online Registration",
    role: "Academic project",
    stack: ["Laravel"],
    description:
      "Application forms with option-based search, admin area, application validation, and data export.",
    link: null,
  },
]

export const experience = [
  {
    company: "RightCom Benin",
    role: "Front-end Developer Intern",
    period: "Mar. 2026 – Jun. 2026",
    details:
      "Second internship: contributed to the frontend of RightCom's products (including RightTime), using React-Bootstrap and integrating Parse-Server / Parse Cloud Code on the frontend side.",
    stack: ["React", "React-Bootstrap", "Parse-Server", "Parse Cloud Code"],
  },
  {
    company: "RightCom Benin",
    role: "Front-end Developer Intern",
    period: "Oct. 2025 – Nov. 2025",
    details:
      "First internship: learned React while consuming REST APIs via Axios, React-Bootstrap, Bun, and responsive design across screen sizes.",
    stack: ["React", "REST API", "Axios", "Bun", "React-Bootstrap"],
  },
  {
    company: "BASIA SARL",
    role: "Developer Intern",
    period: "Feb. 2025 – Apr. 2025",
    details: "Learned and worked with SQL Server.",
    stack: ["SQL Server"],
  },
]

export const education = [
  {
    title: "Professional Degree in Software Architecture",
    school: "ESGIS Benin",
    year: "2025",
  },
  {
    title: "Scientific Baccalaureate, Series D",
    school: "",
    year: "2021 – 2022",
  },
]