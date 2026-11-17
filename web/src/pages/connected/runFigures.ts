import type { ActivityLine, Figure, ModuleStep, ModuleWord } from "../run/slice-activity";
import { moduleName, type Run, type RunEvent } from "./api";

function amount(text: string | null | undefined): number | undefined {
  if (!text || !/^\d+(?:\.\d+)?(?:e[+-]?\d+)?$/i.test(text)) return;
  const value = Number(text);
  if (Number.isFinite(value)) return value;
}

const usd = (value: number) => `USD ${value.toFixed(2)}`;

export function spendFigure(run: Run): Figure {
  const spent = amount(run.spent);
  if (spent === undefined)
    return {
      value: null,
      bar: null,
      note: "Cap usage is unavailable; the budget journal could not be read",
    };
  const settled = amount(run.settled_spent);
  const held = amount(run.held);
  const breakdown =
    settled !== undefined && held !== undefined
      ? `; ${usd(settled)} settled, ${usd(held)} reserved or unknown`
      : "";
  const cap = amount(run.cap);
  if (!cap)
    return {
      value: usd(spent),
      bar: null,
      note: `${cap === 0 ? "Configured cap is USD 0.00" : "Cap is unavailable"}${breakdown}`,
    };
  return {
    value: usd(spent),
    bar: {
      value: Math.min(spent, cap),
      max: cap,
      label: `${usd(spent)} of ${usd(cap)} cap usage${breakdown}`,
    },
  };
}

export function finishedFigure(run: Pick<Run, "modules">): Figure {
  const modules = run.modules.filter(([code]) => code !== "Report");
  const max = modules.length;
  if (max === 0) return { value: null, bar: null, note: "No analytical modules listed" };
  const value = modules.filter(([, state]) => state === "done").length;
  const text = `${String(value)} of ${String(max)}`;
  return { value: text, bar: { value, max, label: `${text} modules` } };
}

const STAMP = new Intl.DateTimeFormat("en-GB", {
  timeZone: "UTC",
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

/** "16 Nov 2026, 14:32 UTC" for the service's UTC time; any other text is returned as it is. */
export function stamp(at: string) {
  const time = Date.parse(at);
  return Number.isFinite(time) ? `${STAMP.format(time)} UTC` : at;
}

function clock(timestamp: string) {
  return `${timestamp.slice(11, 19)} UTC`;
}

export function elapsedFigure(run: Run) {
  if (!run.started_at) return { value: null, note: "No start time recorded" };
  const end = run.ended_at || (run.status === "running" ? run.observed_at : "");
  const seconds = Math.floor((Date.parse(end) - Date.parse(run.started_at)) / 1000);
  if (!Number.isFinite(seconds) || seconds < 0)
    return { value: null, note: "Elapsed time is unavailable" };
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const value = [
    hours ? `${String(hours)} h` : "",
    minutes || hours ? `${String(minutes)} min` : "",
    `${String(seconds % 60)} s`,
  ]
    .filter(Boolean)
    .join(" ");
  const note = run.ended_at
    ? `${run.status === "finished" ? "Finished" : "Ended"} at ${clock(run.ended_at)}`
    : `Started at ${clock(run.started_at)}`;
  return { value, note };
}

const MILESTONES = {
  module_started: ["Running", "Module started."],
  module_accepted: ["Finished", "Module output accepted."],
  draft_rejected: ["Rejected", "Module draft rejected."],
  delivery_started: ["Running", "Report delivery started."],
  delivered: ["Finished", "Report delivered."],
  stopped: ["Interrupted", "Run execution stopped."],
  changes_not_produced: ["Not assessable", "Changes were unavailable for this run."],
  model_not_published: ["Not assessable", "The financial model was unavailable for publication."],
} as const satisfies Record<RunEvent["kind"], [ActivityLine["state"], string]>;

export function feedLines(run: Run): ActivityLine[] {
  const lines: ActivityLine[] = [];
  if (run.claimed_at)
    lines.push({
      who: run.submitted_by || "Run",
      time: clock(run.claimed_at),
      state: "Queued",
      text: "Run registered.",
    });
  if (run.started_at)
    lines.push({ who: "Run", time: clock(run.started_at), state: "Running", text: "Run started." });
  for (const event of run.events ?? []) {
    const [state, text] = MILESTONES[event.kind];
    lines.push({
      who: event.module ? moduleName(event.module) : "Run",
      time: clock(event.at),
      state,
      text,
    });
  }
  return lines.reverse();
}

/** The word for a module's state. A module the run stopped at reads "Interrupted", unless the
 * checks stopped the run there (`refused`): then it is the module the run could not assess. */
export function moduleWord(
  state: Run["modules"][number][1],
  live: boolean,
  refused = false,
): ModuleWord {
  if (state === "done") return "Finished";
  if (state === "running" && live) return "Running";
  if (state === "stopped" || state === "running") return refused ? "Not assessable" : "Interrupted";
  return live ? "Queued" : "Not run";
}

/** A run with the kind of stop its log ended on (`stopped_by`: "checker", "provider",
 * "interrupted" or "ruling"; empty for any other end), which the service sends beside `Run`. */
type StoppedRun = Run & { stopped_by?: string };

/** The module the checks stopped the run at: the last module its log started, in a failed run whose
 * recorded stop was the checks'. A run that ended any other way (a model provider's call, the
 * ruling, an interruption, a launcher that exited, a failure the scheduler found after a clean exit)
 * has none. */
function refusedModule(run: StoppedRun) {
  if (run.status !== "failed" || run.stopped_by !== "checker") return;
  return (run.events ?? []).filter((event) => event.kind === "module_started").at(-1)?.module;
}

function stoppedDetail(run: Run, code: string) {
  const rejected = (run.events ?? []).filter(
    (event) => event.kind === "draft_rejected" && event.module === code,
  ).length;
  if (rejected === 0) return "The run stopped here.";
  const times = rejected === 1 ? "once" : `${String(rejected)} times`;
  return `The run stopped here after the checks rejected its draft ${times}.`;
}

/** The run page's module rows. Only what the run's record shows is said: the module the checks
 * stopped the run at, and how many drafts of it they rejected. */
export function moduleSteps(run: StoppedRun, live: boolean): ModuleStep[] {
  const refused = refusedModule(run);
  return run.modules.map(([code, state]): ModuleStep => {
    const word = moduleWord(state, live, code === refused);
    return {
      kind: "module",
      name: moduleName(code),
      state: word,
      detail: word === "Not assessable" ? stoppedDetail(run, code) : null,
    };
  });
}
