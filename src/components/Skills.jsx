import { Container, Row, Col } from "react-bootstrap"
import Reveal from "./Reveal"
import { SKILL_ICONS, SKILL_ICON_COLORS } from "../data/skillIcons"
import { useContent } from "../hooks/useContent"

// Fait varier légèrement la durée et le décalage du flottement
// pour que les cartes ne bougent pas toutes de façon synchronisée.
const FLOAT_VARIANTS = ["", "float--slow", "float--fast"]

function Skills() {
  const { skills, ui } = useContent()
  return (
    <Reveal as="section" id="skills" className="section">
      <Container>
        <Row>
          <Col xs={12}>
            <p className="section__eyebrow">{ui.skills.eyebrow}</p>
            <h2 className="section__title">{ui.skills.title}</h2>
          </Col>
        </Row>

        {Object.entries(skills).map(([category, items], groupIndex) => (
          <Reveal
            key={category}
            delay={groupIndex * 120}
            className="skills__category-block"
            as="div"
          >
            <h3 className="skills__category">{category}</h3>
            <Row className="g-3">
              {items.map((item, i) => {
                const Icon = SKILL_ICONS[item]
                const iconColor = SKILL_ICON_COLORS[item]
                const floatVariant = FLOAT_VARIANTS[i % FLOAT_VARIANTS.length]

                return (
                  <Col xs={6} sm={4} md={3} lg={2} key={item}>
                    <div
                      className={`skill-card float ${floatVariant}`}
                      style={{ animationDelay: `${i * 0.4}s` }}
                    >
                      {Icon && (
                        <Icon
                          className="skill-card__icon"
                          style={iconColor ? { color: iconColor } : undefined}
                        />
                      )}
                      <span className="skill-card__name">{item}</span>
                    </div>
                  </Col>
                )
              })}
            </Row>
          </Reveal>
        ))}
      </Container>
    </Reveal>
  )
}

export default Skills