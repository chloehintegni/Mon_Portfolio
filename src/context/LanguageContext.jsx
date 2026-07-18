import { createContext, useContext, useEffect, useState } from "react"

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem("lang")
    if (saved) return saved
    return navigator.language?.toLowerCase().startsWith("en") ? "en" : "fr"
  })

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang)
    localStorage.setItem("lang", lang)
  }, [lang])

  const toggleLang = () => setLang((l) => (l === "fr" ? "en" : "fr"))

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage doit être utilisé à l'intérieur d'un <LanguageProvider>")
  return ctx
}