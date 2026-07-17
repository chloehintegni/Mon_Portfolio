import { Container, Row, Col } from "react-bootstrap"
import { profile } from "../data/content"
import Reveal from "./Reveal"

function About() {
  return (
    <section id="about" className="section">
      <Container>
        <Reveal>
          <Row>
            <Col xs={12}>
              <p className="section__eyebrow">// À propos</p>
              <h2 className="section__title">Qui je suis</h2>
            </Col>
          </Row>
        </Reveal>
        <Reveal delay={100}>
          <Row>
            <Col md={9} lg={8} className="mx-auto">
              <p className="about__bio">{profile.bio}</p>
            </Col>
          </Row>
        </Reveal>
      </Container>
    </section>
  )
}

export default About