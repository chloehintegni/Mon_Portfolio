import { useLanguage } from "../context/LanguageContext"
import * as contentFr from "../data/content"
import * as contentEn from "../data/content.en"
import { UI } from "../data/ui"

// Renvoie le contenu perso (profile, skills, projects, experience, education)
// et les textes d'interface dans la langue actuellement sélectionnée.
export function useContent() {
  const { lang } = useLanguage()
  const content = lang === "en" ? contentEn : contentFr
  return { ...content, ui: UI[lang], lang }
}