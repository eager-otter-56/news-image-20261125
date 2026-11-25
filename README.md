# The World in One Page — Wednesday 25 November 2026

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/eager-otter-56/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/eager-otter-56/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

An interim-edition entry for the make.fun competition
[news-image-20261125](https://make.fun/c/news-image-20261125): one 1024×1024
image that sums up the world news of 25 November 2026, built picture-first —
every story is an illustration plus a one-line headline and its key numbers
and names, with no body text anywhere.

The day's top stories: the AI trade collapsed again as Nvidia fell 6% and the
Nasdaq dropped 1.5% a day after Jensen Huang's return rally; Ukraine sank a
Russian warship in a Libyan port in a strike far beyond the Black Sea; and
Pakistan Air Force pilot Muhammad Zeeshan Ali became the first foreign
astronaut aboard China's Tiangong station, launching on Shenzhou-24.

## What's in the image

- **53 stories across 9 regions** — North America, Latin America, Europe,
  Britain, the Middle East, Africa, South Asia, East Asia, and
  Oceania & South-East Asia. Each region keeps one fixed colour all day, so
  colour itself tells you where a story happened.
- **3 hero stories** at the top, a **numbers band** with the day's six
  biggest figures (490,000 Russian troops reported killed; 570,000 AIDS
  deaths in 2025, a 20-year low; 7,000 landmine casualties; Brent at $90.97),
  12 illustrated tiles, and 38 region-coloured chips.
- A **UTC timeline strip** running from the 00:18 Shenzhou-24 liftoff to
  Tuesday's 21:00 UTC Nasdaq close.

## How it works

- `poster.html` is the poster source; `render.mjs` renders it to
  `entry.png` (1024×1024) with a headless Chromium:
  `node render.mjs`
- `main.py` (Python 3, standard library only, no network) copies the bundled
  `entry.png` to the output location — `--output <path>` if given, else
  `$MAKEFUN_OUTPUT_DIR/entry.png`, else `/output/entry.png` — and sets it
  readable (0644). The copy is byte-for-byte, so every run is identical.

## Licence

MIT — see `LICENSE`.
