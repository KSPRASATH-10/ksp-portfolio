import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'

export function Reveal({ children, delay = 0, className = '', style = {} }) {
  const [ref, visible] = useReveal()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}