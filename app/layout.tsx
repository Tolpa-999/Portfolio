import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

// Space Grotesk for headings - bold, tight tracking
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
  preload: true,
})

// Inter for body text - clean, highly legible
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

// JetBrains Mono for code/technical labels
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  preload: true,
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Tolpa | Full-Stack Systems Engineer',
  description: 'I turn business ideas into scalable SaaS platforms that generate revenue. Multi-tenant architecture, high-converting systems, fast MVP launches, production-ready infrastructure.',
  keywords: ['Full-Stack Developer', 'Multi-tenant SaaS', 'Next.js', 'PostgreSQL', 'Systems Engineer'],
  openGraph: {
    title: 'Tolpa | Full-Stack Engineer',
    description: 'I turn business ideas into scalable SaaS platforms that generate revenue.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tolpa | Full-Stack Engineer',
    description: 'I turn business ideas into scalable SaaS platforms that generate revenue.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
