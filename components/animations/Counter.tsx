'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/components/utils/cn'

interface CounterProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
  delay?: number
  isDecimal?: boolean
}

/**
 * Animated counter component for metrics section.
 * Animates from 0 to the target value when in view.
 */
export function Counter({
  end,
  suffix = '',
  prefix = '',
  duration = 2000,
  className,
  delay = 0,
  isDecimal = false,
}: CounterProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    const startTime = performance.now()
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const rawValue = easeOutQuart * end

      // Handle decimal display (e.g., 99.9) vs integer (e.g., 50)
      const displayValue = isDecimal
        ? Math.round(rawValue * 10) / 10
        : Math.floor(rawValue)

      setCount(displayValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    const delayedStart = setTimeout(() => {
      requestAnimationFrame(animate)
    }, delay)

    return () => clearTimeout(delayedStart)
  }, [inView, end, duration, delay, isDecimal])

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{ duration: 0.6 }}
      className={cn('font-mono', className)}
    >
      {prefix}
      {isDecimal ? count.toFixed(1) : count.toLocaleString()}
      {suffix}
    </motion.span>
  )
}
