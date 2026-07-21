import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '../utils/helpers'

gsap.registerPlugin(ScrollTrigger)

/** GSAP scroll-triggered reveal animation for elements */
export function useScrollReveal<T extends HTMLElement>(
  options?: gsap.TweenVars
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    const tween = gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      ...options,
    })

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [options])

  return ref
}
