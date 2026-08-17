import Link from 'next/link'
import Image from 'next/image'
import { Mail } from 'lucide-react'
import { site } from '@/lib/site'

const columns = [
  {
    heading: 'Product',
    links: [
      { href: '/#product', label: 'Features' },
      { href: '/#how-it-works', label: 'How it works' },
      { href: '/#safety', label: 'Safety governor' },
      { href: '/#faq', label: 'FAQ' }
    ]
  },
  {
    heading: 'Learn',
    links: [
      { href: '/blog', label: 'Blog' },
      { href: '/docs', label: 'Documentation' },
      { href: '/docs/getting-started', label: 'Getting started' },
      { href: '/docs/jarvis-voice-assistant', label: 'Jarvis voice assistant' }
    ]
  },
  {
    heading: 'Company',
    links: [
      { href: '/contact', label: 'Contact us' },
      { href: `mailto:${site.email}`, label: site.email }
    ]
  }
]

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/images/logo.svg" alt={site.name} width={28} height={28} className="rounded-[7px]" />
              <span className="font-display text-[18px] font-semibold text-ink">{site.name}</span>
            </Link>
            <p className="mt-4 max-w-[30ch] text-[14px] leading-relaxed text-ink-faint">
              A private desktop revenue engine for one Airbnb listing at a time. Runs on your machine, not our
              servers.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-flex items-center gap-2 text-[13.5px] font-medium text-ink-soft link-underline"
            >
              <Mail className="h-3.5 w-3.5" /> {site.email}
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-faint">{col.heading}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-ink-soft transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-7 text-[12.5px] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. Private desktop software — by invitation and direct contact only.</p>
          <p>Built for hosts who want to see the math, not just trust it.</p>
        </div>
      </div>
    </footer>
  )
}
