'use client'

import { motion } from 'framer-motion'
import { cn } from '@/components/utils/cn'

interface StaggeredChildrenProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}

/**
 * Wrapper component that staggers animation of children.
 * Useful for grid items, lists, and metrics.
 */
export function StaggeredChildren({
  children,
  className,
  staggerDelay = 0.1,
}: StaggeredChildrenProps) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      className={cn('', className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div key={i} variants={item}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  )
}
