import type { ReactNode } from "react";
import { BarCell } from "@/components/kit/BarCell";
import { STATUS_SETS } from "@/components/status/sets";
import { StatusBadge } from "@/components/status/StatusBadge";
import { PublishedTable } from "../ReportContent";
import {
  blocked,
  containsReference,
  type OutputEntry,
  type Table,
  unitLabel,
} from "../publishedReport";
import { namedTable } from "../reportView";
import { amount, distinct } from "../visuals/visualData";
import { Notes, Trace } from "./leads/parts";
import { readerCell } from "./leads/read";
import { PublishedSource } from "./PublishedTrace";
import { Bento, Tile } from "./overview/Tile";

const TITLE = "Security decision summary";
const MATRIX = [
  "Security / Issuer",
  "Fundamental View",
  "Relative-Value View",
  "Structural / Recovery View",
  "Final Matrix Bucket",
  "Rationale",
  "Evidence ID",
  "Source",
];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function isoDate(text: string) {
  const shown = /^(\d{1,2}) ([A-Z][a-z]{2}) (\d{4})$/.exec(text);
  const month = MONTHS.indexOf(shown?.[2] ?? "") + 1;
  const iso =
    shown && month > 0
      ? `${shown[3] ?? ""}-${String(month).padStart(2, "0")}-${(shown[1] ?? "").padStart(2, "0")}`
      : text;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return null;
  const date = new Date(iso);
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === iso ? iso : null;
}

function securityQuote(market: string) {
  const quoted = /^(\$\d[\d,]*\.\d{2}); yield (\d+(?:\.\d+)?%)(?:, \d+(?:\.\d+)?% rounded)?$/.exec(
    market,
  );
  const priceText = quoted?.[1];
  const yieldText = quoted?.[2];
  if (!priceText || !yieldText) return null;
  const price = amount(priceText.slice(1));
  const yieldValue = amount(yieldText.slice(0, -1));
  return price !== null && yieldValue !== null ? { price, priceText, yieldValue, yieldText } : null;
}

/** CP-3's one dated last-trade basis line; its amounts are in the run's currency
 * (docs/rulings/2026-11-16-reporting-currency-from-sources.md), its trades US market quotes. */
function hasMarketBasis(entry: OutputEntry, date: string, asOf: string | null) {
  const stamp = isoDate(date);
  const cutoff = isoDate(asOf ?? "");
  if (!stamp || !cutoff || stamp > cutoff) return false;
  const observations = entry.sections
    .filter(({ heading }) => heading === "Calculations")
    .flatMap(({ blocks }) =>
      blocks.flatMap((block) => {
        if (block.type !== "text") return [];
        return (
          /^All amounts [A-Z]{3} millions unless stated; yields are percentages from (?:FINRA )?last trades on (\d{4}-\d{2}-\d{2}); differences in yield are percentage points, shown in bp\.$/.exec(
            block.text,
          )?.[1] ?? []
        );
      }),
    );
  return observations.length === 1 && observations[0] === stamp;
}

function securityRow(line: number, cells: string[]) {
  const [name = "", market = "", rank = "", value = "", recommendation = "", source = ""] = cells;
  const located =
    source.trim() !== "" && !/^(?:Not (?:supplied|stated|available)|n\.a\.|—)/i.test(source);
  return {
    line,
    name,
    market,
    rank,
    value,
    recommendation,
    quote: located ? securityQuote(market) : null,
    /** The yield the market level states in the quote form, located or not; text only. */
    yieldText: securityQuote(market)?.yieldText ?? null,
  };
}

export function securityView(entry: OutputEntry, asOf: string | null) {
  if (
    entry.output.module !== "CP-3" ||
    entry.output.parseError ||
    entry.output.state?.established === false ||
    blocked(entry)
  )
    return null;
  const summary = namedTable(entry, TITLE, [
    "Instrument",
    "Rank",
    "Relative value",
    "Recommendation",
    "Source",
  ]);
  const matrix = namedTable(entry, "T3.6 — Fundamental value matrix", MATRIX);
  const outcomes =
    matrix?.headers.join("|") === MATRIX.join("|") && matrix.rows.length ? matrix : null;
  const date = /^Market level \(([^)]+)\)$/.exec(summary?.headers[1] ?? "")?.[1];
  const matches =
    date &&
    summary?.headers.join("|") ===
      `Instrument|Market level (${date})|Rank|Relative value|Recommendation|Source`;
  const records = matches ? summary.rows.map(({ line, cells }) => securityRow(line, cells)) : [];
  if (!records.length && !outcomes) return null;
  const chartable =
    date && hasMarketBasis(entry, date, asOf) && distinct(records.map(({ name }) => name))
      ? records.flatMap(({ name, quote }) =>
          quote && !containsReference(name) ? [{ name, ...quote }] : [],
        )
      : [];
  return {
    date,
    records,
    chartable,
    outcomes,
    summaryLine: records.length ? summary?.line : undefined,
  };
}

/** A cell as written for the reader; one naming a source stays in Evidence. */
function reader(text: string) {
  return text.trim() ? readerCell(text) : "Not stated";
}

function Recommendation({ state }: { state: string }) {
  const states = STATUS_SETS["Security recommendation"];
  return Object.hasOwn(states, state) ? (
    <StatusBadge set="Security recommendation" state={state as keyof typeof states} />
  ) : (
    <span className="text-small font-medium">{reader(state)}</span>
  );
}

type EvidenceHref = (line: number) => string;
type SecurityData = NonNullable<ReturnType<typeof securityView>>;

/** One instrument as the module wrote it; `share` places its yield bar where a yield reads. */
type Instrument = {
  line: number;
  name: string;
  rank: string;
  market: string;
  value: string;
  recommendation: string;
  /** The stated last-trade yield, where the market level states one in the quote form. */
  yieldText: string | null;
  /** The yield over the largest comparable stated yield; null where no bar is drawn. */
  share: number | null;
};

export type Instruments = {
  rows: Instrument[];
  /** The market level column's heading as written. */
  market: string;
  line: number;
  notes: ReactNode[];
};

const NO_PAIR = "No pair of comparable last trades is supplied for this run.";

/**
 * The decision summary's instruments: a yield bar only where the yield is a comparable last trade
 * (`chartable`, two or more), each against the largest of them; other yields as text, no bar.
 */
export function quotedInstruments(data: SecurityData, runUnit?: string): Instruments | null {
  const { records, chartable, date, summaryLine } = data;
  if (!records.length || summaryLine === undefined) return null;
  const drawn = chartable.length >= 2 ? chartable : [];
  const top = Math.max(0, ...drawn.map(({ yieldValue }) => yieldValue));
  const rows = records.map((item): Instrument => {
    const quote = drawn.find(({ name }) => name === item.name);
    return {
      line: item.line,
      name: item.name,
      rank: item.rank,
      market: item.market,
      value: item.value,
      recommendation: item.recommendation,
      yieldText: item.yieldText,
      share: quote && top > 0 ? quote.yieldValue / top : null,
    };
  });
  const notes = [
    runUnit && runUnit !== "US$m" && (
      <p key="unit" role="note">
        {`Market levels are US market quotes in US dollars; this run reports in ${unitLabel(runUnit)}.`}
      </p>
    ),
    !drawn.length && (
      <p key="pair" role="note">
        {NO_PAIR}
      </p>
    ),
  ].filter(Boolean);
  return {
    rows,
    market: date ? `Market level (${date})` : "Market level",
    line: summaryLine,
    notes,
  };
}

const INSTRUMENT = /\b(?:instrument|security|securities|tranche|group)\b/i;
const RANK = /^(?:rank|structural position|structural rank|seniority(?: \/ security)?|lien)$/i;

/**
 * The real run's recommendation table: under "Recommendation", the first column names the
 * instrument and the last is "Recommendation". Its market levels are prices or ranges, so no bar.
 */
export function recommendationInstruments(entry: OutputEntry): Instruments | null {
  const table = entry.sections
    .filter((section) => section.heading === "Recommendation")
    .flatMap(({ blocks }) => blocks)
    .find(
      (block) =>
        block.type === "table" &&
        block.rows.length > 0 &&
        block.headers.at(-1)?.trim() === "Recommendation" &&
        INSTRUMENT.test(block.headers[0] ?? ""),
    );
  if (table?.type !== "table") return null;
  const column = (test: RegExp) => table.headers.findIndex((header) => test.test(header.trim()));
  const market = column(/^Market level\b/i);
  const rank = column(RANK);
  const value = column(/^Relative value$/i);
  const cell = (cells: string[], at: number) => (at < 0 ? "" : (cells[at] ?? ""));
  return {
    market: market < 0 ? "Market level" : (table.headers[market] ?? "Market level"),
    line: table.line,
    notes: [],
    rows: table.rows.map(({ line, cells }) => ({
      line,
      name: cells[0] ?? "",
      rank: cell(cells, rank),
      market: cell(cells, market),
      value: cell(cells, value),
      recommendation: cells.at(-1) ?? "",
      yieldText: null,
      share: null,
    })),
  };
}

function NotSupplied() {
  return (
    <span className="rounded-ds-xs border border-dashed border-border-gap px-1.5 text-caption whitespace-nowrap text-gap-text">
      Not supplied
    </span>
  );
}

function YieldCell({ item }: { item: Instrument }) {
  if (item.yieldText !== null && item.share !== null)
    return (
      <span data-bar className="block min-w-40">
        <BarCell text={item.yieldText} share={item.share} />
      </span>
    );
  if (item.yieldText !== null)
    return <span className="font-mono text-text-primary tabular-nums">{item.yieldText}</span>;
  return <NotSupplied />;
}

// The table scrolls sideways inside its tile: a named, focusable region (as `PublishedTable`).
const SCROLLER = { role: "region", "aria-label": "Instrument table", tabIndex: 0 } as const;
const HEAD_CELL = "px-3 py-2 text-left text-caption font-medium text-text-tertiary";
const BODY_CELL = "px-3 py-2.5 align-top wrap-break-word text-text-secondary";

/** CP-3's instrument table: rank, market level, yield, spread and recommendation per instrument. */
export function InstrumentTable({ data, href }: { data: Instruments; href: EvidenceHref }) {
  const head = ["Instrument", "Rank", data.market, "Yield", "Spread", "Relative value"];
  return (
    <Tile
      span={12}
      label="Instrument decisions"
      kicker="Security selection"
      title="Recommendation by instrument"
      trace={<Trace href={href(data.line)} name="Instrument decisions" />}
    >
      {data.notes.length > 0 && (
        <div className="flex flex-col gap-1.5 text-small text-text-secondary">{data.notes}</div>
      )}
      <div {...SCROLLER} className="min-w-0 overflow-x-auto">
        <table className="w-full min-w-max border-collapse text-small">
          <caption className="sr-only">Instrument decisions</caption>
          <thead>
            <tr className="border-b border-border-hairline">
              {[...head, "Recommendation"].map((name) => (
                <th key={name} scope="col" className={HEAD_CELL}>
                  {name}
                </th>
              ))}
              <th scope="col" className={HEAD_CELL}>
                <span className="sr-only">Source</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.rows.map((item) => (
              <tr key={item.line} className="border-b border-border-hairline last:border-b-0">
                <th
                  scope="row"
                  className="min-w-40 px-3 py-2.5 text-left align-top font-medium wrap-break-word text-text-primary"
                >
                  {reader(item.name)}
                </th>
                <td className={`${BODY_CELL} min-w-28`}>{reader(item.rank)}</td>
                <td className={`${BODY_CELL} min-w-40`}>{reader(item.market)}</td>
                <td className={BODY_CELL}>
                  <YieldCell item={item} />
                </td>
                <td className={BODY_CELL}>
                  <NotSupplied />
                </td>
                <td className={BODY_CELL}>{reader(item.value)}</td>
                <td className={BODY_CELL}>
                  <Recommendation state={item.recommendation} />
                </td>
                <td className="px-3 py-2.5 align-top">
                  <Trace href={href(item.line)} name={reader(item.name)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Notes notes={["No spread column in the module's table."]} />
    </Tile>
  );
}

/** The T3.6 fundamental value matrix, as written, one trace per row. */
export function ValueMatrix({ table, href }: { table: Table; href: EvidenceHref }) {
  return (
    <Tile span={12} label="Credit and recovery rationale" title="Credit and recovery rationale">
      <PublishedTable
        table={table}
        href={href(table.line)}
        rowSource={(line, name) => (
          <PublishedSource href={href(line)} name={name}>
            Rationale source
          </PublishedSource>
        )}
      />
    </Tile>
  );
}

/** `runUnit` is the run's money unit (`runMoneyUnit`); the market levels stay US market quotes. */
export function Securities({
  data,
  href,
  runUnit,
}: {
  data: SecurityData;
  href: EvidenceHref;
  runUnit?: string;
}) {
  const instruments = quotedInstruments(data, runUnit);
  return (
    <Bento>
      {instruments && <InstrumentTable data={instruments} href={href} />}
      {data.outcomes && <ValueMatrix table={data.outcomes} href={href} />}
    </Bento>
  );
}
