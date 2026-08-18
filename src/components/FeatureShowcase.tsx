import type { ReactNode } from 'react'
import { BrowserFrame } from './BrowserFrame'
import { Reveal } from './Reveal'

export interface FeatureShowcaseProps {
  eyebrow: string
  title: string
  description: string
  bullets: string[]
  image: string
  imageAlt: string
  reverse?: boolean
  icon?: ReactNode
}

export function FeatureShowcase({
  eyebrow,
  title,
  description,
  bullets,
  image,
  imageAlt,
  reverse,
  icon
}: FeatureShowcaseProps) {
  return (
    <div
      className={`grid items-center gap-12 lg:gap-16 ${
        reverse
          ? 'lg:grid-cols-[1.15fr_0.85fr] lg:[&>*:first-child]:order-2'
          : 'lg:grid-cols-[0.85fr_1.15fr]'
      }`}
    >
      <Reveal className="min-w-0">
        <div className="flex items-center gap-2.5 text-coral-dark">
          {icon}
          <span className="text-[13px] font-semibold uppercase tracking-[0.14em]">
            {eyebrow}
          </span>
        </div>

        <h3 className="mt-4 text-balance font-display text-[32px] font-medium leading-[1.15] text-ink sm:text-[38px]">
          {title}
        </h3>

        <p className="mt-4 text-[16.5px] leading-relaxed text-ink-soft">
          {description}
        </p>

        <ul className="mt-6 space-y-3.5">
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-3 text-[15px] leading-relaxed text-ink-soft"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.1} y={30} className="min-w-0">
        <BrowserFrame src={image} alt={imageAlt} />
      </Reveal>
    </div>
  )
}