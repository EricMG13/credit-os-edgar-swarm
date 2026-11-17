# Stage 6 sweep contract

The owner asked to start stage 6 on the current tip of `audit/final-repairs`.
The discovery base is `5e1d98b37305a9da59fb6944740ff17b721051af`. All three
repair groups are merged there. Combined stage 5 acceptance is still open.
The link style, currency-display test, issued-record fixture and full fidelity
capture are tracked as stage 5 work. Sweep results will be verified against the
updated repair tip before the sweep is accepted. Measure each sweep change
against a base with the same repair changes so that the sweep receives credit
only for its own effect.

Review `src/`, `react_frontend/`, `apps/issuer-library/`, `proof/`, `tools/` and
`web/` in service-to-client order. Check all 17 sweep rows from the repair
register, the stage 0 surface and API maps, and outstanding items from the
November 13 optimisation review. Record at most 40 candidate items and allow
at most two implementation attempts per item. Register each candidate with
its source, measured evidence, class and disposition.

Preserve every existing test and golden expectation, public route and
response contract, calculation output, handoff, module text, prompt and
analytical method. Preserve user-visible behavior, controls and navigation,
including the legacy pages and the static design reference. Signal is
excluded from changes and dead-code classification. R1–R17 and L1–L18 remain
in force. Use local synthetic inputs and keep runtime checks offline.

Verify callers before deleting anything, including entry points, routes,
tests, string references, fixture and package consumers, and the release
packager. A defect requires an observed failing test before repair. A
deduplication requires a lower duplication count with the same expected
outputs. A performance change requires comparable before and after
measurements. Revert an item if both attempts fail. A fresh reviewer checks
each accepted change against the preserved behavior and its evidence.

Acceptance requires the unchanged frontend gates and connected proof,
the fast Python checks, and
`uv run python tools/quality_gate.py --base audit/final-repairs` including
the import contracts. Record actual exit codes. The 300-second command
limit applies to long checks. For a suite that exceeds it, bounded shards
must cover the original selection and enforce the original global coverage
threshold on the merged result. Record attempts that timed out. Re-measure
the stage 0 metrics and record the tool versions and selection where a
historical comparison has different inputs. Record deletions, duplication,
unused exports, bundle sizes, suppressions, and test and synthetic render
timings.

The sweep pull request targets `audit/final-repairs`. The lead reviews and
accepts it separately under R9. Stage 7 follows that acceptance.
