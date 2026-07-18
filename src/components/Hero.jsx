import { useEffect, useMemo, useRef, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import photo from "../assets/Moi.jpeg"
import Reveal from "./Reveal"
import { useContent } from "../hooks/useContent"

const CODE_LINES = (profile) => [
  [{ t: "const", cls: "hero__kw" }, { t: " dev " }, { t: "=", cls: "hero__op" }, { t: " {" }],
  [{ t: "  name: " }, { t: `"${profile.name}"`, cls: "hero__str" }, { t: "," }],
  [{ t: "  role: " }, { t: `"${profile.title}"`, cls: "hero__str" }, { t: "," }],
  [{ t: "  base: " }, { t: `"${profile.location}"`, cls: "hero__str" }, { t: "," }],
  [{ t: "}" }],
]

const TYPING_SPEED_MS = 18
const LINE_PAUSE_MS = 120

function useTypewriter(lines) {
  const [renderedLines, setRenderedLines] = useState([])
  const [isDone, setIsDone] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReduced) {
      setRenderedLines(lines)
      setIsDone(true)
      return
    }

    let lineIndex = 0
    let charIndex = 0
    const built = []
    setRenderedLines([])
    setIsDone(false)

    const step = () => {
      const fullLine = lines[lineIndex]
      const flatText = fullLine.map((seg) => seg.t).join("")

      if (charIndex <= flatText.length) {
        const partial = sliceSegments(fullLine, charIndex)
        setRenderedLines([...built, partial])
        charIndex += 1
        timeoutRef.current = setTimeout(step, TYPING_SPEED_MS)
      } else {
        built.push(fullLine)
        lineIndex += 1
        charIndex = 0
        if (lineIndex < lines.length) {
          timeoutRef.current = setTimeout(step, LINE_PAUSE_MS)
        } else {
          setIsDone(true)
        }
      }
    }

    timeoutRef.current = setTimeout(step, 300)
    return () => clearTimeout(timeoutRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lines])

  return { renderedLines, isDone }
}

function sliceSegments(segments, count) {
  const result = []
  let remaining = count
  for (const seg of segments) {
    if (remaining <= 0) break
    const piece = seg.t.slice(0, remaining)
    if (piece.length > 0) {
      result.push({ ...seg, t: piece })
    }
    remaining -= seg.t.length
  }
  return result
}

function Hero() {
  const { profile, ui } = useContent()
  const codeLines = useMemo(() => CODE_LINES(profile), [profile])
  const { renderedLines, isDone } = useTypewriter(codeLines)

  return (
    <section id="hero" className="hero">
      <Container className="d-flex flex-column align-items-center">
        <Reveal>
          <Row className="justify-content-center align-items-center hero__top">
            <Col xs="auto">
              <img src={photo} alt={profile.name} className="hero__photo float" />
            </Col>
            <Col className="hero__intro">
              <h1 className="hero__title">
                {ui.hero.greeting} <span className="hero__accent">Chloé</span>.
              </h1>
              <p className="hero__tagline">{profile.tagline}</p>
              <div className="hero__actions">
                <a href="#projects" className="btn btn--primary">
                  {ui.hero.ctaProjects}
                </a>
                <a href="#contact" className="btn btn--ghost">
                  {ui.hero.ctaContact}
                </a>
                <a href="/files/CV_Chloe_Hintegni.pdf" download className="btn btn--ghost">
                  {ui.hero.ctaCV}
                </a>
              </div>
            </Col>
          </Row>
        </Reveal>

        <Reveal delay={150}>
          <Row>
            <Col xs={12} className="mt-5 hero__editor-col">
              <div className="hero__editor float float--slow">
                <div className="hero__editor-bar">
                  <span className="hero__editor-dot" style={{ background: "#ff5f57" }} />
                  <span className="hero__editor-dot" style={{ background: "#febc2e" }} />
                  <span className="hero__editor-dot" style={{ background: "#28c840" }} />
                  <span className="hero__editor-filename">Home</span>
                </div>
                <div className="hero__code">
                  {renderedLines.map((line, i) => (
                    <p className="hero__line" key={i}>
                      {line.map((seg, j) => (
                        <span className={seg.cls} key={j}>
                          {seg.t}
                        </span>
                      ))}
                      {!isDone && i === renderedLines.length - 1 && (
                        <span className="hero__cursor" aria-hidden="true" />
                      )}
                    </p>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Reveal>
      </Container>
    </section>
  )
}

export default Hero