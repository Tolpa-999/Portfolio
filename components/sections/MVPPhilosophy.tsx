'use client'

import { Card } from '@/components/ui/Card'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

/**
 * MVP Launch Philosophy section.
 * Explains the practical approach to launching products.
 */
export function MVPPhilosophy() {
  const principles = [
    {
      icon: '✓',
      title: 'Idea Validation Before Code',
      description:
        'I work with you to validate assumptions before writing a single line of code. We identify the core problem, target market, and success metrics upfront.',
    },
    {
      icon: '⚡',
      title: 'Fast MVP With Real User Data',
      description:
        'Build the minimum viable product quickly, then iterate based on real user feedback. Quality matters, but speed to market is crucial for validation.',
    },
    {
      icon: '📈',
      title: 'Conversion-First Iteration',
      description:
        'Every feature serves a business objective. We focus on conversion metrics and user outcomes, not vanity metrics or feature creep.',
    },
    {
      icon: '🏗️',
      title: 'Infrastructure Scales When Revenue Justifies',
      description:
        'Start lean, scale smart. We build for growth but don\'t over-engineer. Infrastructure scales when revenue proves the business model.',
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Subtle accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-center mb-4">
            My Approach to Launching MVPs
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-16">
            Practical, no-fluff philosophy focused on shipping revenue-generating
            products.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {principles.map((principle, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card glow="cyan" hover={true}>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{principle.icon}</span>
                    <h3 className="text-lg font-bold text-text font-sans">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
