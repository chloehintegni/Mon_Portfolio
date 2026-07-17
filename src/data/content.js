// Toutes les infos personnelles du portfolio sont centralisées ici.
// Pour tout modifier (texte, projets, compétences...), c'est LE fichier à éditer.

export const profile = {
  name: "Chloé Hintegni",
  title: "Développeuse Front-end React",
  location: "Porto-Novo, Bénin",
  tagline:
    "Je construis des interfaces React propres et performantes, avec un vrai goût pour les détails qui font la différence.",
  bio: "Développeuse web junior diplômée d'une Licence en Architecture Logicielle (ESGIS Bénin). Actuellement en apprentissage avancé chez RightCom, où je contribue au frontend d'une plateforme SaaS de planification et de gestion de rendez-vous. Curieuse et rigoureuse, j'aime comprendre un problème en profondeur avant de coder la solution.",
  email: "hintegnijeannemarie@gmail.com",
  phone: "+229 01 54 91 96 45",
  github: "https://github.com/JeanneMarieHINTEGNI",
  linkedin: "https://www.linkedin.com/in/jeanne-marie-hintegni-b88277319/",
}

export const skills = {
  "Front-end": ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "React-Bootstrap"],
  "Back-end & API": ["REST API / Axios", "Parse-Server"],
  "Bases de données": ["SQL Server", "MySQL"],
  "Outils": ["Git & GitHub", "Canva"],
}

export const projects = [
  {
    id: "righttime",
    name: "RightTime",
    role: "Contribution frontend — RightCom",
    stack: ["React", "TypeScript", "React-Bootstrap", "REST API", "i18next"],
    description:
      "Plateforme SaaS de planification et gestion de rendez-vous. Contribution au frontend : gestion des rôles utilisateurs (RBAC), navigation contextuelle par fil d'Ariane, internationalisation FR/EN, corrections de bugs sur les modules de calendrier et de localisation.",
    link: null,
  },
  {
    id: "paie",
    name: "Simulateur de paie Bénin/Togo",
    role: "Projet personnel",
    stack: ["React", "Node.js"],
    description:
      "Application de simulation de paie implémentant les règles fiscales et sociales locales, avec moteur de calcul versionné, historique des simulations et export des résultats.",
    link: "https://github.com/JeanneMarieHINTEGNI/Projet_soutenance",
  },
  {
    id: "voyages",
    name: "Gestion de voyages",
    role: "Projet académique",
    stack: ["Laravel"],
    description:
      "Catalogue de destinations, réservations, gestion des clients, authentification et tableau de bord administrateur.",
    link: null,
  },
  {
    id: "commandes",
    name: "Gestion de commandes",
    role: "Projet académique",
    stack: ["Laravel"],
    description:
      "Gestion CRUD des produits et catégories, panier et validation de commande, gestion des rôles (admin/client) et suivi du statut des commandes.",
    link: null,
  },
  {
    id: "inscription",
    name: "Inscription en ligne",
    role: "Projet académique",
    stack: ["Laravel"],
    description:
      "Formulaires de candidature avec recherche par option, espace d'administration, validation des dossiers et export des données.",
    link: null,
  },
]

export const experience = [
  {
    company: "RightCom Bénin",
    role: "Stagiaire développeuse Front-end",
    period: "Oct. 2025 – Nov. 2025, Mars 2026 – Juin 2026",
    details:
      "Développement React avec REST API (Axios), React-Bootstrap, design responsive multi-écrans, intégration Parse-Server côté frontend.",
    stack: ["React", "REST API / Axios", "React-Bootstrap", "Parse-Server"],
  },
  {
    company: "BASIA SARL",
    role: "Stagiaire développeuse",
    period: "Fév. 2025 – Avril 2025",
    details: "Apprentissage et manipulation de SQL Server.",
    stack: ["SQL Server"],
  },
]

export const education = [
  {
    title: "Licence Professionnelle en Architecture des Logiciels",
    school: "ESGIS Bénin",
    year: "2025",
  },
  {
    title: "Baccalauréat Scientifique, Série D",
    school: "",
    year: "2021 – 2022",
  },
]