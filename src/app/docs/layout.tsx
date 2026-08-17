import { DocsSidebar } from '@/components/DocsSidebar'
import { getAllDocs } from '@/lib/content'

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const docs = getAllDocs()

  return (
    <div className="container-page py-14 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
        <DocsSidebar docs={docs.map((d) => ({ slug: d.slug, title: d.title }))} />
        <div className="min-w-0">{children}</div>
      </div>
    </div>
  )
}
