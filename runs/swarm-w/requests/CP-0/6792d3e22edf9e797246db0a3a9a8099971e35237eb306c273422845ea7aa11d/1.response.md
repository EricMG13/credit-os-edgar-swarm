---
module_id: CP-0
module_name: SourceReadiness
issuer_id: w
issuer_name: Wayfair Inc.
analysis_date: 2026-11-05
pathway: credit_snapshot
run_id: w-2026-11-05-credit_snapshot-host
---

## Request

Wayfair Inc. (issuer id w), as of 2026-11-05, credit_snapshot pathway (the full credit assessment). Scope: whether the seven supplied filings and earnings releases support Business & governance, Financial foundation and Fundamental credit, and what limits apply.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_w-20251231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-19 (date signed; filing date not stated) | 8ef4121e11689a0c5565962f85cfafc125f39e54e08df2c3b6c79eaf68e84e4d | Audited 2025 statements with 2024 and 2023 comparatives; debt, revolver, covenant, guarantee, lease, commitment, segment, ownership and exhibit evidence |
| 10-Q_2026-03-31_w-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-04-30 (date signed; filing date not stated) | 79f74f0ba7972d92f75742a90568a879936b4ecf939af4026c967768203f5019 | First-quarter 2026 statements, debt and liquidity at 2026-03-31, Adjusted EBITDA and Free Cash Flow reconciliations |
| 10-Q_2026-06-30_w-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-08-04 (date signed; filing date not stated) | e52476a4ad53b4396b19ba631702cd30b522eb54aecabc978fa654467e46935a | Second-quarter and first-half 2026 statements, 2034 secured notes issue, 2028 convertible notes settlement, indenture exhibit |
| 10-Q_2026-09-30_w-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-11-04 (date signed; filing date not stated) | 9224a05a14ec554aa7f19d7d2ae6869a07a996f1d60af972e32e1595aefdd8c3 | Latest statements, debt, liquidity, covenant and post-quarter evidence at 2026-09-30; nine-month 2026 results |
| EX-99.1_2026-04-30_a2026-04x30ex991.htm.jsonl | Exhibit 99.1 earnings release for the first quarter ended March 31, 2026 | 2026-04-30 | a3debc23ce5c3027daa8862793a0e092539f933475881f34dd98f47a74a5cd40 | First-quarter reported and adjusted measures, operating metrics, liquidity statement |
| EX-99.1_2026-08-04_a2026-08x04ex991.htm.jsonl | Exhibit 99.1 earnings release for the second quarter ended June 30, 2026 | 2026-08-04 | bd4c1a88b49b8e4441931ccafc159f4e1f6d02b8d8bf7918ce20a28d44352f87 | Second-quarter reported and adjusted measures, operating metrics, liquidity statement |
| EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl | Exhibit 99.1 earnings release for the third quarter ended September 30, 2026 | 2026-11-04 | 2907d0c055207f89b1a08967b4ff5b2fe5bb05c815f0f3ad4e1479f1b9a353cb | Third-quarter reported and adjusted measures, operating metrics, liquidity statement |

No upstream handoff was supplied: Source readiness is the first module of this run.

## Findings

### Bottom line

The seven supplied documents support the three requested analyses of Wayfair Inc., so creditors can rely on filed statements for debt, cash and earnings through 2026-09-30, but the secured notes' covenant and guarantee terms rest on the filings' summaries alone. Nothing in the set blocks any of the three analyses. The limits are the missing executed indentures and credit agreement, an unsupplied proxy statement, and the absence of a rating, bond price quotes, peers and quantified guidance.
Basis: 10-Q_2026-09-30_w-20260930.htm.jsonl, pages 10–11; 10-K_2025-12-31_w-20251231.htm.jsonl, pages 149–151

The latest filing and release were signed on 2026-11-04, 1 day before the as-of date, and the latest balance sheet is dated 2026-09-30, 36 days before it. The December 2025 balance sheet figures checked (total assets, total debt and stockholders' deficit) agree across the annual report and the later filings and releases that state them.
Basis: 10-Q_2026-09-30_w-20260930.htm.jsonl, page 56; EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl, page 1; calculation C1; calculation C2

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
|---|---|---|---|---|---|---|
| 2026-02-19 | day | 2026-02-19 | Annual report for the year ended 2025-12-31 signed | Historical — Form 10-K signed February 19, 2026 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 152 | Latest audited statements; carries the 2025-12-31 balance sheet and the 2025, 2024 and 2023 results |
| 2026-04-30 | day | 2026-04-30 | First-quarter 2026 results announced | Historical — reported financial results for the first quarter ended March 31, 2026 | EX-99.1_2026-04-30_a2026-04x30ex991.htm.jsonl, page 1 | First-quarter reported and adjusted measures and liquidity statement |
| 2026-04-30 | day | 2026-04-30 | First-quarter 2026 quarterly report signed | Historical — Form 10-Q signed April 30, 2026 | 10-Q_2026-03-31_w-20260331.htm.jsonl, page 45 | Balance sheet, debt note and covenant description at 2026-03-31 |
| 2026-08-04 | day | 2026-08-04 | Second-quarter 2026 results announced | Historical — reported financial results for the second quarter ended June 30, 2026 | EX-99.1_2026-08-04_a2026-08x04ex991.htm.jsonl, page 1 | Second-quarter reported and adjusted measures and liquidity statement |
| 2026-08-04 | day | 2026-08-04 | Second-quarter 2026 quarterly report signed | Historical — Form 10-Q signed August 4, 2026 | 10-Q_2026-06-30_w-20260630.htm.jsonl, page 57 | Balance sheet at 2026-06-30, 2034 secured notes issue and 2028 convertible notes settlement |
| 2026-11-04 | day | 2026-11-04 | Third-quarter 2026 results announced | Historical — reported financial results for the third quarter ended September 30, 2026 | EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl, page 1 | Latest reported and adjusted measures and liquidity statement before the as-of date |
| 2026-11-04 | day | 2026-11-04 | Third-quarter 2026 quarterly report signed | Historical — Form 10-Q signed November 4, 2026 | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 56 | Latest balance sheet at 2026-09-30, debt note, covenant and post-quarter evidence |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 13 |
| Calculated | 2 |
| Assumption-Based | 0 |
| Analyst Inference | 6 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 0 |
| Fields present | 10 |
| Fields total | 10 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 1 |
| MINOR | 8 |

### T1 - Input gate

| Gate item | Value | Status | Source |
|---|---|---|---|
| Reporting entity | Wayfair Inc., consolidated; Delaware registrant, Commission file number 001-36666, Class A common stock listed on the New York Stock Exchange under W | Stated | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 1 |
| Debt-issuing entities | Wayfair LLC, a subsidiary, issues the senior secured notes and borrows under the revolver; Wayfair Inc. issues the convertible notes with Wayfair LLC as guarantor; the secured notes and revolver are guaranteed by Wayfair Inc. and certain subsidiaries that the supplied text does not name | Stated; guarantor list not supplied | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 119–125; 10-K_2025-12-31_w-20251231.htm.jsonl, page 130; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 41 |
| Pathway and objective | credit_snapshot, the full credit assessment: whether to own the issuer, in which instrument, and why. No objective was stated, so the pathway's use case governs; this run covers source readiness, financial foundation, business and governance, and fundamental credit only | Pathway use case | Run settings |
| As-of date and cutoff | 2026-11-05 and 2026-11-05 | Stated | Run settings |
| Current and prior period | Q3 2026 (quarter ended 2026-09-30) and FY2025 (year ended 2025-12-31) | Stated | Run settings |
| Reporting currency and scale | USD; the statements show US dollars in millions except per-share data | Stated | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 2 |
| Requested modules | CP-0, CP-1, CP-1A, CP-2 | Stated | Run settings |
| Run type and case kind | research; public | Stated | Run settings |
| Governing legal documents | None supplied; the settings state none | Gap | Run settings |
| Credit ratings | None supplied in the settings; none stated in any of the seven documents, which mention ratings only in a risk factor and in a covenant-suspension term | Gap | Run settings; 10-K_2025-12-31_w-20251231.htm.jsonl, page 54; 10-K_2025-12-31_w-20251231.htm.jsonl, page 122 |
| Market quotes | None supplied | Gap | Run settings |
| Peer set and valuation inputs | None supplied: no peers or precedents are listed | Gap | Run settings |
| Portfolio, prior case and management bridge | None supplied | Gap | Run settings |
| Prior run of this pathway | None; first run | Stated | Run settings |
| Freshness | Latest balance sheet 2026-09-30 is 36 days before the as-of date; latest signature 2026-11-04 is 1 day before it | Calculated | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 56; calculation C1; calculation C2 |
| Source gate for the requested modules | pass: the annual report, three quarterly reports and three earnings releases that the requested modules read are present; limits are listed under Gaps | Analyst judgement | 10-K_2025-12-31_w-20251231.htm.jsonl; 10-Q_2026-03-31_w-20260331.htm.jsonl; 10-Q_2026-06-30_w-20260630.htm.jsonl; 10-Q_2026-09-30_w-20260930.htm.jsonl; EX-99.1_2026-04-30_a2026-04x30ex991.htm.jsonl; EX-99.1_2026-08-04_a2026-08x04ex991.htm.jsonl; EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl |

### T2 - Source register

| Source ID | Source | Document | Source tier | Entity and period | Quality | Usability | Limitation |
|---|---|---|---|---|---|---|---|
| S1 | 10-K_2025-12-31_w-20251231.htm.jsonl | Annual report on Form 10-K | 1 - primary filing | Wayfair Inc.; year ended 2025-12-31 | Audited: PricewaterhouseCoopers LLP opinion on 2025 signed 2026-02-19; Ernst & Young LLP opinion on 2024 and 2023 signed 2025-02-20; statements and notes present in the text extract | Usable for Financial foundation, Business & governance and Fundamental credit | Part III items are incorporated by reference from a proxy statement that is not supplied; exhibits are listed but not supplied; text extract only |
| S2 | 10-Q_2026-03-31_w-20260331.htm.jsonl | Quarterly report on Form 10-Q | 1 - primary filing | Wayfair Inc.; quarter ended 2026-03-31 | Unaudited interim statements and notes present in the text extract | Usable for Financial foundation and Fundamental credit | Cash flows are for three months only; text extract only |
| S3 | 10-Q_2026-06-30_w-20260630.htm.jsonl | Quarterly report on Form 10-Q | 1 - primary filing | Wayfair Inc.; quarter and six months ended 2026-06-30 | Unaudited interim statements and notes present in the text extract | Usable for Financial foundation, Business & governance and Fundamental credit | Cash flows are for six months only; text extract only |
| S4 | 10-Q_2026-09-30_w-20260930.htm.jsonl | Quarterly report on Form 10-Q | 1 - primary filing | Wayfair Inc.; quarter and nine months ended 2026-09-30 | Unaudited interim statements and notes present in the text extract | Usable for Financial foundation, Business & governance and Fundamental credit; latest periodic report before the as-of date | Cash flows are for nine months only; no separate subsequent-events note; text extract only |
| S5 | EX-99.1_2026-04-30_a2026-04x30ex991.htm.jsonl | Exhibit 99.1 earnings release | 2 - issuer release | Wayfair Inc.; quarter ended 2026-03-31 | Unaudited release with statements and non-GAAP reconciliations present in the text extract | Usable as supporting evidence for Financial foundation | Issuer-defined measures; no quantified outlook; text extract only |
| S6 | EX-99.1_2026-08-04_a2026-08x04ex991.htm.jsonl | Exhibit 99.1 earnings release | 2 - issuer release | Wayfair Inc.; quarter ended 2026-06-30 | Unaudited release with statements and non-GAAP reconciliations present in the text extract | Usable as supporting evidence for Financial foundation | Issuer-defined measures; no quantified outlook; text extract only |
| S7 | EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl | Exhibit 99.1 earnings release | 2 - issuer release | Wayfair Inc.; quarter ended 2026-09-30 | Unaudited release with statements and non-GAAP reconciliations present in the text extract | Usable as supporting evidence for Financial foundation and Fundamental credit | Issuer-defined measures; no quantified outlook; text extract only |

### T4 - Content-to-module map

| Module | Evidence demand | Source | Readiness effect | Limitation |
|---|---|---|---|---|
| CP-1 | Annual balance sheet, operations and cash flows for FY2025 with FY2024 and FY2023 comparatives | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 99–102 | READY | Operations and cash flows carry three years; the balance sheet carries two |
| CP-1 | Interim statements for Q1, six months and nine months 2026 with 2025 comparatives | 10-Q_2026-03-31_w-20260331.htm.jsonl, pages 2–4; 10-Q_2026-06-30_w-20260630.htm.jsonl, pages 2–4; 10-Q_2026-09-30_w-20260930.htm.jsonl, pages 2–5 | READY | Cash flows are year-to-date only, so a discrete Q2 or Q3 cash flow is a subtraction |
| CP-1 | Four discrete quarters: Q4 2025 and Q1 to Q3 2026 | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_w-20260930.htm.jsonl, pages 3–4; EX-99.1_2026-04-30_a2026-04x30ex991.htm.jsonl, page 1; EX-99.1_2026-08-04_a2026-08x04ex991.htm.jsonl, page 1; EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl, page 1 | READY_WITH_LIMITATIONS | Q4 2025 is stated in no document; it is the 2025 year less the nine months 2025 comparatives, a subtraction rather than a stated figure |
| CP-1 | Debt by instrument at 2026-09-30 and 2025-12-31: principal, carrying value, coupon, maturity, rank, security | 10-Q_2026-09-30_w-20260930.htm.jsonl, pages 10–15; 10-K_2025-12-31_w-20251231.htm.jsonl, pages 118–131 | READY | Guarantors are not named; indenture terms are not supplied |
| CP-1 | Revolver commitment, letters of credit drawn on it, maintenance covenant | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 119–120; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 11; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 42 | READY_WITH_LIMITATIONS | The senior secured leverage test is described (no more than 4.0 to 1.0) but its credit-agreement definition and the reported ratio are not in the text; the springing earlier maturity is not described |
| CP-1 | Liquidity: cash, short-term investments, revolver availability net of letters of credit | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 11; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 39; EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl, page 1 | READY_WITH_LIMITATIONS | The 10-Q table and the release define total liquidity differently |
| CP-1 | Adjusted EBITDA and Free Cash Flow reconciliations | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 87–89; 10-Q_2026-03-31_w-20260331.htm.jsonl, pages 38–40; 10-Q_2026-06-30_w-20260630.htm.jsonl, pages 48–50; 10-Q_2026-09-30_w-20260930.htm.jsonl, pages 48–50; EX-99.1_2026-04-30_a2026-04x30ex991.htm.jsonl, pages 11–12; EX-99.1_2026-08-04_a2026-08x04ex991.htm.jsonl, pages 12–13; EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl, pages 11–12 | READY | Adjusted EBITDA is the issuer's definition; no house-adjusted measure is supplied |
| CP-1 | Cash interest paid | 10-K_2025-12-31_w-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 5 | READY | Cash taxes are stated for the year only (page 137 of the annual report), not for interim periods |
| CP-1 | Leases, purchase obligations and contractual obligations | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 83–84; 10-K_2025-12-31_w-20251231.htm.jsonl, page 106; 10-K_2025-12-31_w-20251231.htm.jsonl, pages 117–118; 10-K_2025-12-31_w-20251231.htm.jsonl, page 132 | READY | The annual report states no material finance lease arrangements; no supplier finance, factoring or pension item appears in any of the seven documents |
| CP-1 | Segment results for the U.S. and International | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 142–146; 10-Q_2026-09-30_w-20260930.htm.jsonl, pages 22–25 | READY | None |
| CP-1 | Events after the 2026-09-30 balance sheet date up to the cutoff | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 18; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 42 | READY | One dated event is stated: settlement of an equity instrument on 2026-10-28 for a cash payment of USD 64 million; the 10-Q has no separate subsequent-events note |
| CP-1A | Business model, customers, operations and competition | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 9–16; 10-Q_2026-09-30_w-20260930.htm.jsonl, pages 27–28 | READY | Company-written description; no third-party industry data supplied |
| CP-1A | Ownership and control: dual-class voting | 10-K_2025-12-31_w-20251231.htm.jsonl, page 62; 10-K_2025-12-31_w-20251231.htm.jsonl, page 134; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 1 | READY | Voting and economic percentages are stated at 2025-12-31 only |
| CP-1A | Group structure: issuer, borrower and guarantors | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 119–125; 10-K_2025-12-31_w-20251231.htm.jsonl, page 130; 10-K_2025-12-31_w-20251231.htm.jsonl, page 151; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 41 | READY_WITH_LIMITATIONS | Guarantors are named only as Wayfair Inc. and certain subsidiaries; the subsidiary list is an exhibit that is not supplied |
| CP-1A | Governance: board, committees, executive pay and related-party matters | 10-K_2025-12-31_w-20251231.htm.jsonl, page 148 | Restricts governance conclusions to the disclosed control structure | Part III items are incorporated by reference from a proxy statement that is not supplied |
| CP-1A | Transactions and capital-allocation events | 10-K_2025-12-31_w-20251231.htm.jsonl, page 80; 10-Q_2026-09-30_w-20260930.htm.jsonl, pages 41–42; 10-Q_2026-06-30_w-20260630.htm.jsonl, page 56 | READY | No acquisition, merger or sponsor transaction is described in any of the seven documents |
| CP-2 | Operating drivers and risk factors for the credit synthesis | 10-Q_2026-09-30_w-20260930.htm.jsonl, pages 27–38; 10-K_2025-12-31_w-20251231.htm.jsonl, pages 70–77; 10-K_2025-12-31_w-20251231.htm.jsonl, pages 52–54; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 55 | READY | None |
| CP-2 | Customer and order metrics | EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl, pages 1–3; 10-Q_2026-09-30_w-20260930.htm.jsonl, pages 28–31 | READY | None |
| CP-2 | Forward view and outlook | EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl, pages 4–5 | Restricts the outlook to analyst assumption | No quantified guidance appears in any of the seven documents; the releases carry forward-looking statements only |
| Legal & covenants (CP-4), not requested | Executed indentures and credit agreement | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 119–123; 10-K_2025-12-31_w-20251231.htm.jsonl, pages 149–151; 10-Q_2026-06-30_w-20260630.htm.jsonl, page 56 | BLOCKED if requested | Documents not supplied; only the filings' summaries are available |
| Ratings & triggers (CP-2H), not requested | Agency ratings and rating triggers | 10-K_2025-12-31_w-20251231.htm.jsonl, page 54; 10-K_2025-12-31_w-20251231.htm.jsonl, page 122 | BLOCKED if requested | No rating is stated in any source or in the settings |
| Peer benchmark (CP-1C), not requested | Peer set and multiples | Run settings | BLOCKED if requested | No peers or precedents supplied |
| Market-implied risk (CP-3D) and Security selection (CP-3), not requested | Bond price quotes | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 15; 10-K_2025-12-31_w-20251231.htm.jsonl, page 130 | BLOCKED if requested | The filings give estimated fair values of the notes only, not price quotes |
| Liquidity (CP-2D) and Refinancing & LME (CP-3C), not requested | Cash, revolver, maturity and convertible-note inputs | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 11; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 39; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 41; 10-K_2025-12-31_w-20251231.htm.jsonl, page 83 | READY_WITH_LIMITATIONS if requested | Same limits as the financial foundation rows above |

### T6 - Evidence trace

| Evidence ID | Source | Original document | What the locator shows | Used by |
|---|---|---|---|---|
| E01 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 1 | 10-K_2025-12-31_w-20251231.htm | Cover: fiscal year ended December 31, 2025; registrant Wayfair Inc. | CP-1A |
| E02 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 62 | 10-K_2025-12-31_w-20251231.htm | Co-founders and affiliates hold approximately 18.3% of the economic interest and 67.4% of the voting power at 2025-12-31 | CP-1A, CP-2 |
| E03 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 83 | 10-K_2025-12-31_w-20251231.htm | Contractual obligations table at 2025-12-31 | CP-1, CP-2 |
| E04 | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 99–100 | 10-K_2025-12-31_w-20251231.htm | Consolidated balance sheets at 2025-12-31 and 2024-12-31 | CP-1 |
| E05 | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 100–101 | 10-K_2025-12-31_w-20251231.htm | Consolidated statements of operations and cash flows for 2025, 2024 and 2023 | CP-1 |
| E06 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 118 | 10-K_2025-12-31_w-20251231.htm | Debt table: principal and carrying value by instrument at 2025-12-31 and 2024-12-31 | CP-1 |
| E07 | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 119–120 | 10-K_2025-12-31_w-20251231.htm | Revolver terms, guarantors, liens and the 4.00 to 1.00 senior secured leverage test | CP-1, CP-1A |
| E08 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 130 | 10-K_2025-12-31_w-20251231.htm | Ranking and guarantee description of the secured and convertible notes | CP-1A, CP-2 |
| E09 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 88 | 10-K_2025-12-31_w-20251231.htm | Reconciliation of net loss to Adjusted EBITDA for 2025, 2024 and 2023 | CP-1 |
| E10 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 137 | 10-K_2025-12-31_w-20251231.htm | Income taxes paid in 2025: state and foreign payments | CP-1 |
| E11 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 142 | 10-K_2025-12-31_w-20251231.htm | Note 13, segment and geographic information | CP-1 |
| E12 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 148 | 10-K_2025-12-31_w-20251231.htm | Part III information incorporated by reference from the proxy statement | CP-1A |
| E13 | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 149–151 | 10-K_2025-12-31_w-20251231.htm | Exhibit index: indentures, credit agreement and subsidiary list incorporated or listed | CP-1A, CP-2 |
| E14 | 10-K_2025-12-31_w-20251231.htm.jsonl, page 152 | 10-K_2025-12-31_w-20251231.htm | Signature date February 19, 2026 | CP-0 |
| E15 | 10-Q_2026-03-31_w-20260331.htm.jsonl, page 2 | 10-Q_2026-03-31_w-20260331.htm | Balance sheet at 2026-03-31 and 2025-12-31 | CP-1 |
| E16 | 10-Q_2026-03-31_w-20260331.htm.jsonl, page 45 | 10-Q_2026-03-31_w-20260331.htm | Signature date April 30, 2026 | CP-0 |
| E17 | 10-Q_2026-06-30_w-20260630.htm.jsonl, page 2 | 10-Q_2026-06-30_w-20260630.htm | Balance sheet at 2026-06-30 and 2025-12-31 | CP-1 |
| E18 | 10-Q_2026-06-30_w-20260630.htm.jsonl, page 56 | 10-Q_2026-06-30_w-20260630.htm | Exhibit list including the indenture dated May 18, 2026 for the 2034 secured notes | CP-1A |
| E19 | 10-Q_2026-06-30_w-20260630.htm.jsonl, page 57 | 10-Q_2026-06-30_w-20260630.htm | Signature date August 4, 2026 | CP-0 |
| E20 | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 1 | 10-Q_2026-09-30_w-20260930.htm | Cover: quarter ended September 30, 2026; shares outstanding at October 28, 2026 | CP-1A |
| E21 | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 2 | 10-Q_2026-09-30_w-20260930.htm | Balance sheet at 2026-09-30 and 2025-12-31 | CP-1 |
| E22 | 10-Q_2026-09-30_w-20260930.htm.jsonl, pages 3–5 | 10-Q_2026-09-30_w-20260930.htm | Statements of operations and cash flows for three and nine months, and cash paid for interest | CP-1 |
| E23 | 10-Q_2026-09-30_w-20260930.htm.jsonl, pages 10–11 | 10-Q_2026-09-30_w-20260930.htm | Note 4 debt table: principal and carrying value by instrument at 2026-09-30; revolver and letters of credit | CP-1, CP-2 |
| E24 | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 15 | 10-Q_2026-09-30_w-20260930.htm | Estimated fair values of the notes and the 2027 notes' if-converted value | CP-1 |
| E25 | 10-Q_2026-09-30_w-20260930.htm.jsonl, pages 22–25 | 10-Q_2026-09-30_w-20260930.htm | Note 9, segment and geographic information | CP-1 |
| E26 | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 39 | 10-Q_2026-09-30_w-20260930.htm | Sources of liquidity table at 2026-09-30, stated excluding the revolver | CP-1 |
| E27 | 10-Q_2026-09-30_w-20260930.htm.jsonl, pages 41–42 | 10-Q_2026-09-30_w-20260930.htm | 2026 debt transactions, 2027 notes convertibility, covenant description and 2026-10-28 settlement | CP-1, CP-1A, CP-2 |
| E28 | 10-Q_2026-09-30_w-20260930.htm.jsonl, pages 48–50 | 10-Q_2026-09-30_w-20260930.htm | Adjusted EBITDA and Free Cash Flow definitions and reconciliations | CP-1 |
| E29 | 10-Q_2026-09-30_w-20260930.htm.jsonl, page 56 | 10-Q_2026-09-30_w-20260930.htm | Exhibit list and signature date November 4, 2026 | CP-0 |
| E30 | EX-99.1_2026-04-30_a2026-04x30ex991.htm.jsonl, page 1 | EX-99.1_2026-04-30_a2026-04x30ex991.htm | Release dated April 30, 2026 for the first quarter ended March 31, 2026 | CP-0 |
| E31 | EX-99.1_2026-08-04_a2026-08x04ex991.htm.jsonl, page 1 | EX-99.1_2026-08-04_a2026-08x04ex991.htm | Release dated August 4, 2026 for the second quarter ended June 30, 2026 | CP-0 |
| E32 | EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl, page 1 | EX-99.1_2026-11-04_a2026-11x04ex991.htm | Release dated November 4, 2026; total liquidity stated as USD 1.5 billion including revolver availability | CP-0, CP-1 |
| E33 | EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl, pages 11–12 | EX-99.1_2026-11-04_a2026-11x04ex991.htm | Adjusted EBITDA and Free Cash Flow reconciliations for the third quarter and nine months | CP-1 |

### P3 - Input sources

| Source ID | Source | Original document | Original document sha256 stated in the extract | Family | Authority | Entity | Period | Version links |
|---|---|---|---|---|---|---|---|---|
| S1 | 10-K_2025-12-31_w-20251231.htm.jsonl | 10-K_2025-12-31_w-20251231.htm | 86c838a51d2b9569f95db6d717159fc15aca050e93bab9134762564563a3fac8 | Annual report | Primary filing | Wayfair Inc. | Year ended 2025-12-31 | Base annual document; its 2025-12-31 balance sheet is the comparative in S2, S3 and S4 |
| S2 | 10-Q_2026-03-31_w-20260331.htm.jsonl | 10-Q_2026-03-31_w-20260331.htm | 6d60aacfe51d72eab40eddb27a0281519f85c8f5e22812f3913a669d891b684c | Quarterly report | Primary filing | Wayfair Inc. | Quarter ended 2026-03-31 | Same period as S5; total assets equal in both |
| S3 | 10-Q_2026-06-30_w-20260630.htm.jsonl | 10-Q_2026-06-30_w-20260630.htm | d31226e924a5bb38b047cce186ffafaa7a4516625b6360ee0f9f48006d8ca135 | Quarterly report | Primary filing | Wayfair Inc. | Quarter and six months ended 2026-06-30 | Same period as S6; total assets equal in both |
| S4 | 10-Q_2026-09-30_w-20260930.htm.jsonl | 10-Q_2026-09-30_w-20260930.htm | 9b5284d67ebb077f8c210cff81434346250277d5f7471cf07945ca35f4b96b0b | Quarterly report | Primary filing | Wayfair Inc. | Quarter and nine months ended 2026-09-30 | Same period as S7; total assets equal in both; latest periodic report |
| S5 | EX-99.1_2026-04-30_a2026-04x30ex991.htm.jsonl | EX-99.1_2026-04-30_a2026-04x30ex991.htm | 7960ec6563a8528630b151708567dfefc5d6d7fbbe172ab009f366b4722266e2 | Earnings release | Issuer release | Wayfair Inc. | Quarter ended 2026-03-31 | Same period as S2 |
| S6 | EX-99.1_2026-08-04_a2026-08x04ex991.htm.jsonl | EX-99.1_2026-08-04_a2026-08x04ex991.htm | ccefae487fe7bba3b131392f63d6d1c4a314206cd26e512ca30bf6aceaeabf19 | Earnings release | Issuer release | Wayfair Inc. | Quarter ended 2026-06-30 | Same period as S3 |
| S7 | EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl | EX-99.1_2026-11-04_a2026-11x04ex991.htm | 94a572482bde7dc4e6845cc7b1b8b4d1a8c8ff881c19ede193ad7320bc3e0317 | Earnings release | Issuer release | Wayfair Inc. | Quarter ended 2026-09-30 | Same period as S4 |

## Calculations

| Calculation ID | Calculation | Inputs | Result |
|---|---|---|---|
| C1 | Days from the latest balance sheet date to the as-of date | 2026-09-30 and 2026-11-05 | 36 days |
| C2 | Days from the latest signature date to the as-of date | 2026-11-04 and 2026-11-05 | 1 day |
| C3 | Sources in the effective set | 1 annual report, 3 quarterly reports and 3 earnings releases | 7 sources |

## Gaps

| Gap ID | Type | Gap | Severity | Affected modules | Readiness effect | Remediation | Status | Source |
|---|---|---|---|---|---|---|---|---|
| G1 | Source gap: legal documents | The executed indentures for the convertible and secured notes, the amended and restated credit agreement of 2025-03-13 and the subsidiary list are listed as exhibits but not supplied; the circumstances of the revolver's springing earlier maturity are not described in any supplied text | MATERIAL | Fundamental credit; Business & governance (guarantor perimeter); any later legal work | READY_WITH_LIMITATIONS: covenant, guarantee and call terms are read from the filings' summaries only | Supply the executed documents | Open | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 119–123; 10-K_2025-12-31_w-20251231.htm.jsonl, pages 149–151; 10-Q_2026-06-30_w-20260630.htm.jsonl, page 56 |
| G2 | Source gap: governance | Board, committee, executive pay and related-party information is incorporated by reference from a proxy statement that is not supplied; no related-party note appears in the annual report | MINOR | Business & governance | Governance conclusions limited to the disclosed dual-class control | Supply the 2026 proxy statement | Open | 10-K_2025-12-31_w-20251231.htm.jsonl, page 2; 10-K_2025-12-31_w-20251231.htm.jsonl, page 148 |
| G3 | Source gap: market and rating inputs | No credit rating, bond price quote or peer set is supplied in the settings or stated in any of the seven documents | MINOR | Fundamental credit | Ratings, market pricing and relative value stay not established | Supply agency ratings, bond quotes and a peer set if those views are wanted | Open | Run settings; 10-K_2025-12-31_w-20251231.htm.jsonl, page 54; 10-K_2025-12-31_w-20251231.htm.jsonl, page 122 |
| G4 | Source gap: outlook | No quantified management guidance appears in the three releases or four filings | MINOR | Fundamental credit | Any forward view is analyst assumption | Supply guidance or a management bridge if one exists | Open | EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl, pages 4–5; 10-Q_2026-09-30_w-20260930.htm.jsonl, pages 27–29 |
| G5 | Derived period | Q4 2025 is stated in no document; it can be derived as the 2025 year less the nine months 2025 comparatives | MINOR | Financial foundation | Discrete quarter is a calculation, not a stated figure | Supply the fourth-quarter 2025 release if a stated figure is wanted | Open | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 100–101; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 3 |
| G6 | Source gap: cash taxes | Cash paid for income taxes is stated for 2025 only (state and foreign payments); no interim figure appears | MINOR | Financial foundation | Interim cash taxes not established | None needed unless cash taxes are required by quarter | Open | 10-K_2025-12-31_w-20251231.htm.jsonl, page 137; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 5 |
| G7 | Definition difference | The third-quarter release states total liquidity of USD 1.5 billion including revolver availability; the 10-Q table states total liquidity of USD 1,098 million excluding the revolver | MINOR | Financial foundation | Each figure is used with its own definition; neither is chosen over the other | None; present both with their definitions | Open | EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl, page 1; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 39 |
| G8 | Source gap: guarantor identity | The guarantors are named as Wayfair Inc. and certain subsidiaries only; no guarantor list or guarantor-only financial information is supplied | MINOR | Business & governance | Perimeter analysis uses consolidated figures only | Supply the subsidiary list and the guarantor schedule | Open | 10-K_2025-12-31_w-20251231.htm.jsonl, pages 119–125; 10-K_2025-12-31_w-20251231.htm.jsonl, page 130; 10-K_2025-12-31_w-20251231.htm.jsonl, page 151 |
| G9 | Extraction scope | Each source is a visible-text extract: tables are flattened to text lines and any chart or image content is absent; locators are extract pages, not printed pages | MINOR | All requested modules | Figures are read from text lines and checked against totals | None | Open | Each source, page 1 |
| X1 | Conflict check | No conflicting period, entity or amount found in the figures compared: total assets at 2025-12-31 and stockholders' deficit at 2025-12-31 agree in all seven documents; total debt at 2025-12-31 agrees in the annual report and the three quarterly reports; quarter-end total assets agree between each quarterly report and its release | None | All requested modules | No effect | None | Closed | 10-K_2025-12-31_w-20251231.htm.jsonl, page 99; 10-Q_2026-03-31_w-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_w-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_w-20260930.htm.jsonl, page 2; EX-99.1_2026-04-30_a2026-04x30ex991.htm.jsonl, page 6; EX-99.1_2026-08-04_a2026-08x04ex991.htm.jsonl, page 6; EX-99.1_2026-11-04_a2026-11x04ex991.htm.jsonl, page 5 |

## Next module

The orchestrator selects the next module.
