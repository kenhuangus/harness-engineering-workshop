# Harness Engineering — 3-Hour Hands-On Workshop

**Live site (after Pages is enabled): <https://kenhuangus.github.io/harness-engineering-workshop/>**

A self-contained, GitHub Pages–ready **slide deck** for Ken Huang's 3-hour hands-on
workshop from *Harness Engineering: Design Patterns for Securing Long-Horizon
Multi-Agent AI Systems* (Packt). The PPT lives in the website: 22 full-screen
slides (one per screen, no scrolling) with Prev / Next buttons, keyboard arrows,
swipe, click-dots, a progress bar, deep links (`#3` = slide 3), and an EN / 中文
UI toggle. A scrolling **Lab Guide** (`labs.html`) lists every command and every
expected result.

This site follows the same template as
[maestro-site](https://kenhuangus.github.io/maestro-site/) (same top bar, deck
navigation, fonts, and `.nojekyll` Pages setup). Slide 2 keeps the maestro-site
About Speaker slide.

## What's inside

| File | Purpose |
|---|---|
| `index.html` | The 22-slide deck: title, about, thesis, agenda, setup, Blocks A–D, capstone, production mapping, close |
| `labs.html` | Scrolling lab guide: setup, expected PASS/scores, what to find in each lab, capstone, troubleshooting |
| `assets/style.css` | maestro-site design system (Space Grotesk + Inter + Kalam) + workshop code/timeline/lab styles |
| `assets/deck.js` | Slide navigation — Prev/Next, keyboard, swipe, dots, progress, `#N` deep links |
| `assets/i18n.js` | EN / 中文 UI strings and language toggle |
| `assets/rough.min.js` | Vendored rough.js v4.6.6 (no CDN — works offline & on Pages) |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |

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
- Template: https://kenhuangus.github.io/maestro-site/

## Run locally

```bash
cd harness-engineering-workshop
python -m http.server 8000
# open http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a repo (e.g. `harness-engineering-workshop`) and push this folder:
   ```bash
   git remote add origin https://github.com/<you>/harness-engineering-workshop.git
   git push -u origin main
   ```
2. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, folder `/ (root)`.
3. The site goes live at `https://<you>.github.io/harness-engineering-workshop/`.

## Credits

Content & book: **Ken Huang, CISSP** — CSA Fellow, OWASP AIVSS Project Lead, CEO of DistributedApps.ai.
