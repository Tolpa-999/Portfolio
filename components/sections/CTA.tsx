'use client'

import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { SiGithub } from 'react-icons/si'

/**
 * Final CTA section for conversion.
 * Clean, centered layout with primary and secondary actions.
 */
export function CTA() {
  return (
    <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-surface/20 to-primary" />

      {/* Accent glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tight mb-6">
            Ready to Build Your SaaS the Right Way?
          </h2>
          <p className="text-lg md:text-xl text-muted mb-10 max-w-2xl mx-auto">
            Let's turn your idea into a scalable, revenue-generating system.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" className="text-lg flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="fill-current">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.89-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.11-.9-2-2-2zm0 16H5V9h14v11zM7 11h5v5H7v-5z"/>
              </svg>
              Book a Strategy Call
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg flex items-center gap-2"
              href="https://github.com/tolpa"
            >
              <SiGithub size={20} />
              View GitHub
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="text-sm text-muted mt-8">
            I turn business ideas into scalable SaaS platforms that generate
            revenue.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
