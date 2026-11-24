import { Fragment } from "react";
import {
  FORECAST_INPUTS,
  evidencePath,
  withUnit,
  type OutputEntry,
  type PublishedRun,
  type Snapshot,
} from "../../publishedReport";
import type { ReportView } from "../../reportView";
import { basisNotes, figureSource, moduleSource, type Cell, type FigureSource } from "./figureData";
import { FigureGap, FigureSourceControl, GapPattern, Key } from "./figureParts";
import { FigureTile } from "./figureTile";
import {
  NoteText,
  ReasonNotes,
  gapReading,
  gapWord,
  plainNotes,
  type Note,
  type NoteHref,
} from "./notes";
import {
  BULLET,
  PATH,
  bulletGeometry,
  covenantLimit,
  downsideCases,
  dumbbellScale,
  forwardPath,
  headroomTests,
  pathGeometry,
  type HeadroomTest,
} from "./stressData";
import { Figure } from "./Tile";
import { entryLine } from "./traceLine";
import { scrollRegion, useFrameWidth } from "./useFrameWidth";

type RowProps = { snapshot: Snapshot; run: PublishedRun; view: ReportView };
type Ready = Extract<FigureSource, { state: "ready" }>;

const shown = (test: HeadroomTest, cell: HeadroomTest["current"]) =>
  cell.value === null ? cell.text : withUnit(cell.text, test.unit);

/** Where the current value's label sits: inside a bar long enough to hold it, else past its end. */
function valueLabel(current: number, zero: number) {
  const inside = Math.abs(current - zero) >= 64;
  const left = current < zero;
  const anchor = left ? ("end" as const) : ("start" as const);
  if (inside) return { inside, x: left ? zero - 8 : zero + 8, anchor };
  return { inside, x: left ? current - 6 : current + 6, anchor };
}

function BulletChart({ test }: { test: HeadroomTest }) {
  const geometry = bulletGeometry(test);
  if (!geometry) return null;
  const { current, threshold, zero } = geometry;
  const low = Math.min(current, threshold);
  const high = Math.max(current, threshold);
  const label = valueLabel(current, zero);
  return (
    <svg
      viewBox={`0 0 ${String(BULLET.width)} 100`}
      width="100%"
      role="img"
      aria-label={`${test.label}: ${shown(test, test.current)} against a threshold of ${shown(test, test.threshold)}${test.headroom ? `, headroom ${test.headroom}` : ""}.`}
    >
      {test.headroom && (
        <>
          <text
            x={(low + high) / 2}
            y="16"
            textAnchor="middle"
            fontSize="11"
            className="fill-text-secondary font-body"
          >
            {test.headroom} headroom
          </text>
          <path
            d={`M${String(low)} 30V23H${String(high)}V30`}
            fill="none"
            className="stroke-text-tertiary"
          />
        </>
      )}
      <rect
        x={BULLET.left}
        y="34"
        width={BULLET.right - BULLET.left}
        height="20"
        rx="4"
        className="fill-border-hairline"
      />
      <rect
        data-current
        x={Math.min(zero, current)}
        y="34"
        width={Math.abs(current - zero)}
        height="20"
        rx="4"
        className="fill-chart-1"
      />
      <line
        data-threshold
        x1={threshold}
        y1="28"
        x2={threshold}
        y2="60"
        strokeWidth="2"
        className="stroke-text-primary"
      />
      <text
        x={label.x}
        y="48.5"
        textAnchor={label.anchor}
        fontSize="12"
        className={
          label.inside
            ? "fill-white font-mono font-medium"
            : "fill-text-primary font-mono font-medium"
        }
      >
        {shown(test, test.current)}
      </text>
      <text
        x={threshold}
        y="74"
        textAnchor={threshold > BULLET.right - 24 ? "end" : "middle"}
        fontSize="12"
        className="fill-text-primary font-mono font-medium"
      >
        {shown(test, test.threshold)}
      </text>
      {geometry.ticks.map((tick) => (
        <text
          key={tick.label}
          x={tick.x}
          y="94"
          textAnchor="middle"
          fontSize="11"
          className="fill-text-tertiary font-mono"
        >
          {withUnit(tick.label, test.unit)}
        </text>
      ))}
    </svg>
  );
}

/** The cell a test has no figure for, the current value first. */
const gapCell = (test: HeadroomTest) =>
  test.current.value === null ? test.current : test.threshold;

/** Why a test has no bar: the handoff's reason, or its cell as written when that is all it says. */
function TestGap({ test, href }: { test: HeadroomTest; href: NoteHref }) {
  const cell = gapCell(test);
  const text = cell.reason ?? (gapWord(cell.text) === cell.text.trim() ? null : cell.text);
  if (text === null) return null;
  return (
    <span className="text-caption font-normal text-text-secondary">
      <NoteText note={{ text, line: test.line }} href={href} />
    </span>
  );
}

/** A further test in one line: its bar against its threshold, or the gap the handoff states. */
function TestRow({ test, href }: { test: HeadroomTest; href: NoteHref }) {
  const geometry = bulletGeometry(test);
  return (
    <li className="flex flex-col gap-1.5 border-t border-border-hairline pt-3">
      <span className="flex items-baseline justify-between gap-3 text-small">
        <span className="text-text-primary">{test.label}</span>
        {geometry ? (
          <Figure className="text-small">
            {shown(test, test.current)}
            <span className="text-text-tertiary"> / {shown(test, test.threshold)}</span>
          </Figure>
        ) : (
          <span className="rounded-ds-xs border border-dashed border-border-gap px-1.5 text-caption font-normal text-gap-text">
            {gapWord(gapCell(test).text)}
          </span>
        )}
      </span>
      {geometry ? (
        <span aria-hidden="true" className="relative block h-2 rounded-ds-full bg-surface-subtle">
          <span
            className="absolute inset-y-0 rounded-ds-full bg-chart-1"
            style={{
              left: `${String(Math.min(geometry.share.zero, geometry.share.current) * 100)}%`,
              width: `${String(Math.abs(geometry.share.current - geometry.share.zero) * 100)}%`,
            }}
          />
          <span
            className="absolute -inset-y-1 w-0.5 bg-text-primary"
            style={{ left: `${String(geometry.share.threshold * 100)}%` }}
          />
        </span>
      ) : (
        <TestGap test={test} href={href} />
      )}
      {test.direction && (
        <span className="text-caption font-normal text-text-tertiary">{test.direction}</span>
      )}
    </li>
  );
}

function Headroom({ source, href }: { source: Ready; href: NoteHref }) {
  const tests = headroomTests(source.table, source.descriptor);
  const lead = tests?.find((test) => bulletGeometry(test) !== null);
  if (!tests || !lead)
    return <FigureGap reason="The covenant table states no test with both a level and a value." />;
  return (
    <>
      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <Figure className="text-display font-medium">
            {lead.headroom ?? shown(lead, lead.current)}
          </Figure>
          <span className="text-small text-text-secondary">
            {lead.headroom ? `headroom, ${lead.label}` : lead.label}
          </span>
        </div>
        <span className="text-small text-text-secondary">
          {shown(lead, lead.current)} against a threshold of {shown(lead, lead.threshold)}
          {lead.direction ? `. ${lead.direction}.` : "."}
        </span>
      </div>
      <BulletChart test={lead} />
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <Key tone="primary">Current</Key>
        <span className="flex items-center gap-1.5 text-caption font-normal text-text-secondary">
          <span aria-hidden="true" className="h-2.5 w-0.5 bg-text-primary" />
          Threshold
        </span>
      </div>
      {tests.length > 1 && (
        <ul className="flex flex-col gap-3">
          {/* Labels can repeat, so a test's place is its key. */}
          {tests.map((test, at) =>
            test === lead ? null : <TestRow key={at} test={test} href={href} />,
          )}
        </ul>
      )}
      <ReasonNotes notes={plainNotes(basisNotes(source.table))} href={href} />
    </>
  );
}

/** The figure's columns: case names, the leverage dumbbells, then cover as written. `least` is
 * the narrowest it is drawn: below it the cases keep their type size and the frame scrolls. */
const DOWNSIDE = {
  width: 524,
  head: 26,
  row: 40,
  plot: 150,
  room: 250,
  cover: 444,
  foot: 22,
  least: 460,
} as const;

type Downside = NonNullable<ReturnType<typeof downsideCases>>;
type Limit = ReturnType<typeof covenantLimit>;

const cellReading = (cell: Cell | undefined) =>
  !cell ? "" : cell.value === null ? gapReading(cell.text) : cell.text;

function downsideReading(data: Downside, limit: Limit) {
  const measures = [data.leverage, data.cover].filter((item) => item !== null);
  const cases = data.cases.map(
    (item, at) =>
      `${item.name}: ${measures.map((row) => `${row.measure} ${cellReading(row.cells[at])}`).join(", ")}`,
  );
  return [...cases, ...(limit ? [`Covenant limit ${limit.text}`] : [])].join(". ");
}

/** The notes under the downside figure: each case's assumptions, then why a case has no figure. */
function downsideNotes(data: Downside): Note[] {
  const measures = [data.leverage, data.cover].filter((item) => item !== null);
  const gaps = measures.flatMap((row) =>
    row.cells.flatMap((cell, at) =>
      cell.value === null
        ? [
            {
              lead: `${data.cases[at]?.name ?? ""}, ${row.measure}: `,
              text: cell.reason ?? cell.text,
              line: row.line,
              end: ".",
            },
          ]
        : [],
    ),
  );
  return [...plainNotes(data.assumptions), ...gaps];
}

/** A case with no figure: the gap mark and the module's own word, at the start of its column. */
function GapMark({ x, y, text }: { x: number; y: number; text: string }) {
  return (
    <>
      <rect
        data-gap
        x={x + 0.5}
        y={y - 5.5}
        width="27"
        height="11"
        rx="2"
        fill="url(#downside-gap)"
        strokeDasharray="3 3"
        className="stroke-border-gap"
      />
      <text x={x + 34} y={y + 4} fontSize="11" className="fill-gap-text font-body">
        {gapWord(text)}
      </text>
    </>
  );
}

/** One case's leverage: from the control case's figure to its own, labelled as written. */
function Dumbbell({
  cell,
  from,
  at,
  y,
  name,
}: {
  cell: Cell;
  from: number | null;
  at: (value: number) => number;
  y: number;
  name: string;
}) {
  if (cell.value === null) return <GapMark x={DOWNSIDE.plot} y={y} text={cell.text} />;
  const x = DOWNSIDE.plot + at(cell.value);
  const start = from === null ? null : DOWNSIDE.plot + at(from);
  const right = x > DOWNSIDE.plot + DOWNSIDE.room - 40;
  return (
    <>
      {start !== null && (
        <>
          <line
            data-dumbbell
            x1={start}
            y1={y}
            x2={x}
            y2={y}
            strokeWidth="2"
            className="stroke-chart-1"
          />
          <circle
            cx={start}
            cy={y}
            r="3.5"
            strokeWidth="1.5"
            className="fill-surface-card stroke-chart-1"
          />
        </>
      )}
      <circle data-dot={name} cx={x} cy={y} r="5" className="fill-chart-1" />
      <text
        x={right ? x - 9 : x + 9}
        y={y - 8}
        textAnchor={right ? "end" : "start"}
        fontSize="11"
        className="fill-text-primary font-mono"
      >
        {cell.text}
      </text>
    </>
  );
}

function LimitLine({ x, bottom, limit }: { x: number; bottom: number; limit: NonNullable<Limit> }) {
  return (
    <>
      <line
        data-limit
        x1={x}
        y1={DOWNSIDE.head - 6}
        x2={x}
        y2={bottom}
        strokeWidth="1.5"
        strokeDasharray="4 3"
        className="stroke-text-primary"
      />
      <text
        x={x}
        y={bottom + 14}
        textAnchor="middle"
        fontSize="11"
        className="fill-text-secondary font-body"
      >
        Covenant limit {limit.text}
      </text>
    </>
  );
}

function CaseRow({
  data,
  row,
  at,
}: {
  data: Downside;
  row: number;
  at: (value: number) => number;
}) {
  const item = data.cases[row];
  const y = DOWNSIDE.head + row * DOWNSIDE.row + DOWNSIDE.row / 2;
  const control = data.cases.findIndex((entry) => entry.control);
  const lever = data.leverage?.cells[row];
  const from = row === control ? null : (data.leverage?.cells[control]?.value ?? null);
  const cover = data.cover?.cells[row];
  return (
    <>
      {row > 0 && (
        <line
          x1="0"
          y1={y - DOWNSIDE.row / 2}
          x2={DOWNSIDE.width}
          y2={y - DOWNSIDE.row / 2}
          className="stroke-border-hairline"
        />
      )}
      <text
        x="0"
        y={y + 4}
        fontSize="12"
        className={item?.control ? "fill-text-secondary font-body" : "fill-text-primary font-body"}
      >
        {item?.name}
      </text>
      {lever && <Dumbbell cell={lever} from={from} at={at} y={y} name={item?.name ?? ""} />}
      {cover &&
        (cover.value === null ? (
          <GapMark x={DOWNSIDE.cover} y={y} text={cover.text} />
        ) : (
          <text
            x={DOWNSIDE.width}
            y={y + 4}
            textAnchor="end"
            fontSize="12"
            className="fill-text-primary font-mono"
          >
            {cover.text}
          </text>
        ))}
    </>
  );
}

function DownsideFigure({ data, limit }: { data: Downside; limit: Limit }) {
  const { frame, measured } = useFrameWidth();
  const scrolls = measured !== null && measured < DOWNSIDE.least;
  const bottom = DOWNSIDE.head + data.cases.length * DOWNSIDE.row;
  const height = bottom + DOWNSIDE.foot;
  const at = dumbbellScale(data.leverage?.cells ?? [], limit?.value ?? null, DOWNSIDE.room);
  return (
    // On a phone the cases keep their type size and the figure scrolls sideways in its tile.
    <div
      ref={frame}
      className="-mx-1 overflow-x-auto rounded-ds-sm px-1 outline-focus-ring focus-visible:outline-2"
      {...scrollRegion(scrolls, "Downside scenarios figure, scrolls sideways")}
    >
      <svg
        viewBox={`0 0 ${String(DOWNSIDE.width)} ${String(height)}`}
        width={scrolls ? DOWNSIDE.least : "100%"}
        role="img"
        aria-label={`Downside scenarios. ${downsideReading(data, limit)}.`}
      >
        <defs>
          <GapPattern id="downside-gap" />
        </defs>
        <text x={DOWNSIDE.plot} y="12" fontSize="11" className="fill-text-tertiary font-body">
          {data.leverage?.measure ?? "No stressed net leverage in the handoff"}
        </text>
        {data.cover && (
          <text
            x={DOWNSIDE.width}
            y="12"
            textAnchor="end"
            fontSize="11"
            className="fill-text-tertiary font-body"
          >
            {data.cover.measure}
          </text>
        )}
        {limit && <LimitLine x={DOWNSIDE.plot + at(limit.value)} bottom={bottom} limit={limit} />}
        {data.cases.map((item, row) => (
          <CaseRow key={item.id} data={data} row={row} at={at} />
        ))}
      </svg>
    </div>
  );
}

function Downside({ data, limit, href }: { data: Downside | null; limit: Limit; href: NoteHref }) {
  if (!data)
    return <FigureGap reason="The downside handoff states no stressed leverage or cover." />;
  return (
    <>
      <DownsideFigure data={data} limit={limit} />
      <ReasonNotes notes={downsideNotes(data)} href={href} />
    </>
  );
}

type Path = NonNullable<ReturnType<typeof forwardPath>>;

function PathChart({ path }: { path: Path }) {
  const geometry = pathGeometry(path.cases);
  const [base = [], ...others] = geometry.lines;
  const missing = geometry.periods.filter(({ period }) =>
    base.some((point) => point.period === period && point.y === null),
  );
  const segments = (line: typeof base) =>
    line.flatMap((point, at) => {
      const next = line[at + 1];
      return point.y !== null && next?.y != null
        ? [{ x1: point.x, y1: point.y, x2: next.x, y2: next.y, key: point.period }]
        : [];
    });
  const reading = path.cases
    .map(
      ({ group, points }) =>
        `${group}: ${points.map((point) => `${point.period} ${point.value === null ? "no figure" : point.display}`).join(", ")}`,
    )
    .join(". ");
  return (
    <svg
      viewBox={`0 0 ${String(PATH.width)} ${String(PATH.height)}`}
      width="100%"
      role="img"
      aria-label={`${path.measure}. ${reading}.`}
    >
      <defs>
        <GapPattern id="path-gap" />
      </defs>
      {geometry.ticks.map((tick) => (
        <Fragment key={tick.label}>
          <line
            x1={PATH.left}
            y1={tick.y}
            x2={PATH.width}
            y2={tick.y}
            className="stroke-border-hairline"
          />
          <text x="0" y={tick.y + 4} fontSize="11" className="fill-text-tertiary font-mono">
            {tick.label}x
          </text>
        </Fragment>
      ))}
      {missing.map(({ period, x }) => (
        <rect
          key={period}
          data-gap={period}
          x={x - 17.5}
          y={PATH.top - 6}
          width="35"
          height={PATH.base - PATH.top + 12}
          rx="4"
          fill="url(#path-gap)"
          strokeDasharray="3 3"
          className="stroke-border-gap"
        />
      ))}
      {others.flatMap((line, at) =>
        segments(line).map((segment) => (
          <line
            key={`${String(at)}-${segment.key}`}
            data-case-line
            x1={segment.x1}
            y1={segment.y1}
            x2={segment.x2}
            y2={segment.y2}
            strokeWidth="2"
            strokeDasharray="4 3"
            className="stroke-chart-2"
          />
        )),
      )}
      {others.flatMap((line, at) =>
        line.flatMap((point) =>
          point.y === null
            ? []
            : [
                <circle
                  key={`${String(at)}-${point.period}`}
                  cx={point.x}
                  cy={point.y}
                  r="3.5"
                  strokeWidth="2"
                  className="fill-surface-card stroke-chart-2"
                />,
              ],
        ),
      )}
      {segments(base).map((segment) => (
        <line
          key={segment.key}
          data-base-line
          x1={segment.x1}
          y1={segment.y1}
          x2={segment.x2}
          y2={segment.y2}
          strokeWidth="2"
          className="stroke-chart-1"
        />
      ))}
      {base.flatMap((point) =>
        point.y === null
          ? []
          : [
              <Fragment key={point.period}>
                <circle
                  data-point={point.period}
                  cx={point.x}
                  cy={point.y}
                  r="5"
                  className="fill-chart-1"
                />
                <text
                  x={point.x}
                  y={point.y + 20}
                  textAnchor="middle"
                  fontSize="12"
                  className="fill-text-primary font-mono"
                >
                  {point.display}
                </text>
              </Fragment>,
            ],
      )}
      {geometry.periods.map(({ period, x }) => (
        <text
          key={period}
          x={x}
          y={PATH.height - 12}
          textAnchor="middle"
          fontSize="11"
          className="fill-text-tertiary font-body"
        >
          {period}
        </text>
      ))}
    </svg>
  );
}

/** The headline: the base case's last figure, named by its case; or why there is none. */
function PathHeadline({ path }: { path: Path }) {
  const base = path.based ? path.cases[0] : undefined;
  const last = [...(base?.points ?? [])].reverse().find((point) => point.value !== null);
  if (!base || !last)
    return path.unbased ? (
      <span className="text-small text-text-secondary">{path.unbased}</span>
    ) : null;
  return (
    <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
      <Figure className="text-h1 font-medium">{last.display}</Figure>
      <span className="text-small text-text-secondary">
        {base.group}, by {last.period}
      </span>
    </div>
  );
}

function ForwardPath({ path, href }: { path: Path; href: NoteHref }) {
  const [first, ...others] = path.cases;
  const gaps = (first?.points ?? [])
    .filter((point) => point.value === null)
    .map((point) => ({
      lead: `${point.period}: `,
      text: point.reason || "no figure in the model",
      end: ".",
    }));
  return (
    <>
      <PathHeadline path={path} />
      <PathChart path={path} />
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        {first && <Key tone="primary">{first.group}</Key>}
        {others.map(({ group }) => (
          <Key key={group} tone="secondary">
            {group}
          </Key>
        ))}
      </div>
      <ReasonNotes notes={[...gaps, ...plainNotes(path.limits)]} href={href} />
    </>
  );
}

function forwardSource(view: ReportView) {
  const model = view.models[0];
  if (!model) return { reason: "No forecast model was published for this run." };
  const path = forwardPath(model);
  return path ? { path } : { reason: "The published model states no net leverage by period." };
}

/** Where a tile's reasons are read in Evidence: the handoff line, or the tile's own; none when
 * the module did not run. */
const hrefOf =
  (folder: string, entry: OutputEntry | undefined, fallback?: number): NoteHref =>
  (line) =>
    entry && evidencePath(folder, entry, line ?? fallback);

/** The downside tile's data: the cases, and the covenant limit for its leverage measure. */
function downsideSource(view: ReportView, headroom: FigureSource) {
  const source = moduleSource(view, "CP-2A", "Downside");
  const data = source.entry && !source.reason ? downsideCases(source.entry) : null;
  const tests =
    headroom.state === "ready" ? headroomTests(headroom.table, headroom.descriptor) : null;
  const limit = data?.leverage ? covenantLimit(tests, data.leverage.measure) : null;
  return { ...source, data, limit, line: data?.line ?? entryLine(source.entry) };
}

/** Row 5, stress: room to the covenant levels, the downside cases, and where leverage goes. */
export function StressRow({ run, view }: RowProps) {
  const headroom = figureSource(view, "CP-4", "Covenant headroom", "Legal & covenants");
  const downside = downsideSource(view, headroom);
  const forward = forwardSource(view);
  const model = moduleSource(view, "CP-2G", "Forward credit model");
  const headroomLine = headroom.state === "ready" ? headroom.table.line : entryLine(headroom.entry);
  return (
    <>
      <FigureTile
        span={4}
        title="Covenant headroom"
        basis="Each test against its threshold"
        trace={
          <FigureSourceControl
            folder={run.folder}
            entry={headroom.entry}
            line={headroomLine}
            name="covenant headroom"
          />
        }
      >
        {headroom.state === "ready" ? (
          <Headroom source={headroom} href={hrefOf(run.folder, headroom.entry, headroomLine)} />
        ) : (
          <FigureGap reason={headroom.reason} />
        )}
      </FigureTile>
      <FigureTile
        span={5}
        title="Downside scenarios"
        basis={`Net leverage by case from the control case${downside.limit ? ", against the covenant limit" : ""}; cover beside it`}
        trace={
          <FigureSourceControl
            folder={run.folder}
            entry={downside.entry}
            line={downside.line}
            name="the downside scenarios"
          />
        }
      >
        {downside.entry && !downside.reason ? (
          <Downside
            data={downside.data}
            limit={downside.limit}
            href={hrefOf(run.folder, downside.entry, downside.line)}
          />
        ) : (
          <FigureGap reason={downside.reason ?? ""} />
        )}
      </FigureTile>
      <FigureTile
        span={3}
        title="Forward path"
        basis={forward.path?.measure ?? "Net leverage by forecast period"}
        trace={
          <FigureSourceControl
            folder={run.folder}
            entry={model.entry}
            line={entryLine(model.entry, FORECAST_INPUTS)}
            name="the forward path"
          />
        }
      >
        {forward.path ? (
          <ForwardPath path={forward.path} href={hrefOf(run.folder, model.entry)} />
        ) : (
          <FigureGap reason={forward.reason} />
        )}
      </FigureTile>
    </>
  );
}
