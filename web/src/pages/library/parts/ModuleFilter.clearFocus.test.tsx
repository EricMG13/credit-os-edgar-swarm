// S4-005: "Show all items", "Show all files" and "Show all gaps" are removed with the empty state
// they sit in; the focus they held must return to the Module filter, not fall to the document body.
import { readFileSync } from "node:fs";
import path from "node:path";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import type { LibraryData } from "@/data";
import { SourceContext } from "../../source";
import { libraryRoutes as routes } from "../routes";

type Json = Record<string, unknown>;

const fixture = JSON.parse(
  readFileSync(
    path.resolve(import.meta.dirname, "..", "..", "..", "..", "fixtures", "library.json"),
    "utf8",
  ),
) as { issuers: LibraryData["issuers"]; slice: Json };

function renderTab(tab: "trace" | "sources" | "gaps") {
  const data: LibraryData = {
    schema: "credit-os-data/1",
    issuers: fixture.issuers,
    library: fixture.slice,
  };
  const found = routes.find((r) => r.path === `/library/:issuer/:run/evidence/${tab}`);
  if (found === undefined) throw new Error(`no ${tab} route`);
  return render(
    <SourceContext.Provider value={data}>
      {found.render({ issuer: "halden-aerostructures", run: "2026-09-30" })}
    </SourceContext.Provider>,
  );
}

afterEach(cleanup);

const filter = () => screen.getByRole("button", { name: /^Module:/ });

/** Chooses a module through the hidden native select React Aria keeps beside the custom one. */
function pick(name: string) {
  const select = filter().closest("div")?.querySelector("select");
  if (!select) throw new Error("no module select");
  fireEvent.change(select, { target: { value: `option:${name}` } });
}

describe("the module filter, focus after the empty state's way back", () => {
  it.each([
    ["trace", "Industry and competition", "Show all items"],
    ["sources", "Recovery", "Show all files"],
    ["gaps", "Industry and competition", "Show all gaps"],
  ] as const)("on %s, returns focus to the Module filter", (tab, module, clearLabel) => {
    renderTab(tab);
    pick(module);
    const clear = screen.getByRole("button", { name: clearLabel });
    clear.focus();
    expect(clear).toHaveFocus();
    fireEvent.click(clear);
    expect(screen.queryByRole("button", { name: clearLabel })).toBeNull();
    expect(filter()).toHaveTextContent("Module: All");
    expect(filter()).toHaveFocus();
  });
});
