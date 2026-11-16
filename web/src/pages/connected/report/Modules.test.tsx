import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
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

afterEach(cleanup);

const CODE = /\(CP-[A-Za-z0-9]+\)/;
type Sections = OutputEntry["sections"];

function renderSections(sections: Sections, extra: Partial<OutputEntry["output"]> = {}) {
  const entry = output("c", true);
  entry.output = { ...entry.output, module: "CP-2", ...extra };
  entry.sections = sections;
  const props = fixture([]);
  props.view.modules[0] = { ...props.view.modules[0], outputs: [entry] } as View["modules"][number];
  props.view.entries = [entry];
  return render(<Modules {...props} module="CP-2" />);
}

const FINDINGS: Sections[number] = { heading: "Findings", level: 2, line: 1, blocks: [] };

it("drops the code of a named module from a row's trace drawer statement", async () => {
  renderSections([
    FINDINGS,
    {
      heading: "Cash position",
      level: 3,
      line: 3,
      blocks: [
        {
          type: "table",
          line: 4,
          headers: ["Item", "Amount", "Source"],
          rows: [
            {
              line: 6,
              cells: [
                "Cash runway",
                "14 months",
                "Financial foundation (CP-1); filing.pdf, page 3",
              ],
            },
          ],
        },
      ],
    },
  ]);
  expect(document.body.textContent).not.toMatch(CODE);
  fireEvent.click(screen.getByRole("button", { name: "Show sources for Cash runway" }));
  const drawer = await screen.findByRole("dialog");
  expect(drawer.textContent).toContain("Financial foundation");
  expect(drawer.textContent).toContain("filing.pdf, page 3");
  expect(drawer.textContent).not.toMatch(CODE);
});

it("drops the code of a named module from a paragraph's trace drawer statement", async () => {
  renderSections([
    FINDINGS,
    {
      heading: "Credit implication",
      level: 3,
      line: 3,
      blocks: [
        {
          type: "text",
          line: 4,
          end: 5,
          text: "Cash covers the year, as Liquidity (CP-2D) sets out.\nBasis: Liquidity (CP-2D)",
        },
      ],
    },
  ]);
  fireEvent.click(screen.getByRole("button", { name: "Show sources for this passage" }));
  const drawer = await screen.findByRole("dialog");
  expect(drawer.textContent).toContain("as Liquidity sets out");
  expect(drawer.textContent).not.toMatch(CODE);
});

it("drops the code from a calculation node's source in the trace drawer", async () => {
  renderSections([
    FINDINGS,
    {
      heading: "Key findings",
      level: 3,
      line: 3,
      blocks: [
        {
          type: "text",
          line: 4,
          end: 5,
          text: "Contractual principal is USD 25,068 million.\nBasis: calculation C05",
        },
      ],
    },
    {
      heading: "Calculations",
      level: 2,
      line: 20,
      blocks: [
        {
          type: "table",
          line: 21,
          headers: ["ID", "Calculation", "Inputs", "Result", "Source"],
          rows: [
            {
              line: 23,
              cells: [
                "C05",
                "Contractual principal",
                "24880 +188",
                "25068",
                "Financial foundation (CP-1); filing.pdf, pages 73-73",
              ],
            },
          ],
        },
      ],
    },
  ]);
  fireEvent.click(screen.getByRole("button", { name: "Show sources for this passage" }));
  const drawer = await screen.findByRole("dialog");
  expect(drawer.textContent).toContain("Contractual principal");
  expect(drawer.textContent).toContain("filing.pdf, pages 73-73");
  expect(drawer.textContent).not.toMatch(CODE);
});

it("names a row's trace control without the code in the Module cell", () => {
  renderSections([
    FINDINGS,
    {
      heading: "What changed: the analysis",
      level: 3,
      line: 3,
      blocks: [
        {
          type: "table",
          line: 4,
          headers: ["Module", "Status", "Cause", "Why"],
          rows: [
            { line: 6, cells: ["Liquidity (CP-2D)", "Unchanged", "None", "Nothing differs."] },
          ],
        },
      ],
    },
  ]);
  expect(screen.getByRole("button", { name: "Show sources for Liquidity" })).toBeInTheDocument();
  const coded = screen
    .getAllByRole("button")
    .map((button) => button.getAttribute("aria-label") ?? button.textContent)
    .filter((name) => CODE.test(name));
  expect(coded).toEqual([]);
});

it("opens the confidence tile's trace on the inputs the score was computed from", async () => {
  renderModule({ confidence: { value: 72, band: "Medium" } });
  const tile = screen.getByText("Confidence score").closest("li");
  fireEvent.click(
    within(tile as HTMLElement).getByRole("button", { name: "Show sources for this figure" }),
  );
  const drawer = await screen.findByRole("dialog");
  expect(drawer.textContent).not.toContain("Basis was not recorded for this item");
  expect(drawer.textContent).toContain("Coverage");
  expect(drawer.textContent).toContain("High");
});
