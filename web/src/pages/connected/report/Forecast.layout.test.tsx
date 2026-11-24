import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import type { PublishedRun } from "../publishedReport";
import type { buildReportView } from "../reportView";
import { Forecast } from "./Forecast";

type View = ReturnType<typeof buildReportView>;
const run = { folder: "current", issuer: "Northbridge" } as PublishedRun;
const value = (exact: string, display = exact) => ({ status: "value", exact, display });

const periods = ["FY2025E", "FY2026E", "FY2027E"];
const columns = ["Base case", "Downside case"].flatMap((group) =>
  periods.map((label, at) => ({
    label,
    group,
    start: `${String(2025 + at)}-04-01`,
    end: `${String(2026 + at)}-03-31`,
  })),
);
const row = (label: string, cells: unknown[]) => ({
  label,
  band: "",
  kind: "",
  total: false,
  cells,
});
const model = {
  id: "d".repeat(64),
  issuerKey: "issuer",
  runId: "current",
  runFolder: "current",
  href: "",
  download: "",
  sources: [],
  cashflow: {
    units: "USD millions",
    limits: [],
    notes: ["Downside case is the stress case: a shock applied to the base-case drivers."],
    columns,
    rows: [
      row(
        "Adj EBITDA (EBITDA As Defined)",
        ["315", "339", "360", "252", "271", "288"].map((v) => value(v)),
      ),
      row(
        "Net leverage (net debt / Adj EBITDA)",
        ["1.23", "0.75", "0.29", "1.80", "1.45", "1.10"].map((v) => value(v, `${v}x`)),
      ),
      row(
        "Interest coverage (Adj EBITDA / interest)",
        ["8.75", "10.26", "12.00", "6.36", "7.46", "8.73"].map((v) => value(v, `${v}x`)),
      ),
      row(
        "Cash proxy (not issuer free cash flow)",
        ["132", "153", "172", "65", "82", "97"].map((v) => value(v)),
      ),
      row(
        "Distributions",
        Array.from({ length: 6 }, () => value("20")),
      ),
      row(
        "Debt repayment",
        Array.from({ length: 6 }, () => value("50")),
      ),
    ],
  },
};
const view = (models: unknown[]) =>
  ({ catalogue: undefined, lead: undefined, entries: [], modules: [], models }) as unknown as View;

it("lays the tiles in the screen map's order, the lead first after the figures", () => {
  render(<Forecast view={view([model])} run={run} />);
  const names = screen
    .getAllByRole("region")
    .map((region) => region.getAttribute("aria-label"))
    .filter((name) =>
      [
        "Forecast",
        "Net leverage path",
        "What breaks, and when",
        "Assumptions by case",
        "Uses of cash",
        "Forecast grid",
        "Scope and limits",
        "Published model",
        "Cash proxy by case",
      ].includes(name ?? ""),
    );
  expect(names).toEqual([
    "Forecast",
    "Net leverage path",
    "What breaks, and when",
    "Assumptions by case",
    "Uses of cash",
    "Forecast grid",
    "Scope and limits",
    "Published model",
    "Cash proxy by case",
  ]);
  const figures = screen.getByLabelText("Forecast figures");
  const lead = screen.getByRole("region", { name: "Net leverage path" });
  expect(figures.compareDocumentPosition(lead) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  expect(screen.getByText("1.23x peak")).toBeInTheDocument();
});

it("draws no source reference, hash or module code on the page", () => {
  const { container } = render(<Forecast view={view([model])} run={run} />);
  const text = container.textContent;
  expect(text).not.toMatch(/[0-9a-f]{64}/u);
  expect(text).not.toMatch(/\bCP-[A-Z0-9]+\b/u);
  expect(text).not.toMatch(/\.(?:md|json|txt|pdf|xlsx)\b/u);
});

it("draws the header's gap and the run charts only when no forecast model was published", () => {
  render(<Forecast view={view([])} run={run} />);
  expect(screen.getByRole("region", { name: "Forecast" })).toHaveTextContent(
    "No forecast model was published for this run.",
  );
  expect(screen.queryByRole("region", { name: "Net leverage path" })).toBeNull();
  expect(screen.queryByLabelText("Forecast figures")).toBeNull();
  expect(document.getElementById("forecast-run-charts")).not.toBeNull();
});
