import { unitLabel } from "../../publishedReport";
import { ticks, type SourceTable } from "../../visuals/visualData";
import { readCell, type Cell } from "../overview/figureData";
import { gapReason } from "../overview/read";
import { readerCell, readerCellOf } from "./read";

export type Step = { label: string; cell: Cell; line: number };

/**
 * A published step table (`Step | Amount | Reporting unit | …`): the opening, the signed changes and
 * the closing, as written. `drawable` only when every amount is a number, the rows share one unit and
 * the opening plus the changes equal the closing; otherwise `why` says what stops the figure.
 */
export function bridgeSteps(table: SourceTable, amountColumn = 1) {
  const texts = table.rows.map((row) => row[amountColumn] ?? "");
  const units = new Set(table.rows.map((row) => row.at(-2) ?? ""));
  const unit = units.size === 1 ? ([...units][0] ?? "") : "";
  const steps: Step[] = table.rows.map((row, at) => ({
    label: readerCell(row[0] ?? "") || "Not stated",
    cell: readerCellOf(readCell(texts[at] ?? "", texts, unit)),
    line: table.rowLines?.[at] ?? table.line,
  }));
  const stated = steps.find((step) => step.cell.value === null);
  const why = (() => {
    if (steps.length < 3) return "The bridge states fewer than an opening, a change and a closing.";
    if (!unit) return "The bridge's rows are in more than one unit.";
    if (stated) {
      const reason = gapReason(stated.cell.text) ?? stated.cell.reason;
      if (reason === "In Evidence")
        return `${stated.label} is not supplied; the reason is recorded in Evidence.`;
      return reason
        ? `${stated.label} is not supplied: ${reason}`
        : `${stated.label} has no amount the figure can place.`;
    }
    const values = steps.map((step) => step.cell.value ?? 0);
    const sum = values.slice(0, -1).reduce((total, value) => total + value, 0);
    const closing = values.at(-1) ?? 0;
    const tolerance = 1e-9 * Math.max(1, Math.abs(closing));
    return Math.abs(sum - closing) > tolerance
      ? "The bridge does not reconcile from opening to closing, so it is shown as a table."
      : null;
  })();
  return { steps, unit, why };
}

/** Signed text for a change exactly as written, with a plus where the module wrote none. */
const signed = (text: string) => (/^[+\-−(]/.test(text.trim()) ? text.trim() : `+${text.trim()}`);

const pct = (value: number) => `${String(value * 100)}%`;

/**
 * A horizontal bridge: the opening and closing from zero, each change floating from where the one
 * before ended. Every label is the module's figure; the running positions place bars only.
 */
export function Bridge({ steps, unit, label }: { steps: Step[]; unit: string; label: string }) {
  const values = steps.map((step) => step.cell.value ?? 0);
  const last = steps.length - 1;
  const ends: number[] = [];
  values.forEach((value, at) => {
    ends.push(at === 0 || at === last ? value : (ends[at - 1] ?? 0) + value);
  });
  const scale = ticks([0, ...ends]);
  const lo = scale[0]?.value ?? 0;
  const hi = scale.at(-1)?.value ?? 1;
  const at = (value: number) => (value - lo) / (hi - lo || 1);
  const track = "relative h-7 min-w-0";
  return (
    <div role="img" aria-label={label} className="flex min-w-0 flex-col gap-1">
      <ol aria-hidden="true" className="flex flex-col gap-1">
        {steps.map((step, index) => {
          const total = index === 0 || index === last;
          const from = total ? 0 : (ends[index - 1] ?? 0);
          const to = ends[index] ?? 0;
          const left = at(Math.min(from, to));
          const width = Math.abs(at(to) - at(from));
          const right = left + width > 0.8;
          return (
            <li
              key={step.line}
              className="grid grid-cols-1 items-center gap-x-4 sm:grid-cols-[12rem_minmax(0,1fr)]"
            >
              <span
                className={
                  total
                    ? "text-small font-medium text-text-primary"
                    : "text-small text-text-secondary"
                }
              >
                {step.label}
              </span>
              <span className={track}>
                {scale.map((tick) => (
                  <span
                    key={tick.value}
                    className={`absolute inset-y-0 w-px ${tick.value === 0 ? "bg-connector" : "bg-border-hairline"}`}
                    style={{ left: pct(at(tick.value)) }}
                  />
                ))}
                <span
                  className={`absolute top-1.5 h-4 min-w-0.5 rounded-[2px] ${total ? "bg-chart-1" : "bg-chart-2"}`}
                  style={{ left: pct(left), width: pct(width) }}
                />
                <span
                  className="absolute top-1 font-mono text-small whitespace-nowrap text-text-primary tabular-nums"
                  style={
                    right
                      ? { right: pct(1 - left), paddingRight: "0.375rem" }
                      : { left: pct(left + width), paddingLeft: "0.375rem" }
                  }
                >
                  {total ? step.cell.text : signed(step.cell.text)}
                </span>
              </span>
            </li>
          );
        })}
      </ol>
      <div
        aria-hidden="true"
        className="grid grid-cols-1 gap-x-4 sm:grid-cols-[12rem_minmax(0,1fr)]"
      >
        <span className="hidden sm:block" />
        <span className="relative h-4">
          {scale.map((tick, index) => (
            <span
              key={tick.value}
              className={`absolute font-mono text-[11px] text-text-tertiary tabular-nums ${
                index === 0
                  ? ""
                  : index === scale.length - 1
                    ? "-translate-x-full"
                    : "-translate-x-1/2"
              }`}
              style={{ left: pct(at(tick.value)) }}
            >
              {tick.label}
            </span>
          ))}
        </span>
      </div>
      <p className="sr-only">{`Amounts in ${unitLabel(unit)}.`}</p>
    </div>
  );
}
