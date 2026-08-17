import type { Metadata } from 'next'
import { ArrowUpRight, Mail, MessageSquare, ShieldCheck } from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from '@/components/Reveal'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: `${site.name} is private desktop software set up directly with our team. Email ${site.email} to get started.`,
  alternates: { canonical: '/contact' }
}

const points = [
  {
    icon: MessageSquare,
    title: 'Tell us about your listing',
    detail: 'A sentence or two about your property and where you host it is a great place to start.'
  },
  {
    icon: ShieldCheck,
    title: "We'll walk through Observe mode first",
    detail: 'Nothing publishes to your calendar until you decide it should — you stay in control the whole time.'
  },
  {
    icon: Mail,
    title: 'One email, real replies',
    detail: `${site.email} reaches our actual team, not a ticket queue.`
  }
]

export default function ContactPage() {
  return (
    <div className="container-page py-20 sm:py-28">
      <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <Reveal>
          <span className="eyebrow">Get in touch</span>
          <h1 className="mt-5 text-balance font-display text-[38px] font-medium leading-[1.12] text-ink sm:text-[48px]">
            Bnbflight is private software. Let's talk directly.
          </h1>
          <p className="mt-5 max-w-[52ch] text-[16.5px] leading-relaxed text-ink-soft">
            There's no self-serve signup — every host who runs Bnbflight was onboarded by our team, one listing
            at a time. Email us and we'll figure out together whether it's a fit for yours.
          </p>

          <a href={`mailto:${site.email}`} className="btn-coral mt-9">
            Email {site.email} <ArrowUpRight className="h-4 w-4" strokeWidth={2.4} />
          </a>

          <RevealGroup className="mt-16 space-y-6">
            {points.map((point) => (
              <RevealItem key={point.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-azure-light text-azure">
                  <point.icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-ink">{point.title}</p>
                  <p className="mt-1 text-[14px] leading-relaxed text-ink-soft">{point.detail}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Reveal>

        <Reveal delay={0.1} y={30}>
          <div className="card p-9">
            <p className="font-display text-[20px] font-medium text-ink">What to include in your email</p>
            <ul className="mt-5 space-y-3.5 text-[14.5px] leading-relaxed text-ink-soft">
              <li>· Where your listing is hosted (Airbnb, and whether you already use PriceLabs)</li>
              <li>· How many listings you're managing today</li>
              <li>· Windows or Mac, so we can point you to the right build</li>
              <li>· Anything specific you're hoping automated pricing solves for you</li>
            </ul>
            <div className="mt-8 rounded-xl border border-line bg-haze p-5">
              <p className="text-[13.5px] leading-relaxed text-ink-soft">
                Prefer to read first? Start with{' '}
                <a href="/docs/getting-started" className="font-medium text-ink link-underline">
                  Getting Started
                </a>{' '}
                in the docs, or browse{' '}
                <a href="/blog" className="font-medium text-ink link-underline">
                  the blog
                </a>{' '}
                for how the pricing engine actually thinks.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
