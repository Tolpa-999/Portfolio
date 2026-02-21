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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal delay={0.1}>
            <div className="space-y-8">
              <div className="w-24 h-24 rounded-2xl bg-surface border border-accent/20 flex items-center justify-center mb-6">
                <span className="text-5xl font-bold text-accent">T</span>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-text leading-relaxed">
                  Software Engineer, Web Developer, and Web Designer with nearly two years of experience in designing and developing modern, fast, and user-friendly websites and web platforms.
                </p>

                <p className="text-muted leading-relaxed">
                  I specialize in transforming ideas into real digital products, with a strong focus on clean code quality, user experience, and high performance — whether the project is a business website, a platform, an admin dashboard, or a fully integrated system.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-accent/20">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-accent">
                    <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm3 3h2v2H9V9zm3 0h2v2H9v-2zm3 0h2v2H9v-2z" fill="currentColor"/>
                  </svg>
                  <span className="text-sm text-muted">Software Engineer</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-accent/20">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-accent">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v12l9 9H5c0-1.1 0-2 .9-2V5c0-1.1 0-2 .9-2z" fill="currentColor"/>
                  </svg>
                  <span className="text-sm text-muted">Web Developer</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-accent/20">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-accent">
                    <path d="M12 3L1 9s-1 1h20s2 2h3l3-6H1v12z" fill="currentColor"/>
                  </svg>
                  <span className="text-sm text-muted">Web Designer</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-accent/20">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-accent">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
                  </svg>
                  <span className="text-sm text-muted">Full-Stack</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="space-y-8">
            {/* Technical Expertise */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-text font-sans">
                Technical Expertise
              </h3>

              <div className="space-y-4">
                <div className="bg-surface rounded-lg border border-surface-700/50 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-accent">
                        <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm3 3h2v2H9V9zm3 0h2v2H9v-2zm3 0h2v2H9v-2z" fill="currentColor"/>
                      </svg>
                    </div>
                    <h4 className="text-sm font-semibold text-accent uppercase tracking-wider">Front-End</h4>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    Modern websites with smooth, balanced, and interactive user interfaces that perform seamlessly across all devices. Expert in <span className="text-text">Next.js</span>, <span className="text-text">React.js</span>, <span className="text-text">TypeScript</span>, and <span className="text-text">Tailwind CSS</span>.
                  </p>
                </div>

                <div className="bg-surface rounded-lg border border-surface-700/50 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-accent">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3 3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.83 6-3.83s5.97 1.84 6 3.83c-1.29 1.94-3.5 3.22-6 3.22z" fill="currentColor"/>
                      </svg>
                    </div>
                    <h4 className="text-sm font-semibold text-accent uppercase tracking-wider">Back-End</h4>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    Powerful, secure, and scalable systems that give you full control over your platform's data and functionality, while ensuring strong user data protection. Built with <span className="text-text">Node.js</span>, <span className="text-text">Express</span>, and <span className="text-text">PostgreSQL</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Capabilities */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-text font-sans">
                Core Capabilities
              </h3>
              <ul className="space-y-3">
                {[
                  'Designing professional UI/UX interfaces that enhance user experience',
                  'Significantly optimizing website speed and performance',
                  'Developing fully responsive websites for mobile, tablet, and desktop',
                  'Deploying and managing projects professionally on servers with monitoring',
                  'Continuously improving websites to align with client needs and market demands'
                ].map((capability, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Call to Action */}
            <div className="bg-accent/5 rounded-lg border border-accent/20 p-6">
              <p className="text-sm text-muted leading-relaxed">
                If you have a project idea you want to build from scratch, or an existing website that needs development and improvement, I would be glad to work with you and turn your vision into a professional digital reality.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
