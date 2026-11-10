# Advanced Harness Design Patterns

**Live slides: <https://kenhuangus.github.io/harness-engineering-workshop/slides.html#1>**
**Lab guide: <https://kenhuangus.github.io/harness-engineering-workshop/labs.html>**

50 slides from *Harness Engineering: Design Patterns for Securing Long-Horizon
Multi-Agent AI Systems* (Packt), by Ken Huang. The slides live in the website
as a single-file deck modeled on the Packt masterclass deck at
https://kenhuangus.github.io/packt-harness/slides.html#1 — same engine, same
chrome, new content.

## Structure

5 opening slides, 4 slides per chapter × 10 chapters, 5 closing slides.

| Slides | Content |
|---|---|
| 1–5 | Title, instructor, thesis (Ch 1 Abstract), course map, setup |
| 6–9, 10–13, …, 42–45 | Per chapter: concept, concept, code lab, evidence lab |
| 46–50 | Capstone, capstone judging (§2.13 board), production mapping, pattern catalog, references |

Every chapter slide follows that chapter's Abstract in the book (Table of
contents: https://docs.google.com/document/d/1EtLyxS9EH0MR3WxBwG9lWkU40Lpqr4k4CKhqROGugXo/edit).
Every code slide is a contiguous, verbatim slice of a scenario file in
https://github.com/kenhuangus/Harness-Engineering-Design-Patterns — no code is
invented. Code slides: 8 (ch01 checkpoint/pause), 16 (ch03 broker verify),
20 (ch04 intent verify), 24 (ch05 lethal trifecta), 28 (ch06 gated write),
32 (ch07 decision trace), 36 (ch08 checkpoint/pause), 40 (ch09 admission),
44 (ch10 governed route).

## The model

`slides.html` is the packt-harness deck engine, kept intact: warm-paper theme,
serif display, terracotta accent, header (Lab Guide / Grid / EN–中文 / Prev /
Next / Go to / Fullscreen), slide-select dropdown, progress bar, `#N` deep
links, grid mode, copy buttons, and the bullet / table / code / comparison /
reference-table renderers. Slides are data: a `slidesData` array of
`{number, raw_lines, slide_type, code_block, code_filename, highlight_lines}`.
`slides-zh.js` carries the Chinese pack (`window.SLIDES_ZH`), with the same
line count per slide.

## Labs

All 10 labs verified PASS on 2026-11-10 (`run all`; ch01 0.980, ch02–ch10
1.000; `unittest discover -s tests`: 5 tests OK). Dependency-free, Python
3.11+, no cloud account, no paid model API.

## Files

| File | Purpose |
|---|---|
| `slides.html` | The 50-slide deck (single file, packt-harness engine) |
| `slides-zh.js` | Chinese slide pack (EN / 中文 toggle) |
| `labs.html` | Scrolling lab guide: setup, expected PASS/scores, what to find in each lab, capstone, troubleshooting |
| `index.html` | Landing page, redirects to `slides.html#1` |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |

## Rebuild the deck

```bash
python3 ~/workspace/harness-workshop/build_advanced_slides.py
# regenerates slides.html + slides-zh.js from the packt-harness model
# (base: workshop-site-v2/slides.html) and validates excerpts verbatim
```

## Deploy to GitHub Pages

Push this folder to `main` of `harness-engineering-workshop`, then
**Settings → Pages → Source: Deploy from a branch**, branch `main`, folder
`/ (root)`. The site goes live at
`https://kenhuangus.github.io/harness-engineering-workshop/slides.html#1`.

## Credits

Content & book: **Ken Huang, CISSP** — CSA Fellow, OWASP AIVSS Project Lead, CEO of DistributedApps.ai.
