# CP-0 Source readiness: Acadia Healthcare Company, Inc. (achc-1520697)

## Request

Source readiness for Acadia Healthcare Company, Inc. (issuer achc-1520697), as of 2026-11-18, on the credit snapshot pathway. The scope is whether the five supplied filings can support the selected analysis, and which gaps and conflicts limit it.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-12-31_achc_achc-20241231.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2024 | 2025-02-27 (signature date; filing date not stated) | f4fb4ee7f776c3a53486e84dff817ccb64e69c095907ce2da38d839843ef00e1 | Prior-year baseline: 2024 and 2023 statements, debt note and subsequent-events note; audit report. |
| 10-K_2025-12-31_achc_achc-20251231.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2025 | 2026-02-26 (signature date; filing date not stated) | b3d6f4d63ac98f48e911f1812f1a1c279763dc3945d9bed9f82987cab40a4040 | Business description, risk factors, 2025 audited statements and notes, debt, liquidity, guarantor summary, exhibit list. |
| 10-Q_2026-03-31_achc_achc-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 March 2026 | 2026-04-29 (signature date; filing date not stated) | fa38fb491b5bc1b4fbf107fdffbb51d8a20c74ac05f0d7d75d28b13bbce07554 | First-quarter 2026 statements and notes; first 2026 report to print the revised 2025 year-end guarantor figures. |
| 10-Q_2026-06-30_achc_achc-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 June 2026 | 2026-07-28 (signature date; filing date not stated) | 228205ebfd8dfabf1dfae3884db7e3067a6f7fa9779a77332ec403040d3dd74c | Second-quarter and six-month 2026 statements and notes. |
| 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 September 2026 | 2026-11-04 (signature date; filing date not stated) | 0c3ffb3b7e5b3960ebd9422c7d2c9d3278dca169b50a99ced0cc5c3a1d8177a2 | Latest period: third-quarter and nine-month 2026 statements, debt note, covenants, liquidity, legal proceedings, guarantor summary. |

## Findings

### Bottom line

The five Acadia filings support a snapshot of reported financials, debt terms and liquidity through the quarter ended 2026-09-30, but they cannot test covenants, security or relative value.

No executed credit agreement or indenture, credit rating, market price, peer set or fund limit was supplied, and the filings print no covenant-basis earnings figure, so every statement about debt protections rests on the company's own summaries. One conflict is open: the company later revised its year-end 2025 guarantor figures, so two versions of them exist.
Basis: 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, pages 20–22; 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, page 52; 10-K_2025-12-31_achc_achc-20251231.htm.jsonl, page 98; 10-K_2025-12-31_achc_achc-20251231.htm.jsonl, page 111

### Source-readiness summary

| Area | Readiness | Key limitation | Source |
| --- | --- | --- | --- |
| Financial statements and debt note | READY_WITH_LIMITATIONS | Cash paid for interest and taxes is printed only in the annual reports | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, pages 2–5; 10-K_2025-12-31_achc_achc-20251231.htm.jsonl, pages 121–123 |
| Business and governance facts | READY_WITH_LIMITATIONS | The proxy statement that holds board, pay and ownership detail was not supplied | 10-K_2025-12-31_achc_achc-20251231.htm.jsonl, pages 3–14; 10-K_2025-12-31_achc_achc-20251231.htm.jsonl, pages 108–110 |
| Liquidity and maturities | READY | No cash-flow forecast; revolver and note maturities are printed | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, pages 21–23; 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, page 48 |
| Covenant testing | CONDITIONAL | Covenant levels are printed, but the agreement and covenant earnings are not | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, page 22 |
| Security, guarantees and recovery | CONDITIONAL | Indentures and the guarantor list were not supplied; guarantor figures exist in two versions | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, page 52; 10-K_2025-12-31_achc_achc-20251231.htm.jsonl, page 111 |
| Ratings, market prices and peers | BLOCKED | None of the three was supplied | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, page 30 |
| Portfolio fit | BLOCKED | No portfolio or fund limits supplied | Run settings |

### T1 - Input gate

| Item | Value | Source |
| --- | --- | --- |
| Objective | Credit snapshot pathway use case: a bounded view of reported credit position through the latest quarter. No other objective is stated in the run settings. | Run settings |
| Issuer and reporting entity | Acadia Healthcare Company, Inc., a Delaware holding company (Franklin, Tennessee; NASDAQ symbol ACHC) reporting consolidated results; one reportable segment, behavioral healthcare services | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, pages 1, 30–31 |
| Borrower, note issuer and guarantors | The Company is borrower under the Credit Agreement and issuer of the Senior Notes; substantially all wholly-owned U.S. subsidiaries guarantee both; the guarantors are not named in the extracts | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, pages 21, 23 |
| As-of date and cutoff | 2026-11-18 | Run settings |
| Current and prior period | Q3 2026 (quarter ended 2026-09-30; nine months 2026) against FY2025 (year ended 2025-12-31) | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, page 2 |
| Latest document | Quarterly report signed 2026-11-04; no supplied document is dated after the as-of date | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, page 55 |
| Case kind | Public issuer, listed equity | Run settings; 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, page 1 |
| Legal documents | None declared in the run settings; the exhibit lists name the indentures and the credit agreement but do not attach them | Run settings; 10-K_2025-12-31_achc_achc-20251231.htm.jsonl, page 111 |
| Portfolio, prior case, management bridge | None supplied | Run settings |
| Peer and market inputs | Peer source: none; issuer market capitalisation, net debt and enterprise value: blank in the run settings (not zero) | Run settings |
| Forward assumptions | All blank in the run settings (not zero) | Run settings |
| Research questions | None | Run settings |
| Gate status | READY_WITH_LIMITATIONS for the selected modules; CONDITIONAL or BLOCKED for the capabilities listed in T4 | Run settings; 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, pages 20–23 |

### T2 - Source register

| Source ID | File | Authority tier | Document family | Entity and perimeter | Period | Version relationship | Quality and reliability | Active representation | Limitation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| S1 | 10-K_2024-12-31_achc_achc-20241231.htm.jsonl | Tier 1: primary filing | Annual report, Form 10-K | Acadia Healthcare Company, Inc., consolidated | Year ended 2024-12-31 (with 2023 and 2022 comparatives) | Earlier annual report; its 2024 income statement lines agree with the 2024 comparatives in S2 | Audited statements, auditor report from Ernst & Young (pages 105–107); high | Pinned text extract, 143 page chunks | Table cells one per line; exhibits (indentures, credit agreement) listed, not attached |
| S2 | 10-K_2025-12-31_achc_achc-20251231.htm.jsonl | Tier 1: primary filing | Annual report, Form 10-K | Acadia Healthcare Company, Inc., consolidated; guarantor summary for wholly-owned subsidiary guarantors | Year ended 2025-12-31 (with 2024 and 2023 comparatives) | Current annual report; its 2025 guarantor summary was later revised by S3, S4 and S5 | Audited statements, auditor report from Ernst & Young with critical audit matters on revenue and goodwill (pages 117–121); high | Pinned text extract, 160 page chunks | Table cells one per line; proxy-statement items incorporated by reference, not supplied |
| S3 | 10-Q_2026-03-31_achc_achc-20260331.htm.jsonl | Tier 1: primary filing | Quarterly report, Form 10-Q | Acadia Healthcare Company, Inc., consolidated | Three months ended 2026-03-31 | Interim report; supersedes S2 for 2026 facts | Unaudited interim statements; high for reported figures | Pinned text extract, 48 page chunks | Table cells one per line; no cash paid for interest or taxes |
| S4 | 10-Q_2026-06-30_achc_achc-20260630.htm.jsonl | Tier 1: primary filing | Quarterly report, Form 10-Q | Acadia Healthcare Company, Inc., consolidated | Three and six months ended 2026-06-30 | Interim report; supersedes S3 for six-month facts | Unaudited interim statements; high for reported figures | Pinned text extract, 54 page chunks | Table cells one per line; no cash paid for interest or taxes |
| S5 | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl | Tier 1: primary filing | Quarterly report, Form 10-Q | Acadia Healthcare Company, Inc., consolidated | Three and nine months ended 2026-09-30 | Latest interim report; controls the current period; revises the 2025 year-end guarantor figures printed in S2 | Unaudited interim statements; high for reported figures | Pinned text extract, 55 page chunks | Table cells one per line; no cash paid for interest or taxes |

### T4 - Content-to-module map

| Module | Disposition | Evidence demand | Content located | Readiness | Limitation | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Financial foundation (CP-1) | Source-supported | Statements by quarter and year, debt by instrument, leases, cash flow | Statements for three and nine months 2026 and 2025; 2025, 2024 and 2023 annual statements; debt table by instrument; contractual obligations | READY_WITH_LIMITATIONS | Fourth-quarter 2025 is not printed (the 2025 annual figure and the nine-month 2025 comparative are); cash interest and taxes not printed for 2026 periods; no adjusted earnings measure in any filing | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, pages 2–5; 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, pages 20–23; 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, page 52; 10-K_2025-12-31_achc_achc-20251231.htm.jsonl, pages 121–123; 10-K_2025-12-31_achc_achc-20251231.htm.jsonl, page 146 |
| Business & governance (CP-1A) | Source-supported | Business model, ownership, management, governance, transactions | Facility and bed counts, payor mix, growth pathways, regulation, executive changes, share repurchase programme, charter provisions tied to Waud Capital Partners | READY_WITH_LIMITATIONS | Board, pay and holder detail sit in the proxy statement, which is not supplied | 10-K_2025-12-31_achc_achc-20251231.htm.jsonl, pages 3–14; 10-K_2025-12-31_achc_achc-20251231.htm.jsonl, page 74; 10-K_2025-12-31_achc_achc-20251231.htm.jsonl, pages 108–110; 10-Q_2026-03-31_achc_achc-20260331.htm.jsonl, page 27; 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, pages 35–37; 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, page 54 |
| Fundamental credit (CP-2) | Source-supported | Synthesis of earnings, leverage, liquidity, structure and downside | Filing evidence for each dimension | READY_WITH_LIMITATIONS | Covenant and security statements rest on the company's summaries only | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, pages 21–23; 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, page 52 |
| Earnings changes (CP-1B) | Source-supported | Quarter and year-to-date comparisons with drivers | Three and nine month comparisons with same-facility discussion | READY | None beyond the flattened tables | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, pages 38–45 |
| Peer benchmark (CP-1C) | Blocked | Peer financials and multiples | None: peer source is none in the run settings and the filings carry no peer data | BLOCKED | Peer comparison cannot be built | Run settings |
| Earnings quality (CP-1D) | Source-supported | Unusual items, cash conversion, accruals | Legal settlements, impairment, property sales, transaction, legal and other costs; operating cash flow | READY_WITH_LIMITATIONS | No management adjusted-earnings reconciliation in any filing | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, pages 3–5; 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, page 29 |
| Downside (CP-2A) | Source-supported | Base data and scenario inputs | Base statements and debt terms | READY_WITH_LIMITATIONS | Scenario assumptions are blank in the run settings | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, pages 2–5; run settings |
| Liquidity (CP-2D) | Source-supported | Cash, undrawn revolver net of letters of credit, near-term maturities | Cash, revolver availability, standby letters of credit, contractual obligations by period | READY | No cash-flow forecast supplied | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, page 22; 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, page 48; 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, page 52 |
| Rates, FX & hedging (CP-2E) | Source-supported for interest rate only | Floating-rate exposure, hedges, currency exposure | Fixed and variable debt split and a one-percent rate sensitivity; foreign-subsidiary cash; no hedge instruments found in any extract | READY_WITH_LIMITATIONS | No currency or macro inputs supplied | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, page 53; 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, page 48 |
| Forward credit model (CP-2G) | Blocked until assumptions exist | Forecast drivers and management guidance | Historical statements only; no guidance or projections in the filings | CONDITIONAL | Forward assumptions are blank in the run settings | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, pages 2–5; run settings |
| Ratings & triggers (CP-2H) | Blocked | Agency ratings, rating-linked terms | No rating agency or rating named in any extract; the facility margin steps with leverage, not rating | BLOCKED | Rating history and triggers not established | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, page 21 |
| Security selection (CP-3) | Blocked | Executed terms and market prices by instrument | Note terms in summary; no prices or quotes | BLOCKED | No executed documents or market data | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, page 23; 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, page 30 |
| Refinancing & LME (CP-3C) | Source-supported | Maturity ladder, facility terms, amendments | Facility maturity, note maturities 2028, 2029 and 2033, term-loan amortisation, 2025 refinancing | READY_WITH_LIMITATIONS | Indentures not supplied; no market pricing | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, pages 21–23; 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, page 52 |
| Market-implied risk (CP-3D) | Blocked | Quotes, spreads, equity price | Only fair values of the facility and notes in the fair-value note | BLOCKED | No market data supplied | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, page 30 |
| Legal & covenants (CP-4) | Blocked | Executed credit agreement and indentures | Company summary of covenant levels and compliance; exhibit list | BLOCKED | No executed governing document supplied | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, page 22; 10-K_2025-12-31_achc_achc-20251231.htm.jsonl, page 111 |
| Recovery & fulcrum (CP-4C) | Blocked | Executed security, guarantee and valuation inputs | Guarantee and collateral summary; guarantor summarised figures in two versions | BLOCKED | Guarantor list and security documents not supplied | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, pages 21, 52; 10-K_2025-12-31_achc_achc-20251231.htm.jsonl, page 98 |
| Evidence validation (CP-5) | Inapplicable | Audit of the earlier modules | Not part of the selected pathway | NOT_APPLICABLE | Not selected | Run settings |
| Committee decision (CP-6) | Blocked | Portfolio limits and fund constraints | No portfolio supplied | BLOCKED | Fund limits not supplied | Run settings |
| Changes since the last run (CP-8) | Inapplicable | An earlier run of the same issuer and pathway | None: first run of this pathway | NOT_APPLICABLE | Nothing to compare | Run settings |
| Short credit snapshot (CP-L10) | Source-supported | Screen of financial changes | Statements for the latest quarter, nine months and prior year | READY | None beyond the flattened tables | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, pages 2–5 |
| Research questions (CP-DR) | Inapplicable | A named research question | None stated in the run settings | NOT_APPLICABLE | No question to research | Run settings |

### T6 - Evidence trace

| Evidence ID | Evidence | Original document | Active representation | Locator | Source |
| --- | --- | --- | --- | --- | --- |
| E1 | Quarterly report signed 2026-11-04, quarter ended 2026-09-30 | Form 10-Q, signature block | Pinned text extract | Page chunk 55, line beginning "Dated: November 4, 2026" | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, page 55 |
| E2 | Annual report signed 2026-02-26, year ended 2025-12-31 | Form 10-K, signature block | Pinned text extract | Page chunk 115, line beginning "Dated: February 26, 2026" | 10-K_2025-12-31_achc_achc-20251231.htm.jsonl, page 115 |
| E3 | Balance sheet at 2026-09-30 against 2025-12-31 | Form 10-Q, condensed balance sheets | Pinned text extract | Page chunk 2 | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, page 2 |
| E4 | Income statement, three and nine months 2026 and 2025 | Form 10-Q, condensed statements of income | Pinned text extract | Page chunks 2–3 | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, pages 2–3 |
| E5 | Cash flow, nine months 2026 and 2025 | Form 10-Q, condensed statements of cash flows | Pinned text extract | Page chunks 4–5 | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, pages 4–5 |
| E6 | Annual statements for 2025, 2024 and 2023 | Form 10-K, consolidated statements | Pinned text extract | Page chunks 121–123 | 10-K_2025-12-31_achc_achc-20251231.htm.jsonl, pages 121–123 |
| E7 | Debt by instrument at 2026-09-30 and 2025-12-31 | Form 10-Q, Note 10 | Pinned text extract | Page chunk 20, table under "Long-term debt consisted of the following" | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, page 20 |
| E8 | Credit Agreement size, maturity, pricing grid, guarantee and security | Form 10-Q, Note 10 | Pinned text extract | Page chunks 20–21 | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, pages 20–21 |
| E9 | Financial covenant levels and compliance statement; revolver availability and standby letters of credit | Form 10-Q, Note 10 | Pinned text extract | Page chunk 22 | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, page 22 |
| E10 | Terms of the three Senior Notes and their guarantees | Form 10-Q, Note 10 | Pinned text extract | Page chunk 23 | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, page 23 |
| E11 | Guarantor summarised figures revised for 2025-12-31 | Form 10-Q, management discussion | Pinned text extract | Page chunk 52, paragraph beginning "We conduct all of our business through our subsidiaries" | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, page 52 |
| E12 | Guarantor summarised figures as first printed for 2025-12-31 | Form 10-K, management discussion | Pinned text extract | Page chunk 98, "Summarized balance sheet information" | 10-K_2025-12-31_achc_achc-20251231.htm.jsonl, page 98 |
| E13 | Contractual obligations by period at 2026-09-30 | Form 10-Q, management discussion | Pinned text extract | Page chunk 52 | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, page 52 |
| E14 | One reportable segment; chief executive is the chief operating decision maker | Form 10-Q, Note 18 | Pinned text extract | Page chunks 30–31 | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, pages 30–31 |
| E15 | Fair values of the facility and notes | Form 10-Q, Note 17 | Pinned text extract | Page chunk 30 | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, page 30 |
| E16 | Cash, foreign-subsidiary cash and fixed and variable debt split | Form 10-Q, liquidity and market risk | Pinned text extract | Page chunks 48 and 53 | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, page 48; 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, page 53 |
| E17 | Legal proceedings, including the 2026 jury award and settlements | Form 10-Q, Note 8 | Pinned text extract | Page chunks 13–20 | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, pages 13–20 |
| E18 | Cash paid for interest and income taxes, annual only | Form 10-K, cash-flow statement | Pinned text extract | Page chunk 123 | 10-K_2025-12-31_achc_achc-20251231.htm.jsonl, page 123 |
| E19 | Exhibit list naming the indentures dated 2020-06-24, 2020-10-14 and 2025-03-10 and the credit agreement dated 2025-02-28 | Form 10-K, Item 15 | Pinned text extract | Page chunk 111 | 10-K_2025-12-31_achc_achc-20251231.htm.jsonl, page 111 |
| E20 | Proxy-statement items incorporated by reference | Form 10-K, Items 10 to 14 | Pinned text extract | Page chunks 108–110 | 10-K_2025-12-31_achc_achc-20251231.htm.jsonl, pages 108–110 |
| E21 | No credit rating, adjusted earnings or hedge instrument found | Full text of all five extracts searched | Pinned text extract | All page chunks of all five extracts; no match for the terms | 10-K_2024-12-31_achc_achc-20241231.htm.jsonl, pages 1–143; 10-K_2025-12-31_achc_achc-20251231.htm.jsonl, pages 1–160; 10-Q_2026-03-31_achc_achc-20260331.htm.jsonl, pages 1–48; 10-Q_2026-06-30_achc_achc-20260630.htm.jsonl, pages 1–54; 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, pages 1–55 |

### P3 - Input inventory

| Source ID | File name | Bytes | sha256 | Original document sha256 stated on extract page 1 | Document family | Entity | Period | Accessibility | Duplicate candidate |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| S1 | 10-K_2024-12-31_achc_achc-20241231.htm.jsonl | 385832 | f4fb4ee7f776c3a53486e84dff817ccb64e69c095907ce2da38d839843ef00e1 | 46547fb9476af70fbcd9fac59e077a8cf58dc645b114a531331c84472bae86ca | Form 10-K | Acadia Healthcare Company, Inc. | Year ended 2024-12-31 | Readable text, 143 page chunks | None: not contained in another source; 2024 figures recur as comparatives in S2 |
| S2 | 10-K_2025-12-31_achc_achc-20251231.htm.jsonl | 432770 | b3d6f4d63ac98f48e911f1812f1a1c279763dc3945d9bed9f82987cab40a4040 | 0a51f6cd41874f6b1805246ab126900a0b23e7f58f08435368efb428c31c53b1 | Form 10-K | Acadia Healthcare Company, Inc. | Year ended 2025-12-31 | Readable text, 160 page chunks | None |
| S3 | 10-Q_2026-03-31_achc_achc-20260331.htm.jsonl | 130092 | fa38fb491b5bc1b4fbf107fdffbb51d8a20c74ac05f0d7d75d28b13bbce07554 | c9437a638a5a5962372c6e79845c68a2e85ea70d4d8d7bd04649a73f162d5550 | Form 10-Q | Acadia Healthcare Company, Inc. | Quarter ended 2026-03-31 | Readable text, 48 page chunks | None |
| S4 | 10-Q_2026-06-30_achc_achc-20260630.htm.jsonl | 145911 | 228205ebfd8dfabf1dfae3884db7e3067a6f7fa9779a77332ec403040d3dd74c | 145ddce1338075ce82b3c6147f5dc5a7dace3a84a1de5a616ce72756cb8ba9a8 | Form 10-Q | Acadia Healthcare Company, Inc. | Quarter ended 2026-06-30 | Readable text, 54 page chunks | None |
| S5 | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl | 149504 | 0c3ffb3b7e5b3960ebd9422c7d2c9d3278dca169b50a99ced0cc5c3a1d8177a2 | b3054a98b8bc279c510fcbfdbedc2f6840c7fd14f55797e1f2af8616d996efeb | Form 10-Q | Acadia Healthcare Company, Inc. | Quarter ended 2026-09-30 | Readable text, 55 page chunks | None |

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
| --- | --- | --- | --- | --- | --- | --- |
| 2025-02-27 | day | 2025-02-27 | Annual report for the year ended 2024-12-31 signed | Historical — Dated: February 27, 2025 | 10-K_2024-12-31_achc_achc-20241231.htm.jsonl, page 102 | Sets the prior-year baseline for statements and the debt note. |
| 2026-02-26 | day | 2026-02-26 | Annual report for the year ended 2025-12-31 signed | Historical — Dated: February 26, 2026 | 10-K_2025-12-31_achc_achc-20251231.htm.jsonl, page 115 | Latest audited statements; the balance-sheet date used as prior period. |
| 2026-04-29 | day | 2026-04-29 | Quarterly report for the quarter ended 2026-03-31 signed | Historical — Dated: April 29, 2026 | 10-Q_2026-03-31_achc_achc-20260331.htm.jsonl, page 48 | First 2026 interim statements. |
| 2026-07-28 | day | 2026-07-28 | Quarterly report for the quarter ended 2026-06-30 signed | Historical — Dated: July 28, 2026 | 10-Q_2026-06-30_achc_achc-20260630.htm.jsonl, page 54 | Second-quarter interim statements. |
| 2026-11-04 | day | 2026-11-04 | Quarterly report for the quarter ended 2026-09-30 signed | Historical — Dated: November 4, 2026 | 10-Q_2026-09-30_achc_achc-20260930.htm.jsonl, page 55 | Latest source; fixes the information cutoff 14 days before the as-of date. |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 9 |
| Calculated | 3 |
| Assumption-Based | 0 |
| Analyst Inference | 5 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 5 |
| Fields present | 8 |
| Fields total | 8 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 9 |

## Calculations

| ID | Calculation | Inputs | Result |
| --- | --- | --- | --- |
| C1 | Days from the latest document signature to the as-of date | 2026-11-04 to 2026-11-18 | 14 days |
| C2 | Days from the latest balance-sheet date to the as-of date | 2026-09-30 to 2026-11-18: 31 days in October plus 18 days in November | 49 days |
| C3 | Page chunks across the five extracts | 143 + 160 + 48 + 54 + 55 | 460 chunks |

Each result is a date difference or a count taken from the documents; nothing else was calculated.
Basis: calculation C1; calculation C2; calculation C3

## Gaps

| Gap | Type | Severity | Affected work | Effect | Remediation |
| --- | --- | --- | --- | --- | --- |
| No executed credit agreement or indentures | Source gap | MATERIAL | Legal & covenants; Recovery & fulcrum; Security selection; covenant statements in Fundamental credit | Definitions, baskets, guarantee-release and call terms cannot be read; only the company's summary in the notes is available. The exhibit list names the credit agreement dated 2025-02-28 and indentures dated 2020-06-24, 2020-10-14 and 2025-03-10 | Supply the four executed documents with their amendments. |
| Covenant-basis earnings not printed | Source gap | MATERIAL | Fundamental credit; Liquidity; Legal & covenants | The filings state the leverage limit (5.0 to 1.0, with a 5.5 to 1.0 step-up after a material acquisition) and the interest-coverage floor (3.0 to 1.0) and say the company complied at 2026-09-30, but not the computed ratios, the covenant earnings definition or any adjusted-earnings reconciliation (no match in any of the five extracts). Headroom is not calculable | Supply the compliance certificate or an earnings release with the covenant reconciliation. |
| No credit ratings, market prices or spreads | Source gap | MINOR | Ratings & triggers; Market-implied risk; Security selection | Only the fair values of the facility and notes in the fair-value note are available | Supply dated agency ratings and note prices if those modules are wanted. |
| No peer set | Source gap | MINOR | Peer benchmark | Peer comparison cannot be built | Supply peer filings or a peer list. |
| No portfolio or fund limits | Source gap | MINOR | Committee decision | Fund constraints are stated as not supplied | Supply the portfolio file. |
| Cash paid for interest and taxes not printed in the 2026 quarterly reports | Source gap | MINOR | Financial foundation; Earnings quality | Cash interest and cash taxes for the nine months 2026 and the last twelve months are not calculable; annual figures exist in the annual reports | Use interest expense, net, labelled as an accrual measure, until the figures are supplied. |
| Guarantor summarised figures for 2025-12-31 exist in two versions | Conflict | MINOR | Recovery & fulcrum; Structural priority; Fundamental credit | The annual report prints current assets of USD 598,869 thousand, property and equipment of USD 2,026,345 thousand, goodwill of USD 1,163,168 thousand, total noncurrent assets of USD 3,519,494 thousand, current liabilities of USD 474,194 thousand, total noncurrent liabilities of USD 2,770,469 thousand and total equity of USD 873,699 thousand. The quarterly reports print USD 585,902 thousand, USD 1,994,863 thousand, USD 1,157,060 thousand, USD 3,502,915 thousand, USD 498,156 thousand, USD 2,716,259 thousand and USD 874,402 thousand, stating the earlier figures contained an immaterial error. Both versions are kept as printed; the later statement governs 2025-12-31 guarantor data | Use the revised figures and cite the correction; do not blend the two. |
| Guarantor subsidiaries not named | Source gap | MINOR | Recovery & fulcrum; Structural priority | The list of subsidiary guarantors is an exhibit incorporated by reference and is not in the extracts; the guarantor summary covers wholly-owned guarantors only, and 19 facilities sit in non-wholly-owned subsidiaries | Supply the guarantor list exhibit. |
| Proxy statement not supplied | Source gap | MINOR | Business & governance | Board composition, executive pay and share ownership are incorporated by reference to the 2026 proxy statement | Supply the proxy statement. |
| No management guidance, earnings releases or presentations | Source gap | MINOR | Forward credit model; Downside | The filings carry no guidance or projections; forward assumptions are blank in the run settings | Supply guidance or assumptions if a forward view is wanted. |
| Extract format | Parse limitation | MINOR | All modules | Table cells are one per line and locators are extract page numbers, so a figure is read by its position in the page text | Read each figure against its row label and period header. |

## Next module

The orchestrator selects the next module.
