// EDGAR swarm, analysis only: one analyst per listed issuer takes it through CP-OS host mode to
// CP-2. Nothing here writes the ledger, verifies or publishes; the controlling session does that
// once every shard's analysis is in (docs/swarm.md, "Sub-session shards").
//
// Launch: Workflow({scriptPath: 'tools/swarm/analyse.workflow.js', args: {...}})
//   args.root     root holding swarm/plan.json (from tools/swarm/prepare.py) and inputs/
//   args.repo     repository checkout to run uv in
//   args.issuers  issuer ids to analyse, all present in ROOT/swarm/plan.json
//   args.effort   analyst effort: low, medium, high, xhigh or max; default high

export const meta = {
  name: 'edgar-swarm-analyse',
  description: 'Analysis only: one Sonnet analyst per listed issuer through CP-OS host mode to CP-2',
  phases: [{ title: 'Analyse', detail: 'one Sonnet analyst per issuer' }],
}

const { root, repo, issuers } = args
if (!root || !repo || !Array.isArray(issuers) || issuers.length === 0) {
  throw new Error('args.root, args.repo and a non-empty args.issuers list are required')
}
const effort = args.effort ?? 'high'
if (!['low', 'medium', 'high', 'xhigh', 'max'].includes(effort)) {
  throw new Error(`args.effort must be low, medium, high, xhigh or max, not ${effort}`)
}

const REPORT_SCHEMA = {
  type: 'object',
  properties: {
    issuer_id: { type: 'string' },
    exit_code: { type: 'integer' },
    attempts_by_module: {
      type: 'object',
      properties: {
        'CP-0': { type: 'integer' },
        'CP-1': { type: 'integer' },
        'CP-1A': { type: 'integer' },
        'CP-2': { type: 'integer' },
      },
      required: ['CP-0', 'CP-1', 'CP-1A', 'CP-2'],
    },
    notes: { type: 'string' },
  },
  required: ['issuer_id', 'exit_code', 'attempts_by_module', 'notes'],
}

const brief = (id) => `You answer CP-OS modules for one issuer (issuer id ${id}).
No provider is called; you are the model. Follow this order exactly.

1. Read ${repo}/docs/templates/host-analyst-checklist.md and follow it for every answer.
2. From ${repo} run: env -u UV_NATIVE_TLS UV_SYSTEM_CERTS=1 uv run python tools/swarm/run_issuer.py ${id} --root ${root}
   It prints the launcher command; run that command, as printed, from ${repo}. Exit 3 means a module needs your answer: read the
   files named on its Source: and Handoff: lines, write your draft under ${root}/swarm/drafts/${id}/,
   work the checklist's "Before you submit" on the draft, copy it to the Answer: path printed,
   and run the same command again. Stop on exit 0 (finished), 1 (stopped) or 2 (refused).
3. Count the launcher attempts for each module (the first submission is 1). You may resubmit a
   module at most 2 times (3 attempts in all); if a module is rejected a third time, stop.
4. Rules: no web, no network; no edits to the repository; write drafts only in
   ${root}/swarm/drafts/${id}/; do not read any other issuer's folder or draft; do not touch
   ${root}/swarm/plan.json. An accepted answer cannot be replaced.
5. Reply with: issuer_id ${id}; exit_code, the last launcher exit code; attempts_by_module for
   CP-0, CP-1, CP-1A and CP-2 (0 for a module never submitted); notes, one sentence on any defect
   you saw but could not fix.`

phase('Analyse')
const reports = await parallel(
  issuers.map((id) => () =>
    agent(brief(id), {
      label: id,
      phase: 'Analyse',
      schema: REPORT_SCHEMA,
      model: 'sonnet',
      effort,
      agentType: 'general-purpose',
    }),
  ),
)
const out = issuers.map((id, i) => reports[i] ?? { issuer_id: id, exit_code: -1, notes: 'analyst returned nothing' })
log(`analysed ${out.filter((r) => r.exit_code === 0).length} of ${issuers.length} to exit 0`)
;({ reports: out })
