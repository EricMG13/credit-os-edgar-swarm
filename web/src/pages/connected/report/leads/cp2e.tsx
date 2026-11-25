import type { OutputEntry, Table } from "../../publishedReport";
import { unitLabel } from "../../publishedReport";
import { ticks } from "../../visuals/visualData";
import { Ladder } from "../BreakPoints";
import { share } from "../Downside";
import {
  ForeignShareTile,
  FxShocksTile,
  HedgeTermsTile,
  macroView,
  RateLadderTile,
  RetainedCoverTile,
} from "../MacroSensitivity";
import { Key } from "../overview/figureParts";
import { Bento, Figure } from "../overview/Tile";
import { withDraws } from "./draws";
import { OtherCharts, sourceOf, writtenTable } from "./written";
import { LaneTile, LeadFigure, LeadGap, Trace } from "./parts";
import {
  columnOf,
  eventsOf,
  leadHref,
  leadingMillions,
  readerCell,
  registerTable,
  drawsNothing,
} from "./read";
import type { LeadProps } from "./types";

type Href = (line: number) => string;

const LADDER = "Rate sensitivity";
const STEP = /(?:^|[\s(])\+\s?(\d+(?:\.\d+)?)\s?bp\b/;

const SECOND_AMOUNT = /\b[A-Z]{3} ?[+−-]?\d|\d(?:[\d,]*\d)?(?:\.\d+)? ?(?:million|billion|bn)\b/;
const RANGE_ON = /^\s*(?:to|or|and|[–—-])\s*[+−-]?\d/i;
const QUALIFIED =
  /\b(?:approximately|approx\.?|about|around|roughly|circa|up to|at least|at most)\b/i;

/**
 * The amount a cell opens with when it states exactly one: no second amount, no range ("to", a dash)
 * and no qualifier ("approximately", "about") anywhere; words after the amount are kept as written.
 */
function singleAmount(text: string) {
  const amount = leadingMillions(text);
  if (!amount) return null;
  const rest = text.trim().slice(amount.written.length);
  return SECOND_AMOUNT.test(rest) || RANGE_ON.test(rest) || QUALIFIED.test(text) ? null : amount;
}

/** A cell that is exactly one stated amount ("USD 3,400 million"), nothing after it. */
function soleAmount(text: string) {
  const amount = leadingMillions(text);
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
    const rest = money ? readerCell(text.trim().slice(money.written.length).trim()) : "";
    return { line, name: readerCell(name), text: readerCell(text), money, rest };
  });
  const currencies = new Set(rows.flatMap(({ money }) => (money ? [money.currency] : [])));
  const one = currencies.size === 1;
  const drawn = rows.flatMap(({ money, ...row }) =>
    one && money && money.value >= 0 ? [{ ...row, money }] : [],
  );
  const words = rows.filter((row) => !drawn.some((item) => item.line === row.line));
  return { drawn, words, currency: one ? ([...currencies][0] ?? "") : "" };
}

type Drawn = ReturnType<typeof sensitivityRows>["drawn"][number];

/** Fewer than three stated steps: each step's words, its amount as written and the cell's own words after it. */
function StatedSteps({ rows }: { rows: readonly Drawn[] }) {
  return (
    <ul aria-label={LADDER} className="flex flex-col gap-3">
      {rows.map((row) => (
        <li
          key={row.line}
          className="flex min-w-0 flex-col gap-1 border-t border-border-hairline pt-3 first:border-t-0 first:pt-0"
        >
          <span className="text-small wrap-anywhere text-text-secondary">{row.name}</span>
          <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <Figure className="text-h3 font-medium">{row.money.written}</Figure>
            {row.rest && (
              <span className="text-small wrap-anywhere text-text-secondary">{row.rest}</span>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}

/** CP-2E's own sensitivity register: the cash cost of each stated shock step, as written. */
function SensitivityTile({ entry, href }: { entry: OutputEntry; href: Href }) {
  const table = registerTable(entry, "T2F.5", ["Sensitivity", "Estimated Cash Impact"]);
  if (!table?.rows.length)
    return (
      <LeadGap
        span={8}
        label={LADDER}
        title={LADDER}
        reason="This page could not read a cash impact per rate shock step."
      />
    );
  const { drawn, words, currency } = sensitivityRows(table);
  const listed = words.map((row) => `${row.name}: ${row.text}`);
  const trace = <Trace href={href(table.line)} name={LADDER} />;
  if (!drawn.length)
    return (
      <LeadGap
        span={8}
        label={LADDER}
        title={LADDER}
        trace={trace}
        reason="This page could not read one amount for any shock step from the sensitivity table."
      >
        <ul className="flex flex-col gap-1.5 text-small text-text-secondary">
          {listed.map((text) => (
            <li key={text} className="wrap-anywhere">
              {text}
            </li>
          ))}
        </ul>
      </LeadGap>
    );
  const scale = ticks([0, ...drawn.map(({ money }) => money.value)]);
  const top = scale.at(-1)?.value || 1;
  const chart = drawn.length >= 3;
  return (
    <LeadFigure
      span={8}
      label={LADDER}
      title={LADDER}
      basis={`Estimated cash impact, in ${unitLabel(`${currency} millions`)}`}
      legend={chart && <Key tone="primary">Estimated cash impact</Key>}
      trace={trace}
      figure={
        chart ? (
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
        ) : (
          <StatedSteps rows={drawn} />
        )
      }
      table={writtenTable(sourceOf(table), href)}
      notes={listed}
    />
  );
}

const HEDGED = "Hedged against unhedged";
const HEDGED_TITLE = "Hedged and unhedged floating-rate debt";

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
        title={HEDGED_TITLE}
        reason={
          table
            ? "This page could not read hedged and unhedged floating-rate debt as two amounts in one currency."
            : "This page could not read a floating-rate exposure table."
        }
        trace={table && <Trace href={href(table.line)} name={HEDGED} />}
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
      title={HEDGED_TITLE}
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
          <div aria-hidden="true" className="flex h-4 w-full gap-0.5 overflow-hidden rounded-ds-xs">
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
export const MacroLead = withDraws(
  function MacroLead(props: LeadProps) {
    const { entry } = props;
    if (drawsNothing(entry)) return null;
    const evidence = leadHref(props);
    const href: Href = (line) => evidence(line);
    const data = macroView(entry);
    const hedges = data?.hedges ?? registerTable(entry, "T2F.3", ["Hedge Type", "Notional"]);
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
          <FxShocksTile table={data.fx} currency={data.currency} href={href} span={8} />
        ) : null}
        <HedgeTermsTile hedges={hedges} exposures={data?.fxExposure} href={href} />
        <LaneTile
          lane={eventsOf(entry, "Hedges")}
          span={12}
          label="Hedge dates"
          title="Hedge dates"
          href={evidence}
        />
        <OtherCharts entry={entry} module="CP-2E" href={evidence} drawn={[]} />
      </Bento>
    );
  },
  ["figures", "events"],
);
