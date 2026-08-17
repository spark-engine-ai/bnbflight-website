---
title: A Day in the Life of Bnbflight's Pricing Engine
description: A plain-language walkthrough of exactly what happens during one of Bnbflight's three daily pricing cycles, from data pull to Airbnb sync.
date: 2026-07-22
tags: [pricing, automation]
---

## Three fixed times, not a rolling timer

Bnbflight's pricing engine runs on a schedule the host sets: exactly three operator-chosen times a day, at clock times the host picks — say, 9am, 2pm, and 8pm. It's worth pausing on why that's specific and not vague. This isn't "every few hours" on some rolling internal timer that drifts around depending on when the app last happened to check in. It's three fixed appointments a day, chosen by the host, that the engine keeps every time.

A host can also trigger that exact same full cycle on demand at any point, using the one-click Optimize button — useful right after making a manual change, or any time it's worth getting a fresh read before the next scheduled run. And separately, a one-click Sync button lets a host manually push a PriceLabs-to-Airbnb sync at any time, without waiting on a full pricing cycle at all.

Here's what actually happens inside one of those three daily runs, from start to finish.

## Step one: pulling fresh data

The cycle opens by pulling current data — the latest state of the listing's own calendar, recent bookings, and whatever has changed since the last run. This is the foundation everything downstream depends on: the Bayesian booking-probability model needs current booking history to reason from, and the calendar solver needs to know exactly which dates are actually still open before it can price them.

## Step two: re-scanning the competitor map

Next, Geomap re-scans Airbnb's own "Similar listings" map for every currently unbooked date, up to 90 days out — reading the same live map a guest browsing the listing would see, not a stored dataset from an earlier point in time. As covered in more detail elsewhere, this scan moves deliberately, with a randomized 40-to-95-second pause between each date, so the pattern never looks automated to Airbnb. That means this step is the slowest part of the cycle by design — a tradeoff made in favor of data that's both current and gathered respectfully, rather than rushed.

The result is a fresh read of exactly what nearby comparable listings are actually charging for each specific date, right now — not what they were charging at the last scheduled scrape from some third-party service.

## Step three: the algorithm reasons about the whole calendar at once

With fresh booking data and a fresh competitor read in hand, the engine re-solves the entire pricing horizon — not date by date, but as a connected system. The Bayesian booking-probability model estimates how likely each date is to book, based on the listing's own history. The calendar-graph-coordinated solver prices every date with an eye on its neighbors, so that a price on one night properly accounts for its effect on the nights next to it and on the stay-length patterns guests actually book. Bellman backward-induction option values estimate what each night is genuinely worth given everything that could still happen before check-in. And Monte Carlo simulation runs thousands of possible booking futures across the horizon, checking that the proposed prices actually hold up across a wide range of outcomes rather than just looking good in one projected scenario.

That algorithmic view is then blended with PriceLabs' own baseline price and the fresh Geomap competitor read into a single recommended price per date — an average across all three signals, weighted according to however the host has configured it.

## Step four: the safety governor reviews everything

Before a single price is allowed to publish, every proposed change passes through the safety governor — the same fixed, deterministic checks every time, regardless of autopilot mode. Hard floor and ceiling prices. A maximum percent change for this run. A maximum discount versus baseline. Hysteresis, so a price doesn't flip back and forth run after run. Protected dates that are never touched. A minimum lead time before check-in, below which dates are left alone. A cap on the total number of dates that can change in one publish. Alongside these fixed limits, each recommendation's confidence score is checked, with low-confidence or unusually large changes held to a higher bar before they're allowed through automatically.

What happens next depends on the autopilot mode the host has chosen. In Observe mode, the recommendations are simply shown — nothing publishes. In Approve mode, everything that cleared the governor now waits in the Recommendations tab for a human to review and click publish, individually or in bulk. In Automatic mode, everything that passed the governor and cleared its confidence bar publishes without any click required.

## Step five: the full horizon publishes to PriceLabs

Once a batch of prices is approved — automatically or by a human click — the full updated pricing horizon publishes back to PriceLabs. Afterward, Bnbflight reads the values back from PriceLabs and compares them against what was actually intended. If anything doesn't match, it's flagged rather than silently assumed to have gone through correctly. As a final backstop, publishes are capped at once per hour per listing, regardless of how many things might request one, specifically to prevent runaway repeated changes.

## Step six: PriceLabs syncs to Airbnb, automatically

The last step happens without the host lifting a finger. The PriceLabs Sync Bot — a small, scripted, purely mechanical automation with no decision-making of its own — presses PriceLabs' own "Sync Now" button, pushing the newly published prices through to Airbnb. This is the same button a host would otherwise need to remember to click manually after every pricing change; the bot just makes sure it never gets forgotten.

## What's actually going on, in one sentence

Three times a day, at times the host chose: fresh data comes in, the competitor map gets re-read live and carefully, the algorithm reasons about the entire calendar together rather than one date at a time, a fixed set of safety rules checks every proposed change, and the results reach Airbnb automatically — with a verified, honest record of what actually happened at every step.

If you'd like to see one of these cycles run against your own listing, reach out to team@xplorebnb.com and we can show you.
