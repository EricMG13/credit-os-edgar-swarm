import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import type { Coverage, CoverageRun, Fact, Issuer } from "../coverageData";
import { FindView } from "./Find";
import { Matrix } from "./Matrix";
import { RankView } from "./Rank";

afterEach(cleanup);

const SHA = "c".repeat(64);
const run = (key: string, cells: CoverageRun["cells"]): CoverageRun => ({
  key,
  folder: `${key}-run`,
  asOf: "2026-03-31",
  pathway: "credit_snapshot",
  pathwayTitle: "Full credit assessment",
  cells,
  other: [],
});
const issuer = (key: string, name: string, cells: CoverageRun["cells"]): Issuer => ({
  key,
  name,
  sector: "Industrial",
  runs: [run(`${key}1`, cells)],
});
const fact = (issuerKey: string, over: Partial<Fact>): Fact => ({
  field: "lev",
  issuer: issuerKey,
  run: `${issuerKey}1`,
  period: "FY2025",
  row: null,
  text: "1.0",
  at: 1,
  unit: "x",
  basis: "Reported.",
  line: 5,
  output: `${issuerKey}-run/CP-1.md`,
  sha256: SHA,
  ...over,
});

const data: Coverage = {
  columns: [
    { code: "CP-1", title: "Canonical data foundation" },
    { code: "CP-2", title: "Fundamental credit synthesizer" },
    { code: "CP-4", title: "Legal and covenants" },
    { code: "CP-6", title: "Committee decision" },
  ],
  issuers: [
    issuer("a", "Alpha plc", {
      "CP-1": { state: "assessed" },
      "CP-2": { state: "assessed", gaps: 2 },
      "CP-4": { state: "not-assessable" },
      "CP-6": { state: "no-handoff" },
    }),
    issuer("b", "Beta SA", { "CP-1": { state: "unreadable" }, "CP-2": { state: "not-in-pathway" } }),
    issuer("c", "Gamma AG", {}),
    issuer("d", "Delta Ltd", {}),
  ],
  fields: [
    { id: "lev", module: "CP-1", group: "Leverage", label: "Net debt / EBITDA", kind: "number", series: "period" },
    { id: "find", module: "CP-2", group: "Findings", label: "Finding", kind: "text" },
  ],
  facts: [
    fact("a", { text: "4.0", at: 4 }),
    fact("b", { text: "-2.0", at: -2 }),
    fact("c", { text: "Not supplied: no cash", at: null, gap: true }),
    fact("d", { text: "1.0", at: 1, unit: "%" }),
    fact("a", { field: "find", text: "Covenants are tight.", at: null, period: null, unit: undefined, line: 9 }),
    fact("b", { field: "find", text: "Liquidity is ample.", at: null, period: null, unit: undefined, line: 9 }),
  ],
};

it("groups the module columns under the five stages and draws each state as a shape and a word", () => {
  render(
    <Matrix
      data={data}
      issuers={data.issuers.slice(0, 2)}
      chosen={new Set()}
      toggle={() => undefined}
      open={null}
      setOpen={() => undefined}
    />,
  );
  const table = screen.getByRole("table");
  const groups = within(table)
    .getAllByRole("columnheader", { name: /^(Financials|Credit|Structure and market|Validation and decision)$/ })
    .map((cell) => cell.textContent);
  expect(groups).toEqual(["Financials", "Credit", "Structure and market", "Validation and decision"]);
  const alpha = within(table).getByRole("row", { name: /Alpha plc/ });
  const shapes = [...alpha.querySelectorAll("svg[data-shape]")].map((svg) =>
    svg.getAttribute("data-shape"),
  );
  expect(shapes).toEqual(["filled circle", "dashed ring", "slashed circle", "ring"]);
  expect(within(alpha).getByText("Delivered with gaps")).toBeVisible();
  expect(within(alpha).getByText("No handoff published")).toBeVisible();
  const beta = within(table).getByRole("row", { name: /Beta SA/ });
  expect(within(beta).getByText("Unreadable")).toBeVisible();
  expect(within(beta).getByText("Not asked for in this run")).toBeVisible();
});

const rankOf = (facts: Fact[], order: "high" | "low" = "high") =>
  render(
    <RankView
      data={{ ...data, facts }}
      issuers={[...data.issuers]}
      field={data.fields[0]}
      period="FY2025"
      order={order}
      by="none"
    />,
  );

it("ranks bars from zero in one unit, apart from another unit, and lists a stated gap without a bar", () => {
  const { container } = rankOf([
    fact("a", { text: "4.0", at: 4 }),
    fact("b", { text: "2.0", at: 2 }),
    fact("c", { text: "Not supplied: no cash", at: null, gap: true }),
    fact("d", { text: "1.0", at: 1, unit: "%" }),
  ]);
  const lists = screen.getAllByRole("list").filter((list) => list.tagName === "OL");
  expect(lists).toHaveLength(2);
  const ex = lists.find((list) => list.textContent.includes("Alpha plc"));
  if (!ex) throw new Error("missing x list");
  const rows = within(ex).getAllByRole("listitem");
  expect(rows.map((row) => row.textContent)).toEqual([
    expect.stringContaining("Alpha plc"),
    expect.stringContaining("Beta SA"),
  ]);
  expect(rows.map((row) => row.querySelector<HTMLElement>("[style]")?.style.width)).toEqual([
    "100%",
    "50%",
  ]);
  // One left edge: every row's figure column has the same width class.
  expect(rows.map((row) => row.querySelector(".w-28")?.textContent)).toEqual(["4.0x", "2.0x"]);
  expect(within(ex).queryByText(/Gamma AG/)).toBeNull();
  const apart = screen.getByRole("heading", {
    name: "Not ranked: no figure for FY2025 in the newest run",
  });
  expect(apart.closest("div")?.textContent).toContain("Gamma AG: Not supplied: no cash");
  expect(apart.closest("div")?.querySelector("[style]")).toBeNull();
  expect(container.textContent).not.toContain("CP-1");
});

it("draws no bars for a list that mixes signs and writes the figures as they are", () => {
  const { container } = rankOf([fact("a", { text: "4.0", at: 4 }), fact("b", { text: "-2.0", at: -2 })]);
  expect(container.querySelector("[style]")).toBeNull();
  expect(screen.getByText("-2.0x")).toBeVisible();
  expect(screen.getByText(/mixes positive and negative figures/)).toBeVisible();
  const rows = within(screen.getByRole("list", { name: /FY2025/ })).getAllByRole("listitem");
  expect(rows[0]?.textContent).toContain("Alpha plc");
});

it("gives equal figures one rank", () => {
  rankOf([fact("a", { text: "3.0", at: 3 }), fact("b", { text: "3.0", at: 3 }), fact("c", { text: "1.0", at: 1 })]);
  const rows = within(screen.getByRole("list", { name: /FY2025/ })).getAllByRole("listitem");
  expect(rows.map((row) => row.textContent.slice(0, 1))).toEqual(["1", "1", "3"]);
});

it("states each not-assessable module as a dashed blocked chip with a link to the module's page", () => {
  render(
    <Matrix
      data={data}
      issuers={[data.issuers[0] as Issuer]}
      chosen={new Set()}
      toggle={() => undefined}
      open={null}
      setOpen={() => undefined}
    />,
  );
  const word = screen.getByText("Not assessable");
  expect(word.parentElement).toHaveClass("border-dashed");
  expect(screen.getByRole("link", { name: "Legal & covenants for Alpha plc" })).toHaveAttribute(
    "href",
    "/report/a1-run#modules/CP-4",
  );
  expect(screen.queryByRole("link", { name: /Committee decision/ })).toBeNull();
  expect(screen.getByRole("region", { name: "Issuers by module" })).toHaveAttribute("tabindex", "0");
  expect(screen.getByRole("columnheader", { name: "Issuer" })).toHaveClass("sticky");
});

it("groups found passages by issuer, one section each, with a sources link per passage", () => {
  render(
    <FindView
      data={data}
      issuers={[...data.issuers]}
      query=""
      titles={new Map([["CP-2", "Fundamental credit"]])}
    />,
  );
  const alpha = screen.getByRole("region", { name: "Alpha plc" });
  expect(within(alpha).getByText("Covenants are tight.")).toBeVisible();
  expect(within(alpha).getByRole("link", { name: "View sources" })).toHaveAttribute(
    "href",
    `/report/a1-run#evidence/a-run%2FCP-1.md~${SHA}-9`,
  );
  const beta = screen.getByRole("region", { name: "Beta SA" });
  expect(within(beta).queryByText("Covenants are tight.")).toBeNull();
  expect(screen.queryByRole("region", { name: "Gamma AG" })).toBeNull();
});
