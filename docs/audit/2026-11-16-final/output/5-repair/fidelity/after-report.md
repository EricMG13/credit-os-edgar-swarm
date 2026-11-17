# Stage 5 combined fidelity check

The full connected and static AFTER record was captured on
`bb94ddceff3a1f02c7239ebca72de285df79c607` (`audit/final-repairs`).
Both captures passed. The unchanged comparator completed. Its diff exits 1
because it flags seven new differences and fourteen new omissions. The
readbacks below account for each flag and all 352 new not-found items.

The build used Node 24.22.1, npm 11.9.0 and the existing locked dependencies.
The collector used Chrome 157.0.8103.78 and the worktree's own Python
environment for `proof.serve`. Installed uv is 0.12.5. Distribution SHA-256
`eb9dc11c36a9f2ec565f68190325a15bdaca6933d47ec2e775be4d89909cad93` differs
from the before build. Both captures carry the same commit, branch, source
tree IDs, build digest and four fixture digests. All 14 canned handoff hashes
match the frozen comparison. Library, model and run fixtures reflect the
reviewed repairs. The Signal fixture hash matches before.

| Command under `timeout 300` | Exit | Result |
| --- | ---: | --- |
| `npm --prefix web run build` | 0 | Both distribution entry points built |
| `node capture.mjs <scratch>/connected --surface connected` | 0 | 63 s, 29 screens, 2,634 figures, 64 tables and 549 sourced drawers |
| `node capture.mjs <scratch>/static --surface static` | 0 | 188 s, 238 screens, 2,836 figures, 66 tables, 105 sourced drawers and 419 validated missing-source markers |
| `node compare-selftest.mjs` | 0 | All 28 planted changes detected |
| `node compare.mjs <scratch>/after --out <scratch>` | 0 | 267 screens, 7,761 compared items |
| `node compare.mjs --diff compare-before.json compare-after.json --out compare-diff.md` | 1 | 7 flagged differences, 14 newly unshown source items, 352 new items to review |

The capture commands used concurrency 3, the 1440 by 900 viewport and the
native Chrome path. The connected run was synthetic. It used a short
`/tmp/fid-*` root, uploaded the three proof documents and selected the
executed credit agreement. The paired Changes screen remains a labelled
comparison fixture. The static app was opened from disk with the checked-in
fixtures.

Independent assembly checked the exact connected IDs and the static fixture
inventory. Static has 235 default screens: 14 runs, three primary tabs per
run, 113 module pages, 65 Evidence tabs, seven issuer histories, library
home, the model run index and six model pages. Two Changes Table variants
and the Model statements Downside case bring it to 238. Every screen hash
matches the raw capture. Every source control ordinal has either a real
drawer or a validated unavailable marker. Both surfaces report zero
failed screens, source control errors and digit coverage gaps.

Application context outside attempts were zero on both surfaces. The local
proxy denied 163 browser requests during connected capture and 819 during
static capture. The blank controls independently report zero context
attempts and ten proxy denials each. Native browser traffic is recorded
separately from application attempts. Full browser capture completed before
readback. The 126 immutable files match the guard-return SHA-256 manifest
`050ddb0fb6e96c1941d888ced8420d1b18e18e18835f69643078bd58ad7a2b59`.

## Comparison disposition

| Surface | Matches | Derived | Not found | Flagged difference | Source omissions |
| --- | ---: | ---: | ---: | ---: | ---: |
| Connected | 1,640 | 1,786 | 102 | 7 | 385 |
| Static | 3,926 | 50 | 250 | 0 | 14 |
| Total | 5,566 | 1,836 | 352 | 7 | 399 |

The connected readback reconciles exact item identity, values and source
metadata with the earlier individual explanations. All 29 decoded screen
bodies agree with that capture after setting aside the expected Record
delivery timestamp and the new empty marker/error fields.

- Six Overview differences are correctly scoped event counts, three each
  for CP-0 and CP-DR. Each handoff contains Historical 1, Scheduled 2 and
  Scenario 1. The comparator tested both reports against all-module totals
  9, 18 and 9. The History difference is the verified 14-module count.
  The nearest-text heuristic selected CP-1A's unrelated refinancing value.
- Five connected omission flags concern exact content in drawers. The CP-2A
  Cost shock drawer holds `0.1 (10%)` and `0`. The four CP-2E drawer rows
  contain `Filing p.1`. The comparison matches page cells and selected
  basis fields and did not find these in that scope.
- The 102 connected not-found items are 84 contextual Forecast drawers,
  15 confidence drawers, two paired comparison fixture header counts, and
  the CP-2E selector's caption using exact 5% and 10% currency moves. The
  readback covers 1,676 raw input field occurrences, 80 model matrix rows
  and 210 confidence inputs. The model's JSON numbers `0.2` and `0.1`
  preserve numeric values of the handoff strings `0.20` and `0.10` in
  100 contextual occurrences. Their literal precision and representation
  differ and are recorded. The Record ledger has 24 distinct qualifications,
  each of the original ten model-line gaps once.
- Static has no numerical, textual or source difference reported by the
  comparator. All 238 saved-example notices are exact page text introduced
  by T25 under OQ-01. The other 12 not-found items are T39 call-row
  qualifications. The independently counted 1 of 13 (seven), 1 of 2 (four)
  and 4 of 13 (one) match the retained Record fixture. Each captured table,
  including the delivered Total row, matches the fixture after the
  approved removal of its Code column.
- The nine new static omissions are the fixture's `Headline figures`
  region label on newly captured Overview routes. Five populated screens
  apply that label via `aria-label`, as the earlier screens did. All 19
  metric label, value and qualification tuples are verified in their
  outlines, including zero, missing and withheld values. The four saved
  activity runs contain no metrics. The existing Overview guard omits the
  empty region. The comparison did not flag a missing delivered numeric
  value in any of these nine items.

Every new item has its original record and scope in
`exact-new-items.json`. The two readbacks preserve item-specific
dispositions and exact fixture or handoff evidence. The unmodified diff
and its exit code remain part of the evidence.

Evidence under `/workspace/scratch/final-fidelity-bb94/`: `after/` has the
assembled index and exact captured screen JSON, `connected/` and `static/`
retain the original indexes and offline logs, and `inventory.json`
records the route and control reconciliation. `compare-after.json`,
`compare-after.md`, `compare-diff.md`, `connected-readback.json` and
`static-readback.json` record the matching and individual explanations.

Not verified: issuer inputs outside this synthetic run and these static
fixtures, the model calculations that the comparator only names, CSS
colour, visual mark placement and layout fidelity, other browsers or widths
for this capture, hover-only content and unenumerated controls such as
static Home Layout List, physical print, Windows or the work PC, and
paid/live/provider/seat/real Submit/Teams behavior. The full frontend
gates and sweep acceptance are tracked separately.
