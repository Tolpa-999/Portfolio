# Tolpa Portfolio

A premium, performance-first portfolio website for Tolpa — SaaS Architect & Full-Stack Systems Engineer.

## Features

- **Dark Theme Only**: Deep navy (#0B1120) with electric cyan (#22D3EE) accents
- **Minimal-Elite Design**: Clean, restrained aesthetic with generous whitespace
- **Performance-First**: Optimized for Lighthouse 90+ scores
- **Subtle Animations**: Premium feel using Framer Motion
- **Fully Responsive**: Mobile-first design with smooth scrolling
- **TypeScript**: Type-safe codebase
- **Modern Stack**: Next.js 16, React 19, Tailwind CSS

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **TypeScript**: Full type coverage
- **Fonts**: Space Grotesk (headings), Inter (body), JetBrains Mono (code)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio-1/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with fonts
│   └── page.tsx             # Main page
├── components/
│   ├── animations/
│   │   ├── Counter.tsx      # Animated counter for metrics
│   │   ├── ScrollReveal.tsx # Scroll-triggered animations
│   │   └── StaggeredChildren.tsx
│   ├── sections/
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Metrics.tsx      # Proven results section
│   │   ├── CaseStudies.tsx  # Selected work section
│   │   ├── SystemsThinking.tsx
│   │   ├── MVPPhilosophy.tsx
│   │   ├── TechStack.tsx
│   │   ├── CTA.tsx          # Final CTA section
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Button.tsx       # Reusable button component
│   │   └── Card.tsx         # Card component
│   └── utils/
│       └── cn.ts            # Class name utility
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## Design System

### Colors

- Primary Background: `#0B1120` (deep navy)
- Secondary Surface: `#111827` (dark slate)
- Primary Accent: `#22D3EE` (electric cyan)
- CTA Accent: `#FBBF24` (soft gold)
- Primary Text: `#E5E7EB` (light gray)
- Muted Text: `#9CA3AF` (cool gray)

### Typography

- Headings: Space Grotesk (500–700, tight tracking)
- Body: Inter (400–500)
- Code/Technical: JetBrains Mono

### Spacing

8px base grid system: 8, 16, 24, 32, 48, 64, 96, 128px

## Performance Optimizations

- Lazy loading for components
- Optimized fonts with `display: swap`
- Image optimization (AVIF/WebP formats)
- Minimal JavaScript
- CSS-only animations where possible
- Code splitting with Next.js

## Deployment

This project can be deployed to:

- **Vercel** (recommended)
- **Netlify**
- Any Node.js hosting platform

```bash
# Deploy to Vercel
vercel
```

## License

© 2025 Tolpa. All rights reserved.
# Portfolio
