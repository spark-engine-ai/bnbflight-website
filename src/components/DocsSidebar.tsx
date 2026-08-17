'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BookOpen } from 'lucide-react'

export function DocsSidebar({ docs }: { docs: { slug: string; title: string }[] }) {
  const pathname = usePathname()

  return (
    <aside className="lg:sticky lg:top-24 lg:h-fit">
      <Link href="/docs" className="flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.1em] text-ink-faint">
        <BookOpen className="h-3.5 w-3.5" /> Documentation
      </Link>
      <nav className="mt-5 space-y-0.5 border-l border-line pl-4">
        {docs.map((doc, i) => {
          const href = `/docs/${doc.slug}`
          const active = pathname === href
          return (
            <Link
              key={doc.slug}
              href={href}
              className={`-ml-px block border-l-2 py-1.5 pl-4 text-[14px] transition-colors ${
                active
                  ? 'border-coral font-semibold text-ink'
                  : 'border-transparent text-ink-soft hover:border-line hover:text-ink'
              }`}
            >
              <span className="mr-2 font-mono text-[11px] text-ink-faint">{String(i + 1).padStart(2, '0')}</span>
              {doc.title}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
