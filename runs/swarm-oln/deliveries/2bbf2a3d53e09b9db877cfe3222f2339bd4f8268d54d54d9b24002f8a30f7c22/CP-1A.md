---
module_id: CP-1A
issuer_id: oln
analysis_date: 2026-11-05
module_status: Complete
run_id: oln-2026-11-05-credit_snapshot-host
pathway: credit_snapshot
---

# CP-1A Business and governance: OLIN Corp (oln)

## Request

OLIN Corp (issuer id oln), as of 2026-11-05, pathway credit_snapshot. Scope: the transaction, business, ownership, operating model and governance facts that matter to a creditor, built from the supplied filings and releases.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_oln-20251231.htm.jsonl | Annual report on Form 10-K for the year ended 2025-12-31 | 2026-02-20 (signature date) | 4c4aa24234dd70c75f25e45010299b0359519fd53db6b33485bc189c79880655 | Business, segments, customers, backlog, workforce, capital allocation, debt history, governance incorporation by reference |
| 10-Q_2026-03-31_oln-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-03-31 | 2026-05-08 (signature date) | b7b2893c43ac8c80dd177251279128741771bfa43d75cbf90bad3645179170d6 | Scan for events after the annual report |
| 10-Q_2026-06-30_oln-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-06-30 | 2026-07-31 (signature date) | 31cc1696caa1e392e8267ebed3744e51e1777dcbf99f80668497471e88c3bcb0 | Merger announcement timing |
| 10-Q_2026-09-30_oln-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-09-30 | 2026-10-30 (signature date) | fcb130292ef752affbb45743362d92ca38d4b7b812532fc678ec7413956a3cd3 | Merger terms, litigation, ratings, facility amendment, outlook, credit agreement description |
| EX-99.1_2026-05-07_exhibit991q12026earningspr.htm.jsonl | Earnings press release for the first quarter of 2026, Exhibit 99.1 | 2026-05-07 | 9f1321ffd9728e7b42deb60dc916ea8598957e5a719c0c9054fc2f70430134aa | Scan for events after the annual report |
| EX-99.1_2026-07-30_exhibit991q22026earningspr.htm.jsonl | Earnings press release for the second quarter of 2026, Exhibit 99.1 | 2026-07-30 | 08a70fcc145c266c21d73e09e50eda1490a6994f07dbbc111206ffd51445010c | Merger announcement date and first completion timing |
| EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl | Earnings press release for the third quarter of 2026, Exhibit 99.1 | 2026-10-29 | 27ebe9b3524b1cfc010f76a20b291e6a4f5bd41b4c9d2abf5a2ffd63c041424f | Segment results, outlook, merger status and costs |

| Handoff | Module | sha256 | Use |
|---|---|---|---|
| Source readiness | CP-0 | 2efc90315daf063c5230f804960ffb95fe863f2a0fd201da2904aee2ef83b5fd | Source map, perimeter and gaps |

## Findings

### Bottom line

Olin is a widely held, diversified chemicals and ammunition producer with no sponsor, so creditor risk comes from operations, the Shintech judgment and the pending Huntsman merger rather than from shareholder behaviour.
Basis: 10-K_2025-12-31_oln-20251231.htm.jsonl, pages 4 and 41; 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 7–8 and 25

Chemicals earnings are weak while Winchester carries an order backlog of USD 1,331 million, the dividend continues with negative free cash flow, and the merger, expected in the first quarter of 2027, would replace the credit facility on terms whose combined leverage is not established.
Basis: 10-K_2025-12-31_oln-20251231.htm.jsonl, page 14; 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 8–9; calculation C14

### Key findings

No controlling shareholder or sponsor is disclosed, so governance risk is medium and driven by event exposure, not by extraction. The annual report counts fewer than three thousand record holders, places the beneficial owner table and the board biographies in a proxy statement that is not supplied, and the merger would leave existing Olin shareholders with about 54.5% of the combined company. Sponsor fund life, exit pressure and fee leakage do not apply, but without the proxy statement the absence of a large holder is not confirmed.
Basis: 10-K_2025-12-31_oln-20251231.htm.jsonl, pages 41 and 142; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 8

Winchester is becoming the more reliable earnings leg while chemicals weaken. Chlor Alkali Products and Vinyls was 54.34% of FY2025 sales but 47.85% of nine-month 2026 sales, and its nine-month sales fell 14.17% while Winchester sales rose 14.14%. Winchester's backlog of USD 1,331 million, of which 81% is due for delivery in 2026, gives revenue visibility, but about 13% of FY2025 sales are to the U.S. government, whose contracts carry standard termination rights, and the Lake City contract is a single government-owned plant arrangement.
Basis: calculation C1; calculation C4; calculation C10; calculation C11; 10-K_2025-12-31_oln-20251231.htm.jsonl, pages 10, 13 and 14

Single-site operating risk is concentrated at Freeport, Texas, where outages at the vinyl chloride monomer plant cost chemicals earnings USD 72.2 million in the nine months of 2026 and USD 32.1 million in the third quarter. Management says normal operations were restored in the third quarter. A repeat would hit the largest segment while leverage is already elevated, and the maintenance turnarounds planned for the fourth quarter keep the fourth quarter weaker than the third.
Basis: 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 32 and 45; EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, pages 1–3

The Shintech breach of contract judgment is a cash claim outside the debt. A jury found against Olin on 2026-02-10, Olin recorded charges of USD 75.0 million in the fourth quarter of 2025 and USD 11.1 million in the first quarter of 2026, paid about USD 114 million in the nine months of 2026, and a final judgment was entered on 2026-09-11. Appeal timing is not established, so any further payment is open, and the issuer does not expect material further payments in 2026.
Basis: calculation C15; 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 25 and 45

Capital allocation is mixed. Olin paid USD 68.3 million of dividends in the nine months of 2026 against operating cash flow of USD 69.7 million and capital spending of USD 106.6 million, a shortfall of USD 105.2 million that net borrowing funded, and share repurchases are not printed for 2026 after USD 50.5 million in FY2025. USD 1,948.9 million of repurchase authority remains, so a restart is a policy choice the board can make at any time within debt covenants not supplied here.
Basis: calculation C14; 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 4 and 49–52; 10-K_2025-12-31_oln-20251231.htm.jsonl, pages 41–42 and 64

The merger is an all-stock combination in which Huntsman shares convert into new Olin shares; it carries a termination fee of USD 121 million, merger costs of USD 24.3 million in the nine months of 2026 and a USD 2,500.0 million new facility that takes effect only on closing. Both sets of shareholders approved it on 2026-08-25. The new facility replaces Olin's term loan and revolver and Huntsman's revolver, with guarantees from certain Huntsman subsidiaries, so Olin creditors would face a larger obligor whose debt and earnings are not in the supplied documents. Completion timing moved from the first half of 2027 to the first quarter of 2027 between the second and third quarter releases.
Basis: 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 7–9 and 58; EX-99.1_2026-07-30_exhibit991q22026earningspr.htm.jsonl, page 3; EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, pages 1 and 3

### Contrary evidence and what would change the view

The strongest case against a medium governance and event rating is that the market read the merger as credit positive: after the announcement Fitch moved its outlook to Rating Watch Positive and Standard & Poor's to Credit Watch Developing, and the all-stock structure adds no acquisition debt. Winchester earnings are rising and the Shintech judgment is final at the trial level. The view would ease if the merger closes in the first quarter of 2027 on the stated facility with combined leverage near the issuer's current level, and would harden if closing slips beyond the covenant relief period, which ends no later than 2027-09-30, or if the appeal reverses.
Basis: 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 13, 25 and 53

### Limitations

- The proxy statement is not supplied, so the conclusion that no controlling holder exists and that board and related-party arrangements are unremarkable rests only on the absence of any disclosure in the filings.
- The merger agreement and Huntsman's filings are not supplied, so the conclusion that the new facility benefits creditors is limited to Olin's own summary and cannot be tested against combined-company debt or earnings.
- The executed credit agreement and indentures are not supplied, so the dividend and repurchase conclusion rests on behaviour only and does not say what the debt documents permit.
- The Shintech appeal is described in one paragraph of the quarterly report, so the exposure after 2026 is not established.

### Company and operating model

| Area | Fact | Source |
|---|---|---|
| Business | Vertically integrated manufacturer of chlorine, caustic soda, vinyls and epoxy materials and a leading U.S. ammunition producer; three segments, all capital-intensive | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 4 |
| Segment mix of FY2025 sales | Chlor Alkali Products and Vinyls 54.34%; Epoxy 20.23%; Winchester 25.43% (the annual report prints 54%, 20% and 26%) | 10-K_2025-12-31_oln-20251231.htm.jsonl, pages 4 and 129 |
| Segment mix of nine-month 2026 sales | Chlor Alkali Products and Vinyls 47.85%; Epoxy 23.46%; Winchester 28.69% | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 8 |
| Operating model | Value-first model that prioritises Electrochemical Unit margins over sales volumes; Blue Water Alliance trading joint venture ended at the close of 2025 | 10-K_2025-12-31_oln-20251231.htm.jsonl, pages 5–8; EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, pages 2 and 6 |
| Footprint | Chlorine and caustic soda plants in seven U.S. and Canadian locations; vinyl chloride monomer at Freeport and Plaquemine; chlorinated organics at Freeport, Plaquemine and Stade in Germany; about 32.37% of FY2025 sales outside the United States | 10-K_2025-12-31_oln-20251231.htm.jsonl, pages 6, 7, 13 and 130 |
| Customers | No customer above 10% of FY2025 sales; sales to the U.S. government and its contractors about 13% | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 13 |
| Winchester backlog | USD 1,331 million at 2026-01-31 against USD 1,426 million a year earlier; about 81% expected to ship in 2026 | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 14 |
| Workforce | 7,849 employees; 36% of the U.S. workforce is in bargaining units; three U.S. labor agreements expire in 2026, covering about 24% of the global workforce | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 17 |
| Seasonality | Ammunition is driven by the fall hunting season; the fourth quarter is the weakest seasonal quarter for the group | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 18; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 45 |

### Company profile

| Item | Detail | Source |
|---|---|---|
| Registrant | Olin Corporation, a Virginia corporation incorporated in 1892, principal executive offices in Clayton, Missouri | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 4 |
| Listing | Common stock on the New York Stock Exchange under OLN; 2,490 record holders at 2026-01-31 | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 41 |
| Fiscal year end | 12-31 | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 1 |
| Auditor | KPMG LLP, auditor since 1954; critical audit matter on environmental obligations | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 80 |
| Ownership | Widely held; no controlling shareholder or sponsor is disclosed in the supplied documents; beneficial owners are incorporated from a proxy statement that is not supplied | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 142 |
| Credit ratings as the issuer prints them | Fitch BB+ Rating Watch Positive; Moody's Ba2 Negative; Standard & Poor's BB Credit Watch Developing | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 52–53 |
| Pending transaction | All-stock merger with Huntsman Corporation to form OlinHuntsman Corporation, expected to close in the first quarter of 2027 | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 7–8 |

### Transaction summary and new debt issues

The pending transaction is an all-stock merger of equals with Huntsman Corporation under an agreement signed on 2026-06-15 and announced on 2026-06-16. Each Huntsman share converts into a fixed fraction of an Olin share, existing Olin shareholders would own about 54.5% of the combined company and Huntsman stockholders about 45.5%, and Olin could owe a termination fee of USD 121 million. Shareholders of both companies approved on 2026-08-25 and the Hart-Scott-Rodino waiting period expired, leaving other regulatory approvals and customary conditions before the expected first quarter of 2027 closing.
Basis: 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 7–8 and 58; EX-99.1_2026-07-30_exhibit991q22026earningspr.htm.jsonl, page 3

On 2026-10-27 Olin signed a second amendment to its senior credit facility that creates a USD 2,500.0 million senior secured facility on the closing date, made up of a USD 750.0 million term loan replacing the existing USD 650.0 million term loan and a USD 1,750.0 million revolver replacing Olin's USD 1,200.0 million revolver and Huntsman's revolver. The new term loan amortises 1.25% a quarter, rising to 1.88% a quarter after the fourth anniversary, the facility matures five years after closing, is guaranteed by certain Huntsman subsidiaries and is secured by first priority liens, and its covenants include a net leverage ratio and an interest coverage ratio. No new notes or loans were issued in 2026; in 2025 Olin issued USD 600.0 million of senior notes due 2033 and entered the existing senior credit facility to extend maturities.
Basis: 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 8–9 and 14; 10-K_2025-12-31_oln-20251231.htm.jsonl, page 105

### Events: Issuer history

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
|---|---|---|---|---|---|---|
| 2020-10-01 | day | 2026-02-20 | Winchester assumed management and operations of the Lake City Army Ammunition Plant | Historical — Winchester assumed full management and operational control | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 10 | Government contract with termination rights; about 13% of FY2025 sales are to the U.S. government |
| 2023-10-01 | day | 2026-02-20 | Acquired White Flyer target assets for USD 63.5 million | Historical — acquired the assets of White Flyer Targets | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 10 | Small bolt-on inside Winchester; funding source not stated |
| 2024-11-20 | day | 2026-02-20 | Entered the USD 500.0 million receivables financing agreement maturing 2027-11-19 | Historical — entered into a receivables financing agreement | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 107 | Secured working-capital funding that matures first among the facilities |
| 2024-12-11 | day | 2026-02-20 | Board authorised a USD 1.3 billion share repurchase program | Historical — approved a share repurchase program | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 42 | Capacity for shareholder distributions that the board can use at its discretion |
| 2025-03-14 | day | 2026-02-20 | Issued USD 600.0 million of senior notes due 2033 and entered a USD 1,850.0 million senior credit facility, redeeming the 2025 and 2027 notes | Historical — issued senior notes and entered a senior credit facility | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 105 | Extended the maturity wall to 2030 and 2033 |
| 2025-04-18 | day | 2026-02-20 | Acquired small caliber ammunition manufacturing assets from AMMO, Inc. for USD 55.8 million | Historical — acquired assets, financed with cash on hand | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 10 | Cash-funded bolt-on that added brass shellcase capability |
| 2025-09-18 | day | 2026-02-20 | Announced the end of the Blue Water Alliance joint venture with Mitsui by the end of 2025 | Historical — mutual decision to end the joint venture | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 5 | Removes lower-margin trading volumes and led to a distribution to the minority partner in 2026 |
| 2025-11-11 | day | 2026-02-20 | Announced a commercial arrangement to supply ethylene dichloride to Braskem | Historical — announced a commercial arrangement | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 6 | Replaces joint venture trading volumes with a supply arrangement; volumes not stated |
| 2025-12 | month | 2026-02-20 | Decided to close the liquid epoxy resin plant in Guarujá, Brazil | Historical — made the decision to close | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 10 | Cost reduction in the weakest segment; closure expected in the first quarter of 2026 |
| 2026-02-10 | day | 2026-10-30 | Jury returned a verdict for Shintech on its breach of contract claims | Historical — jury returned a verdict in favor of Shintech | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 25 | Cash claim outside the debt, with charges in the fourth quarter of 2025 and first quarter of 2026 |
| 2026-02-19 | day | 2026-02-20 | Amended the senior credit facility, relaxing financial covenants and adding guarantees and collateral | Historical — executed an amendment; reported as a subsequent event in the annual report | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 106 | Covenant relief until the earlier of 2027-09-30 or the issuer's election |
| 2026-06-15 | day | 2026-10-30 | Signed the definitive merger agreement with Huntsman Corporation | Historical — entered into a definitive agreement | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 7 | Changes the future obligor, facility and covenant package |
| 2026-06-16 | day | 2026-07-30 | Olin and Huntsman announced the merger | Historical — announced that they have entered into a definitive agreement | EX-99.1_2026-07-30_exhibit991q22026earningspr.htm.jsonl, page 3 | Public disclosure date of the transaction |
| 2026-06-17 | day | 2026-10-30 | Rating agencies updated their outlooks after the merger announcement | Historical — Fitch revised its outlook to Rating Watch Positive, Moody's affirmed Ba2 with Negative outlook and S&P revised its outlook to Credit Watch Developing | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 53 | Agencies are split on the merger's credit effect |
| 2026-08-25 | day | 2026-10-30 | Shareholders of both companies approved the merger | Historical — approved the proposals necessary to complete the merger | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 8 | Removes the shareholder vote as a closing risk |
| 2026-09-11 | day | 2026-10-30 | Court entered final judgment in the Shintech case | Historical — final judgment consistent with amounts previously accrued | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 25 | Fixes the trial-level liability; appeal timing sets any further payment |
| 2026-10-27 | day | 2026-10-30 | Executed a second amendment creating the merger-date credit facility | Historical — executed a second amendment after the quarter end; subsequent event | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 8 | Takes effect only on closing, so it does not change the 2026-09-30 balance sheet |
| 2027-Q1 | quarter | 2026-10-30 | Expected closing of the merger | Scheduled — expected to close in the first quarter of 2027, subject to regulatory approvals and customary conditions | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 8 | Determines when the existing facilities are refinanced |
| 2027-09-30 | day | 2026-10-30 | Latest end of the covenant relief period | Scheduled — ends on the earlier of 2027-09-30 or the issuer's election | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 13 | Guarantees and liens fall away and covenants tighten |
| 2027-11-19 | day | 2026-10-30 | Maturity of the receivables financing agreement | Scheduled — scheduled to mature on November 19, 2027 | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 14 | First debt maturity |
| 2030-03-14 | day | 2026-10-30 | Maturity of the senior credit facility | Scheduled — maturity date remains March 14, 2030 | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 13 | Revolver and term loan fall due |
| 2033-04-01 | day | 2026-10-30 | Maturity of the senior notes due 2033 | Scheduled — senior notes due April 1, 2033 | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 14 | Longest maturity in the debt table |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 30 |
| Calculated | 8 |
| Assumption-Based | 0 |
| Analyst Inference | 4 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 2 |
| Insufficient Information | 6 |
| Fields present | 26 |
| Fields total | 28 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 5 |

### Map: ownership and control

| From | Relationship | Edge type | To | Evidence |
|---|---|---|---|---|
| Existing Olin shareholders | Expected to own about 54.5% of the combined company after the merger | Ownership | OlinHuntsman Corporation | Merger terms described in 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 8; expected, not completed |
| Existing Huntsman stockholders | Expected to own about 45.5% of the combined company after the merger | Ownership | OlinHuntsman Corporation | Merger terms described in 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 8; expected, not completed |
| Olin Corporation | Held 51% of the Blue Water Alliance joint venture and consolidated it; the venture ended by the end of 2025 | Ownership | Blue Water Alliance | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 5 |
| Mitsui & Co., Ltd. | Held the 49% noncontrolling interest in the Blue Water Alliance joint venture | Ownership | Blue Water Alliance | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 5 |
| Olin Corporation | Exercised control of the Blue Water Alliance joint venture and consolidated it | Legal control | Blue Water Alliance | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 5 |
| Olin Corporation | Wholly owns the Niloco Hydrogen Holdings subsidiary | Ownership | Niloco Hydrogen Holdings LLC | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 6 |
| Niloco Hydrogen Holdings LLC | Owns 50% of the Hidrogenii joint venture, accounted for under the equity method | Ownership | Hidrogenii, LLC | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 6 |
| Plug Power LA JV, LLC | Owns the other 50% of the Hidrogenii joint venture | Ownership | Hidrogenii, LLC | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 6 |
| Certain domestic subsidiaries of Olin | Guarantee the obligations under the Senior Secured Credit Facility | Guarantee | Olin Corporation | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 13 |
| Certain Olin and Huntsman subsidiaries | Required to guarantee the obligations under the merger-date credit facility once it takes effect | Guarantee | Olin Corporation | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 8; applies only on closing |
| Winchester | Operates the government-owned Lake City Army Ammunition Plant under a contract | Other stated | U.S. Army | 10-K_2025-12-31_oln-20251231.htm.jsonl, pages 10 and 13 |

### Map: operating model to credit

| From | Relationship | Edge type | To | Evidence |
|---|---|---|---|---|
| Margin-over-volume operating model | Management states it prioritises Electrochemical Unit margins over sales volumes; Chlor Alkali sales fell 14.17% in nine months while segment earnings fell USD 190.6 million | Management Language | Chlor Alkali Products and Vinyls earnings | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, pages 2, 6 and 8; calculations C11 and C17 |
| Freeport vinyl chloride monomer outage | Cost USD 72.2 million of segment results in nine months and USD 32.1 million in the third quarter | Documentary Fact | Chemicals earnings and cash flow | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 32 |
| Single-site concentration at Freeport | One site hosts chlorine, vinyl chloride monomer and chlorinated organics, so an outage touches several product lines | Analyst Interpretation | Earnings volatility and revolver reliance | 10-K_2025-12-31_oln-20251231.htm.jsonl, pages 6 and 7 |
| Section 45V hydrogen tax credit | Benefit of USD 5.0 million in the third quarter of 2026 against USD 32.0 million a year earlier | Documentary Fact | Earnings quality of the Chlor Alkali segment | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 2 |
| Winchester order backlog | USD 1,331 million at 2026-01-31, 81% due in 2026 | Documentary Fact | Winchester revenue visibility | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 14 |
| Winchester revenue visibility | Supports cash flow while chemicals are weak, subject to U.S. government termination rights and a seasonal fourth quarter | Analyst Interpretation | Cash flow stability for creditors | 10-K_2025-12-31_oln-20251231.htm.jsonl, pages 10, 14 and 18 |
| Epoxy demand and Asian competition | Management says demand is weak and the segment is challenged by subsidized Asian competition | Management Language | Epoxy segment earnings | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 33 |
| Dividends and capital spending | Dividends of USD 68.3 million plus capital spending of USD 106.6 million exceeded operating cash flow of USD 69.7 million | Documentary Fact | Net borrowing and leverage | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 4; calculation C14 |
| Shintech judgment | Charges of USD 75.0 million and USD 11.1 million and cash paid of about USD 114 million in nine months | Documentary Fact | Operating cash flow and liquidity | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 25; calculation C15 |
| Covenant relief to 2027-09-30 | Net leverage and interest coverage tests are relaxed until relief ends; the ratio levels are not printed | Insufficient Information | Revolver and receivables availability | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 13–14 |

### transaction_summary Transaction summary

| Transaction | Status | Credit relevance | Source |
|---|---|---|---|
| All-stock merger of equals with Huntsman Corporation at 0.5476 Olin shares per Huntsman share | Pending; approved by both shareholder bodies on 2026-08-25; expected to close in the first quarter of 2027 | Changes the obligor and capital structure; termination fee of USD 121 million; costs of USD 24.3 million in nine months of 2026 | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 7–9 and 58 |
| Second amendment to the senior credit facility creating a USD 2,500.0 million merger-date facility | Executed 2026-10-27; effective only on the closing date | Replaces Olin's term loan and revolver and Huntsman's revolver; guarantees from certain Huntsman subsidiaries | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 8–9 |
| February 2026 amendment of the senior credit facility | Completed 2026-02-19 | Covenant relief to the earlier of 2027-09-30 or election; added guarantees and collateral; USD 109.7 million of term loan amortization prepaid from the revolver | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 106 |
| March 2025 refinancing: senior notes due 2033 of USD 600.0 million and a USD 1,850.0 million senior credit facility | Completed 2025-03-14 | Redeemed the USD 108.6 million 2025 notes and USD 500.0 million 2027 notes and extended the credit facility to 2030-03-14 | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 105 |
| Acquisition of AMMO, Inc. small caliber ammunition assets for USD 55.8 million | Completed 2025-04-18; financed with cash on hand | Not material to leverage; added brass shellcase capability to Winchester | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 7 |

### company_description Company description

| Issuer | Business description | Country | Sector |
|---|---|---|---|
| Olin Corporation | Vertically integrated global manufacturer and distributor of chemical products (chlor alkali and vinyls, epoxy) and a leading U.S. manufacturer of ammunition (Winchester) | United States | Chemicals and allied products |

### revenue_business_mix Revenue and business mix

| Business line | Revenue mix | Period | Status | Limitation |
|---|---|---|---|---|
| Chlor Alkali Products and Vinyls | 54.34% of sales, USD 3,684.4 million | FY2025 | Calculated from the segment note; the annual report prints 54% | Segment sales net of intersegment transfers are not separately stated |
| Epoxy | 20.23% of sales, USD 1,371.8 million | FY2025 | Calculated from the segment note; the annual report prints 20% | Epoxy receives chlorine and caustic soda at cost from the first segment |
| Winchester | 25.43% of sales, USD 1,724.6 million | FY2025 | Calculated from the segment note; the annual report prints 26% | See the conflict between the printed and calculated shares |
| Chlor Alkali Products and Vinyls | 47.85% of sales, USD 2,427.2 million | 9M 2026 | Calculated from the release | Nine-month figures are unaudited |
| Epoxy | 23.46% of sales, USD 1,189.9 million | 9M 2026 | Calculated from the release | Nine-month figures are unaudited |
| Winchester | 28.69% of sales, USD 1,455.5 million | 9M 2026 | Calculated from the release | Nine-month figures are unaudited |
| Chlor Alkali Products and Vinyls | 55.28% of sales, USD 2,828.0 million | 9M 2025 | Calculated from the release | Nine-month figures are unaudited |
| Epoxy | 19.79% of sales, USD 1,012.5 million | 9M 2025 | Calculated from the release | Nine-month figures are unaudited |
| Winchester | 24.93% of sales, USD 1,275.2 million | 9M 2025 | Calculated from the release | Nine-month figures are unaudited |

### ownership_register Ownership register

| Owner / class | Control | Economic interest | Credit relevance | Source |
|---|---|---|---|---|
| Public shareholders of Olin Corporation | No controlling holder disclosed; 2,490 record holders at 2026-01-31 | 114.0 million shares outstanding at 2026-09-30; beneficial holdings are not supplied | Widely held with no sponsor, so creditor alignment depends on board policy rather than an owner's funding choices | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 41; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 2 |
| Existing Olin shareholders after the merger | Governance of the combined company is not supplied | About 54.5% expected | Largest holder group of OlinHuntsman Corporation | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 8 |
| Existing Huntsman stockholders after the merger | Governance of the combined company is not supplied | About 45.5% expected | Second holder group of OlinHuntsman Corporation | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 8 |
| Mitsui & Co., Ltd. | Noncontrolling partner in the ended Blue Water Alliance joint venture | 49% of the joint venture; noncontrolling interests fell from USD 31.7 million at 2025-12-31 to USD 0.4 million at 2026-09-30 after a USD 31.3 million distribution | Cash leakage to a minority partner on liquidation | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 5; 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 2 and 4 |
| Plug Power LA JV, LLC | Equal partner in Hidrogenii, LLC | 50% of Hidrogenii; Olin holds the other 50% through Niloco Hydrogen Holdings | Equity-method venture outside consolidated debt | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 6 |
| Subsidiary guarantors | Certain domestic subsidiaries guarantee the senior credit facility and pledge substantially all personal property | Not supplied: guarantor financial statements are not in the supplied documents | Credit facility lenders have a claim on subsidiary assets that other creditors may not | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 13 |

### operating_model Operating model

| Operating driver | Measure | Period | Status | Credit relevance |
|---|---|---|---|---|
| Chlor Alkali Products and Vinyls segment earnings | USD 80.2 million against USD 270.8 million, a change of USD -190.6 million | 9M 2026 against 9M 2025 | Reported | Largest segment drives group earnings and covenant ratios |
| Freeport vinyl chloride monomer outage | USD 72.2 million of segment impact in nine months; USD 32.1 million in the third quarter | 9M 2026 and Q3 2026 | Reported | Single-site event risk; normal operations restored per management |
| Section 45V tax credit benefit | USD 5.0 million against USD 32.0 million a year earlier | Q3 2026 against Q3 2025 | Reported | Earnings support that may not recur at the prior level |
| Epoxy segment earnings | USD 13.7 million against a loss of USD 84.3 million | 9M 2026 against 9M 2025 | Reported | Recovery from losses; demand still weak and the Brazil plant is closing |
| Winchester segment earnings | USD 77.1 million against USD 67.1 million | 9M 2026 against 9M 2025 | Reported | Steady earnings leg; commodity metal costs and seasonality weigh on the fourth quarter |
| Winchester order backlog | USD 1,331 million at 2026-01-31 | Backlog at 2026-01-31 | Reported | Revenue visibility; 81% expected to ship in 2026 |
| Capital spending | USD 106.6 million in nine months; about USD 200 million expected for 2026 | 9M 2026 and FY2026 expected | Reported and guided | Capital intensity limits cash after dividends |
| Depreciation and amortization | About USD 470 million expected for 2026 | FY2026 expected | Guided | Gap to capital spending shows an asset base being run down |
| Environmental liabilities | USD 156.8 million at 2026-09-30; USD 25 million to USD 30 million of expense guided for 2026 | 2026-09-30 and FY2026 | Reported and guided | Long-dated cash claim outside the debt |
| Fourth quarter 2026 outlook | Adjusted EBITDA of USD 80 million to USD 100 million; results below the third quarter | Q4 2026 | Guided | Seasonally weakest quarter with planned turnarounds |
| Workforce | 7,849 employees, 36% of the U.S. workforce in bargaining units | 2025-12-31 | Reported | Three U.S. labor agreements expire in 2026, including Lake City |

### events_timeline Events timeline

| Date / window | Event | Credit relevance | Status | Source |
|---|---|---|---|---|
| 2025-03-14 | Refinancing: notes due 2033 and a USD 1,850.0 million senior credit facility | Extended maturities to 2030 and 2033 | Historical | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 105 |
| 2026-02-10 | Jury verdict for Shintech | Cash claim outside the debt | Historical | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 25 |
| 2026-02-19 | Credit facility amendment with covenant relief, guarantees and collateral | Relief to the earlier of 2027-09-30 or election | Historical; reported as a subsequent event in the annual report | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 106 |
| 2026-06-15 | Merger agreement signed with Huntsman | Changes the obligor and facility | Historical | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 7 |
| 2026-08-25 | Shareholder approvals by both companies | Removes the vote as a closing risk | Historical | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 8 |
| 2026-10-27 | Second credit amendment for the merger-date facility | Effective only on closing; a subsequent event, not in the 2026-09-30 balance sheet | Historical; subsequent event | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 8 |
| 2027-Q1 | Expected merger closing | Refinances existing facilities | Scheduled | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 8 |
| 2027-09-30 | Latest end of covenant relief | Covenants tighten; guarantees and liens fall away | Scheduled | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 13 |
| 2027-11-19 | Receivables financing agreement matures | First debt maturity | Scheduled | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 14 |

### gaps_ledger Gaps ledger

| Gap | Affected analysis | Severity | Action | Status |
|---|---|---|---|---|
| Proxy statement not supplied: board composition, beneficial owners, related-party dealings and compensation | Ownership, governance and capital allocation conclusions | Material | Supply the 2026 proxy statement | Open |
| Merger agreement and Huntsman financial statements not supplied | Merger consequence, combined leverage and governance | Material | Supply the merger agreement, joint proxy statement and Huntsman's latest report | Open |
| Executed credit agreement and indentures not supplied | Legal capacity for dividends, repurchases, investments and debt | Minor | Supply the executed documents | Open |
| Shintech appeal timing and merits not stated beyond the quarterly report | Cash exposure after 2026 | Minor | Supply the court filings or the issuer's disclosure of the appeal | Open |
| FY2025 add-backs to adjusted EBITDA not itemised; the residual legacy litigation charge of USD 25.0 million in nine months of 2026 is not itemised | Earnings quality and leverage on adjusted EBITDA | Minor | Supply the fourth quarter 2025 release and the nine-month reconciliation detail | Open |
| Lake City contract term and termination terms are described only in summary | Winchester revenue durability | Minor | Supply the contract summary | Open |
| Customer concentration beyond the statement that no customer exceeds 10% | Winchester and chemicals revenue durability | Minor | Supply top customer data if available | Open |

### conflict_log Conflict log

| Conflict | Sources | Materiality | Resolution | Downstream impact |
|---|---|---|---|---|
| Winchester share of FY2025 sales: the annual report prints 26% while the segment note gives 25.43% (1,724.6 of 6,780.8) | 10-K_2025-12-31_oln-20251231.htm.jsonl, pages 4 and 129 | Low: shares of 54%, 20% and 26% add to 100% by rounding | Both shown; the calculated share is used in tables | None for credit conclusions |
| Merger completion timing: second quarter release says first half of 2027; third quarter release and quarterly report say first quarter of 2027 | EX-99.1_2026-07-30_exhibit991q22026earningspr.htm.jsonl, page 3; EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 1; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 8 | Medium: timing sets when facilities are refinanced | Later document controls the current expectation; both kept as history | Analyses should quote the first quarter of 2027 and note the earlier statement |
| Merger dates: the agreement is dated 2026-06-15 in the quarterly report and announced on 2026-06-16 in the second quarter release | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 7; EX-99.1_2026-07-30_exhibit991q22026earningspr.htm.jsonl, page 3 | Low: execution and announcement are different events | Both dates kept with their roles | None |
| Covenant debt definition: the annual report describes the net leverage ratio as secured debt to EBITDA while the third quarter report describes consolidated total debt net of unrestricted cash to EBITDA, each excluding receivables borrowings up to USD 425.0 million | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 106; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 14 | Medium: changes what the covenant tests | Both quoted; no covenant capacity inferred | Covenant analysis needs the executed agreement |

### T2D.1 - Source register

| source_document_id | source_document_name | source_quality | period | entity_covered | data_supplied | limitation | downstream_use |
|---|---|---|---|---|---|---|---|
| S1 | 10-K_2025-12-31_oln-20251231.htm.jsonl | High | FY2025 | Olin Corporation consolidated | Business, segments, customers, backlog, workforce, capital allocation, debt history | Governance items are incorporated by reference to a proxy statement that is not supplied | Business, ownership and capital allocation registers |
| S2 | 10-Q_2026-03-31_oln-20260331.htm.jsonl | Medium | Q1 2026 | Olin Corporation consolidated | Interim notes and results | Unaudited | Event scan |
| S3 | 10-Q_2026-06-30_oln-20260630.htm.jsonl | Medium | Q2 2026 | Olin Corporation consolidated | Interim notes and merger announcement | Unaudited | Event scan |
| S4 | 10-Q_2026-09-30_oln-20260930.htm.jsonl | Medium | Q3 2026 and nine months | Olin Corporation consolidated | Merger terms, litigation, ratings, credit agreement description, outlook | Unaudited; merger agreement itself not supplied | Transaction, governance and behaviour registers |
| S5 | EX-99.1_2026-05-07_exhibit991q12026earningspr.htm.jsonl | Medium | Q1 2026 | Olin Corporation consolidated | Issuer-adjusted results | Issuer press release | Event scan |
| S6 | EX-99.1_2026-07-30_exhibit991q22026earningspr.htm.jsonl | Medium | Q2 2026 | Olin Corporation consolidated | Merger announcement and first completion timing | Issuer press release | Timeline and conflict log |
| S7 | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl | Medium | Q3 2026 and nine months | Olin Corporation consolidated | Segment results, outlook, merger status | Issuer press release | Operating model and timeline |

### T2D.3 - Governance register

| Governance Topic | Source-Supported Fact | Risk Direction | Risk Mechanic | Credit Implication | Evidence Quality | Source Trace | Limitation |
|---|---|---|---|---|---|---|---|
| Board and control rights | Biographical and board information is incorporated by reference to a proxy statement | Insufficient Information | Board independence and committee structure cannot be assessed | Governance view rests on behaviour, not structure | Insufficient | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 142 | Proxy statement not supplied |
| Dividend policy | Payment of dividends is at the discretion of the board and may change | Neutral | The board can cut or keep the distribution as earnings change | Dividend can be reduced to protect liquidity; it was kept at USD 0.20 per share a quarter in 2026 | High | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 49 | Debt document limits on dividends not supplied |
| Audit and reporting quality | Annual statements audited by KPMG LLP with a critical audit matter on environmental obligations; quarterly reports and releases include non-GAAP reconciliations | Supportive | Audited statements and reconciliations give creditors a monitoring base | Supports confidence in reported figures | High | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 80; EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 10 | No auditor review report appears in the quarterly report text supplied |
| Merger interim covenants | The merger agreement restricts certain actions without Huntsman's consent before closing | Mixed | Limits capital allocation and financing flexibility until closing | May constrain buybacks, disposals and new debt before closing, which can protect creditors but also limits remedies | Medium | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 7 | Covenant detail not supplied |
| Merger litigation | Purported shareholders of Olin and Huntsman have filed lawsuits relating to the merger | Mixed | Litigation can delay closing or add conditions | Timing and cost risk to the facility refinancing | Medium | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 58 | Number and relief sought not stated |
| Related-party transactions | Item 13 is incorporated by reference to a proxy statement | Insufficient Information | Leakage to related parties cannot be tested | Not scored | Insufficient | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 144 | Proxy statement not supplied |
| Management and monitoring fees | No sponsor fee arrangement is described in the supplied documents | Insufficient Information | No sponsor fee leakage is evident but cannot be excluded | Not scored | Insufficient | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 4 | Absence of disclosure is not evidence of absence |

### T2D.4 - Behavior flag register

| Flag ID | Behavior Type | Documented Action | Behavior Category | Amount / Funding Source | Legal-Capacity Link | Risk Mechanic | Credit Implication | Evidence Quality | Source Trace | Limitation |
|---|---|---|---|---|---|---|---|---|---|---|
| CP-2C-FLAG-001 | Distribution | Regular dividend of USD 0.20 per share each quarter, USD 68.3 million in nine months of 2026 | Mixed | USD 68.3 million; operating cash flow of USD 69.7 million did not cover capital spending, so net borrowing of USD 185.3 million funded the gap | Insufficient Information | A distribution kept while free cash flow is negative adds to net debt | Raises leverage at the margin; a cut would be creditor-supportive | High | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 4 and 49 | Funding source is an analyst inference from the cash flow statement |
| CP-2C-FLAG-002 | Repurchase | USD 50.5 million repurchased in FY2025; none printed in 2026 | Mixed | Funded from cash and borrowings; USD 1,948.9 million of authority remains | Insufficient Information | Repurchases during a leverage rise would be extraction-oriented; the pause removes that | Supportive while paused; restart is within board discretion | High | 10-K_2025-12-31_oln-20251231.htm.jsonl, pages 41–42; 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 4 and 52 | Reason for the pause is not stated |
| CP-2C-FLAG-003 | Amendment | Credit facility amended on 2026-02-19: covenant relief, guarantees and collateral added, USD 109.7 million of term loan amortization prepaid using the revolver | Mixed | USD 109.7 million from revolver borrowings | Insufficient Information | Relief preserves access while adding lender collateral; the prepayment used liquidity | Creditor-aligned on security but a sign of covenant stress | High | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 106; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 13 | Covenant levels not supplied |
| CP-2C-FLAG-004 | Refinancing | March 2025 notes due 2033 of USD 600.0 million and senior credit facility of USD 1,850.0 million, redeeming 2025 and 2027 notes | Supportive | USD 600.0 million of new notes plus facility borrowings | Insufficient Information | Extends maturities without subordinating existing creditors on the evidence supplied | Moves the maturity wall to 2030 and 2033 | High | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 105 | Ranking of the notes is not stated |
| CP-2C-FLAG-005 | Acquisition | AMMO, Inc. assets acquired for USD 55.8 million | Neutral | Cash on hand | Insufficient Information | Small cash-funded bolt-on | Limited leverage effect | High | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 7 | Synergy realisation not stated |
| CP-2C-FLAG-006 | Acquisition | All-stock merger of equals with Huntsman; costs of USD 24.3 million in nine months of 2026 | Mixed | Stock consideration; costs paid from operations and borrowings | Insufficient Information | No acquisition debt, but a new facility and a larger obligor | Credit effect depends on combined leverage, which is not established | High | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 7–9 | Huntsman financials not supplied |
| CP-2C-FLAG-007 | Distribution to minority partner | USD 31.3 million paid to Mitsui for the liquidation of Blue Water Alliance working capital | Neutral | USD 31.3 million cash | Not applicable: a contractual joint venture settlement | A one-off outflow tied to winding up the venture | Reduced cash and added to borrowing in 2026 | High | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 49 | Terms of the settlement are not stated |

### T2D.5 - Capital allocation risk table

| Capital Allocation Item | Source-Supported Fact | Direction | Risk Mechanic | Credit Implication | Evidence Quality | Source Trace | Limitation |
|---|---|---|---|---|---|---|---|
| Organic investment | Capital expenditure of USD 106.6 million in nine months of 2026 and about USD 200 million expected for the year, against USD 226.3 million in FY2025 | Neutral | Lower spending preserves cash but D&A of about USD 470 million expected is well above it | Cash is conserved at the cost of asset renewal | High | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 4 and 45; 10-K_2025-12-31_oln-20251231.htm.jsonl, page 82 | Maintenance and growth split not supplied |
| M&A | AMMO assets for USD 55.8 million in 2025; Huntsman merger pending | Mixed | Small cash bolt-on, then a transformational stock merger | Event risk until closing | High | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 7–8 | Huntsman terms in summary only |
| Integration and restructuring spend | Restructuring charges of USD 21.3 million in nine months of 2026 and USD 33.4 million in FY2025; merger costs of USD 24.3 million | Adverse | Recurring charges and deal costs weigh on reported EBITDA | Supports use of reported EBITDA as primary measure | High | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 3; 10-K_2025-12-31_oln-20251231.htm.jsonl, page 81 | Merger costs guided at USD 35 million to USD 40 million for 2026 |
| Dividends | USD 68.3 million in nine months of 2026; USD 91.6 million in FY2025 | Adverse | Paid while free cash flow is negative | Adds to net debt | High | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 49 | Debt document limits not supplied |
| Debt paydown and refinancing | Net long-term debt borrowing of USD 185.3 million in nine months of 2026; term loan amortization prepaid with revolver borrowings | Adverse | Debt rose rather than fell | No deleveraging in 2026 to date | High | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 13 and 15 | Net debt effect of the merger facility not established |
| Share repurchases | USD 50.5 million in FY2025; none printed in 2026; USD 1,948.9 million remaining | Neutral | Paused, with capacity available | Policy risk if earnings recover before debt falls | High | 10-K_2025-12-31_oln-20251231.htm.jsonl, pages 41–42 | Reason for the pause is not stated |
| Equity support | None described; no sponsor | Insufficient Information | No outside equity cushion | Not applicable to a widely held issuer | Insufficient | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 41 | Absence of disclosure |
| Asset sales | None described in the supplied documents | Insufficient Information | Not applicable | Not scored | Insufficient | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 7 | Absence of disclosure |
| Liquidity preservation | Covenant relief amendment, no repurchases printed, capital spending reduced | Supportive | Protects access to the revolver and receivables facility | Helps near-term liquidity | Medium | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 13 and 45 | Intent not stated |

### T2D.9 - Sponsor and governance risk assessment

| Risk-Level Driver | Evidence | Risk Mechanic | Credit Implication | Evidence Quality | Source Trace | Countervailing Evidence | Limitation |
|---|---|---|---|---|---|---|---|
| Sponsor and governance risk level: Medium | No sponsor and no extraction event, but a dividend kept with negative free cash flow, a covenant amendment and a pending merger | Distributions add to debt while covenants are relaxed | Medium risk driven by capital allocation and event exposure | Medium | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 4, 13 and 49 | Share repurchases are not printed for 2026; audited statements and reconciliations are provided | Proxy statement and debt documents not supplied |
| Distributions while leverage rises | USD 68.3 million of dividends against negative free cash flow | Debt-funded in substance | Higher net debt and slower recovery of covenant headroom | High | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 4 and 49 | Board discretion allows a cut | Willingness to cut is not stated |
| Pending merger and new facility | Merger-date facility of USD 2,500.0 million replacing Olin and Huntsman facilities | Larger obligor with refreshed covenants and guarantees | Outcome depends on combined leverage not in the supplied documents | Medium | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 8–9 | Rating agencies placed outlooks on watch positive or developing | Huntsman financials not supplied |
| Litigation outside the debt | Shintech judgment with USD 114 million paid in nine months | Cash call reduces liquidity | Adds to the funding gap | High | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 25 | Final judgment matches the accrual; no material further 2026 payment expected | Appeal outcome not established |

### T2D.11 - Governance gaps ledger

| Gap ID | Missing Data | Why It Matters | Affected Section / Flag / Export Record | Consequence for Confidence | Required Follow-Up Source |
|---|---|---|---|---|---|
| CP-2C-GAP-001 | Board composition, beneficial owners, related-party dealings and compensation | Control, independence and leakage cannot be tested | T2D.3; ownership register | Medium impact | 2026 proxy statement |
| CP-2C-GAP-002 | Executed credit agreement and indentures | Capacity for dividends, repurchases, investments, liens and priming is unknown | CP-2C-FLAG-001 to CP-2C-FLAG-004 | Medium impact | Executed credit agreement, amendments and indentures |
| CP-2C-GAP-003 | Merger agreement and Huntsman financials | Combined leverage and governance unknown | CP-2C-FLAG-006; transaction register | High impact | Merger agreement, joint proxy statement, Huntsman latest report |
| CP-2C-GAP-004 | Covenant compliance certificate and basket usage | Headroom and permitted payments unknown | T2D.9 | Medium impact | Compliance certificates |
| CP-2C-GAP-005 | Reason for no repurchases in 2026 | Policy intent unclear | CP-2C-FLAG-002 | Low impact | Board or management statement |
| CP-2C-GAP-006 | Amendment and liability management history before 2025 | A pattern of amendments cannot be tested | CP-2C-FLAG-003 | Low impact | Earlier annual reports and credit agreements |

<!-- table-id: cp1a.cp_model_snapshot_fields -->

### cp1a.cp_model_snapshot_fields Snapshot fields

| field_id | value | status | source_id | source_locator | as_of |
|---|---|---|---|---|---|
| issuer_name | Olin Corporation | READY | S4 | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 1 | 2026-11-05 |
| sector | Chemicals and ammunition manufacturing | READY | S1 | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 4 | 2026-11-05 |
| country | United States | READY | S4 | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 1 | 2026-11-05 |
| shareholders | Widely held; 2,490 record holders at 2026-01-31; no controlling shareholder disclosed | READY | S1 | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 41 | 2026-11-05 |
| transaction_summary | Pending all-stock merger with Huntsman Corporation at 0.5476 Olin shares per Huntsman share, expected to close in the first quarter of 2027 | READY | S4 | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 7–8 | 2026-11-05 |
| business_description | Vertically integrated chemicals manufacturer (chlor alkali, vinyls, epoxy) and leading U.S. ammunition producer | READY | S1 | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 4 | 2026-11-05 |

## Calculations

| Calculation ID | Calculation | Inputs | Result | Source |
|---|---|---|---|---|
| C1 | Chlor Alkali Products and Vinyls share of FY2025 sales | 3,684.4 / 6,780.8 | 54.34% | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 129 |
| C2 | Epoxy share of FY2025 sales | 1,371.8 / 6,780.8 | 20.23% | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 129 |
| C3 | Winchester share of FY2025 sales | 1,724.6 / 6,780.8 | 25.43% | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 129 |
| C4 | Chlor Alkali Products and Vinyls share of nine-month 2026 sales | 2,427.2 / 5,072.6 | 47.85% | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 8 |
| C5 | Epoxy share of nine-month 2026 sales | 1,189.9 / 5,072.6 | 23.46% | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 8 |
| C6 | Winchester share of nine-month 2026 sales | 1,455.5 / 5,072.6 | 28.69% | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 8 |
| C7 | Chlor Alkali Products and Vinyls share of nine-month 2025 sales | 2,828.0 / 5,115.7 | 55.28% | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 8 |
| C8 | Epoxy and Winchester shares of nine-month 2025 sales | 1,012.5 / 5,115.7; 1,275.2 / 5,115.7 | 19.79%; 24.93% | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 8 |
| C9 | Share of FY2025 sales outside the United States | (6,780.8 − 4,585.9) / 6,780.8 | 32.37% | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 130 |
| C10 | Winchester sales change, nine months 2026 against 2025 | 1,455.5 / 1,275.2 − 1 | 14.14% | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 8 |
| C11 | Chlor Alkali Products and Vinyls sales change, nine months 2026 against 2025 | 2,427.2 / 2,828.0 − 1 | -14.17% | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 8 |
| C12 | Epoxy sales change, nine months 2026 against 2025 | 1,189.9 / 1,012.5 − 1 | 17.52% | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 8 |
| C13 | Winchester backlog change, 2026-01-31 against 2025-01-31 | 1,331 / 1,426 − 1 | -6.66% | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 14 |
| C14 | Cash after dividends and capital spending, nine months 2026, USD million | 69.7 − 68.3 − 106.6 | -105.2 | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 4 |
| C15 | Shintech charges recorded, USD million | 75.0 + 11.1 | 86.1 | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 25 |
| C16 | Legacy litigation add-back in nine months 2026 not explained by the Shintech charge, USD million | 36.1 − 11.1 | 25.0 | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 10; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 25 |
| C17 | Segment earnings change, Chlor Alkali Products and Vinyls, nine months, USD million | 80.2 − 270.8 | -190.6 | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 8 |
| C18 | FY2025 gap between adjusted and reported EBITDA, USD million | 651.8 − (−101.1 + 183.9 − 60.0 + 521.6), with 183.9 = 188.3 − 4.4 | 651.8 − 544.4 = 107.4 | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 11; 10-K_2025-12-31_oln-20251231.htm.jsonl, page 81 |
| C19 | Candidate explanation of that gap, USD million | 33.4 + 75.0 − 1.0 | 107.4, equal to the gap in C18 by the same arithmetic; an inference, since the issuer prints no FY2025 reconciliation | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 81; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 25 |

## Gaps

- Medium: The proxy statement is not supplied, so board composition, beneficial owners, related-party dealings and compensation are not established; the 2026 proxy statement would close it.
- Medium: The merger agreement and Huntsman's financial statements are not supplied, so combined leverage, governance and the effect of the new facility on Olin creditors are not established.
- Low: The executed credit agreement and indentures are not supplied, so what the debt documents permit for dividends, repurchases and investments is not established.
- Low: The Shintech appeal and the USD 25.0 million of legacy litigation charge not explained by that case are described only in summary, so exposure after 2026 is not established.
- Low: The Lake City contract term and customer concentration beyond the statement that no customer exceeds 10% are not itemised, so Winchester durability beyond the backlog is not established.
- Low: The reason for the absence of share repurchases in 2026 is not stated.

## Next module

The orchestrator selects the next module.
