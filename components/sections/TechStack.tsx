'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { SiReact, SiNodedotjs, SiDocker, SiAdguard, SiOpenai, SiGrafana } from 'react-icons/si'

interface TechCategory {
  name: string
  items: string[]
  icon: any
}

/**
 * Tech Stack section showing tools and technologies.
 * Clean grid layout with categorized lists and icons.
 */
export function TechStack() {
  const categories: TechCategory[] = [
    {
      name: 'Frontend',
      items: ['React 19', 'Next.js 16', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      icon: SiReact,
    },
    {
      name: 'Backend',
      items: ['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'Prisma ORM', 'Redis'],
      icon: SiNodedotjs,
    },
    {
      name: 'Infrastructure',
      items: ['VPS / Cloud', 'Linux', 'Nginx', 'Docker'],
      icon: SiDocker,
    },
    {
      name: 'Security',
      items: ['JWT Authentication', 'OAuth2', 'RBAC', 'Rate Limiting'],
      icon: SiAdguard,
    },
    {
      name: 'AI & Integrations',
      items: ['Gemini API', 'Marketing Pixels', 'Email Systems', 'Webhooks', 'API Integrations'],
      icon: SiOpenai,
    },
    {
      name: 'Monitoring',
      items: ['Error Tracking', 'Performance Monitoring', 'Logging', 'Uptime Monitoring', 'Analytics'],
      icon: SiGrafana,
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-surface/30 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-center mb-4">
            Tech Stack
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-16">
            Production-ready technologies for building scalable SaaS platforms.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <div className="bg-surface rounded-lg border border-surface-700/50 p-6 hover:border-accent/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <category.icon size={20} className="text-accent" />
                  <h3 className="text-sm uppercase tracking-wider text-accent font-sans">
                    {category.name}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted font-mono flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
