import { fireEvent, render, screen, within } from "@testing-library/react";
import type { OutputEntry } from "../publishedReport";
import { BreakPoints, breakPointView } from "./BreakPoints";

function entry(heading: string, headers: string[], rows: string[][]): OutputEntry {
  return {
    output: { module: "CP-2A", id: "output", sha256: "hash", href: "output.md", label: "Downside" },
    selected: true,
    sections: [
      {
        heading,
        line: 1,
        level: 3,
        blocks: [
          {
            type: "table",
            line: 3,
            headers,
            rows: rows.map((cells, i) => ({ line: 5 + i, cells })),
          },
        ],
      },
    ],
  };
}

it("reads the canonical ranking's shares, drawing zero and keeping the original exact values", () => {
  const data = breakPointView(
    entry(
      "First-break ranking",
      ["Break point", "Required EBITDA decline"],
      [
        ["Cash flow reaches zero", "0.125000"],
        ["Cover already below watch level", "0"],
      ],
    ),
  );
  if (!data) throw new Error("ranking was rejected");
  const { container } = render(
    <BreakPoints data={data} href={(line) => `#evidence/0-${String(line)}`} />,
  );
  const chart = screen.getByRole("figure", { name: "EBITDA break points" });
  expect(within(chart).getAllByRole("listitem")[0]).toHaveTextContent(
    "Cover already below watch level",
  );
  expect(container.querySelector('[data-decline="0"]')).toHaveStyle({ width: "100%" });
  fireEvent.click(within(chart).getByRole("radio", { name: "Table" }));
  expect(within(chart).getByRole("cell", { name: "0.125000" })).toBeInTheDocument();
  expect(within(chart).getByRole("cell", { name: "0" })).toBeInTheDocument();
  expect(within(chart).getAllByRole("link", { name: "Break point source" }).at(-1)).toHaveAttribute(
    "href",
    "#evidence/0-5",
  );
});

it("keeps incompatible spellings visible without plotting them", () => {
  const data = breakPointView(
    entry(
      "T2B.7 First-break ranking",
      ["Rank", "Break point", "Required EBITDA decline"],
      [
        ["Rank 1", "Cover falls to 1.25x", "0.10 (90%)"],
        ["Rank 2", "FCF reaches zero", "12.50%"],
        ["Rank 3", "Liquidity dries up", "Not calculated: facility terms missing"],
      ],
    ),
  );
  if (!data) throw new Error("ranking was rejected");
  const { container } = render(<BreakPoints data={data} href={() => "#evidence"} />);
  expect(container.querySelectorAll("[data-decline]")).toHaveLength(1);
  expect(screen.getByText("0.10 (90%)")).toBeInTheDocument();
  expect(screen.getByText("Not calculated: facility terms missing")).toBeInTheDocument();
});

const RETAINED_HEADERS = [
  "Break ID",
  "Break",
  "EBITDA decline at break (interest held)",
  "EBITDA decline at break (k = 0.05)",
  "Status",
  "Source",
];
const RETAINED_ROWS = [
  ["B1", "FCF reaches zero", "0.10 (10%)", "0.20 (20%)", "Calculated", "Filing p.2"],
  ["B2", "Cover reaches watch level", "0.15 (15%)", "0.12 (12%)", "Watch level", "Filing p.1"],
  ["B3", "Net leverage watch level", "0.30 (30%)", "0.25 (25%)", "Calculated", "Filing p.1"],
];

// AGENTS.md: delivery adds no analysis. A table without a module-written ranking keeps its order.
it("keeps the handoff's row order for the break points table, as a list that ranks nothing", () => {
  const data = breakPointView(entry("T2DS.6 Break points", RETAINED_HEADERS, RETAINED_ROWS));
  if (!data) throw new Error("break points were rejected");
  render(<BreakPoints data={data} href={() => "#evidence"} />);
  fireEvent.change(screen.getByRole("combobox", { name: "Cash-interest basis" }), {
    target: { value: "1" },
  });
  const chart = screen.getByRole("figure", { name: "EBITDA break points" });
  expect(chart.querySelector("ol")).toBeNull();
  const order = (nodes: HTMLElement[]) => nodes.map((node) => node.textContent.slice(0, 5));
  expect(order(within(chart).getAllByRole("listitem"))).toEqual(["FCF r", "Cover", "Net l"]);
  fireEvent.click(within(chart).getByRole("radio", { name: "Table" }));
  expect(order(within(chart).getAllByRole("row").slice(1))).toEqual(["FCF r", "Cover", "Net l"]);
});

it("keeps drawing a module-written first-break ranking as an ordered list", () => {
  const data = breakPointView(
    entry(
      "First-break ranking",
      ["Break point", "Required EBITDA decline"],
      [
        ["Cash flow reaches zero", "0.125000"],
        ["Cover already below watch level", "0"],
      ],
    ),
  );
  if (!data) throw new Error("ranking was rejected");
  const { container } = render(<BreakPoints data={data} href={() => "#evidence"} />);
  expect(container.querySelector("ol")).not.toBeNull();
});
