import { Container, Row, Col } from "react-bootstrap"
import Reveal from "./Reveal"
import { useContent } from "../hooks/useContent"

function About() {
  const { profile, ui } = useContent()

  return (
    <section id="about" className="section">
      <Container>
        <Reveal>
          <Row>
            <Col xs={12}>
              <p className="section__eyebrow">{ui.about.eyebrow}</p>
              <h2 className="section__title">{ui.about.title}</h2>
            </Col>
          </Row>
        </Reveal>
        <Reveal delay={100}>
          <Row className="justify-content-center">
            <Col md={9} lg={8} className="text-center">
              <p className="about__bio">{profile.bio}</p>
            </Col>
          </Row>
        </Reveal>
      </Container>
    </section>
  )
}

export default About