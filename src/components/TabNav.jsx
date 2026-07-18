import { useEffect, useState } from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import { Home, User, Wrench, FolderGit2, Briefcase, Mail } from "lucide-react"
import ThemeToggle from "./ThemeToggle"
import LanguageToggle from "./LanguageToggle"
import { useContent } from "../hooks/useContent"

const TABS = [
  { id: "hero", icon: Home },
  { id: "about", icon: User },
  { id: "skills", icon: Wrench },
  { id: "projects", icon: FolderGit2 },
  { id: "experience", icon: Briefcase },
  { id: "contact", icon: Mail },
]

function TabNav() {
  const { ui } = useContent()
  const [active, setActive] = useState("hero")
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const sections = TABS.map((t) => document.getElementById(t.id)).filter(Boolean)
    const ratios = new Map()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        })

        let bestId = active
        let bestRatio = 0
        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio
            bestId = id
          }
        })
        if (bestRatio > 0) setActive(bestId)
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClick = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setExpanded(false)
  }

  return (
    <Navbar
      fixed="top"
      expand="md"
      expanded={expanded}
      onToggle={setExpanded}
      className="app-navbar shadow-sm"
    >
      <Container className="d-flex align-items-center justify-content-between">
        <Navbar.Brand href="#hero" onClick={(e) => handleClick(e, "hero")} className="me-0">
          Chloé Hintégni
        </Navbar.Brand>

        <div className="navbar__mobile-actions d-flex d-md-none align-items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <Navbar.Toggle aria-controls="main-nav" aria-label="Ouvrir le menu de navigation" />
        </div>

        <Navbar.Collapse id="main-nav" className="flex-grow-1">
          <Nav className="mx-md-auto align-items-md-center">
            {TABS.map((tab) => {
              const Icon = tab.icon
              return (
                <Nav.Link
                  key={tab.id}
                  href={`#${tab.id}`}
                  active={active === tab.id}
                  onClick={(e) => handleClick(e, tab.id)}
                  className="d-flex align-items-center gap-2"
                >
                  <Icon size={16} aria-hidden="true" />
                  {ui.nav[tab.id]}
                </Nav.Link>
              )
            })}
          </Nav>
        </Navbar.Collapse>

        {/* toggles desktop, toujours à l'extrême droite, en dehors du Collapse */}
        <div className="navbar__desktop-toggle d-none d-md-flex align-items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </Container>
    </Navbar>
  )
}

export default TabNav