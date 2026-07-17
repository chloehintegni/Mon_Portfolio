import { Container, Row, Col } from "react-bootstrap"
import { Briefcase, Calendar } from "lucide-react"
import { experience, education } from "../data/content"
import Reveal from "./Reveal"

function Experience() {
  return (
    <section id="experience" className="section">
      <Container>
        <Reveal>
          <Row className="justify-content-center">
            <Col xs={12} >
              <p className="section__eyebrow">// Parcours</p>
              <h2 className="section__title">Expérience & formation</h2>
            </Col>
          </Row>
        </Reveal>

        <Row className="g-4 mb-4 justify-content-center">
          {experience.map((item, i) => (
            <Col xs={12} md={10} lg={8} key={item.company}>
              <Reveal delay={i * 100}>
                <Row className="g-3 align-items-start experience-card">
                  <Col xs="auto">
                    <div className="experience-card__icon">
                      <Briefcase size={22} />
                    </div>
                  </Col>
                  <Col>
                    <div className="experience-card__body">
                      <span className="experience-card__badge">
                        <Calendar size={14} />
                        {item.period}
                      </span>
                      <h3 className="experience-card__role">{item.role}</h3>
                      <p className="experience-card__company">{item.company}</p>
                      <p className="experience-card__details">{item.details}</p>
                      {item.stack?.length > 0 && (
                        <div className="experience-card__stack">
                          {item.stack.map((tech) => (
                            <span className="pill" key={tech}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Col>
                </Row>
              </Reveal>
            </Col>
          ))}
        </Row>

        <Reveal delay={experience.length * 100}>
          <Row className="d-flex justify-content-center g-4">
            <Col xs={12} lg={9}>
              <h3 className="experience__sub text-center mb-4">Formation</h3>
              <ul className="education__list ">
                {education.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    {item.school ? ` — ${item.school}` : ""} ({item.year})
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Reveal>
      </Container>
    </section>
  )
}

export default Experience