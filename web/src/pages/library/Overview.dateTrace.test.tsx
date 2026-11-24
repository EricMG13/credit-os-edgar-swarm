import { readFileSync } from "node:fs";
import path from "node:path";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import type { LibraryData } from "@/data";
import { SourceContext } from "../source";
import { libraryRoutes as routes } from "./routes";

type Json = Record<string, unknown>;

const fixture = JSON.parse(
  readFileSync(
    path.resolve(import.meta.dirname, "..", "..", "..", "fixtures", "library.json"),
    "utf8",
  ),
) as { issuers: LibraryData["issuers"]; slice: Json };

function renderOverview(library: unknown = fixture.slice) {
  const data: LibraryData = { schema: "credit-os-data/1", issuers: fixture.issuers, library };
  const route = routes.find((r) => r.path === "/library/:issuer/:run/overview");
  if (route === undefined) throw new Error("no overview route");
  return render(
    <SourceContext.Provider value={data}>
      {route.render({ issuer: "halden-aerostructures", run: "2026-09-30" })}
    </SourceContext.Provider>,
  );
}

const dates = () =>
  within(screen.getByRole("region", { name: "Dates to watch" })).getAllByRole("listitem");

afterEach(cleanup);

describe("Overview, Dates to watch and the trace control", () => {
  it("draws one control in each date; the fixture's dates carry no trace, so each is the marker", () => {
    renderOverview();
    expect(dates()).toHaveLength(4);
    for (const date of dates()) {
      const controls = within(date).getAllByRole("button");
      expect(controls).toHaveLength(1);
      expect(controls[0]).toHaveAccessibleName("Show sources for this date: no source recorded");
      expect(controls[0]).toHaveAttribute("aria-disabled", "true");
    }
  });

  it("draws a control that opens the date's trace where the date carries one", () => {
    const slice = structuredClone(fixture.slice) as unknown as {
      issuers: { runs: { overview: { dates: Json[] } }[] }[];
    };
    const first = slice.issuers[0]?.runs[0]?.overview.dates[0];
    if (first === undefined) throw new Error("the fixture has no first date");
    first["trace"] = "cash-conversion";
    renderOverview(slice);
    const [held = document.body, bare = document.body] = dates();
    const control = within(held).getByRole("button");
    expect(control).toHaveAccessibleName("Show sources for this date");
    expect(control).not.toHaveAttribute("aria-disabled");
    expect(within(bare).getByRole("button")).toHaveAccessibleName(
      "Show sources for this date: no source recorded",
    );
    fireEvent.click(control);
    expect(screen.getByRole("dialog", { name: "Sources for cash conversion" })).toBeVisible();
  });

  it("keeps each date's words as they were: the control adds no text", () => {
    renderOverview();
    expect(dates().map((date) => date.textContent)).toEqual([
      "12 Nov 2026PastFull-year resultsPublished; figures in this run are from them.",
      "11 Feb 2027NextFirst-quarter resultsFirst read on engine deliveries and inventory release.",
      "30 Jun 2027LaterRefinancing milestoneOur date for an agreed refinancing of the 2028 notes.",
      "15 Mar 2028LaterUnsecured notes matureUSD 310m falls due.",
    ]);
  });
});
