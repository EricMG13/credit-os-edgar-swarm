import { readFileSync } from "node:fs";
import path from "node:path";
import { render, screen } from "@testing-library/react";
import type { LibraryData } from "@/data";
import { SourceContext } from "../source";
import { routes } from "./routes";

type Json = Record<string, unknown>;

const fixture = JSON.parse(
  readFileSync(
    path.resolve(import.meta.dirname, "..", "..", "..", "fixtures", "library.json"),
    "utf8",
  ),
) as { issuers: LibraryData["issuers"]; slice: Json };

function renderOverview() {
  const data: LibraryData = {
    schema: "credit-os-data/1",
    issuers: fixture.issuers,
    library: fixture.slice,
  };
  const route = routes.find((r) => r.path === "/library/:issuer/:run/overview");
  if (route === undefined) throw new Error("no overview route");
  return render(
    <SourceContext.Provider value={data}>
      {route.render({ issuer: "halden-aerostructures", run: "2026-09-30" })}
    </SourceContext.Provider>,
  );
}

/**
 * S2-005. jsdom lays nothing out, so the layout cause is asserted as the classes that decide it. A
 * point's text column sits in a flex column whose items start at the left, so its width is the
 * widest thing in it: a qualifier longer than the tile stretched the column past the tile and the
 * badge's own `max-w-full` had nothing narrower to be a share of. Capping the column at the tile's
 * width gives the badge a definite width to wrap within.
 */
describe("a point's qualifier at narrow widths", () => {
  it("caps the column that holds the sentence and the qualifier at the tile's width", () => {
    renderOverview();
    const qualifier = screen.getByText("Unhedged portion estimated");
    expect(qualifier).toHaveClass("whitespace-normal", "max-w-full");
    const column = qualifier.parentElement as HTMLElement;
    expect(column).toContainElement(screen.getByText(/^Interest cover leaves little room/));
    expect(column).toHaveClass("min-w-0", "max-w-full");
  });
});
