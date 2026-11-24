import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { Pipeline, type PipelineStage } from "./Pipeline";

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

it("draws the stages as a named list of lists, with a count per stage", () => {
  render(<Pipeline label="Modules in this run" stages={stages} />);
  const list = screen.getByRole("list", { name: "Modules in this run" });
  expect(
    within(list)
      .getAllByRole("heading", { level: 3 })
      .map((heading) => heading.textContent),
  ).toEqual([
    "Sources1",
    "Financials2",
    "Credit1",
    "Structure and market1",
    "Validation and decision1",
  ]);
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

it("lets a node's own word replace the default for its state", () => {
  render(
    <Pipeline
      label="Stages"
      stages={[
        {
          name: "Credit",
          nodes: [{ id: "CP-2", name: "Credit", state: "queued", word: "Not run" }],
        },
      ]}
    />,
  );
  expect(nodeOf("Credit")).toHaveTextContent("Not run");
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

it("animates the edge leaving a delivered node and the edge into the running node only", () => {
  render(<Pipeline label="Stages" stages={stages} />);
  const animated = [...document.querySelectorAll(".pipeline-flow")];
  const owners = animated.map((edge) => edge.closest("li")?.textContent);
  // CP-0 (delivered, edge out), CP-1 (delivered, edge out), CP-MODEL (running, edge in).
  expect(owners).toHaveLength(3);
  expect(owners.some((text) => text?.includes("Source readiness"))).toBe(true);
  expect(owners.some((text) => text?.includes("Financial foundation"))).toBe(true);
  expect(owners.some((text) => text?.includes("Model"))).toBe(true);
  expect(nodeOf("Fundamental credit").querySelector(".pipeline-flow")).toBeNull();
});

it("passes nothing on from a blocked or stopped node", () => {
  render(<Pipeline label="Stages" stages={stages} />);
  expect(nodeOf("Legal & covenants").querySelector("[data-edge]")).toBeNull();
  expect(nodeOf("Evidence validation").querySelector("[data-edge]")).toBeNull();
});

it("outlines a blocked node with a dashed orange edge", () => {
  render(<Pipeline label="Stages" stages={stages} />);
  const box = nodeOf("Legal & covenants").querySelector("[data-node]");
  expect(box).toHaveClass("border-dashed", "border-warning-mark");
});

it("says a word that is not its state's own in a visible badge, not only to screen readers", () => {
  render(
    <Pipeline
      label="Stages"
      stages={[
        {
          name: "Credit",
          nodes: [
            {
              id: "CP-1",
              name: "Financial foundation",
              state: "queued",
              word: "Delivered with gaps",
            },
            { id: "CP-2", name: "Fundamental credit", state: "queued", word: "Not run" },
            { id: "CP-3", name: "Security selection", state: "queued", word: "Queued" },
          ],
        },
      ]}
    />,
  );
  expect(nodeOf("Financial foundation").querySelector(".sr-only")).toBeNull();
  expect(nodeOf("Financial foundation")).toHaveTextContent("Delivered with gaps");
  expect(nodeOf("Fundamental credit").querySelector(".sr-only")).toBeNull();
  expect(nodeOf("Fundamental credit")).toHaveTextContent("Not run");
  expect(nodeOf("Security selection").querySelector(".sr-only")).toHaveTextContent("Queued");
});
