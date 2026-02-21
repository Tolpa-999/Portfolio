'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { SiFacebook, SiGithub, SiLinkedin, SiX } from 'react-icons/si'

/**
 * Footer component with minimal branding and social links.
 */
export function Footer() {
  const socialLinks = [
    { name: 'GitHub', icon: SiGithub, url: 'https://github.com/Tolpa-999/' },
    { name: 'LinkedIn', icon: SiLinkedin, url: 'https://www.linkedin.com/in/mahmud-tolpa/' },
    { name: 'Facebook', icon: SiFacebook, url: 'https://x.com/tolpa' },
  ]

  return (
    <footer className="py-8 bg-primary border-t border-surface-700/30">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="font-bold text-text font-sans tracking-tight">
                Tolpa
              </span>
              <span className="text-muted">•</span>
              <span className="text-sm text-muted">
                 Full-Stack Engineer
              </span>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent transition-colors duration-300"
                  aria-label={link.name}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>

            <p className="text-sm text-muted">
              © {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}
