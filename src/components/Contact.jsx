import { useState } from "react"
import { Container, Row, Col, Form, FloatingLabel, Button, Spinner } from "react-bootstrap"
import emailjs from "@emailjs/browser"
import { Mail, Phone } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons"
import { profile } from "../data/content"
import Reveal from "./Reveal"

// Valeurs lues depuis .env (voir .env.example) plutôt que codées en dur,
// pour pouvoir changer de config sans toucher au code.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState(null) // null | "sending" | "success" | "error"

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("sending")

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          time: new Date().toLocaleString("fr-FR"),
          message: form.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setStatus("success")
      setForm({ name: "", email: "", message: "" })
    } catch (err) {
      console.error(err)
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="section section--contact">
      <Container className="d-flex flex-column align-items-center">
        <Reveal>
          <Row>
            <Col xs={12}>
              <p className="section__eyebrow">// Contact</p>
              <h2 className="section__title">Discutons</h2>
              <p className="contact__lead">
                Je suis à la recherche d'une opportunité pour continuer à apprendre et contribuer
                à des projets concrets. Écris-moi directement via le formulaire, ou par un autre
                canal.
              </p>
            </Col>
          </Row>
        </Reveal>

        <Row className=" g-4">
          <Reveal as={Col} xs={12} md={7} delay={100}>
            <Form className="contact-form" onSubmit={handleSubmit}>
              <FloatingLabel controlId="name" label="Nom" className="mb-3">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Ton nom"
                  required
                  value={form.name}
                  onChange={handleChange}
                />
              </FloatingLabel>

              <FloatingLabel controlId="email" label="Email" className="mb-3">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="ton@email.com"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </FloatingLabel>

              <FloatingLabel controlId="message" label="Message" className="mb-3">
                <Form.Control
                  as="textarea"
                  name="message"
                  placeholder="Ton message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  style={{ height: "140px" }}
                />
              </FloatingLabel>

              <Button
                type="submit"
                className="contact-form__submit-btn w-100"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <>
                    <Spinner animation="border" size="sm" className="me-2" />
                    Envoi en cours…
                  </>
                ) : (
                  "Envoyer le message"
                )}
              </Button>

              {status === "success" && (
                <p className="contact-form__status contact-form__status--success">
                  Message envoyé ! Je te réponds au plus vite.
                </p>
              )}
              {status === "error" && (
                <p className="contact-form__status contact-form__status--error">
                  Un souci est survenu. Vérifie ta configuration EmailJS, ou contacte-moi
                  directement par email.
                </p>
              )}
            </Form>
          </Reveal>

          <Reveal as={Col} xs={12} md={5} delay={200}>
            <div className="contact__links">
              <a href={`mailto:${profile.email}`} className="contact__link">
                <Mail size={18} aria-hidden="true" />
                <span>{profile.email}</span>
              </a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="contact__link">
                <Phone size={18} aria-hidden="true" />
                <span>{profile.phone}</span>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="contact__link"
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact__link"
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </Reveal>
        </Row>
      </Container>
    </section>
  )
}

export default Contact