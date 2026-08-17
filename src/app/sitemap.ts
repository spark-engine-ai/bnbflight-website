import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'
import { getAllBlogPosts, getAllDocs } from '@/lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${site.url}/contact`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${site.url}/blog`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${site.url}/docs`, changeFrequency: 'monthly', priority: 0.8 }
  ]

  const blogRoutes: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly',
    priority: 0.6
  }))

  const docRoutes: MetadataRoute.Sitemap = getAllDocs().map((doc) => ({
    url: `${site.url}/docs/${doc.slug}`,
    changeFrequency: 'monthly',
    priority: 0.7
  }))

  return [...staticRoutes, ...blogRoutes, ...docRoutes]
}
