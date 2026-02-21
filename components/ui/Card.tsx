'use client'

import { motion } from 'framer-motion'
import { cn } from '@/components/utils/cn'

interface CardProps {
  children: React.ReactNode
  className?: string
  glow?: 'cyan' | 'gold' | 'none'
  hover?: boolean
}

/**
 * Card component with subtle styling and optional hover effects.
 * Supports cyan or gold glow on hover for premium feel.
 */
export function Card({ children, className, glow = 'cyan', hover = true }: CardProps) {
  const glowStyles = {
    cyan: 'hover:shadow-[0_0_32px_rgba(34,211,238,0.15)] hover:border-accent/30',
    gold: 'hover:shadow-[0_0_32px_rgba(251,191,36,0.15)] hover:border-cta/30',
    none: '',
  }

  return (
    <motion.div
      className={cn(
        'bg-surface rounded-lg border border-surface-700/50 p-6 transition-all duration-300',
        hover ? 'hover:-translate-y-1' : '',
        glowStyles[glow],
        className
      )}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
