'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { cn } from '@/components/utils/cn'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  disabled?: boolean
}

/**
 * Scroll reveal animation component using Framer Motion.
 * Animates children into view when they enter the viewport.
 * Disabled on mobile for performance and cleaner UX.
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  disabled = false,
}: ScrollRevealProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  useEffect(() => {
    if (inView && !disabled) {
      controls.start('visible')
    }
  }, [controls, inView, disabled])

  // Animation variants based on direction
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 32 : direction === 'down' ? -32 : 0,
      x: direction === 'left' ? 32 : direction === 'right' ? -32 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1], // Custom easing for premium feel
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial={disabled ? 'visible' : 'hidden'}
      animate={controls}
      variants={variants}
      className={cn('', className)}
    >
      {children}
    </motion.div>
  )
}
