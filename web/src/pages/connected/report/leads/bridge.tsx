import { unitLabel } from "../../publishedReport";
import { ticks, type SourceTable } from "../../visuals/visualData";
import { readCell, type Cell } from "../overview/figureData";
import { gapReason } from "../overview/read";
import { BarRow, Trace, type LeadTable } from "./parts";
import { readerCell, readerCellOf, WITHHELD, type Chart } from "./read";

export type Step = { label: string; cell: Cell; line: number };

/**
 * A published step table (`Step | Amount | Reporting unit | …`): the opening, the signed changes and
 * the closing, as written. `drawable` only when every amount is a number, the rows share one unit and
 * the opening plus the changes equal the closing; otherwise `why` says what stops the figure.
 */
function bridgeSteps(table: SourceTable, amountColumn = 1) {
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

/**
 * A step chart as the page can draw it: the steps and unit, and `why` no figure is drawn. A table
 * the store withheld is read from the handoff as written, so its own reason (it does not reconcile,
 * a step is not supplied) is the one given; any other withheld table says only that the page could
 * not draw it. Null for a stated gap or no table.
 */
export function bridgeOf(chart: Chart) {
  if (chart.state !== "ready" && chart.state !== "withheld") return null;
  const read = bridgeSteps(chart.table);
  const why = read.why ?? (chart.state === "withheld" ? WITHHELD : null);
  return { ...read, why, table: chart.table };
}

/** A bridge's table view: each step's amount as written, one trace per row. */
export function stepTable(
  steps: readonly Step[],
  href: (line?: number) => string,
): LeadTable | undefined {
  if (!steps.length) return undefined;
  return {
    head: ["Step", "Amount"],
    rows: steps.map((step) => ({
      label: step.label,
      cells: [step.cell.text || null],
      end: <Trace href={href(step.line)} name={step.label} />,
    })),
    endHeading: "Source",
  };
}

const share = (value: number) => `${String(value * 100)}%`;

/**
 * A horizontal bridge: the opening and closing from zero, each change floating from where the one
 * before ended. Every figure is the module's, as written, in its own column; the running positions
 * place bars only.
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
  const marks = scale.map((tick) => at(tick.value)).filter((mark) => mark !== at(0));
  const row =
    "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 sm:grid-cols-[12rem_minmax(0,1fr)_auto]";
  return (
    <div role="img" aria-label={label} className="flex min-w-0 flex-col gap-1">
      <ol aria-hidden="true" className="flex flex-col gap-2">
        {steps.map((step, index) => {
          const total = index === 0 || index === last;
          const from = total ? 0 : (ends[index - 1] ?? 0);
          return (
            <li key={step.line} className={row}>
              <span
                className={`col-span-2 text-small sm:col-span-1 ${total ? "font-medium text-text-primary" : "text-text-secondary"}`}
              >
                {step.label}
              </span>
              <BarRow
                start={at(from)}
                end={at(ends[index] ?? 0)}
                tone={total ? "primary" : "secondary"}
                ticks={marks}
                zero={at(0)}
              />
              <span
                data-figure
                className="text-right font-mono text-small text-text-primary tabular-nums"
              >
                {step.cell.text}
              </span>
            </li>
          );
        })}
      </ol>
      <div aria-hidden="true" className={row}>
        <span className="hidden sm:block" />
        <span className="relative h-4">
          {scale.map((tick, index) => (
            <span
              key={tick.value}
              className={`absolute font-mono text-caption text-text-tertiary tabular-nums ${
                index === 0
                  ? ""
                  : index === scale.length - 1
                    ? "-translate-x-full"
                    : "-translate-x-1/2"
              }`}
              style={{ left: share(at(tick.value)) }}
            >
              {tick.label}
            </span>
          ))}
        </span>
        <span />
      </div>
      <p className="sr-only">{`Amounts in ${unitLabel(unit)}.`}</p>
    </div>
  );
}
