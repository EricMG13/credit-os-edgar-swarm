---
target: run page
total_score: 21
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 3
target_identity: "file:web/src/pages/connected/StartRun.tsx"
target_fingerprint: "sha256:5b0cdfabd91c14ff7dbfa929e9a955b301215dda3e50d97bd6a8d93b77ac2eaf"
target_path: web/src/pages/connected/StartRun.tsx
timestamp: 2026-11-16T08-39-46Z
slug: web-src-pages-connected-startrun-tsx
---
Method: dual-agent (A: Fable design review · B: Fable detector + browser evidence)

Target: the Run area of the connected app — Start a run (`/start`, `web/src/pages/connected/StartRun.tsx`) and Run activity (`/run/<id>`, `web/src/pages/connected/RunProgress.tsx` with `web/src/pages/run/activity/*`). Reviewed live in synthetic mode at 1440×900 and 390×844.

## Design Health Score

| # | Heuristic | Score | Key issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Step-4 error renders off-screen; focus drops to `<body>` after Inspect; tab title is always "Credit OS" |
| 2 | Match System / Real World | 2 | "context/1 JSON", CP codes, `--web-lookup`, "A-live", "Run form level", "reserved or unknown" |
| 3 | User Control and Freedom | 2 | "Edit inputs" returns to step 1 and discards the review; stepper not clickable; no stop-run |
| 4 | Consistency and Standards | 2 | Two "approve" acts; 14 vs 15 modules; radio drawn as checkbox; mixed date formats |
| 5 | Error Prevention | 3 | Digest-bound review and double confirm are strong; free-form JSON and as-of reset to today undermine it |
| 6 | Recognition Rather Than Recall | 2 | Readiness panel not sticky, drops below the form under 1041px; disabled buttons give no reason |
| 7 | Flexibility and Efficiency | 2 | Carry-over and "Start from this run" are good; no grouped acceptance, no shortcuts |
| 8 | Aesthetic and Minimalist Design | 2 | Start step is a same-weight wall; module state is said four or five times on the run page |
| 9 | Error Recovery | 2 | "unknown run" with no action; JSON error names the field but not where it is |
| 10 | Help and Documentation | 2 | One guidance line per step; nothing on Case kind, Run form level or period format |
| **Total** | | **21/40** | **Acceptable** |

## Design Specificity Verdict

**LLM assessment.** Split. The words are authored for this product: pathway descriptions, "Paid step", "Approving this summary costs nothing", readiness reasons such as "financials are management claims, not filed statements". The composition is not: a stock stepper, form grid, details list and timeline any SaaS wizard could reuse. Where the product is most distinctive (limits accepted before spending, module dependencies, the cap) the page falls back to plain text, native checkboxes and raw JSON. The Start step reads like rendered Markdown.

**Deterministic scan.** `impeccable detect` on 8 files: 7 clean, 1 finding — `side-tab` at `web/src/pages/run/activity/ModuleSteps.tsx:121`, a false positive (it is the 2px timeline connector, not a card accent). Computed-style measurements on 5 views: no text under 12px, no horizontal overflow at 390px, no unnamed controls, no body-text contrast failure. One real defect the design review also caught: Run activity jumps from h1 to h3 (`web/src/components/card/Card.tsx:11` hard-codes h3; `RunProgress.tsx:145,156`).

**Visual overlays.** None. The page's Content-Security-Policy (`script-src 'self'`, `web/connected.html:6`) blocked detector injection, so no overlay was shown; the measurements above are the fallback signal.

## Overall Impression

The money moment is honest and the copy is the best thing here, but the flow gets harder exactly where the stakes rise: step 4 hands an analyst JSON textareas and step 5 asks for eleven identical acceptances in a flat scroll. The biggest opportunity is the Start step: group the limits by cause and severity so that accepting them is a decision, not a click-through.

## What's Working

- **Honest money moment.** "Paid step" in the stepper, the amount on the submit button (paid mode, source-only), a dismissable dialog that returns focus to Submit, and "Retrying Submit run is safe".
- **Status vocabulary.** Shape, tone and word together (`web/src/components/status/sets.ts`), a halo only on the live Running badge, reduced motion honoured, `aria-current` on the running module.
- **Readiness-check content.** Causal, domain-true, each with a fix line. The product's best asset, under-presented.

## Priority Issues

**[P1] Step-4 failures are invisible.**
- What: after "Review run" with a bad value, the alert "Ratings must contain valid JSON." rendered 2,028px above the viewport. No scroll, no field marking, focus on `<body>`; the alert persists after the field is fixed. (`StartRun.tsx:834`, `:204`)
- Why it matters: a sighted user sees the button do nothing; a screen-reader user loses their place.
- Fix: inline error on the field, open its disclosure, scroll to and focus it; keep a summary beside the action.
- Suggested command: `/impeccable harden`

**[P1] The Start step is a flat, Markdown-like wall that leaks backend material.**
- What: "will refuse", "gap", "limited" and "check" share one text weight (`StartRun.tsx:327-330`). Eleven separate native checkboxes, five of them the same cascade sentence. Approve and Submit are disabled with no reason. Leaks: "(CP-n)" on every module, a run id in prose, "--web-lookup on forces it", "A-live", "gpt · balanced", "Turns per module", and a "Reviewed inputs" JSON dump (`:312-317`). The step is 2,954px tall on desktop, 4,572px on mobile.
- Why it matters: breaks the owner's rules on flat pages, Markdown look and backend material on working pages, and trains analysts to rubber-stamp limits before spending.
- Fix: group by root cause and severity (one decision for the missing agreement and its knock-ons), use the status badges, move ids and engine settings to Evidence or Advanced, say what blocks Submit.
- Suggested command: `/impeccable distill`, then `/impeccable layout`

**[P1] Credit inputs are entered as raw JSON.**
- What: facilities, quotes, ratings, valuation, scenarios and module options are monospace textareas with keys like `cp3_mode`, `talk_oid_low`, under "Enter structured values as context/1 JSON". A facility is mandatory for New issue runs (`StartRun.tsx:656-659`, `:1466-1507`).
- Why it matters: the user is an analyst, not an engineer; a typo here feeds a paid run.
- Fix: repeatable row forms with typed fields per facility, quote and rating; keep JSON behind Advanced.
- Suggested command: `/impeccable shape`

**[P2] Step order and doubled approval.**
- What: step 3 "Confirm — Approve" has an "Approve summary" button that approves nothing and precedes the step-4 inputs; step 5 re-reviews in a different layout with a second "Approve". The Readiness panel still lists "Approve the reviewed run" as Not met after step 3, and "Choose a pathway and purpose" as Not met while one is selected (`:812`). "Edit inputs" jumps to step 1 and discards the review (`:891-894`). A check points to "Issuer and dates", a section that does not exist.
- Why it matters: two acts called "approve" before a paid action blur which one commits.
- Fix: one review after all inputs; return to the relevant step; keep acceptances for unchanged items; make the stepper clickable.
- Suggested command: `/impeccable shape`, then `/impeccable clarify`

**[P2] Run activity repeats itself and is weakest when things go wrong.**
- What: module state appears as marker, badge, "14 of 14", bar label and a 32-line feed of "Module started / Module output accepted"; the Activity card is 2,384px against Modules at 856px, and its heading sits 1,904px down on mobile. Each queued module shows two shimmer bars for detail that is always `null` (`RunProgress.tsx:152`, `ModuleSteps.tsx:157`). The stalled message is the quietest text on the page (`RunProgress.tsx:126-130`, source-only); no stop control; failed and capped runs get red text plus a secondary button (source-only); `/run/nope` shows a raw lowercase "unknown run" with no action. After submit the analyst lands on a bare "Loading Credit OS…" page.
- Why it matters: the page says the most when nothing needs attention and the least when the analyst has to act.
- Fix: collapse the feed to exceptions and the latest event, drop the shimmer, give each ended state a headline with spend, what completed and a next action, put status in the tab title, use h2 for the card titles.
- Suggested command: `/impeccable distill`, then `/impeccable harden`

## Persona Red Flags

**Alex (power user).** Eleven single acceptances with no grouping. "Edit inputs" restarts at step 1; the stepper is inert. As-of date resets to today when starting from a prior run (`StartRun.tsx:1630`). "Inspect documents" duplicates what Continue does. No list of in-flight runs to return to (the Run rail item goes to `/start`).

**Sam (accessibility).** Focus falls to `<body>` after "Inspect documents", "Carry over from latest run" and a failed "Review run" (busy `<fieldset disabled>`, `:949`). Inspection results are not announced. The step heading takes focus with `focus:outline-none`. Run activity skips h2. The pathway radio is drawn as a checkbox (`web/src/pages/run/start/Purpose.tsx:71-79`). On mobile the stepper is five unlabelled circles. The read-only Issuer ID looks editable.

**Jordan (first-timer).** A green "Inspected" badge sits above "unrecognised". "Continue to purpose" is disabled with no reason; required fields are unmarked. "Run form level", "Case kind" and "q3-2026" are unexplained. Readiness items are pills that look tappable but are not. Two approvals, then a bare loading page after submit.

## Minor Observations

- Dates are dd/mm/yyyy in inputs and ISO in summaries.
- "14 base modules" on the card, "Planned modules 15" in the summary, 15 rows against "14 of 14" on the run page.
- Pathway names mix sentence and Title Case; all seven share one icon; cards have no hover state.
- The lock icon on Submit reads as "locked"; the dialog uses a warning triangle for a USD 0.00 test and does not restate issuer or pathway.
- The 320px Readiness column mostly shows a USD 0.00 bar; "reserved or unknown" is ledger language.
- Breadcrumb "Library" link is 46.5×20px; rail icons are unlabelled on desktop.
- Disabled buttons measure 2.48:1 and 2.75:1 (WCAG-exempt, but hard to read).
- On mobile, Submit wraps to a second row and is not full width.
- The file picker states no accepted formats.
- Seen once during setup, with the library publisher missing from the service's import path: all 15 modules done, badge still "Running", no explanation on the page.

## Questions to Consider

- If eight of eleven limits follow from one missing credit agreement, why does the analyst sign eleven times instead of deciding once?
- Should anyone wait on this page at all? What if Submit returned to the Library with a live run row?
- What does a capped run owe the analyst who just spent USD 20?

Not verified: paid/live mode labels and dialog; queued, failed, capped, rejected, interrupted, stalled and report-pending states rendered (from source and tests only); Standard/Advanced levels and the earnings and new-issue variants; real drag-drop and duplicate-file errors; 768–1040px; 200% zoom; a real screen reader; dark mode; the detector's in-page rule set (blocked by CSP).
