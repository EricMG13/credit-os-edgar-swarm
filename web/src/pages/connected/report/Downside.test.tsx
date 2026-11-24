import { fireEvent, render, screen, within } from "@testing-library/react";
import { type OutputEntry, type Table } from "../publishedReport";
import { Downside, downsideView } from "./Downside";

function table(line: number, headers: string[], rows: string[][]): Table {
  return {
    type: "table",
    line,
    headers,
    rows: rows.map((cells, i) => ({ line: line + 2 + i, cells })),
  };
}

function entry(shock: string, stressedCash: string): OutputEntry {
  const cases = table(
    3,
    [
      "Scenario ID",
      "Name",
      "EBITDA decline s",
      "Cash-interest increase k",
      "Anchor",
      "What the assumption leaves out",
      "Category",
      "Confidence",
    ],
    [
      ["c", "Observed period", "0", "0", "LTM to 2025-03-31", "", "", ""],
      [
        "a",
        "Lower margin",
        shock,
        "0",
        "Stress assumption",
        "Funding unchanged",
        "Analyst Interpretation",
        "Medium",
      ],
    ],
  );
  const results = table(
    20,
    ["Metric", "a", "c", "Source"],
    [
      ["Free cash flow (USD millions)", stressedCash, "62.00", "Filing p.1"],
      ["Interest cover (x)", "1.00", "1.70", "Filing p.2"],
    ],
  );
  return {
    output: { module: "CP-2A", id: "bound", label: "Downside", sha256: "hash", href: "file.md" },
    sections: [
      { heading: "T2DS.1 Scenarios", level: 3, line: 2, blocks: [cases] },
      { heading: "T2DS.4 Stressed flows and metrics", level: 3, line: 19, blocks: [results] },
    ],
    selected: true,
  };
}

const tile = () => screen.getByRole("region", { name: "Downside scenarios" });

it("contains unbroken scenario anchors and scope text within the desktop report", () => {
  const data = downsideView(entry("0.10 (10%)", "50.00"));
  if (!data) throw new Error("Test scenario matrix was rejected");
  const selected = data.cases[1];
  if (!selected) throw new Error("Test scenario missing");
  selected.anchor = `Anchor${"y".repeat(150)}`;
  selected.scope = `Left out ${"z".repeat(150)}`;
  render(<Downside data={data} href={(line) => `#evidence/0-${String(line)}`} />);
  expect(tile().className).toMatch(/wrap-anywhere/);
});

it("joins the selected scenario by its identifier and keeps conflicting currencies in the source table", () => {
  const source = entry("0.10 (10%)", "-1.20 (-EUR 1.20 million)");
  const data = downsideView(source);
  if (!data) throw new Error("Test scenario matrix was rejected");
  render(<Downside data={data} href={(line) => `#evidence/0-${String(line)}`} />);
  const figure = within(tile()).getByRole("img");
  expect(within(figure).queryByText(/Free cash flow/)).toBeNull();
  expect(within(tile()).getByText(/Free cash flow \(USD millions\) is not drawn/)).toBeVisible();
  fireEvent.click(within(tile()).getByRole("button", { name: "Table" }));
  const row = within(tile()).getByRole("row", { name: /Interest cover/ });
  expect(
    within(row)
      .getAllByRole("cell")
      .slice(0, 2)
      .map((item) => item.textContent),
  ).toEqual(["1.70", "1.00"]);
  expect(
    within(tile()).getByRole("link", { name: "Source for Interest cover (x)" }),
  ).toHaveAttribute("href", "#evidence/0-23");
  expect(
    within(tile()).getByRole("cell", { name: "-1.20 (-EUR 1.20 million)" }),
  ).toBeInTheDocument();
});

it("draws every case on each measure's own scale from zero, values as written, the control marked", () => {
  const data = downsideView(entry("0.10 (10%)", "50.00"));
  if (!data) throw new Error("Test scenario matrix was rejected");
  render(<Downside data={data} href={(line) => `#evidence/0-${String(line)}`} />);
  const figure = within(tile()).getByRole("img");
  expect(figure).toHaveAccessibleName(
    /Free cash flow.*Observed period \(control\) 62\.00.*Lower margin 50\.00/,
  );
  for (const text of ["62.00", "50.00", "1.70", "1.00"])
    expect(within(figure).getByText(text)).toBeInTheDocument();
  const bars = [...figure.querySelectorAll("[data-bar]")].map((bar) =>
    bar.getAttribute("data-bar"),
  );
  expect(bars).toEqual(["62.00", "50.00", "1.70", "1.00"]);
  expect(figure.querySelector('[data-bar="62.00"]')).toHaveStyle({ left: "0%", width: "100%" });
  expect(within(figure).getAllByText("control")).toHaveLength(2);
});

it.each(["0", "0.10 (25%)"])(
  "keeps the source table when the control or shock is ambiguous (%s)",
  (shock) => {
    const data = downsideView(entry(shock, "10"));
    expect(data?.cases).toEqual([]);
    expect(data?.matrix.rows).toHaveLength(2);
    if (!data) throw new Error("matrix was rejected");
    render(<Downside data={data} href={(line) => `#evidence/0-${String(line)}`} />);
    expect(within(tile()).queryByRole("img")).toBeNull();
    expect(
      within(tile()).getByText(
        "The handoff does not bind a unique control and named cases to these results.",
      ),
    ).toBeVisible();
    fireEvent.click(within(tile()).getByRole("button", { name: "Table" }));
    expect(within(tile()).getByRole("cell", { name: "10" })).toBeVisible();
  },
);

it("keeps the comparison on the owning output", () => {
  const source = entry("0.10", "10");
  expect(downsideView({ ...source, output: { ...source.output, module: "CP-2G" } })).toBeNull();
});

it("does not plot a module marked not established", () => {
  const source = entry("0.10", "10");
  expect(
    downsideView({
      ...source,
      output: { ...source.output, state: { established: false, declared: null } },
    }),
  ).toBeNull();
});

it("J3-016 labels the chosen stress and displays both shock quantities as percentages", () => {
  const data = downsideView(entry("0.10 (10%)", "10"));
  if (!data) throw new Error("Test scenario matrix was rejected");
  render(<Downside data={data} href={(line) => `#evidence/${String(line)}`} />);
  const choice = screen.getByRole("group", {
    name: "Stress case to compare with the unstressed control",
  });
  expect(within(choice).getByRole("button", { name: "Lower margin" })).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  const decline = screen.getByText("EBITDA decline").closest("div");
  const interest = screen.getByText("Cash-interest increase").closest("div");
  expect(decline).toHaveTextContent("10%");
  expect(decline).not.toHaveTextContent("0.10");
  expect(interest).toHaveTextContent("0%");
});
