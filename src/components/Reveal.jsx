import { useReveal } from "../hooks/useReveal"

/**
 * Enveloppe n'importe quel élément (ou composant react-bootstrap comme <Col>)
 * pour lui appliquer un fondu + léger déplacement au scroll.
 *
 * Exemple simple :
 *   <Reveal><h2>Titre</h2></Reveal>
 *
 * Exemple avec délai en cascade sur une liste :
 *   {items.map((item, i) => (
 *     <Reveal key={item.id} delay={i * 100}>...</Reveal>
 *   ))}
 *
 * Exemple avec un composant react-bootstrap (garde les props xs/md/lg/className) :
 *   <Reveal as={Col} xs={12} md={6} delay={200}>...</Reveal>
 */
function Reveal({ children, delay = 0, repeat = false, as: Tag = "div", className = "", ...rest }) {
  const { ref, visible } = useReveal({ repeat })

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default Reveal