import Image from 'next/image'

// The real dimensions every screenshot in public/images/app was captured at.
// Used to compute an aspect ratio that shows the FULL width of the image
// after the top strip is cropped — without this, a mismatched fixed aspect
// (e.g. 16/10) forces object-fit:cover to ALSO crop the left/right edges
// and more of the vertical frame than intended, which is what made these
// screenshots look like they were cutting off "so much of the image."
const SOURCE_WIDTH = 1920
const SOURCE_HEIGHT = 1020

/**
 * Wraps a real product screenshot in a light "browser window" chrome and
 * crops out the top identification strip (listing name/city/API status) via
 * object-position — every screenshot here is genuine, captured from the
 * running app, but that strip's specific identifying details and live
 * financial figures aren't part of the public site. The chrome itself is
 * light grey, matching an actual macOS/Chrome title bar — not a dark
 * terminal-style bar, which read as heavy and out of place on a light page.
 */
export function BrowserFrame({
  src,
  alt,
  focusTop = 92
}: {
  src: string
  alt: string
  focusTop?: number
}) {
  const aspect = `${SOURCE_WIDTH} / ${SOURCE_HEIGHT - focusTop}`

  return (
    <div className="group overflow-hidden rounded-2xl border border-line bg-surface shadow-lift">
      <div className="flex h-6 items-center gap-1.5 border-b border-line bg-haze px-3.5">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
      </div>
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: aspect }}>
        <div
          className="absolute inset-x-0"
          style={{ top: `-${focusTop}px`, height: `${SOURCE_HEIGHT}px` }}
        >
          <Image
            src={src}
            alt={alt}
            width={SOURCE_WIDTH}
            height={SOURCE_HEIGHT}
            className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            sizes="(min-width: 1024px) 900px, 100vw"
            priority={false}
          />
        </div>
      </div>
    </div>
  )
}
