---
title: Autopilot and Safety Governor Settings
description: The three Autopilot modes explained simply, plus every safety governor limit and why it exists.
order: 9
slug: settings-autopilot-and-safety
---

## Overview

This page covers two closely related settings: Autopilot mode, which controls how much Bnbflight is allowed to do on its own, and the Safety Governor, which sets the hard limits every price change must respect no matter what. Together, these are the settings that matter most for feeling confident and in control of what Bnbflight does with your listing.

## Autopilot mode

Autopilot mode is the master control for how much Bnbflight is allowed to do on its own. There are three choices, and you can raise or lower this setting at any time:

- **Observe** — Bnbflight only shows you recommendations and changes nothing on Airbnb. This is the safest way to try the app out, since you can watch how it thinks without any risk of a real price changing.
- **Approve** — Recommendations wait for a human (you) to click Approve before anything publishes to PriceLabs. This gives you full control over every individual change while still letting Bnbflight do all the analysis and legwork.
- **Automatic** — Anything that clears every safety rule publishes on its own, with no clicks needed from you. This is the fully hands-off mode, for once you've built trust in how Bnbflight prices your listing.

> **Recommendation:** If you're new to Bnbflight, start in Observe mode. It lets you see exactly what the app would recommend and how confident it is, with zero risk of anything actually changing on Airbnb. Once you're comfortable with what you're seeing, you can move to Approve mode to start publishing changes one click at a time, and eventually to Automatic once you trust the recommendations enough to let them publish on their own. Bnbflight actually starts you in Observe mode by default for exactly this reason.

No matter which Autopilot mode is active, every single price Bnbflight ever proposes has to pass the Safety Governor's hard rules first. There is no way around that layer — Autopilot mode controls who clicks the final button, not whether the safety checks apply.

## The Safety Governor, explained in plain terms

The Safety Governor is a set of hard limits that every proposed price change must pass before it can be marked Auto-approved. All of these limits are adjustable by you in Settings. Here's what each one does and why it exists:

- **Maximum price decrease and increase allowed in a single run** — caps how far any one date's price can move up or down during a single pricing pass. This exists so that a single run can never swing a price wildly in one direction, even if the underlying data momentarily suggested it should.

- **Maximum discount versus the baseline price** — limits how far below the baseline price (what PriceLabs alone would have charged) Bnbflight is ever allowed to recommend. This is a second layer of protection specifically against steep discounting, on top of the general increase/decrease limit above.

- **Protected dates** — a list of specific dates Bnbflight must never touch. This is for dates you've manually priced for a personal reason — for example, if you're holding a room for a family visit, hosting it for a friend at a special rate, or simply want a particular date left exactly as you set it. Once a date is on this list, Bnbflight will leave it alone no matter what its model would otherwise suggest.

- **Minimum days before check-in the app won't touch** — protects near-term bookings from last-minute price swings. If a date is coming up soon, guests browsing right now are seeing whatever price is currently listed, and sudden changes close to check-in can be confusing or feel unfair to a guest already considering booking. This setting keeps Bnbflight from adjusting prices once a date gets too close.

- **Cap on how many dates can be changed in a single publish** — limits the total number of dates that can be updated at once. This keeps any single publish contained and reviewable, rather than allowing a huge, sweeping change to your whole calendar in one step.

## Additional built-in safeguards

A few more protections apply automatically, on top of the adjustable limits above:

- **Read-back verification** — every time Bnbflight publishes new prices to PriceLabs, it immediately reads them back and double-checks they actually match what was intended, flagging anything that doesn't line up.
- **Publish rate limiting** — publishing is limited to at most once per hour per listing. This means nothing can spiral into repeated rapid discounting, even if multiple things (like a manual Sync and a scheduled run) happened to ask for a publish around the same time.

Together, these settings and safeguards are designed so that you're always the one who decides how much control to hand over — and even when you hand over the most control, in Automatic mode, there are still hard limits standing between any single recommendation and your live Airbnb listing.
