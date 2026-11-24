import { drawnModules, serviceText, type ReadinessItem } from "../api";
import { byStage } from "../report/stages";
import { needsCheck } from "./limits";
import { scopeText } from "./limitWords";

/**
 * A module's readiness as the rail draws it. `unchecked`: before any review the page does not
 * know it (the service judges readiness only when it makes the summary). After a review, from the
 * summary's own items: no limit is `ready`; a gap, limit or check is `conditional`; a refusal is
 * `blocked`. The page adds no judgement of its own.
 */
type ModuleState = "unchecked" | "ready" | "conditional" | "blocked";

export type ModuleRow = {
  id: string;
  name: string;
  state: ModuleState;
  /** The service's reasons for a conditional or blocked state, most severe first, each once. */
  reasons: string[];
};

type StageGroup = { number?: string; name: string; rows: ModuleRow[] };

export type ModuleReadiness = {
  /** Limits on the whole run, not on one module; undefined when the summary has none. */
  run?: ModuleRow;
  groups: StageGroup[];
  /** Modules drawn: the forecast is sent with the run but is not a module. */
  count: number;
};

// The five stages' numbers, by the names `report/stages.ts` gives them.
const STAGE_NUMBER: Readonly<Record<string, string>> = {
  Sources: "01",
  Financials: "02",
  Credit: "03",
  "Structure and market": "04",
  "Validation and decision": "05",
};

const SEVERITY = ["will_refuse", "gap", "limited", "check"];

function rowOf(id: string, name: string, items: readonly ReadinessItem[]): ModuleRow {
  const limits = items
    .filter(needsCheck)
    .sort((a, b) => SEVERITY.indexOf(a.outcome) - SEVERITY.indexOf(b.outcome));
  const state: ModuleState = limits.some((item) => item.outcome === "will_refuse")
    ? "blocked"
    : limits.length
      ? "conditional"
      : "ready";
  return { id, name, state, reasons: [...new Set(limits.map((item) => serviceText(item.reason)))] };
}

/**
 * The run's modules by stage, with each one's readiness. `planned` is what the form will ask for
 * (in the pathway's order); `checked`, once a summary exists, is the service's module list and
 * items, and then it alone decides which modules are drawn and in what state.
 */
export function moduleReadiness(
  planned: readonly string[],
  checked?: { modules: readonly string[]; items: readonly ReadinessItem[] },
): ModuleReadiness {
  const modules = drawnModules(checked ? checked.modules : planned);
  const rows = modules.map((id) =>
    checked
      ? rowOf(
          id,
          scopeText(id),
          checked.items.filter((item) => item.scope === id),
        )
      : { id, name: scopeText(id), state: "unchecked" as const, reasons: [] },
  );
  const runItems = checked?.items.filter((item) => item.scope === "run" && needsCheck(item)) ?? [];
  return {
    ...(runItems.length ? { run: rowOf("run", scopeText("run"), runItems) } : {}),
    groups: byStage(rows).map((group) => ({
      ...(Object.hasOwn(STAGE_NUMBER, group.name) ? { number: STAGE_NUMBER[group.name] } : {}),
      name: group.name,
      rows: group.rows,
    })),
    count: modules.length,
  };
}
