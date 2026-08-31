import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function RevealText({ lines, text, delay = 0, stagger = 0.12 }) {
  const items = lines || (text ? [text] : [])
  const reduceMotion = usePrefersReducedMotion()

  if (reduceMotion) {
    return (
      <>
        {items.map((line, i) => (
          <span key={i} style={{ display: 'block', lineHeight: 1.05 }}>
            {line}
          </span>
        ))}
      </>
    )
  }

  return (
    <>
      {items.map((line, i) => (
        <span
          key={i}
          style={{ display: 'block', overflow: 'hidden', lineHeight: 1.05 }}
        >
          <motion.span
            style={{ display: 'inline-block', willChange: 'transform' }}
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{
              duration: 1,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </>
  )
}
