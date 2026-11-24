import { Fragment } from "react";
import {
  withUnit,
  type OutputEntry,
  type PublishedRun,
  type Snapshot,
} from "../../publishedReport";
import type { ReportView } from "../../reportView";
import { basisNotes, figureSource, moduleSource, type FigureSource } from "./figureData";
import {
  FigureGap,
  FigureHead,
  FigureNotes,
  FigureSourceControl,
  GapPattern,
  Key,
} from "./figureParts";
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
import { Figure, Tile } from "./Tile";

type RowProps = { snapshot: Snapshot; run: PublishedRun; view: ReportView };
type Ready = Extract<FigureSource, { state: "ready" }>;

const shown = (test: HeadroomTest, cell: HeadroomTest["current"]) =>
  cell.value === null ? cell.text : withUnit(cell.text, test.unit);

function BulletChart({ test }: { test: HeadroomTest }) {
  const geometry = bulletGeometry(test);
  if (!geometry) return null;
  const { current, threshold } = geometry;
  const low = Math.min(current, threshold);
  const high = Math.max(current, threshold);
  const inside = current - BULLET.left >= 64;
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
        x={BULLET.left}
        y="34"
        width={current - BULLET.left}
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
        x={inside ? BULLET.left + 8 : current + 6}
        y="48.5"
        fontSize="12"
        className={
          inside ? "fill-white font-mono font-medium" : "fill-text-primary font-mono font-medium"
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

/** A further test in one line: its bar against its threshold, or the gap the handoff states. */
function TestRow({ test }: { test: HeadroomTest }) {
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
            Not supplied
          </span>
        )}
      </span>
      {geometry ? (
        <span aria-hidden="true" className="relative block h-2 rounded-ds-full bg-surface-subtle">
          <span
            className="absolute inset-y-0 left-0 rounded-ds-full bg-chart-1"
            style={{ width: `${String(geometry.share.current * 100)}%` }}
          />
          <span
            className="absolute -inset-y-1 w-0.5 bg-text-primary"
            style={{ left: `${String(geometry.share.threshold * 100)}%` }}
          />
        </span>
      ) : (
        <span className="text-caption font-normal text-text-secondary">
          {test.current.reason ?? test.threshold.reason ?? "No value in the handoff"}
        </span>
      )}
      {test.direction && (
        <span className="text-caption font-normal text-text-tertiary">{test.direction}</span>
      )}
    </li>
  );
}

function Headroom({ source }: { source: Ready }) {
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
            {lead.headroom ? `headroom, ${lead.label.toLowerCase()}` : lead.label}
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
          {tests
            .filter((test) => test !== lead)
            .map((test) => (
              <TestRow key={test.label} test={test} />
            ))}
        </ul>
      )}
      <FigureNotes notes={basisNotes(source.table)} />
    </>
  );
}

const DOWNSIDE = { width: 524, head: 26, row: 46, gutter: 24, labelRoom: 64 } as const;
const short = (text: string) => text.split(" (")[0] ?? text;

function PanelBars({
  panel,
  x,
  room,
  first,
}: {
  panel: DownsidePanel;
  x: number;
  room: number;
  first: boolean;
}) {
  const { zero, at } = panelScale(panel, room - DOWNSIDE.labelRoom);
  return (
    <g data-panel={panel.measure}>
      <text x={x} y="12" fontSize="11" className="fill-text-tertiary font-body">
        {panel.measure}
      </text>
      {panel.cells.map((cell, row) => {
        const y = DOWNSIDE.head + row * DOWNSIDE.row + 22;
        const axis = (
          <line x1={x + zero} y1={y - 3} x2={x + zero} y2={y + 15} className="stroke-connector" />
        );
        if (cell.value === null)
          return (
            <Fragment key={row}>
              {axis}
              <rect
                data-gap
                x={x + zero + 0.5}
                y={y + 0.5}
                width="27"
                height="11"
                rx="2"
                fill="url(#downside-gap)"
                strokeDasharray="3 3"
                className="stroke-border-gap"
              />
              <text x={x + zero + 34} y={y + 10} fontSize="11" className="fill-gap-text font-body">
                Not calculated
              </text>
            </Fragment>
          );
        const end = at(cell.value);
        return (
          <Fragment key={row}>
            {axis}
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
              {short(cell.text)}
            </text>
          </Fragment>
        );
      })}
    </g>
  );
}

function Downside({ entry }: { entry: OutputEntry }) {
  const data = downsidePanels(entry);
  if (!data)
    return <FigureGap reason="The downside handoff states no stressed metric that can be drawn." />;
  const { cases, panels } = data;
  const room = (DOWNSIDE.width - DOWNSIDE.gutter * (panels.length - 1)) / panels.length;
  const height = DOWNSIDE.head + cases.length * DOWNSIDE.row + 4;
  const gaps = panels.flatMap((panel) =>
    panel.cells.flatMap((cell, at) =>
      cell.value === null
        ? [`${cases[at]?.name ?? ""}, ${panel.measure}: ${cell.reason ?? "not stated"}.`]
        : [],
    ),
  );
  const reading = cases
    .map(
      (item, at) =>
        `${item.name}: ${panels.map((panel) => `${panel.measure} ${panel.cells[at]?.value === null ? "not calculated" : short(panel.cells[at]?.text ?? "")}`).join(", ")}`,
    )
    .join(". ");
  return (
    <>
      <svg
        viewBox={`0 0 ${String(DOWNSIDE.width)} ${String(height)}`}
        width="100%"
        role="img"
        aria-label={`Downside scenarios. ${reading}.`}
      >
        <defs>
          <GapPattern id="downside-gap" />
        </defs>
        {cases.map((item, row) => (
          <Fragment key={item.id}>
            {row > 0 && (
              <line
                x1="0"
                y1={DOWNSIDE.head + row * DOWNSIDE.row}
                x2={DOWNSIDE.width}
                y2={DOWNSIDE.head + row * DOWNSIDE.row}
                className="stroke-border-hairline"
              />
            )}
            <text
              x="0"
              y={DOWNSIDE.head + row * DOWNSIDE.row + 15}
              fontSize="12"
              className={
                item.control ? "fill-text-secondary font-body" : "fill-text-primary font-body"
              }
            >
              {item.name}
            </text>
          </Fragment>
        ))}
        {panels.map((panel, at) => (
          <PanelBars
            key={panel.measure}
            panel={panel}
            x={at * (room + DOWNSIDE.gutter)}
            room={room}
            first={at === 0}
          />
        ))}
      </svg>
      <FigureNotes notes={[...data.assumptions, ...gaps]} />
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

function ForwardPath({ path }: { path: Path }) {
  const [base, ...others] = path.cases;
  const last = [...(base?.points ?? [])].reverse().find((point) => point.value !== null);
  const gaps = (base?.points ?? [])
    .filter((point) => point.value === null)
    .map((point) => `${point.period}: ${point.reason || "no figure in the model"}.`);
  return (
    <>
      {last && (
        <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
          <Figure className="text-h1 font-medium">{last.display}</Figure>
          <span className="text-small text-text-secondary">by {last.period}</span>
        </div>
      )}
      <PathChart path={path} />
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        {base && <Key tone="primary">{base.group}</Key>}
        {others.map(({ group }) => (
          <Key key={group} tone="secondary">
            {group}
          </Key>
        ))}
      </div>
      <FigureNotes notes={[...gaps, ...path.limits]} />
    </>
  );
}

function forwardSource(view: ReportView) {
  const model = view.models[0];
  if (!model) return { reason: "No forecast model was published for this run." };
  const path = forwardPath(model);
  return path ? { path } : { reason: "The published model states no net leverage by period." };
}

/** Row 5, stress: room to the covenant levels, the downside cases, and where leverage goes. */
export function StressRow({ run, view }: RowProps) {
  const headroom = figureSource(view, "CP-4", "Covenant headroom", "Legal & covenants");
  const downside = moduleSource(view, "CP-2A", "Downside");
  const forward = forwardSource(view);
  const model = moduleSource(view, "CP-2G", "Forward credit model");
  return (
    <>
      <Tile span={4} label="Covenant headroom">
        <FigureHead
          title="Covenant headroom"
          basis="Each test against its threshold"
          source={
            <FigureSourceControl
              folder={run.folder}
              entry={headroom.entry}
              line={headroom.state === "ready" ? headroom.table.line : undefined}
              name="covenant headroom"
            />
          }
        />
        {headroom.state === "ready" ? (
          <Headroom source={headroom} />
        ) : (
          <FigureGap reason={headroom.reason} />
        )}
      </Tile>
      <Tile span={5} label="Downside scenarios">
        <FigureHead
          title="Downside scenarios"
          basis="Each stressed metric by case, from zero"
          source={
            <FigureSourceControl
              folder={run.folder}
              entry={downside.entry}
              name="the downside scenarios"
            />
          }
        />
        {downside.entry && !downside.reason ? (
          <Downside entry={downside.entry} />
        ) : (
          <FigureGap reason={downside.reason ?? ""} />
        )}
      </Tile>
      <Tile span={3} label="Forward path">
        <FigureHead
          title="Forward path"
          basis={forward.path?.measure ?? "Net leverage by forecast period"}
          source={
            <FigureSourceControl folder={run.folder} entry={model.entry} name="the forward path" />
          }
        />
        {forward.path ? <ForwardPath path={forward.path} /> : <FigureGap reason={forward.reason} />}
      </Tile>
    </>
  );
}
