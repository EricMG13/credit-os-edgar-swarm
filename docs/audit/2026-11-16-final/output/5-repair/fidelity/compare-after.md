# Handoff comparison: after

Capture tree bb94ddce (audit/final-repairs), web/dist eb9dc11c36a9; rules version 1; made by `compare.mjs`. Sources: connected screens against `proof/handoffs/*.md` and the run request; static screens against `web/fixtures/library.json` and `model.json`. Rules: README.md, "Comparison".

## Counts per surface and class

| Surface | Screens | Items | matches source | derived | not found in source | source has it, screen differs | Source items not on screen |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| connected | 29 | 3535 | 1640 | 1786 | 102 | 7 | 385 |
| static | 238 | 4226 | 3926 | 50 | 250 | 0 | 14 |
| **Total** | 267 | 7761 | 5566 | 1836 | 352 | 7 | 399 |

## Counts per surface, kind and class

| Surface | Kind | Items | matches source | derived | not found in source | source has it, screen differs |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| connected | drawer | 549 | 422 | 28 | 99 | 0 |
| connected | figure | 2666 | 1133 | 1523 | 3 | 7 |
| connected | limitation | 241 | 63 | 178 | 0 | 0 |
| connected | source | 79 | 22 | 57 | 0 | 0 |
| static | drawer | 235 | 235 | 0 | 0 | 0 |
| static | figure | 2836 | 2776 | 48 | 12 | 0 |
| static | limitation | 1057 | 817 | 2 | 238 | 0 |
| static | source | 98 | 98 | 0 | 0 | 0 |

Kinds: figure = a drawn value (page view or a chart's Table view); source = a source line on screen; limitation = a limitation sentence; drawer = what a source drawer states (statement, handoff line, basis).

Source drawers name a "Handoff line N" of the delivered handoff, which has a request-and-sources preamble; the offset from the canned file's line, per module: CP-0 +12, CP-1A +13, CP-DR +14, CP-4 +15, CP-2E +16, CP-2D +15, CP-3C +18, CP-3 +20, CP-6 +23, CP-1 +13, CP-2 +16, CP-2A +15, CP-2G +16, CP-5 +24.

## source has it, screen differs (7)

| # | Screen | Kind | Figure (as drawn) | Where on the screen | What differs | Source location | Source says |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | history | figure | 14 modules run: Source readiness, Financial foundation, Business & governance, Research questions, Legal & covenants, Fundamental credit, Downside, Rates, FX & hedging, Liquidity, Forward credit model | Report history / Full credit assessment / As of 31 March 2025 | digits | proof/handoffs/CP-1A.md:165 | Refinancing \| USD 1,250 million |
| 2 | overview | figure | Historical 1 | Issuer history / 2025 | digits | proof/handoffs/CP-0.md | 9 event row(s) with status Historical |
| 3 | overview | figure | Scheduled 2 | Issuer history / 2025 | digits | proof/handoffs/CP-0.md | 18 event row(s) with status Scheduled |
| 4 | overview | figure | Scenario 1 | Issuer history / 2025 | digits | proof/handoffs/CP-0.md | 9 event row(s) with status Scenario |
| 5 | overview | figure | Historical 1 | Research catalysts / 2025 | digits | proof/handoffs/CP-0.md | 9 event row(s) with status Historical |
| 6 | overview | figure | Scheduled 2 | Research catalysts / 2025 | digits | proof/handoffs/CP-0.md | 18 event row(s) with status Scheduled |
| 7 | overview | figure | Scenario 1 | Research catalysts / 2025 | digits | proof/handoffs/CP-0.md | 9 event row(s) with status Scenario |

## Per screen (screens with a difference, a not-found item or an omitted source item)

| Surface | Screen | Items | matches source | derived | not found in source | source has it, screen differs | Omitted |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| connected | changes--paired-run-fixture | 29 | 22 | 6 | 1 | 0 | 0 |
| connected | changes--paired-run-fixture--presentation-table | 18 | 17 | 0 | 1 | 0 | 0 |
| connected | forecast | 655 | 191 | 422 | 42 | 0 | 0 |
| connected | forecast--case-downside-shock | 654 | 193 | 419 | 42 | 0 | 0 |
| connected | history | 5 | 4 | 0 | 0 | 1 | 0 |
| connected | modules--CP-0 | 89 | 44 | 44 | 1 | 0 | 25 |
| connected | modules--CP-1 | 161 | 125 | 35 | 1 | 0 | 35 |
| connected | modules--CP-1A | 48 | 37 | 10 | 1 | 0 | 36 |
| connected | modules--CP-2 | 22 | 19 | 2 | 1 | 0 | 21 |
| connected | modules--CP-2A | 72 | 69 | 2 | 1 | 0 | 38 |
| connected | modules--CP-2D | 60 | 45 | 14 | 1 | 0 | 20 |
| connected | modules--CP-2E | 129 | 119 | 8 | 2 | 0 | 43 |
| connected | modules--CP-2G | 13 | 11 | 1 | 1 | 0 | 24 |
| connected | modules--CP-3 | 71 | 62 | 8 | 1 | 0 | 36 |
| connected | modules--CP-3C | 52 | 37 | 14 | 1 | 0 | 20 |
| connected | modules--CP-4 | 65 | 54 | 10 | 1 | 0 | 22 |
| connected | modules--CP-5 | 16 | 13 | 2 | 1 | 0 | 21 |
| connected | modules--CP-6 | 71 | 62 | 8 | 1 | 0 | 20 |
| connected | modules--CP-DR | 37 | 28 | 8 | 1 | 0 | 24 |
| connected | modules--default | 161 | 125 | 35 | 1 | 0 | 0 |
| connected | overview | 138 | 107 | 25 | 0 | 6 | 0 |
| static | library--ardenne-cable--2026-03-31--changes | 3 | 2 | 0 | 1 | 0 | 0 |
| static | library--ardenne-cable--2026-03-31--evidence--gaps | 21 | 20 | 0 | 1 | 0 | 0 |
| static | library--ardenne-cable--2026-03-31--evidence--record | 27 | 24 | 1 | 2 | 0 | 0 |
| static | library--ardenne-cable--2026-03-31--evidence--sources | 12 | 10 | 1 | 1 | 0 | 0 |
| static | library--ardenne-cable--2026-03-31--evidence--summary | 16 | 14 | 1 | 1 | 0 | 0 |
| static | library--ardenne-cable--2026-03-31--evidence--trace | 7 | 6 | 0 | 1 | 0 | 0 |
| static | library--ardenne-cable--2026-03-31--modules | 6 | 5 | 0 | 1 | 0 | 0 |
| static | library--ardenne-cable--2026-03-31--modules--business-profile | 6 | 5 | 0 | 1 | 0 | 0 |
| static | library--ardenne-cable--2026-03-31--modules--source-readiness | 12 | 11 | 0 | 1 | 0 | 0 |
| static | library--ardenne-cable--2026-03-31--overview | 13 | 12 | 0 | 1 | 0 | 1 |
| static | library--ardenne-cable--history | 7 | 6 | 0 | 1 | 0 | 0 |
| static | library--brevane-marine--history | 5 | 4 | 0 | 1 | 0 | 0 |
| static | library--brevane-marine--r-0412--changes | 3 | 2 | 0 | 1 | 0 | 0 |
| static | library--brevane-marine--r-0412--evidence--gaps | 21 | 20 | 0 | 1 | 0 | 0 |
| static | library--brevane-marine--r-0412--evidence--record | 27 | 24 | 1 | 2 | 0 | 0 |
| static | library--brevane-marine--r-0412--evidence--sources | 12 | 10 | 1 | 1 | 0 | 0 |
| static | library--brevane-marine--r-0412--evidence--summary | 16 | 14 | 1 | 1 | 0 | 0 |
| static | library--brevane-marine--r-0412--evidence--trace | 7 | 6 | 0 | 1 | 0 | 0 |
| static | library--brevane-marine--r-0412--modules | 7 | 6 | 0 | 1 | 0 | 0 |
| static | library--brevane-marine--r-0412--modules--business-profile | 7 | 6 | 0 | 1 | 0 | 0 |
| static | library--brevane-marine--r-0412--modules--source-readiness | 12 | 11 | 0 | 1 | 0 | 0 |
| static | library--brevane-marine--r-0412--overview | 10 | 9 | 0 | 1 | 0 | 1 |
| static | library--corvane-packaging--2026-06-30--changes | 3 | 2 | 0 | 1 | 0 | 0 |
| static | library--corvane-packaging--2026-06-30--evidence--gaps | 22 | 21 | 0 | 1 | 0 | 0 |
| static | library--corvane-packaging--2026-06-30--evidence--record | 27 | 24 | 1 | 2 | 0 | 0 |
| static | library--corvane-packaging--2026-06-30--evidence--sources | 12 | 10 | 1 | 1 | 0 | 0 |
| static | library--corvane-packaging--2026-06-30--evidence--summary | 16 | 14 | 1 | 1 | 0 | 0 |
| static | library--corvane-packaging--2026-06-30--evidence--trace | 7 | 6 | 0 | 1 | 0 | 0 |
| static | library--corvane-packaging--2026-06-30--modules | 6 | 5 | 0 | 1 | 0 | 0 |
| static | library--corvane-packaging--2026-06-30--modules--business-profile | 6 | 5 | 0 | 1 | 0 | 0 |
| static | library--corvane-packaging--2026-06-30--modules--source-readiness | 12 | 11 | 0 | 1 | 0 | 0 |
| static | library--corvane-packaging--2026-06-30--overview | 19 | 18 | 0 | 1 | 0 | 1 |
| static | library--corvane-packaging--history | 7 | 6 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2025-09-30--changes | 3 | 2 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2025-09-30--evidence--gaps | 41 | 40 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2025-09-30--evidence--record | 27 | 24 | 1 | 2 | 0 | 0 |
| static | library--halden-aerostructures--2025-09-30--evidence--sources | 18 | 15 | 2 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2025-09-30--evidence--summary | 16 | 14 | 1 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2025-09-30--evidence--trace | 7 | 6 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2025-09-30--modules | 7 | 6 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2025-09-30--modules--business-profile | 7 | 6 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2025-09-30--modules--capital-structure | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2025-09-30--modules--cash-flow-and-liquidity | 6 | 5 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2025-09-30--modules--covenants-and-documentation | 6 | 5 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2025-09-30--modules--credit-snapshot | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2025-09-30--modules--environmental-social-and-governance | 6 | 5 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2025-09-30--modules--financial-performance | 7 | 6 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2025-09-30--modules--forecast | 7 | 6 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2025-09-30--modules--industry-and-competition | 6 | 5 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2025-09-30--modules--management-and-governance | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2025-09-30--modules--peer-comparison | 7 | 6 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2025-09-30--modules--rating-outlook | 6 | 5 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2025-09-30--modules--recovery | 6 | 5 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2025-09-30--overview | 29 | 28 | 0 | 1 | 0 | 1 |
| static | library--halden-aerostructures--2026-03-31--changes | 16 | 15 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-03-31--changes--presentation-table | 15 | 14 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-03-31--evidence--gaps | 38 | 37 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-03-31--evidence--record | 27 | 24 | 1 | 2 | 0 | 0 |
| static | library--halden-aerostructures--2026-03-31--evidence--sources | 27 | 23 | 3 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-03-31--evidence--summary | 17 | 15 | 1 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-03-31--evidence--trace | 7 | 6 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-03-31--modules | 6 | 5 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-03-31--modules--business-profile | 6 | 5 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-03-31--modules--capital-structure | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-03-31--modules--cash-flow-and-liquidity | 4 | 3 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-03-31--modules--covenants-and-documentation | 7 | 6 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-03-31--modules--credit-snapshot | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-03-31--modules--environmental-social-and-governance | 6 | 5 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-03-31--modules--financial-performance | 4 | 3 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-03-31--modules--forecast | 4 | 3 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-03-31--modules--industry-and-competition | 6 | 5 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-03-31--modules--management-and-governance | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-03-31--modules--peer-comparison | 6 | 5 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-03-31--modules--rating-outlook | 7 | 6 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-03-31--modules--recovery | 4 | 3 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-03-31--overview | 32 | 31 | 0 | 1 | 0 | 1 |
| static | library--halden-aerostructures--2026-06-30--changes | 3 | 2 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-06-30--modules | 3 | 2 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-06-30--overview | 3 | 2 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-09-30--changes | 43 | 42 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-09-30--changes--presentation-table | 43 | 42 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-09-30--evidence--gaps | 71 | 70 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-09-30--evidence--record | 70 | 67 | 1 | 2 | 0 | 0 |
| static | library--halden-aerostructures--2026-09-30--evidence--sources | 41 | 35 | 5 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-09-30--evidence--summary | 17 | 15 | 1 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-09-30--evidence--trace | 176 | 175 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-09-30--modules | 66 | 65 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-09-30--modules--business-profile | 66 | 65 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-09-30--modules--capital-structure | 212 | 211 | 0 | 1 | 0 | 1 |
| static | library--halden-aerostructures--2026-09-30--modules--cash-flow-and-liquidity | 9 | 8 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-09-30--modules--covenants-and-documentation | 9 | 8 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-09-30--modules--credit-snapshot | 10 | 9 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-09-30--modules--environmental-social-and-governance | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-09-30--modules--financial-performance | 9 | 8 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-09-30--modules--forecast | 9 | 8 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-09-30--modules--industry-and-competition | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-09-30--modules--management-and-governance | 9 | 8 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-09-30--modules--peer-comparison | 9 | 8 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-09-30--modules--rating-outlook | 10 | 9 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-09-30--modules--recovery | 7 | 6 | 0 | 1 | 0 | 0 |
| static | library--halden-aerostructures--2026-09-30--overview | 116 | 115 | 0 | 1 | 0 | 1 |
| static | library--halden-aerostructures--history | 21 | 20 | 0 | 1 | 0 | 0 |
| static | library--home | 19 | 18 | 0 | 1 | 0 | 0 |
| static | library--lumora-health--2026-09-30--changes | 3 | 2 | 0 | 1 | 0 | 0 |
| static | library--lumora-health--2026-09-30--evidence--gaps | 21 | 20 | 0 | 1 | 0 | 0 |
| static | library--lumora-health--2026-09-30--evidence--record | 27 | 24 | 1 | 2 | 0 | 0 |
| static | library--lumora-health--2026-09-30--evidence--sources | 12 | 10 | 1 | 1 | 0 | 0 |
| static | library--lumora-health--2026-09-30--evidence--summary | 17 | 15 | 1 | 1 | 0 | 0 |
| static | library--lumora-health--2026-09-30--evidence--trace | 7 | 6 | 0 | 1 | 0 | 0 |
| static | library--lumora-health--2026-09-30--modules | 6 | 5 | 0 | 1 | 0 | 0 |
| static | library--lumora-health--2026-09-30--modules--business-profile | 6 | 5 | 0 | 1 | 0 | 0 |
| static | library--lumora-health--2026-09-30--modules--capital-structure | 3 | 2 | 0 | 1 | 0 | 0 |
| static | library--lumora-health--2026-09-30--modules--cash-flow-and-liquidity | 6 | 5 | 0 | 1 | 0 | 0 |
| static | library--lumora-health--2026-09-30--modules--covenants-and-documentation | 6 | 5 | 0 | 1 | 0 | 0 |
| static | library--lumora-health--2026-09-30--modules--credit-snapshot | 3 | 2 | 0 | 1 | 0 | 0 |
| static | library--lumora-health--2026-09-30--modules--environmental-social-and-governance | 6 | 5 | 0 | 1 | 0 | 0 |
| static | library--lumora-health--2026-09-30--modules--financial-performance | 6 | 5 | 0 | 1 | 0 | 0 |
| static | library--lumora-health--2026-09-30--modules--forecast | 3 | 2 | 0 | 1 | 0 | 0 |
| static | library--lumora-health--2026-09-30--modules--industry-and-competition | 6 | 5 | 0 | 1 | 0 | 0 |
| static | library--lumora-health--2026-09-30--modules--management-and-governance | 7 | 6 | 0 | 1 | 0 | 0 |
| static | library--lumora-health--2026-09-30--modules--peer-comparison | 3 | 2 | 0 | 1 | 0 | 0 |
| static | library--lumora-health--2026-09-30--modules--rating-outlook | 3 | 2 | 0 | 1 | 0 | 0 |
| static | library--lumora-health--2026-09-30--modules--recovery | 3 | 2 | 0 | 1 | 0 | 0 |
| static | library--lumora-health--2026-09-30--overview | 17 | 16 | 0 | 1 | 0 | 1 |
| static | library--lumora-health--history | 3 | 2 | 0 | 1 | 0 | 0 |
| static | library--tessaly-foods--2026-09-30--changes | 3 | 2 | 0 | 1 | 0 | 0 |
| static | library--tessaly-foods--2026-09-30--evidence--gaps | 21 | 20 | 0 | 1 | 0 | 0 |
| static | library--tessaly-foods--2026-09-30--evidence--record | 27 | 24 | 1 | 2 | 0 | 0 |
| static | library--tessaly-foods--2026-09-30--evidence--sources | 12 | 10 | 1 | 1 | 0 | 0 |
| static | library--tessaly-foods--2026-09-30--evidence--summary | 16 | 14 | 1 | 1 | 0 | 0 |
| static | library--tessaly-foods--2026-09-30--evidence--trace | 7 | 6 | 0 | 1 | 0 | 0 |
| static | library--tessaly-foods--2026-09-30--modules | 7 | 6 | 0 | 1 | 0 | 0 |
| static | library--tessaly-foods--2026-09-30--modules--business-profile | 7 | 6 | 0 | 1 | 0 | 0 |
| static | library--tessaly-foods--2026-09-30--modules--source-readiness | 12 | 11 | 0 | 1 | 0 | 0 |
| static | library--tessaly-foods--2026-09-30--overview | 16 | 15 | 0 | 1 | 0 | 1 |
| static | library--tessaly-foods--history | 3 | 2 | 0 | 1 | 0 | 0 |
| static | library--transdigm--2025-06-30--changes | 4 | 3 | 0 | 1 | 0 | 0 |
| static | library--transdigm--2025-06-30--evidence--gaps | 21 | 20 | 0 | 1 | 0 | 0 |
| static | library--transdigm--2025-06-30--evidence--record | 29 | 27 | 1 | 1 | 0 | 0 |
| static | library--transdigm--2025-06-30--evidence--sources | 11 | 9 | 1 | 1 | 0 | 0 |
| static | library--transdigm--2025-06-30--evidence--summary | 16 | 14 | 1 | 1 | 0 | 0 |
| static | library--transdigm--2025-06-30--evidence--trace | 7 | 6 | 0 | 1 | 0 | 0 |
| static | library--transdigm--2025-06-30--modules | 10 | 9 | 0 | 1 | 0 | 0 |
| static | library--transdigm--2025-06-30--modules--financial-model-and-forecast | 10 | 9 | 0 | 1 | 0 | 0 |
| static | library--transdigm--2025-06-30--overview | 31 | 30 | 0 | 1 | 0 | 1 |
| static | library--transdigm--activity-capped--changes | 4 | 3 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-capped--evidence--gaps | 21 | 20 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-capped--evidence--record | 68 | 65 | 1 | 2 | 0 | 0 |
| static | library--transdigm--activity-capped--evidence--sources | 11 | 9 | 1 | 1 | 0 | 0 |
| static | library--transdigm--activity-capped--evidence--summary | 16 | 14 | 1 | 1 | 0 | 0 |
| static | library--transdigm--activity-capped--evidence--trace | 7 | 6 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-capped--modules | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-capped--modules--business-profile | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-capped--modules--capital-structure | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-capped--modules--covenants | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-capped--modules--credit-snapshot | 5 | 4 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-capped--modules--documentation-review | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-capped--modules--financial-analysis | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-capped--modules--financial-model-and-forecast | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-capped--modules--liquidity | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-capped--modules--management-and-ownership | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-capped--modules--peer-comparison | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-capped--modules--rating-view | 5 | 4 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-capped--modules--recovery | 7 | 6 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-capped--modules--risks-and-watch-list | 5 | 4 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-capped--overview | 13 | 12 | 0 | 1 | 0 | 1 |
| static | library--transdigm--activity-failed--changes | 4 | 3 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-failed--evidence--gaps | 21 | 20 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-failed--evidence--record | 68 | 65 | 1 | 2 | 0 | 0 |
| static | library--transdigm--activity-failed--evidence--sources | 11 | 9 | 1 | 1 | 0 | 0 |
| static | library--transdigm--activity-failed--evidence--summary | 16 | 14 | 1 | 1 | 0 | 0 |
| static | library--transdigm--activity-failed--evidence--trace | 7 | 6 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-failed--modules | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-failed--modules--business-profile | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-failed--modules--capital-structure | 5 | 4 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-failed--modules--covenants | 5 | 4 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-failed--modules--credit-snapshot | 5 | 4 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-failed--modules--documentation-review | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-failed--modules--financial-analysis | 7 | 6 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-failed--modules--financial-model-and-forecast | 5 | 4 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-failed--modules--liquidity | 5 | 4 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-failed--modules--management-and-ownership | 5 | 4 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-failed--modules--peer-comparison | 5 | 4 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-failed--modules--rating-view | 5 | 4 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-failed--modules--recovery | 5 | 4 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-failed--modules--risks-and-watch-list | 5 | 4 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-failed--overview | 13 | 12 | 0 | 1 | 0 | 1 |
| static | library--transdigm--activity-finished--changes | 4 | 3 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-finished--evidence--gaps | 21 | 20 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-finished--evidence--record | 68 | 65 | 1 | 2 | 0 | 0 |
| static | library--transdigm--activity-finished--evidence--sources | 11 | 9 | 1 | 1 | 0 | 0 |
| static | library--transdigm--activity-finished--evidence--summary | 16 | 14 | 1 | 1 | 0 | 0 |
| static | library--transdigm--activity-finished--evidence--trace | 7 | 6 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-finished--modules | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-finished--modules--business-profile | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-finished--modules--capital-structure | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-finished--modules--covenants | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-finished--modules--credit-snapshot | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-finished--modules--documentation-review | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-finished--modules--financial-analysis | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-finished--modules--financial-model-and-forecast | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-finished--modules--liquidity | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-finished--modules--management-and-ownership | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-finished--modules--peer-comparison | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-finished--modules--rating-view | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-finished--modules--recovery | 7 | 6 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-finished--modules--risks-and-watch-list | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-finished--overview | 14 | 13 | 0 | 1 | 0 | 1 |
| static | library--transdigm--activity-interrupted--changes | 4 | 3 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-interrupted--evidence--gaps | 21 | 20 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-interrupted--evidence--record | 68 | 65 | 1 | 2 | 0 | 0 |
| static | library--transdigm--activity-interrupted--evidence--sources | 11 | 9 | 1 | 1 | 0 | 0 |
| static | library--transdigm--activity-interrupted--evidence--summary | 16 | 14 | 1 | 1 | 0 | 0 |
| static | library--transdigm--activity-interrupted--evidence--trace | 7 | 6 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-interrupted--modules | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-interrupted--modules--business-profile | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-interrupted--modules--capital-structure | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-interrupted--modules--covenants | 7 | 6 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-interrupted--modules--credit-snapshot | 5 | 4 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-interrupted--modules--documentation-review | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-interrupted--modules--financial-analysis | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-interrupted--modules--financial-model-and-forecast | 5 | 4 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-interrupted--modules--liquidity | 8 | 7 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-interrupted--modules--management-and-ownership | 5 | 4 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-interrupted--modules--peer-comparison | 5 | 4 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-interrupted--modules--rating-view | 5 | 4 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-interrupted--modules--recovery | 5 | 4 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-interrupted--modules--risks-and-watch-list | 5 | 4 | 0 | 1 | 0 | 0 |
| static | library--transdigm--activity-interrupted--overview | 14 | 13 | 0 | 1 | 0 | 1 |
| static | library--transdigm--history | 11 | 10 | 0 | 1 | 0 | 0 |
| static | model--runs | 2 | 1 | 0 | 1 | 0 | 0 |
| static | model--transdigm--2025-06-30--analysis | 71 | 70 | 0 | 1 | 0 | 0 |
| static | model--transdigm--2025-06-30--forecast | 151 | 150 | 0 | 1 | 0 | 0 |
| static | model--transdigm--2025-06-30--front | 32 | 31 | 0 | 1 | 0 | 0 |
| static | model--transdigm--2025-06-30--limitations | 43 | 42 | 0 | 1 | 0 | 0 |
| static | model--transdigm--2025-06-30--portfolio-fit | 84 | 83 | 0 | 1 | 0 | 0 |
| static | model--transdigm--2025-06-30--statements | 241 | 238 | 2 | 1 | 0 | 0 |
| static | model--transdigm--2025-06-30--statements--case-downside-case | 241 | 238 | 2 | 1 | 0 | 0 |

8 further screens have only "matches source" and "derived" items and no omitted source item.

## Derived items, by computation

| Surface | Computation | Items | Recomputed here | Where it is computed |
| --- | --- | ---: | --- | --- |
| connected | forecast model output | 710 | no (named only) | src/deploy_workflow/owners/cpos_forecast.py and the model files the service publishes (forecast_exact.json, calculation.json); not in a handoff and not recomputed here |
| connected | script checks | 483 | no (named only) | the service's checks over the module handoffs (src/deploy_workflow/owners/cpos_*check*); not a handoff value and not recomputed here |
| connected | chart value-axis ticks, checked here: evenly spaced at a round step (1, 2, 2.5 or 5 times a power of ten) | 217 | yes | web/src/pages/connected/visuals/visualData.ts ticks (value-axis ticks at round numbers) |
| connected | run record | 124 | no (named only) | the service's record of requests, files and spend for the run; not a handoff value |
| connected | digest of a delivered handoff or record | 67 | no (named only) | the service's record; the delivered handoff text (with its request and sources preamble) is not kept in this repository, so the digest is not recomputed |
| connected | event year group, checked here against the Events tables' dates | 61 | yes | web/src/pages/connected/visuals/EventLane.tsx and report/Calendar.tsx (events grouped by status and by year of the event date) |
| connected | page wording | 36 | no (named only) | label drawn by the page (heading, control, state word, module name); not a source sentence |
| connected | event counts by status, recounted here from the Events tables | 33 | yes | web/src/pages/connected/visuals/EventLane.tsx and report/Calendar.tsx (events grouped by status and by year of the event date) |
| connected | run counts and file identities | 23 | no (named only) | web/src/pages/connected/report/Evidence.tsx over the run's own record (counts of modules, script checks, source files) |
| connected | confidence score | 15 | yes | src/deploy_workflow/confidence.py score (weights, gate and penalties as documented there), recomputed here from the handoff's Confidence inputs table |
| connected | chart text with no data attribute: an axis tick that is not evenly spaced, or a node count (named only) | 8 | no (named only) | web/src/pages/connected/visuals/visualData.ts ticks (value-axis ticks at round numbers) |
| connected | year-on-year change = latest period - period a year earlier, exact decimal, recomputed here from the CP-1 chart table | 5 | yes | src/deploy_workflow/credit_os_catalogue.py handoff_metrics, prior_metric, _exact_change (latest row of the CP-1 chart table, change against the row a year earlier); web/src/pages/connected/report/YearChange.tsx, HeadlineFigures.tsx |
| connected | event status word, checked here against the Events tables' Status column | 4 | yes | web/src/pages/connected/visuals/EventLane.tsx and report/Calendar.tsx (events grouped by status and by year of the event date) |
| static | page wording with a digit | 50 | no (named only) | a label or legend drawn by the page; not a source value |

## Source items a screen should show and does not

Bottom line, Key findings, Contrary evidence and Limitations lines of a handoff not drawn on its module's screen: 0. Chart-data rows not fully shown: 0. Basis lines under a paragraph neither drawn nor in a source drawer: 0.

| Surface | Module or screen | confidence inputs rows | events rows | map rows | module body | other prose lines | overview | register rows | table rows |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| connected | CP-0 | 14 | 4 |  |  |  |  | 5 | 2 |
| connected | CP-1 | 14 |  |  |  |  |  | 6 | 15 |
| connected | CP-1A | 14 | 4 | 2 |  |  |  | 14 | 2 |
| connected | CP-2 | 14 |  | 1 |  |  |  | 2 | 4 |
| connected | CP-2A | 14 |  | 1 |  | 3 |  | 7 | 13 |
| connected | CP-2D | 14 | 4 |  |  |  |  |  | 2 |
| connected | CP-2E | 14 | 4 |  |  |  |  | 10 | 15 |
| connected | CP-2G | 14 |  |  |  | 2 |  | 6 | 2 |
| connected | CP-3 | 14 | 4 |  |  |  |  | 11 | 7 |
| connected | CP-3C | 14 | 4 |  |  |  |  |  | 2 |
| connected | CP-4 | 14 | 4 | 2 |  |  |  |  | 2 |
| connected | CP-5 | 14 |  | 1 |  |  |  | 4 | 2 |
| connected | CP-6 | 14 | 4 |  |  |  |  |  | 2 |
| connected | CP-DR | 14 | 4 |  |  |  |  | 4 | 2 |
| static | library--halden-aerostructures--2026-09-30--overview |  |  |  |  |  | 1 |  |  |
| static | library--halden-aerostructures--2026-09-30--modules--capital-structure |  |  |  | 1 |  |  |  |  |
| static | library--halden-aerostructures--2026-03-31--overview |  |  |  |  |  | 1 |  |  |
| static | library--halden-aerostructures--2025-09-30--overview |  |  |  |  |  | 1 |  |  |
| static | library--corvane-packaging--2026-06-30--overview |  |  |  |  |  | 1 |  |  |
| static | library--tessaly-foods--2026-09-30--overview |  |  |  |  |  | 1 |  |  |
| static | library--ardenne-cable--2026-03-31--overview |  |  |  |  |  | 1 |  |  |
| static | library--lumora-health--2026-09-30--overview |  |  |  |  |  | 1 |  |  |
| static | library--brevane-marine--r-0412--overview |  |  |  |  |  | 1 |  |  |
| static | library--transdigm--activity-finished--overview |  |  |  |  |  | 1 |  |  |
| static | library--transdigm--activity-failed--overview |  |  |  |  |  | 1 |  |  |
| static | library--transdigm--activity-capped--overview |  |  |  |  |  | 1 |  |  |
| static | library--transdigm--activity-interrupted--overview |  |  |  |  |  | 1 |  |  |
| static | library--transdigm--2025-06-30--overview |  |  |  |  |  | 1 |  |  |

By verdict: some cells not drawn 39; basis not shown 57; in the source drawer only 195; row not drawn 89; not drawn 19. A "table row" is a handoff table row; "row not drawn" means its first cell is on no part of the module's screen, "basis not shown" means the row is drawn but its Basis or Source cell is neither drawn nor in a source drawer.

The full list, with source location, the cells not drawn and where else the text is drawn, is `omissions` in the JSON file.

Not verified: see README.md, "Comparison", end of section.
