'use client'

import { Card } from '@/components/ui/Card'
import { Counter } from '@/components/animations/Counter'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { SiGraphql, SiDatabricks, SiSpeedtest, SiFiles, SiAdguard, SiOpenai } from 'react-icons/si'

/**
 * Metrics / Proof section showing quantified results.
 * Features animated counters and hover effects on cards.
 */
export function Metrics() {
  const metrics = [
    { value: 60, suffix: '+', label: 'REST APIs Built', delay: 0, icon: SiGraphql },
    { value: 65, suffix: '+', label: 'Database Models', delay: 0.1, icon: SiDatabricks },
    { value: 99.9, suffix: '%', label: 'Uptime', prefix: '', delay: 0.2, icon: SiSpeedtest, isDecimal: true },
    { value: 7, suffix: '+', label: 'Projects', prefix: '', delay: 0.3, icon: SiFiles },
    { value: 4, suffix: '+', label: 'Live SaaS', delay: 0.4, icon: SiAdguard },
    { value: 2, suffix: '+', label: 'AI-Integrated Systems', delay: 0.5, icon: SiOpenai },
  ]

  return (
    <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-surface/20 to-primary" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-center mb-4">
            Proven Results
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-16">
            Real metrics from production systems. No exaggeration—just verified
            performance.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <ScrollReveal key={index} delay={metric.delay}>
              <Card glow="cyan" hover={true}>
                <div className="text-center space-y-3">
                  <div className="flex justify-center">
                    <metric.icon size={32} className="text-accent/60" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-accent font-mono">
                    <Counter
                      end={metric.value}
                      suffix={metric.suffix}
                      prefix={metric.prefix}
                      isDecimal={metric.isDecimal || false}
                      delay={100}
                    />
                  </div>
                  <p className="text-sm md:text-base text-muted">{metric.label}</p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
