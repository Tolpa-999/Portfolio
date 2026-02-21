'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'

/**
 * About section - Personal introduction and summary.
 */
export function About() {
  return (
    <section className="py-24 md:py-32 bg-primary relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-center mb-16">
            About Me
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal delay={0.1}>
            <div className="space-y-6">
              <div className="w-24 h-24 rounded-2xl bg-surface border border-accent/20 flex items-center justify-center mb-6">
                <span className="text-5xl font-bold text-accent">T</span>
              </div>

              <p className="text-lg text-text leading-relaxed mb-6">
                I'm a SaaS Architect & Full-Stack Systems Engineer who turns business
                ideas into scalable, revenue-generating platforms.
              </p>

              <p className="text-muted leading-relaxed">
                With a systems-thinking approach to development, I build
                production-ready applications that scale efficiently and perform
                reliably.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-accent/20">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-accent">
                    <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm3 3h2v2H9V9zm3 0h2v2H9v-2zm3 0h2v2H9v-2z" fill="currentColor"/>
                  </svg>
                  <span className="text-sm text-muted">Full-Stack</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-accent/20">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-accent">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v12l9 9H5c0-1.1 0-2 .9-2V5c0-1.1 0-2 .9-2z" fill="currentColor"/>
                  </svg>
                  <span className="text-sm text-muted">SaaS Architect</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-accent/20">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-accent">
                    <path d="M12 3L1 9s-1 1h20s2 2h3l3-6H1v12z" fill="currentColor"/>
                  </svg>
                  <span className="text-sm text-muted">Systems Engineer</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="hidden lg:block">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-text mb-4 font-sans">
                My Core Philosophy
              </h3>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-surface border border-accent/20 flex items-center justify-center">
                    <span className="text-accent font-mono text-lg">01</span>
                  </div>
                  <div>
                    <h4 className="text-md font-semibold text-text mb-1">Think Systems First</h4>
                    <p className="text-sm text-muted">
                      Plan for scale from day one. Architecture decisions impact everything.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-surface border border-accent/20 flex items-center justify-center">
                    <span className="text-accent font-mono text-lg">02</span>
                  </div>
                  <div>
                    <h4 className="text-md font-semibold text-text mb-1">Ship Fast & Iterate</h4>
                    <p className="text-sm text-muted">
                      Get to market quickly with MVP, then improve based on real user feedback.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-surface border border-accent/20 flex items-center justify-center">
                    <span className="text-accent font-mono text-lg">03</span>
                  </div>
                  <div>
                    <h4 className="text-md font-semibold text-text mb-1">Revenue-Focused</h4>
                    <p className="text-sm text-muted">
                      Every feature should serve a business objective. Measure what matters.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-surface border border-accent/20 flex items-center justify-center">
                    <span className="text-accent font-mono text-lg">04</span>
                  </div>
                  <div>
                    <h4 className="text-md font-semibold text-text mb-1">Production Grade</h4>
                    <p className="text-sm text-muted">
                      Write code that's maintainable, testable, and ready for production deployment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
