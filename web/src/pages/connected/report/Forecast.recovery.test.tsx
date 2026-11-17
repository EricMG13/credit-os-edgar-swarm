import { fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import type { OutputEntry, PublishedRun, Snapshot } from "../publishedReport";
import { FORECAST_INPUTS } from "../publishedReport";
import type { Grid } from "../visuals/LegacyForecast";
import type { buildReportView } from "../reportView";
import { Forecast } from "./Forecast";
import { ReportEvidence } from "./Evidence";
import { PublishedTraceProvider } from "./PublishedTrace";

type View = ReturnType<typeof buildReportView>;
const digest = "a".repeat(64);
const missing = "Not calculable: cash is negative before funding";
const ledger = "Receivables: the forecast inputs do not name the row and period of this line.";
const input = {
  schema_version: "cpos-forecast-inputs/1",
  base: { revenue: { amount: "1000", reason: null }, cash: { amount: "100", reason: null } },
  base_drivers: {
    revenue_growth: {
      values: ["0.05", "0.04"],
      category: "Analyst Interpretation",
      rationale: "Recorded growth.",
      limitation: null,
    },
    interest_rate: {
      values: ["0.06", "0.06"],
      category: "Analyst Interpretation",
      rationale: "Recorded rate.",
      limitation: null,
    },
  },
  downside_shock: { ebitda_decline: "0.20", rate_increase: "0.10" },
  years: [
    { year: 2025, start: "2025-04-01", end: "2026-03-31" },
    { year: 2026, start: "2026-04-01", end: "2027-03-31" },
  ],
  scope_limits: ["Retained synthetic assumptions; not analytical review."],
};
const emptyEvidence = {
  sources: [],
  unused: [],
  unrecorded: [],
  noSourcesModules: [],
  handoffs: [],
  zip: null,
  downloads: [],
  record: { hashes: [], instructions: [], calls: [], cap: null },
};
const run = {
  folder: "run",
  asOf: "2025-03-31",
  modules: {},
  evidence: emptyEvidence,
} as unknown as PublishedRun;
const snapshot = {
  workspace: { runs: {}, outputs: {}, handoffs: {}, models: [] },
  chips: {},
} as unknown as Snapshot;

function fixture() {
  const source: OutputEntry = {
    selected: true,
    output: {
      id: "forward",
      module: "CP-2G",
      sha256: digest,
      label: "Forward credit model",
      href: "",
    },
    sections: [
      {
        heading: FORECAST_INPUTS,
        level: 3,
        line: 70,
        blocks: [
          {
            type: "text",
            line: 72,
            end: 74,
            text: `\x60\x60\x60json\n${JSON.stringify(input)}\n\x60\x60\x60`,
          },
        ],
      },
    ],
  };
  const cashflow: Grid & { units: string; notes: string[]; limits: string[]; other?: unknown } = {
    units: "USD millions",
    notes: [
      "Base case is a conditional illustration.",
      "Downside case is the stress case: a shock applied to the base-case drivers.",
    ],
    limits: [ledger],
    columns: ["Base case", "Downside case"].flatMap((group) => [
      { label: "FY2026E", group, start: "2025-04-01", end: "2026-03-31" },
      { label: "FY2027E", group, start: "2026-04-01", end: "2027-03-31" },
    ]),
    rows: [
      {
        label: "Revenue",
        band: "Revenue",
        total: false,
        cells: ["1050", "1092", "840", "873.6"].map((exact) => ({
          status: "value",
          exact,
          display: exact,
        })),
      },
      {
        label: "Cash proxy (not issuer free cash flow)",
        band: "Cash",
        total: true,
        cells: ["10.127", "12.345", "5", "6"].map((exact, index) => ({
          status: "value",
          exact,
          display: ["10", "12", "5", "6"][index],
        })),
      },
      {
        label: "Receivables",
        band: "Assets",
        total: false,
        cells: Array.from({ length: 4 }, () => ({
          status: "na",
          exact: null,
          display: "n.a.",
          reason: ledger,
        })),
      },
    ],
  };
  const model = {
    id: "model",
    issuerKey: "issuer",
    runId: "run",
    runFolder: "run",
    href: "",
    download: "",
    sources: [{ output: "forward", sha256: digest, role: "forecast" }],
    cashflow,
  };
  const view: View = {
    entries: [source],
    modules: [],
    models: [model],
    catalogue: undefined,
    lead: undefined,
  };
  return { view, source, model };
}

afterEach(() => vi.unstubAllGlobals());

it("keeps the full model qualification ledger once on Evidence Record, not on Forecast", () => {
  const { view, model } = fixture();
  const drawn = render(<Forecast view={view} run={run} />);
  expect(document.body.textContent).not.toContain(ledger);
  expect(screen.getByRole("link", { name: "Model notes and limitations" })).toHaveAttribute(
    "href",
    "#evidence/record",
  );
  drawn.unmount();
  vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("not available")));
  const props = {
    snapshot,
    run,
    entries: view.entries,
    target: "record",
    mode: "synthetic" as const,
    models: [model],
  };
  render(<ReportEvidence {...props} />);
  expect(screen.getAllByText(ledger)).toHaveLength(1);
  expect(screen.getByText(/Receivables.*Base case.*FY2026E/)).toBeInTheDocument();
});

it("states missing or ambiguous forecast trace loss while preserving published figures", () => {
  const { view } = fixture();
  view.entries = [];
  render(<Forecast view={view} run={run} />);
  expect(screen.getByText(/Forecast source details are not available/)).toBeInTheDocument();
  expect(screen.getByRole("figure", { name: "Revenue" })).toBeInTheDocument();
});

it("traces a trend to the actual figure and selected case instead of generic JSON", () => {
  const { view } = fixture();
  render(
    <PublishedTraceProvider
      snapshot={snapshot}
      folder="run"
      entries={view.entries}
      route="forecast"
    >
      <Forecast view={view} run={run} />
    </PublishedTraceProvider>,
  );
  fireEvent.click(
    within(screen.getByRole("figure", { name: "Revenue" })).getByRole("button", {
      name: /Show sources/,
    }),
  );
  let drawer = within(screen.getByRole("dialog"));
  expect(drawer.getByText(/Revenue.*Base case.*FY2026E.*1050/)).toBeInTheDocument();
  expect(drawer.getByRole("link", { name: "Open in Evidence" })).toHaveAttribute(
    "href",
    `/report/run#evidence/forward~${digest}-72`,
  );
  const close = drawer.getAllByRole("button", { name: "Close" })[0];
  if (!close) throw new Error("Missing drawer Close control");
  fireEvent.click(close);
  fireEvent.click(screen.getByRole("radio", { name: /^Downside shock/ }));
  fireEvent.click(
    within(screen.getByRole("figure", { name: "Revenue" })).getByRole("button", {
      name: /Show sources/,
    }),
  );
  drawer = within(screen.getByRole("dialog"));
  expect(drawer.getByText(/Revenue.*Downside shock.*FY2026E.*840/)).toBeInTheDocument();
  expect(drawer.queryByText(/Revenue.*Base case.*FY2026E.*1050/)).toBeNull();
  expect(drawer.getByText("0.20")).toBeInTheDocument();
});

it("shows recorded drivers and the downside shock with a separate facilities notice", () => {
  const { view } = fixture();
  render(<Forecast view={view} run={run} />);
  expect(screen.getByRole("table", { name: "Recorded forecast drivers" })).toBeInTheDocument();
  expect(screen.getByText("Recorded growth.")).toBeInTheDocument();
  expect(screen.getByText("20.00%")).toBeInTheDocument();
  const facilities = screen.getByRole("region", { name: "Recorded facilities" });
  expect(
    within(facilities).getByText(/No facility-level assumptions were recorded/),
  ).toBeInTheDocument();
  expect(
    within(screen.getByRole("table", { name: "Recorded forecast drivers" })).queryByText(
      /facility-level/,
    ),
  ).toBeNull();
});

it("keeps the missing cash-proxy reason on its case card and explains its precision", () => {
  const { view, model } = fixture();
  const cashProxy = model.cashflow.rows[1];
  if (!cashProxy) throw new Error("Missing test cash-proxy row");
  cashProxy.cells[3] = {
    status: "na",
    exact: null,
    display: "n.a.",
    reason: missing,
  };
  render(<Forecast view={view} run={run} />);
  const cases = within(screen.getByRole("radiogroup", { name: "Forecast case" }));
  expect(cases.getByText(missing)).toBeInTheDocument();
  expect(cases.getByText("n.a.")).toBeInTheDocument();
  expect(cases.getAllByText(/to 2 decimals/)).toHaveLength(2);
});

it("uses stored case names for descriptions and reader names for all column groups", () => {
  const { view, model } = fixture();
  model.cashflow.other = {
    columns: [
      { label: "FY2026E", group: "Upside" },
      { label: "FY2027E", group: "Upside" },
    ],
    rows: model.cashflow.rows.map((row) => ({ ...row, cells: row.cells.slice(0, 2) })),
  };
  model.cashflow.notes.push("Upside is the optimistic case recorded by the module.");
  render(<Forecast view={view} run={run} />);
  expect(
    within(screen.getByRole("radiogroup", { name: "Forecast case" })).getByText(
      "Upside is the optimistic case recorded by the module.",
    ),
  ).toBeInTheDocument();
  fireEvent.click(screen.getByRole("radio", { name: /^Downside shock/ }));
  expect(
    within(screen.getByRole("region", { name: "Cash flow model" })).getByRole("columnheader", {
      name: "Downside shock",
    }),
  ).toBeInTheDocument();
});

it("names model choices by recorded cases and date, without builder mode jargon", () => {
  const { view, model } = fixture();
  view.models = [
    { ...model, mode: "candidate" },
    { ...model, id: "other", mode: "alternate" },
  ];
  render(<Forecast view={view} run={run} />);
  const selector = screen.getByRole("combobox", { name: "Published model" });
  expect(selector).not.toHaveTextContent(/candidate|alternate/);
  expect(selector).toHaveTextContent("31 March 2025");
  expect(selector).toHaveTextContent("Base case");
});

it("wraps recorded descriptions, model notes and qualifications at desktop widths", () => {
  const { view } = fixture();
  render(<Forecast view={view} run={run} />);
  expect(screen.getByRole("region", { name: "Model scope and basis" }).className).toMatch(
    /wrap-anywhere/,
  );
  expect(screen.getByRole("radiogroup", { name: "Forecast case" }).className).toMatch(/min-w-0/);
});
