import { useState, type ReactNode } from "react";
import { cx } from "@/utils/cx";
import {
  blocked,
  containsReference,
  displayColumns,
  type OutputEntry,
  type Row,
  type Table,
  unitLabel,
} from "../publishedReport";
import { namedTable } from "../reportView";
import { amount, distinct, sharePosition } from "../visuals/visualData";
import { Segmented } from "@/components/kit/Segmented";
import { Key } from "./overview/figureParts";
import { Bento } from "./overview/Tile";
import { LeadFigure, Trace, type LeadTable } from "./leads/parts";
import { readerCell } from "./leads/read";
const SCENARIOS = [
  "Scenario ID",
  "Name",
  "EBITDA decline s",
  "Cash-interest increase k",
  "Anchor",
  "What the assumption leaves out",
  "Category",
  "Confidence",
];
const RESULTS = "T2DS.4 Stressed flows and metrics";

function scenario({ line, cells }: Row) {
  const [
    id = "",
    name = "",
    decline = "",
    interest = "",
    anchor = "",
    scope = "",
    category = "",
    confidence = "",
  ] = cells;
  return { line, id, name, decline, interest, anchor, scope, category, confidence };
}

export function canReadDownside(entry: OutputEntry) {
  return (
    entry.output.module === "CP-2A" &&
    entry.output.state?.established !== false &&
    !blocked(entry) &&
    !entry.output.parseError
  );
}

export function downsideView(entry: OutputEntry) {
  if (!canReadDownside(entry)) return null;
  const matrix = namedTable(entry, RESULTS, ["Metric", "Source"]);
  if (!matrix?.rows.length || matrix.headers[0] !== "Metric" || matrix.headers.at(-1) !== "Source")
    return null;
  const names = matrix.headers.slice(1, -1);
  const register = namedTable(entry, "T2DS.1 Scenarios", SCENARIOS);
  const cases =
    register?.headers.join("|") === SCENARIOS.join("|") ? register.rows.map(scenario) : [];
  const control = cases.filter(
    ({ decline, interest }) => sharePosition(decline) === 0 && sharePosition(interest) === 0,
  );
  const consistent =
    cases.length > 1 &&
    distinct(cases.map(({ id }) => id)) &&
    distinct(cases.map(({ name }) => name)) &&
    distinct(names) &&
    names.length === cases.length &&
    cases.every(
      ({ id, name, decline, interest }) =>
        names.includes(id) &&
        !containsReference(name) &&
        sharePosition(decline) !== null &&
        sharePosition(interest) !== null,
    ) &&
    control.length === 1;
  return { matrix, control: consistent ? control[0] : undefined, cases: consistent ? cases : [] };
}

/** A stressed measure's cell as a number on the measure's stated unit; null when it does not read. */
export function position(measure: string, cell: string) {
  const unit = /\(([A-Z]{3}) millions\)$/.exec(measure)?.[1];
  if (!unit && !/\((?:x|%)\)$/.test(measure)) return null;
  const numeric = cell.replaceAll("−", "-");
  const direct = amount(numeric);
  if (direct !== null) return direct;
  if (!unit) return null;
  const match = /^(-?\d[\d,]*(?:\.\d+)?) \((-?)([A-Z]{3}) (\d[\d,]*(?:\.\d+)?) million\)$/.exec(
    numeric,
  );
  if (!match || match[3] !== unit) return null;
  const exact = amount(match[1] ?? "");
  const rounded = amount(`${match[2] ?? ""}${match[4] ?? ""}`);
  return exact !== null && rounded !== null && Math.abs(exact - rounded) <= 0.005000001
    ? exact
    : null;
}

function readerDetail(value: string) {
  return containsReference(value) ? "See the scenario evidence." : value;
}

/** The same recorded share in percent, moving its decimal point without rounding its digits. */
export function scenarioShareLabel(text: string) {
  if (sharePosition(text) === null) return text;
  const stated = /\((\d+(?:\.\d+)?%)\)$/.exec(text)?.[1];
  if (stated) return stated;
  const [whole, fraction = ""] = text.split(".");
  const digits = fraction.padEnd(2, "0");
  const integer = whole === "1" ? "100" : String(Number(digits.slice(0, 2)));
  const remainder = digits.slice(2).replace(/0+$/, "");
  return `${integer}${remainder ? `.${remainder}` : ""}%`;
}

/** A share of an axis as a CSS length, rounded only past the sixth decimal of a percent. */
export const share = (at: number) => `${String(Number((at * 100).toFixed(6)))}%`;

/**
 * A module table as written for a table view: its reader columns only (source and inter-module
 * columns go to the trace), each cell as a working page shows it, one trace per row.
 */
export function writtenTable(table: Table, href: (line: number) => string): LeadTable | undefined {
  const columns = displayColumns(table.headers, false, table.rows);
  const [first, ...rest] = columns;
  if (first === undefined || !table.rows.length) return undefined;
  const cell = (text: string | undefined) => (text?.trim() ? readerCell(text) : null);
  return {
    head: columns.map((at) => readerCell(table.headers[at] ?? "")),
    rows: table.rows.map(({ line, cells }) => {
      const label = cell(cells[first]) ?? "Not stated";
      return {
        label,
        cells: rest.map((at) => cell(cells[at])),
        end: <Trace href={href(line)} name={label} />,
      };
    }),
    endHeading: "Source",
  };
}

export type CaseRole = "control" | "chosen" | "other";
export type MultiplePanel = { measure: string; bars: { text: string; value: number }[] };

const BAR_TONE = { control: "bg-chart-3", chosen: "bg-chart-1", other: "bg-chart-2" } as const;

function PanelRows({
  panel,
  cases,
}: {
  panel: MultiplePanel;
  cases: readonly { name: string; role: CaseRole }[];
}) {
  const values = panel.bars.map(({ value }) => value);
  const min = Math.min(0, ...values);
  const max = Math.max(0, ...values);
  const span = max - min || 1;
  const at = (value: number) => (value - min) / span;
  const zero = at(0);
  return (
    <div className="flex min-w-0 flex-col gap-2">
      <h4 className="text-caption font-medium wrap-anywhere text-text-secondary">
        {panel.measure}
      </h4>
      <ul className="flex flex-col gap-2">
        {panel.bars.map((bar, index) => {
          const item = cases[index];
          const end = at(bar.value);
          return (
            <li key={index} className="flex min-w-0 flex-col gap-1">
              <span className="flex items-baseline justify-between gap-3">
                <span className="min-w-0 text-caption wrap-anywhere text-text-secondary">
                  {item?.name}
                  {item?.role === "control" && (
                    <span className="ml-1.5 rounded-ds-xs border border-border-hairline px-1 text-text-tertiary">
                      control
                    </span>
                  )}
                </span>
                <span className="text-right font-mono text-small wrap-anywhere text-text-primary tabular-nums">
                  {bar.text}
                </span>
              </span>
              <span className="relative h-3">
                <span
                  className="absolute inset-y-0 w-px bg-connector"
                  style={{ left: share(zero) }}
                />
                <span
                  data-bar={bar.text}
                  className={cx(
                    "absolute top-0.5 h-2 min-w-0.5 rounded-[2px]",
                    BAR_TONE[item?.role ?? "other"],
                  )}
                  style={{ left: share(Math.min(zero, end)), width: share(Math.abs(end - zero)) }}
                />
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/**
 * Few cases across a few measures: one panel a measure, every case a bar on that measure's own
 * scale from zero, each value as written. The control and the chosen case are named in words.
 */
export function SmallMultiples({
  label,
  cases,
  panels,
}: {
  label: string;
  cases: readonly { name: string; role: CaseRole }[];
  panels: readonly MultiplePanel[];
}) {
  const reading = panels
    .map(
      (panel) =>
        `${panel.measure}: ${panel.bars
          .map((bar, at) => {
            const item = cases[at];
            return `${item?.name ?? ""}${item?.role === "control" ? " (control)" : ""} ${bar.text}`;
          })
          .join(", ")}`,
    )
    .join(". ");
  return (
    <div role="img" aria-label={`${label}. ${reading}.`} className="@container min-w-0">
      <div
        aria-hidden="true"
        className="grid grid-cols-1 gap-x-6 gap-y-5 @lg:grid-cols-2 @3xl:grid-cols-3"
      >
        {panels.map((panel) => (
          <PanelRows key={panel.measure} panel={panel} cases={cases} />
        ))}
      </div>
    </div>
  );
}

type View = NonNullable<ReturnType<typeof downsideView>>;
type Case = View["cases"][number];

const measureName = (measure: string) =>
  measure.replace(
    /\(([A-Z]{3}) millions\)$/,
    (_, code: string) => `(${unitLabel(`${code} millions`)})`,
  );

const NOT_STATED = /^Not (?:supplied|calculated|calculable|stated)\b/i;

/** Each measure of the results, placed when every case's cell reads on the measure's own unit. */
function casePanels(matrix: Table, cases: readonly Case[]) {
  const columns = cases.map(({ id }) => matrix.headers.indexOf(id));
  const measures = matrix.rows.map(({ cells }) => cells[0] ?? "");
  const placed: MultiplePanel[] = [];
  const unplaced: string[] = [];
  if (!distinct(measures)) return { placed, unplaced };
  for (const { cells } of matrix.rows) {
    const measure = cells[0] ?? "";
    if (containsReference(measure)) continue;
    const texts = columns.map((at) => cells[at] ?? "");
    const values = texts.map((text) => position(measure, text));
    if (values.every((value) => value !== null)) {
      placed.push({
        measure: measureName(measure),
        bars: texts.map((text, at) => ({ text, value: values[at] ?? 0 })),
      });
      continue;
    }
    const stated = texts.flatMap((text, at) =>
      values[at] === null && NOT_STATED.test(text)
        ? [`${cases[at]?.name ?? ""}: ${readerCell(text)}`]
        : [],
    );
    unplaced.push(
      stated.length
        ? `${measure} is not drawn: ${stated.join("; ")}.`
        : `${measure} is not drawn: its cells are not on one stated basis; the table has them as written.`,
    );
  }
  return { placed, unplaced };
}

function CaseDetails({ selected }: { selected: Case }) {
  const rows = (
    [
      ["EBITDA decline", scenarioShareLabel(selected.decline)],
      ["Cash-interest increase", scenarioShareLabel(selected.interest)],
      ["Assumption basis", selected.anchor],
      ["Scope limits", selected.scope],
      ["Category", selected.category],
      ["Confidence", selected.confidence],
    ] as const
  ).filter(([, value]) => value);
  return (
    <dl className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
      {rows.map(([key, value]) => (
        <div key={key} className="min-w-0">
          <dt className="font-medium text-text-primary">{key}</dt>
          <dd className="wrap-anywhere">{readerDetail(value)}</dd>
        </div>
      ))}
    </dl>
  );
}

function resultsTable(matrix: Table, cases: readonly Case[], href: (line: number) => string) {
  const columns = cases.map(({ id }) => matrix.headers.indexOf(id));
  return {
    head: ["Measure", ...cases.map(({ name }) => name)],
    rows: matrix.rows.map(({ cells, line }) => {
      const label = readerCell(cells[0] ?? "");
      return {
        label,
        cells: columns.map((at) => (cells[at]?.trim() ? readerCell(cells[at] ?? "") : null)),
        end: <Trace href={href(line)} name={label} />,
      };
    }),
    endHeading: "Source",
  };
}

const RESULTS_NAME = "Stressed flows and credit metrics";
const TITLE = "Downside scenarios";

/** CP-2A's scenario comparison: every case on each stressed measure, the control marked. */
export function DownsideTile({
  data,
  href,
  span,
}: {
  data: View;
  href: (line: number) => string;
  span: 4 | 6 | 8 | 12;
}) {
  const { matrix, control, cases } = data;
  const alternatives = cases.filter(({ id }) => id !== control?.id);
  const [chosen, setChosen] = useState(alternatives[0]?.id);
  const selected = alternatives.find(({ id }) => id === chosen) ?? alternatives[0];
  const trace = <Trace href={href(matrix.line)} name={RESULTS_NAME} />;
  if (!control || !selected)
    return (
      <LeadFigure
        span={span}
        label={TITLE}
        kicker="Scenario comparison"
        title="Stressed flows and credit metrics, as written"
        trace={trace}
        className="wrap-anywhere"
        figure={
          <p role="note" className="text-small text-text-secondary">
            The handoff does not bind a unique control and named cases to these results.
          </p>
        }
        table={writtenTable(matrix, href)}
      />
    );
  const { placed, unplaced } = casePanels(matrix, cases);
  const roles = cases.map(({ id, name }) => {
    const role: CaseRole = id === control.id ? "control" : id === selected.id ? "chosen" : "other";
    return { name, role };
  });
  const notes: ReactNode[] = [<CaseDetails key="details" selected={selected} />, ...unplaced];
  return (
    <LeadFigure
      span={span}
      label={TITLE}
      kicker="Scenario comparison"
      title={`Every case against the ${control.name}, each measure on its own scale`}
      basis={readerDetail(control.anchor)}
      legend={
        <>
          <Segmented
            label="Stress case to compare with the unstressed control"
            segments={alternatives.map(({ id, name }) => ({ key: id, label: name }))}
            current={selected.id}
            onSelect={setChosen}
          />
          <Key tone="prior">Control</Key>
          <Key tone="primary">{selected.name}</Key>
          {alternatives.length > 1 && <Key tone="secondary">Other cases</Key>}
        </>
      }
      trace={trace}
      className="wrap-anywhere"
      figure={
        placed.length > 0 ? (
          <SmallMultiples label={RESULTS_NAME} cases={roles} panels={placed} />
        ) : (
          <p role="note" className="text-small text-text-secondary">
            The cases have no measures on a common basis.
          </p>
        )
      }
      table={resultsTable(matrix, cases, href)}
      notes={notes}
    />
  );
}

export function Downside({ data, href }: { data: View; href: (line: number) => string }) {
  return (
    <Bento>
      <DownsideTile data={data} href={href} span={12} />
    </Bento>
  );
}
