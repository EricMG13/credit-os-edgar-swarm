# Source readiness for Sealed Air Corp/De (issuer-1012100), as of 2026-11-18

## Request

Sealed Air Corp/De (issuer-1012100), as of 2026-11-18, credit snapshot pathway. Scope: whether the four supplied filings can support the Financial foundation, Business & governance and Fundamental credit modules; the run settings state no objective, so the pathway's use case applies.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-31_sealed-air-corp.htm.jsonl | Annual report on Form 10-K of Sealed Air Corporation for the fiscal year ended December 31, 2024 | 2025-02-26 | 809ce92ba2d431a3d4a9f1d37023edc761248a67a97cec7779c49c479e27027c | Prior-year base: FY2024 statements, debt table and covenant figure; comparison with the FY2025 comparatives. |
| 10-K_2025-12-31_sealed-air-corp.htm.jsonl | Annual report on Form 10-K of Sealed Air Corporation for the fiscal year ended December 31, 2025 | 2026-03-02 | 82c4c91d640b6a99e501ef92e9529bf167e6836d7c667123c1f99182de8c964f | Primary source for FY2025 statements, debt, liquidity, ratings, merger terms and governance; coverage and perimeter checks. |
| EX-99.1_2025-12-31_see.htm.jsonl | Exhibit 99.1 results release for the fourth quarter and full year 2025 | 2026-03-02 | 8e659f869890926eac235f32c50d49018142a623ac38809e5149545764ee1ca1 | Fourth-quarter 2025 three-month columns, net debt and leverage as the issuer defines them; cross-check against the annual report. |
| STATUS_15-12G_2026-04-20_see.htm.jsonl | Form 15 certification and notice of termination of registration of Sealed Air Corporation | 2026-04-20 | 37dcda77f63552d032343b335621baa4af5e9e92a6f903f1d638b61d3f2822f9 | Ownership and reporting status after the merger; the latest dated source in the set. |

No upstream handoff was supplied: this module is the entry point of the run.

## Findings

### Bottom line

The four filings support a credit snapshot of Sealed Air as it stood at 2025-12-31, before its acquisition by funds affiliated with CD&R, but they cannot describe its credit today.
Basis: 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 7–8; STATUS_15-12G_2026-04-20_see.htm.jsonl, page 1

Creditors should treat every leverage, liquidity and coverage figure drawn from these sources as a pre-transaction picture. The merger completed on April 9, 2026 and the company filed to terminate its public reporting on April 20, 2026, so nothing later is supplied and the as-of date sits 322 days after the last reported balance sheet. The acquisition financing, the outcome for the notes due October 2026 and any rating action after year-end are absent. The 2025 and 2024 annual reports otherwise give Financial foundation, Business & governance and Fundamental credit enough to work on that limited basis.
Basis: STATUS_15-12G_2026-04-20_see.htm.jsonl, page 1; 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 85–86; 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 148–150; calculation C1

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
|---|---|---|---|---|---|---|
| 2025-02-26 | day | 2025-02-26 | Annual report on Form 10-K for the year ended December 31, 2024 signed by the registrant | Historical — "Date: February 26, 2025" on the signature page | 10-K_2024-12-31_sealed-air-corp.htm.jsonl, page 196 | Last annual report before the merger agreement; supplies the FY2024 base year and its comparatives. |
| 2025-12-31 | day | 2026-03-02 | Latest reported balance sheet date, the fiscal year ended December 31, 2025 | Historical — "For the fiscal year ended December 31, 2025" | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 1 | Every balance sheet and leverage figure in the sources is struck at this date, 322 days before the as-of date and before the merger completed on 2026-04-09. |
| 2026-03-02 | day | 2026-03-02 | Annual report on Form 10-K for the year ended December 31, 2025 signed by the registrant | Historical — "Date: March 2, 2026" on the signature page | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 245 | Primary source for current-period statements; written while the merger was still pending. |
| 2026-03-02 | day | 2026-03-02 | Results release for the fourth quarter and full year 2025 | Historical — "CHARLOTTE, N.C., March 2, 2026" | EX-99.1_2025-12-31_see.htm.jsonl, page 1 | Gives the three-month fourth-quarter 2025 columns, the only interim period in the sources; its supplementary tables are marked preliminary. |
| 2026-04-20 | day | 2026-04-20 | Form 15 signed, terminating registration and suspending the duty to file reports | Historical — "Date: April 20, 2026" | STATUS_15-12G_2026-04-20_see.htm.jsonl, page 1 | Filed after the merger completed on 2026-04-09 (an event recorded under Issuer history); the sources carry no periodic report after it. |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 8 |
| Calculated | 1 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 3 |
| Fields present | 6 |
| Fields total | 6 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 3 |

### Analytical appendix — complete canonical registers

### P3 - Input sources

| Logical source ID | Original file | Original file sha256 as printed in the text file | Active content file | Document family | Authority tier | Reporting entity | Period or event covered | Document date | Version links | Source |
|---|---|---|---|---|---|---|---|---|---|---|
| LS-01 | 10-K_2024-12-31_sealed-air-corp.htm | f80a97cda36c8625c91d3ee375abf7930d1c8ca797f126ce29fd9df832ca3fc0 | 10-K_2024-12-31_sealed-air-corp.htm.jsonl | Annual report (Form 10-K) | 1, primary filing | Sealed Air Corporation (Delaware) and consolidated subsidiaries | FY2024, year ended 2024-12-31, with FY2023 and FY2022 comparatives | 2025-02-26 (signature date; filing date not stated) | Prior-year report; its FY2024 figures are repeated as comparatives in LS-02 | 10-K_2024-12-31_sealed-air-corp.htm.jsonl, page 1 |
| LS-02 | 10-K_2025-12-31_sealed-air-corp.htm | f089ea6080e0dac9541e3256b296a0ac7d5f5f32750e327e6147575143e4f635 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl | Annual report (Form 10-K) | 1, primary filing | Sealed Air Corporation (Delaware) and consolidated subsidiaries | FY2025, year ended 2025-12-31, with FY2024 and FY2023 comparatives | 2026-03-02 (signature date; filing date not stated) | Controls current-period facts over LS-01 and LS-03; its merger status (closing expected mid-2026) is superseded by LS-04 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 1 |
| LS-03 | EX-99.1_2025-12-31_see.htm | 5cac761c2697f753dfe00c58e97bfe32c577424fe69df3bbe84757c1b28b68f8 | EX-99.1_2025-12-31_see.htm.jsonl | Earnings release (Exhibit 99.1; the filing it was attached to is not stated in the text) | 2, issuer release | Sealed Air Corporation | Fourth quarter 2025 (three months) and FY2025, with 2024 comparatives | 2026-03-02 | Preliminary figures issued the day the annual report was signed; the annual report controls | EX-99.1_2025-12-31_see.htm.jsonl, page 1 |
| LS-04 | STATUS_15-12G_2026-04-20_see.htm | d2395f604bcd7dcf3750b4333b5341af7958ba51dfc06964380fd0e54a387b60 | STATUS_15-12G_2026-04-20_see.htm.jsonl | Status filing (Form 15) | 1, primary filing | Sealed Air Corporation; Parent: Sword Purchaser, LLC | Merger completed 2026-04-09; certification signed 2026-04-20 | 2026-04-20 | Latest source; supersedes the closing expectation in LS-02 | STATUS_15-12G_2026-04-20_see.htm.jsonl, page 1 |

### T1 - Input gate

| Gate item | Stated value | Source |
|---|---|---|
| Reporting entity and perimeter | Sealed Air Corporation, a Delaware company (commission file number 1-12139), consolidated with its subsidiaries; the run name is Sealed Air Corp/De. Some notes are co-issued with Sealed Air Corporation (US), a wholly owned subsidiary. No subsidiary-only statements are supplied. | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 1; 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 151 |
| Issuer in the run | issuer-1012100 | Run settings (not issuer evidence) |
| Pathway and modules | credit snapshot; Source readiness, Financial foundation, Business & governance, Fundamental credit | Run settings (not issuer evidence) |
| Objective | Not stated in the run settings, which list no research questions; the pathway's use case applies: a credit snapshot of the issuer from the supplied filings | Run settings (not issuer evidence) |
| As-of date and cutoff | 2026-11-18 for both | Run settings (not issuer evidence) |
| Current and prior period | FY2025 (year ended 2025-12-31) and FY2024 (year ended 2024-12-31) | Run settings (not issuer evidence) |
| Case kind | Public research case; the run settings record listed equity as false | Run settings (not issuer evidence) |
| Ownership status at the cutoff | Wholly owned subsidiary of Sword Purchaser, LLC since 2026-04-09; approximate number of holders of record, 1 | STATUS_15-12G_2026-04-20_see.htm.jsonl, page 1 |
| Source status | Partial: four filings received, none dated after 2026-04-20; no financial statements after 2025-12-31 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 1; STATUS_15-12G_2026-04-20_see.htm.jsonl, page 1 |
| Limitation | The last reported balance sheet is 322 days before the as-of date; the acquisition financing, post-closing balance sheet, later ratings and quotes are not in the sources | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 20; STATUS_15-12G_2026-04-20_see.htm.jsonl, page 1 |

### T2 - Source register

| Logical source ID | Original file | Active content file | Authority quality | Extraction confidence | Usability verdict | Modules supported | Limitation flags | Source |
|---|---|---|---|---|---|---|---|---|
| LS-01 | 10-K_2024-12-31_sealed-air-corp.htm | 10-K_2024-12-31_sealed-air-corp.htm.jsonl | Tier 1: signed annual report, audited statements | MEDIUM | Usable_with_Limitations | Financial foundation; Business & governance; Fundamental credit | Superseded for current-period facts by LS-02; used as the FY2024 base year only; tables appear as flattened text lines split across page chunks | 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–106 |
| LS-02 | 10-K_2025-12-31_sealed-air-corp.htm | 10-K_2025-12-31_sealed-air-corp.htm.jsonl | Tier 1: signed annual report, audited statements, includes Part III | MEDIUM | Usable_with_Limitations | Financial foundation; Business & governance; Fundamental credit | Pre-merger picture at 2025-12-31, 322 days before the as-of date; merger agreement and debt commitment letter are summarised, not supplied; tables appear as flattened text lines split across page chunks | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 109–112 |
| LS-03 | EX-99.1_2025-12-31_see.htm | EX-99.1_2025-12-31_see.htm.jsonl | Tier 2: issuer release, unaudited, marked preliminary | MEDIUM | Usable_with_Limitations | Financial foundation; Fundamental credit | Preliminary supplementary tables; the annual report signed the same day controls; net leverage is defined differently from the covenant measure | EX-99.1_2025-12-31_see.htm.jsonl, pages 5, 8 |
| LS-04 | STATUS_15-12G_2026-04-20_see.htm | STATUS_15-12G_2026-04-20_see.htm.jsonl | Tier 1: signed regulatory notice | HIGH | Usable | Business & governance; Fundamental credit | Status evidence only: it carries no financial data and says nothing about post-closing financing | STATUS_15-12G_2026-04-20_see.htm.jsonl, page 1 |

### T4 - Content-to-module map

| Module | Evidence demand | Active representation | Disposition | Readiness | Readiness effect and limitation | Source |
|---|---|---|---|---|---|---|
| Financial foundation (CP-1) | Overall verdict on the pathway's use case | LS-02; LS-01; LS-03 | Recommended | READY_WITH_LIMITATIONS | FY2025 and FY2024 annual statements, debt, liquidity and covenant facts are present; every figure is pre-transaction and nothing after 2025-12-31 is supplied | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 109–112 |
| Financial foundation (CP-1) | Annual income statement, balance sheet and cash flow statement, FY2025 and FY2024 | LS-02; LS-01 | Recommended | READY | Income and cash flow statements carry FY2023 comparatives; total debt and Adjusted EBITDA agree between the annual report and the release; FY2024 net sales, operating profit, net earnings and year-end total debt match the FY2024 annual report | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 109–112; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, pages 104–106; EX-99.1_2025-12-31_see.htm.jsonl, page 13 |
| Financial foundation (CP-1) | Debt by instrument, rate, maturity and the five-year maturity table at 2025-12-31 | LS-02 | Recommended | READY_WITH_LIMITATIONS | Pre-transaction table. The 1.573% senior secured notes due October 2026 (USD 600 million, current at year-end) and the USD 600 million delayed draw term loan available until 2026-10-15 both fall before the as-of date and their outcome is not in the sources | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 148–150 |
| Financial foundation (CP-1) | Liquidity, covenant and leverage facts at 2025-12-31 | LS-02; LS-03 | Recommended | READY_WITH_LIMITATIONS | Year-end only. Release net leverage of 3.2x and covenant leverage of 2.95 to 1.00 (maximum 4.50 to 1.00) use different definitions and are both carried as stated; release liquidity of about USD 1.4 billion includes USD 1.06 billion of unused committed lines, against the annual report's USD 1 billion revolver and USD 199 million of securitization availability, and the components are not reconciled here | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 83–85; EX-99.1_2025-12-31_see.htm.jsonl, page 5 |
| Financial foundation (CP-1) | Claims outside reported debt: leases, pensions and retiree medical, receivables securitization and factoring, supply chain finance, commitments and contingencies | LS-02 | Recommended | READY | Notes on each are present. The U.S. securitization program started in December 2025 is accounted for as sales and sits outside total debt of USD 4,009.7 million, the European program is inside it, and USD 147 million of supply chain finance invoices sit inside accounts payable; pension, lease and litigation amounts are not netted against debt here | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 83–85, 133, 142, 145, 162, 167, 173 |
| Financial foundation (CP-1) | Interim periods: discrete quarters of 2025 and any 2026 quarter | LS-03 | Blocked | CONDITIONAL | Only the fourth quarter 2025 three-month columns are carried; no first, second or third quarter of 2025 and no 2026 quarter, because the issuer stopped reporting after the merger | EX-99.1_2025-12-31_see.htm.jsonl, pages 8, 11 |
| Financial foundation (CP-1) | Capital structure after the merger completed on 2026-04-09 | None | Blocked | CONDITIONAL | No source carries the acquisition debt, post-closing balance sheet or refinancing; the annual report names a debt commitment letter without terms | STATUS_15-12G_2026-04-20_see.htm.jsonl, page 1; 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 20 |
| Business & governance (CP-1A) | Overall verdict on the pathway's use case | LS-02; LS-04 | Recommended | READY_WITH_LIMITATIONS | Business, segments, merger terms and pre-closing governance are present; post-closing ownership detail and governance are not | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 6–8; STATUS_15-12G_2026-04-20_see.htm.jsonl, page 1 |
| Business & governance (CP-1A) | Business description, segments (Food and Protective), customers and geography | LS-02 | Recommended | READY | Item 1 and the segment note are present for FY2025; the FY2024 annual report shows the same two reportable segments | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 6–18, 136; 10-K_2024-12-31_sealed-air-corp.htm.jsonl, page 129 |
| Business & governance (CP-1A) | Ownership and control before and after the merger | LS-02; LS-04 | Recommended | READY_WITH_LIMITATIONS | About 2,353 holders of record on 2026-02-23 before closing; one holder of record after. Parent is Sword Purchaser, LLC, described as affiliated with CD&R; the ownership chain above Parent, equity contribution and governance rights are not described | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 7, 54; STATUS_15-12G_2026-04-20_see.htm.jsonl, page 1 |
| Business & governance (CP-1A) | Merger agreement terms: price, closing conditions, termination fee, financing risk | LS-02; LS-03 | Recommended | READY_WITH_LIMITATIONS | USD 10.3 billion total purchase price, USD 42.15 per share in cash, USD 205.1 million termination fee payable by the company in stated cases; summary only, the merger agreement and debt commitment letter are not supplied | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 7–8, 19–21; EX-99.1_2025-12-31_see.htm.jsonl, page 1 |
| Business & governance (CP-1A) | Board, executive officers and compensation (Part III) | LS-02 | Recommended | READY_WITH_LIMITATIONS | Board and officers as of 2026-01-31; the post-closing board and management are not supplied | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 51, 188 |
| Business & governance (CP-1A) | Legal proceedings and contingencies | LS-02 | Recommended | READY | Item 3 incorporates the litigation and environmental matters in the commitments and contingencies note | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 50, 173 |
| Fundamental credit (CP-2) | Overall verdict on the pathway's use case | LS-02; LS-03; LS-04 | Recommended | READY_WITH_LIMITATIONS | A view of the pre-transaction credit at 2025-12-31 is supported; a view of the credit at the as-of date is not | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 85–86; STATUS_15-12G_2026-04-20_see.htm.jsonl, page 1 |
| Fundamental credit (CP-2) | Earnings, cash flow, leverage and liquidity at 2025-12-31 and 2024-12-31 | LS-02; LS-01; LS-03 | Recommended | READY_WITH_LIMITATIONS | Statements, debt and liquidity facts are present for two year-ends; the 322 days since the last balance sheet and the 223 days since closing carry no financial data | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 82–86, 109–112; EX-99.1_2025-12-31_see.htm.jsonl, page 13 |
| Fundamental credit (CP-2) | Ratings: corporate Ba1 and BB+, senior unsecured Ba2 and BB+, senior secured Baa2 and BBB-, under review for downgrade and on CreditWatch negative | LS-02 | Recommended | READY_WITH_LIMITATIONS | Status at 2025-12-31 only, after the merger announcement on 2025-11-17; no later rating action is supplied and the run settings list no ratings | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 85–86 |
| Fundamental credit (CP-2) | Credit after closing: acquisition debt, security, guarantees and any change-of-control repurchase of existing notes | None | Blocked | CONDITIONAL | No source carries the post-closing instruments, indentures or credit agreement terms | STATUS_15-12G_2026-04-20_see.htm.jsonl, page 1; 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 20 |
| Fundamental credit (CP-2) | Market evidence: quotes, spreads, valuation, peer set and portfolio limits | None | Inapplicable | READY_WITH_LIMITATIONS | Blank in the run settings and not required for a fundamentals-only snapshot; the view has no market cross-check | Run settings (not issuer evidence) |

### T6 - Evidence trace

| Evidence ID | Evidence | Original source | Active representation | Locator | Source |
|---|---|---|---|---|---|
| E01 | Registrant is Sealed Air Corporation, Delaware, commission file number 1-12139 | 10-K_2025-12-31_sealed-air-corp.htm | 10-K_2025-12-31_sealed-air-corp.htm.jsonl | page 1 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 1 |
| E02 | Fiscal year ended December 31, 2025 | 10-K_2025-12-31_sealed-air-corp.htm | 10-K_2025-12-31_sealed-air-corp.htm.jsonl | page 1 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 1 |
| E03 | Annual report signed March 2, 2026 | 10-K_2025-12-31_sealed-air-corp.htm | 10-K_2025-12-31_sealed-air-corp.htm.jsonl | page 245 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 245 |
| E04 | Merger agreement entered into November 16, 2025 with Sword Purchaser, LLC, affiliated with CD&R; total purchase price USD 10.3 billion in cash; USD 42.15 per share in cash | 10-K_2025-12-31_sealed-air-corp.htm | 10-K_2025-12-31_sealed-air-corp.htm.jsonl | page 7 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 7 |
| E05 | Early termination of the Hart-Scott-Rodino waiting period received December 23, 2025 | 10-K_2025-12-31_sealed-air-corp.htm | 10-K_2025-12-31_sealed-air-corp.htm.jsonl | page 7 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 7 |
| E06 | Stockholders adopted the merger agreement at a special meeting on February 25, 2026; closing then expected in mid-2026 | 10-K_2025-12-31_sealed-air-corp.htm | 10-K_2025-12-31_sealed-air-corp.htm.jsonl | page 8 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 8 |
| E07 | Termination fee of USD 205.1 million payable to Parent in stated circumstances | 10-K_2025-12-31_sealed-air-corp.htm | 10-K_2025-12-31_sealed-air-corp.htm.jsonl | page 21 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 21 |
| E08 | Risk that Parent fails to obtain the Debt Financing on the terms of the Debt Commitment Letter; the terms are not given | 10-K_2025-12-31_sealed-air-corp.htm | 10-K_2025-12-31_sealed-air-corp.htm.jsonl | page 20 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 20 |
| E09 | Merger completed April 9, 2026; the company continues as a wholly owned subsidiary of Parent | STATUS_15-12G_2026-04-20_see.htm | STATUS_15-12G_2026-04-20_see.htm.jsonl | page 1 | STATUS_15-12G_2026-04-20_see.htm.jsonl, page 1 |
| E10 | Form 15 relies on Rules 12g-4(a)(1) and 12h-3(b)(1)(i); approximate number of holders of record 1; no other class of securities with a continuing duty to file; dated April 20, 2026 | STATUS_15-12G_2026-04-20_see.htm | STATUS_15-12G_2026-04-20_see.htm.jsonl | page 1 | STATUS_15-12G_2026-04-20_see.htm.jsonl, page 1 |
| E11 | Total debt USD 4,009.7 million, cash USD 344.0 million and net debt USD 3,665.7 million at December 31, 2025 | EX-99.1_2025-12-31_see.htm | EX-99.1_2025-12-31_see.htm.jsonl | page 13 | EX-99.1_2025-12-31_see.htm.jsonl, page 13; 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 86 |
| E12 | Adjusted EBITDA USD 1,134.3 million for FY2025 and USD 1,110.6 million for FY2024, the same in the release and the annual report | EX-99.1_2025-12-31_see.htm | EX-99.1_2025-12-31_see.htm.jsonl | page 11 | EX-99.1_2025-12-31_see.htm.jsonl, page 11; 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 61 |
| E13 | Senior Secured Notes due October 2026, 1.573%, USD 600 million in the current portion of long-term debt at December 31, 2025 | 10-K_2025-12-31_sealed-air-corp.htm | 10-K_2025-12-31_sealed-air-corp.htm.jsonl | pages 148–149 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 148–149 |
| E14 | Credit agreement amended and restated October 31, 2025: new USD 600 million delayed draw term loan A available until October 15, 2026; revolving facilities of about USD 1 billion; maturity extended to October 31, 2030 | 10-K_2025-12-31_sealed-air-corp.htm | 10-K_2025-12-31_sealed-air-corp.htm.jsonl | page 150 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 150 |
| E15 | Maximum covenant leverage ratio of debt to EBITDA 4.50 to 1.00; 2.95 to 1.00 as calculated under the covenant at December 31, 2025 | 10-K_2025-12-31_sealed-air-corp.htm | 10-K_2025-12-31_sealed-air-corp.htm.jsonl | page 85 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 85 |
| E16 | Covenant leverage ratio 3.37 to 1.00 at December 31, 2024 | 10-K_2024-12-31_sealed-air-corp.htm | 10-K_2024-12-31_sealed-air-corp.htm.jsonl | page 79 | 10-K_2024-12-31_sealed-air-corp.htm.jsonl, page 79 |
| E17 | Net leverage ratio, net debt divided by trailing twelve month Adjusted EBITDA, 3.2x at December 31, 2025 and 3.6x at December 31, 2024; liquidity about USD 1.4 billion: cash USD 344 million plus USD 1.06 billion of unused committed lines | EX-99.1_2025-12-31_see.htm | EX-99.1_2025-12-31_see.htm.jsonl | page 5 | EX-99.1_2025-12-31_see.htm.jsonl, page 5 |
| E18 | USD 1 billion revolving credit facility with USD 1 billion available; securitization availability USD 199 million at December 31, 2025 | 10-K_2025-12-31_sealed-air-corp.htm | 10-K_2025-12-31_sealed-air-corp.htm.jsonl | pages 83–84 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 83–84 |
| E19 | Corporate rating Ba1 and BB+; senior unsecured Ba2 and BB+; senior secured Baa2 and BBB-; outlook under review and CreditWatch negative; no effective change at December 31, 2025 | 10-K_2025-12-31_sealed-air-corp.htm | 10-K_2025-12-31_sealed-air-corp.htm.jsonl | pages 85–86 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, pages 85–86 |
| E20 | Supplementary information in the release is preliminary and subject to change before the annual report is filed | EX-99.1_2025-12-31_see.htm | EX-99.1_2025-12-31_see.htm.jsonl | page 8 | EX-99.1_2025-12-31_see.htm.jsonl, page 8 |
| E21 | Approximately 2,353 holders of record of common stock as of February 23, 2026 | 10-K_2025-12-31_sealed-air-corp.htm | 10-K_2025-12-31_sealed-air-corp.htm.jsonl | page 54 | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 54 |
| E22 | Total debt USD 4,403.9 million at December 31, 2024, the same in both annual reports | 10-K_2024-12-31_sealed-air-corp.htm | 10-K_2024-12-31_sealed-air-corp.htm.jsonl | page 80 | 10-K_2024-12-31_sealed-air-corp.htm.jsonl, page 80; 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 148 |

## Calculations

| ID | Calculation | Inputs | Result | Source |
|---|---|---|---|---|
| C1 | Calendar days from the latest reported balance sheet date to the as-of date | 2025-12-31 (fiscal year end); 2026-11-18 (as-of date) | 322 days | 10-K_2025-12-31_sealed-air-corp.htm.jsonl, page 1 |
| C2 | Calendar days from merger completion to the as-of date | 2026-04-09 (merger completed); 2026-11-18 (as-of date) | 223 days | STATUS_15-12G_2026-04-20_see.htm.jsonl, page 1 |

## Gaps

| Gap ID | Severity | Missing item | Why it matters | Modules affected | Remediation |
|---|---|---|---|---|---|
| G1 | MATERIAL | No financial statements, results or trading update after 2025-12-31; the issuer stopped public reporting after the merger (322 days between the last balance sheet and the as-of date, 223 days since closing). Whether noteholder reporting continues privately is not established | Leverage, cash flow, liquidity and coverage cannot be stated for the credit as it stands at the as-of date | Financial foundation; Business & governance; Fundamental credit | Obtain 2026 interim financial statements or lender and noteholder reports for the post-closing company |
| G2 | MATERIAL | No post-closing capital structure: the debt commitment letter terms, acquisition debt, any change-of-control repurchase of existing notes, and what happened to the 1.573% senior secured notes due October 2026 (USD 600 million) and the USD 600 million delayed draw term loan available until 2026-10-15 | Year-end net debt of USD 3,665.7 million and net leverage of 3.2x describe the pre-transaction structure; the structure at closing, with a USD 10.3 billion purchase price, is not in the sources | Financial foundation; Fundamental credit | Obtain the financing documents, offering materials or post-closing debt schedule |
| G3 | MINOR | No rating action, quote, spread, peer or valuation input after 2025-12-31; the run settings leave them blank | Ratings were under review for downgrade at year-end; the current rating position is unknown | Fundamental credit | Supply current agency ratings and market quotes if a market cross-check is wanted |
| G4 | MINOR | Executed debt documents (indentures, credit agreement, guarantee and security terms) are not supplied; the annual report summarises them | Guarantor, security and covenant detail rests on the 10-K summary only | Financial foundation; Fundamental credit | Supply the indentures and the October 2025 credit agreement |
| G5 | MINOR | Definition differences between sources, not reconciled here: net leverage 3.2x (release, net debt over trailing twelve month Adjusted EBITDA) against covenant leverage 2.95 to 1.00 (annual report) at 2025-12-31; liquidity of about USD 1.4 billion (release) against a USD 1 billion revolver with USD 1 billion available and securitization availability of USD 199 million (annual report) | Different measures are not interchangeable; each must be labelled with its source and definition | Financial foundation; Fundamental credit | Carry each figure with its own definition and source |

## Next module

The orchestrator selects the next module.
