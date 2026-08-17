---
title: The Home Tab
description: A full walkthrough of the Home tab's 3D calendar, payout tiles, and the Optimize and Sync buttons.
order: 2
slug: the-home-tab
---

## What the Home tab is for

The Home tab is Bnbflight's main dashboard — the screen you'll likely check most often. It gives you a quick visual sense of your listing's pricing and a plain-language summary of your money, plus the two buttons you'll use most: Optimize and Sync.

Before getting into the Home tab itself, it helps to know that every screen in Bnbflight shows a status strip across the top. It displays the active listing's nickname and city, a "stale sources" indicator (a flag that appears when some underlying data needs refreshing), your current Autopilot mode, whether the Scheduler is running or stopped, and how long ago your listing last synced with Airbnb.

## The 3D calendar model

The centerpiece of the Home tab is a real, interactive 3D model made of small cubes, arranged like three calendars stacked on top of each other:

- The **top layer** represents last month.
- The **middle layer** represents the current month.
- The **bottom layer** represents next month.

Every single day on your calendar is represented by one cube. Two things about each cube tell you something useful at a glance:

- **Height** shows that day's live price. A taller cube means a higher price; a shorter cube means a lower price. This makes it easy to spot your priciest and cheapest nights just by scanning the shape of the model.
- **Color** shows that day's status:
  - **Green** means the date is booked.
  - **Blue** means the date is available — open for booking.
  - **Gray** means the date is blocked — not bookable, for example because you've set an owner block for personal use.

You can interact with the model directly, rotating and viewing it from different angles to get a feel for your pricing pattern across the past, current, and upcoming month all at once.

One detail worth knowing: when Bnbflight's pricing engine runs and changes prices, you don't just see the numbers jump. You can literally watch the cubes rise or fall smoothly to their new heights. This animated transition makes it easy to notice which dates just changed and by roughly how much, without having to compare numbers by hand.

## The four stat tiles

Below or beside the 3D model, Bnbflight shows four simple boxes summarizing your listing's money. They are intentionally kept separate from one another rather than combined into a single number, so you always see the real picture rather than an oversimplified one.

- **Paid Out** — money that Airbnb has already released into your bank account.
- **Pending Payout** — money from bookings that are confirmed but that Airbnb hasn't released to you yet. Airbnb typically releases a payout about 24 hours after a guest checks in, so this tile shows money that's coming but hasn't landed yet.
- **Cleaning Fees Paid** — the total cleaning fees you've collected across stays that have already been paid out.
- **Rent Paid** — what it cost you (for example, mortgage or rent) for the months that had paid-out income.

### Why Paid Out and Pending Payout are shown separately

These two tiles answer different questions. Paid Out tells you what has actually landed in your bank account. Pending Payout tells you what's confirmed and on its way, but not there yet — useful for understanding your near-term cash flow without confusing it with money you can already spend.

### Why rent and cleaning fees aren't subtracted from revenue

You'll notice Bnbflight never combines Rent Paid or Cleaning Fees Paid with your payout numbers to produce a single "profit" figure. This is intentional. Automatically netting costs against revenue can hide the real picture — for instance, by using a rough or outdated rent number, or by matching costs to the wrong time period. Instead, Bnbflight shows you each real number honestly, side by side, and lets you draw your own conclusions.

## Optimize and Sync

Two buttons on the Home tab let you take action immediately, rather than waiting for the next scheduled run:

- **Optimize** runs a full pricing pass right now, on demand. This is the exact same full cycle that also runs automatically three times a day (see the Schedule and Agents page for details) — Optimize just lets you trigger it manually whenever you want fresh recommendations.
- **Sync** manually pushes the "push prices to Airbnb" step on its own, separate from a full pricing run. This is useful for testing, or if you want to force your latest approved prices to reach Airbnb without waiting for the next scheduled sync.

## The Latest Run panel

The Latest Run panel shows you what happened during the most recent pricing pass, so you never have to guess whether something ran or what it did. It shows:

- **How many dates changed** during that run.
- **The average confidence** of the recommendations produced — confidence is a measure of how sure Bnbflight's model is about a given price change, shown elsewhere in more detail on a per-date basis in the Recommendations tab.
- **When the run finished.**
- **Whether anything is waiting for manual approval**, so you know at a glance if there's something for you to review.

This panel is a quick way to confirm Bnbflight is doing its job without having to dig into the Recommendations tab every time.
