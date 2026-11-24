# Design

Started 2026-11-24 (owner: redesign the frontend design language and system from scratch).
**Status: direction not yet chosen.** Three report-page mockups are with the owner; § Tokens is
filled in when one is picked. Product, personas and the screen/module insight map are in
`PRODUCT.md`.

This file replaces `docs/design/design-system.md` (v0.8) and `docs/design/brand-tokens.md` as
the design authority. Those two files stay in the tree until the new tokens land, because
`web/src/styles/theme.test.ts` and `web/scripts/kit-chrome.mjs` parse their tables; they are
removed in the same change that replaces `web/src/styles/theme.css` (§ Migration).

## What carries over

Only the logo symbol (`web/public/symbol.svg`, `src/deploy_vii/assets/brand/`). Colours, type
families, radii, shadows, layouts, chart palette and component styling are all open.

## Why the current design fails (evidence)

- **One layout for every module.** `web/src/pages/connected/report/Modules.tsx` draws each of
  25 modules in one fixed order: findings, confidence, metric grid, figures, charts,
  limitations, records. Only CP-2A, CP-2E and CP-3 have a figure of their own.
- **One chart for every shape.** `pages/connected/visuals/charts.tsx` picks the chart from
  `descriptor.kind` alone; with no kind it is a trend or column chart. On CP-1, five of seven
  charts were the same blue three-period column chart (`.impeccable/critique/2026-11-16T05-13-06Z…`).
- **One container for every block.** Nearly every section uses the same `card` class
  (`pages/connected/layout.tsx`), so the page has no hierarchy.
- **Records swamp findings.** Thirteen tables follow Limitations on CP-1, about 32 screens.
- **No continuity.** Three font systems and three token sets across the connected app, the
  older static library and the HTML Model.

## Evidence base

Real module output reviewed for the information architecture (TransDigm, FY2024, as of
2024-09-30; outdated evidence, used for shape and scope only):

- `tests/fixtures/live_2026_11_15/earnings_update-CP-1-draft3-accepted.md` — a complete
  accepted CP-1 handoff.
- `tests/fixtures/tdg_sol_high_2026_11_13/` — CP-1 tables, CP-2G forecast JSON, CP-2A scenarios.
- `reviews/2026-11-12-module-output-adversarial/latest-run-tdg-proof-snapshot-opus-002.md` —
  section headings and quoted values for all 13 delivered modules of a Full run.
- No real handoff is retained for CP-1D, CP-2D, CP-2H, CP-3C, CP-3D, CP-4C or CP-L10; their
  screens are specified from the contract only and need proof on a real run.

The mockups mix figures from these runs to exercise the layout. They are illustrations of
form, not a delivered report.

## Information architecture

Unchanged at the top: Library → issuer report (Overview, Changes, Modules, Forecast, Evidence,
Calendar) and Run start → Run activity. Changed inside:

1. **Overview is the decision page.** The call (CP-6 stance, else CP-3, else CP-2), confidence
   and evidence clearance sit in the header; the bottom line is the largest text; each finding
   sits beside its own evidence visual; "what this run could not do" is a first-class block.
2. **Modules are grouped by the reader's question, not listed by code.** Five stages, also the
   run pipeline: Sources (CP-0) · Financials (CP-1, 1B, 1C, 1D, MODEL) · Credit (CP-1A, DR, 2,
   2A, 2D, 2E, 2G, 2H) · Structure and market (CP-3, 3C, 3D, 4, 4C) · Validation and decision
   (CP-5, 6, 8). The same pipeline component shows the live run on Run activity and the finished
   run on the report.
3. **Each module page leads with its own visual** (PRODUCT.md § Modules), then findings.
   Statements, registers and calculations sit behind one disclosure per module.
4. **Evidence keeps all machinery**; every other page has one trace control per paragraph, row
   or figure.

## Choosing the form

The form is chosen from the data's shape and the question, never from a default.

| Data shape | Question | Form | Not |
|---|---|---|---|
| One measure, two periods | Did it move, which way | Paired figure with delta, slope or dumbbell | Column or line chart |
| One measure, three or more periods | What is the trend | Line; columns only for flows | Three-bar column chart per measure |
| Value against a limit | How much room | Bullet with the limit marked | Bare number |
| Reported and adjusted, or as-reported and pro forma | What is the real level | One axis, both marks, the gap labelled | Two separate tiles |
| Steps from A to B | What explains the difference | Waterfall | Table of add-backs alone |
| Amounts by date | When is the cliff | Wall on a true time axis | Category columns with equal spacing |
| Parts of a ranked whole | Who is ahead of whom | Proportional stack in rank order | Pie or donut |
| Few cases, several measures | Which case breaks | Small multiples on one scale | One grouped chart per measure |
| Issuer against peers | Where does it sit | Range strip with the issuer marked | Peer table alone |
| Dated events | What is coming | Timeline on one axis | Table sorted by date |
| Relationships | What depends on what | Node map with a table fallback | Prose |
| Module × status | Can it run, did it run | Matrix or pipeline | Paragraph |
| Missing, blocked, not supplied | What is not known | The designed gap state, in place | Zero, blank, or a hidden block |

Rules: label the basis once (reported, as defined, pro forma); direct-label series; state the
reading in the figure title; every figure has a table view and a trace control; a chart with
fewer than three marks is a figure, not a chart.

## Component sources

The owner's references (2026-11-24) and what is taken from each. Everything is self-hosted to
satisfy the content security policy.

| Need | Source to adapt |
|---|---|
| Base controls, badges, inputs, tables, menus | Untitled UI React (already vendored under `web/src/components`), ui-sdk menu patterns |
| Application shell | shadcnblocks application shell (inset sidebar with secondary navigation; top navigation) |
| Stat rows, chart cards, chart groups | shadcnblocks dashboard, chart card, chart group |
| Overview composition | React Bits Pro bento grid; shadcnblocks bento |
| Module and run pipeline | React Bits Pro pipeline |
| Dates and run history | shadcnblocks timeline |

## Candidate directions

| | A · Brief | B · Signal | C · Desk |
|---|---|---|---|
| Idea | A committee brief that is live software | The system presents its conclusion | An analytics workstation |
| Ground | Light, inset sidebar | Dark, top bar | Light, top navigation |
| Lead | Prose; each claim beside its evidence | Bento; tile area is rank | Figures; aligned numerals, bars in tables |
| Best for | Decider | Decider, demonstrations | Analyst |
| Risk | Least "AI"; long page | Dark is harder for print and long reading | Dense for a first-time reader |

## Tokens

To be written when the direction is chosen: colour roles, type families and ramp, spacing,
radius, elevation, chart series, status and gap states, motion.

## Migration

The current system is pinned by tests and gates that the implementation change must update
together: `web/src/styles/theme.css` and `theme.test.ts`; `chart-lightness.test.ts`;
`web/scripts/classes.mjs` and `kit-chrome.mjs`; the `*.designReference.test.tsx`,
`*.design.test.tsx` and `*finalAudit*.test.tsx` files; `tests/test_brand_tokens.py` for the
HTML Model. A presentation change needs a fidelity check recorded in VERIFICATION.md.
