'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { site } from '@/lib/site'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'border-b border-line bg-paper/85 backdrop-blur-md' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-page flex h-[68px] items-center justify-between">
        <Link href="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image src="/images/logo.svg" alt={site.name} width={30} height={30} className="rounded-[8px]" priority />
          <span className="font-display text-[19px] font-semibold tracking-tight text-ink">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-[14.5px] font-medium text-ink-soft transition-colors duration-200 hover:bg-haze hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={`mailto:${site.email}`} className="btn-primary text-[13.5px]">
            Contact us <ArrowUpRight className="h-4 w-4" strokeWidth={2.4} />
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper px-5 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/70 py-3.5 text-[15px] font-medium text-ink-soft last:border-none"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a href={`mailto:${site.email}`} className="btn-primary mt-4 w-full text-[14px]">
            Contact us <ArrowUpRight className="h-4 w-4" strokeWidth={2.4} />
          </a>
        </div>
      )}
    </header>
  )
}
