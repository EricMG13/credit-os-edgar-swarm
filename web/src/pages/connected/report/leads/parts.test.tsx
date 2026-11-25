import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { Bento } from "../overview/Tile";
import {
  CompactGap,
  DatedList,
  Disclosure,
  edgeTable,
  GapCell,
  KeyValues,
  LeadFigure,
  LeadGap,
  mapLayout,
  NodeList,
  Prose,
  statedGap,
  TableRegion,
} from "./parts";

afterEach(cleanup);

it("draws the figure first and its table behind a pressed Figure / Table switch", () => {
  render(
    <Bento>
      <LeadFigure
        span={8}
        label="Liquidity bridge"
        title="Liquidity falls to 570 after the repayment"
        basis="US$m · twelve months"
        figure={<svg role="img" aria-label="Opening 900 to closing 570" />}
        table={{ head: ["Step", "Amount"], rows: [{ label: "Opening", cells: ["900"] }] }}
      />
    </Bento>,
  );
  const tile = screen.getByRole("region", { name: "Liquidity bridge" });
  expect(within(tile).getByRole("heading", { level: 3 })).toHaveTextContent(
    "Liquidity falls to 570 after the repayment",
  );
  expect(within(tile).getByText("US$m · twelve months")).toBeVisible();
  expect(within(tile).getByRole("img", { name: "Opening 900 to closing 570" })).toBeVisible();
  const figure = within(tile).getByRole("button", { name: "Figure" });
  expect(figure).toHaveAttribute("aria-pressed", "true");
  fireEvent.click(within(tile).getByRole("button", { name: "Table" }));
  expect(within(tile).queryByRole("img")).toBeNull();
  expect(within(tile).getByRole("cell", { name: "900" })).toBeVisible();
});

it("draws a gap in place of the figure with the reason only, compact", () => {
  render(
    <LeadGap
      span={4}
      label="Revenue mix"
      title="Revenue mix"
      reason="The handoff states the mix only in words."
    />,
  );
  const tile = screen.getByRole("region", { name: "Revenue mix" });
  const reason = within(tile).getByText("The handoff states the mix only in words.");
  expect(reason).toBeVisible();
  expect(reason).not.toHaveClass("min-h-24");
  expect(reason).not.toHaveClass("gap-hatch");
  expect(tile).toHaveClass("self-start");
  expect(tile.textContent).not.toMatch(/Needs|methodology|contract/);
  expect(within(tile).queryByText("0")).toBeNull();
});

it("draws a node map as lists: each node once, its edges under it", () => {
  render(
    <NodeList
      label="Ownership and control"
      edges={[
        {
          from: "Parent",
          relationship: "Owns all shares",
          type: "Ownership",
          to: "Issuer",
          line: 4,
        },
        {
          from: "Parent",
          relationship: "Guarantees notes",
          type: "Guarantee",
          to: "Notes",
          line: 5,
        },
        { from: "Issuer", relationship: "Borrows", type: "Other stated", to: "Notes", line: 6 },
      ]}
    />,
  );
  const map = screen.getByRole("list", { name: "Ownership and control" });
  const nodes = within(map)
    .getAllByRole("listitem")
    .filter((item) => item.parentElement === map);
  expect(nodes.map((node) => within(node).getByRole("heading").textContent)).toEqual([
    "Parent",
    "Issuer",
  ]);
  expect(within(nodes[0] as HTMLElement).getAllByRole("listitem")).toHaveLength(2);
  expect(within(nodes[0] as HTMLElement).getByText("Owns all shares")).toBeVisible();
  expect(within(nodes[0] as HTMLElement).getByText("Guarantee")).toBeVisible();
});

it("lists dated events at their stated precision", () => {
  render(
    <DatedList
      label="Funding dates"
      events={[
        {
          date: "2025-Q3",
          precision: "quarter",
          event: "Review",
          status: "Scenario — modelled",
          line: 3,
        },
        {
          date: "2026",
          precision: "year",
          event: "Maturity",
          status: "Scheduled — maturity",
          line: 4,
        },
      ]}
    />,
  );
  const list = screen.getByRole("list", { name: "Funding dates" });
  expect(within(list).getByText("2025-Q3")).toHaveClass("font-mono");
  expect(within(list).getByText("Scenario")).toBeVisible();
  expect(within(list).getAllByRole("listitem")).toHaveLength(2);
});

it("draws a passage paragraph by paragraph and keeps one naming a source in Evidence", () => {
  render(
    <Prose
      label="Causal scenarios"
      paragraphs={[
        { line: 2, text: "A traffic shock cuts aftermarket sales." },
        { line: 4, text: null },
      ]}
    />,
  );
  expect(screen.getByText("A traffic shock cuts aftermarket sales.")).toBeVisible();
  expect(
    screen.getByText("This paragraph cites its sources by name; it is in Evidence."),
  ).toBeVisible();
});

it("splits an event's status at its first dash only and keeps the rest as the detail", () => {
  render(
    <DatedList
      label="Funding dates"
      events={[
        {
          date: "2026",
          precision: "year",
          event: "Maturity",
          status: "Scheduled — maturity — subject to extension",
          line: 4,
        },
      ]}
    />,
  );
  const list = screen.getByRole("list", { name: "Funding dates" });
  expect(within(list).getByText("Scheduled").parentElement).toHaveTextContent(
    "Scheduled · maturity — subject to extension",
  );
});

it("names each paragraph's trace by its place in the passage", () => {
  render(
    <Prose
      label="Causal scenarios"
      href={(line) => `#evidence/run/${String(line)}`}
      paragraphs={[
        { line: 2, text: "A traffic shock cuts aftermarket sales." },
        { line: 4, text: "Recovery takes two years." },
      ]}
    />,
  );
  expect(
    screen.getByRole("link", { name: "Source for Causal scenarios, paragraph 1" }),
  ).toHaveAttribute("href", "#evidence/run/2");
  expect(
    screen.getByRole("link", { name: "Source for Causal scenarios, paragraph 2" }),
  ).toHaveAttribute("href", "#evidence/run/4");
});

it("shows an empty edge cell in the table view as missing, not as a crash", () => {
  render(
    <Bento>
      <LeadFigure
        span={12}
        label="Ownership"
        title="Ownership"
        figure={<p>map</p>}
        table={edgeTable([
          { from: "Parent", relationship: "", type: "Ownership", to: "Issuer", line: 3 },
        ])}
      />
    </Bento>,
  );
  const tile = screen.getByRole("region", { name: "Ownership" });
  fireEvent.click(within(tile).getByRole("button", { name: "Table" }));
  expect(within(tile).getByRole("row", { name: /Parent/ })).toBeVisible();
});

it("keeps two nodes apart when both read In Evidence on the page", () => {
  render(
    <NodeList
      label="Map"
      edges={[
        {
          key: "Plan p.3",
          from: "In Evidence",
          relationship: "Funds",
          type: "Other stated",
          to: "Issuer",
          line: 4,
        },
        {
          key: "Memo p.9",
          from: "In Evidence",
          relationship: "Guarantees",
          type: "Guarantee",
          to: "Notes",
          line: 5,
        },
      ]}
    />,
  );
  const map = screen.getByRole("list", { name: "Map" });
  const nodes = within(map)
    .getAllByRole("listitem")
    .filter((item) => item.parentElement === map);
  expect(nodes).toHaveLength(2);
  expect(within(map).queryByText(/p\.3|p\.9/)).toBeNull();
});

it("puts the Figure / Table switch in the tile head and the table in a named, focusable region", () => {
  render(
    <Bento>
      <LeadFigure
        span={8}
        label="Liquidity bridge"
        title="Liquidity bridge"
        trace={<a href="#evidence/run/3">Source for Liquidity bridge</a>}
        figure={<p>figure</p>}
        table={{ head: ["Step", "Amount"], rows: [{ label: "Opening", cells: ["900"] }] }}
      />
    </Bento>,
  );
  const tile = screen.getByRole("region", { name: "Liquidity bridge" });
  const heading = within(tile).getByRole("heading", { level: 3 });
  const head = heading.parentElement?.parentElement;
  expect(head).toContainElement(within(tile).getByRole("button", { name: "Table" }));
  expect(head).toContainElement(within(tile).getByRole("link", { name: /Source for/ }));
  fireEvent.click(within(tile).getByRole("button", { name: "Table" }));
  const region = within(tile).getByRole("region", { name: "Liquidity bridge table" });
  expect(region).toHaveAttribute("tabindex", "0");
  expect(region).toHaveClass("relative", "overflow-x-auto");
  expect(within(region).getByRole("table")).toBeVisible();
});

it("keeps a disclosed table closed until asked, in the same named region", () => {
  const { container } = render(
    <Disclosure
      label="Hedge terms"
      table={{ head: ["Hedge", "Notional"], rows: [{ label: "Swap", cells: ["USD 300m"] }] }}
    />,
  );
  const details = container.querySelector("details");
  expect(details).not.toHaveAttribute("open");
  expect(details?.querySelector("summary")).toHaveTextContent("Hedge terms");
  expect(screen.getByRole("region", { name: "Hedge terms table", hidden: true })).toBeTruthy();
});

it("draws one gap chip with the reason, never a double colon", () => {
  expect(statedGap("Not supplied: no current")).toEqual({
    word: "Not supplied",
    reason: "No current",
  });
  expect(statedGap("4.2")).toBeNull();
  const gap = statedGap("Not calculable: no base");
  render(<GapCell word={gap?.word} reason={gap?.reason} />);
  expect(screen.getByText("Not calculable")).toHaveClass("border-dashed");
  expect(screen.getByText("No base")).toBeVisible();
  expect(document.body.textContent).not.toMatch(/: /);
});

it("lists named values as a two-column list", () => {
  render(<KeyValues items={[{ key: "Feasibility", value: "High" }]} />);
  const list = screen.getByRole("term").closest("dl");
  expect(list).toHaveClass("grid-cols-[auto_minmax(0,1fr)]");
  expect(screen.getByRole("definition")).toHaveTextContent("High");
});

it("lays a map's nodes in columns by depth, a loop edge not moving them", () => {
  const edge = (from: string, to: string, line: number) => ({
    from,
    relationship: "r",
    type: "t",
    to,
    line,
  });
  const columns = mapLayout([
    edge("Parent", "Issuer", 1),
    edge("Issuer", "Notes", 2),
    edge("Parent", "Notes", 3),
    edge("Notes", "Parent", 4),
  ]);
  expect(columns.map((nodes) => nodes.map((node) => node.name))).toEqual([
    ["Parent"],
    ["Issuer"],
    ["Notes"],
  ]);
  expect(mapLayout([edge("A", "B", 1)])).toHaveLength(2);
});

it("lists a map's gap rows after its edges, each with its reason and trace", () => {
  render(
    <NodeList
      label="Ownership"
      edges={[{ from: "Parent", relationship: "Owns", type: "Ownership", to: "Issuer", line: 4 }]}
      gaps={[{ line: 5, reason: "Guarantor exhibit absent" }]}
      href={(line) => `#evidence/run/${String(line)}`}
    />,
  );
  const gaps = screen.getByRole("list", { name: "Ownership: rows not drawn" });
  expect(within(gaps).getByText("Row not drawn: Guarantor exhibit absent")).toBeVisible();
  expect(within(gaps).getByRole("link")).toHaveAttribute("href", "#evidence/run/5");
  expect(within(screen.getByRole("list", { name: "Ownership" })).getByText("Issuer")).toBeVisible();
});

it("shows each event's publication date and credit relevance, and the rows it could not place", () => {
  render(
    <DatedList
      label="Funding dates"
      notDrawn={3}
      events={[
        {
          date: "2026",
          precision: "year",
          published: "2024-11-07",
          event: "Maturity",
          status: "Scheduled — maturity",
          relevance: "Refinancing wall",
          line: 4,
        },
      ]}
    />,
  );
  const list = screen.getByRole("list", { name: "Funding dates" });
  expect(within(list).getByText(/Published 2024-11-07/)).toBeVisible();
  expect(within(list).getByText("Refinancing wall")).toBeVisible();
  expect(screen.getByText("This page could not place 3 of the 4 dated rows.")).toBeVisible();
});

it("puts a table in a named, focusable region whose long cells wrap", () => {
  render(
    <TableRegion
      label="Hedge terms"
      table={{ head: ["Hedge", "Terms"], rows: [{ label: "Swap", cells: ["Long words"] }] }}
    />,
  );
  const region = screen.getByRole("region", { name: "Hedge terms table" });
  expect(region).toHaveAttribute("tabindex", "0");
  expect(region.className).toMatch(/\[&_td\]:max-w-\[28ch\]/);
});

it("draws a compact gap: dashed, sized to its words, no hatch", () => {
  render(<CompactGap>The handoff states no runway figure.</CompactGap>);
  const gap = screen.getByText("The handoff states no runway figure.");
  expect(gap).toHaveClass("border-dashed", "w-fit");
  expect(gap).not.toHaveClass("gap-hatch");
});

it("puts a drawn map in a named, focusable region so a deep map can be scrolled by keyboard", () => {
  render(
    <NodeList
      label="Ownership"
      edges={[{ from: "Parent", relationship: "Owns", type: "Ownership", to: "Issuer", line: 4 }]}
    />,
  );
  const region = screen.getByRole("region", { name: "Ownership map" });
  expect(region).toHaveAttribute("tabindex", "0");
});

it("shows a long lane's first three dated rows and keeps the rest behind a disclosure", () => {
  const events = ["2025-01", "2025-02", "2025-03", "2025-04", "2025-05"].map((date, at) => ({
    date,
    precision: "month",
    published: "2024-11-07",
    event: `Event ${String(at + 1)}`,
    status: "Scheduled — maturity",
    relevance: "",
    line: 10 + at,
  }));
  const { container } = render(<DatedList label="Hedge dates" events={events} />);
  expect(
    within(screen.getByRole("list", { name: "Hedge dates" })).getAllByRole("listitem"),
  ).toHaveLength(3);
  const more = container.querySelector("details");
  expect(more).not.toHaveAttribute("open");
  expect(within(more as HTMLElement).getByText("Show the other 2 dated rows")).toBeInTheDocument();
  expect(within(more as HTMLElement).getByText("Event 5")).toBeInTheDocument();
});

it("keeps a lane of four rows whole", () => {
  const events = ["2025-01", "2025-02", "2025-03", "2025-04"].map((date, at) => ({
    date,
    precision: "month",
    published: "2024-11-07",
    event: `Event ${String(at + 1)}`,
    status: "Scheduled — maturity",
    relevance: "",
    line: 10 + at,
  }));
  const { container } = render(<DatedList label="Funding dates" events={events} />);
  expect(
    within(screen.getByRole("list", { name: "Funding dates" })).getAllByRole("listitem"),
  ).toHaveLength(4);
  expect(container.querySelector("details")).toBeNull();
});
