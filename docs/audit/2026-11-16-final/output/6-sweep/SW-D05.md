# SW-D05 · Report History row state

Each History row now projects the loaded snapshot to the module names and
run labels in its loader. The report reader continues to own the current
full snapshot. A prior row reads the same scoped endpoint and keeps just
the details it displays.

Isolated base `efe8cd60` (application `5e1d98b3`), code
`e025e1f996ed5dc0afa7d55b5b1f5ca0d615d899` on
`audit/sweep-history-state`. The application diff is confined to
`web/src/pages/connected/ReportLibrary.tsx`.

## Paired measurement

The existing two-run Acme fixture in `ReportLibrary.frame.test.tsx` supplied
both responses. An audit probe rendered the production ReportReader and
observed the real `useResource` hook's returned state. It retained the byte
count and keys, measured as UTF-8 bytes of `JSON.stringify(value)`, with the
same fixture, hook and command on both pins.

| Measure | Before | After |
| --- | ---: | ---: |
| Earlier row state, serialized bytes | 2,168 | 109 |
| Current row state, serialized bytes | 2,195 | 75 |
| Earlier API response, serialized bytes | 2,168 | 2,168 |
| Requests across both rows and their parent | 2 | 2 |

The earlier row drops 2,059 bytes from the serialized state in this fixture.
Both rows retain `modules` and `labels`. The two request URLs, cache mode and
abortable signals match. The entire History section DOM has the same
SHA-256 on both pins
(`401826a2b7edb2525f428d9fce43a877fe198838c018cf332ccb490a2849d313`).
See [before](evidence/sw-d05/before.json) and [after](evidence/sw-d05/after.json).

The larger scoped responses identified in discovery measure a different
fixture. The comparison here measures the object's serialized size on the
row's state boundary. It establishes a reduction there, with the same
response and reader output. Total heap, wall time and service response
changes are outside this measurement.

## Verification

The unchanged ReportLibrary frame file and six temporary probe cases passed
on both pins, 15 tests each. The probe covers the visibly pending earlier
row, both settled rows, null, missing run, HTTP failure, rejected fetch and
aborting the in-progress earlier request upon leaving History. Probe
setup initially invoked Vitest from the repository root and failed before
collection because the frontend aliases were unavailable. Both recorded
measurements use the web directory and its existing Vitest config.

For a rerun on either pin, copy
[evidence probe](evidence/sw-d05/paired-history-probe.tsx.txt) to
`web/src/pages/connected/SweepHistoryState.audit.test.tsx` in an isolated
worktree. From `web/`, run the following with a different scratch result
path per pin, then remove the temporary copy.

```sh
timeout 300 env SW_D05_RESULT=/tmp/sw-d05-result.json \
  node node_modules/vitest/vitest.mjs run --maxWorkers=1 \
  src/pages/connected/SweepHistoryState.audit.test.tsx \
  src/pages/connected/ReportLibrary.frame.test.tsx
```

The hook and request handling stay at their existing boundaries. The
loader reuses `runDetails` on each resolved snapshot. The other option was
to memoize that function on render, which would keep the full prior
snapshot in state. Projecting in the loader removes the larger object
from row state and needs no added cache or helper.

The full web lint, formatting and type checks each exited 0. The
uv 0.12.5 quality gate against `efe8cd60` exited 0 with no changed
Python lines or import findings. Long commands used `timeout 300`.

Not verified: combined branch gates, native browser and measured heap or
render latency. The checks here use a paired synthetic fixture with
in-process fetch responses.
