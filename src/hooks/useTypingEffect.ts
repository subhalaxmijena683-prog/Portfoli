import { useEffect, useState } from 'react'
import { TYPING_PHRASES } from '../constants/theme'

/** Typing animation cycling through multiple phrases */
export function useTypingEffect(speed = 80, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = TYPING_PHRASES[phraseIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentPhrase.length) {
            setDisplayText(currentPhrase.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), pauseDuration)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length)
          }
        }
      },
      isDeleting ? speed / 2 : speed
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, phraseIndex, speed, pauseDuration])

  return displayText
}
