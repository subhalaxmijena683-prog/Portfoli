/** Smooth scroll to a section by element id */
export function scrollToSection(id: string): void {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

/** Check if user prefers reduced motion */
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** Check if viewport is mobile */
export function isMobile(): boolean {
  return window.matchMedia('(max-width: 768px)').matches
}

/** Format number with commas */
export function formatNumber(num: number): string {
  return num.toLocaleString('en-IN')
}

/** Simple keyword matcher for AI assistant */
export function matchIntent(
  input: string,
  keywords: Record<string, string[]>
): string | null {
  const lower = input.toLowerCase()
  for (const [intent, words] of Object.entries(keywords)) {
    if (words.some((word) => lower.includes(word))) {
      return intent
    }
  }
  return null
}

/** Trigger file download */
export function downloadFile(url: string, filename: string): void {
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.click()
}
