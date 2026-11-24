import { unitLabel } from "../../publishedReport";
import { ticks, type SourceTable } from "../../visuals/visualData";
import { readCell, type Cell } from "../overview/figureData";
import { gapReason } from "../overview/read";

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
    label: row[0] ?? "",
    cell: readCell(texts[at] ?? "", texts, unit),
    line: table.rowLines?.[at] ?? table.line,
  }));
  const stated = steps.find((step) => step.cell.value === null);
  const why = (() => {
    if (steps.length < 3) return "The bridge states fewer than an opening, a change and a closing.";
    if (!unit) return "The bridge's rows are in more than one unit.";
    if (stated) {
      const reason = gapReason(stated.cell.text) ?? stated.cell.reason;
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

const W = { width: 640, label: 196, right: 584, row: 34, top: 8, bar: 16 } as const;

/** Signed text for a change exactly as written, with a plus where the module wrote none. */
const signed = (text: string) => (/^[+\-−(]/.test(text.trim()) ? text.trim() : `+${text.trim()}`);

/**
 * A horizontal bridge: the opening and closing from zero, each change floating from where the one
 * before ended. Every label is the module's figure; the running positions place bars only.
 */
export function Bridge({ steps, unit, label }: { steps: Step[]; unit: string; label: string }) {
  const values = steps.map((step) => step.cell.value ?? 0);
  const ends: number[] = [];
  values.forEach((value, at) => {
    const last = at === values.length - 1;
    ends.push(at === 0 || last ? value : (ends[at - 1] ?? 0) + value);
  });
  const scale = ticks([0, ...ends]);
  const lo = scale[0]?.value ?? 0;
  const hi = scale.at(-1)?.value ?? 1;
  const x = (value: number) => W.label + ((value - lo) / (hi - lo || 1)) * (W.right - W.label);
  const height = W.top + steps.length * W.row + 26;
  const last = steps.length - 1;
  return (
    <svg
      viewBox={`0 0 ${String(W.width)} ${String(height)}`}
      width="100%"
      role="img"
      aria-label={label}
      className="block"
    >
      {scale.map((tick) => (
        <g key={tick.value}>
          <line
            x1={x(tick.value)}
            x2={x(tick.value)}
            y1={W.top}
            y2={height - 22}
            className={tick.value === 0 ? "stroke-connector" : "stroke-border-hairline"}
          />
          <text
            x={x(tick.value)}
            y={height - 6}
            textAnchor="middle"
            className="fill-text-tertiary font-mono text-[11px]"
          >
            {tick.label}
          </text>
        </g>
      ))}
      {steps.map((step, at) => {
        const total = at === 0 || at === last;
        const from = total ? 0 : (ends[at - 1] ?? 0);
        const to = ends[at] ?? 0;
        const left = x(Math.min(from, to));
        const width = Math.max(2, Math.abs(x(to) - x(from)));
        const y = W.top + at * W.row + (W.row - W.bar) / 2;
        const text = total ? step.cell.text : signed(step.cell.text);
        return (
          <g key={step.line}>
            <text
              x="0"
              y={y + W.bar - 3}
              className={
                total
                  ? "fill-text-primary text-[13px] font-medium"
                  : "fill-text-secondary text-[13px]"
              }
            >
              {step.label.length > 30 ? `${step.label.slice(0, 29)}…` : step.label}
              <title>{step.label}</title>
            </text>
            <rect
              x={left}
              y={y}
              width={width}
              height={W.bar}
              rx="2"
              className={total ? "fill-chart-1" : "fill-chart-2"}
            />
            <text
              x={Math.min(left + width + 6, W.width - 4)}
              y={y + W.bar - 3}
              textAnchor={left + width + 6 > W.width - 56 ? "end" : "start"}
              className="fill-text-primary font-mono text-[12px]"
            >
              {text}
            </text>
          </g>
        );
      })}
      <desc>{`Amounts in ${unitLabel(unit)}.`}</desc>
    </svg>
  );
}
