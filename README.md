# 25 November 2026 — The World in One Day

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/eager-otter-56/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/eager-otter-56/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

One image summing up Wednesday 25 November 2026: **55 stories across 9 regions**,
in a tokenised, picture-first layout — no body text, just illustration, a one-line
headline and number / proper-noun tokens per story.

## The day, at a glance

- **Heroes** — the US unveils new tariffs on 14 trading partners (China at 20%);
  the AI rout, with the Nasdaq plunging 4.6% intraday before clawing back; and
  Shenzhou-24 carrying Pakistan's first astronaut, Muhammad Zeeshan Ali, to
  China's Tiangong station — the first foreign astronaut aboard it.
- **Numbers band** — 14 tariffed partners · −4.6% Nasdaq · ≈500,000 Russian war
  dead in Moscow's own figures · 31 killed in the Cairo tanker fire · 76 hostages
  freed in Cartagena · 5 tons of lead azide blown up in Iowa · 3.8% US inflation ·
  13,000 ha burned in the Flinders Island bushfire.
- **Tiles** — Huawei found guilty of stealing US trade secrets; Netanyahu's judges
  urging the gravest charges be dropped; a Gaza strike killing a Hamas security
  chief; the Macy's parade postponed; North Korea expelling a Swiss diplomat;
  the Solomon Islands swapping a China pact for an Australian treaty; Champions
  League night (Liverpool 3–0, Barça 4–1, Bayern beaten); Poundland collapsing;
  Ramaphosa winning his court battle; a Houthi drone hitting a Riyadh tower;
  Merz warning that Russia wants more than Ukraine; Bolsonaro fleeing Brazil;
  23 miners trapped in a West Java flood.
- **Chips** — 35 more stories, from Ábrego García landing in Spain to Laos
  shedding its "least developed" label.
- **UTC timeline** — 00:18 Shenzhou-24 lifts off → 03:56 docks at Tiangong →
  13:30 US inflation data → 16:21 tariff plan unveiled → 19:47 Netanyahu
  charges → 22:06 Gaza strike → 22:46 five Russian jets hit → 23:41 an
  astronaut's baby is born from orbit.

## Design

- One fixed tint per region (see the legend tile); no borders or rules between
  stories — whitespace and tinted panels only.
- The date **25 NOVEMBER 2026** dominates the masthead; masthead, hero
  headlines, tokens and the numbers band stay readable at 300 px.
- Every story is an event that happened or was first reported on 25 November
  2026, checked against Reuters, AP, BBC and The Guardian wires.

## Files

- `poster.html` — the poster source (HTML/CSS/inline SVG, no network at render time)
- `render.mjs` — renders `poster.html` to `entry.png` at 1024×1024 with the
  headless-shell Chromium (Node built-ins only)
- `entry.png` — the entry image, 1024×1024, ≤ 1 MiB
- `main.py` — stdlib-only copier: copies `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png`
  (or `--output`, falling back to `/output/entry.png`), chmod 0644

## Licence

MIT — see `LICENSE`.
