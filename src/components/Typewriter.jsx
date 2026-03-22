import { useState, useEffect } from 'react'

export function Typewriter({ texts }) {
  const [idx, setIdx] = useState(0)
  const [chars, setChars] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[idx]
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (chars < current.length) {
          setChars(c => c + 1)
        } else {
          setTimeout(() => setDeleting(true), 1800)
        }
      } else {
        if (chars > 0) {
          setChars(c => c - 1)
        } else {
          setDeleting(false)
          setIdx(i => (i + 1) % texts.length)
        }
      }
    }, deleting ? 45 : 80)
    return () => clearTimeout(timeout)
  }, [chars, deleting, idx, texts])

  return (
    <span>
      {texts[idx].slice(0, chars)}
      <span className="cursor-blink">|</span>
    </span>
  )
}
