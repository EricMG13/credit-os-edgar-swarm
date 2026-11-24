import { cx } from "@/utils/cx";

/** One stated figure on a mark: where it sits (`value`) and the module's own text for it. */
export type Mark = { label: string; value: number; text: string };
export type MarkTone = "better" | "worse" | "flat" | "none";

const FILL = { worse: "fill-warning-mark", other: "fill-chart-1" } as const;
const STROKE = { worse: "stroke-warning-mark", other: "stroke-chart-1" } as const;
const ink = (tone: MarkTone) => (tone === "worse" ? "worse" : "other");

const TICK = "fill-text-tertiary font-mono text-[11px]";
const GRID = "stroke-border-hairline";
const PRIOR_RING = "fill-surface-card stroke-chart-3";

function niceStep(span: number, parts: number) {
  const raw = span > 0 ? span / parts : 1;
  const power = 10 ** Math.floor(Math.log10(raw));
  const factor = raw / power;
  return (factor <= 1 ? 1 : factor <= 2 ? 2 : factor <= 5 ? 5 : 10) * power;
}

/** A round axis that holds every value: its ends, its ticks and their labels. Scale labels only. */
function axis(values: number[], parts: number, suffix: string) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const step = niceStep(max - min || Math.abs(max) / 10, parts);
  const lo = Math.floor(min / step) * step;
  const hi = Math.max(Math.ceil(max / step) * step, lo + step);
  const digits = Math.max(0, -Math.floor(Math.log10(step)));
  const count = Math.round((hi - lo) / step);
  const ticks = Array.from({ length: count + 1 }, (_, at) => lo + at * step);
  const label = (tick: number) =>
    `${tick.toLocaleString("en-US", { minimumFractionDigits: digits, maximumFractionDigits: digits })}${suffix}`;
  const place = (value: number, from: number, to: number) =>
    from + ((value - lo) / (hi - lo)) * (to - from);
  return { ticks, label, place };
}

const spread = (count: number, from: number, to: number) => (at: number) =>
  count === 1 ? (from + to) / 2 : from + (at * (to - from)) / (count - 1);

/** A slope across the stated periods on a labelled axis: the large tile's mark. */
export function Slope({
  marks,
  tone,
  suffix,
  label,
}: {
  marks: Mark[];
  tone: MarkTone;
  suffix: string;
  label: string;
}) {
  const scale = axis(
    marks.map((mark) => mark.value),
    3,
    suffix,
  );
  const x = spread(marks.length, 72, 336);
  const y = (value: number) => scale.place(value, 150, 24);
  const last = marks.length - 1;
  return (
    <svg viewBox="0 0 408 180" width="100%" role="img" aria-label={label} className="block">
      {scale.ticks.map((tick) => (
        <g key={tick}>
          <line x1="40" x2="408" y1={y(tick)} y2={y(tick)} className={GRID} />
          <text x="0" y={y(tick) + 4} className={TICK}>
            {scale.label(tick)}
          </text>
        </g>
      ))}
      {marks.slice(1).map((mark, at) => (
        <line
          key={mark.label}
          x1={x(at)}
          y1={y(marks[at]?.value ?? mark.value)}
          x2={x(at + 1)}
          y2={y(mark.value)}
          strokeWidth="2"
          className={at + 1 === last ? STROKE[ink(tone)] : "stroke-chart-3"}
        />
      ))}
      {marks.map((mark, at) => (
        <g key={mark.label}>
          {at === last ? (
            <circle cx={x(at)} cy={y(mark.value)} r="6" className={FILL[ink(tone)]} />
          ) : (
            <circle cx={x(at)} cy={y(mark.value)} r="5" strokeWidth="2" className={PRIOR_RING} />
          )}
          <text
            x={x(at)}
            y={y(mark.value) < 44 ? y(mark.value) + 22 : y(mark.value) - 13}
            textAnchor="middle"
            className={cx(
              "font-mono text-[13px]",
              at === last ? "fill-text-primary font-medium" : "fill-text-secondary",
            )}
          >
            {mark.text}
          </text>
          <text x={x(at)} y="174" textAnchor="middle" className="fill-text-tertiary text-[12px]">
            {mark.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

/** One row per period on a shared axis, so each level reads against the same scale. */
export function DotStrip({
  marks,
  tone,
  suffix,
  label,
}: {
  marks: Mark[];
  tone: MarkTone;
  suffix: string;
  label: string;
}) {
  const scale = axis(
    marks.map((mark) => mark.value),
    4,
    suffix,
  );
  const x = (value: number) => scale.place(value, 100, 396);
  const y = (at: number) => 36 + at * 46;
  const floor = y(marks.length - 1) + 22;
  const last = marks.length - 1;
  return (
    <svg
      viewBox={`0 0 408 ${String(floor + 22)}`}
      width="100%"
      role="img"
      aria-label={label}
      className="block"
    >
      {scale.ticks.map((tick) => (
        <g key={tick}>
          <line x1={x(tick)} x2={x(tick)} y1="14" y2={floor} className={GRID} />
          <text x={x(tick)} y={floor + 18} textAnchor="middle" className={TICK}>
            {scale.label(tick)}
          </text>
        </g>
      ))}
      {marks.slice(1).map((mark, at) => (
        <line
          key={mark.label}
          x1={x(marks[at]?.value ?? mark.value)}
          y1={y(at)}
          x2={x(mark.value)}
          y2={y(at + 1)}
          strokeWidth="1.5"
          strokeDasharray="3 3"
          className="stroke-chart-3"
        />
      ))}
      {marks.map((mark, at) => (
        <g key={mark.label}>
          <text
            x="0"
            y={y(at) + 4}
            className={cx(
              "text-[12px]",
              at === last ? "fill-text-primary font-medium" : "fill-text-secondary",
            )}
          >
            {mark.label}
          </text>
          {at === last ? (
            <circle cx={x(mark.value)} cy={y(at)} r="6" className={FILL[ink(tone)]} />
          ) : (
            <circle cx={x(mark.value)} cy={y(at)} r="5" strokeWidth="2" className={PRIOR_RING} />
          )}
          <text
            x={x(mark.value) > 340 ? x(mark.value) - 12 : x(mark.value) + 12}
            y={y(at) + 4}
            textAnchor={x(mark.value) > 340 ? "end" : "start"}
            className={cx(
              "font-mono text-[12px]",
              at === last ? "fill-text-primary font-medium" : "fill-text-secondary",
            )}
          >
            {mark.text}
          </text>
        </g>
      ))}
    </svg>
  );
}

/** A small unlabelled slope: direction and steepness only; the figures sit above it. */
export function MiniSlope({
  marks,
  tone,
  label,
}: {
  marks: Mark[];
  tone: MarkTone;
  label: string;
}) {
  const values = marks.map((mark) => mark.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const x = spread(marks.length, 8, 176);
  const y = (value: number) => (max === min ? 20 : 34 - ((value - min) / (max - min)) * 28);
  const last = marks.length - 1;
  return (
    <svg viewBox="0 0 184 40" width="100%" role="img" aria-label={label} className="block">
      <line x1="0" x2="184" y1="38" y2="38" className={GRID} />
      <polyline
        fill="none"
        strokeWidth="2"
        points={marks.map((mark, at) => `${String(x(at))},${String(y(mark.value))}`).join(" ")}
        className={STROKE[ink(tone)]}
      />
      {marks.map((mark, at) =>
        at === last ? (
          <circle
            key={mark.label}
            cx={x(at)}
            cy={y(mark.value)}
            r="4"
            className={FILL[ink(tone)]}
          />
        ) : (
          <circle
            key={mark.label}
            cx={x(at)}
            cy={y(mark.value)}
            r="3.5"
            strokeWidth="2"
            className={PRIOR_RING}
          />
        ),
      )}
    </svg>
  );
}

/** A ruler with an arrow from the earlier level to the latest. */
export function Ruler({
  from,
  to,
  tone,
  suffix,
  label,
}: {
  from: Mark;
  to: Mark;
  tone: MarkTone;
  suffix: string;
  label: string;
}) {
  const scale = axis([from.value, to.value], 2, suffix);
  const x = (value: number) => scale.place(value, 8, 176);
  const head = to.value >= from.value ? -6 : 6;
  const ends = [scale.ticks[0] ?? from.value, scale.ticks.at(-1) ?? to.value];
  return (
    <svg viewBox="0 0 184 40" width="100%" role="img" aria-label={label} className="block">
      <line x1="8" x2="176" y1="14" y2="14" strokeWidth="2" className={GRID} />
      {scale.ticks.map((tick) => (
        <line key={tick} x1={x(tick)} x2={x(tick)} y1="9" y2="19" className="stroke-chart-3" />
      ))}
      <line
        x1={x(from.value)}
        x2={x(to.value) + head}
        y1="14"
        y2="14"
        strokeWidth="2"
        className={STROKE[ink(tone)]}
      />
      <polygon
        points={`${String(x(to.value))},14 ${String(x(to.value) + head)},10.5 ${String(x(to.value) + head)},17.5`}
        className={FILL[ink(tone)]}
      />
      <circle cx={x(from.value)} cy="14" r="4" strokeWidth="2" className={PRIOR_RING} />
      <text x="8" y="36" className={TICK}>
        {scale.label(ends[0] ?? 0)}
      </text>
      <text x="176" y="36" textAnchor="end" className={TICK}>
        {scale.label(ends[1] ?? 0)}
      </text>
    </svg>
  );
}

/** A bar to the earlier level with the change drawn as its highlighted end. Positive levels only. */
export function DeltaBar({
  from,
  to,
  tone,
  label,
}: {
  from: Mark;
  to: Mark;
  tone: MarkTone;
  label: string;
}) {
  if (from.value <= 0 || to.value <= 0) return null;
  const x = (value: number) => (value / Math.max(from.value, to.value)) * 184;
  const low = Math.min(from.value, to.value);
  const rose = to.value >= from.value;
  return (
    <svg viewBox="0 0 184 40" width="100%" role="img" aria-label={label} className="block">
      <rect x="0" y="6" width={x(low)} height="14" rx="2" className="fill-chart-3" />
      <rect
        x={x(low)}
        y="6.5"
        width={184 - x(low)}
        height="13"
        rx="2"
        strokeWidth="1"
        className={
          rose ? cx(FILL[ink(tone)], STROKE[ink(tone)]) : "fill-warning-fill stroke-warning-mark"
        }
      />
      <line x1={x(low)} x2={x(low)} y1="2" y2="24" className="stroke-text-primary" />
      <text x="0" y="36" className={cx(TICK, !rose && "fill-text-primary")}>
        {rose ? from.text : to.text}
      </text>
      <text x="184" y="36" textAnchor="end" className={cx(TICK, rose && "fill-text-primary")}>
        {rose ? to.text : from.text}
      </text>
    </svg>
  );
}

/** Two stated parts side by side, each drawn to its size. Positive parts only. */
export function SplitBar({ first, second, label }: { first: Mark; second: Mark; label: string }) {
  if (first.value <= 0 || second.value <= 0) return null;
  const cut = (first.value / (first.value + second.value)) * 184;
  return (
    <svg viewBox="0 0 184 40" width="100%" role="img" aria-label={label} className="block">
      <rect x="0" y="6" width={cut - 1} height="14" rx="2" className="fill-chart-1" />
      <rect x={cut + 1} y="6" width={183 - cut} height="14" rx="2" className="fill-chart-2" />
      <text x="0" y="36" className={cx(TICK, "fill-text-primary")}>
        {first.text}
      </text>
      <text x="184" y="36" textAnchor="end" className={TICK}>
        {second.text}
      </text>
    </svg>
  );
}

/** Where a mark would be, for a figure the module did not supply. */
export function GapBar() {
  return (
    <div
      aria-hidden="true"
      className="gap-hatch h-3.5 rounded-ds-xs border border-dashed border-border-gap"
    />
  );
}
