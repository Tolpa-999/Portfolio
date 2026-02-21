'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiFigma, SiTypescript,
  SiJavascript, SiGraphql, SiPostgresql, SiDocker, SiMongodb,
  SiLinux, SiNginx, SiGit, SiPostman, SiNodedotjs
} from 'react-icons/si'

interface Tool {
  name: string
  icon: any
  color: string
}

/**
 * Tools section with scrollable icons using authentic brand colors.
 * Shows all tools and technologies in an infinite horizontal scroll.
 */
export function Tools() {
  const tools: Tool[] = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Linux', icon: SiLinux, color: '#FCC624' },
    { name: 'Nginx', icon: SiNginx, color: '#009639' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  ]

  // Double the array for smooth infinite scroll (3 copies needed for seamless loop)
  const scrollTools = [...tools, ...tools, ...tools]

  return (
    <section className="py-16 bg-surface/30 relative overflow-hidden">
      <ScrollReveal>
        <h2 className="text-2xl md:text-3xl font-bold font-sans tracking-tight text-center mb-12">
          Tools & Technologies
        </h2>
      </ScrollReveal>

      {/* Infinite scroll container */}
      <div className="relative">
        {/* Gradient fade on left */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface/30 to-transparent z-10" />

        {/* Gradient fade on right */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface/30 to-transparent z-10" />

        {/* Scrolling track */}
        <div className="flex items-center overflow-hidden">
          <div className="flex items-center gap-8 md:gap-12 animate-scroll p-[3px]">
            {scrollTools.map((tool, index) => (
              <div
                key={`${tool.name}-${index}`}
                className="flex-shrink-0 group relative"
              >
                <div
                  className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-surface border border-surface-700/50 flex items-center justify-center transition-all duration-300 group-hover:border-accent/50 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                  title={tool.name}
                >
                  <tool.icon size={28} style={{ color: tool.color }} className="transition-opacity duration-300 opacity-90 group-hover:opacity-100" />
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  <span className="text-xs text-muted bg-surface px-2 py-1 rounded border border-surface-700/50">
                    {tool.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
