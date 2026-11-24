import { useState, type ReactNode } from "react";
import { ChartTable } from "@/components/chart/ChartTable";
import { Segmented } from "@/components/kit/Segmented";
import {
  blocked,
  containsReference,
  type OutputEntry,
  type Table,
  unitLabel,
} from "../publishedReport";
import { namedRow, namedTable } from "../reportView";
import { amount, distinct, sharePosition, ticks } from "../visuals/visualData";
import { Ladder } from "./BreakPoints";
import { SmallMultiples, writtenTable, type MultiplePanel } from "./Downside";
import { Key } from "./overview/figureParts";
import { Bento, Tile } from "./overview/Tile";
import { LeadFigure, LeadGap, NEEDS, Trace } from "./leads/parts";
import { readerCell } from "./leads/read";

const RATE = [
  "Shock",
  "Rate shock",
  "Added annual interest before hedges",
  "Added annual interest after hedges",
  "Cash interest after the shock",
  "Interest coverage after the shock",
  "Change in interest coverage",
  "Free cash flow after the shock",
  "Added interest as share of EBITDA",
];
const FX = [
  "Shock",
  "Currency move",
  "Change in debt",
  "Total debt after the move",
  "Change in EBITDA",
  "Total leverage after the move",
];

function canonicalTable(entry: OutputEntry, id: string, title: string, headers: string[]) {
  const matches = (id ? [title, `${id} ${title}`] : [title]).flatMap(
    (name) => namedTable(entry, name, headers) ?? [],
  );
  const matched = matches.length === 1 ? matches[0] : undefined;
  const signature = matched?.headers.join("|");
  const expected = headers.join("|");
  return signature === expected || signature === `${expected}|Source` ? matched : undefined;
}

function retainedRate(entry: OutputEntry) {
  const ledger = canonicalTable(entry, "", "Calculations", [
    "ID",
    "Calculation",
    "Inputs",
    "Result",
    "Source",
  ]);
  const source = namedTable(entry, "Macro-exposure summary", [
    "Exposure",
    "Measure",
    "Hedge or offset",
    "Cash effect",
    "Creditor consequence",
    "Source",
  ]);
  if (!hasRetainedRateHeaders(source)) return null;
  const floating = namedRow(source, ({ cells }) => cells[0] === "Floating-rate debt (Term SOFR)");
  const impact = namedRow(ledger, ({ cells }) => cells[0] === "R4");
  const cover = namedRow(ledger, ({ cells }) => cells[0] === "R9");
  const parsed = retainedRateInputs(floating, cover);
  if (!impact || !cover || !floating || !parsed) return null;
  if (!retainedRateRowsMatch(floating, impact, cover, parsed)) return null;
  const { currency, money, bp, after, before } = parsed;
  const basis = entry.sections
    .filter(({ heading }) => heading === "Calculations")
    .flatMap(({ blocks }) => blocks)
    .find(
      (block) =>
        block.type === "text" &&
        block.text.startsWith(`All amounts are ${currency} million`) &&
        !containsReference(block.text),
    );
  return {
    currency,
    money,
    bp,
    after,
    before,
    cashLine: impact.line,
    coverLine: cover.line,
    basis: basis?.type === "text" ? basis.text : undefined,
  };
}

function hasRetainedRateHeaders(source: Table | undefined) {
  return (
    source?.headers.join("|") ===
    "Exposure|Measure|Hedge or offset|Cash effect|Creditor consequence|Source"
  );
}

function retainedRateInputs(
  floating: Table["rows"][number] | undefined,
  cover: Table["rows"][number] | undefined,
) {
  const cash = /^([A-Z]{3}) ([\d,.]+) million a year per (\d+) bp$/.exec(floating?.cells[3] ?? "");
  const ratio = /^(\d+(?:\.\d+)?)x; ratio \d+(?:\.\d+)?; (\d+(?:\.\d+)?)x before the shock$/.exec(
    cover?.cells[3] ?? "",
  );
  const [, currency, money, bp] = cash ?? [];
  const [, after, before] = ratio ?? [];
  if (!currency || !money || !bp || !after || !before || amount(money) === null) return null;
  return { currency, money, bp, after, before };
}

function retainedRateRowsMatch(
  floating: Table["rows"][number],
  impact: Table["rows"][number],
  cover: Table["rows"][number],
  parsed: NonNullable<ReturnType<typeof retainedRateInputs>>,
) {
  const { money, bp, after, before } = parsed;
  return (
    floating.cells[2] === "None disclosed" &&
    floating.cells[4] === `All-in cover ${before}x to ${after}x` &&
    impact.cells[1] === `${bp} bp cash-interest impact on unhedged floating debt` &&
    impact.cells[3] === money &&
    cover.cells[1] === "All-in cover after the shock (reported EBITDA over debt interest plus rent)"
  );
}

export function macroView(entry: OutputEntry) {
  if (
    entry.output.module !== "CP-2E" ||
    entry.output.parseError ||
    entry.output.state?.established === false ||
    blocked(entry)
  )
    return null;
  const operands = canonicalTable(entry, "T2F.1", "Sourced operands", [
    "Operand",
    "Value",
    "Basis",
  ]);
  const statedCurrency =
    namedRow(operands, ({ cells }) => cells[0] === "Reporting currency")?.cells[1] ?? "";
  const currency = /^[A-Z]{3}$/.test(statedCurrency) ? statedCurrency : "";
  const rate = canonicalTable(entry, "T2F.3", "Interest rate shock", RATE);
  const fx = canonicalTable(entry, "T2F.4", "Currency shock", FX);
  const hedges =
    canonicalTable(entry, "T2F.5", "Hedging", ["Item", "Value", "Convention"]) ??
    namedTable(entry, "T2F.3 — Hedging register", [
      "Hedge Type",
      "Notional",
      "Instrument Covered",
      "Rate / Strike",
      "Maturity",
      "Coverage Status",
      "Limitation",
      "Source",
    ]);
  const fxExposure = namedTable(entry, "T2F.6 — FX exposure and mismatch register", [
    "Exposure Type",
    "Natural Hedge?",
    "Limitation",
    "Source",
  ]);
  const fxGap = namedRow(
    namedTable(entry, "Gaps", [
      "Gap",
      "Severity",
      "Affected analysis",
      "Effect",
      "Remediation",
      "Source",
    ]),
    ({ cells }) => cells[2] === "FX register" && Boolean(cells[3]),
  );
  const retained = rate?.rows.length ? null : retainedRate(entry);
  if (
    !retained &&
    !rate?.rows.length &&
    !fx?.rows.length &&
    !hedges?.rows.length &&
    !fxExposure?.rows.length
  )
    return null;
  return { currency, rate, fx, hedges, fxExposure, fxGap, retained };
}

function moneyPosition(text: string, currency: string) {
  if (!currency) return null;
  const normalized = text.replaceAll("−", "-");
  const standard = amount(normalized);
  if (standard !== null) return standard;
  const stated = /^(-?)([A-Z]{3})\s*(-?[\d,]+(?:\.\d+)?)\s*(?:million|m)$/.exec(normalized);
  return stated?.[2] === currency ? amount(`${stated[1] ?? ""}${stated[3] ?? ""}`) : null;
}

function missingCell(text: string) {
  return (
    !text ||
    /^(?:—|n\.a\.|Not (?:stated|supplied|calculated|calculable|applicable)\b.*|∅ G\d+(?: n\.m\.)?)$/i.test(
      text,
    )
  );
}

type Href = (line: number) => string;
type Span = 4 | 6 | 8 | 12;
export type MacroData = NonNullable<ReturnType<typeof macroView>>;

/** A rate-shock row the figure can place: a positive bp step, before hedges and after on one basis. */
function rateRow(cells: readonly string[], currency: string) {
  const step = /^(\d+)(?:\s*bp)?$/.exec(cells[1] ?? "")?.[1];
  const gross = cells[2] ?? "";
  const net = cells[3] ?? "";
  const before = moneyPosition(gross, currency);
  const after = moneyPosition(net, currency);
  if (
    !step ||
    !Number.isSafeInteger(Number(step)) ||
    Number(step) <= 0 ||
    before === null ||
    before < 0 ||
    (after === null && !missingCell(net)) ||
    (after !== null && (after < 0 || after > before))
  )
    return null;
  return { step: `+${step} bp`, gross, net, before, after };
}

const AFTER = "After hedges";

/** Deploy VII's rate-shock grid: added annual interest per step, before hedges, with the after mark. */
export function RateLadderTile({
  table,
  currency,
  href,
  span,
}: {
  table: Table;
  currency: string;
  href: Href;
  span: Span;
}) {
  const read = table.rows.map(({ cells, line }) => ({
    line,
    row: rateRow(cells, currency),
    cells,
  }));
  const drawn = read.flatMap(({ line, row }) => (row ? [{ line, ...row }] : []));
  const placed = drawn.length > 0 && distinct(drawn.map(({ step }) => step));
  const scale = ticks([0, ...drawn.map(({ before }) => before)]);
  const top = scale.at(-1)?.value || 1;
  const unit = unitLabel(`${currency} millions`);
  const reading = drawn
    .map(
      ({ step, gross, net }) =>
        `${step}: before hedges ${gross}, after hedges ${net || "not stated"}`,
    )
    .join("; ");
  const left = read
    .filter(({ row }) => !row)
    .map(({ cells }) => `${readerCell(cells[0] ?? "")}: not placed; the table has it as written.`);
  return (
    <LeadFigure
      span={span}
      label="Added annual interest"
      kicker="Sensitivity ladder"
      title="Added annual interest per rate shock, before and after hedges"
      basis={placed ? unit : undefined}
      legend={
        placed && (
          <>
            <Key tone="primary">Before hedges (bar)</Key>
            <span className="flex items-center gap-1.5 text-caption font-normal text-text-secondary">
              <span aria-hidden="true" className="h-2.5 w-0.5 bg-text-primary" />
              After hedges (tick)
            </span>
          </>
        )
      }
      trace={<Trace href={href(table.line)} name="Added annual interest" />}
      figure={
        placed ? (
          <Ladder
            label={`Added annual interest by rate shock, in ${unit}: ${reading}.`}
            ticks={scale.map((tick) => ({ at: tick.value / top, label: tick.label }))}
            rungs={drawn.map((row) => ({
              key: row.line,
              label: row.step,
              at: row.before / top,
              figure: (
                <span className="flex flex-col items-end">
                  <span>{row.gross}</span>
                  <span className="text-caption text-text-secondary">
                    <span className="font-body">after </span>
                    <span className={row.after === null ? "text-gap-text" : undefined}>
                      {row.net || "Not stated"}
                    </span>
                  </span>
                </span>
              ),
              bar: { "data-case": "Before hedges" },
              mark:
                row.after === null
                  ? null
                  : {
                      at: row.after / top,
                      data: { "data-case": AFTER, ...(row.after === 0 ? { "data-zero": "" } : {}) },
                    },
            }))}
          />
        ) : (
          <p role="note" className="text-small text-text-secondary">
            The rate-shock table does not establish comparable cash-interest values.
          </p>
        )
      }
      table={writtenTable(table, href)}
      notes={placed ? left : []}
    />
  );
}

/** A currency-shock move the figure can place: the stated strengthening share. */
function fxMove(cells: readonly string[]) {
  const text = cells[1] ?? "";
  const pct = /^(\d+(?:\.\d+)?)%$/.exec(text);
  const position = pct ? Number(pct[1]) / 100 : sharePosition(text);
  const direction = /^Foreign currency strengthens, (?:first|second|third) move$/.test(
    cells[0] ?? "",
  );
  return direction && position !== null && position > 0 && position <= 1
    ? { position, text }
    : null;
}

function fxPanels(table: Table, chosen: number, currency: string): MultiplePanel[] {
  return FX.slice(2).flatMap((measure, index) => {
    const column = index + 2;
    const from = table.rows[0]?.cells[column] ?? "";
    const to = table.rows[chosen]?.cells[column] ?? "";
    const unit = index === 3 ? "x" : currency ? `${currency} millions` : "";
    const convert =
      index === 3
        ? (text: string) => amount(text.replace(/x$/, ""))
        : (text: string) => moneyPosition(text, currency);
    const a = convert(from);
    const b = convert(to);
    if (!unit || a === null || b === null || !Number.isFinite(Math.abs(a) + Math.abs(b))) return [];
    return [
      {
        measure: `${measure} (${unitLabel(unit)})`,
        bars: [
          { text: from, value: a },
          { text: to, value: b },
        ],
      },
    ];
  });
}

const FX_TITLE = "Foreign-currency strengthening";

/** Deploy VII's currency-shock grid: the first move against a chosen move, measure by measure. */
export function FxShocksTile({
  table,
  currency,
  href,
  span,
}: {
  table: Table;
  currency: string;
  href: Href;
  span: Span;
}) {
  const [chosen, setChosen] = useState(1);
  const moves = table.rows.map(({ cells }) => fxMove(cells));
  const first = moves[0];
  const next = moves[chosen];
  const compared =
    first &&
    next &&
    moves.every(Boolean) &&
    new Set(moves.map((item) => item?.position)).size === moves.length
      ? ([first.text, next.text] as const)
      : null;
  const panels = compared ? fxPanels(table, chosen, currency) : [];
  const choice: ReactNode =
    compared && moves.length > 2 ? (
      <Segmented
        label={`Compare with the ${compared[0]} move`}
        segments={moves.slice(1).map((move, at) => ({
          key: String(at + 1),
          label: move?.text ?? "",
        }))}
        current={String(chosen)}
        onSelect={(key) => {
          setChosen(Number(key));
        }}
      />
    ) : compared ? (
      <p className="text-small font-medium text-text-primary">
        Compared with the {compared[0]} move: {compared[1]}
      </p>
    ) : null;
  return (
    <LeadFigure
      span={span}
      label={FX_TITLE}
      kicker="Currency shock"
      title={
        compared
          ? `The ${compared[0]} move against the ${compared[1]} move, each measure on its own scale`
          : FX_TITLE
      }
      legend={choice}
      trace={<Trace href={href(table.line)} name={FX_TITLE} />}
      figure={
        compared && panels.length > 0 ? (
          <SmallMultiples
            label={FX_TITLE}
            cases={[
              { name: `${compared[0]} move`, role: "other" },
              { name: `${compared[1]} move`, role: "chosen" },
            ]}
            panels={panels}
          />
        ) : (
          <p role="note" className="text-small text-text-secondary">
            The currency-shock table does not establish two comparable moves.
          </p>
        )
      }
      table={writtenTable(table, href)}
    />
  );
}

/** The retained one-step rate test: all-in cover before and after, and the added cash interest. */
export function RetainedCoverTile({
  retained,
  href,
  span,
}: {
  retained: NonNullable<MacroData["retained"]>;
  href: Href;
  span: Span;
}) {
  const { before, after, bp, currency, money } = retained;
  const shock = `+${bp} bp`;
  const measure = "Reported EBITDA over debt interest plus rent";
  return (
    <LeadFigure
      span={span}
      label="All-in cover"
      kicker="Rate sensitivity"
      title={`All-in cover ${before}x before the shock, ${after}x after ${shock}`}
      trace={<Trace href={href(retained.coverLine)} name="All-in cover" />}
      figure={
        <SmallMultiples
          label="All-in cover"
          cases={[
            { name: "Before the shock", role: "other" },
            { name: shock, role: "chosen" },
          ]}
          panels={[
            {
              measure,
              bars: [
                { text: `${before}x`, value: Number(before) },
                { text: `${after}x`, value: Number(after) },
              ],
            },
          ]}
        />
      }
      table={{
        head: ["Measure", "Before the shock", shock],
        rows: [{ label: measure, cells: [`${before}x`, `${after}x`] }],
      }}
      notes={[
        <span key="cash" className="flex flex-wrap items-center gap-2">
          <span>
            Annual cash interest increases by{" "}
            <strong className="font-mono font-medium text-text-primary">
              {currency} {money} million
            </strong>{" "}
            under the recorded shock.
          </span>
          <Trace href={href(retained.cashLine)} name="Added annual cash interest" />
        </span>,
        <span key="after" role="note">
          No separate after-hedges result was established.
        </span>,
        ...(retained.basis ? [retained.basis] : []),
      ]}
    />
  );
}

/** What share of the business is in foreign currency: the module's own limitation, or the gap. */
export function ForeignShareTile({
  fxGap,
  href,
  span,
}: {
  fxGap: MacroData["fxGap"];
  href: Href;
  span: Span;
}) {
  const reason = fxGap?.cells[3]
    ? readerCell(fxGap.cells[3])
    : "The handoff states no currency shares.";
  return (
    <LeadGap
      span={span}
      label="Foreign share"
      title="Foreign-currency share"
      reason={reason}
      needs={NEEDS.input("currency exposure by currency")}
    >
      {fxGap && <Trace href={href(fxGap.line)} name="Currency exposure limitation" />}
    </LeadGap>
  );
}

/** The hedge register and any currency exposure register, as written, in a table tile. */
export function HedgeTermsTile({
  hedges,
  exposures,
  href,
}: {
  hedges: Table | undefined;
  exposures?: Table | undefined;
  href: Href;
}) {
  const terms = hedges ? writtenTable(hedges, href) : undefined;
  const currency = exposures ? writtenTable(exposures, href) : undefined;
  if (!terms && !currency) return null;
  return (
    <Tile
      span={12}
      label="Hedge terms"
      kicker="Hedge terms"
      title="Hedge terms as the module states them"
      trace={hedges && <Trace href={href(hedges.line)} name="Hedge terms" />}
    >
      {terms && <ChartTable caption="Hedge terms" {...terms} />}
      {currency && (
        <details className="min-w-0">
          <summary className="cursor-pointer text-small font-medium text-text-primary">
            Published currency exposures
          </summary>
          <div className="mt-3">
            <ChartTable caption="Published currency exposures" {...currency} />
          </div>
        </details>
      )}
    </Tile>
  );
}

/** CP-2E's figures that the Deploy VII tables carry: rate grid, currency grid, retained test, terms. */
export function MacroSensitivity({ data, href }: { data: MacroData; href: Href }) {
  const { retained, rate, fx, fxExposure, fxGap, hedges, currency } = data;
  return (
    <Bento>
      {rate?.rows.length ? (
        <RateLadderTile table={rate} currency={currency} href={href} span={12} />
      ) : null}
      {retained && <RetainedCoverTile retained={retained} href={href} span={12} />}
      {fx?.rows.length ? (
        <FxShocksTile table={fx} currency={currency} href={href} span={12} />
      ) : null}
      {fxGap && <ForeignShareTile fxGap={fxGap} href={href} span={12} />}
      <HedgeTermsTile hedges={hedges} exposures={fxExposure} href={href} />
    </Bento>
  );
}
