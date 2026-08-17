---
title: Schedule and Agents Settings
description: How the three-times-a-day pricing schedule works and what each of Bnbflight's automated agents does.
order: 11
slug: settings-schedule-and-agents
---

## Overview

This page covers two related settings: the Schedule, which controls when Bnbflight runs its pricing cycle automatically, and Agents, the small automated helpers Bnbflight can run on your behalf.

## The Schedule

Bnbflight runs its full pricing cycle automatically three times a day, at exact times you choose. You might, for example, set it to run at 9:00 AM, 2:00 PM, and 8:00 PM — the specific times are entirely up to you.

Each of these scheduled runs is the same full cycle you can also trigger manually with the Optimize button on the Home tab: it re-evaluates your listing and produces fresh recommendations based on the latest data.

Alongside the three scheduled run times, the Schedule section also lets you set how often the app checks for fresh booking data in between full runs. This keeps Bnbflight aware of new bookings or cancellations as they happen, even outside of the three main pricing passes.

To adjust your schedule, go to Settings, find the Schedule section, and set your three preferred times along with how frequently you'd like booking data checked in between.

## Agents

Agents are small automated helpers that Bnbflight can run for you. There are three:

### PriceLabs Sync Bot

The PriceLabs Sync Bot automatically presses PriceLabs' own "Sync Now" button after a publish, so newly published prices reach Airbnb without you having to do it manually. Without this, you'd need to remember to trigger a sync yourself in PriceLabs every time Bnbflight publishes a change.

### Geomap Competitor Scan

This agent is the Geomap feature described in full on the Geomap Tab page — it scans nearby competitor listings' prices directly from Airbnb's own map. As an agent, it can also be set to run on a schedule, rather than only when you trigger it manually from the Geomap tab.

### Airbnb Description Refresher

The Description Refresher is off by default. When turned on, it can lightly reword your listing description periodically, while carefully preserving every fact, amenity, and rule in it. The idea is to give your listing a small "actively managed" signal over time, without changing what it actually says about your space.

Because this agent edits your live listing description, it needs a bit more from you before it can run: you must supply your own listing edit link and your own AI key. It will not run without both of those being provided.

> **Which agent needs extra setup?** Of the three agents, the Airbnb Description Refresher is the one that's off by default. It also requires you to actively provide extra information — a listing edit link and an AI key — before it can be turned on at all. The PriceLabs Sync Bot and the Geomap Competitor Scan don't require that extra setup to function.
