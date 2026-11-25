import { readerText, type OutputEntry, type Table } from "../../publishedReport";
import { namesSource, safeText } from "./kit/reader";
import { difference, group, readCell, signOf, sum } from "./kit/numbers";
import { allTables, tableWith } from "./kit/tables";

/*
 * Reads what the CP-1D contract names (src/deploy_vii/bindings/cp1d.py, src/deploy_workflow/owners/cp1d.py):
 * the bridge as a `Step | Amount | Reporting unit | Basis and limitation` table (opening, add-backs,
 * closing; apps/issuer-library handoff_fields.py), the add-back assessment (T1D.2: the add-back's
 * name in its first column and an `Achievability` column) and the cash conversion and leverage
 * table (T1D.6: `Total leverage`, `Net leverage`; rows Statements, Management financing case, Supported).
 * Nothing else is read; whatever is not recognised is a gap in words.
 */

/** A text a working page may draw: no source reference, module codes as names. */
const norm = (text: string) => text.trim().replace(/\s+/g, " ").toLowerCase();

export type Support = "Supported" | "Partly supported" | "Not supported" | "Insufficient evidence";
const SUPPORT_WORDS: Support[] = [
  "Supported",
  "Partly supported",
  "Not supported",
  "Insufficient evidence",
];

/** The accepted and not accepted amounts the assessment states for a step, when they make up the step. */
type Split = { accepted: string; notAccepted: string };

type Step = { label: string; amount: string; value: number; line: number };

export type Bridge = {
  state: "ready";
  unit: string;
  line: number;
  opening: Step;
  closing: Step;
  /** The add-backs, in the order the handoff states them. */
  changes: (Step & { support: Support | null; split: Split | null })[];
  /** Whether the assessment table is there and states a word for at least one add-back. */
  supportStated: boolean;
  notes: string[];
};
export type BridgeGap = {
  state: "gap";
  reason: string;
  /** The steps the handoff states, to list as text when they cannot be drawn. */
  stated: { label: string; text: string }[];
};

function stepTable(entry: OutputEntry): Table | null | "several" {
  const found = allTables(entry).filter(
    ({ table }) => table.headers.includes("Step") && table.headers.includes("Amount"),
  );
  if (found.length <= 1) return found[0]?.table ?? null;
  const bridges = found.filter(({ heading }) => /bridge/i.test(heading));
  return bridges.length === 1 ? (bridges[0]?.table ?? null) : "several";
}

/**
 * What the assessment table states per add-back name: the support word and, where it states both
 * accepted and not accepted amounts, those amounts. A name that appears twice cannot be matched.
 */
function assessmentByName(entry: OutputEntry) {
  const table = tableWith(entry, ["Achievability"]);
  const names = new Map<
    string,
    { support: Support | null; accepted: string; notAccepted: string }
  >();
  const at = table?.headers.indexOf("Achievability") ?? -1;
  const acceptedAt = table?.headers.indexOf("Accepted amount") ?? -1;
  const notAcceptedAt = table?.headers.indexOf("Not accepted") ?? -1;
  const none = { support: null, accepted: "", notAccepted: "" };
  for (const row of table?.rows ?? []) {
    const name = norm(row.cells[0] ?? "");
    const word = SUPPORT_WORDS.find((item) => norm(item) === norm(row.cells[at] ?? "")) ?? null;
    names.set(
      name,
      names.has(name)
        ? none
        : {
            support: word,
            accepted: acceptedAt < 0 ? "" : (row.cells[acceptedAt] ?? ""),
            notAccepted: notAcceptedAt < 0 ? "" : (row.cells[notAcceptedAt] ?? ""),
          },
    );
  }
  return names;
}

/** Both amounts plain numbers that make up the step exactly: only then is the step drawn as two parts. */
function splitOf(step: Step, stated: { accepted: string; notAccepted: string } | undefined) {
  const accepted = readCell(stated?.accepted ?? "");
  const notAccepted = readCell(stated?.notAccepted ?? "");
  if (accepted.kind !== "number" || notAccepted.kind !== "number") return null;
  if (accepted.value <= 0 || notAccepted.value <= 0) return null;
  const made = sum([accepted.text, notAccepted.text]);
  return made !== null && signOf(difference(step.amount, made)) === 0
    ? { accepted: accepted.text, notAccepted: notAccepted.text }
    : null;
}

const gapOf = (reason: string, stated: BridgeGap["stated"] = []): BridgeGap => ({
  state: "gap",
  reason,
  stated,
});

/** The add-back bridge, reconciled; or the gap, with the stated steps to list as words. */
export function readBridge(entry: OutputEntry): Bridge | BridgeGap {
  const table = stepTable(entry);
  if (table === "several")
    return gapOf(
      "This page could not read the earnings quality bridge from the handoff because it appears more than once.",
    );
  if (!table)
    return gapOf("This page could not read the earnings quality bridge from the handoff.");
  const unitAt = table.headers.indexOf("Reporting unit");
  const amountAt = table.headers.indexOf("Amount");
  const basisAt = table.headers.indexOf("Basis and limitation");
  const stated = table.rows.map((row) => {
    const cell = safeText(row.cells[amountAt] ?? "");
    const unit = unitAt < 0 ? "" : safeText(row.cells[unitAt] ?? "");
    return { label: safeText(row.cells[0] ?? ""), text: unit ? `${cell} ${unit}` : cell };
  });
  if (table.rows.length < 2)
    return gapOf("This page could not read two steps of the bridge from the handoff.", stated);
  const units = new Set(
    table.rows.map((row) => (unitAt < 0 ? "" : (row.cells[unitAt] ?? "").trim())),
  );
  const [unit = ""] = units;
  if (units.size !== 1 || !unit)
    return gapOf(
      unitAt < 0
        ? "This page could not read the reporting unit of the bridge from the handoff."
        : "This page could not read the bridge steps in one reporting unit from the handoff.",
      stated,
    );
  const steps = table.rows.map((row) => ({
    label: safeText(row.cells[0] ?? ""),
    reading: readCell(row.cells[amountAt] ?? ""),
    line: row.line,
  }));
  const bad = steps.find((step) => step.reading.kind !== "number");
  if (bad)
    return gapOf(
      bad.reading.kind === "gap"
        ? `This page could not read the bridge from the handoff because ${bad.label} is not supplied: ${safeText(bad.reading.reason)}.`
        : `This page could not read “${safeText(bad.reading.text)}” as an amount for ${bad.label}, so the bridge is not drawn.`,
      stated,
    );
  const read: Step[] = steps.map((step) => {
    if (step.reading.kind !== "number") throw new Error("unreachable: steps are numbers here");
    return {
      label: step.label,
      amount: step.reading.text,
      value: step.reading.value,
      line: step.line,
    };
  });
  const [opening, ...rest] = read;
  const closing = rest.pop();
  if (!opening || !closing)
    return gapOf("This page could not read two steps of the bridge from the handoff.", stated);
  const rebuilt = sum([opening.amount, ...rest.map((step) => step.amount)]);
  if (rebuilt === null || signOf(difference(closing.amount, rebuilt)) !== 0)
    return gapOf(
      `This page did not draw the bridge because the steps between ${opening.label} (${group(opening.amount)}) and ${closing.label} (${group(closing.amount)}) do not add up.`,
      stated,
    );
  const names = assessmentByName(entry);
  const changes = rest.map((step) => {
    const found = names.get(norm(step.label));
    return { ...step, support: found?.support ?? null, split: splitOf(step, found) };
  });
  const notes = [
    ...new Set(
      table.rows.flatMap((row) => {
        const text = basisAt < 0 ? "" : (row.cells[basisAt] ?? "").trim();
        return text && !namesSource(text) ? [readerText(text)] : [];
      }),
    ),
  ];
  return {
    state: "ready",
    unit: safeText(unit),
    line: table.line,
    opening,
    closing,
    changes,
    supportStated: changes.some((step) => step.support !== null),
    notes,
  };
}

type Reported = { text: string; value: number };
export type LeverageMeasure =
  | {
      kind: "pair";
      measure: string;
      reported: Reported;
      restated: Reported;
    }
  | { kind: "gap"; measure: string; reason: string };

/** A multiple as the table writes it: a plain number with or without a trailing `x`. */
function multiple(cell: string) {
  const reading = readCell(cell.trim().replace(/x$/i, ""));
  return reading.kind === "number"
    ? ({ ok: true, text: reading.text, value: reading.value } as const)
    : ({
        ok: false,
        reason:
          reading.kind === "gap"
            ? safeText(reading.reason)
            : `this page could not read “${safeText(reading.text)}” as a multiple`,
      } as const);
}

const BASIS_ROWS = { reported: "statements", restated: "supported" } as const;
const MEASURES = ["Total leverage", "Net leverage"] as const;

export type Leverage =
  { state: "ready"; line: number; measures: LeverageMeasure[] } | { state: "gap"; reason: string };

/** Reported (statements) and restated (supported earnings) leverage, only where both multiples are stated. */
export function readLeverage(entry: OutputEntry): Leverage {
  const table = tableWith(entry, ["Total leverage", "Net leverage"]);
  if (!table)
    return {
      state: "gap",
      reason:
        "This page could not read the leverage on the statements and on supported earnings from the handoff.",
    };
  const rowOf = (basis: string) =>
    table.rows.filter((row) => norm(row.cells[0] ?? "").replace(/\s*\(cp-1\)$/, "") === basis);
  const reported = rowOf(BASIS_ROWS.reported);
  const restated = rowOf(BASIS_ROWS.restated);
  const [from] = reported;
  const [to] = restated;
  if (reported.length !== 1 || restated.length !== 1 || !from || !to)
    return {
      state: "gap",
      reason:
        "This page could not read one row each for the statements and for supported earnings from the handoff.",
    };
  const measures = MEASURES.map((header): LeverageMeasure => {
    const at = table.headers.indexOf(header);
    const a = multiple(from.cells[at] ?? "");
    const b = multiple(to.cells[at] ?? "");
    if (!a.ok || !b.ok) {
      const why = [
        a.ok ? null : `on the statements: ${a.reason}`,
        b.ok ? null : `on supported earnings: ${b.reason}`,
      ].filter((text) => text !== null);
      return { kind: "gap", measure: header, reason: why.join("; ") };
    }
    return { kind: "pair", measure: header, reported: a, restated: b };
  });
  return { state: "ready", line: table.line, measures };
}
