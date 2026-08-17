import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')
const DOCS_DIR = path.join(process.cwd(), 'content', 'docs')

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  readingTime: number
  content: string
}

export interface DocPage {
  slug: string
  title: string
  description: string
  order: number
  content: string
}

function readMarkdownDir(dir: string): { slug: string; data: Record<string, unknown>; content: string }[] {
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), 'utf8')
      const { data, content } = matter(raw)
      return { slug: file.replace(/\.md$/, ''), data, content }
    })
}

function estimateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length
  return Math.max(1, Math.round(words / 220))
}

/**
 * Frontmatter dates come from YAML, and js-yaml (gray-matter's parser)
 * auto-converts an unquoted `date: 2026-08-17` into a native UTC-midnight
 * `Date` object rather than leaving it as a string. `String(date)` on that
 * object calls `.toString()`, which renders in the *local* timezone — in
 * any timezone behind UTC that silently shows the wrong day (and sorts
 * wrong too, since it's no longer an ISO-lexicographic string). Always
 * normalize back to a plain "YYYY-MM-DD" using UTC components.
 */
function normalizeDate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10)
  return String(value ?? '')
}

export function getAllBlogPosts(): BlogPost[] {
  return readMarkdownDir(BLOG_DIR)
    .map(({ slug, data, content }) => ({
      slug,
      title: String(data.title ?? slug),
      description: String(data.description ?? ''),
      date: normalizeDate(data.date),
      tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
      readingTime: estimateReadingTime(content),
      content
    }))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getBlogPost(slug: string): BlogPost | null {
  return getAllBlogPosts().find((post) => post.slug === slug) ?? null
}

export function getAllDocs(): DocPage[] {
  return readMarkdownDir(DOCS_DIR)
    .map(({ slug, data, content }) => ({
      slug,
      title: String(data.title ?? slug),
      description: String(data.description ?? ''),
      order: Number(data.order ?? 999),
      content
    }))
    .sort((a, b) => a.order - b.order)
}

export function getDoc(slug: string): DocPage | null {
  return getAllDocs().find((doc) => doc.slug === slug) ?? null
}
