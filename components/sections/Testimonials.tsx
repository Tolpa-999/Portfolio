'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { SiCodepen, SiGit } from 'react-icons/si'

interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  icon: any
}

/**
 * Testimonials section showing client feedback.
 */
export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: 'Ahmed Al-Mansour',
      role: 'Founder',
      company: 'Eyzle',
      content: 'Tolpa delivered our multi-tenant SaaS platform in record time. The subdomain routing, RBAC, and API architecture have scaled perfectly with our growing client base.',
      icon: SiGit,
    },
    {
      name: 'Sarah Chen',
      role: 'Product Manager',
      company: 'UR DOC',
      content: 'The EdTech platform Tolpa built handles thousands of daily users with zero downtime. His understanding of production architecture and security requirements was exceptional.',
      icon: SiCodepen,
    },
    {
      name: 'Michael Park',
      role: 'CTO',
      company: 'Co Clinic',
      content: 'We needed a HIPAA-compliant solution for our telehealth platform. Tolpa delivered exactly that, with robust encryption and audit logging that exceeded our expectations.',
      icon: SiCodepen,
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-primary relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-center mb-4">
            What Clients Say
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-16">
            Trusted by founders and teams across industries.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="bg-surface rounded-lg border border-surface-700/50 p-6 hover:border-accent/30 transition-all duration-300 group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <testimonial.icon size={24} className="text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-text">{testimonial.name}</h3>
                    <p className="text-sm text-accent font-medium">
                      {testimonial.role} • {testimonial.company}
                    </p>
                    <p className="text-sm text-muted leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
