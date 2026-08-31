/**
 * Smoothly scrolls to an element with a custom duration.
 * Takes CSS scroll-margin-top into account.
 */
export function smoothScrollTo(element: HTMLElement, duration: number = 300) {
  const style = window.getComputedStyle(element)
  const scrollMarginTop = parseInt(style.scrollMarginTop) || 0
  
  const targetPosition = element.getBoundingClientRect().top + window.scrollY - scrollMarginTop
  const startPosition = window.scrollY
  const distance = targetPosition - startPosition
  let startTime: number | null = null

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const run = ease(timeElapsed, startPosition, distance, duration)
    window.scrollTo(0, run)
    if (timeElapsed < duration) {
      requestAnimationFrame(animation)
    } else {
      window.scrollTo(0, targetPosition)
    }
  }

  // easeInOutQuad
  function ease(t: number, b: number, c: number, d: number) {
    t /= d / 2
    if (t < 1) return (c / 2) * t * t + b
    t--
    return (-c / 2) * (t * (t - 2) - 1) + b
  }

  requestAnimationFrame(animation)
}
