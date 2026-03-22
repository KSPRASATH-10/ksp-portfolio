import { useState, useEffect, useRef } from 'react'
import { useReveal } from '../hooks/useReveal'

export function Counter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const [ref, visible] = useReveal()
  const started = useRef(false)

  useEffect(() => {
    if (visible && !started.current) {
      started.current = true
      const startTime = Date.now()
      const tick = () => {
        const progress = Math.min((Date.now() - startTime) / duration, 1)
        setCount(Math.floor(progress * target))
        if (progress < 1) requestAnimationFrame(tick)
        else setCount(target)
      }
      requestAnimationFrame(tick)
    }
  }, [visible, target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}
