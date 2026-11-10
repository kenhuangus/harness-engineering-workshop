# Harness Engineering — 3-Hour Hands-On Workshop

**Live slides: <https://kenhuangus.github.io/harness-engineering-workshop/slides.html#1>**
**Lab guide: <https://kenhuangus.github.io/harness-engineering-workshop/labs.html>**

A 3-hour hands-on workshop from *Harness Engineering: Design Patterns for
Securing Long-Horizon Multi-Agent AI Systems* (Packt), by Ken Huang. The slides
live in the website as a single-file deck modeled on the Packt masterclass deck
at https://kenhuangus.github.io/packt-harness/slides.html#1 — same engine, same
chrome, new content.

## The model

`slides.html` is the packt-harness deck engine, kept intact: warm-paper theme,
serif display, terracotta accent, header (Lab Guide / Grid / EN–中文 / Prev /
Next / Go to / Fullscreen), slide-select dropdown, progress bar, `#N` deep
links, grid mode, copy buttons, and the bullet / table / code / comparison /
reference-table renderers. Slides are data: a `slidesData` array of
`{number, raw_lines, slide_type, code_block, code_filename, highlight_lines}`.
`slides-zh.js` carries the Chinese pack (`window.SLIDES_ZH`), with the same
line count per slide.

What changed from the model:

- `slidesData`: 47 Packt slides → 22 workshop slides (title, about, thesis,
  agenda, setup, Blocks A–D, capstone, production mapping, references).
- `svgMap`: stripped to slide 2 only (the instructor banner). The Packt
  diagrams were per-slide and would have been wrong on the new numbers.
- Slide 1 hero: new tagline, description, and four pillars (Control Plane,
  10 Runnable Labs, Long-Horizon Agents, Capstone).
- Code slides: 3 (ch01 checkpoint/pause/overlay, ch05 lethal trifecta,
  ch08 checkpoint/pause), with excerpts copied verbatim from the lab
  scenarios and GitHub links repointed to the labs repo.
- The number-based setup branch (old slide 6) was removed so it cannot fire
  on the wrong slide. Remaining Packt links exist only in unreachable
  renderers (skill slides, the old setup branch, the old capstone branch);
  none of the 22 slides uses those types or titles.

## Workshop at a glance — 180 minutes

| Time | Block | Chapters | Labs |
|---|---|---|---|
| 0:00–0:10 | Setup | — | Clone, install, `run all` green |
| 0:10–0:45 | A · Control plane + autonomy | 1–2 | ch01 (0.980), ch02 (1.000) |
| 0:45–1:25 | B · Identity, intent, context | 3–5 | ch03, ch04, ch05 (1.000) |
| 1:25–2:05 | C · Memory, observability, steering | 6–8 | ch06, ch07, ch08 (1.000) |
| 2:05–2:45 | D · Fleet, governance, capstone | 9–10 | ch09, ch10 (1.000) + extend one lab |
| 2:45–3:00 | Debrief | — | Production mapping, what to do Monday |

## Sources

- Book: *Harness Engineering: Design Patterns for Securing Long-Horizon Multi-Agent AI Systems*, Ken Huang (Packt). Table of contents: https://docs.google.com/document/d/1EtLyxS9EH0MR3WxBwG9lWkU40Lpqr4k4CKhqROGugXo/edit
- Labs: https://github.com/kenhuangus/Harness-Engineering-Design-Patterns — 10 chapters, dependency-free, Python 3.11+, no cloud account, no paid model API. All 10 labs verified PASS on 2026-11-10 (`run all`; ch01 0.980, ch02–ch10 1.000; `unittest discover -s tests`: 5 tests OK).
- Deck model: https://kenhuangus.github.io/packt-harness/slides.html#1 (repo: https://github.com/kenhuangus/packt-harness)

## Files

| File | Purpose |
|---|---|
| `slides.html` | The 22-slide deck (single file, packt-harness engine) |
| `slides-zh.js` | Chinese slide pack (EN / 中文 toggle) |
| `labs.html` | Scrolling lab guide: setup, expected PASS/scores, what to find in each lab, capstone, troubleshooting |
| `index.html` | Landing page, redirects to `slides.html#1` |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |

## Run locally

```bash
python -m http.server 8000
# open http://localhost:8000/slides.html#1
```

## Rebuild the deck

```bash
python3 ~/workspace/harness-workshop/build_workshop_slides.py
# regenerates slides.html + slides-zh.js from the packt-harness model
```

## Deploy to GitHub Pages

Push this folder to `main` of `harness-engineering-workshop`, then
**Settings → Pages → Source: Deploy from a branch**, branch `main`, folder
`/ (root)`. The site goes live at
`https://kenhuangus.github.io/harness-engineering-workshop/slides.html#1`.

## Credits

Content & book: **Ken Huang, CISSP** — CSA Fellow, OWASP AIVSS Project Lead, CEO of DistributedApps.ai.
