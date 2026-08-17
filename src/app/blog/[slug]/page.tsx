import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { MarkdownContent } from '@/components/MarkdownContent'
import { Reveal } from '@/components/Reveal'
import { getAllBlogPosts, getBlogPost } from '@/lib/content'
import { formatDate } from '@/lib/format'
import { site } from '@/lib/site'

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPost(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      url: `${site.url}/blog/${post.slug}`
    }
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Organization', name: site.name },
    publisher: { '@type': 'Organization', name: site.name }
  }

  const related = getAllBlogPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2)

  return (
    <article className="py-20 sm:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container-page max-w-[74ch]">
        <Reveal>
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-ink-soft link-underline">
            <ArrowLeft className="h-3.5 w-3.5" /> All posts
          </Link>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-haze px-3 py-1 text-[11.5px] font-medium uppercase tracking-[0.06em] text-ink-faint"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mt-5 text-balance font-display text-[34px] font-medium leading-[1.15] text-ink sm:text-[44px]">
            {post.title}
          </h1>
          <p className="mt-5 text-[13.5px] font-medium uppercase tracking-[0.06em] text-ink-faint">
            {formatDate(post.date)}
            {' · '}
            {post.readingTime} min read
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-12">
          <MarkdownContent content={post.content} />
        </Reveal>

        <Reveal delay={0.1} className="mt-16 rounded-2xl border border-line bg-haze p-8 text-center">
          <p className="text-[16px] font-medium text-ink">Want to see this running on your own listing?</p>
          <a href={`mailto:${site.email}`} className="btn-coral mt-5 inline-flex">
            Email {site.email} <ArrowUpRight className="h-4 w-4" strokeWidth={2.4} />
          </a>
        </Reveal>

        {related.length > 0 && (
          <div className="mt-20 border-t border-line pt-12">
            <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-ink-faint">Keep reading</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="card card-hover p-6">
                  <h3 className="text-[16px] font-semibold leading-snug text-ink">{p.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">{p.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}
