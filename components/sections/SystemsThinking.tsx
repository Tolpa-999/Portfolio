'use client'

import { Card } from '@/components/ui/Card'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { SiCodeblocks, SiAdguard, SiDatabricks, SiSpeedtest, SiCodepen, SiGrafana } from 'react-icons/si'

interface Step {
  number: string
  title: string
  description: string
  items: string[]
  icon: any
}

/**
 * Systems Thinking / Architecture section.
 * Shows systematic approach to building scalable SaaS.
 */
export function SystemsThinking() {
  const steps: Step[] = [
    {
      number: '01',
      title: 'Product Architecture',
      description:
        'Design modular, scalable architecture with clear separation of concerns. Plan for growth from day one.',
      items: ['Microservices or modular monolith', 'API-first design', 'Event-driven patterns'],
      icon: SiCodeblocks,
    },
    {
      number: '02',
      title: 'Authentication & RBAC',
      description:
        'Implement secure, scalable authentication with role-based access control for multi-tenant scenarios.',
      items: ['JWT + OAuth2 flows', 'Granular permissions', 'Session management'],
      icon: SiAdguard,
    },
    {
      number: '03',
      title: 'Database Design',
      description:
        'Create efficient, normalized schemas with proper indexing and relationships for optimal performance.',
      items: ['Normalized schema design', 'Proper indexing strategy', 'Foreign key relationships'],
      icon: SiDatabricks,
    },
    {
      number: '04',
      title: 'Caching & Performance',
      description:
        'Layer caching strategy from in-memory to CDN for sub-100ms response times.',
      items: ['Redis caching layer', 'Query optimization', 'CDN for static assets'],
      icon: SiSpeedtest,
    },
    {
      number: '05',
      title: 'DevOps & Deployment',
      description:
        'Automated deployment pipeline with containerization and zero-downtime updates.',
      items: ['Docker containers', 'CI/CD pipelines', 'Health checks & monitoring'],
      icon: SiCodepen,
    },
    {
      number: '06',
      title: 'Monitoring & Error Tracking',
      description:
        'Comprehensive observability with logging, metrics, and alerting for production confidence.',
      items: ['Structured logging', 'Performance metrics', 'Error tracking & alerts'],
      icon: SiGrafana,
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-surface/30 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-center mb-4">
            How I Build SaaS That Scales
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-16">
            A systematic approach to building production-ready systems that grow
            with your business.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <Card glow="cyan" hover={true}>
                <div className="space-y-4">
                  {/* Step number and icon */}
                  <div className="flex items-start justify-between">
                    <div className="text-accent/40 text-4xl font-bold font-mono leading-none">
                      {step.number}
                    </div>
                    <step.icon size={28} className="text-accent/40" />
                  </div>

                  {/* Step content */}
                  <div>
                    <h3 className="text-lg font-bold text-text mb-2 font-sans">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted mb-4">
                      {step.description}
                    </p>

                    {/* Key items */}
                    <ul className="space-y-2">
                      {step.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs font-mono text-muted"
                        >
                          <span className="text-accent/50 mt-1">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Connector lines visualization (desktop only) */}
        <div className="hidden lg:block mt-16 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-[1080px] h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
