import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { Bento } from "../overview/Tile";
import { DatedList, LeadBlocked, LeadFigure, LeadGap, NodeList, Prose } from "./parts";

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

it("draws a gap in place of the figure with the reason and what would unlock it", () => {
  render(
    <LeadGap
      span={4}
      label="Revenue mix"
      title="Revenue mix"
      reason="The handoff states the mix only in words."
      needs="Needs a typed mix table in the module's handoff."
    />,
  );
  const tile = screen.getByRole("region", { name: "Revenue mix" });
  expect(within(tile).getByText("The handoff states the mix only in words.")).toBeVisible();
  expect(within(tile).getByText("Needs a typed mix table in the module's handoff.")).toBeVisible();
  expect(within(tile).queryByText("0")).toBeNull();
});

it("draws a blocked module as Not assessable with its reason and what unlocks it", () => {
  render(
    <LeadBlocked
      span={12}
      label="Covenant headroom"
      title="Covenant headroom"
      reason="No executed governing document available."
      unlock="Headroom needs the executed credit agreement at run start."
    />,
  );
  const tile = screen.getByRole("region", { name: "Covenant headroom" });
  expect(within(tile).getByText("Not assessable")).toBeVisible();
  expect(within(tile).getByText("No executed governing document available.")).toBeVisible();
  expect(within(tile).getByText(/executed credit agreement/)).toBeVisible();
  expect(tile).toHaveClass("border-dashed");
});

it("does not repeat Not assessable when the module's reason starts with it", () => {
  render(
    <LeadBlocked
      span={12}
      label="Covenant headroom"
      title="Covenant headroom"
      reason="not assessable, no executed governing document available"
    />,
  );
  const tile = screen.getByRole("region", { name: "Covenant headroom" });
  expect(within(tile).getByText("No executed governing document available")).toBeVisible();
  expect(within(tile).getAllByText(/not assessable/i)).toHaveLength(1);
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
