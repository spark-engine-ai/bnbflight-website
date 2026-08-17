---
title: The Geomap Tab
description: How Bnbflight's competitor price scanner works, why it moves slowly on purpose, and how to read its results.
order: 7
slug: the-geomap-tab
---

## What the Geomap tab is for

The Geomap tab is Bnbflight's competitor-price scanner. It looks at what similar listings near you are actually charging, right now, so your pricing can take real nearby competition into account — not just historical patterns or platform averages.

## Why it reads Airbnb's own map

Rather than relying on a secondhand data source, Geomap opens Airbnb's own "Similar listings" map — the exact same map a guest browsing Airbnb would see when looking at listings like yours. It does this for every currently unbooked date up to 90 days out, one date at a time. For each date, it reads the real nearby listings' prices and positions directly off that map, then computes a recommended price based on the closest competitors, after first trimming out unusually high or low outliers so a single unusual listing doesn't skew the result.

Because this comes straight from what guests themselves would see on Airbnb at that moment, it reflects real, current competitive pricing rather than an estimate or a delayed snapshot.

## Why it deliberately takes its time

You'll notice a full Geomap scan doesn't happen instantly. Between checking each date, Bnbflight deliberately waits a random amount of time — somewhere between 40 and 95 seconds — before moving on to the next one.

This pacing is intentional, and it's a good thing. Checking dates at a random, unhurried pace means the pattern of checking never looks automated to Airbnb — a considerate design choice that helps keep this feature working reliably over time. It's the same kind of care you'd take browsing the map yourself, just automated.

Because a full scan can cover up to 90 dates at this careful pace, one complete scan can take over an hour. That's expected, and it's fine — the scan runs in the background, so you don't need to sit and watch it. You can keep using Bnbflight normally while it works, or set it to run on a schedule (covered on the Schedule and Agents page).

## What the Geomap tab shows you

For each scanned date, Geomap shows:

- **Your listing's own price** for that date.
- **The recommended price** based on nearby competitors.
- **The difference** between your price and that recommendation.
- **The overall market average** for that date.
- **How many nearby listings were found** and used in the comparison.

## The 3D visualization and scan table

Geomap also includes an actual 3D visualization showing the competitor pins positioned relative to your listing, so you can see at a glance how close and how many nearby competitors were factored into a given date's recommendation, not just the resulting numbers.

Below that, a full table lists every scanned date individually, so you can look through the complete results of a scan date by date rather than relying only on the summary figures or the 3D view.
