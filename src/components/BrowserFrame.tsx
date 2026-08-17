import Image from 'next/image'

/**
 * Wraps a real product screenshot in a lightweight "app window" chrome and
 * crops out the top ~90px identification strip (listing name/city/API
 * status) via object-position — every screenshot here is genuine, captured
 * from the running app, but the specific listing's identifying details and
 * live financial figures in that strip aren't part of the public site.
 */
export function BrowserFrame({
  src,
  alt,
  focusTop = 92,
  aspect = '16/10'
}: {
  src: string
  alt: string
  focusTop?: number
  aspect?: string
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-line bg-[#0c0f14] shadow-lift">
      <div className="flex h-9 items-center gap-1.5 border-b border-white/10 bg-[#14171d] px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      </div>
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: aspect }}>
        <div className="absolute inset-0" style={{ top: `-${focusTop}px`, height: `calc(100% + ${focusTop}px)` }}>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            sizes="(min-width: 1024px) 900px, 100vw"
          />
        </div>
      </div>
    </div>
  )
}
