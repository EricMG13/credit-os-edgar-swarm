import { Fragment } from "react";
import {
  FORECAST_INPUTS,
  blocked,
  evidencePath,
  withUnit,
  type OutputEntry,
  type PublishedRun,
  type Snapshot,
} from "../../publishedReport";
import type { ReportView } from "../../reportView";
import { ticks } from "../../visuals/visualData";
import { figureSource, moduleSource, type FigureSource } from "./figureData";
import { FigureGap, FigureSourceControl, GapPattern, Key } from "./figureParts";
import { FigureTile } from "./figureTile";
import {
  NoteText,
  ReasonNotes,
  basisNoteList,
  figureText,
  gapReading,
  gapText,
  gapWord,
  plainNotes,
  readerCell,
  type Note,
  type NoteHref,
} from "./notes";
import {
  BULLET,
  PATH,
  bulletGeometry,
  downsidePanels,
  forwardPath,
  headroomTests,
  panelScale,
  pathGeometry,
  type DownsidePanel,
  type HeadroomTest,
} from "./stressData";
import { Figure } from "./Tile";
import { entryLine } from "./traceLine";
import { useFrameWidth } from "./useFrameWidth";

type RowProps = { snapshot: Snapshot; run: PublishedRun; view: ReportView };
type Ready = Extract<FigureSource, { state: "ready" }>;

const shown = (test: HeadroomTest, cell: HeadroomTest["current"]) =>
  cell.value === null ? gapWord(cell.text) : withUnit(figureText(cell.text), test.unit);

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
  const text = gapText(cell);
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
      {test.direction.trim() && (
        <span className="text-caption font-normal text-text-tertiary">
          <NoteText note={{ text: test.direction, line: test.line }} href={href} />
        </span>
      )}
    </li>
  );
}

/** The lead test in words: its value against its threshold, then its direction as the module
 * wrote it, or a link to it where it cites a source. */
function LeadSentence({ test, href }: { test: HeadroomTest; href: NoteHref }) {
  const direction = test.direction.trim();
  const words = direction ? readerCell(direction) : "";
  const figures = `${shown(test, test.current)} against a threshold of ${shown(test, test.threshold)}`;
  return (
    <span className="text-small text-text-secondary">
      {words === null ? (
        <>
          {`${figures}. `}
          <NoteText note={{ text: direction, line: test.line }} href={href} />
        </>
      ) : (
        `${figures}${words ? `. ${words}${/[.!?]$/.test(words) ? "" : "."}` : "."}`
      )}
    </span>
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
          <Figure className="text-metric">{lead.headroom ?? shown(lead, lead.current)}</Figure>
          <span className="text-small text-text-secondary">
            {lead.headroom ? `headroom, ${lead.label}` : lead.label}
          </span>
        </div>
        <LeadSentence test={lead} href={href} />
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
      <ReasonNotes notes={basisNoteList(source.table)} href={href} />
    </>
  );
}

/** The downside figure's layout. A panel is one measure on its own scale; as many sit side by
 * side as the frame holds at `panel` pixels each, the rest below, each row repeating the cases. */
const DOWNSIDE = {
  width: 524,
  names: 120,
  panel: 150,
  gutter: 20,
  head: 22,
  row: 30,
  foot: 20,
  labelRoom: 60,
} as const;

type Downside = NonNullable<ReturnType<typeof downsidePanels>>;

const cellReading = (cell: DownsidePanel["cells"][number] | undefined) =>
  !cell ? "" : cell.value === null ? gapReading(cell.text) : figureText(cell.text);

function downsideReading(cases: Downside["cases"], panels: DownsidePanel[]) {
  return cases
    .map(
      (item, at) =>
        `${item.name}: ${panels.map((panel) => `${panel.measure} ${cellReading(panel.cells[at])}`).join(", ")}`,
    )
    .join(". ");
}

/** The notes under the downside figure: the cases' assumptions, then why a case has no figure. */
function downsideNotes(data: Downside): Note[] {
  const gaps = data.panels.flatMap((panel) =>
    panel.cells.flatMap((cell, at) => {
      const text = cell.value === null ? gapText(cell) : null;
      return text === null
        ? []
        : [
            {
              lead: `${data.cases[at]?.name ?? ""}, ${panel.measure}: `,
              text,
              line: panel.line,
              end: ".",
            },
          ];
    }),
  );
  return [...plainNotes(data.assumptions), ...gaps];
}

/** A panel's scale: its ticks, from zero, and where a value sits across `room` pixels. */
function panelAxis(panel: DownsidePanel, room: number) {
  const scale = ticks(panel.cells.map((cell) => cell.value));
  const low = scale[0]?.value ?? panel.min;
  const top = scale.at(-1)?.value ?? panel.max;
  const { zero, at } = panelScale({ ...panel, min: low, max: top }, room);
  return { zero, at, ticks: scale.map((tick) => ({ label: tick.label, x: at(tick.value) })) };
}

function PanelGap({ x, y, text }: { x: number; y: number; text: string }) {
  return (
    <>
      <rect
        data-gap
        x={x + 0.5}
        y={y + 0.5}
        width="27"
        height="11"
        rx="2"
        fill="url(#downside-gap)"
        strokeDasharray="3 3"
        className="stroke-border-gap"
      />
      <text x={x + 34} y={y + 10} fontSize="11" className="fill-gap-text font-body">
        {gapWord(text)}
      </text>
    </>
  );
}

function PanelBars({
  panel,
  x,
  room,
  rows,
  first,
}: {
  panel: DownsidePanel;
  x: number;
  room: number;
  rows: number;
  first: boolean;
}) {
  const { zero, at, ticks: axis } = panelAxis(panel, room - DOWNSIDE.labelRoom);
  const bottom = DOWNSIDE.head + rows * DOWNSIDE.row;
  return (
    <g data-panel={panel.measure}>
      <text x={x} y="12" fontSize="11" className="fill-text-tertiary font-body">
        {panel.measure}
      </text>
      <line
        x1={x}
        y1={bottom}
        x2={x + room - DOWNSIDE.labelRoom}
        y2={bottom}
        className="stroke-connector"
      />
      {axis.map((tick, at_) => (
        <text
          key={at_}
          x={x + tick.x}
          y={bottom + 14}
          textAnchor="middle"
          fontSize="11"
          className="fill-text-tertiary font-mono"
        >
          {tick.label}
        </text>
      ))}
      <line
        x1={x + zero}
        y1={DOWNSIDE.head}
        x2={x + zero}
        y2={bottom}
        className="stroke-connector"
      />
      {panel.cells.map((cell, row) => {
        const y = DOWNSIDE.head + row * DOWNSIDE.row + 9;
        if (cell.value === null) return <PanelGap key={row} x={x + zero} y={y} text={cell.text} />;
        const end = at(cell.value);
        return (
          <Fragment key={row}>
            <rect
              data-bar={cell.text}
              x={x + Math.min(zero, end)}
              y={y}
              width={Math.max(1, Math.abs(end - zero))}
              height="12"
              rx="2"
              className={first ? "fill-chart-1" : "fill-chart-2"}
            />
            <text
              x={x + Math.max(zero, end) + 6}
              y={y + 10}
              fontSize="11"
              className="fill-text-primary font-mono"
            >
              {figureText(cell.text)}
            </text>
          </Fragment>
        );
      })}
    </g>
  );
}

/** How many panels sit side by side in a frame `width` pixels wide: at least one. */
function perRow(width: number) {
  const room = width - DOWNSIDE.names;
  return Math.max(1, Math.floor((room + DOWNSIDE.gutter) / (DOWNSIDE.panel + DOWNSIDE.gutter)));
}

/** One row of panels, drawn at the frame's own width so it fits and never scrolls. */
function PanelRow({
  cases,
  panels,
  width,
  first,
}: {
  cases: Downside["cases"];
  panels: DownsidePanel[];
  width: number;
  first: number;
}) {
  const room = (width - DOWNSIDE.names - DOWNSIDE.gutter * (panels.length - 1)) / panels.length;
  const height = DOWNSIDE.head + cases.length * DOWNSIDE.row + DOWNSIDE.foot;
  return (
    <svg
      viewBox={`0 0 ${String(width)} ${String(height)}`}
      width="100%"
      role="img"
      aria-label={`Downside scenarios. ${downsideReading(cases, panels)}.`}
    >
      <defs>
        <GapPattern id="downside-gap" />
      </defs>
      {cases.map((item, row) => (
        <text
          key={item.id}
          x="0"
          y={DOWNSIDE.head + row * DOWNSIDE.row + 19}
          fontSize="12"
          className={item.control ? "fill-text-secondary font-body" : "fill-text-primary font-body"}
        >
          {item.name}
        </text>
      ))}
      {panels.map((panel, at) => (
        <PanelBars
          key={at}
          panel={panel}
          x={DOWNSIDE.names + at * (room + DOWNSIDE.gutter)}
          room={room}
          rows={cases.length}
          first={first + at === 0}
        />
      ))}
    </svg>
  );
}

function Downside({
  data,
  untested,
  href,
}: {
  data: Downside | null;
  untested: boolean;
  href: NoteHref;
}) {
  const { frame, measured } = useFrameWidth();
  if (!data)
    return <FigureGap reason="The downside handoff states no stressed metric that can be drawn." />;
  const width = measured === null || measured <= 0 ? DOWNSIDE.width : Math.round(measured);
  const step = perRow(width);
  const rows = Array.from({ length: Math.ceil(data.panels.length / step) }, (_, at) =>
    data.panels.slice(at * step, at * step + step),
  );
  return (
    <>
      {untested && <Key tone="gap">Limit not tested</Key>}
      <div ref={frame} className="flex min-w-0 flex-col gap-4">
        {rows.map((panels, at) => (
          <PanelRow key={at} cases={data.cases} panels={panels} width={width} first={at * step} />
        ))}
      </div>
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
      <Figure className="text-metric">{last.display}</Figure>
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

/** The downside tile's data, and whether the covenant limit could not be tested: the legal
 * module is blocked. */
function downsideSource(view: ReportView) {
  const source = moduleSource(view, "CP-2A", "Downside");
  const data = source.entry && !source.reason ? downsidePanels(source.entry) : null;
  const legal = moduleSource(view, "CP-4", "Legal & covenants").entry;
  const untested = legal !== undefined && blocked(legal);
  return { ...source, data, untested, line: data?.line ?? entryLine(source.entry) };
}

/** Row 5, stress: room to the covenant levels, the downside cases, and where leverage goes. */
export function StressRow({ run, view }: RowProps) {
  const headroom = figureSource(view, "CP-4", "Covenant headroom", "Legal & covenants");
  const downside = downsideSource(view);
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
        basis="Each stressed metric by case, from zero"
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
            untested={downside.untested}
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
