import { driverTable } from "./forecastData";
import { RecordedForecastAssumptions, type ForecastSource } from "./ForecastRecord";
import { GapNote, Tile } from "./overview/Tile";

const SPAN = "Assumptions by case";

/** The forward model's drivers by case: one row per driver, one column per case, read-only. */
export function AssumptionsByCase({
  document,
  source,
}: {
  document: Record<string, unknown> | null;
  source?: ForecastSource;
}) {
  const tile = {
    span: 7,
    label: SPAN,
    kicker: "Drivers as the forward model states them · read-only",
    title: SPAN,
  } as const;
  if (document === null)
    return (
      <Tile {...tile}>
        <GapNote>No recorded inputs to tabulate: the inputs record is not matched.</GapNote>
      </Tile>
    );
  const { years, cases, rows } = driverTable(document);
  const caseNames = cases.map(({ name }) => name).join(" · ");
  return (
    <Tile {...tile}>
      <div className="flex flex-col gap-1 text-small text-text-secondary">
        <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-block size-3 rounded-ds-xs bg-warning-fill"
            />
            Differs from base
          </span>
          <span>
            Not stated: the inputs do not give this driver for the case; nothing is assumed
          </span>
        </p>
        {years.length > 0 && <p>Planning years: {years.join(" · ")}</p>}
      </div>
      <div
        role="region"
        aria-label="Assumptions by case table"
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
        className="min-w-0 overflow-x-auto"
      >
        <table className="w-full border-collapse text-small">
          <caption className="sr-only">Forecast drivers by case</caption>
          <thead>
            <tr className="text-left text-caption text-text-tertiary">
              <th scope="col" className="py-2 pr-3 font-medium">
                Driver
              </th>
              {cases.map(({ key, name }) => (
                <th key={key} scope="col" className="px-3 py-2 font-medium">
                  {name}
                </th>
              ))}
              <th scope="col" className="py-2 pl-3 font-medium">
                Trace
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const stated = row.cells.findIndex((cell) => cell.stated);
              const firstKey = cases[stated]?.key;
              const baseStates = row.cells[0]?.stated === true;
              const path = row.shock
                ? ["downside_shock", row.key]
                : [baseStates || firstKey === undefined ? "base_drivers" : firstKey, row.key];
              return (
                <tr key={row.key} className="border-t border-border-hairline align-top">
                  <th scope="row" className="py-2 pr-3 text-left font-medium text-text-primary">
                    {row.name}
                  </th>
                  {row.cells.map((cell, at) => (
                    <td
                      key={cases[at]?.key}
                      className={`px-3 py-2 font-mono tabular-nums ${
                        cell.differs
                          ? "bg-warning-fill text-warning-text"
                          : cell.stated
                            ? "text-text-primary"
                            : "text-gap-text"
                      }`}
                    >
                      {cell.text}
                      {cell.differs && (
                        <>
                          <span aria-hidden="true" className="ml-1">
                            ≠
                          </span>
                          <span className="sr-only">, differs from base</span>
                        </>
                      )}
                    </td>
                  ))}
                  <td className="py-2 pl-3">
                    {source?.(`${row.name} assumptions`, { case: caseNames, inputPath: path })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <details>
        <summary className="cursor-pointer text-small font-medium text-text-link">
          Recorded drivers, rationale and limitations
        </summary>
        <div className="mt-3">
          <RecordedForecastAssumptions document={document} source={source} />
        </div>
      </details>
    </Tile>
  );
}
