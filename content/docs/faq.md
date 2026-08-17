---
title: Frequently Asked Questions
description: Answers to common questions new hosts have about setup, safety, pricing control, and getting help.
order: 13
slug: faq
---

## Is my PriceLabs key safe?

Yes. Your PriceLabs API key is encrypted on your own computer and never leaves it except to talk to PriceLabs directly — there is no cloud server sitting in between Bnbflight and PriceLabs. Bnbflight also never shows your full saved key back to you on screen; it only displays the last few characters, so you can confirm which key is saved without exposing the whole thing.

## What happens if I don't like a price Bnbflight picked?

You're always in control. If you're in Observe mode, nothing publishes automatically at all — you can look at any recommendation without it ever touching Airbnb. If you're in Approve mode, every change waits for you to click Approve before it publishes, so you can simply reject or ignore anything you don't agree with. Even in Automatic mode, every recommendation still has to pass the Safety Governor's hard limits before it can go live, and you can add a date to your protected dates list at any time if you want Bnbflight to leave it alone entirely.

## Does Bnbflight work on Mac and Windows?

Yes. Bnbflight is a desktop app that runs on both macOS and Windows.

## What if I have more than one listing?

If your PriceLabs account manages more than one listing, you can choose which one Bnbflight is actively managing under Active Listing in Settings. Everything in the app — the Home tab, Calendar, Recommendations, Market, Reservations, and Geomap — is scoped to whichever listing is currently active.

## Can I turn automatic publishing off at any time?

Yes. Autopilot mode can be raised or lowered whenever you like. If you've turned on Automatic mode and want to step back, simply switch to Approve mode (so changes wait for your click) or Observe mode (so nothing publishes at all) in Settings.

## Will Bnbflight ever discount without limit?

No. Every price Bnbflight proposes, in any Autopilot mode, has to pass the Safety Governor first — there's no way around this layer. The Safety Governor includes a maximum price decrease allowed in a single run and a maximum discount versus the baseline price, both of which you control. On top of that, publishing is rate-limited to at most once per hour per listing, so nothing can spiral into repeated rapid discounting.

## What's the difference between the Economics settings and the Profit-Tile settings?

They look similar but serve different purposes. Economics settings (like nightly cost, turnover cost, and channel fee rate) feed directly into Bnbflight's pricing math. Profit-Tile settings hold the cleaning fee and rent numbers used only for the simple stat tiles on your Home tab — Paid Out, Cleaning Fees Paid, and Rent Paid. Keeping them separate means adjusting one won't accidentally affect the other.

## Why does the Home tab show Rent Paid separately instead of subtracting it from revenue?

This is intentional. Bnbflight never nets your costs against your revenue to produce a single "profit" number, because doing so automatically can hide the real picture. Instead, Paid Out, Pending Payout, Cleaning Fees Paid, and Rent Paid are all shown as their own honest, separate figures, so you can see exactly what's happening with your money rather than trusting a blended calculation.

## Do I need to fill out a setup wizard when I first start?

No. Once you paste in a valid PriceLabs API key and save it, Bnbflight automatically pulls in your listing, adopts your existing minimum and maximum price, cleaning fee, and location as starting defaults, runs a full historical data pull, trains its pricing model, and runs its first pricing pass — all without you filling out any setup screens.

## How do I get help?

Bnbflight isn't a self-serve product with public signup, so support is personal rather than a help center full of tickets. If you have a question or run into a problem, email team@xplorebnb.com and the team can help you directly.
