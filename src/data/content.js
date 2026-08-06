// Toutes les infos personnelles du portfolio sont centralisées ici.
// Pour tout modifier (texte, projets, compétences...), c'est LE fichier à éditer.

export const profile = {
  name: "Chloé Hintegni",
  title: "Développeuse Front-end React",
  location: "Porto-Novo, Bénin",
  tagline:
    "Je construis des interfaces React propres et performantes, avec un vrai goût pour les détails qui font la différence.",
  bio:  "Développeuse front-end, je porte une attention particulière à la manière dont un problème se pose avant de le résoudre : identifier la cause réelle plutôt que de corriger un symptôme. Titulaire d'une Licence en Architecture Logicielle (ESGIS Bénin), j'ai récemment terminé mon apprentissage chez RightCom, où j'ai contribué au frontend d'un produit SaaS utilisé en production. Je recherche aujourd'hui une opportunité pour continuer à monter en compétence au contact d'une équipe expérimentée, sur des projets à réel impact.",
  email: "hintegnijeannemarie@gmail.com",
  phone: "+229 01 54 91 96 45",
  whatsapp: "+229 01 40 54 26 21",
  github: "https://github.com/JeanneMarieHINTEGNI",
  linkedin: "https://www.linkedin.com/in/jeanne-marie-hintegni-b88277319/",
}

export const skills = {
  "Front-end": ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "React-Bootstrap"],
  "Back-end & API": ["REST API / Axios", "Parse-Server"],
  "Bases de données": ["SQL Server", "MySQL"],
  "Outils": ["Git & GitHub", "Canva", "Bun"],
}

export const projects = [
  {
    id: "righttime",
    name: "RightTime",
    role: "Contribution frontend — RightCom",
    stack: ["React", "TypeScript", "React-Bootstrap", "Parse Cloud Code", "i18next"],
    description:
      "Plateforme SaaS de planification et gestion de rendez-vous, sur laquelle j'ai travaillé au sein de l'équipe frontend : gestion des rôles utilisateurs (RBAC), navigation contextuelle par fil d'Ariane, internationalisation FR/EN, corrections de bugs sur les modules de calendrier et de localisation.",
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
    period: "Mars 2026 – Juin 2026",
    details:
      "Second stage : contribution au frontend des produits RightCom (dont RightTime), avec React-Bootstrap et intégration de Parse-Server / Parse Cloud Code côté frontend.",
    stack: ["React", "React-Bootstrap", "Parse-Server", "Parse Cloud Code"],
  },
  {
    company: "RightCom Bénin",
    role: "Stagiaire développeuse Front-end",
    period: "Oct. 2025 – Nov. 2025",
    details:
      "Premier stage : apprentissage de React avec consommation de REST API via Axios, React-Bootstrap, Bun, et design responsive multi-écrans.",
    stack: ["React", "REST API", "Axios", "Bun", "React-Bootstrap"],
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