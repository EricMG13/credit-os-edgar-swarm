// S4-006 (OQ-10): one module filter is held above the five Evidence tabs and applied on each.
import { readFileSync } from "node:fs";
import path from "node:path";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import type { LibraryData } from "@/data";
import { SourceContext } from "../source";
import { routes } from "./routes";

const fixture = JSON.parse(
  readFileSync(
    path.resolve(import.meta.dirname, "..", "..", "..", "fixtures", "library.json"),
    "utf8",
  ),
) as { issuers: LibraryData["issuers"]; slice: unknown };

const BASE = "/library/:issuer/:run/evidence";
const P = { issuer: "halden-aerostructures", run: "2026-09-30" };
const data: LibraryData = {
  schema: "credit-os-data/1",
  issuers: fixture.issuers,
  library: fixture.slice,
};
const TABS = ["summary", "trace", "sources", "gaps", "record"] as const;

function page(tab: (typeof TABS)[number], params: Record<string, string> = P) {
  const found = routes.find((r) => r.path === `${BASE}/${tab}`);
  if (found === undefined) throw new Error(`no ${tab} route`);
  return <SourceContext.Provider value={data}>{found.render(params)}</SourceContext.Provider>;
}

const filter = () => screen.getByRole("button", { name: /^Module:/ });

/** Chooses a module through the hidden native select React Aria keeps beside the custom one. */
function pick(name: string) {
  const select = filter().closest("div")?.querySelector("select");
  if (!select) throw new Error("no module select");
  fireEvent.change(select, { target: { value: `option:${name}` } });
}

/** What the Summary's three count tiles draw: label, figure and note of each, in order. */
const tiles = () =>
  within(screen.getByRole("region", { name: "Counts" }))
    .getAllByRole("listitem")
    .map((tile) => tile.textContent);

beforeEach(() => {
  Element.prototype.scrollIntoView = vi.fn();
});
afterEach(cleanup);

describe("the module filter on Evidence", () => {
  it.each(TABS)("is drawn on the %s tab, at All", (tab) => {
    render(page(tab));
    expect(filter()).toHaveTextContent("Module: All");
  });

  it("keeps the chosen module when another tab is opened, and applies it there", () => {
    const view = render(page("trace"));
    pick("Capital structure");
    for (const tab of ["gaps", "sources", "summary", "record", "trace"] as const) {
      view.rerender(page(tab));
      expect(filter()).toHaveTextContent("Module: Capital structure");
    }
    view.rerender(page("gaps"));
    const gaps = within(screen.getByRole("table", { name: "Gaps" }));
    expect(gaps.getAllByRole("rowheader", { name: /^G-/ })).toHaveLength(3);
    view.rerender(page("sources"));
    expect(within(screen.getByRole("list")).getAllByRole("listitem")).toHaveLength(5);
  });

  it("starts the tabs of another run at All", () => {
    const view = render(page("record"));
    pick("Capital structure");
    view.rerender(page("record", { ...P, run: "2025-09-30" }));
    expect(filter()).toHaveTextContent("Module: All");
  });

  it("draws the Summary counts of the chosen module, a real zero as 0, and the run's at All", () => {
    render(page("summary"));
    expect(tiles()).toEqual([
      "Source files9" + "7 read in full, 1 read in part, 1 unreadable",
      "Calculations59" + "Each one traceable to its inputs",
      "Gaps7" + "2 high, 3 medium, 2 low",
    ]);
    pick("Capital structure");
    expect(tiles()).toEqual([
      "Source files read5By Capital structure",
      "Traced items26In Capital structure",
      "Gaps3In Capital structure",
    ]);
    pick("Recovery");
    expect(tiles()).toEqual([
      "Source files read0By Recovery",
      "Traced items1In Recovery",
      "Gaps1In Recovery",
    ]);
    pick("All");
    expect(tiles()[0]).toBe("Source files9" + "7 read in full, 1 read in part, 1 unreadable");
  });
});
