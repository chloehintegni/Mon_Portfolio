import { Container, Row, Col } from "react-bootstrap"
import { Mail, Phone, MapPin } from "lucide-react"
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "./icons/BrandIcons"
import { useContent } from "../hooks/useContent"

const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

function Footer() {
  const { profile, ui } = useContent()

  const scrollTo = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="footer">
      <Container>
        <Row className="footer__top g-4">
          <Col xs={12} md={4}>
            <p className="footer__brand">chloe-hintegni</p>
            <p className="footer__tagline">{profile.tagline}</p>
            <div className="footer__socials">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="footer__social"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="footer__social"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`https://wa.me/${profile.whatsapp.replace(/[\s+]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="footer__social"
              >
                <WhatsappIcon size={18} />
              </a>
            </div>
          </Col>

          <Col xs={6} md={4}>
            <h3 className="footer__heading">{ui.footer.navHeading}</h3>
            <ul className="footer__list">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} onClick={(e) => scrollTo(e, link.id)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          <Col xs={6} md={4}>
            <h3 className="footer__heading">{ui.footer.contactHeading}</h3>
            <ul className="footer__list footer__list--contact">
              <li>
                <MapPin size={15} />
                <span>{profile.location}</span>
              </li>
              <li>
                <Mail size={15} />
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <Phone size={15} />
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
              </li>
              <li>
                <WhatsappIcon size={15} />
                <a
                  href={`https://wa.me/${profile.whatsapp.replace(/[\s+]/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {ui.footer.whatsapp}
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <div className="footer__bottom">
              <p>
                © {new Date().getFullYear()} {profile.name}. {ui.footer.rights}
              </p>
              <p>{ui.footer.builtWith}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer