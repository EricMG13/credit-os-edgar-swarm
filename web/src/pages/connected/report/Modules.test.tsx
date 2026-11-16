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
