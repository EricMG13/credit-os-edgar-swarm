import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { LegacyVisuals } from ".";

const qualification =
  "Cash interest here excludes rent recorded as interest; including it, cover is 1.53x, 1.51x and 1.52x respectively.";
function section(line = 20) {
  return {
    heading: "Chart data: interest cover",
    blocks: [
      {
        type: "table",
        line,
        headers: ["Period", "EBITDA / cash interest", "Reporting unit", "Basis and limitation"],
        rows: [{ line: line + 2, cells: ["2026-06-30", "4.19", "x", "Filing"] }],
      },
      { type: "text", line: line + 4, end: line + 4, text: qualification },
    ],
  };
}
const output = { charts: [{ title: "Interest cover", table: 20, unit: "x", columns: [1] }] };

it("places the exact owning paragraph beside its chart with a separate paragraph trace", () => {
  render(
    <LegacyVisuals
      output={output}
      sections={[
        section(),
        {
          heading: "Other findings",
          blocks: [{ type: "text", line: 99, text: "Unrelated qualifier" }],
        },
      ]}
      evidenceHref={(line) => `#evidence/handoff~digest-${String(line)}`}
    />,
  );
  expect(screen.getByText(qualification)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Qualification source" })).toHaveAttribute(
    "href",
    "#evidence/handoff~digest-24",
  );
  expect(screen.getByRole("link", { name: "Source table" })).toHaveAttribute(
    "href",
    "#evidence/handoff~digest-20",
  );
  expect(screen.queryByText("Unrelated qualifier")).toBeNull();
});

it("does not guess which table owns prose in a multiple-table section", () => {
  const owner = section();
  const second = section(30).blocks[0];
  if (!second) throw new Error("Missing fixture table");
  owner.blocks.push(second);
  render(<LegacyVisuals output={output} sections={[owner]} />);
  expect(screen.queryByText(qualification)).toBeNull();
});

it("keeps source references in Evidence while preserving the exact paragraph address", () => {
  const owner = section();
  owner.blocks[1] = { type: "text", line: 24, end: 24, text: "Definition in secret-filing.pdf." };
  render(
    <LegacyVisuals
      output={output}
      sections={[owner]}
      evidenceHref={(line) => `#evidence/${String(line)}`}
    />,
  );
  expect(screen.queryByText(/secret-filing/)).toBeNull();
  expect(screen.getByText("Qualification recorded in Evidence.")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Qualification source" })).toHaveAttribute(
    "href",
    "#evidence/24",
  );
});
