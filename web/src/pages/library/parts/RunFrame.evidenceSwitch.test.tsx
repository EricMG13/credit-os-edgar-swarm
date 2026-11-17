import { readFileSync } from "node:fs";
import path from "node:path";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { LibraryData } from "@/data";
import { SourceContext } from "../../source";
import { RunFrame, type RunTab } from "./RunFrame";

const fixture = JSON.parse(
  readFileSync(
    path.resolve(import.meta.dirname, "..", "..", "..", "..", "fixtures", "library.json"),
    "utf8",
  ),
) as { issuers: LibraryData["issuers"]; slice: unknown };

function renderFrame(tab: RunTab) {
  const data: LibraryData = {
    schema: "credit-os-data/1",
    issuers: fixture.issuers,
    library: fixture.slice,
  };
  return render(
    <SourceContext.Provider value={data}>
      <RunFrame issuer="halden-aerostructures" run="2026-09-30" tab={tab}>
        <p>Page body</p>
      </RunFrame>
    </SourceContext.Provider>,
  );
}

describe("the Show sources switch", () => {
  it.each<RunTab>(["overview", "changes", "modules"])(
    "is drawn on %s, whose pages carry trace controls",
    (tab) => {
      renderFrame(tab);
      expect(screen.getByRole("switch", { name: "Show sources" })).toBeInTheDocument();
    },
  );

  it("is not drawn on Evidence, which draws no trace control for it to show", () => {
    renderFrame("evidence");
    expect(screen.getByText("Page body")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Report history" })).toBeInTheDocument();
    expect(screen.queryByRole("switch", { name: "Show sources" })).toBeNull();
    expect(screen.queryByText("Show sources")).toBeNull();
  });
});
