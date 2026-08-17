import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from '@/components/Reveal'
import { getAllDocs } from '@/lib/content'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Documentation',
  description: `Plain-language documentation for every tab and setting in ${site.name} — no technical background required.`,
  alternates: { canonical: '/docs' }
}

export default function DocsIndexPage() {
  const docs = getAllDocs()

  return (
    <div>
      <Reveal className="max-w-[62ch]">
        <span className="eyebrow">Documentation</span>
        <h1 className="mt-5 text-balance font-display text-[36px] font-medium leading-[1.15] text-ink sm:text-[44px]">
          Everything explained in plain language.
        </h1>
        <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">
          Written for hosts, not engineers. Every tab, every setting, every button — what it does and why it's
          there.
        </p>
      </Reveal>

      <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2">
        {docs.map((doc) => (
          <RevealItem key={doc.slug}>
            <Link href={`/docs/${doc.slug}`} className="card card-hover group flex h-full flex-col p-6">
              <span className="font-mono text-[12px] text-ink-faint">{String(doc.order).padStart(2, '0')}</span>
              <h2 className="mt-2 text-[17px] font-semibold leading-snug text-ink transition-colors group-hover:text-coral">
                {doc.title}
              </h2>
              <p className="mt-2 flex-1 text-[14px] leading-relaxed text-ink-soft">{doc.description}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-coral">
                Read <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  )
}
