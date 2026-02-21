'use client'

import { Card } from '@/components/ui/Card'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

/**
 * Education section showing academic background.
 */
export function Education() {
  const education = {
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    institution: 'University',
    period: '2018 - 2022',
  }

  return (
    <section className="py-24 md:py-32 bg-surface/30 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-center mb-4">
            Education
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <ScrollReveal delay={0.1}>
            <Card glow="cyan" hover={true}>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-lg bg-surface border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
                    <path d="M12 14l-3.535-2.464 9 0 2.007l-2.007-2.007 8.507-5-3.535-2.464 9 0-2h3l-4.535-2.464 9 0-2z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-text">{education.degree}</h3>
                  <p className="text-muted">{education.field}</p>
                  <p className="text-sm text-muted">{education.institution} • {education.period}</p>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
