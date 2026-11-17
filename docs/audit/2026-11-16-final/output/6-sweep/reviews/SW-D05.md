# Independent review of SW-D05

**PASS**. High 0, Medium 0, Low 0.

Reviewed `e025e1f996ed5dc0afa7d55b5b1f5ca0d615d899` against
`efe8cd60` in `/workspace/audit-sweep-history-state`. The only source
delta is inside `HistoryRow` in `ReportLibrary.tsx`. The helper that
selects a run and derives its module names and labels is unchanged.
The loader now projects that result before passing it to `useResource`.

The current row still uses its own snapshot. The other row still calls
`getSnapshot(signal, record.folder)`, with the same encoded path,
`cache: "no-store"` and signal. The callback's dependencies are still
`held` and `record.folder`. The report still keys rows by folder and the
reader by report and retry. An ordinary render with the same snapshot
therefore uses the same details; a different `held` or folder starts
the same resource effect. The derived strings and arrays have no
reference to snapshot objects. The caller retains the full current
snapshot for the rest of the report.

Read the abort, pending, rejected and fulfilled paths in `useResource`.
The initial value remains undefined. A null response or no matching
run still gives the unavailable state. Request failures still flow to
the existing error handler. Cleanup still aborts and suppresses a later
state update. The loader's extra continuation after fetch does not
change the visible pending or result contract. The module ordering,
labels, links and status markup are unchanged.

Read the original paired-history probe and both exit logs. It calls the
real `useResource` and records the JSON serialization of its actual
settled row values, then hashes the rendered History section and checks
requests. Both pins passed all six probe cases plus the nine existing
frame tests. The six include a deferred earlier request, a paired report
with an earlier format and methods, a null response, an unmatched run,
a service error, a rejected request and an abort on leaving the tab
(the deferred request and paired report are one case).

| Serialized item | Before | After |
| --- | ---: | ---: |
| Current row resource value | 2,195 bytes | 75 bytes |
| Earlier row resource value | 2,168 bytes | 109 bytes |
| Earlier fixture reply | 2,168 bytes | 2,168 bytes |

The settled History DOM hash matches at
`401826a2b7edb2525f428d9fce43a877fe198838c018cf332ccb490a2849d313`.
The arrays of requests match exactly. The measured reduction is in
serialized resource state for this fixture. The current row's original
object also lives in the report, so this result does not imply that the
current snapshot can be collected. There is no heap, network or timing
saving claim.

Independent rerun of the unchanged `ReportLibrary.frame.test.tsx`
with installed Vitest 4.1.12, one worker and `timeout 300` passed all
9 tests in 5.14 seconds. Log at
`/workspace/scratch/stage6-sw-d05-review-tests.log`. Diff whitespace
check passed. No tests, gates, protected paths or server contract were
edited.

Not verified: combined sweep proof and acceptance gates, heap or page
render timings, and behavior on malformed snapshot shapes outside the
service contract. The independent reviewer read the paired probe and
its retained outputs and reran the existing frame test separately.
