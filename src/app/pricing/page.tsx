import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowUpRight,
  CheckCircle2,
  Infinity as InfinityIcon,
  Layers3,
  ShieldCheck,
  Sparkles
} from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from '@/components/Reveal'
import { FaqAccordion } from '@/components/FaqAccordion'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Pricing | Bnbflight',
  description:
    'Simple Bnbflight pricing from $20 per property per month, with automatic volume discounts, 20% off annual billing, and a $4,000 one-time license.'
}

const pricingTiers = [
  {
    properties: '1–4',
    discount: 'Standard',
    perProperty: '$20',
    monthly: '$20–$80',
    annual: '$192–$768',
    accent: false
  },
  {
    properties: '5–9',
    discount: '20% off',
    perProperty: '$16',
    monthly: '$80–$144',
    annual: '$768–$1,382.40',
    accent: false
  },
  {
    properties: '10–14',
    discount: '30% off',
    perProperty: '$14',
    monthly: '$140–$196',
    annual: '$1,344–$1,881.60',
    accent: false
  },
  {
    properties: '15–19',
    discount: '40% off',
    perProperty: '$12',
    monthly: '$180–$228',
    annual: '$1,728–$2,188.80',
    accent: false
  },
  {
    properties: '20–49',
    discount: '50% off',
    perProperty: '$10',
    monthly: '$200–$490',
    annual: '$1,920–$4,704',
    accent: true
  }
]

const included = [
  'Full Bnbflight pricing engine',
  "Airbnb Similar Listings competitor scanning",
  'PriceLabs integration and publishing',
  'Calendar-wide optimization',
  'Recommendations with reasoning attached',
  'Market, occupancy, ADR, and booking-pace analytics',
  'Observe, Approve, and Automatic modes',
  'Deterministic safety governor',
  'Jarvis voice assistant',
  'Scheduled and on-demand optimization',
  'Local-first private desktop application',
  'All future properties inside your pricing tier'
]

const faqItems = [
  {
    q: 'How does the volume discount work?',
    a: 'Your per-property price automatically drops as your portfolio grows. Properties 1–4 are $20 each per month, 5–9 are $16 each, 10–14 are $14 each, 15–19 are $12 each, and 20–49 are $10 each. The applicable rate is applied to your portfolio based on the tier you are in.'
  },
  {
    q: 'What happens if I pay annually?',
    a: 'Annual billing takes another 20% off your subscription price. There are no reduced features or separate annual plans — it is simply the same Bnbflight subscription at a lower effective price.'
  },
  {
    q: 'Are features different between pricing tiers?',
    a: 'No. Every subscription tier gets the complete Bnbflight product. Pricing changes only with the number of properties you manage.'
  },
  {
    q: 'What happens when I reach 50 properties?',
    a: `Portfolios with 50 or more properties move to custom pricing. Email ${site.email} and we’ll structure the deployment around your portfolio.`
  },
  {
    q: 'What is the $4,000 one-time license?',
    a: 'The one-time license is for operators who prefer to purchase Bnbflight rather than maintain a recurring subscription. It is $4,000 once and is not priced by property count.'
  },
  {
    q: 'Do I still need PriceLabs?',
    a: 'Yes. Bnbflight uses PriceLabs as one of its pricing inputs and as the publishing path that ultimately syncs updated prices to Airbnb.'
  }
]

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-paper">
        <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40 mask-fade-b" />

        <div className="container-page relative pb-20 pt-16 text-center sm:pb-28 sm:pt-24">
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-coral" />
              Simple pricing. Every feature included.
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mx-auto mt-6 max-w-[900px] text-balance font-display text-[44px] font-medium leading-[1.04] tracking-tight text-ink sm:text-[58px] lg:text-[68px]">
              $20 per property.
              <br />
              <span className="italic text-coral">Less as you grow.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mx-auto mt-6 max-w-[650px] text-balance text-[17.5px] leading-relaxed text-ink-soft sm:text-[19px]">
              No feature gates. No complicated editions. The entire Bnbflight
              product is included — your price simply falls as your portfolio grows.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a href={`mailto:${site.email}`} className="btn-coral">
                Get Bnbflight
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.4} />
              </a>

              <Link href="#pricing" className="btn-secondary">
                See pricing
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mx-auto mt-10 flex max-w-[720px] flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[13.5px] font-medium text-ink-soft">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-moss" />
                Every feature included
              </span>

              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-moss" />
                Automatic volume discounts
              </span>

              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-moss" />
                20% off annually
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="border-t border-line bg-surface py-24 sm:py-32"
      >
        <div className="container-page">
          <Reveal className="mx-auto max-w-[650px] text-center">
            <span className="eyebrow">Volume pricing</span>

            <h2 className="mt-5 text-balance font-display text-[34px] font-medium leading-[1.15] text-ink sm:text-[44px]">
              The bigger your portfolio,
              <br className="hidden sm:block" /> the less each property costs.
            </h2>

            <p className="mt-5 text-[16.5px] leading-relaxed text-ink-soft">
              Your rate automatically drops as you grow. Annual billing takes
              another 20% off.
            </p>
          </Reveal>

          <Reveal delay={0.1} y={24} className="mt-14">
            <div className="overflow-hidden rounded-[28px] border border-line bg-paper shadow-sm">
              {/* Desktop headings */}
              <div className="hidden grid-cols-[1.05fr_1fr_1fr_1.2fr_1.3fr] border-b border-line bg-haze px-7 py-4 md:grid">
                <span className="text-[11.5px] font-semibold uppercase tracking-[0.09em] text-ink-faint">
                  Properties
                </span>
                <span className="text-[11.5px] font-semibold uppercase tracking-[0.09em] text-ink-faint">
                  Volume savings
                </span>
                <span className="text-[11.5px] font-semibold uppercase tracking-[0.09em] text-ink-faint">
                  Per property
                </span>
                <span className="text-[11.5px] font-semibold uppercase tracking-[0.09em] text-ink-faint">
                  Monthly total
                </span>
                <span className="text-[11.5px] font-semibold uppercase tracking-[0.09em] text-ink-faint">
                  Annual · 20% off
                </span>
              </div>

              {pricingTiers.map((tier) => (
                <div
                  key={tier.properties}
                  className={`relative grid gap-5 border-b border-line px-7 py-7 last:border-b-0 md:grid-cols-[1.05fr_1fr_1fr_1.2fr_1.3fr] md:items-center md:gap-0 ${
                    tier.accent ? 'bg-coral-light/40' : ''
                  }`}
                >
                  {tier.accent && (
                    <div className="absolute right-5 top-4 rounded-full bg-coral px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.08em] text-white md:static md:order-none md:mr-5 md:justify-self-start">
                      Best rate
                    </div>
                  )}

                  <div className={tier.accent ? 'md:hidden' : 'hidden'} />

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.09em] text-ink-faint md:hidden">
                      Properties
                    </p>
                    <p className="font-display text-[28px] font-medium text-ink">
                      {tier.properties}
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.09em] text-ink-faint md:hidden">
                      Volume savings
                    </p>
                    <p
                      className={`text-[14px] font-semibold ${
                        tier.discount === 'Standard'
                          ? 'text-ink-soft'
                          : 'text-moss'
                      }`}
                    >
                      {tier.discount}
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.09em] text-ink-faint md:hidden">
                      Per property
                    </p>
                    <p className="text-[20px] font-semibold text-ink">
                      {tier.perProperty}
                      <span className="ml-1 text-[12px] font-normal text-ink-faint">
                        /mo
                      </span>
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.09em] text-ink-faint md:hidden">
                      Monthly total
                    </p>
                    <p className="text-[15px] font-medium text-ink">
                      {tier.monthly}
                      <span className="text-ink-faint">/mo</span>
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.09em] text-ink-faint md:hidden">
                      Annual · 20% off
                    </p>
                    <p className="text-[15px] font-semibold text-coral-dark">
                      {tier.annual}
                      <span className="font-normal text-ink-faint">/yr</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mx-auto mt-5 max-w-[680px] text-center text-[12.5px] leading-relaxed text-ink-faint">
              Annual totals reflect a 20% discount from the equivalent monthly
              subscription. Your property count determines the applicable
              portfolio rate.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 50+ */}
      <section className="border-t border-line bg-paper py-24 sm:py-32">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-[30px] border border-line bg-ink px-7 py-10 sm:px-10 sm:py-12 lg:px-14">
              <div className="pointer-events-none absolute right-[-120px] top-[-170px] h-[400px] w-[400px] rounded-full bg-coral/10 blur-3xl" />

              <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-[650px]">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11.5px] font-medium text-white/60">
                    <Layers3 className="h-3.5 w-3.5 text-coral" />
                    50+ properties
                  </span>

                  <h2 className="mt-5 text-balance font-display text-[34px] font-medium leading-[1.1] text-white sm:text-[42px]">
                    Running a serious portfolio?
                    <br />
                    <span className="italic text-coral">Let’s price it properly.</span>
                  </h2>

                  <p className="mt-5 max-w-[600px] text-[16px] leading-relaxed text-white/60">
                    Portfolios with 50 or more properties move to custom
                    pricing, onboarding, and deployment terms built around the
                    way your operation actually works.
                  </p>
                </div>

                <a
                  href={`mailto:${site.email}?subject=Bnbflight%2050%2B%20Portfolio`}
                  className="btn-coral justify-self-start lg:justify-self-end"
                >
                  Talk to our team
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.4} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* One-time purchase */}
      <section className="border-t border-line bg-surface py-24 sm:py-32">
        <div className="container-page grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">Prefer to own it?</span>

            <h2 className="mt-5 text-balance font-display text-[34px] font-medium leading-[1.12] text-ink sm:text-[42px]">
              One payment.
              <br />
              <span className="italic text-coral">No property counter.</span>
            </h2>

            <p className="mt-5 max-w-[560px] text-[16.5px] leading-relaxed text-ink-soft">
              For operators who would rather purchase Bnbflight outright than
              maintain a recurring subscription.
            </p>
          </Reveal>

          <Reveal delay={0.1} y={24}>
            <div className="card relative overflow-hidden p-8 sm:p-10">
              <div className="pointer-events-none absolute right-[-70px] top-[-90px] h-[240px] w-[240px] rounded-full bg-coral-light blur-3xl" />

              <div className="relative">
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-coral-light text-coral-dark">
                      <InfinityIcon className="h-5 w-5" strokeWidth={1.9} />
                    </div>

                    <h3 className="mt-5 text-[20px] font-semibold text-ink">
                      One-Time License
                    </h3>

                    <p className="mt-1.5 text-[14px] text-ink-soft">
                      Purchase Bnbflight instead of subscribing.
                    </p>
                  </div>

                  <span className="rounded-full border border-line bg-haze px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-soft">
                    Unlimited properties
                  </span>
                </div>

                <div className="mt-9 flex items-end gap-2 border-b border-line pb-8">
                  <span className="font-display text-[58px] font-medium leading-none tracking-tight text-ink">
                    $4,000
                  </span>
                  <span className="pb-1 text-[14px] text-ink-faint">
                    one time
                  </span>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    'No recurring Bnbflight subscription',
                    'No per-property pricing',
                    'Full Bnbflight product',
                    'Private local installation'
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 text-[14px] text-ink-soft"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-moss" />
                      {item}
                    </div>
                  ))}
                </div>

                <a
                  href={`mailto:${site.email}?subject=Bnbflight%20One-Time%20License`}
                  className="btn-coral mt-8 inline-flex"
                >
                  Ask about the one-time license
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.4} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Everything included */}
      <section className="border-t border-line bg-paper py-24 sm:py-32">
        <div className="container-page">
          <Reveal className="max-w-[650px]">
            <span className="eyebrow">Nothing held back</span>

            <h2 className="mt-5 text-balance font-display text-[34px] font-medium leading-[1.15] text-ink sm:text-[42px]">
              One product.
              <br />
              <span className="italic text-coral">The whole thing.</span>
            </h2>

            <p className="mt-5 text-[16.5px] leading-relaxed text-ink-soft">
              We don’t make you upgrade just to unlock the feature that makes
              Bnbflight useful. Every subscription gets the complete product.
            </p>
          </Reveal>

          <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => (
              <RevealItem key={item}>
                <div className="card card-hover flex h-full items-start gap-3.5 p-5">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-moss/10 text-moss">
                    <CheckCircle2 className="h-4 w-4" strokeWidth={2} />
                  </div>

                  <span className="text-[14px] font-medium leading-relaxed text-ink-soft">
                    {item}
                  </span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-t border-line bg-surface py-24 sm:py-32">
        <div className="container-page grid gap-14 lg:grid-cols-3">
          <Reveal>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-azure-light text-azure">
              <Sparkles className="h-5 w-5" strokeWidth={1.8} />
            </div>
            <h3 className="mt-5 text-[19px] font-semibold text-ink">
              Cheap to start
            </h3>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
              One property starts at $20 per month. You don’t need a large
              portfolio to justify trying better pricing software.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-coral-light text-coral-dark">
              <Layers3 className="h-5 w-5" strokeWidth={1.8} />
            </div>
            <h3 className="mt-5 text-[19px] font-semibold text-ink">
              Cheaper as you grow
            </h3>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
              Volume discounts bring the price as low as $10 per property
              before the annual discount is even applied.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-moss/10 text-moss">
              <ShieldCheck className="h-5 w-5" strokeWidth={1.8} />
            </div>
            <h3 className="mt-5 text-[19px] font-semibold text-ink">
              No feature games
            </h3>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
              Your portfolio size changes the price. It does not change which
              Bnbflight features you’re allowed to use.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-paper py-24 sm:py-32">
        <div className="container-page grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <span className="eyebrow">Pricing FAQ</span>

            <h2 className="mt-5 text-balance font-display text-[32px] font-medium leading-[1.15] text-ink sm:text-[38px]">
              No fine-print maze.
            </h2>

            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              Still have a question? Email{' '}
              <a
                href={`mailto:${site.email}`}
                className="font-medium text-ink link-underline"
              >
                {site.email}
              </a>{' '}
              directly.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <FaqAccordion items={faqItems} />
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-line bg-ink py-24 sm:py-32">
        <div className="container-page">
          <Reveal className="mx-auto max-w-[52ch] text-center">
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-coral">
              Starting at $20/month
            </p>

            <h2 className="mt-5 text-balance font-display text-[34px] font-medium leading-[1.15] text-white sm:text-[44px]">
              Better pricing should cost less
              <br className="hidden sm:block" /> than one underpriced night.
            </h2>

            <p className="mx-auto mt-5 max-w-[44ch] text-[16px] leading-relaxed text-white/60">
              Tell us how many properties you manage. We’ll get Bnbflight
              running against your real listing data.
            </p>

            <a
              href={`mailto:${site.email}?subject=Getting%20Started%20with%20Bnbflight`}
              className="btn-coral mt-9 inline-flex"
            >
              Get Bnbflight
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.4} />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}