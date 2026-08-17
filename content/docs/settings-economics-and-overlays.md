---
title: Economics and Overlays Settings
description: Every economics input, the separate profit-tile settings, optimizer tuning, and the optional pricing overlays explained.
order: 10
slug: settings-economics-and-overlays
---

## Overview

This page covers the settings that describe the real costs and limits behind your pricing, plus the optional standing rules you can layer on top of Bnbflight's own recommendations. These settings feed directly into how Bnbflight calculates its prices, so it's worth understanding each one.

## Economics settings

The Economics section holds the real costs and limits behind every price decision Bnbflight makes. These numbers feed the pricing math itself, so getting them right helps Bnbflight recommend prices that actually make sense for your situation.

- **Nightly cost** — the rough cost to you of hosting a single night, such as utilities and general wear on your property. This helps Bnbflight understand your true cost of doing business on any given night, not just the price you charge.

- **Turnover cost** — the cost incurred between guests, such as extra cleaning or laundry needed to reset the space for the next stay. This is separate from your nightly cost because it only applies when a guest checks out and a new one checks in, not for every night.

- **Cleaning fee collected from guests** — the cleaning fee you charge guests, factored into the pricing math (this is separate from the cleaning fee number used on the Home tab's stat tile — see Profit-Tile Settings below).

- **Channel fee rate** — Airbnb's cut, i.e. the percentage Airbnb takes from your bookings. Factoring this in lets Bnbflight account for what you actually keep, not just what a guest pays.

- **Minimum margin** — the minimum margin you want to keep on top of your costs. This acts as a floor that helps ensure a recommended price still leaves you with the profit cushion you consider acceptable.

- **Absolute lowest and highest price** — the absolute minimum and maximum price Bnbflight is ever allowed to set for your listing, no matter what its model calculates. These are hard boundaries, similar in spirit to the Safety Governor's limits, but specifically about the price range itself rather than the size or timing of a change.

## Profit-tile settings

The Profit-Tile Settings section is separate from Economics above, and it's easy to confuse the two, so it's worth being clear about the difference. Profit-tile settings hold the cleaning fee and rent or mortgage numbers used specifically for the Home tab's simple stat tiles — Paid Out, Cleaning Fees Paid, and Rent Paid, described in full on the Home Tab page.

In short: the Economics settings feed the pricing algorithm's math, while the Profit-Tile settings feed the plain summary numbers you see on your Home tab dashboard. Keeping them separate means you can, for example, adjust your Home tab's rent figure for your own bookkeeping purposes without accidentally changing how Bnbflight prices your nights, or vice versa.

## Optimizer settings

The Optimizer Settings section holds more advanced tuning for how Bnbflight's pricing algorithm behaves. The main setting here is the horizon — how many days ahead Bnbflight actively re-prices. The horizon is capped at 60 days, because dates further out than that don't yet have enough real booking signal for Bnbflight to price responsibly. In other words, Bnbflight focuses its active pricing attention on the window of time where it has enough real data to make a confident call, rather than guessing too far into the future.

Beyond the horizon, this section also includes other advanced weighting knobs for hosts who want to fine-tune exactly how the algorithm balances different factors. Most hosts can safely leave these at their defaults — they're there for hosts who want to dig in further, not something you need to touch to use Bnbflight successfully.

## Pricing overlays

Pricing overlays are optional, simple standing rules you can layer on top of the algorithm's own price. They're fully optional and fully adjustable — you can turn them on, change them, or turn them off at any time. Examples include:

- **A flat percentage adjustment** applied to every date — for instance, nudging every recommended price up or down by a fixed percentage across the board.
- **A discount specifically on weekdays** — applying a reduction only to weekday dates, if you find weekday demand in your area tends to run softer than weekends.

Overlays sit on top of Bnbflight's own pricing model rather than replacing it, so they're a way to express your own simple preferences without having to override individual dates by hand.
