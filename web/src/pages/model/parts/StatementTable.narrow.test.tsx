import { render, screen } from "@testing-library/react";
import { App } from "@/App";
import type { LoadResult } from "@/data";
import { fixtureSlice } from "../slice/test-fixture";

const tokens = (element: Element) => element.className.split(/\s+/);

describe("The Statements table leaves the figures a window on a narrow screen (S5-005)", () => {
  // jsdom has no layout: the classes are asserted here, and the 390 px probe measures the result.
  it("keeps the 1100 px width and the auto label column only from the sm breakpoint up", () => {
    window.location.hash = "#/model/transdigm/2025-06-30/statements";
    const result: LoadResult = {
      kind: "ok",
      data: { schema: "credit-os-data/1", issuers: [], model: fixtureSlice() },
    };
    render(<App result={result} />);
    const table = screen.getByRole("table");
    expect(tokens(table)).not.toContain("min-w-[1100px]");
    expect(tokens(table)).toContain("sm:min-w-[1100px]");
    const label = table.querySelector('thead th[scope="col"]');
    expect(label).not.toBeNull();
    expect(tokens(label as Element)).toContain("w-32");
    expect(tokens(label as Element)).toContain("sm:w-auto");
    // A subtotal's indent is narrower there too, so a long label wraps by word, not by letter.
    const subtotal = table.querySelector('tr[data-kind="subtotal"] th');
    expect(tokens(subtotal as Element)).toEqual(expect.arrayContaining(["pl-4", "sm:pl-7"]));
    expect(tokens(subtotal as Element)).not.toContain("pl-7");
  }, 20_000);
});
