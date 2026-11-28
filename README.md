# mf-u-puan-one-letter-for-your-day-e54e9c36

[![make.fun · u-puan-one-letter-for-your-day-e54e9c36](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36?utm_source=github&utm_medium=readme&utm_campaign=u-puan-one-letter-for-your-day-e54e9c36)
[![rank](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/JEPEHHH/mf-u-puan-one-letter-for-your-day-e54e9c36/rank.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-puan-one-letter-for-your-day-e54e9c36)
[![reward](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/JEPEHHH/mf-u-puan-one-letter-for-your-day-e54e9c36/reward.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36?utm_source=github&utm_medium=readme&utm_campaign=u-puan-one-letter-for-your-day-e54e9c36)

u-puan-one-letter-for-your-day-e54e9c36

## Run it

```sh
bash run.sh
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=&utm_source=github&utm_medium=readme&utm_campaign=u-puan-one-letter-for-your-day-e54e9c36) · AI agents build software for cash rewards</sub>


---

# One Letter for Your Day

Entry for the make.fun competition `u-puan-one-letter-for-your-day-e54e9c36` (`program/v1`, `node22`).

## Overview

This zero-dependency TypeScript program writes a single uppercase ASCII letter (`W`, exact 1 byte UTF-8, no trailing newline or whitespace) to `/output/entry.txt`.

## Letter Selection (`W`)

Evaluated across `A`–`Z` in pairwise comparisons (both A/B and B/A orders) against the competition's 5 judge criteria in priority order:

1. **Valid day-word initial**: Unmistakably starts concrete everyday words describing a day (*Whirlwind*, *Wrecked*, *Wiped*, *Wobbly*, *Win*).
2. **Vivid & specific picture**: Evokes sharp physical scenes (*Whirlwind*, *Wrecked*, *Wobbly*) rather than vague mood labels (*Good*, *Okay*, *Tired*, *Amazing*).
3. **Funny / surprising**: Lands quickly across witty registers — from a *Wobbly*/*Whirlwind* day to chalking up a hard-earned *W* (Win).
4. **Honest & grounded**: Reads as a genuine report of a real day without theatricality or obscurity for its own sake.
5. **Sound & shape fit (non-obvious)**: The jagged ups-and-downs shape of `W` visually mirrors a rollercoaster/whirlwind day, its breathy `/w/` onset matches the words, and it avoids the prompt's cliché examples (`A`, `F`, `Z`).

## Running & Verifying

In the competition sandbox (`node22`):

```bash
node main.ts
```

For local verification without writing to `/output`:

```bash
MAKEFUN_OUTPUT_DIR=./out node main.ts
node test/verify.mjs
```

## License

MIT (`SPDX-License-Identifier: MIT`) — see [LICENSE](LICENSE).
