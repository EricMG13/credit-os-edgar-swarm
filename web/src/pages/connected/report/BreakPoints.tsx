import { useState, type ReactNode } from "react";
import { Segmented } from "@/components/kit/Segmented";
import { containsReference, type OutputEntry, type Table } from "../publishedReport";
import { namedTable } from "../reportView";
import { distinct, sharePosition } from "../visuals/visualData";
import { canReadDownside, scenarioShareLabel, share, writtenTable } from "./Downside";
import { Key } from "./overview/figureParts";
import { Bento } from "./overview/Tile";
import { LeadFigure, Trace } from "./leads/parts";

const RETAINED = "T2DS.6 Break points";
const RANKINGS = ["T2B.7 First-break ranking", "First-break ranking"];
const FIXED_INTEREST = "EBITDA decline at break (interest held)";
const RATES_COLUMN = /^EBITDA decline at break \(k = (0(?:\.\d+)?|1(?:\.0+)?)\)$/;
const REQUIRED_DECLINE = "Required EBITDA decline";

type Basis = { name: string; column: number };

export function breakPointView(entry: OutputEntry) {
  if (!canReadDownside(entry)) return null;
  const retained = namedTable(entry, RETAINED, [
    "Break ID",
    "Break",
    FIXED_INTEREST,
    "Status",
    "Source",
  ]);
  if (retained?.rows.length) {
    const [id, test, held, shocked, status, source] = retained.headers;
    const rate = RATES_COLUMN.exec(shocked ?? "")?.[1];
    const bases: Basis[] =
      id === "Break ID" &&
      test === "Break" &&
      held === FIXED_INTEREST &&
      rate !== undefined &&
      status === "Status" &&
      source === "Source" &&
      retained.headers.length === 6
        ? [
            { name: "Interest held", column: 2 },
            { name: `Cash-interest increase ${scenarioShareLabel(rate)}`, column: 3 },
          ]
        : [];
    return { table: retained, bases, test: 1, status: 4, ranked: false };
  }
  const ranked = RANKINGS.map((title) =>
    namedTable(entry, title, ["Break point", REQUIRED_DECLINE]),
  ).filter(Boolean);
  const ranking = ranked.length === 1 ? ranked[0] : undefined;
  if (!ranking?.rows.length) return null;
  const test = ranking.headers.indexOf("Break point");
  const column = ranking.headers.indexOf(REQUIRED_DECLINE);
  const compatible =
    ranking.headers.join("|") === `Break point|${REQUIRED_DECLINE}` ||
    ranking.headers.join("|") === `Rank|Break point|${REQUIRED_DECLINE}`;
  const bases = compatible ? [{ name: REQUIRED_DECLINE, column }] : [];
  return { table: ranking, bases, test, status: undefined, ranked: true };
}

function threshold(text: string) {
  const percent = /^(\d+(?:\.\d+)?)%$/.exec(text);
  const value = Number(percent?.[1]);
  return percent ? (value <= 100 ? value / 100 : null) : sharePosition(text);
}

function publicText(text: string) {
  return containsReference(text) ? "In Evidence" : text;
}

/** The table's rows as written; only a module-written first-break ranking is ordered by decline. */
function breakRows(table: Table, basis: Basis, test: number, ranked: boolean, status?: number) {
  const rows = table.rows.map(({ line, cells }) => {
    const text = cells[basis.column] ?? "";
    return {
      line,
      label: publicText(cells[test] ?? ""),
      text: publicText(scenarioShareLabel(text)),
      status: status === undefined ? null : publicText(cells[status] ?? ""),
      value: threshold(text),
    };
  });
  return ranked
    ? rows.sort(
        (first, second) =>
          (first.value ?? Infinity) - (second.value ?? Infinity) || first.line - second.line,
      )
    : rows;
}

export type Rung = {
  key: number;
  label: string;
  /** A caption under the label: the row's status as written. */
  detail?: string | null;
  /** Where the bar ends, as a share of the axis; null draws `words` in its place, never a bar. */
  at: number | null;
  words?: string;
  /** The value column: the figure as written. */
  figure: ReactNode;
  bar?: Record<string, string>;
  /** A second stated value on the same row, drawn as a tick (after hedges). */
  mark?: { at: number; data: Record<string, string> } | null;
};

const ROW =
  "grid grid-cols-[minmax(5rem,1fr)_minmax(0,auto)] items-center gap-x-3 gap-y-1 @md:grid-cols-[minmax(0,11rem)_minmax(0,1fr)_9.5rem]";

function Track({ rung, ticks }: { rung: Rung; ticks: readonly { at: number }[] }) {
  return (
    <span className="relative col-span-2 h-5 @md:order-2 @md:col-span-1">
      {ticks.map((tick) => (
        <span
          key={tick.at}
          className={`absolute inset-y-0 w-px ${tick.at === 0 ? "bg-connector" : "bg-border-hairline"}`}
          style={{ left: share(tick.at) }}
        />
      ))}
      <span
        {...rung.bar}
        className="absolute top-1 h-3 min-w-0.5 rounded-[2px] bg-chart-1"
        style={{ left: "0%", width: share(rung.at ?? 0) }}
      />
      {rung.mark && (
        <span
          {...rung.mark.data}
          className="absolute -top-0.5 h-6 w-0.5 -translate-x-1/2 bg-text-primary"
          style={{ left: share(rung.mark.at) }}
        />
      )}
    </span>
  );
}

/**
 * Rows on one axis from zero: each row's label, a bar to its stated value and the value as written.
 * A row whose value is not a number keeps its words and draws no bar. `ticks` are axis shares.
 */
export function Ladder({
  label,
  rungs,
  ticks,
  ordered = false,
}: {
  label: string;
  rungs: readonly Rung[];
  ticks: readonly { at: number; label: string }[];
  ordered?: boolean;
}) {
  const List = ordered ? "ol" : "ul";
  return (
    <div role="img" aria-label={label} className="@container flex min-w-0 flex-col gap-1">
      <List aria-hidden="true" className="flex flex-col">
        {rungs.map((rung) => (
          <li
            key={rung.key}
            className={`${ROW} border-t border-border-hairline py-2 first:border-t-0`}
          >
            <span className="flex min-w-0 flex-col gap-0.5">
              <span className="text-small wrap-anywhere text-text-primary">{rung.label}</span>
              {rung.detail && (
                <span className="text-caption wrap-anywhere text-text-tertiary">{rung.detail}</span>
              )}
            </span>
            <span className="text-right font-mono text-small wrap-anywhere text-text-primary tabular-nums @md:order-3">
              {rung.figure}
            </span>
            {rung.at === null ? (
              <span className="col-span-2 text-small wrap-anywhere text-gap-text @md:order-2 @md:col-span-1">
                {rung.words}
              </span>
            ) : (
              <Track rung={rung} ticks={ticks} />
            )}
          </li>
        ))}
      </List>
      <div aria-hidden="true" className={ROW}>
        <span className="hidden @md:block" />
        <span className="relative col-span-2 h-4 @md:col-span-1">
          {ticks.map((tick, index) => (
            <span
              key={tick.at}
              className={`absolute font-mono text-[11px] text-text-tertiary tabular-nums ${
                index === 0
                  ? ""
                  : index === ticks.length - 1
                    ? "-translate-x-full"
                    : "-translate-x-1/2"
              }`}
              style={{ left: share(tick.at) }}
            >
              {tick.label}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}

const DECLINE_TICKS = [0, 0.25, 0.5, 0.75, 1].map((at) => ({ at, label: `${String(at * 100)}%` }));
const TITLE = "EBITDA break points";

type Data = NonNullable<ReturnType<typeof breakPointView>>;

/** CP-2A's break-point ladder: the fall in EBITDA that reaches each break, as the module states it. */
export function BreakPointsTile({
  data,
  href,
  span,
}: {
  data: Data;
  href: (line: number) => string;
  span: 4 | 6 | 8 | 12;
}) {
  const [index, setIndex] = useState(0);
  const basis = data.bases[index];
  const rows = basis ? breakRows(data.table, basis, data.test, data.ranked, data.status) : [];
  const chart = Boolean(
    basis && rows.some(({ value }) => value !== null) && distinct(rows.map(({ label }) => label)),
  );
  const choice =
    data.bases.length > 1 ? (
      <Segmented
        label="Cash-interest basis"
        segments={data.bases.map(({ name }, at) => ({ key: String(at), label: name }))}
        current={String(index)}
        onSelect={(key) => {
          setIndex(Number(key));
        }}
      />
    ) : undefined;
  const reading = rows
    .map(({ label, text, value }) => `${label} ${value === null ? text || "not stated" : text}`)
    .join(", ");
  return (
    <LeadFigure
      span={span}
      label={TITLE}
      kicker="Break-point ladder"
      title="Fall in EBITDA that reaches each break point"
      basis={basis ? `${basis.name}. Bars run from no fall to a 100% fall in EBITDA.` : undefined}
      legend={
        <>
          {choice}
          {chart && <Key tone="primary">Fall in EBITDA at the break</Key>}
        </>
      }
      trace={<Trace href={href(data.table.line)} name={TITLE} />}
      figure={
        chart ? (
          <Ladder
            label={`${TITLE}${basis ? `, ${basis.name.toLowerCase()}` : ""}: ${reading}.`}
            ordered={data.ranked}
            ticks={DECLINE_TICKS}
            rungs={rows.map((row) => ({
              key: row.line,
              label: row.label,
              detail: row.status,
              at: row.value,
              words: row.text || "Not stated",
              figure: row.value === null ? "" : row.text,
              bar: row.value === null ? undefined : { "data-decline": String(row.value) },
            }))}
          />
        ) : (
          <p role="note" className="text-small text-text-secondary">
            The source table does not establish a comparable ranking for this basis.
          </p>
        )
      }
      table={
        chart
          ? {
              head:
                data.status === undefined
                  ? ["Break point", REQUIRED_DECLINE]
                  : ["Break point", REQUIRED_DECLINE, "Qualification"],
              rows: rows.map(({ line, label, status, text }) => ({
                label,
                cells: data.status === undefined ? [text || null] : [text || null, status || null],
                end: <Trace href={href(line)} name={label} />,
              })),
              endHeading: "Source",
            }
          : writtenTable(data.table, href)
      }
    />
  );
}

export function BreakPoints({ data, href }: { data: Data; href: (line: number) => string }) {
  return (
    <Bento>
      <BreakPointsTile data={data} href={href} span={12} />
    </Bento>
  );
}
