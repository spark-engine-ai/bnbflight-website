import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from '@/components/Reveal'
import { getAllBlogPosts } from '@/lib/content'
import { formatDate } from '@/lib/format'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Blog',
  description: `Notes on Airbnb pricing, revenue management, and how ${site.name}'s pricing engine actually works.`,
  alternates: { canonical: '/blog' }
}

export default function BlogIndexPage() {
  const posts = getAllBlogPosts()

  return (
    <div className="container-page py-20 sm:py-28">
      <Reveal className="max-w-[62ch]">
        <span className="eyebrow">Blog</span>
        <h1 className="mt-5 text-balance font-display text-[38px] font-medium leading-[1.12] text-ink sm:text-[48px]">
          Notes on pricing an Airbnb listing well.
        </h1>
        <p className="mt-5 text-[16.5px] leading-relaxed text-ink-soft">
          Grounded explanations of how {site.name} actually prices a night — no growth-hacking filler.
        </p>
      </Reveal>

      <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2">
        {posts.map((post, i) => (
          <RevealItem key={post.slug} className={i === 0 ? 'sm:col-span-2' : ''}>
            <Link
              href={`/blog/${post.slug}`}
              className={`card card-hover group flex h-full flex-col p-8 ${i === 0 ? 'sm:flex-row sm:items-center sm:gap-10' : ''}`}
            >
              <div className="flex-1">
                <span className="text-[12.5px] font-medium uppercase tracking-[0.08em] text-ink-faint">
                  {formatDate(post.date)}
                  {' · '}
                  {post.readingTime} min read
                </span>
                <h2
                  className={`mt-3 font-display font-medium leading-snug text-ink transition-colors group-hover:text-coral ${
                    i === 0 ? 'text-[28px]' : 'text-[20px]'
                  }`}
                >
                  {post.title}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{post.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-haze px-3 py-1 text-[11.5px] font-medium uppercase tracking-[0.06em] text-ink-faint"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-coral">
                  Read post <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  )
}
