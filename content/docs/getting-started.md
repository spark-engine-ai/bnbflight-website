---
title: Getting Started with Bnbflight
description: What Bnbflight is, what you need before you begin, and what happens automatically the moment you save your API key.
order: 1
slug: getting-started
---

## Welcome to Bnbflight

Bnbflight is a private desktop app that manages Airbnb pricing for your listing through your existing PriceLabs account. It is not a website, and it is not something that runs on someone else's server in the cloud — it runs entirely on your own computer (Mac or Windows), and it connects to PriceLabs using a single piece of information called an API key, which is explained below.

Bnbflight is not a self-signup product. There is no public "create an account" page. Instead, someone sets the app up for you, or you are onboarded directly by the Bnbflight team. If you ever have a question, run into a problem, or just want a hand, you can reach the team any time by emailing team@xplorebnb.com.

Because everything runs on your own machine, your pricing data and your PriceLabs credentials stay under your control. Bnbflight simply talks to PriceLabs on your behalf, using the key you provide.

## What is PriceLabs?

PriceLabs is a dynamic pricing service that many Airbnb hosts already use to help set nightly rates. Bnbflight works together with PriceLabs rather than replacing it — Bnbflight reads your listing's data through PriceLabs, applies its own pricing model and safety checks, and then publishes any approved price changes back to PriceLabs, which passes them on to Airbnb.

## What you need before you start

Before you open Bnbflight for the first time, you'll need two things:

- **An existing PriceLabs account**, already connected to the Airbnb listing you want Bnbflight to manage.
- **A PriceLabs API key.** An API key is a long string of letters and numbers that acts like a secure password, letting one piece of software (in this case, Bnbflight) connect to another (PriceLabs) on your behalf. You'll find yours inside PriceLabs by going to Account, then Developer.

If you don't have a PriceLabs account yet, or you're not sure where to find your API key, email team@xplorebnb.com and the team can walk you through it.

## Saving your API key: what happens automatically

Setting up Bnbflight is deliberately simple. There is no setup wizard, no list of screens to fill out, and no manual configuration required. Here's exactly what happens:

1. You open Bnbflight and go to Settings.
2. You paste in your PriceLabs API key and save it.
3. The moment that key is recognized as valid, Bnbflight takes over automatically. Without you touching another screen, it will:
   - **Pull in your real listing** (or listings, if your PriceLabs account has more than one).
   - **Adopt sensible starting defaults** directly from that listing — your existing minimum and maximum price, your cleaning fee, and your location — so the app begins with numbers that already match how you price today.
   - **Run a full historical data pull**, gathering your listing's past booking and pricing history.
   - **Train its pricing model** on that history, so its recommendations are grounded in your listing's actual patterns rather than generic guesses.
   - **Run its first pricing pass**, producing an initial set of recommendations you can look at right away.

All of this happens in the background within moments of saving a valid key. You don't need to configure anything to see it work.

> **Good to know:** Bnbflight starts in "Observe" mode by default. In Observe mode, the app only shows you what it would do — it never changes a real price on Airbnb until you explicitly turn on a more active mode. This means it is completely safe to connect your key and look around; nothing will publish to Airbnb until you decide you're ready. You can read more about this on the Autopilot and Safety Governor page.

## Where to go next

Once your key is saved and that first pricing pass has run, you're ready to explore. Bnbflight is organized into a handful of tabs, each covering a different part of managing your listing:

- **Home** — your day-to-day dashboard, including the 3D calendar model and your payout summary.
- **Calendar** — a forward-looking view of every upcoming date and its recommended price.
- **Recommendations** — the detailed, line-by-line reasoning behind every price decision.
- **Market** — how your listing compares to similar nearby listings.
- **Reservations** — your confirmed bookings and booking patterns.
- **Geomap** — a live scan of nearby competitor prices straight from Airbnb's own map.
- **Settings** — where you control everything from your API key to autopilot mode to safety limits.

A good first stop after setup is the Home tab, since it gives you the clearest overall picture of your listing at a glance.
