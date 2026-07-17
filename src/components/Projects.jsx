import { Container, Row, Col } from "react-bootstrap"
import { projects } from "../data/content"
import Reveal from "./Reveal"

function Projects() {
  return (
    <section id="projects" className="section">
      <Container>
        <Reveal>
          <Row>
            <Col xs={12}>
              <p className="section__eyebrow">// Projets</p>
              <h2 className="section__title">Ce que j'ai construit</h2>
            </Col>
          </Row>
        </Reveal>
        <Row className="g-4">
          {projects.map((project, i) => (
            <Reveal as={Col} xs={12} md={6} key={project.id} delay={i * 100}>
              <article
                className="project-card h-100 float"
                style={{ animationDelay: `${i * 0.6}s` }}
              >
                <div className="project-card__header">
                  <h3 className="project-card__name">{project.name}</h3>
                  <span className="project-card__role">{project.role}</span>
                </div>
                <p className="project-card__desc">{project.description}</p>
                <div className="project-card__stack">
                  {project.stack.map((tech) => (
                    <span className="tag tag--mono" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-card__links">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="project-card__link"
                    >
                      Voir la démo →
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-card__link"
                    >
                      Voir le code sur GitHub →
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Projects