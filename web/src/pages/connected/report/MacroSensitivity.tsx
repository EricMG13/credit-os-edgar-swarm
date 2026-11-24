import { useState, type ReactNode } from "react";
import { ComparisonChart, type ChartComparisonPanel } from "@/components/chart/ComparisonChart";
import { TRACE_HOST } from "@/pages/library/parts/TraceControl";
import { card, field, heading, label } from "../layout";
import { PublishedTable } from "../ReportContent";
import {
  blocked,
  containsReference,
  type OutputEntry,
  type Table,
  unitLabel,
} from "../publishedReport";
import { namedRow, namedTable } from "../reportView";
import { amount, distinct, sharePosition } from "../visuals/visualData";
import { PublishedSource } from "./PublishedTrace";

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

type Source = (line: number) => string;

function source(href: Source, line: number, name: string) {
  return (
    <PublishedSource href={href(line)} name={name}>
      Source
    </PublishedSource>
  );
}

function panel(
  measure: string,
  texts: [string | null, string | null],
  values: [number | null, number | null],
): ChartComparisonPanel {
  const min = Math.min(0, values[0] ?? 0, values[1] ?? 0);
  return {
    measure,
    texts,
    values,
    min,
    max: Math.max(0, values[0] ?? 0, values[1] ?? 0) || (min === 0 ? 1 : 0),
  };
}

function compare(
  title: string,
  cases: [string, string],
  rowLabels: [string, string],
  panels: ChartComparisonPanel[],
  actions: ReactNode,
) {
  return (
    <ComparisonChart
      as="h3"
      title={title}
      cases={cases}
      rowLabels={rowLabels}
      actions={actions}
      panels={panels}
      table={{
        head: ["Measure", ...cases],
        rows: panels.map(({ measure, texts }) => ({ label: measure, cells: texts })),
      }}
    />
  );
}

function disclosure(table: Table, title: string, href: Source) {
  return (
    <details className={`${TRACE_HOST} min-w-0`}>
      <summary className="cursor-pointer font-semibold">{title}</summary>
      <div className="mt-3">
        <PublishedTable
          table={table}
          href={href(table.line)}
          rowSource={(line, name) => source(href, line, name)}
        />
      </div>
    </details>
  );
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

function RateShocks({ table, currency, href }: { table: Table; currency: string; href: Source }) {
  const shocks = table.rows.map(({ cells }) => {
    const row = /^(\d+)(?:\s*bp)?$/.exec(cells[1] ?? "")?.[1];
    const gross = cells[2] ?? "";
    const net = cells[3] ?? "";
    const before = moneyPosition(gross, currency);
    const after = moneyPosition(net, currency);
    if (
      !row ||
      !Number.isSafeInteger(Number(row)) ||
      Number(row) <= 0 ||
      before === null ||
      before < 0 ||
      (after === null && !missingCell(net)) ||
      (after !== null && (after < 0 || after > before))
    )
      return null;
    return panel(
      `+${row} bp, ${unitLabel(`${currency} millions`)}`,
      [gross, after === null ? null : net],
      [before, after],
    );
  });
  const panels = shocks.flatMap((item) => item ?? []);
  return (
    <section aria-label="Interest rate shocks" className={`${card} ${TRACE_HOST}`}>
      {panels.length > 0 && distinct(panels.map(({ measure }) => measure)) ? (
        compare(
          "Added annual interest",
          ["Before hedges", "After hedges"],
          ["Before", "After"],
          panels,
          source(href, table.line, "Added annual interest"),
        )
      ) : (
        <p role="note">The rate-shock table does not establish comparable cash-interest values.</p>
      )}
      {disclosure(table, "All rate-shock results and limitations", href)}
    </section>
  );
}

function FxShocks({ table, currency, href }: { table: Table; currency: string; href: Source }) {
  const [chosen, setChosen] = useState(1);
  const moves = table.rows.map(({ cells }) => {
    const text = cells[1] ?? "";
    const pct = /^(\d+(?:\.\d+)?)%$/.exec(text);
    const position = pct ? Number(pct[1]) / 100 : sharePosition(text);
    const direction = /^Foreign currency strengthens, (?:first|second|third) move$/.test(
      cells[0] ?? "",
    );
    return direction && position !== null && position > 0 && position <= 1
      ? { position, text }
      : null;
  });
  const first = moves[0];
  const next = moves[chosen];
  const compared =
    first &&
    next &&
    moves.every(Boolean) &&
    new Set(moves.map((item) => item?.position)).size === moves.length
      ? ([first.text, next.text] as [string, string])
      : null;
  const panels = FX.slice(2).flatMap((measure, index) => {
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
    return [panel(`${measure} (${unitLabel(unit)})`, [from, to], [a, b])];
  });
  return (
    <section aria-label="Currency shocks" className={`${card} ${TRACE_HOST}`}>
      {compared && moves.length > 2 ? (
        <label className={`${label} max-w-xs`}>
          Compare with the {compared[0]} move
          <select
            className={field}
            value={chosen}
            onChange={(event) => {
              setChosen(Number(event.target.value));
            }}
          >
            {moves.slice(1).map((move, i) => (
              <option key={move?.text} value={i + 1}>
                {move?.text}
              </option>
            ))}
          </select>
        </label>
      ) : compared ? (
        <p className="text-sm font-medium">
          Compared with the {compared[0]} move: {compared[1]}
        </p>
      ) : null}
      {compared && panels.length > 0 ? (
        compare(
          "Foreign-currency strengthening",
          compared,
          ["First", "Selected"],
          panels,
          source(href, table.line, "Foreign-currency strengthening"),
        )
      ) : (
        <p role="note">The currency-shock table does not establish two comparable moves.</p>
      )}
      {disclosure(table, "All currency-shock results and limitations", href)}
    </section>
  );
}

export function MacroSensitivity({
  data,
  href,
}: {
  data: NonNullable<ReturnType<typeof macroView>>;
  href: Source;
}) {
  const { retained, rate, fx, fxExposure, fxGap, hedges, currency } = data;
  return (
    <>
      {retained && (
        <section aria-label="Interest rate sensitivity" className={`${card} ${TRACE_HOST}`}>
          {compare(
            "All-in cover",
            ["Before the shock", `+${retained.bp} bp`],
            ["Before", "After"],
            [
              panel(
                "Reported EBITDA over debt interest plus rent",
                [`${retained.before}x`, `${retained.after}x`],
                [Number(retained.before), Number(retained.after)],
              ),
            ],
            source(href, retained.coverLine, "All-in cover"),
          )}
          <div className={`${TRACE_HOST} flex flex-wrap items-center gap-2`}>
            <p>
              Annual cash interest increases by{" "}
              <strong>
                {retained.currency} {retained.money} million
              </strong>{" "}
              under the recorded shock.
            </p>
            {source(href, retained.cashLine, "Added annual cash interest")}
          </div>
          <p role="note">No separate after-hedges result was established.</p>
          {retained.basis ? (
            <p className="text-small text-text-secondary">{retained.basis}</p>
          ) : null}
        </section>
      )}
      {rate?.rows.length ? <RateShocks table={rate} currency={currency} href={href} /> : null}
      {fx?.rows.length ? <FxShocks table={fx} currency={currency} href={href} /> : null}
      {hedges?.rows.length || fxExposure?.rows.length ? (
        <section aria-label="Hedge terms and currency exposure" className={card}>
          <h3 className={heading}>Hedge terms and currency exposure</h3>
          {fxGap ? (
            <div className={`${TRACE_HOST} flex flex-wrap items-center gap-2`}>
              <p role="note">{fxGap.cells[3]}</p>
              {source(href, fxGap.line, "Currency exposure limitation")}
            </div>
          ) : null}
          {hedges?.rows.length ? disclosure(hedges, "Published hedge terms", href) : null}
          {fxExposure?.rows.length
            ? disclosure(fxExposure, "Published currency exposures", href)
            : null}
        </section>
      ) : null}
    </>
  );
}
