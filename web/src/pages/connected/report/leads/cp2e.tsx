import type { OutputEntry, Table } from "../../publishedReport";
import { unitLabel } from "../../publishedReport";
import { ticks } from "../../visuals/visualData";
import { Ladder } from "../BreakPoints";
import { share, writtenTable } from "../Downside";
import {
  ForeignShareTile,
  FxShocksTile,
  HedgeTermsTile,
  macroView,
  RateLadderTile,
  RetainedCoverTile,
} from "../MacroSensitivity";
import { Key } from "../overview/figureParts";
import { Bento } from "../overview/Tile";
import { DatedList, LeadBlocked, LeadFigure, LeadGap, NEEDS, Trace } from "./parts";
import {
  blockedState,
  columnOf,
  eventsOf,
  leadHref,
  leadingMillions,
  readerCell,
  registerTable,
} from "./read";
import type { LeadProps } from "./types";

type Href = (line: number) => string;

const LADDER = "Rate sensitivity";
const STEP = /(?:^|[\s(])\+\s?(\d+(?:\.\d+)?)\s?bp\b/;
const LEADING = /^[+−-]?[A-Z]{3} ?(?:\d{1,3}(?:,\d{3})*(?:\.\d+)?|\d+(?:\.\d+)?) ?million\b/;

/** The amount a cell opens with, as written, with its value; null when it does not open with one. */
function leadingAmount(text: string) {
  const money = leadingMillions(text);
  const written = LEADING.exec(text.trim())?.[0];
  return money && written ? { ...money, written } : null;
}

const SECOND_AMOUNT = /\b[A-Z]{3} ?[+−-]?\d|\d(?:[\d,]*\d)?(?:\.\d+)? ?(?:million|billion|bn)\b/;
const RANGE_ON = /^\s*(?:to|or|and|[–—-])\s*[+−-]?\d/i;
const QUALIFIED =
  /\b(?:approximately|approx\.?|about|around|roughly|circa|up to|at least|at most)\b/i;

/**
 * The amount a cell opens with when it states exactly one: no second amount, no range ("to", a dash)
 * and no qualifier ("approximately", "about") anywhere; words after the amount are kept as written.
 */
function singleAmount(text: string) {
  const amount = leadingAmount(text);
  if (!amount) return null;
  const rest = text.trim().slice(amount.written.length);
  return SECOND_AMOUNT.test(rest) || RANGE_ON.test(rest) || QUALIFIED.test(text) ? null : amount;
}

/** A cell that is exactly one stated amount ("USD 3,400 million"), nothing after it. */
function soleAmount(text: string) {
  const amount = leadingAmount(text);
  return amount && amount.written === text.trim() ? amount : null;
}

/** The skill's T2F.5 rows: each "+N bp" step whose cash impact states exactly one amount. */
function sensitivityRows(table: Table) {
  const label = columnOf(table, "Sensitivity");
  const impact = columnOf(table, "Estimated Cash Impact");
  const rows = table.rows.map(({ line, cells }) => {
    const name = cells[label] ?? "";
    const text = cells[impact] ?? "";
    const money = STEP.test(name) ? singleAmount(text) : null;
    return { line, name: readerCell(name), text: readerCell(text), money };
  });
  const currencies = new Set(rows.flatMap(({ money }) => (money ? [money.currency] : [])));
  const one = currencies.size === 1;
  const drawn = rows.flatMap(({ money, ...row }) =>
    one && money && money.value >= 0 ? [{ ...row, money }] : [],
  );
  const words = rows.filter((row) => !drawn.some((item) => item.line === row.line));
  return { drawn, words, currency: one ? ([...currencies][0] ?? "") : "" };
}

/** CP-2E's own sensitivity register: the cash cost of each stated shock step, as written. */
function SensitivityTile({ entry, href }: { entry: OutputEntry; href: Href }) {
  const table = registerTable(entry, "T2F.5", ["Sensitivity", "Estimated Cash Impact"]);
  if (!table?.rows.length)
    return (
      <LeadGap
        span={8}
        label={LADDER}
        kicker="Sensitivity ladder"
        title="Cash cost per rate shock step"
        reason="The handoff has no sensitivity table with a cash impact per shock step."
        needs={NEEDS.method}
      />
    );
  const { drawn, words, currency } = sensitivityRows(table);
  const listed = words.map((row) => `${row.name}: ${row.text}`);
  if (!drawn.length)
    return (
      <LeadGap
        span={8}
        label={LADDER}
        kicker="Sensitivity ladder"
        title="Cash cost per rate shock step"
        reason="The sensitivity table states no shock step with an amount the figure can place."
        needs={NEEDS.method}
      >
        <ul className="flex flex-col gap-1.5 text-small text-text-secondary">
          {listed.map((text) => (
            <li key={text} className="wrap-anywhere">
              {text}
            </li>
          ))}
        </ul>
        <Trace href={href(table.line)} name={LADDER} />
      </LeadGap>
    );
  const scale = ticks([0, ...drawn.map(({ money }) => money.value)]);
  const top = scale.at(-1)?.value || 1;
  const [first] = drawn;
  const title =
    drawn.length === 1 && first
      ? `One stated rate step: ${first.name}, ${first.money.written}`
      : "Cash cost per stated rate step";
  return (
    <LeadFigure
      span={8}
      label={LADDER}
      kicker="Sensitivity ladder"
      title={title}
      basis={`Estimated cash impact as the module states it, in ${unitLabel(`${currency} millions`)}`}
      legend={<Key tone="primary">Estimated cash impact</Key>}
      trace={<Trace href={href(table.line)} name={LADDER} />}
      figure={
        <Ladder
          label={`${LADDER}: ${drawn.map((row) => `${row.name}: ${row.money.written}`).join("; ")}.`}
          ticks={scale.map((tick) => ({ at: tick.value / top, label: tick.label }))}
          rungs={drawn.map((row) => ({
            key: row.line,
            label: row.name,
            at: row.money.value / top,
            figure: row.money.written,
            bar: { "data-bar": row.money.written },
          }))}
        />
      }
      table={writtenTable(table, href)}
      notes={[
        ...(drawn.length === 1
          ? [
              "The module states one shock step; a ladder of more steps needs a step grid in its handoff.",
            ]
          : []),
        ...listed,
      ]}
    />
  );
}

const HEDGED = "Hedged against unhedged";

/** T2F.4's hedged and unhedged floating-rate debt: one bar of the two stated amounts. */
function HedgedTile({ entry, href }: { entry: OutputEntry; href: Href }) {
  const table = registerTable(entry, "T2F.4", ["Metric", "Amount"]);
  const metric = table ? columnOf(table, "Metric") : -1;
  const amount = table ? columnOf(table, "Amount") : -1;
  const row = (name: string) =>
    table?.rows.find(({ cells }) => cells[metric]?.trim().toLowerCase() === name.toLowerCase());
  const parts = [
    ["hedged", "Hedged floating-rate debt"],
    ["unhedged", "Unhedged floating-rate debt"],
  ].map(([key = "", name = ""]) => {
    const found = row(name);
    const text = found?.cells[amount] ?? "";
    return { key, name, line: found?.line, text, value: soleAmount(text) };
  });
  const [hedged, unhedged] = parts;
  const gross = row("Gross floating-rate debt");
  const grossText = gross?.cells[amount] ?? "";
  const drawable =
    hedged?.value &&
    unhedged?.value &&
    hedged.value.currency === unhedged.value.currency &&
    hedged.value.value >= 0 &&
    unhedged.value.value >= 0 &&
    hedged.value.value + unhedged.value.value > 0;
  if (!table || !drawable || !hedged.value || !unhedged.value)
    return (
      <LeadGap
        span={12}
        label={HEDGED}
        title="Hedged against unhedged floating-rate debt"
        reason={
          table
            ? "The handoff does not state hedged and unhedged floating-rate debt as two amounts in one currency."
            : "The handoff has no floating-rate exposure table."
        }
        needs={table ? undefined : NEEDS.method}
      />
    );
  const total = hedged.value.value + unhedged.value.value;
  const rows = [
    hedged,
    unhedged,
    ...(gross ? [{ name: "Gross floating-rate debt", line: gross.line, text: grossText }] : []),
  ];
  return (
    <LeadFigure
      span={12}
      label={HEDGED}
      kicker="Hedged against unhedged"
      title={`Hedged ${hedged.text} against unhedged ${unhedged.text} floating-rate debt`}
      basis="Each segment is the stated amount; the bar is their sum only as a length."
      legend={
        <>
          <Key tone="primary">Hedged</Key>
          <Key tone="secondary">Unhedged</Key>
        </>
      }
      trace={<Trace href={href(table.line)} name={HEDGED} />}
      figure={
        <div
          role="img"
          aria-label={`Floating-rate debt: Hedged floating-rate debt ${hedged.text}; Unhedged floating-rate debt ${unhedged.text}.`}
          className="flex min-w-0 flex-col gap-2"
        >
          <div aria-hidden="true" className="flex h-4 w-full gap-0.5 overflow-hidden rounded-[2px]">
            <span
              data-segment="hedged"
              className="h-full bg-chart-1"
              style={{ width: share(hedged.value.value / total) }}
            />
            <span
              data-segment="unhedged"
              className="h-full bg-chart-2"
              style={{ width: share(unhedged.value.value / total) }}
            />
          </div>
          <div aria-hidden="true" className="flex flex-wrap justify-between gap-x-4 gap-y-1">
            <span className="flex flex-col">
              <span className="text-caption text-text-secondary">Hedged</span>
              <span className="font-mono text-small text-text-primary tabular-nums">
                {hedged.text}
              </span>
            </span>
            <span className="flex flex-col items-end">
              <span className="text-caption text-text-secondary">Unhedged</span>
              <span className="font-mono text-small text-text-primary tabular-nums">
                {unhedged.text}
              </span>
            </span>
          </div>
        </div>
      }
      table={{
        head: ["Metric", "Amount"],
        rows: rows.map((item) => ({
          label: item.name,
          cells: [readerCell(item.text) || null],
          end:
            item.line === undefined ? undefined : <Trace href={href(item.line)} name={item.name} />,
        })),
        endHeading: "Source",
      }}
      notes={soleAmount(grossText) ? [`Gross floating-rate debt: ${grossText.trim()}`] : []}
    />
  );
}

/** CP-2E: what a rate shock costs, how much of the floating debt is hedged, and the hedge terms. */
export function MacroLead(props: LeadProps) {
  const { entry } = props;
  const evidence = leadHref(props);
  const href: Href = (line) => evidence(line);
  const stopped = blockedState(entry);
  if (stopped)
    return (
      <Bento>
        <LeadBlocked span={12} label={LADDER} title={LADDER} reason={stopped.reason} />
      </Bento>
    );
  const data = macroView(entry);
  const hedges = data?.hedges ?? registerTable(entry, "T2F.3", ["Hedge Type", "Notional"]);
  const events = eventsOf(entry, "Hedges") ?? [];
  return (
    <Bento>
      {data?.rate?.rows.length ? (
        <RateLadderTile table={data.rate} currency={data.currency} href={href} span={8} />
      ) : (
        <SensitivityTile entry={entry} href={href} />
      )}
      <div className="flex min-w-0 flex-col gap-4 lg:col-span-4">
        <HedgedTile entry={entry} href={href} />
        <ForeignShareTile fxGap={data?.fxGap} href={href} span={12} />
      </div>
      {data?.retained && <RetainedCoverTile retained={data.retained} href={href} span={12} />}
      {data?.fx?.rows.length ? (
        <FxShocksTile table={data.fx} currency={data.currency} href={href} span={12} />
      ) : null}
      <HedgeTermsTile hedges={hedges} exposures={data?.fxExposure} href={href} />
      {events.length > 0 && (
        <LeadFigure
          span={12}
          label="Hedge dates"
          title="Hedge dates as the module states them"
          figure={<DatedList label="Hedge dates" events={events} href={href} />}
        />
      )}
    </Bento>
  );
}
