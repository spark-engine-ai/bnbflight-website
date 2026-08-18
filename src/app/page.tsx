import Link from 'next/link'
import {
  ArrowUpRight,
  Boxes,
  CalendarRange,
  ListChecks,
  LineChart,
  CalendarClock,
  Map as MapIcon,
  ShieldCheck,
  Mic,
  RefreshCw,
  Lock,
  Gauge,
  SlidersHorizontal,
  CheckCircle2
} from 'lucide-react'
import { Hero3D } from '@/components/Hero3D'
import { Reveal, RevealGroup, RevealItem } from '@/components/Reveal'
import { FeatureShowcase } from '@/components/FeatureShowcase'
import { FaqAccordion } from '@/components/FaqAccordion'
import { BrowserFrame } from '@/components/BrowserFrame'
import { site } from '@/lib/site'
import { getAllBlogPosts } from '@/lib/content'
import { formatDate } from '@/lib/format'

const integrations = [
  'PriceLabs',
  "Airbnb Geo-map",
  'Groq',
  'Claude',
  'Open AI',
  'ElevenLabs'
]

const cycleSteps = [
  {
    title: 'Ingest',
    detail: 'Fresh calendar, reservation, and market data pulled straight from PriceLabs.'
  },
  {
    title: 'Scan the competitor map',
    detail: "Airbnb's own “Similar listings” map is read for every open date, paced slowly on purpose."
  },
  {
    title: 'Solve the whole calendar',
    detail: 'A booking-probability model and an equilibrium solver reason about every date together, not one at a time.'
  },
  {
    title: 'Average three signals',
    detail: "PriceLabs' baseline, the live competitor scan, and the algorithm's own price are blended into one number."
  },
  {
    title: 'Safety governor review',
    detail: 'Every proposed price is checked against hard floors, ceilings, and change limits before it can go out.'
  },
  {
    title: 'Publish, then sync',
    detail: 'The full horizon updates in PriceLabs, then PriceLabs’ own sync pushes it to Airbnb automatically.'
  }
]

const safetyPoints = [
  {
    icon: Lock,
    title: 'Hard floor and ceiling',
    detail: 'An absolute minimum and maximum price the algorithm can never cross, set by you.'
  },
  {
    icon: Gauge,
    title: 'Change limits, every run',
    detail: 'A maximum percent a price can move up or down in a single pass, plus a cap on discount versus baseline.'
  },
  {
    icon: ShieldCheck,
    title: 'Protected dates & lead time',
    detail: 'Dates you mark as off-limits stay untouched, and near-term bookings are shielded from last-minute swings.'
  },
  {
    icon: SlidersHorizontal,
    title: 'Three levels of trust',
    detail: 'Observe, Approve, or Automatic — you choose exactly how much the app is allowed to do without you.'
  }
]

const faqItems = [
  {
    q: 'Is Bnbflight a website or an app I install?',
    a: 'Bnbflight is a private desktop application — it installs on your own Windows or Mac computer and runs there. There is no browser dashboard and no shared cloud environment holding your data.'
  },
  {
    q: 'Where does my data actually live?',
    a: 'On your machine, in a local database the app manages itself. Your PriceLabs API key is encrypted locally and only ever used to talk directly to PriceLabs’ own API — it never passes through our servers.'
  },
  {
    q: 'Can I try it without handing over full control?',
    a: 'Yes — Observe mode shows every recommendation the algorithm would make without publishing anything. You can move to Approve mode (you click to publish) whenever you’re ready, and Automatic mode only once you’re comfortable.'
  },
  {
    q: 'What stops it from discounting my listing into the ground?',
    a: 'The safety governor — a deterministic set of rules, not a model — enforces a hard floor price, a maximum discount versus baseline, and a maximum change per run, on every single price, in every autopilot mode, with no exceptions.'
  },
  {
    q: 'How is this different from just using PriceLabs on its own?',
    a: "Bnbflight treats PriceLabs' price as one of three independent inputs, not the final answer. It also reads Airbnb's own live competitor map and runs its own booking-probability and equilibrium-solving algorithm, then averages all three before anything publishes."
  },
  {
    q: 'How do I get started?',
    a: `Bnbflight is private software, set up directly with our team rather than a self-serve signup. Email ${site.email} and we’ll walk through whether it’s a fit for your listing.`
  }
]

export default function HomePage() {
  const posts = getAllBlogPosts().slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-paper">
        <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40 mask-fade-b" />
        <div className="container-page relative grid items-center gap-10 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:pb-28 lg:pt-24">
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                Private desktop app for one Airbnb listing at a time
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-6 text-balance font-display text-[44px] font-medium leading-[1.06] tracking-tight text-ink sm:text-[58px] lg:text-[62px]">
                Your Airbnb, priced by a{' '}
                <span className="italic text-coral">machine that shows its work.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-[54ch] text-balance text-[17.5px] leading-relaxed text-ink-soft sm:text-[19px]">
                {site.description}
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href={`mailto:${site.email}`} className="btn-coral">
                  Contact our team <ArrowUpRight className="h-4 w-4" strokeWidth={2.4} />
                </a>
                <Link href="#how-it-works" className="btn-secondary">
                  See how it prices a night
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-8 text-[13px] font-medium uppercase tracking-[0.1em] text-ink-faint">
                Runs on your machine, not ours
              </p>
              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                {integrations.map((name) => (
                  <span key={name} className="text-[13.5px] font-medium text-ink-soft">
                    {name}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} y={30} className="relative">
            <div className="relative aspect-[4/3.4] w-full">
              <Hero3D className="absolute inset-0 h-full w-full" />
              <div className="absolute left-5 top-5 rounded-full border border-line bg-surface/90 px-3 py-1.5 text-[11.5px] font-medium text-ink-soft backdrop-blur">
                Jarvis, built in — ready to help
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Product overview */}
      <section id="product" className="border-t border-line bg-surface py-24 sm:py-32">
        <div className="container-page">
          <Reveal className="max-w-[62ch]">
            <span className="eyebrow">Every tab, explained</span>
            <h2 className="mt-5 text-balance font-display text-[34px] font-medium leading-[1.15] text-ink sm:text-[42px]">
              One dashboard. Every real number your listing produces.
            </h2>
            <p className="mt-5 text-[16.5px] leading-relaxed text-ink-soft">
              These are genuine screenshots from the running app — not mockups. Every chart, cube, and table
              you see here is real product surface, showing sample data from an active listing.
            </p>
          </Reveal>

          <div className="mt-20 space-y-28">
            <FeatureShowcase
              eyebrow="Home tab"
              icon={<Boxes className="h-4 w-4" />}
              title="Watch three months of pricing move in real 3D."
              description="The Home tab's centerpiece is a real, interactive 3D model — three stacked calendars of cubes, one for last month, this month, and next month. Every cube is one day: its height is that day's live price, its color shows booked, available, or blocked. When a pricing run changes a price, you watch the cube ease to its new height instead of a number just jumping."
              bullets={[
                'Three stacked grids: last month, this month, next month, all at once',
                'Cube height = live price, color = booked / available / blocked',
                'Paid Out, Pending Payout, Cleaning Fees, and Rent kept as separate honest numbers — never mashed into a single invented "profit"',
                'One-click Optimize and Sync buttons, plus a live Latest Run summary'
              ]}
              image="/images/app/home-3d-model.png"
              imageAlt="Bnbflight Home tab showing the 3D stacked-cube pricing model"
            />

            <FeatureShowcase
              eyebrow="Calendar tab"
              icon={<CalendarRange className="h-4 w-4" />}
              title="A full forward calendar, colored by opportunity."
              description="See months of availability at once as a heatmap, a 3D terrain, or a plain table — your choice. Recommended prices are shaded so the nights worth paying attention to jump out immediately, alongside revenue potential and event-pressured nights the app has detected."
              bullets={[
                'Heatmap, 3D terrain, or table view, switchable any time',
                'Nights available, mean recommended price, and total revenue potential at a glance',
                'Event-pressured nights flagged automatically from detected local demand signals'
              ]}
              image="/images/app/calendar-heatmap.png"
              imageAlt="Bnbflight Calendar tab showing a color-coded forward calendar heatmap"
              reverse
              
            />

            <FeatureShowcase
              eyebrow="Recommendations tab"
              icon={<ListChecks className="h-4 w-4" />}
              title="Every price change, with the reasoning attached."
              description="Nothing here is a black box. Every date shows the baseline price, Bnbflight's recommended price, the percent change, a confidence bar, the estimated dollar impact, and exactly why it's Auto-approved, Blocked, or Pending — with bulk approve, reject, and a review-and-publish step."
              bullets={[
                'Baseline vs. recommended price, percent change, and confidence for every date',
                'Auto-approved / Blocked / Pending status with the reason always visible',
                'Filter by changed, pending, or blocked; bulk-approve in one pass'
              ]}
              image="/images/app/recommendations.png"
              imageAlt="Bnbflight Recommendations tab listing per-date pricing decisions"
              
            />

            <FeatureShowcase
              eyebrow="Market tab"
              icon={<LineChart className="h-4 w-4" />}
              title="Know exactly where you sit against the market."
              description="A live percentile band shows where nearby listings are priced against your own rate over time, your ADR gap versus the market median, and occupancy compared to the market broken out by how far in advance guests are booking."
              bullets={[
                '25th–75th percentile market band plotted against your price',
                'ADR gap versus market median, tracked over your whole horizon',
                'Occupancy vs. market, split by booking lead-time window'
              ]}
              image="/images/app/market.png"
              imageAlt="Bnbflight Market tab comparing pricing and occupancy against nearby listings"
              reverse
              
            />

            <FeatureShowcase
              eyebrow="Reservations tab"
              icon={<CalendarClock className="h-4 w-4" />}
              title="Your real booking behavior, not guesses."
              description="Confirmed stays, booked revenue, realized ADR, and mean stay length, plus a booking-pace curve showing how far out guests actually book and a full reservation ledger you can scan in seconds."
              bullets={[
                'Booking pace: the real share of stays booked by days-before-check-in',
                'Length-of-stay distribution across every confirmed reservation',
                'A full ledger — check-in date, nights, status, revenue, lead time'
              ]}
              image="/images/app/reservations.png"
              imageAlt="Bnbflight Reservations tab showing booking pace and a reservation ledger"
              
            />

            <FeatureShowcase
              eyebrow="Geomap tab"
              icon={<MapIcon className="h-4 w-4" />}
              title="Reads Airbnb's own map. Not a scraped guess."
              description="For every open date up to 90 days out, Bnbflight opens the exact 'Similar listings' map a guest would see on Airbnb, reads real nearby prices and positions, and plots them in an actual 3D scene — paced deliberately slowly so it never behaves like a bot."
              bullets={[
                'Reads Airbnb’s own live competitor map, not third-party estimates',
                'A genuine 3D visualization of nearby listings, positioned and priced',
                'Randomized 40–95 second pacing between scans, by design'
              ]}
              image="/images/app/geomap-3d.png"
              imageAlt="Bnbflight Geomap tab showing a 3D visualization of nearby competitor listings"
              reverse
              
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-t border-line bg-paper py-24 sm:py-32">
        <div className="container-page">
          <Reveal className="max-w-[62ch]">
            <span className="eyebrow">The pricing cycle</span>
            <h2 className="mt-5 text-balance font-display text-[34px] font-medium leading-[1.15] text-ink sm:text-[42px]">
              Three times a day, at the exact minutes you choose.
            </h2>
            <p className="mt-5 text-[16.5px] leading-relaxed text-ink-soft">
              No vague "every few hours." You set the clock times — say 9:00am, 2:00pm, and 8:00pm — and
              this exact sequence runs, every time, whether it fires on schedule or you press Optimize yourself.
            </p>
          </Reveal>

          <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cycleSteps.map((step, i) => (
              <RevealItem key={step.title}>
                <div className="card card-hover h-full p-7">
                  <span className="font-display text-[15px] text-coral">0{i + 1}</span>
                  <h3 className="mt-3 text-[18px] font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-soft">{step.detail}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-8">
            <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface px-6 py-4">
              <RefreshCw className="h-4 w-4 shrink-0 text-coral" />
              <p className="text-[14px] text-ink-soft">
                Prefer to run it yourself right now? One click on <strong className="text-ink">Optimize</strong>{' '}
                runs this exact same cycle on demand — and a separate <strong className="text-ink">Sync</strong>{' '}
                button pushes to Airbnb any time, independent of the schedule.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Safety */}
      <section id="safety" className="border-t border-line bg-surface py-24 sm:py-32">
        <div className="container-page grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">The safety governor</span>
            <h2 className="mt-5 text-balance font-display text-[34px] font-medium leading-[1.15] text-ink sm:text-[42px]">
              Autonomous doesn't mean unsupervised.
            </h2>
            <p className="mt-5 text-[16.5px] leading-relaxed text-ink-soft">
              Every price the algorithm ever proposes — in any autopilot mode — passes through a
              deterministic rules layer before it can reach PriceLabs. Not a model, not a guess: fixed rules you
              set once and can change any time.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                'Every publish is read back afterward and checked against what was intended',
                'Publishing is rate-limited to at most once per hour per listing',
                'You choose Observe, Approve, or Automatic — and can change it any time'
              ].map((line) => (
                <li key={line} className="flex gap-3 text-[14.5px] text-ink-soft">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-moss" />
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>

          <RevealGroup className="grid gap-5 sm:grid-cols-2">
            {safetyPoints.map((point) => (
              <RevealItem key={point.title}>
                <div className="card card-hover h-full p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-azure-light text-azure">
                    <point.icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-4 text-[16px] font-semibold text-ink">{point.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{point.detail}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Jarvis */}
      <section className="border-t border-line bg-paper py-24 sm:py-32">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-coral-light text-coral-dark">
              <Mic className="h-6 w-6" strokeWidth={1.8} />
            </div>
            <h2 className="mt-6 text-balance font-display text-[32px] font-medium leading-[1.15] text-ink sm:text-[38px]">
              Ask Jarvis. Out loud. Get a real answer.
            </h2>
            <p className="mt-4 text-[16.5px] leading-relaxed text-ink-soft">
              Hold a key, ask "what's my occupancy this month" or "did the last pricing run finish," and release
              to hear the answer — pulled from your listing's real, current data. Jarvis runs on Groq,
              Deepgram, and ElevenLabs, and can also jump to a screen or kick off a new Optimize run when you ask.
            </p>
            <p className="mt-4 text-[14px] text-ink-faint">
              All three keys stay on your machine, same as your PriceLabs key.
            </p>
          </Reveal>
          <Reveal delay={0.1} y={30}>
            <div className="card p-10">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 animate-float items-center justify-center rounded-full bg-azure text-white shadow-glow">
                  <Mic className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-ink-faint">Push to talk</p>
                  <p className="mt-1 text-[16px] font-medium text-ink">Hold. Ask. Release.</p>
                </div>
              </div>
              <div className="mt-8 space-y-3">
                {['"What did the competitor scan just find?"', '"Are there any prices pending my approval?"', '"Run an optimization now."'].map(
                  (line) => (
                    <div key={line} className="rounded-xl border border-line bg-haze px-4 py-3 text-[14.5px] text-ink-soft">
                      {line}
                    </div>
                  )
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Blog teaser */}
      <section className="border-t border-line bg-surface py-24 sm:py-32">
        <div className="container-page">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow">From the blog</span>
              <h2 className="mt-5 font-display text-[32px] font-medium text-ink sm:text-[38px]">
                Notes on pricing your listing well.
              </h2>
            </div>
            <Link href="/blog" className="btn-secondary">
              Read the blog <ArrowUpRight className="h-4 w-4" strokeWidth={2.4} />
            </Link>
          </Reveal>

          <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <RevealItem key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="card card-hover group flex h-full flex-col p-7">
                  <span className="text-[12.5px] font-medium uppercase tracking-[0.08em] text-ink-faint">
                    {formatDate(post.date, 'short')}
                    {' · '}
                    {post.readingTime} min read
                  </span>
                  <h3 className="mt-3 text-[18px] font-semibold leading-snug text-ink transition-colors group-hover:text-coral">
                    {post.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[14.5px] leading-relaxed text-ink-soft">{post.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-coral">
                    Read post <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-line bg-paper py-24 sm:py-32">
        <div className="container-page grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-5 text-balance font-display text-[32px] font-medium leading-[1.15] text-ink sm:text-[38px]">
              Straight answers before you reach out.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              Still have a question? Email{' '}
              <a href={`mailto:${site.email}`} className="font-medium text-ink link-underline">
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
          <Reveal className="mx-auto max-w-[46ch] text-center">
            <h2 className="text-balance font-display text-[34px] font-medium leading-[1.15] text-white sm:text-[44px]">
              Let's see what it does with your listing's real numbers.
            </h2>
            <p className="mx-auto mt-5 max-w-[42ch] text-[16px] leading-relaxed text-white/60">
              Bnbflight is private software — no self-serve signup. Email our team and we'll walk through it
              together.
            </p>
            <a href={`mailto:${site.email}`} className="btn-coral mt-9 inline-flex">
              Email {site.email} <ArrowUpRight className="h-4 w-4" strokeWidth={2.4} />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
