# Layer 1 modules in the Lite, Full and Deep credit assessments

by: user
date: 2026-11-25

This is a decision record. It does not lift the paid-run pause and carries no `lifts:` or `configs:`
line; paid execution still needs its own explicit action. No run has been made with this change, and
the build made no provider call.

Owner's words, 2026-11-25: "all credit assessment pathways (lite, full and deep) should include all
layer 1 modules".

## What layer 1 is

The modules whose selected method is marked layer L1 in `docs/reuse/selected-methods/skills/`:

| Module | Marked in |
| --- | --- |
| CP-1, financial foundation | `cp-1-canonical-data-foundation/references/CP-1_SYSTEM_REFERENCE.md`, line 10 (`layer`, `L1`) |
| CP-1A, business and transaction fact pack | `cp-1a-business-transaction-fact-pack/SKILL.md`, line 284 (`Layer L1`) |
| CP-1B, earnings changes | `cp-1b-earnings-delta/SKILL.md`, line 194 (`Layer L1`) |
| CP-1C, peer benchmark | `cp-1c-peer-benchmark/SKILL.md`, line 177 (`Layer L1`) |
| CP-1D, earnings quality | `cp-1d-earnings-quality/SKILL.md`, line 147 (`Layer L1`) |

Layer 1 as ruled on here is CP-1, CP-1A, CP-1B, CP-1C and CP-1D. CP-1 and CP-1A were in all three
presets already.

- CP-L10 is marked `Layer L1` too (`cp-l10-financial-change-screen/SKILL.md`, line 230). It is the
  deactivated short credit snapshot's module (`2026-11-13-full-and-lite-credit-assessments.md`) and
  is excluded: it stays wired and off.
- The cash flow model (CP-MODEL) is not a module. It makes no model call, and is never offered or
  counted as one.

## Amends

- `2026-11-13-full-and-lite-credit-assessments.md`: Lite's preset (CP-0, CP-1, CP-1A, CP-2, CP-2A)
  and its nine report blocks, and the statement that Full's modules and report blocks are unchanged.
- `2026-11-15-pathway-tiers-and-caps.md`: the owner's "Lite/Full as now" for the module lists; the
  "Decisions" bullet that neither Lite's nor Full's module list or section list changed; Deep's
  description as "Full plus CP-1B, CP-1C, CP-1D, CP-2H, CP-3D and CP-4C"; and the Lite and Full rows
  of "Estimated spend against the caps", replaced by the table below.
- Not amended: the three pathway ids and titles; Deep's modules, order and sections; the caps; the
  five purpose pathways; the deactivation of the short credit snapshot; the standing Submit ruling
  (`2026-11-11-run-start-submit.md`). Neither older record is edited.

## Decisions

- Lite, `lite_credit_assessment`: CP-0, CP-1, CP-1A, CP-1B, CP-1C, CP-1D, CP-2, CP-2A. Eight entries,
  eight model calls without CP-8 (five before). Still no CP-MODEL and no forecast.
- Full, `credit_snapshot`: CP-0, CP-1, CP-MODEL, CP-1A, CP-1B, CP-DR, CP-1C, CP-1D, CP-2, CP-2A,
  CP-2D, CP-2E, CP-2G, CP-4, CP-3C, CP-3, CP-5, CP-6. Eighteen entries with CP-MODEL, seventeen model
  calls without CP-8 (fourteen before).
- Deep, `deep_credit_assessment`: unchanged, 21 entries with CP-MODEL and 20 model calls without
  CP-8. It already ran all five. What Deep adds beyond Full is now CP-2H, CP-3D and CP-4C.
- Order is the registry's plan (`deploy_vii.registry.plan`), not an appended list. Lite: CP-0, CP-1,
  CP-1A, CP-1B, CP-1C, CP-1D, CP-2, CP-2A. Full: CP-0, CP-1, CP-1A, CP-1B, CP-DR, CP-1C, CP-1D, CP-2,
  CP-4, CP-2A, CP-2E, CP-2D, CP-2G, CP-3C, CP-3, CP-5, CP-6. CP-8 is last in each when an earlier run
  of the same issuer and pathway is listed. CP-1D follows CP-1B, CP-1C follows CP-DR where the run
  has it, and CP-2 follows all three, so CP-2 is sent their handoffs. In Full, CP-3 is sent CP-1C's
  handoff, as in Deep.
- Lite does not gain CP-DR (coordinator's ruling for this build, not the owner's words; the owner
  can reverse it). The owner asked for the layer 1 modules, and CP-DR is not one. CP-1C in Lite
  therefore runs on the analyst's comparables. With none supplied it still runs, and states the
  limitation in its handoff; nothing is skipped. The run start summary shows the missing peer set
  before Submit, by the existing rule (`cp1c-no-peer-source` in `deploy_workflow.run_expectations`).
- The caps stay Lite USD 15, Full USD 25 and Deep USD 40 (coordinator's ruling: this change raises no
  cap). The estimate below is the reason they can stay on GPT Sol. `PATHWAY_CAP_USD` and
  `RULED_CAPS_USD` are untouched.
- Report sections: Lite and Full each gain three lead sections, as Deep has them: headline results
  (CP-1B), earnings quality (CP-1D) and peer positioning (CP-1C), each owned and placed as in Deep,
  after credit metrics. Lite's nine sections become twelve and Full's twelve become fifteen. This
  is a presentation choice made in this build, not by the owner.
- CP-8 compares a run only with an earlier run of the same pathway, as before. The first Lite or
  Full run of an issuer after this change, compared with an earlier Lite or Full run of it, shows
  CP-1B, CP-1C and CP-1D as new, with the cause Method change. That is true and is not an error. An
  earlier preset run stays a comparison base.

## What each added module can be missing

Each added module gets its required producers (CP-0 and CP-1) within the run; none needs a
prior-period handoff. What can be missing is the sources, and then the module runs, pays its first
prompt and says so under its own method gate. Nothing is skipped.

- CP-1B reads CP-1's periods; it compares periods found in the filings (year on year, sequential),
  not an earlier run. With one period in the files it reports the comparisons as not comparable.
- CP-1D needs the management EBITDA bridge; without it every bridge cell is not applicable and the
  module comes back restricted.
- CP-1C needs peers. Full and Deep have CP-DR's public peers or the analyst's comparables. Lite has
  no CP-DR: only the analyst's comparables, and without them the handoff states that no peer set was
  supplied.

## Estimated spend against the caps

An estimate, not a measurement. No Lite run has ever been made, and no Full run with these modules.
It uses the basis of `2026-11-15-pathway-tiers-and-caps.md`, on GPT Sol, USD:

- Measured, per module, in the two retained 13 November Full runs on gpt-6.1-sol
  (`runs/tdg-copilot-sol-medium-vs-high.md`), medium / high: CP-0 0.29 / 0.43, CP-1 0.42 / 0.63,
  CP-1A 0.55 / 0.66, CP-DR 0.28 / 0.44, CP-4 0.37 / 0.37, CP-2 0.44 / 0.61, CP-2A 0.62 / 0.80,
  CP-2E 0.66 / 0.80, CP-2G 0.41 / 0.77, CP-3 0.80 / 0.97, CP-5 2.26 / 2.80, CP-6 0.73 / 0.99,
  CP-8 0.79 / 1.08.
- The three added modules, from the 10 November all-module run at medium, on older and shorter
  method texts (`runs/tdg-mixed-effort-comparison.md`, column "Medium A"): CP-1B 0.52, CP-1C 0.35,
  CP-1D 0.53, together 1.40. At high: CP-1B and CP-1C at 1.32 times (0.69 and 0.46); CP-1D at 0.94,
  the one high-effort CP-1D draft measured (12 November, not accepted). Together 2.09.
- CP-2D and CP-3C, in Full since 2026-11-15 and not yet run on current texts: 0.51 each at medium,
  the mean measured analyst module; 0.67 at high.
- CP-5 scaled by the analyst handoffs it reads, ten in the measured runs: Full had 12 (2.26 x 1.2 =
  2.71) and now has 15 (2.26 x 1.5 = 3.39; high 2.80 x 1.5 = 4.20). Lite has no CP-5.
- CP-8 scaled by the handoffs it reads, twelve in the measured runs, at medium: Lite 0.79 x 8 / 12 =
  0.53 (was 0.33); Full 0.79 x 17 / 12 = 1.12 (was 0.92).
- Balanced is high effort on the effort map's modules in the run (`BALANCED_HIGH_MODULES`): CP-1A,
  CP-1D, CP-2 and CP-2A in Lite; those and CP-3, CP-3C, CP-4 and CP-6 in Full.
- One GPT Sol call holds USD 5.73 whatever its size, so a run in order needs its spend plus 5.73.

The same arithmetic gives the 2026-11-15 ruling's Lite and Full rows exactly and its Deep row to
within 0.1.

Lite, eight calls:

- Medium: the five before, 0.29 + 0.42 + 0.55 + 0.44 + 0.62 = 2.32, plus 1.40 = 3.72.
- Balanced: 3.72 plus the uplifts on CP-1A 0.11, CP-2 0.17, CP-2A 0.18 and CP-1D 0.41 = 4.59.
- High: 0.43 + 0.63 + 0.66 + 0.61 + 0.80 = 3.13, plus 2.09 = 5.22.
- Balanced with CP-8, plus one hold: 4.59 + 0.53 + 5.73 = 10.85.

Full, seventeen calls:

- Medium: the eleven measured modules other than CP-5 and CP-8, 5.57; CP-2D and CP-3C 1.02; the
  three added 1.40; CP-5 3.39. Total 11.38.
- Balanced: 11.38 plus the uplifts on CP-1A 0.11, CP-2 0.17, CP-2A 0.18, CP-3 0.17, CP-3C 0.16,
  CP-4 0.00, CP-6 0.26 and CP-1D 0.41 = 12.84.
- High: 7.49 + 1.35 + 2.09 + 4.20 = 15.12.
- Balanced with CP-8, plus one hold: 12.84 + 1.12 + 5.73 = 19.69.

| Pathway | Cap | Medium | Balanced | High | Balanced with CP-8, plus one hold |
| --- | ---: | ---: | ---: | ---: | ---: |
| Lite, before | 15 | 2.3 | 2.8 | 3.1 | 8.8 |
| Lite, now | 15 | 3.7 | 4.6 | 5.2 | 10.8 |
| Full, before | 25 | 9.3 | 10.4 | 12.2 | 17.0 |
| Full, now | 25 | 11.4 | 12.8 | 15.1 | 19.7 |
| Deep, unchanged | 40 | 13.6 | 15.2 | 17.9 | 22.2 |

On GPT Sol, at the page's default and with CP-8 and one hold counted:

- Lite is estimated at USD 10.8 against its USD 15 cap: under by about USD 4.2.
- Full is estimated at USD 19.7 against its USD 25 cap: under by about USD 5.3.
- At High with CP-8 at high and one hold, Lite is about 11.7 and Full about 22.4: under their caps.
- The old ruling's "right to within about a third" still applies. With the spend a third higher
  and the hold counted, Lite is about 12.6 and Full about 24.4. Full then has about USD 0.6 of room,
  so one failed attempt at CP-5 on top of that could stop the run at the cap before CP-6 or CP-8.

Not in the estimate:

- What CP-2, CP-2A and CP-3 pay to read the added handoffs. Only CP-5 and CP-8 are scaled, as the
  old ruling did.
- The three modules on their current method texts. Their figures are from 10 November, before the
  reader-voice change of 11 November made the instruction files 15% to 112% larger.
- The size of Full's largest first requests. CP-5 is now sent fifteen handoffs and CP-8 seventeen;
  no run has measured them.
- Repeated attempts beyond those in the measured runs.

On Claude Opus the one measured full run cost 2.26 times the same modules on GPT Sol
(`2026-11-15-pathway-tiers-and-caps.md`). That ruling already put an Opus Full run with CP-8 at
about USD 23 at medium and 25 at Balanced, at or past its cap once an Opus hold of about USD 3 is
counted. With the three added modules the same ratio gives, with CP-8: Full about USD 28 at medium,
32 at Balanced and 38 at High, all past USD 25 before any hold; a first Full run without CP-8 is
about USD 26 at medium. An Opus Full run is therefore expected to stop at its cap before it
finishes. Lite on Opus is about USD 9.6 at medium, 11.6 at Balanced and 13.4 at High with CP-8;
with a hold of about USD 3 that is 12.6, 14.6 and 16.4, so Balanced is at the edge of USD 15 and
High is past it. Deep on Opus is as the old ruling said. The owner's answer of 2026-11-15 stands:
"Leave caps; measure first (Recommended)". The caps are the owner's and are not changed here.

## Instruction size

Instruction size: <controller fills in>

## Left open

- A paid run: none made. No model has produced a Lite run of any kind, or a Full run with CP-1B,
  CP-1C and CP-1D. The owner starts it.
- Claude Opus against the Full cap, and against the Lite cap at High: for the owner, after a
  measured run on GPT Sol.
- CP-DR in Lite, so that CP-1C can draw public peers there: not built; one preset entry and a
  larger estimate.
- The three lead sections in Lite and Full: no real run with them has been read.
