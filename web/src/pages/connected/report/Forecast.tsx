import { useState } from "react";
import { card, field, heading, label } from "../layout";
import {
  containsReference,
  evidencePath,
  FORECAST_INPUTS,
  type OutputEntry,
  type PublishedRun,
} from "../publishedReport";
import { namedRow, namedTable, type buildReportView } from "../reportView";
import { PublishedTable } from "../ReportContent";
import { amount, record, stringsIn, word } from "../visuals/visualData";
import { CashProxy, cashProxyCases, gridOf, LegacyForecast } from "../visuals/LegacyForecast";
import { RunCharts } from "./RunCharts";
import { PublishedSource } from "./PublishedTrace";

type Model = ReturnType<typeof buildReportView>["models"][number];

function forecastHandoff(model: Model, entries: OutputEntry[], folder: string) {
  const matches = entries.filter(
    ({ output }) =>
      output.module === "CP-2G" &&
      (model.sources.some(
        (item) => item.sha256 === output.sha256 && (!item.output || item.output === output.id),
      ) ||
        (model.runFolder === folder &&
          model.download.endsWith("/annual.md") &&
          output.href === model.download.replace(/annual\.md$/, "CP-2G.md"))),
  );
  return matches.length === 1 ? matches[0] : undefined;
}

function inputsLine(entry: OutputEntry) {
  const inputs = entry.sections.filter(({ heading }) => heading === FORECAST_INPUTS);
  if (inputs.length !== 1) return;
  const blocks = inputs[0]?.blocks.filter(
    (block) => block.type === "text" && block.text.startsWith("```json\n"),
  );
  return blocks?.length === 1 ? blocks[0]?.line : undefined;
}

function BasisNote({
  model,
  handoff,
  href,
}: {
  model: Model;
  handoff?: OutputEntry;
  href: (line: number) => string;
}) {
  const raw = record(model.cashflow);
  const limitation = stringsIn(raw.limits).find((line) =>
    /machine input is set to zero/i.test(line),
  );
  if (!limitation) return null;
  const grid = gridOf(raw);
  const cases = grid && cashProxyCases(grid, null);
  const period = cases?.periods[0];
  const value = cases?.series.find(({ name }) => name === "Base case")?.values[0];
  const ledger =
    handoff &&
    namedTable(handoff, "Calculations", ["ID", "Calculation", "Inputs", "Result", "Source"]);
  const comparable = word(raw.units) === "USD millions" && Boolean(handoff);
  const fiscal = period?.slice(0, -1);
  const fcf = fiscal && namedRow(ledger, ({ cells }) => cells[1] === `Base FCF ${fiscal}`);
  const original = fcf ? amount(fcf.cells[3] ?? "") : null;
  const recordedInflow =
    fiscal &&
    namedRow(ledger, ({ cells }) => cells[1] === `Base taxes and working-capital inflow ${fiscal}`);
  const difference = recordedInflow ? amount(recordedInflow.cells[3] ?? "") : null;
  const hasRecordedBridge =
    typeof value === "number" &&
    original !== null &&
    difference !== null &&
    Math.abs(original - value - difference) < 0.005;
  return (
    <section className={card}>
      <h3 className={heading}>{fiscal ? `${fiscal} base case basis` : "Model basis"}</h3>
      {comparable && hasRecordedBridge && (
        <p>
          The calculation gives <strong>{value.toFixed(2)}</strong> cash proxy. The handoff gives{" "}
          <strong>{original.toFixed(2)}</strong> free cash flow. The displayed difference is{" "}
          <strong>{difference.toFixed(2)}</strong> US$m.
        </p>
      )}
      {comparable && hasRecordedBridge && fcf && recordedInflow && (
        <div className="flex flex-wrap gap-3">
          <PublishedSource href={href(fcf.line)} name="Handoff free cash flow">
            Free cash flow basis
          </PublishedSource>
          <PublishedSource href={href(recordedInflow.line)} name="Recorded difference">
            Difference basis
          </PublishedSource>
        </div>
      )}
      <p>{limitation}</p>
    </section>
  );
}

export function Forecast({
  view,
  run,
}: {
  view: ReturnType<typeof buildReportView>;
  run: PublishedRun;
}) {
  const [selected, setSelected] = useState(0);
  const { models, entries } = view;
  const model = models[selected] ?? models[0];
  const handoff = model && forecastHandoff(model, entries, run.folder);
  const href = (line: number) =>
    evidencePath(run.folder, String(handoff ? entries.indexOf(handoff) : -1), line);
  const input = handoff && inputsLine(handoff);
  const source =
    input === undefined
      ? undefined
      : (name: string) => (
          <PublishedSource name={name} href={href(input)}>
            Forecast inputs
          </PublishedSource>
        );
  const register = model?.register;
  const assumptions =
    register && handoff && namedTable(handoff, register.heading, register.headers);
  function assumptionHref(cells: string[]) {
    const row = namedRow(
      assumptions || undefined,
      (row) =>
        row.cells.length === cells.length &&
        row.cells.every((cell, index) => cell === cells[index]),
    );
    return row && href(row.line);
  }
  return (
    <>
      <header className="grid gap-2">
        <h2 className="font-display text-h2">Forecast</h2>
        {model && (
          <a href="#evidence/summary" className="w-fit text-action underline">
            Forecast evidence and artifacts
          </a>
        )}
      </header>
      {!model && <p className={card}>No forecast model was published from this run’s files.</p>}
      {models.length > 1 && (
        <label className={`${label} max-w-xs`}>
          Published model
          <select
            className={field}
            value={selected}
            onChange={(event) => {
              setSelected(Number(event.target.value));
            }}
          >
            {models.map((item, index) => (
              <option value={index} key={item.id}>
                Model {index + 1}
                {item.mode ? ` · ${item.mode}` : ""}
              </option>
            ))}
          </select>
        </label>
      )}
      {model && (
        <LegacyForecast
          model={model}
          source={source}
          summary={
            <CashProxy
              model={model}
              source={source?.("Cash proxy by scenario")}
              note={<BasisNote model={model} handoff={handoff} href={href} />}
            />
          }
        />
      )}
      {model?.register && (
        <details className={card}>
          <summary className="cursor-pointer font-semibold">Forecast assumptions</summary>
          {model.register.intro && !containsReference(model.register.intro) && (
            <p>{model.register.intro}</p>
          )}
          <PublishedTable
            table={{
              type: "table",
              line: 0,
              headers: model.register.headers,
              rows: model.register.rows.map((cells, line) => ({ cells, line })),
            }}
            rowHref={(line) => assumptionHref(model.register?.rows[line] ?? [])}
            rowSource={(line, name) => {
              const link = assumptionHref(model.register?.rows[line] ?? []);
              return (
                link && (
                  <PublishedSource name={name} href={link}>
                    Assumption source
                  </PublishedSource>
                )
              );
            }}
          />
          <a
            href={
              handoff
                ? evidencePath(run.folder, String(entries.indexOf(handoff)))
                : "#evidence/trace/CP-2G"
            }
            className="text-action underline"
          >
            Open the forward credit handoff
          </a>
        </details>
      )}
      <RunCharts view={view} folder={run.folder} />
    </>
  );
}
