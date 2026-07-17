import { useEffect, useRef, useState } from "react"

/**
 * Hook générique pour animer l'apparition (et optionnellement la disparition)
 * d'un élément quand il entre / sort du viewport.
 *
 * @param {Object} options
 * @param {boolean} options.repeat - si true, l'élément redevient invisible en sortant du viewport
 *   (effet apparition/disparition). Si false (défaut), l'animation ne joue qu'une fois.
 * @param {number} options.threshold - portion de l'élément visible avant de déclencher (0 à 1)
 */
export function useReveal({ repeat = false, threshold = 0.15 } = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respecte les préférences d'accessibilité : pas d'animation si l'utilisateur le demande
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (!repeat) observer.unobserve(el)
        } else if (repeat) {
          setVisible(false)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [repeat, threshold])

  return { ref, visible }
}