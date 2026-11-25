import type { TableViewData } from "../kit/LeadFrame";
import { signedText, waterfallAxis, waterfallReading, type WaterfallRow } from "../kit/marks";
import { group } from "../kit/numbers";
import { safeText } from "../kit/reader";
import { bridgeKind, bridgeKinds, type BridgeKind, type EbitdaBridge } from "./foundationData";

// The EBITDA bridge as the kit Waterfall draws it: the stated steps in order, each labelled as
// written and signed; a step that is not a number is the gap row with its own words. No total of
// the changes, no largest step, no "add-back" word: a step is an increase or a decrease.

/**
 * Whether the bridge is drawn: not when every step is a stated number and they do not add up to
 * the closing figure. With a stated gap the Waterfall draws what is known and writes the rest.
 */
export const bridgeDrawn = (data: EbitdaBridge) =>
  data.reconciles || data.steps.some((step) => step.cell.kind !== "number");

/** Each step as a Waterfall row. */
export function bridgeRows(data: EbitdaBridge): WaterfallRow[] {
  return data.steps.map((step): WaterfallRow => {
    const label = safeText(step.label);
    const kind = step.kind === "opening" ? "level" : step.kind === "closing" ? "closing" : "step";
    if (step.cell.kind !== "number")
      return {
        kind: "gap",
        label,
        reason: safeText(step.cell.text),
        of: kind === "step" ? "step" : "level",
      };
    return { kind, label, value: step.cell.value, text: group(step.cell.text) };
  });
}

const WORD: Record<BridgeKind, string> = {
  opening: "Opening",
  increase: "Increase",
  decrease: "Decrease",
  "no change": "No change",
  gap: "Not stated",
  closing: "Closing",
};

/** The legend's word for the steps: the kinds the bridge's changes take ("Increase or decrease"). */
export function stepWord(data: EbitdaBridge) {
  const changes = bridgeKinds(data)
    .filter((kind) => kind === "increase" || kind === "decrease" || kind === "no change")
    .map((kind) => WORD[kind].toLowerCase());
  if (!changes.length) return null;
  const words =
    changes.length < 2
      ? changes.join("")
      : `${changes.slice(0, -1).join(", ")} or ${changes.at(-1) ?? ""}`;
  return `${words.charAt(0).toUpperCase()}${words.slice(1)}`;
}

/** The figure's reading: every step with its signed amount, and where the axis starts. */
export function bridgeReading(rows: readonly WaterfallRow[], unit: string) {
  const reading = waterfallReading(rows, unit, waterfallAxis(rows, "auto"));
  return `EBITDA bridge, ${reading.slice("Waterfall, ".length)}`;
}

/** A step's amount as the table states it: a change signed, a total grouped, a gap as written. */
function amountText(step: EbitdaBridge["steps"][number]) {
  if (step.cell.kind !== "number") return safeText(step.cell.text);
  const text = group(step.cell.text);
  return step.kind === "change" ? signedText(text, step.cell.value) : text;
}

/** The table view: each step, its amount as stated, and its kind. */
export function bridgeTable(data: EbitdaBridge): TableViewData {
  return {
    caption: `EBITDA bridge, ${data.unit}`,
    headers: ["Step", `Amount, ${data.unit}`, "Kind"],
    rows: data.steps.map((step) => [
      safeText(step.label),
      amountText(step),
      WORD[bridgeKind(step)],
    ]),
  };
}
