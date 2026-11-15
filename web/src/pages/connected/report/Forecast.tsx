import { useState } from "react";
import { card, field, heading, label } from "../layout";
import { containsReference, type OutputEntry, type PublishedRun } from "../publishedReport";
import { namedRow, namedTable, type buildReportView } from "../reportView";
import { PublishedTable } from "../ReportContent";
import { amount, record, stringsIn, word } from "../visuals/visualData";
import { CashProxy, cashProxyCases, gridOf, LegacyForecast } from "../visuals/LegacyForecast";
import { RunCharts } from "./RunCharts";

function BasisNote({
  model,
  entries,
  folder,
}: {
  model: ReturnType<typeof buildReportView>["models"][number];
  entries: OutputEntry[];
  folder: string;
}) {
  const raw = record(model.cashflow);
  const limitation = stringsIn(raw.limits).find((line) =>
    /machine input is set to zero/i.test(line),
  );
  if (!limitation) return null;
  const grid = gridOf(raw);
  const handoff = entries.find((entry) => entry.selected && entry.output.module === "CP-2G");
  const cases = grid && cashProxyCases(grid, null);
  const period = cases?.periods[0];
  const value = cases?.series.find(({ name }) => name === "Base case")?.values[0];
  const ledger =
    handoff &&
    namedTable(handoff, "Calculations", ["ID", "Calculation", "Inputs", "Result", "Source"]);
  const holdsThisRun = model.runFolder === folder || model.runId === folder;
  const matchingSource = model.sources.some(
    (source) =>
      source.sha256 === handoff?.output.sha256 &&
      source.sha256 !== undefined &&
      (!source.output || source.output === handoff?.output.id),
  );
  const comparable =
    word(raw.units) === "USD millions" && holdsThisRun && (!model.sources.length || matchingSource);
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
          summary={
            <CashProxy
              model={model}
              note={<BasisNote model={model} entries={entries} folder={run.folder} />}
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
            href="#evidence/trace/CP-2G"
          />
          <a
            href={`/report/${encodeURIComponent(run.folder)}#evidence/trace/CP-2G`}
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
