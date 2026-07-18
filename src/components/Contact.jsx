import { useState } from "react"
import { Container, Row, Col, Form, FloatingLabel, Button, Spinner } from "react-bootstrap"
import emailjs from "@emailjs/browser"
import { Mail, Phone } from "lucide-react"
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "./icons/BrandIcons"
import Reveal from "./Reveal"
import { useContent } from "../hooks/useContent"

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

function Contact() {
  const { profile, ui } = useContent()
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
      <Container>
        <Reveal>
          <Row className="justify-content-center">
            <Col xs={12} md={9} lg={7} className="text-center">
              <p className="section__eyebrow">{ui.contact.eyebrow}</p>
              <h2 className="section__title">{ui.contact.title}</h2>
              <p className="contact__lead">{ui.contact.lead}</p>
            </Col>
          </Row>
        </Reveal>

        <Row className="d-flex flex-column g-4 align-items-center">
          <Reveal as={Col} xs={12} md={7} delay={100}>
            <Form className="contact-form" onSubmit={handleSubmit}>
              <FloatingLabel controlId="name" label={ui.contact.name} className="mb-3">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder={ui.contact.namePlaceholder}
                  required
                  value={form.name}
                  onChange={handleChange}
                />
              </FloatingLabel>

              <FloatingLabel controlId="email" label={ui.contact.email} className="mb-3">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder={ui.contact.emailPlaceholder}
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </FloatingLabel>

              <FloatingLabel controlId="message" label={ui.contact.message} className="mb-3">
                <Form.Control
                  as="textarea"
                  name="message"
                  placeholder={ui.contact.messagePlaceholder}
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
                    {ui.contact.sending}
                  </>
                ) : (
                  ui.contact.send
                )}
              </Button>

              {status === "success" && (
                <p className="contact-form__status contact-form__status--success">
                  {ui.contact.success}
                </p>
              )}
              {status === "error" && (
                <p className="contact-form__status contact-form__status--error">
                  {ui.contact.error}
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
                href={`https://wa.me/${profile.whatsapp.replace(/[\s+]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="contact__link"
              >
                <WhatsappIcon size={18} aria-hidden="true" />
                <span>{ui.contact.whatsapp}</span>
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="contact__link">
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