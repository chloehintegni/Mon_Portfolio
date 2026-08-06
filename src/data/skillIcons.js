// Associe chaque nom de compétence (tel qu'écrit dans data/content.js)
// à sa vraie icône de marque. Basé sur react-icons/si (Simple Icons).
//
// ⚠️ REST API n'est PAS une marque (c'est un style d'architecture d'API,
// pas un produit) → icône générique lucide-react plutôt qu'un logo.
// Axios EST une bibliothèque avec un vrai logo → SiAxios.
// Idem pour SQL Server / Parse-Server : pas de logo de marque fiable
// dans ce set → icônes génériques lucide-react.

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
  SiBun,
} from "react-icons/si"
import { Database, Server, Palette, Webhook, CloudCog } from "lucide-react"

export const SKILL_ICONS = {
  React: SiReact,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  HTML5: SiHtml5,
  CSS3: SiCss,
  "React-Bootstrap": SiBootstrap,
  "REST API": Webhook,
  Axios: SiAxios,
  "Parse-Server": Server,
  "Parse Cloud Code": CloudCog,
  "SQL Server": Database,
  MySQL: SiMysql,
  "Git & GitHub": SiGithub,
  Canva: Palette,
  Bun: SiBun,
}

export const SKILL_ICON_COLORS = {
  React: "#61DAFB",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  HTML5: "#E34F26",
  CSS3: "#1572B6",
  "React-Bootstrap": "#7952B3",
  Axios: "#5A29E4",
  MySQL: "#4479A1",
  "Git & GitHub": "#181717",
  Canva: "#00C4CC",
  Bun: "#FBF0DF",
}