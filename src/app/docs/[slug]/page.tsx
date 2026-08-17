import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { MarkdownContent } from '@/components/MarkdownContent'
import { getAllDocs, getDoc } from '@/lib/content'
import { site } from '@/lib/site'

export function generateStaticParams() {
  return getAllDocs().map((doc) => ({ slug: doc.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const doc = getDoc(params.slug)
  if (!doc) return {}
  return {
    title: doc.title,
    description: doc.description,
    alternates: { canonical: `/docs/${doc.slug}` }
  }
}

export default function DocPage({ params }: { params: { slug: string } }) {
  const doc = getDoc(params.slug)
  if (!doc) notFound()

  const all = getAllDocs()
  const index = all.findIndex((d) => d.slug === doc.slug)
  const prev = index > 0 ? all[index - 1] : null
  const next = index < all.length - 1 ? all[index + 1] : null

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: doc.title,
    description: doc.description,
    author: { '@type': 'Organization', name: site.name }
  }

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="font-mono text-[12px] text-ink-faint">Doc {String(doc.order).padStart(2, '0')}</p>
      <h1 className="mt-2 text-balance font-display text-[32px] font-medium leading-[1.15] text-ink sm:text-[38px]">
        {doc.title}
      </h1>
      <p className="mt-3 text-[16px] leading-relaxed text-ink-soft">{doc.description}</p>

      <div className="mt-10">
        <MarkdownContent content={doc.content} />
      </div>

      <div className="mt-16 grid gap-3 border-t border-line pt-8 sm:grid-cols-2">
        {prev && (
          <Link
            href={`/docs/${prev.slug}`}
            className="card card-hover flex items-center gap-3 p-5 text-left"
          >
            <ArrowLeft className="h-4 w-4 shrink-0 text-ink-faint" />
            <div>
              <p className="text-[11.5px] font-medium uppercase tracking-[0.06em] text-ink-faint">Previous</p>
              <p className="text-[14.5px] font-medium text-ink">{prev.title}</p>
            </div>
          </Link>
        )}
        {next && (
          <Link
            href={`/docs/${next.slug}`}
            className={`card card-hover flex items-center justify-between gap-3 p-5 text-right ${!prev ? 'sm:col-start-2' : ''}`}
          >
            <div>
              <p className="text-[11.5px] font-medium uppercase tracking-[0.06em] text-ink-faint">Next</p>
              <p className="text-[14.5px] font-medium text-ink">{next.title}</p>
            </div>
            <ArrowRight className="h-4 w-4 shrink-0 text-ink-faint" />
          </Link>
        )}
      </div>
    </article>
  )
}
