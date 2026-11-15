# React visualisation map

Each entry in the [RBOT visualisation catalogue](../visualisations/catalogue.csv)
has a React rendering target and a data gate. The [Report design](react-module-coverage.md)
sets layout and evidence placement. Component IDs in this file refer to the
[React component map](component-map.md). Catalogue figure IDs (such as S.4 or
CR.1) identify data contracts and can differ from the names seen in a published
report.

The source status column records the catalogue classification. **Figure
producer** means a defined producer in the catalogue. **Table/content only**
means settled content may render as a record or table and needs compatible
descriptor data before it becomes a chart. **New view** needs its published
data and an explicit view binding. **Design gap**, **Broader handoff needed**,
and **Unavailable frame** keep the proposed form visible in design review and
use a gap or a qualified table in the report. A delivery can publish a related
standalone descriptor even when the formal catalogue figure is unbound.

The current connected renderer reads chart, chart-gap, event, and map
descriptors from the published handoff and model data from the publisher. The
Caesars preview supplied CP-1 revenue/EBITDA, EBITDA bridge, leverage, interest
cover, liquidity, maturities and debt stack, CP-4 covenant headroom, seven
event lanes, seven maps, and the CP-6 portfolio-limits gap. It supplied one
forecast grid. The browser proof specifically checked the maturities figure,
the forecast grid and its displayed value, and original handoff download.
Presence of the other descriptors does not establish visual or source fidelity.

## CP-0

| Entry | React target and placement | What delivery must supply | Source status and fallback |
| --- | --- | --- | --- |
| `CP-0-V01` **Source, period and consumer coverage** | R6 readiness groups and R2 facts. Modules with full coverage matrix in Evidence. | Source inventory, effective source hashes, issuer/perimeter/period coverage, source-to-module map (T1–T4, T6, T8 · P3/P5). | Table/content only. Unstated coverage remains a gap. |
| `CP-0-V02` **Readiness and blocking gaps** | R5 pathway steps with S1 state marks. Modules. | T5/T7 readiness and gaps · selected downstream consumers and exact blocking reasons. | New view. Use only published module relationships and states. |
| `CP-0-V03` **Source chronology and supersession** | R4 dated source lane. Modules with source detail in Evidence. | Document publication, reporting period, revision/amendment dates and authority. | New view. Keep publication, reporting and import dates distinct. |

## CP-1

| Entry | React target and placement | What delivery must supply | Source status and fallback |
| --- | --- | --- | --- |
| `CP-1-V01` **Total and net leverage** (`S.1`) | C2 trend or C3 multi-series paths. Modules and Forecast run charts. | CP-1 typed S.1 producer coordinates, debt/EBITDA basis, date/period and fact references. | Figure producer. Separate face/carrying debt and EBITDA bases. |
| `CP-1-V02` **Interest coverage** (`S.2`) | C2 trend or C3 multi-series paths. Modules and Forecast run charts. | Typed S.2 · stated coverage definitions, debt-only/lease-inclusive series when supplied. | Figure producer. Label the stated coverage definition for each series. |
| `CP-1-V03` **Cash and accessible liquidity** (`S.3`) | C2 trend or C3 multi-series paths. Modules and Forecast run charts. | Typed S.3 · cash and total accessible-liquidity observations with accessibility restrictions. | Figure producer. Use distinct cash and accessible-liquidity labels. |
| `CP-1-V04` **Debt maturity wall** (`S.4`) | C1 columns and ChartTable. Modules and Forecast run charts. | Typed S.4 · T4.18 facilities/claim amounts, final maturities, currency and debt categories. | Figure producer. Keep the missing period slot. No guessed maturity. |
| `CP-1-V05` **Revenue and adjusted EBITDA history** (`S.5`) | C1 grouped columns. Modules and Forecast run charts. | Typed S.5 · cited revenue and the specified EBITDA measure by comparable period. | Figure producer. Pair values on comparable periods and the stated EBITDA basis. |
| `CP-1-V06` **Debt ranking and cumulative leverage** (`S.6`) | C4 StackChart with ranked legend. Modules and Forecast run charts. | Facility balances, ranking/security, guarantor/obligor scope, common EBITDA denominator · EV only when supplied. | Design gap. A published balance stack can render. Leave the named cumulative-leverage figure unavailable without its denominator. |
| `CP-1-V07` **EBITDA adjustment bridge** (`EU.3`) | C10 WaterfallChart. Modules and Forecast run charts. | T4.17 bridge from reported measure to specified adjusted measure, signed adjustments and reconciliation. | Design gap. Use a published reconciled bridge. A legacy bridge does not establish the separate Earnings Update figure. |
| `CP-1-V08` **Financial statements and calculation lineage** | R1 StatementBlock and R12 derivation. Modules and Evidence Trace. | T4.4–T4.6, T4.8–T4.10, T4.15–T4.19 and source/calculation trace. | Table/content only. Keep annual, quarterly, interim and LTM groups explicit. |

## CP-1A

| Entry | React target and placement | What delivery must supply | Source status and fallback |
| --- | --- | --- | --- |
| `CP-1A-V01` **Issuer event history and transaction calendar** | R4 dated EventLane. Modules and selected Overview watch items. | events_timeline, transaction_summary · actual event date/precision/status, parties and cited handoff lines. | New view. Keep historical, scheduled and scenario lanes distinct. |
| `CP-1A-V02` **Ownership and control** | R5 directed EdgeMap with table. Modules. | ownership_register · owner/class, economic interest, control rights, dates and evidence. | New view. Show declared ownership and control as different edge types. |
| `CP-1A-V03` **Business mix and concentration** | C5 RowChart plus R2 facts. Modules. | revenue_business_mix · aligned CP-1 T4.16 segment/end-market amounts or explicit sourced shares. | Table/content only. Use published segment amounts with a common period and unit. |
| `CP-1A-V04` **Operating model and credit transmission** | R5 directed EdgeMap with table. Modules. | operating_model and credit_translation: evidence → mechanism → credit implication. | New view. Keep links and mechanisms at the granularity of the handoff. |
| `CP-1A-V05` **Governance, sponsor behaviour and capital allocation** | C7 MatrixBlock or grouped R2 facts. Modules with full governance register in Evidence. | T2D.2–T2D.9, conflicts, documented actions and existing scoring outputs. | Table/content only. Use graded axes only where stated. |

## CP-1B

| Entry | React target and placement | What delivery must supply | Source status and fallback |
| --- | --- | --- | --- |
| `CP-1B-V01` **Prior versus current financial results** (`EU.1`) | C1 grouped columns with ChartTable. Modules. | T1B.1 paired revenue, EBITDA, cash flow/capex, comparable perimeter and duration. | Design gap. Use the published period table until EU.1 has a bound producer. |
| `CP-1B-V02` **Margin and operating KPI changes** (`EU.2`) | C11 DumbbellChart or F2 paired measures. Modules. | T1B.1 margin plus sourced segment/KPI prior/current pairs where actually supplied. | Design gap. Use the published KPI table until EU.2 has a bound producer. |
| `CP-1B-V03` **Changes and drivers** | F2 measure and C5 signed comparison. Modules with driver reconciliation in Evidence. | T1B.1/T1B.2 deltas and T1B.3 driver/guidance evidence. | Table/content only. Use component bars only when the changes are stated. |
| `CP-1B-V04` **Earnings release, guidance and watch dates** | R4 events and R2 guidance pairs. Modules. | Actual release/observation dates and explicitly scheduled updates · guidance ranges when supplied. | New view. Distinguish release dates and guidance periods. |

## CP-DR

| Entry | React target and placement | What delivery must supply | Source status and fallback |
| --- | --- | --- | --- |
| `CP-DR-V01` **Research questions, answers and consumers** | R3 QuestionsBlock with R12 links. Modules with consumer details in Evidence. | TDR.1/TDR.2 locked questions, named receivers, claims and located evidence · TDR.4 dossier answers. | Table/content only. Keep unanswered questions visibly open. |
| `CP-DR-V02` **Source support and contradiction** | R6 support groups with R13 evidence matrix. Modules and Evidence Trace. | TDR.2/TDR.4 sources, claim support, contrary evidence and uncertainty. | Table/content only. Do not merge conflicting sources into one conclusion. |
| `CP-DR-V03` **Sourced sector/issuer catalysts** | R4 dated EventLane. Modules. | Dated events from the dossier with publication date distinct from event date and named impacted consumer. | New view. Place dates from sourced records only. Undated themes remain in findings. |
| `CP-DR-V04` **Peer/transaction research coverage** | R6 coverage groups and R13 peer evidence. Modules and Evidence Record. | TDR.3 candidate peers, TDR.5 alignment observations, TDR.6 located figures. | Table/content only. Keep provisional and settled peer observations labelled. |

## CP-1C

| Entry | React target and placement | What delivery must supply | Source status and fallback |
| --- | --- | --- | --- |
| `CP-1C-V01` **Issuer against peer range: percent metrics** (`RV.3a`) | C12 RangeStripChart for percent values. Modules and Forecast run charts. | T1C.1 inclusion and T1C.3–T1C.5 settled EBITDA margin and FFO/debt observations. | Figure producer. Use the declared peer set and one percentage basis. |
| `CP-1C-V02` **Issuer against peer range: multiples** (`RV.3b`) | C12 RangeStripChart for multiples. Modules and Forecast run charts. | T1C.3–T1C.5 total leverage and coverage, with issuer/peer definitions. | Figure producer. Keep leverage and coverage multiple families separate. |
| `CP-1C-V03` **Comparable universe and outliers** | R2 peer outlier list and R13 comparison. Modules and Evidence Record. | T1C.1–T1C.8 inclusion, normalization, source tie-out and gap rows. | Table/content only. State exclusions and incomplete observations. |
| `CP-1C-V04` **Valuation evidence and basis selection** | C12 range strip and R4 dated transactions. Modules. | T1C.9–T1C.11 public comps/precedents, date windows, metric definitions and selected basis. | Table/content only. Use compatible valuation bases or keep a qualified table. |

## CP-1D

| Entry | React target and placement | What delivery must supply | Source status and fallback |
| --- | --- | --- | --- |
| `CP-1D-V01` **Issuer-to-supported EBITDA** | C10 WaterfallChart. Modules. | T1D.1–T1D.4 add-backs, achievability/recurrence decisions, accepted/rejected amounts and reconciliation. | Table/content only. Display signed reconciled steps. Missing steps retain a gap. |
| `CP-1D-V02` **Add-back quality** | C7 MatrixBlock and R6 evidence groups. Modules with audit in Evidence. | T1D.1/T1D.2 assessment categories, rationale and evidence. | Table/content only. Use an axis grade only where the method states it. |
| `CP-1D-V03` **Cash conversion and leverage restatement** | C5 comparison or R1 statement grid. Modules. | T1D.5–T1D.7/settled cash-conversion and leverage output with issuer/house basis labels. | Table/content only. Keep issuer and supported bases named. |

## CP-2

| Entry | React target and placement | What delivery must supply | Source status and fallback |
| --- | --- | --- | --- |
| `CP-2-V01` **Thesis, strengths and weaknesses** | P6 for-and-against board and P2 findings. Overview and Modules. | T2.7/T2.10 and key-findings/thesis/strengths/weaknesses registers. | Table/content only. Use stated arguments and provenance, including contrary evidence. |
| `CP-2-V02` **Credit-risk transmission** | R5 directed EdgeMap with table. Modules. | T2.1/T2.11 assessments, named risks, explicit mechanisms and limitations. | New view. Display stated driver, mechanism and outcome links. |
| `CP-2-V03` **Watch items and thesis invalidation** | R8 WatchBlock and P4 trigger callout. Modules and selected Overview watch items. | T2.11/T2.12 watch metrics, thresholds/conditions and evidence gaps. | Table/content only. State a threshold only when the handoff gives one. |

## CP-2A

| Entry | React target and placement | What delivery must supply | Source status and fallback |
| --- | --- | --- | --- |
| `CP-2A-V01` **Base/downside/stress comparison** | C5 ComparisonChart with R9 case choices. Modules. | T2B.1–T2B.5 selected base period, static shocks, EBITDA, cash interest and credit metrics. | Table/content only. Use the same period and unit. Mixed quantities get separate panels. |
| `CP-2A-V02` **First-break ranking and cushions** | C8 ranked bars or R8 WatchBlock. Modules. | T2B.6–T2B.8 break levels, required decline, outcome and ranking. | Table/content only. Keep incomparable cushions and qualitative breakpoints as records. |
| `CP-2A-V03` **Stress assumptions and what breaks first** | R5 directed EdgeMap with R9 case choices. Modules. | Recorded scenario assumptions, test outcomes and explicit analytical explanation. | New view. Keep scenario assumptions visibly separate from observed outcomes. |

## CP-2D

| Entry | React target and placement | What delivery must supply | Source status and fallback |
| --- | --- | --- | --- |
| `CP-2D-V01` **Sources and uses / liquidity bridge** (`CR.2`) | C10 WaterfallChart. Modules and Forecast run charts. | T2E.1/T2E.3 settled bridge points and accessible liquidity components. | Figure producer. Keep the signed bridge and stated total. Leave a missing step unplotted. |
| `CP-2D-V02` **Cash runway and minimum liquidity** | C2 period trend and R1 runway grid. Modules and Forecast where published. | T2E.2/T2E.3 liquidity position/runway and any supplied observation periods/minimum. | Table/content only. A point in time is a fact, not a dated runway. |
| `CP-2D-V03` **Maturities, uses and funding dates** | R4 dated financing EventLane. Modules. | T2E.4 maturities, dated obligations and T2E.5 funding-gap windows. | New view. Place only sourced funding, uses and maturity dates. |
| `CP-2D-V04` **Accessible versus restricted resources** | R2 access facts and R6 status groups. Modules. | T2E.1/T2E.2 source amount, currency, jurisdiction/entity, availability and restrictions where provided. | Table/content only. Show restricted cash and contingent resources on their own terms. |

## CP-2E

| Entry | React target and placement | What delivery must supply | Source status and fallback |
| --- | --- | --- | --- |
| `CP-2E-V01` **Rate shock before/after hedging** | C5 ComparisonChart for discrete rate shocks. Modules. | Produced T2F.1–T2F.5 baseline, up to three upward rate shocks, interest/coverage/FCF and hedge effects. | Table/content only. Pair gross and hedged results on the same shock basis. |
| `CP-2E-V02` **Currency shock exposure** | C5 ComparisonChart for discrete FX shocks. Modules. | T2F.4 specified currency moves, debt/EBITDA changes and leverage. | Table/content only. Group like currencies, directions and measures. |
| `CP-2E-V03` **Hedges and residual risk** | R5 directed Hedge map with R4/C14 expiry lane. Modules. | T2F.5 hedge terms and dated expiries/notionals if actually retained. | New view. A span requires both dated endpoints. Use a point for a stated expiry only. |

## CP-2G

| Entry | React target and placement | What delivery must supply | Source status and fallback |
| --- | --- | --- | --- |
| `CP-2G-V01` **Forward debt, cash and credit metrics** | C3 PathChart and R1 model grid. Forecast. | T2H.2–T2H.6 annual base/downside operating, debt/cash and metrics. | Table/content only. Keep the actual cutoff and case names. Use published calculation values. |
| `CP-2G-V02` **Deleveraging and break-point timing** | R4/R17 dated or annual milestone lane. Forecast with narrative in Modules. | T2H.7/T2H.8 first affected year, path and thresholds. | Table/content only. Annual steps give annual precision only. |
| `CP-2G-V03` **Assumption and scenario comparison** | R9 case choice and R2 driver comparison. Forecast. | T2H.3 assumptions, CP-2A persistent shocks, repayment/distribution/minimum-liquidity choices. | Table/content only. Name the driver basis, assumptions and model-versus-narrative limits. |

## CP-2H

| Entry | React target and placement | What delivery must supply | Source status and fallback |
| --- | --- | --- | --- |
| `CP-2H-V01` **Rating-trigger headroom** (`DR.6`) | S3 gap panel with C6 reserved for resolved data. Modules and Forecast run charts. | T2R.3–T2R.5 agency thresholds, direction, compatible metric basis and source. | Unavailable frame. Keep DR.6 explicitly unavailable. |
| `CP-2H-V02` **Agency divergence and migration view** | F6 rating badges and C15 PairTile. Modules. | T2R.2/T2R.7/T2R.8 issuer/instrument rating, agency, outlook, as-of and stated migration view. | Table/content only. Use ordinal labels with distinct issuer/instrument and agency scopes. |
| `CP-2H-V03` **Published rating actions and projected triggers** | R4 dated agency EventLane. Modules. | Source-dated actions/reviews and T2R.6 forecast trigger year. | New view. Separate actions from hypothetical or undated triggers. |

## CP-3

| Entry | React target and placement | What delivery must supply | Source status and fallback |
| --- | --- | --- | --- |
| `CP-3-V01` **Security comparison and preference** | R2 instrument cards and C5 comparison. Modules. | T3.1/T3.3/T3.5/T3.7/T3.9 market evidence, instrument terms, risks and recorded preference. | Table/content only. Keep identity and quote class linked to exact evidence. |
| `CP-3-V02` **Price, compensation and recovery case** | C5 scenario comparison and R9 case choices. Modules. | CP-3 price and valuation judgments with CP-4C recoveries and CP-3D market terms when selected. | Table/content only. Keep price, yield and recovery on their own units and dates. |
| `CP-3-V03` **Instrument optionality and catalyst dates** | R4 instrument EventLane. Modules. | Sourced maturity, call/put, coupon/reset and offer deadlines with security identity. | New view. Display stated option and maturity dates. Unknown stays unplaced. |

## CP-3C

| Entry | React target and placement | What delivery must supply | Source status and fallback |
| --- | --- | --- | --- |
| `CP-3C-V01` **Refinancing need by maturity** (`CR.3`) | C1 ColumnsChart. Modules and Forecast run charts. | T3D.1 settled maturity/funding-need points and supplied resources. | Figure producer. Display stated needs and resources on the published time buckets. |
| `CP-3C-V02` **Refinancing burden and cost sensitivity** | C5 cost comparison with R9 cases. Modules. | T3D.2/T3D.3 burden/cost outputs and explicit stress assumptions. | Table/content only. Keep repricing assumptions and actually observed terms distinct. |
| `CP-3C-V03` **Refinancing and LME alternatives** | R9 choice cards with R5 pathway steps. Modules. | T3D.4–T3D.7 creditor position, LME capacity, paths and judgments · CP-4 legal conditions. | Table/content only. Keep contingencies with each alternative. |
| `CP-3C-V04` **Execution windows and decision deadlines** | R4 dated financing EventLane. Modules. | Source-dated maturities/call windows, explicit deadlines and analyst review milestones. | New view. Plot only stated deadlines and distinguish scenario windows. |

## CP-3D

| Entry | React target and placement | What delivery must supply | Source status and fallback |
| --- | --- | --- | --- |
| `CP-3D-V01` **Yield against maturity** (`RV.1`) | C9 ScatterPlot. Modules and Forecast when bound. | T3E.* compatible instrument yield/spread, maturity, quote date and source class. | Design gap. Use quote-date, maturity and comparable yield basis. RV.1 remains unbound. |
| `CP-3D-V02` **Market-implied versus fundamental risk** | R2 assumption/result details and C5 comparisons. Modules. | T3E.1–T3E.9 stated recovery/horizon assumptions, market inputs and computed implied-risk outputs. | Table/content only. Keep method assumptions and published validation limits. |
| `CP-3D-V03` **Trading technicals and quote evidence** | R1 quote table and C2 for a dated series. Modules with full quotes in Evidence. | T3E.2–T3E.10 bid/offer, time, source and technical assessments. | Table/content only. Individual observations remain individual. |

## CP-4

| Entry | React target and placement | What delivery must supply | Source status and fallback |
| --- | --- | --- | --- |
| `CP-4-V01` **Covenant tests and headroom** (`CR.1`) | C6 BulletChart with threshold and direction. Modules and Forecast run charts. | T4.9 settled threshold/current/headroom and comparison text · T4C.6–T4C.8 definitions/binding. | Figure producer. Measure, direction and unit must agree. Show unknown headroom as a gap. |
| `CP-4-V02` **Capacity, baskets and conditions** | R2 capacity/condition cards and R8 watches. Modules with R13 in Evidence. | T4.10, T4D.6, T4F.3 headroom trace and governing definitions. | Table/content only. Separate stated basket size from verified remaining capacity. |
| `CP-4-V03` **Entities, guarantees and structural subordination** | R5 directed EdgeMap with table. Modules. | T4D.2 governing entities · broader CP-4B handoff for obligors, guarantees, collateral and structural claims. | Broader handoff needed. Show the legal perimeter the handoff establishes. Broader graph requires broader inputs. |
| `CP-4-V04` **Intercreditor ranking and control** | R5 directed EdgeMap and R2 control facts. Modules. | Broader CP-4D executed ICA handoff: claim pools, payment/security ranks, enforcement, standstill and releases. | Broader handoff needed. Preserve the distinctions among ranking, votes, enforcement and turnover. |
| `CP-4-V05` **Tests, cures, amendments and notice deadlines** | R4 legal EventLane. Modules. | T4D.3 dates/amendments, executed terms and explicit test/notice/cure triggers. | New view. Use explicitly settled test, cure, and notice dates. |
| `CP-4-V06` **Creditor protections and red flags** | R6 status groups and R8 red flags. Modules and Evidence. | T4.11/T4.13, T4F.4 scoring basis and facility/document coverage. | Table/content only. Distinguish confirmed protections, provisional terms and gaps. |

## CP-4C

| Entry | React target and placement | What delivery must supply | Source status and fallback |
| --- | --- | --- | --- |
| `CP-4C-V01` **Recovery by class and scenario** (`DR.2`) | C1 grouped recovery columns. Modules and Forecast run charts. | T4E.5 class/scenario recovery and claim identity, linked T4E.2–T4E.4/T4E.9. | Figure producer. Compare class recoveries only within labelled cases and quantities. |
| `CP-4C-V02` **Value allocation: supplied scenario 1** (`DR.3`) | C10 WaterfallChart for supplied case 1. Modules and Forecast run charts. | T4E.3/T4E.4/T4E.9 valuation row 1, costs, available value and distributions. | Figure producer. Show the exact allocation and stated residual. |
| `CP-4C-V03` **Value allocation: supplied scenario 2** (`DR.4`) | C10 WaterfallChart for supplied case 2. Modules and Forecast run charts. | T4E.3/T4E.4/T4E.9 valuation row 2, costs, available value and distributions. | Figure producer. No substitute allocation when case 2 is absent. |
| `CP-4C-V04` **Value allocation: supplied scenario 3** (`DR.5`) | C10 WaterfallChart for supplied case 3. Modules and Forecast run charts. | T4E.3/T4E.4/T4E.9 valuation row 3, costs, available value and distributions. | Figure producer. No substitute allocation when case 3 is absent. |
| `CP-4C-V05` **Fulcrum, attachment and plan treatment** | R5 claim path and R2 attachment facts. Modules. | T4E.2/T4E.6–T4E.8 claim balances, attachment/detachment, fulcrum and plan treatment. | Table/content only. Keep claim ranking, attachment and plan treatment apart. |

## CP-5

| Entry | React target and placement | What delivery must supply | Source status and fallback |
| --- | --- | --- | --- |
| `CP-5-V01` **Material-claim support and gaps** | R6 support groups and R13 evidence matrix. Modules and Evidence Trace. | T5.1–T5.9 and T5B.1–T5B.8 evaluated set, citations, resolutions and support verdicts. | Table/content only. Keep unsupported and partly supported claims distinct. |
| `CP-5-V02` **Contradictions and lineage** | R5 directed EdgeMap with R12 trace. Modules and Evidence Trace. | Claim/source IDs, cross-module contradictions, exact source versions and derived-fact identities. | New view. Edges name actual support, contradiction or calculation links. |
| `CP-5-V03` **Findings and remediation** | R6 remediation groups and F4 if counted. Modules and Evidence Gaps. | Findings, severity, affected consumer, repair action, status and evidence pins. | Table/content only. Use actual severity and counts supplied by validation. |

## CP-6

| Entry | React target and placement | What delivery must supply | Source status and fallback |
| --- | --- | --- | --- |
| `CP-6-V01` **Committee challenge and resolution** | P6 debate board and R5 challenge sequence. Modules and selected Overview reading. | T6A.4/T6A.6/T6A.7, committee_challenge and final bias. | Table/content only. Keep bull, bear, chair and resolution roles. |
| `CP-6-V02` **Action bias, conditions and monitoring** | P1 decision, P4 change trigger and R8 watch. Overview and Modules. | T6-FINAL, unresolved risks, evidence weighting, monitoring actions and CP-2 thesis references. | Table/content only. Carry the stated action bias, confidence, and scope. |
| `CP-6-V03` **Portfolio limit headroom** (`PD.1`) | C13 LimitsChart or S3 gap. Portfolio Fit and Modules. | Selected portfolio inputs/evaluation results: current/proposed exposure, NAV denominator, applicable limits and instrument eligibility. | Design gap. Requires validated dated fund exposure, NAV, applicable limits and eligible instrument. PD.1 remains unbound. |
| `CP-6-V04` **Catalysts and monitoring commitments** | R4 decision/watch EventLane. Modules and selected Overview watch items. | Explicit decision dates, assigned review dates, catalyst conditions and sources. | New view. Dated commitments and undated conditions use different forms. |

## CP-8

| Entry | React target and placement | What delivery must supply | Source status and fallback |
| --- | --- | --- | --- |
| `CP-8-V01` **Report section changes** | R7 module-state items. Changes. | All five report sections table: section, prior → current, why/effect and evidence. | Table/content only. Use explicit matched-run states. First run uses S2. |
| `CP-8-V02` **Prior and current material changes** | F3 change cards, C11 pairs and R13 evidence. Changes and Evidence. | Material analytical changes table: item, prior deliverable, current deliverable, classification/effect and evidence. | Table/content only. Plot only comparable measures. Preserve the authored reason for a mismatch. |
| `CP-8-V03` **Regressions and recheck** | R6 recheck groups and R13 regression register. Changes and Evidence Gaps. | Unresolved regressions table, the CP-8 recheck table and the prior, current and repaired report identities. | Table/content only. Keep unresolved items and new items distinct. |

## CP-L10

| Entry | React target and placement | What delivery must supply | Source status and fallback |
| --- | --- | --- | --- |
| `CP-L10-V01` **Seven-topic financial change screen** | P1 and F2 paired summary tiles. Retained Modules and Overview. | TL10.1–TL10.5: EBITDA, FCF, cash, total/net debt, leverage and coverage for two quarters in one fiscal year. | Table/content only. Historical short snapshot only. Keep unlike bases visible as separate facts. |
| `CP-L10-V02` **Upgrade disposition and handoff** | R5 upgrade pathway and R2 disposition. Retained Modules. | Material/Watch judgments, ranked items, next owner and explicit credit transmission. | Table/content only. Routes must follow the handoff's stated owner. |

## CP-MODEL

| Entry | React target and placement | What delivery must supply | Source status and fallback |
| --- | --- | --- | --- |
| `CP-MODEL-V01` **Published model and calculation provenance** | R1 Forecast grid and R12 derivation. Forecast and Evidence Trace. | Accepted/restricted CP-1 facts, model destination, calculation JSON, publication/source hashes. | Table/content only. Keep exact, rounded and source values distinct. |
| `CP-MODEL-V02` **Shared chart collection and availability** | ChartFrame collection with N6 and trace. Forecast. | Eligible figures S.1–S.6 and other selected-owner outputs, state, limitation and exact data revision. | New view. List only available run figures and recorded gaps. Each trace keeps its module and table line. |

## CP-OS

| Entry | React target and placement | What delivery must supply | Source status and fallback |
| --- | --- | --- | --- |
| `CP-OS-V01` **End-to-end execution and delivery** | I5 steps with S1 and optional R17. Run activity and Evidence Record. | Actual module states, source/handoff/delivery verification, selected plan and recorded timestamps. | New view. Time spans need recorded endpoints. Keep delivery and publication separate. |
| `CP-OS-V02` **Budget and spend** | F4 cap progress with R13 ledger. Run activity and Evidence Record. | Approved cap, actual recorded provider costs, bounded retries and unknown/pending costs. | Table/content only. Show settled and reserved spend distinctly when both exist. |
| `CP-OS-V03` **Issuer, run, revision and file navigation** | N1/N2 navigation and N4 context with R14 files. Library, Report, Modules and Evidence. | Verified issuer/run identity, dates, artifact lineage, source/analysis/export file roles and revision relationships. | New view. Preserve issuer, case, revision and file roles. |

## DELIVERY

| Entry | React target and placement | What delivery must supply | Source status and fallback |
| --- | --- | --- | --- |
| `DELIVERY-V01` **Pathway composition and visual eligibility** | N2 destinations and R7 delivery items. Report Overview and Modules. | Selected handoffs, preset blocks, registered figure producers and explicit gaps. | Table/content only. Front page blocks follow the selected pathway. Use the current seven active pathways. |
| `DELIVERY-V02` **Cross-module issuer event calendar** | R4 event lanes with ChartTable. Overview watch and a routed Calendar when available. | EVT-01–EVT-09 event contributions from selected dated handoffs · see event contract. | New view. Deduplicate only by published event identity. Keep separate status lanes. |
| `DELIVERY-V03` **Export and source parity** | R13 manifest and R14 downloads. Evidence Record. | Exact chart points/table values, source pins, periods, units, basis, limitations and available export formats. | New view. Keep checkable hashes and consistent figure/table/source labels. |
