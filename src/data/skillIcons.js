// Associe chaque nom de compétence (tel qu'écrit dans data/content.js)
// à sa vraie icône de marque. Basé sur react-icons/si (Simple Icons).
//
// ⚠️ Pour "SQL Server" et "Parse-Server", il n'existe pas de logo de marque
// fiable dans ce set d'icônes → on utilise une icône générique (lucide-react)
// à la place, pour éviter une erreur d'import comme celle rencontrée avec
// lucide-react (qui a retiré ses icônes de marque en v1.0).

import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiAxios,
  SiMysql,
  SiGithub,
} from "react-icons/si"
import { Database, Server, Palette } from "lucide-react"

export const SKILL_ICONS = {
  React: SiReact,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  HTML5: SiHtml5,
  CSS3: SiCss,
  "React-Bootstrap": SiBootstrap,
  "REST API / Axios": SiAxios,
  "Parse-Server": Server,
  "SQL Server": Database,
  MySQL: SiMysql,
  "Git & GitHub": SiGithub,
  Canva: Palette, // icône générique : pas de nom d'export "Canva" confirmé de façon fiable
}

// Couleurs officielles de marque (optionnel, à utiliser si tu veux des icônes colorées
// plutôt que la couleur du texte). Laisse vide / ignore si tu préfères l'icône
// monochrome qui suit la couleur du tag.
export const SKILL_ICON_COLORS = {
  React: "#61DAFB",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  HTML5: "#E34F26",
  CSS3: "#1572B6",
  "React-Bootstrap": "#7952B3",
  "REST API / Axios": "#5A29E4",
  MySQL: "#4479A1",
  "Git & GitHub": "#181717",
  Canva: "#00C4CC",
}