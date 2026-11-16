# Stage 6: Refactoring and optimisation sweep

Branch `audit/final-sweep`, cut from the tip of `audit/final-repairs`. It runs after the repairs
so it does not delete code a repair still needs, and so it clears what the repairs orphaned.
Back to front: `src/`, `react_frontend/`, `apps/issuer-library/`, `proof/`, `tools/` and `web/`.
Signal is excluded from change and must never be classified as dead.

## Inputs

| Layer | File | Section | Why |
| :--- | :--- | :--- | :--- |
| L1 | `docs/audit/2026-11-16-final/README.md` | Scope, Rulings, Rules | Scope and rules |
| L3 | `AGENTS.md`, `docs/QUALITY-GATE.md` | all | Gates and protected behaviour |
| L3 | `docs/sweeps/2026-11-13-optimisation-review/REPORT.md`, `findings.json` | all | The last sweep: do not redo it, do check what it left open |
| L3 | `.importlinter`, `web/package.json` (`unused`, `duplication`), `tests/known-failures.txt` | all | Existing structural gates and known failures |
| L4 | `output/0-baseline/baseline.md`, `surface-map.md`, `api-map.md` | all | The before numbers and what actually ships |
| L4 | `output/4-register/register.jsonl` | rows with disposition `sweep` | Costs the audit already measured |

## Process

If the sweep skill is available, run it as `both`, scope `whole-repo`, through `prepare`,
`discover` and `launch`, with this brief as its scope. If not, follow the same steps directly:

1. **Prepare.** Write `output/6-sweep/CONTRACT.md`: the exact base commit, the scope above, the
   protected behaviour (every existing test and golden, the calculation outputs, the handoff
   text, the public service routes, Signal), the gates that must exit 0, and finite caps: at most
   40 items, two attempts per item.
2. **Discover, measured only.**
   - Dead code: knip for `web/`; for Python, names with no importer or caller found by search
     and by the import graph (`.importlinter` layers, `ruff` F-rules). Confirm each candidate has
     no dynamic use: a string reference, an entry point in `pyproject.toml`, a route, a script in
     `package.json`, a test fixture, a build script, or the release packager.
   - Duplication: jscpd for `web/` (`npm --prefix web run duplication`) and for Python.
   - Frontend audit: the fallow skill or CLI if available; otherwise knip, jscpd and the bundle
     size from `npm --prefix web run build`.
   - Unreachable surface: anything the surface map shows no user can reach, including the kit
     page and `Kit7*.tsx` if stage 0 found them unreachable in the release. Removing a reachable
     screen is an owner decision (ruling R5), not a sweep item.
   - Back to front: service routes never called and client calls never served (API map); fields
     the service sends that no component reads; fields a component reads that are never sent.
   - Performance: only where measured. Bundle size, the slowest page render in the synthetic
     report, the slowest fast test. Record the number and how it was taken.
   Register every candidate in `output/6-sweep/register.md` with its evidence and a class:
   `confirmed defect`, `dead`, `duplicate`, `structural cost`, `performance cost`, `not acted on`.
3. **Launch.** One fresh implementer per item or per small same-shape batch.
   - A confirmed defect gets a failing test first, as in stage 5.
   - A deletion is a deletion: no compatibility shim, no commented-out code. Run the affected
     tests and the surface it belonged to after each.
   - A deduplication keeps behaviour identical and is accepted only if the duplication number
     falls and no test changes its expected values.
   - A performance change is accepted only with a before and after number taken the same way.
   - An item that fails twice is reverted and marked `not acted on`.
4. **Self-review and gates.** As stage 5 steps 8 and 10, plus the fast Python tests and
   `uv run python tools/quality_gate.py --base audit/final-repairs`.
5. **After numbers.** Re-run every stage 0 measurement and put before and after side by side.
6. **Pull request** from `audit/final-sweep` into `audit/final-repairs`, on its own, never mixed
   with a repair. Do not merge; the lead does (ruling R9).

## Outputs

| File | Contents |
| :--- | :--- |
| `output/6-sweep/CONTRACT.md` | The contract |
| `output/6-sweep/register.md` | Every candidate, its evidence, class and outcome |
| `output/6-sweep/measurements.md` | Before and after: unused exports, duplication, bundle size, suppression count, test time, lines removed |
| `output/6-sweep/report.md` | Changes, exact base and final commits, gates' exit codes, the pull request's address, ending with `Not verified:` |
