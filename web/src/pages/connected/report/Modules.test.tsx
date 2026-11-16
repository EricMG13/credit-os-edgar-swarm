import { render, screen, within } from "@testing-library/react";
import { expect, it } from "vitest";
import type { OutputEntry, PublishedRun, Snapshot } from "../publishedReport";
import type { buildReportView } from "../reportView";
import { Modules } from "./Modules";

type View = ReturnType<typeof buildReportView>;
function output(id: string, selected = false): OutputEntry {
  return {
    selected,
    output: { id, module: "CP-1", label: id, href: "", sha256: id.repeat(64) },
    sections: [],
  };
}
function fixture(outputs: OutputEntry[]) {
  const view: View = {
    entries: outputs,
    modules: [
      { id: "CP-2", name: "Credit analysis", state: "Delivered", outputs: [] },
      { id: "CP-1", name: "Financial foundation", state: "Delivered", outputs },
    ],
    catalogue: undefined,
    lead: undefined,
    models: [],
  };
  return {
    view,
    run: { folder: "retained case", issuer: "Issuer", asOf: "2026-10-31" } as PublishedRun,
    snapshot: { chips: {} } as Snapshot,
  };
}

it("defaults to financial foundation and the designated output, retaining alternate trace identity", () => {
  const props = fixture([output("a"), output("b", true)]);
  const { rerender } = render(<Modules {...props} />);
  expect(screen.getByRole("heading", { name: "Financial foundation" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Open Evidence" })).toHaveAttribute(
    "href",
    `/report/retained%20case#evidence/b~${"b".repeat(64)}`,
  );
  const saved = within(screen.getByRole("navigation", { name: "Saved outputs" }));
  expect(saved.getByRole("link", { name: "Designated handoff" })).toHaveAttribute(
    "aria-current",
    "page",
  );
  rerender(<Modules {...props} output="0" />);
  expect(screen.getByRole("link", { name: "Open Evidence" })).toHaveAttribute(
    "href",
    `/report/retained%20case#evidence/a~${"a".repeat(64)}`,
  );
  expect(saved.getByRole("link", { name: "Retained output 1" })).toHaveAttribute(
    "aria-current",
    "page",
  );
  expect(saved.getByRole("link", { name: "Designated handoff" })).not.toHaveAttribute(
    "aria-current",
  );
});

it("allows the sole retained output without a designation but withholds ambiguous multiples", () => {
  const { rerender } = render(<Modules {...fixture([output("a")])} />);
  expect(screen.getByRole("link", { name: "Open Evidence" })).toBeInTheDocument();
  rerender(<Modules {...fixture([output("a"), output("b")])} />);
  expect(screen.getByRole("heading", { name: "Handoff unavailable" })).toBeInTheDocument();
  expect(screen.queryByRole("link", { name: "Open Evidence" })).toBeNull();
});

it.each(["", "00", "01", "-1", "+1", "1e0", "1.0", " 1", "2", "999999999999999999999999"])(
  "does not substitute the default for an invalid or absent output address: %j",
  (address) => {
    render(<Modules {...fixture([output("a"), output("b", true)])} output={address} />);
    expect(screen.getByRole("heading", { name: "Handoff unavailable" })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Open Evidence" })).toBeNull();
  },
);

it("respects explicit modules and does not substitute for an unknown module", () => {
  const props = fixture([output("a", true)]);
  const { rerender } = render(<Modules {...props} module="CP-2" />);
  expect(screen.getByRole("heading", { name: "Credit analysis" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Handoff unavailable" })).toBeInTheDocument();
  rerender(<Modules {...props} module="missing" />);
  expect(screen.getByText("This module is unavailable in the published run.")).toBeInTheDocument();
  expect(screen.queryByLabelText("Module")).toBeNull();
});

it("leads CP-1 with the module's own bottom line, not a sentence the app wrote", () => {
  const lead = "Leverage is high but liquidity covers the next two years.";
  const entry = output("a", true);
  entry.sections = [
    { heading: "Findings", level: 2, line: 1, blocks: [] },
    {
      heading: "Bottom line",
      level: 3,
      line: 2,
      blocks: [{ type: "text", line: 3, end: 3, text: lead }],
    },
    {
      heading: "Period table",
      level: 3,
      line: 5,
      blocks: [
        {
          type: "table",
          headers: ["Period", "Start", "End"],
          line: 6,
          rows: [{ line: 7, cells: ["FY2026", "2026-01-01", "2026-12-31"] }],
        },
      ],
    },
    {
      heading: "Financials and credit metrics",
      level: 3,
      line: 10,
      blocks: [
        {
          type: "table",
          headers: ["Metric", "FY2026", "Unit"],
          line: 11,
          rows: [
            { line: 12, cells: ["(Total debt plus financing obligations) / EBITDA", "5.4", "x"] },
          ],
        },
      ],
    },
  ];
  const props = fixture([entry]);
  props.view.catalogue = {
    id: "first",
    issuer: "A",
    name: "A",
    title: "",
    date: "2027-01-01",
    period: "",
    sector: "",
    metrics: { cash: { value: 0, unit: "US$m", period: "2026-12-31" } },
  };
  render(<Modules {...props} />);
  expect(screen.queryByText(/Lease-adjusted gross leverage is/)).toBeNull();
  expect(screen.getByText(lead)).toBeVisible();
});

function renderModule(extra: Partial<OutputEntry["output"]>) {
  const entry = output("c", true);
  entry.output = { ...entry.output, module: "CP-2", ...extra };
  entry.sections = [
    { heading: "Findings", level: 2, line: 1, blocks: [] },
    {
      heading: "Confidence inputs",
      level: 3,
      line: 4,
      blocks: [
        {
          type: "table",
          headers: ["Input", "Value"],
          line: 5,
          rows: [{ line: 6, cells: ["Coverage", "High"] }],
        },
      ],
    },
  ];
  const props = fixture([]);
  props.view.modules[0] = { ...props.view.modules[0], outputs: [entry] } as View["modules"][number];
  props.view.entries = [entry];
  return render(<Modules {...props} module="CP-2" />);
}

it("shows the published confidence score with its band", () => {
  renderModule({ confidence: { value: 72, band: "Medium" } });
  const tile = screen.getByText("Confidence score").closest("li");
  expect(tile).toHaveTextContent("72");
  expect(tile).toHaveTextContent("Medium");
  expect(
    within(tile as HTMLElement).getByRole("button", { name: "Show sources for this figure" }),
  ).toBeVisible();
  expect(screen.queryByRole("heading", { name: "Confidence inputs" })).toBeNull();
});

it("shows why there is no score", () => {
  renderModule({ confidence: { missing: "The confidence inputs could not be read." } });
  expect(screen.getByText("The confidence inputs could not be read.")).toBeVisible();
});

it("draws nothing for a run that predates the score", () => {
  renderModule({});
  expect(screen.queryByText("Confidence score")).toBeNull();
});

it("skips no heading level on a module page that draws a relationship map", () => {
  const map = {
    type: "table" as const,
    line: 20,
    headers: ["From", "Relationship", "Edge type", "To", "Evidence"],
    rows: [{ line: 21, cells: ["A", "Owns", "Ownership", "B", "Source 1"] }],
  };
  const entry: OutputEntry = {
    selected: true,
    output: {
      id: "m",
      module: "CP-1",
      label: "m",
      href: "",
      sha256: "m".repeat(64),
      maps: [{ name: "credit-risk transmission", table: 20 }],
    },
    sections: [
      {
        heading: "Bottom line",
        level: 3,
        line: 10,
        blocks: [{ type: "text", line: 11, end: 11, text: "A verdict." }],
      },
      { heading: "Transmission", level: 3, line: 19, blocks: [map] },
    ],
  };
  const { container } = render(<Modules {...fixture([entry])} />);
  expect(screen.getByRole("heading", { name: "credit-risk transmission" })).toBeInTheDocument();
  const levels = Array.from(container.querySelectorAll("h1,h2,h3,h4,h5,h6"), (node) =>
    Number(node.tagName.slice(1)),
  );
  levels.forEach((level, at) => {
    expect(level).toBeLessThanOrEqual((levels[at - 1] ?? 1) + 1);
  });
});
