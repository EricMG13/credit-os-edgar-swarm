import { cx } from "@/utils/cx";

/** One stated figure on a mark: where it sits (`value`) and the module's own text for it. */
export type Mark = { label: string; value: number; text: string };
/**
 * One period of a series: a stated figure, or a gap (`value` null) the line breaks at. `at` places
 * it in time (in years) where every period gives one; a line joins two periods only when both are
 * stated and their `basis` is the same.
 */
export type Slot = {
  label: string;
  value: number | null;
  text: string;
  at?: number;
  basis?: string;
};
export type MarkTone = "better" | "worse" | "flat" | "none";

const FILL = { worse: "fill-warning-mark", other: "fill-chart-1" } as const;
const STROKE = { worse: "stroke-warning-mark", other: "stroke-chart-1" } as const;
const ink = (tone: MarkTone) => (tone === "worse" ? "worse" : "other");

const TICK = "fill-text-tertiary font-mono text-caption";
const GRID = "stroke-border-hairline";
const PRIOR_RING = "fill-surface-card stroke-chart-3";
const GAP_RING = "fill-none stroke-border-gap";

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

/** Each period's place across `from`..`to`: by its time where every period has one, else evenly. */
function across(slots: Slot[], from: number, to: number) {
  const times = slots.map((slot) => slot.at);
  const even = spread(slots.length, from, to);
  if (times.some((time) => time === undefined)) return even;
  const known = times as number[];
  const first = Math.min(...known);
  const span = Math.max(...known) - first;
  return (at: number) =>
    span > 0 ? from + (((known[at] ?? first) - first) / span) * (to - from) : even(at);
}

/** Two neighbouring periods are joined only when both state a figure on the same basis. */
const joined = (from: Slot | undefined, to: Slot) =>
  from?.value != null && to.value !== null && (from.basis ?? "") === (to.basis ?? "");

const stated = (slots: Slot[]) =>
  slots.flatMap((slot) => (slot.value === null ? [] : [slot.value]));

/** Each pair of neighbouring periods that both state a figure: the line never crosses a gap. */
function segments(slots: Slot[]) {
  return slots.slice(1).flatMap((to, at) => {
    const from = slots[at];
    return joined(from, to) && from?.value != null && to.value !== null
      ? [{ at, from: from.value, to: to.value, label: to.label }]
      : [];
  });
}

/** Runs of neighbouring stated periods, for a polyline broken at each gap. */
function runs(slots: Slot[]) {
  const all: { at: number; value: number }[][] = [[]];
  slots.forEach((slot, at) => {
    if (slot.value === null) return void all.push([]);
    if (at > 0 && !joined(slots[at - 1], slot)) all.push([]);
    all.at(-1)?.push({ at, value: slot.value });
  });
  return all.filter((run) => run.length > 1);
}

/** A drawn line, x1 y1 x2 y2, that a label must keep clear of. */
type Line = readonly [number, number, number, number];
type Spot = { x: number; y: number; anchor: "start" | "middle" | "end" };
type Frame = { left: number; right: number; top: number; bottom: number };

/** A label's box: monospace glyphs 0.6 em wide, cap height above the baseline. */
function labelBox({ x, y, anchor }: Spot, text: string, size: number): Frame {
  const width = text.length * size * 0.6;
  const left = anchor === "middle" ? x - width / 2 : anchor === "end" ? x - width : x;
  return { left, right: left + width, top: y - size * 0.8, bottom: y + size * 0.2 };
}

/** Whether a line passes through a box (Liang-Barsky clipping). */
function crosses([x1, y1, x2, y2]: Line, box: Frame) {
  const edges = [
    [x1 - x2, x1 - box.left],
    [x2 - x1, box.right - x1],
    [y1 - y2, y1 - box.top],
    [y2 - y1, box.bottom - y1],
  ] as const;
  let [from, to] = [0, 1];
  for (const [p, q] of edges) {
    if (p === 0 && q < 0) return false;
    if (p < 0) from = Math.max(from, q / p);
    if (p > 0) to = Math.min(to, q / p);
    if (from > to) return false;
  }
  return true;
}

const inside = (box: Frame, frame: Frame) =>
  box.left >= frame.left &&
  box.right <= frame.right &&
  box.top >= frame.top &&
  box.bottom <= frame.bottom;

/**
 * The first spot whose label fits the frame and touches no line; else the first that fits the
 * frame (a label is never cut off); else the first.
 */
function clearSpot(
  spots: [Spot, ...Spot[]],
  text: string,
  size: number,
  lines: Line[],
  frame: Frame,
) {
  const fits = spots.filter((spot) => inside(labelBox(spot, text, size), frame));
  const clear = fits.find(
    (spot) => !lines.some((line) => crosses(line, labelBox(spot, text, size))),
  );
  return clear ?? fits[0] ?? spots[0];
}

/** A slope across the stated periods on a labelled axis, broken at a gap: the large tile's mark. */
export function Slope({
  marks,
  tone,
  suffix,
  label,
}: {
  marks: Slot[];
  tone: MarkTone;
  suffix: string;
  label: string;
}) {
  const scale = axis(stated(marks), 3, suffix);
  const x = across(marks, 72, 336);
  const y = (value: number) => scale.place(value, 150, 24);
  const last = marks.length - 1;
  const lines: Line[] = [
    ...scale.ticks.map((tick): Line => [40, y(tick), 408, y(tick)]),
    ...segments(marks).map((step): Line => [x(step.at), y(step.from), x(step.at + 1), y(step.to)]),
  ];
  return (
    <svg viewBox="0 0 408 180" width="100%" role="img" aria-label={label} className="block">
      {scale.ticks.map((tick) => (
        <g key={tick}>
          <line x1="40" x2="408" y1={y(tick)} y2={y(tick)} className={GRID} />
          <text data-tick="" x="0" y={y(tick) + 4} className={TICK}>
            {scale.label(tick)}
          </text>
        </g>
      ))}
      {segments(marks).map((segment) => (
        <line
          key={segment.label}
          data-segment=""
          x1={x(segment.at)}
          y1={y(segment.from)}
          x2={x(segment.at + 1)}
          y2={y(segment.to)}
          strokeWidth="2"
          className={segment.at + 1 === last ? STROKE[ink(tone)] : "stroke-chart-3"}
        />
      ))}
      {marks.map((mark, at) => (
        <g key={mark.label}>
          <SlopePoint mark={mark} cx={x(at)} y={y} latest={at === last} tone={tone} lines={lines} />
          <text x={x(at)} y="174" textAnchor="middle" className="fill-text-tertiary text-caption">
            {mark.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

const SLOPE_FRAME = { left: 40, right: 408, top: 0, bottom: 162 };

function SlopePoint({
  mark,
  cx: at,
  y,
  latest,
  tone,
  lines,
}: {
  mark: Slot;
  cx: number;
  y: (value: number) => number;
  latest: boolean;
  tone: MarkTone;
  lines: Line[];
}) {
  if (mark.value === null) return <GapDot cx={at} cy={87} r={5} />;
  const cy = y(mark.value);
  const spot = clearSpot(
    [
      { x: at, y: cy - 13, anchor: "middle" },
      { x: at, y: cy + 22, anchor: "middle" },
      { x: at + 11, y: cy + 4, anchor: "start" },
      { x: at - 11, y: cy + 4, anchor: "end" },
      { x: at, y: cy - 26, anchor: "middle" },
      { x: at, y: cy + 35, anchor: "middle" },
    ],
    mark.text,
    13,
    lines,
    SLOPE_FRAME,
  );
  return (
    <>
      {latest ? (
        <circle cx={at} cy={cy} r="6" className={FILL[ink(tone)]} />
      ) : (
        <circle cx={at} cy={cy} r="5" strokeWidth="2" className={PRIOR_RING} />
      )}
      <text
        x={spot.x}
        y={spot.y}
        textAnchor={spot.anchor}
        className={cx(
          "font-mono text-mono",
          latest ? "fill-text-primary font-medium" : "fill-text-secondary",
        )}
      >
        {mark.text}
      </text>
    </>
  );
}

/** Where a period the module did not supply sits on a series mark: a dashed ring, no level. */
function GapDot({ cx: at, cy, r }: { cx: number; cy: number; r: number }) {
  return (
    <circle
      data-gap=""
      cx={at}
      cy={cy}
      r={r}
      strokeWidth="1.5"
      strokeDasharray="2 2"
      className={GAP_RING}
    />
  );
}

/** One row per period on a shared axis, so each level reads against the same scale. */
export function DotStrip({
  marks,
  tone,
  suffix,
  label,
}: {
  marks: Slot[];
  tone: MarkTone;
  suffix: string;
  label: string;
}) {
  const scale = axis(stated(marks), 4, suffix);
  const x = (value: number) => scale.place(value, 100, 388);
  const y = (at: number) => 36 + at * 46;
  const floor = y(marks.length - 1) + 22;
  const last = marks.length - 1;
  const lines = segments(marks).map((step): Line => [
    x(step.from),
    y(step.at),
    x(step.to),
    y(step.at + 1),
  ]);
  const frame = { left: 96, right: 408, top: 0, bottom: floor };
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
          <text data-tick="" x={x(tick)} y={floor + 18} textAnchor="middle" className={TICK}>
            {scale.label(tick)}
          </text>
        </g>
      ))}
      {segments(marks).map((segment) => (
        <line
          key={segment.label}
          data-segment=""
          x1={x(segment.from)}
          y1={y(segment.at)}
          x2={x(segment.to)}
          y2={y(segment.at + 1)}
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
              "text-caption",
              at === last ? "fill-text-primary font-medium" : "fill-text-secondary",
            )}
          >
            {mark.label}
          </text>
          <StripPoint
            mark={mark}
            x={x}
            cy={y(at)}
            latest={at === last}
            tone={tone}
            lines={lines}
            frame={frame}
          />
        </g>
      ))}
    </svg>
  );
}

function StripPoint({
  mark,
  x,
  cy,
  latest,
  tone,
  lines,
  frame,
}: {
  mark: Slot;
  x: (value: number) => number;
  cy: number;
  latest: boolean;
  tone: MarkTone;
  lines: Line[];
  frame: Frame;
}) {
  if (mark.value === null) return <GapDot cx={106} cy={cy} r={5} />;
  const at = x(mark.value);
  const spot = clearSpot(
    [
      { x: at + 12, y: cy + 4, anchor: "start" },
      { x: at - 12, y: cy + 4, anchor: "end" },
      { x: at, y: cy - 12, anchor: "middle" },
      { x: at, y: cy + 20, anchor: "middle" },
      { x: at + 6, y: cy - 12, anchor: "end" },
      { x: at - 6, y: cy - 12, anchor: "start" },
      { x: at + 6, y: cy + 20, anchor: "end" },
      { x: at - 6, y: cy + 20, anchor: "start" },
    ],
    mark.text,
    12,
    lines,
    frame,
  );
  return (
    <>
      {latest ? (
        <circle cx={at} cy={cy} r="6" className={FILL[ink(tone)]} />
      ) : (
        <circle cx={at} cy={cy} r="5" strokeWidth="2" className={PRIOR_RING} />
      )}
      <text
        x={spot.x}
        y={spot.y}
        textAnchor={spot.anchor}
        className={cx(
          "font-mono text-caption",
          latest ? "fill-text-primary font-medium" : "fill-text-secondary",
        )}
      >
        {mark.text}
      </text>
    </>
  );
}

/** A small unlabelled slope, broken at a gap: direction and steepness only; the figures sit above. */
export function MiniSlope({
  marks,
  tone,
  label,
}: {
  marks: Slot[];
  tone: MarkTone;
  label: string;
}) {
  const values = stated(marks);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const x = across(marks, 8, 176);
  const y = (value: number) => (max === min ? 20 : 34 - ((value - min) / (max - min)) * 28);
  const last = marks.length - 1;
  return (
    <svg viewBox="0 0 184 40" width="100%" role="img" aria-label={label} className="block">
      <line x1="0" x2="184" y1="38" y2="38" className={GRID} />
      {runs(marks).map((run) => (
        <polyline
          key={run[0]?.at}
          data-segment=""
          fill="none"
          strokeWidth="2"
          points={run.map(({ at, value }) => `${String(x(at))},${String(y(value))}`).join(" ")}
          className={STROKE[ink(tone)]}
        />
      ))}
      {marks.map((mark, at) =>
        mark.value === null ? (
          <GapDot key={mark.label} cx={x(at)} cy={20} r={3.5} />
        ) : (
          <circle
            key={mark.label}
            cx={x(at)}
            cy={y(mark.value)}
            r={at === last ? 4 : 3.5}
            strokeWidth={at === last ? undefined : 2}
            className={at === last ? FILL[ink(tone)] : PRIOR_RING}
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
      <text data-tick="" x="8" y="36" className={TICK}>
        {scale.label(ends[0] ?? 0)}
      </text>
      <text data-tick="" x="176" y="36" textAnchor="end" className={TICK}>
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
