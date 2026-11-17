// EDGAR swarm: batches of Sonnet analysts take planned issuers through CP-OS host mode to CP-2.
//
// Launch: Workflow({scriptPath: 'tools/swarm/swarm.workflow.js', args: {...}})
//   args.root          shared root holding swarm/plan.json (written by tools/swarm/prepare.py)
//   args.repo          repository checkout to run uv in
//   args.concurrency   issuers claimed (and analysts started) per batch; default 10
//   args.limit         stop after this many issuers are claimed (pilot: 5); default no limit
//   args.secondPass    true: claim `failed` issuers instead of `pending` ones
//   args.stale_seconds running claims older than this return to pending; default 3600
//
// The script has no shell: every ledger, verify and update_library command runs inside a small
// "runner" agent. The controller (this script) is the only ledger writer; analysts never are.

export const meta = {
  name: 'edgar-swarm',
  description:
    'Run planned issuers through cpos_launch host mode to CP-2 in batches of Sonnet analysts',
  phases: [
    { title: 'Claim', detail: 'ledger next' },
    { title: 'Analyse', detail: 'one Sonnet analyst per issuer' },
    { title: 'Verify and record', detail: 'relaunch check, ledger done or fail' },
    { title: 'Library', detail: 'update_library once per batch' },
  ],
}

const { root, repo } = args
if (!root || !repo) throw new Error('args.root and args.repo are required')
const concurrency = Number(args.concurrency ?? 10)
const limit = args.limit === undefined || args.limit === null ? Infinity : Number(args.limit)
const staleSeconds = Number(args.stale_seconds ?? 3600)
const secondPass = args.secondPass === true

const q = (s) => `'${String(s).replace(/'/g, `'\\''`)}'`
const tool = (script, rest) => `cd ${q(repo)} && uv run python tools/swarm/${script} ${rest} 2>&1`
const ledger = (rest) => tool('ledger.py', `--root ${q(root)} ${rest}`)

const RUN_SCHEMA = {
  type: 'object',
  properties: { exit_code: { type: 'integer' }, stdout: { type: 'string' } },
  required: ['exit_code', 'stdout'],
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

// One shell command through a runner agent; returns {exit_code, stdout} or null.
const run = (label, phaseTitle, command) =>
  agent(
    `Run exactly this one shell command, with no other action, and reply with its exit code and ` +
      `its standard output (stdout) unchanged. Do not fix, retry or explain anything.\n\n${command}`,
    {
      label,
      phase: phaseTitle,
      schema: RUN_SCHEMA,
      model: 'sonnet',
      effort: 'low',
      agentType: 'general-purpose',
    },
  )

const brief = (c) => `You answer CP-OS modules for one issuer, ${c.name} (issuer id ${c.id}).
No provider is called; you are the model. Follow this order exactly.

1. Read ${repo}/docs/templates/host-analyst-checklist.md and follow it for every answer.
2. From ${repo} run this command as given (it is the launcher, run from the repository root):
   ${c.command}
   Exit 3 means a module needs your answer: read the files named on its Source: and Handoff:
   lines, write your draft under ${c.drafts}/, work the checklist's "Before you submit" on the
   draft, copy it to the Answer: path printed, and run the same command again.
   Stop on exit 0 (finished), 1 (stopped) or 2 (refused).
3. Count the launcher attempts for each module (the first submission is 1). You may resubmit a
   module at most 2 times (3 attempts in all); if a module is rejected a third time, stop.
4. Rules: no web, no network; no edits to the repository; write drafts, helper scripts and every
   other scratch file only in ${c.drafts}/ (never the shared session scratchpad);
   do not read any other issuer's folder or draft; do not touch ${root}/swarm/plan.json (the
   ledger; the controller writes it). An accepted answer cannot be replaced.
5. Reply with: issuer_id ${c.id}; exit_code, the last launcher exit code; attempts_by_module for
   CP-0, CP-1, CP-1A and CP-2; notes, one sentence on any defect you saw but could not fix.`

let claimed = 0
let published = 0
let failed = 0
let batches = 0

while (claimed < limit) {
  const n = Math.min(concurrency, limit - claimed)
  phase('Claim')
  const next = await run(
    `claim ${n}`,
    'Claim',
    ledger(`next --n ${n} --stale-seconds ${staleSeconds}${secondPass ? ' --failed' : ''}`),
  )
  if (!next || next.exit_code !== 0) {
    throw new Error(`ledger next failed: ${next ? next.stdout : 'runner returned nothing'}`)
  }
  // uv may print warnings (stderr is merged): the claim list is the JSON array that follows.
  const start = next.stdout.indexOf('[')
  if (start < 0) throw new Error(`ledger next printed no list: ${next.stdout}`)
  const batch = JSON.parse(next.stdout.slice(start, next.stdout.lastIndexOf(']') + 1))
  if (batch.length === 0) break
  claimed += batch.length
  batches += 1
  if (claimed === limit) log(`limit ${limit} reached; issuers left pending stay pending`)

  phase('Analyse')
  const analysed = await parallel(
    batch.map((issuer) => async () => {
      const cmd = await run(`command ${issuer.issuer_id}`, 'Analyse', tool('run_issuer.py', `${q(issuer.issuer_id)} --root ${q(root)}`))
      if (!cmd || cmd.exit_code !== 0) return { issuer, fail: 'could not build the launcher command' }
      const report = await agent(
        brief({
          id: issuer.issuer_id,
          name: issuer.name,
          command: cmd.stdout.trim(),
          drafts: `${root}/swarm/drafts/${issuer.issuer_id}`,
        }),
        {
          label: issuer.issuer_id,
          phase: 'Analyse',
          schema: REPORT_SCHEMA,
          model: 'sonnet',
          effort: 'high',
          agentType: 'general-purpose',
        },
      )
      return report ? { issuer, report } : { issuer, fail: 'analyst returned nothing' }
    }),
  )

  phase('Verify and record')
  for (let i = 0; i < batch.length; i++) {
    const id = batch[i].issuer_id
    const outcome = analysed[i] ?? { issuer: batch[i], fail: 'analyst returned nothing' }
    let reason = outcome.fail
    const report = outcome.report
    if (!reason && report.exit_code !== 0) {
      reason = `launcher stopped, exit ${report.exit_code}: ${report.notes}`
    }
    if (!reason) {
      const check = await run(`verify ${id}`, 'Verify and record', tool('run_issuer.py', `${q(id)} --root ${q(root)} verify`))
      if (!check) reason = 'verify runner returned nothing'
      else if (check.exit_code !== 0) reason = `relaunch check failed: ${check.stdout.trim()}`
    }
    const by = report ? q(JSON.stringify(report.attempts_by_module)) : null
    if (!reason) {
      const done = await run(`done ${id}`, 'Verify and record', ledger(`done ${q(id)} --attempts-by-module ${by}`))
      if (done && done.exit_code === 0) {
        published += 1
        continue
      }
      reason = `ledger refused done: ${done ? done.stdout.trim() : 'runner returned nothing'}`
    }
    log(`${id} failed: ${reason}`)
    const bad = await run(
      `fail ${id}`,
      'Verify and record',
      ledger(`fail ${q(id)} --reason ${q(reason)}` + (by ? ` --attempts-by-module ${by} --exit-code ${report.exit_code}` : '')),
    )
    if (!bad || bad.exit_code !== 0) {
      throw new Error(`could not record ${id} as failed: ${bad ? bad.stdout : 'runner returned nothing'}`)
    }
    failed += 1
  }

  phase('Library')
  const lib = await run(
    'update_library',
    'Library',
    `cd ${q(repo)} && uv run python apps/issuer-library/update_library.py --workspace ${q(root)}/_engine 2>&1`,
  )
  if (!lib || lib.exit_code !== 0) {
    throw new Error(`update_library failed: ${lib ? lib.stdout : 'runner returned nothing'}`)
  }
}

log(`batches ${batches}, claimed ${claimed}, published ${published}, failed ${failed}`)
return { batches, claimed, published, failed }
