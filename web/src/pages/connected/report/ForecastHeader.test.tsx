import { fireEvent, render, screen, within } from "@testing-library/react";
import { expect, it, vi } from "vitest";
import type { OutputEntry, PublishedRun } from "../publishedReport";
import type { ReportView } from "../reportView";
import { forecastMeasure } from "./forecastData";
import { ForecastHeader, ForecastStats } from "./ForecastHeader";

const run = { folder: "current", issuer: "Northbridge" } as PublishedRun;

function forward(text: string): OutputEntry {
  return {
    selected: true,
    output: {
      id: "forward",
      sha256: "b".repeat(64),
      module: "CP-2G",
      label: "",
      href: "",
      state: { established: true, declared: null },
    },
    sections: [
      { heading: "Findings", level: 2, line: 17, blocks: [] },
      {
        heading: "Bottom line",
        level: 3,
        line: 19,
        blocks: [{ type: "text", line: 21, end: 21, text }],
      },
    ],
  };
}
const view = (entries: OutputEntry[]) =>
  ({
    catalogue: undefined,
    lead: undefined,
    entries,
    modules: [{ id: "CP-2G", name: "Forward credit model", state: "Delivered", outputs: entries }],
    models: [],
  }) as unknown as ReportView;

function header(entries: OutputEntry[], onSelect = vi.fn()) {
  return render(
    <ForecastHeader
      run={run}
      view={view(entries)}
      preview={false}
      handoff={entries[0]}
      cases={[
        { name: "Base case", rawGroup: "Base case", hatched: false },
        { name: "Downside shock", rawGroup: "Downside case", hatched: true },
      ]}
      current="Base case"
      onSelect={onSelect}
      basis={[{ label: "Units", value: "USD millions" }]}
      hasModel
    />,
  );
}

it("leads with the forward model's bottom line in its words, with one trace", () => {
  header([forward("Net leverage falls to 3.05x by FY2027 and cover never drops below 3.01x.")]);
  const tile = within(screen.getByRole("region", { name: "Forecast" }));
  expect(
    tile.getByText("Net leverage falls to 3.05x by FY2027 and cover never drops below 3.01x."),
  ).toBeInTheDocument();
  expect(tile.getByRole("link", { name: "Source for the forward view" })).toHaveAttribute(
    "href",
    expect.stringContaining("-21") as string,
  );
  expect(tile.getByText("USD millions")).toBeInTheDocument();
  expect(tile.getByText("Forward credit model, delivered")).toBeInTheDocument();
});

it("switches case from the header and marks a case with no leverage path", () => {
  const onSelect = vi.fn();
  header([forward("The view.")], onSelect);
  const cases = within(screen.getByRole("group", { name: "Case" }));
  expect(cases.getByRole("button", { name: "Base case" })).toHaveAttribute("aria-pressed", "true");
  fireEvent.click(
    cases.getByRole("button", { name: "Downside shock, no leverage path in the model" }),
  );
  expect(onSelect).toHaveBeenCalledWith("Downside shock");
  expect(screen.getByText("Hatched: no leverage path in the model")).toBeInTheDocument();
});

it("draws the gap in place of the bottom line when the forward model did not run", () => {
  render(
    <ForecastHeader
      run={run}
      view={{ ...view([]), modules: [] }}
      preview={false}
      handoff={undefined}
      cases={[]}
      current={undefined}
      onSelect={vi.fn()}
      basis={[]}
      hasModel={false}
    />,
  );
  expect(screen.getByText("Forward credit model did not run in this run.")).toBeInTheDocument();
  expect(screen.queryByRole("group", { name: "Case" })).toBeNull();
});

const value = (exact: string) => ({ status: "value", exact, display: `${exact}x` });
function measure(label: string, cells: unknown[]) {
  return forecastMeasure(
    {
      cashflow: {
        columns: ["FY2025E", "FY2026E", "FY2027E"].map((period) => ({
          label: period,
          group: "Base case",
        })),
        rows: [{ label, band: "", kind: "", total: false, cells }],
      },
    },
    /./,
  );
}

it("labels its selections as selections: highest and lowest published years, ties and gaps named", () => {
  render(
    <ForecastStats
      view={view([])}
      folder="current"
      leverage={measure("Net leverage", [value("5.65"), value("5.50"), value("5.65")])}
      cover={measure("Interest coverage", [
        value("3.40"),
        { status: "unavailable", display: "n.a.", reason: "Interest is zero" },
        value("3.90"),
      ])}
      group="Base case"
      caseName="Base case"
      basis="Base case · Adj EBITDA"
    />,
  );
  const strip = within(screen.getByLabelText("Forecast figures"));
  expect(
    strip.getByText("Net leverage: highest published forecast year, Base case"),
  ).toBeInTheDocument();
  expect(strip.getAllByText("5.65x")).toHaveLength(2);
  // A tie is named, not resolved silently to one year.
  expect(strip.getByText("FY2025E and FY2027E")).toBeInTheDocument();
  expect(strip.getByText("Net leverage, FY2027E")).toBeInTheDocument();
  expect(strip.getByText(/from 5.65x in FY2025E/)).toBeInTheDocument();
  expect(
    strip.getByText("Interest cover: lowest published forecast year, Base case"),
  ).toBeInTheDocument();
  expect(strip.getByText("3.40x")).toBeInTheDocument();
  // The year with no figure is named in the same cell.
  expect(strip.getByText("FY2026E not calculated")).toBeInTheDocument();
  expect(strip.queryByText(/peak|minimum/i)).toBeNull();
  expect(strip.getByText("Neither Liquidity nor Refinancing & LME states one")).toBeInTheDocument();
});

it("says why a stat is empty, never zero, and singles out nothing on a one-point path", () => {
  render(
    <ForecastStats
      view={view([])}
      folder="current"
      leverage={null}
      cover={measure("Interest coverage", [
        value("3.40"),
        { status: "unavailable", display: "n.a." },
        { status: "unavailable", display: "n.a." },
      ])}
      group="Base case"
      caseName="Base case"
      basis=""
    />,
  );
  const strip = within(screen.getByLabelText("Forecast figures"));
  expect(strip.getAllByText("The model publishes no net leverage figure")).toHaveLength(2);
  expect(
    strip.getByText("One published forecast year only: no interest cover year to single out"),
  ).toBeInTheDocument();
  expect(strip.queryByText("3.40x")).toBeNull();
});

it("offers no way to a forward model the run does not have", () => {
  render(
    <ForecastHeader
      run={run}
      view={{ ...view([]), modules: [] }}
      preview={false}
      handoff={undefined}
      cases={[]}
      current={undefined}
      onSelect={vi.fn()}
      basis={[]}
      hasModel={false}
    />,
  );
  expect(screen.queryByRole("link", { name: "Open module" })).toBeNull();
});
