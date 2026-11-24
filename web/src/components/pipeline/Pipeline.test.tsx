import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { Pipeline, type PipelineNode, type PipelineStage } from "./Pipeline";

afterEach(cleanup);

const stages: PipelineStage[] = [
  { name: "Sources", nodes: [{ id: "CP-0", name: "Source readiness", state: "delivered" }] },
  {
    name: "Financials",
    nodes: [
      { id: "CP-1", name: "Financial foundation", state: "delivered" },
      { id: "CP-MODEL", name: "Model", state: "running" },
    ],
  },
  { name: "Credit", nodes: [{ id: "CP-2", name: "Fundamental credit", state: "queued" }] },
  {
    name: "Structure and market",
    nodes: [
      { id: "CP-4", name: "Legal & covenants", state: "blocked", detail: "No executed documents." },
    ],
  },
  {
    name: "Validation and decision",
    nodes: [{ id: "CP-5", name: "Evidence validation", state: "failed", word: "Interrupted" }],
  },
];

const nodeOf = (name: string) => {
  const item = screen.getByText(name, { selector: "span" }).closest("li");
  if (!item) throw new Error(`no node ${name}`);
  return item;
};
const nodes = (count: number, state: PipelineNode["state"] = "delivered"): PipelineNode[] =>
  Array.from({ length: count }, (_, i) => ({
    id: `CP-${String(i)}`,
    name: `Module ${String(i)}`,
    state,
  }));

it("draws the stages as a named list of lists with the count beside, not apart from, the name", () => {
  render(<Pipeline label="Modules in this run" stages={stages} />);
  const list = screen.getByRole("list", { name: "Modules in this run" });
  const headings = within(list).getAllByRole("heading", { level: 3 });
  expect(headings.map((heading) => heading.textContent)).toEqual([
    "Sources1",
    "Financials2",
    "Credit1",
    "Structure and market1",
    "Validation and decision1",
  ]);
  // The count is its own element in the same block as the name, so a wrapped name keeps it close.
  expect(headings[0]?.querySelectorAll("span")).toHaveLength(2);
  expect(headings[0]).toHaveClass("block");
});

it("takes the stage heading level from its caller", () => {
  render(<Pipeline label="Stages" stages={stages} stageLevel={4} />);
  expect(screen.getAllByRole("heading", { level: 4 })).toHaveLength(5);
  expect(screen.queryAllByRole("heading", { level: 3 })).toHaveLength(0);
});

it("omits a stage with no nodes", () => {
  render(<Pipeline label="Stages" stages={[{ name: "Financials", nodes: [] }, ...stages]} />);
  expect(screen.queryByText("Financials0")).toBeNull();
  expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(5);
});

it("states each node's state in words, never by colour alone", () => {
  render(<Pipeline label="Stages" stages={stages} />);
  expect(nodeOf("Source readiness")).toHaveTextContent("Delivered");
  expect(nodeOf("Model")).toHaveTextContent("Running");
  expect(nodeOf("Fundamental credit")).toHaveTextContent("Queued");
  expect(nodeOf("Legal & covenants")).toHaveTextContent("Not assessable");
  expect(nodeOf("Legal & covenants")).toHaveTextContent("No executed documents.");
  expect(nodeOf("Evidence validation")).toHaveTextContent("Interrupted");
});

it("marks the running node as the current step", () => {
  render(<Pipeline label="Stages" stages={stages} />);
  expect(nodeOf("Model")).toHaveAttribute("aria-current", "step");
  expect(nodeOf("Source readiness")).not.toHaveAttribute("aria-current");
});

it("keys nodes by position, so a module listed twice still draws twice", () => {
  const twice: PipelineStage[] = [
    {
      name: "Credit",
      nodes: [
        { id: "CP-2", name: "Fundamental credit", state: "delivered" },
        { id: "CP-2", name: "Fundamental credit", state: "queued" },
      ],
    },
  ];
  const { rerender } = render(<Pipeline label="Stages" stages={twice} />);
  expect(screen.getAllByText("Fundamental credit")).toHaveLength(2);
  rerender(
    <Pipeline
      label="Stages"
      stages={[
        {
          name: "Credit",
          nodes: [
            { id: "CP-2", name: "Fundamental credit", state: "delivered" },
            { id: "CP-2", name: "Fundamental credit", state: "running" },
          ],
        },
      ]}
    />,
  );
  expect(
    screen.getAllByRole("listitem").filter((li) => li.getAttribute("aria-current")),
  ).toHaveLength(1);
});

it("draws a node as a link only when it is given an address", () => {
  render(
    <Pipeline
      label="Stages"
      stages={[
        {
          name: "Sources",
          nodes: [
            { id: "CP-0", name: "Source readiness", state: "delivered", href: "#modules/CP-0" },
            { id: "CP-1", name: "Financial foundation", state: "queued" },
          ],
        },
      ]}
    />,
  );
  expect(screen.getAllByRole("link")).toHaveLength(1);
  expect(screen.getByRole("link", { name: /Source readiness/ })).toHaveAttribute(
    "href",
    "#modules/CP-0",
  );
});

it("says a word that is not the state's own in a visible tag, and the state's own word to screen readers only", () => {
  render(
    <Pipeline
      label="Stages"
      stages={[
        {
          name: "Credit",
          nodes: [
            { id: "A", name: "Gapped module", state: "queued", word: "Delivered with gaps" },
            { id: "B", name: "Not run module", state: "queued", word: "Not run" },
            { id: "C", name: "Queued module", state: "queued", word: "Queued" },
          ],
        },
      ]}
    />,
  );
  expect(nodeOf("Gapped module").querySelector(".sr-only")).toBeNull();
  expect(nodeOf("Gapped module")).toHaveTextContent("Delivered with gaps");
  expect(nodeOf("Not run module").querySelector(".sr-only")).toHaveTextContent("Not run");
  expect(nodeOf("Queued module").querySelector(".sr-only")).toHaveTextContent("Queued");
});

it("flows nothing on a run that has stopped", () => {
  render(<Pipeline label="Stages" stages={stages} flow="none" />);
  expect(document.querySelector(".pipeline-flow, .pipeline-flow-y")).toBeNull();
});

it("flows only into the running node on a run in flight", () => {
  render(<Pipeline label="Stages" stages={stages} flow="running" />);
  const moving = [...document.querySelectorAll(".pipeline-flow")];
  expect(moving).toHaveLength(1);
  expect(moving[0]?.closest("li")).toBe(nodeOf("Model"));
  expect(moving[0]).toHaveAttribute("data-edge", "running");
  // The bus beside it moves too, so the path reads as one line; no other stage's does.
  expect(document.querySelectorAll(".pipeline-flow-y").length).toBeGreaterThan(0);
  expect(nodeOf("Source readiness").querySelector(".pipeline-flow")).toBeNull();
});

it("flows out of delivered nodes on a finished report, and marks only their edges delivered", () => {
  render(<Pipeline label="Stages" stages={stages} flow="delivered" />);
  const marked = [...document.querySelectorAll("[data-edge='delivered']")];
  expect(marked.length).toBeGreaterThan(0);
  for (const edge of marked) expect(edge).toHaveClass("pipeline-flow");
  expect(marked.map((edge) => edge.closest("li"))).toEqual([
    nodeOf("Source readiness"),
    nodeOf("Financial foundation"),
  ]);
  expect(nodeOf("Fundamental credit").querySelector("[data-edge]")).toBeNull();
});

it("passes nothing on from a blocked or stopped node and draws no edge into an unfed stage", () => {
  render(<Pipeline label="Stages" stages={stages} flow="delivered" />);
  expect(nodeOf("Legal & covenants").querySelector("[data-edge]")).toBeNull();
  expect(nodeOf("Legal & covenants").querySelector(".border-dashed")).not.toBeNull();
  // The blocked stage passes nothing, so the stage after it has nothing to receive.
  expect(
    nodeOf("Evidence validation").querySelector("[aria-hidden='true'][class*='absolute']"),
  ).toBeNull();
});

it("draws one bus in the gap between two stages, not two a pixel apart", () => {
  render(
    <Pipeline
      label="Stages"
      stages={[
        { name: "A", nodes: nodes(2) },
        { name: "B", nodes: nodes(2) },
      ]}
    />,
  );
  const buses = [...document.querySelectorAll("[data-bus]")];
  expect(buses.map((bus) => bus.getAttribute("data-bus"))).toEqual(["out", "in"]);
  // Right bus of the first stage and left bus of the next sit on the same pixel of the gap.
  expect(buses[0]).toHaveClass("-right-[13px]");
  expect(buses[1]).toHaveClass("-left-3");
});

it("splits a stage of more than four nodes into two sub-columns", () => {
  render(<Pipeline label="Stages" stages={[{ name: "Credit", nodes: nodes(7) }]} />);
  const items = screen.getAllByRole("listitem").filter((li) => li.hasAttribute("data-sub"));
  expect(items.map((li) => li.getAttribute("data-sub"))).toEqual([
    "A",
    "A",
    "A",
    "A",
    "B",
    "B",
    "B",
  ]);
});

it("keeps a stage of four nodes or fewer in one column", () => {
  render(<Pipeline label="Stages" stages={[{ name: "Credit", nodes: nodes(4) }]} />);
  const items = screen.getAllByRole("listitem").filter((li) => li.hasAttribute("data-sub"));
  expect(new Set(items.map((li) => li.getAttribute("data-sub")))).toEqual(new Set(["S"]));
});

it("gives a legend of the states in use, each as a shape and a word", () => {
  render(<Pipeline label="Stages" stages={stages} />);
  const legend = screen.getByRole("list", { name: "Pipeline key" });
  for (const word of ["Delivered", "Running", "Queued", "Not assessable", "Interrupted"])
    expect(within(legend).getByText(word)).toBeVisible();
  expect(within(legend).queryByText("Failed")).toBeNull();
});

it("leaves the key out when its caller draws its own", () => {
  render(<Pipeline label="Stages" stages={stages} legend={false} />);
  expect(screen.queryByRole("list", { name: "Pipeline key" })).toBeNull();
});
