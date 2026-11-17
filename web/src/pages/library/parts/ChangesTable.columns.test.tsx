import { readFileSync } from "node:fs";
import path from "node:path";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { LibraryData } from "@/data";
import { SourceContext } from "../../source";
import { routes } from "../routes";

const fixture = JSON.parse(
  readFileSync(
    path.resolve(import.meta.dirname, "..", "..", "..", "..", "fixtures", "library.json"),
    "utf8",
  ),
) as { issuers: LibraryData["issuers"]; slice: unknown };

/** The Changes page of a Halden run, with the Table side of its presentation chosen. */
function openTable(run: string, library: unknown = fixture.slice) {
  const data: LibraryData = { schema: "credit-os-data/1", issuers: fixture.issuers, library };
  const route = routes.find((r) => r.path === "/library/:issuer/:run/changes");
  if (route === undefined) throw new Error("no changes route");
  const view = render(
    <SourceContext.Provider value={data}>
      {route.render({ issuer: "halden-aerostructures", run })}
    </SourceContext.Provider>,
  );
  fireEvent.click(
    within(screen.getByRole("radiogroup", { name: "Presentation" })).getByRole("radio", {
      name: "Table",
    }),
  );
  return view;
}

const rowTexts = (measure: string) => {
  const row = within(screen.getByRole("table")).getByRole("row", { name: new RegExp(measure) });
  return [within(row).getByRole("rowheader"), ...within(row).getAllByRole("cell")].map(
    (cell) => cell.textContent,
  );
};

describe("Changes, the Table side keeps what the Cards side shows", () => {
  it("adds the change's kind, its direction words and its cause and effect after the two values", () => {
    openTable("2026-09-30");
    const heads = within(screen.getByRole("table"))
      .getAllByRole("columnheader")
      .map((head) => head.textContent);
    expect(heads).toEqual([
      "Change",
      "30 Jun 2026",
      "30 Sep 2026",
      "Kind",
      "Direction",
      "Cause and effect",
      "Sources",
    ]);
    expect(rowTexts("Net leverage").slice(0, 6)).toEqual([
      "Net leverage",
      "4.9x",
      "4.6x",
      "Value",
      "Lower by 0.3x",
      "EBITDA grew 10% while net debt rose 3%. The outlook moves from negative to stable.",
    ]);
    expect(rowTexts("Rating outlook").slice(0, 6)).toEqual([
      "Rating outlook",
      "Negative",
      "Stable",
      "Conclusion",
      "Changed",
      "Both agencies affirmed after the full-year results. Removes the nearest downgrade trigger from the watch list.",
    ]);
    expect(rowTexts("Refinancing of the 2028 notes")[4]).toBe("Later by six months");
  });

  it("draws a change that has no direction words as not available, with its cause and effect", () => {
    openTable("2026-09-30");
    const [, earlier, current, kind, direction, why] = rowTexts("Interest cover");
    expect(earlier).toContain("not available");
    expect(current).toBe("2.4x");
    expect(kind).toBe("Value");
    expect(direction).toContain("not available");
    expect(direction).not.toMatch(/Lower|Higher|Changed|Later|0/);
    expect(why).toBe(
      "The earlier run did not establish cash interest. No comparison can be made; the figure is new.",
    );
  });

  it("keeps a withheld value and a zero apart beside the same words", () => {
    openTable("2026-03-31");
    const withheld = rowTexts("EBITDA margin");
    expect(withheld[2]).toContain("Withheld");
    expect(withheld[4]).toContain("not available");
    const zero = rowTexts("Drawn on the facility");
    expect(zero.slice(1, 6)).toEqual([
      "40",
      "0",
      "Value",
      "Lower by USD 40m",
      "The facility was repaid from cash in the quarter. Leaves the springing covenant untested.",
    ]);
  });

  it("reads the words on the left and lets the cause and effect wrap inside the sideways-scrolling table", () => {
    const { container } = openTable("2026-09-30");
    const wrapper = container.querySelector("table")?.closest("[class*='tbody_tr:hover_button']");
    const classes = wrapper?.className.split(/\s+/) ?? [];
    for (const column of [4, 5, 6]) {
      expect(classes).toContain(`[&_tr>:nth-child(${String(column)})]:text-left`);
    }
    expect(classes).toContain("[&_td:nth-child(6)]:whitespace-normal");
    expect(screen.getAllByRole("button", { name: "Show sources for this change" })).toHaveLength(6);
  });

  it("draws a blank delivered kind, direction or cause as not available and keeps the page", () => {
    const slice = structuredClone(fixture.slice) as {
      issuers: { runs: Record<string, unknown>[] }[];
    };
    const changes = slice.issuers[0]?.runs[0]?.["changes"] as {
      changes: Record<string, unknown>[];
    };
    const first = changes.changes[0];
    if (first === undefined) throw new Error("no change in the fixture");
    Object.assign(first, { kind: "", cause: "", effect: "" });
    openTable("2026-09-30", slice);
    const [, , , kind, direction, why] = rowTexts("Net leverage");
    expect(kind).toContain("not available");
    expect(direction).toBe("Lower by 0.3x");
    expect(why).toContain("not available");
    expect(screen.getAllByRole("button", { name: "Show sources for this change" })).toHaveLength(6);
  });
});
