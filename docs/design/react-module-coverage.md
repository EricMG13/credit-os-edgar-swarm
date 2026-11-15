# Design and data coverage for the unified React frontend

The audit uses RBOT-HTML `9d040f8`. The [screen and component map](../visualisations/2026-11-13-screen-component-map.md)
describes placement and reader priorities. The [visualisation catalogue](../visualisations/catalogue.csv)
holds the intended visuals, their data requirements, and the rules for drawing them. The
[React component map](component-map.md) and [design system](design-system.md) specify the
frontend treatment. The synthetic browser fixture proves a real export path under the
original backend lockfile.

## Coverage decision

There is enough design information to lay out every active module. Each run supplies its
own evidence for which visuals can be drawn. The catalogue has 91 entries: 14 marked
as figure producers, 46 table/content items, 22 new views, six design gaps, two requiring
broader handoffs, and one unavailable frame. A catalogue entry describes an intent.
The actual module handoff, validated chart descriptor, or published model grid supplies
the values.

A missing chart keeps its stated reason and table where the source supplies them. A
charted value keeps its original number, unit, period, case and source line. A gap
remains a gap. No preview or fixture replaces a missing value in a delivered report.

| Module | Available design and data contract |
| --- | --- |
| CP-0 · Source readiness | Coverage and blocking gaps are matrices or status lists. Chronology uses explicitly dated source records. |
| CP-1 · Financial foundation | S.1–S.5 cover leverage, cover, liquidity, maturities and financial history. S.6 debt stack and EU.3 bridge lack bound producers for those figure IDs. Published chart tables still support their own declared shapes. |
| CP-1A · Business and governance | Issuer chronology, ownership edges, business mix and credit implications use the recorded events, labelled relationships, and amounts where supplied. |
| CP-1B · Earnings update | Earnings and KPI tables have design coverage. EU.1 grouped results and EU.2 KPI comparison need figure producers. |
| CP-1C · Market and valuation | RV.3a/b peer ranges distinguish percent and multiple measures. Peer values remain a table when a comparable range is absent. |
| CP-1D · Financial quality | Adjustment and recurrence data support the issue matrix, and a bridge where a source supplies reconciled adjustments. |
| CP-DR · Research | Questions, findings, consumers and evidence use a register. Catalysts use explicit dates where supplied. |
| CP-2 · Fundamental credit | Judgement, contrary evidence, risk relationships and watch conditions use passages, evidence links and a watch register. |
| CP-2A · Downside | Base, downside and stress are separate cases on the same period. Discrete cases do not define a time series. |
| CP-2D · Liquidity | CR.2 uses the published bridge. Runway and maturity lanes need their own observed values or dates. |
| CP-2E · Rates, FX and hedging | Published shocks are comparisons. An expiry timeline uses recorded dates. |
| CP-2G · Forward credit model | Annual scenario paths and statements come from the published model grid. The grid does not establish an intra-year minimum. |
| CP-2H · Ratings | Rating ladder and actions have a table design. DR.6 is explicitly unavailable in the catalogue. |
| CP-3 · Instruments | The security comparison and options and maturity events use published instrument rows and dates. |
| CP-3C · Financing | CR.3 has grouped refinancing columns. Alternatives and events use named source data. |
| CP-3D · Relative value | A numeric scatter design exists. RV.1 has no bound producer. Quoted metrics have table coverage. |
| CP-4 · Legal and covenants | CR.1 is a limits/bullet chart. Entity, capacity and timing views depend on published legal facts. |
| CP-4C · Recovery | DR.2 compares published scenario recoveries. DR.3–5 use the recorded waterfall inputs. |
| CP-5 · Validation | Claim-support map and evidence matrix use the source and calculation lineage. |
| CP-6 · Committee decision | Challenges and decisions have matrix coverage. PD.1 limits needs a bound producer for the catalogue figure. |
| CP-8 · Changes | A comparison uses stored prior/current runs and the published changes record. A first run has no prior comparison. |
| CP-L10 · Short snapshot | Seven-topic summaries and paired deltas have a design. The preset is deactivated upstream. |
| CP-MODEL · Published model | The model grid is the source for the report's forecasts, statements and calculations. |
| CP-OS and delivery | Activity and publication use scheduler states and completed delivery artifacts. They are workflow stages. |

The legacy module aliases are mapped by the backend. They do not require duplicate
designs or independent report routes.

## Acceptance fixture

The synthetic Credit Snapshot uses RBOT-HTML's hand-written CP-OS response fixture
with the actual upload, approval, scheduler and publication path. The CP-1 debt-maturity
table carries FY2026 `500`, a stated FY2027 gap and FY2028 `1,250`, in `US$m`. The
forecast fixture supplies the inputs, and RBOT-HTML calculates the released grid.
The published base-case FY2025E revenue is `1050`. These values exercise the frontend
contract and are synthetic amounts.

A synthetic run demonstrates the charts it actually publishes. It does not establish
data coverage for every pathway-specific chart.
