import { render, screen, within } from "@testing-library/react";
import { App } from "@/App";
import type { LoadResult } from "@/data";
import { fixtureSlice, must } from "./slice/test-fixture";

function renderIndex(issuers: { id: string; name: string }[]) {
  const slice = fixtureSlice() as { runs: { run: string; header: Record<string, unknown> }[] };
  const bad = structuredClone(must(slice.runs[0]));
  bad.run = "2024-12-31";
  bad.header["asOf"] = 5;
  slice.runs.push(bad);
  window.location.hash = "#/model/runs";
  const result: LoadResult = {
    kind: "ok",
    data: { schema: "credit-os-data/1", issuers, model: slice },
  };
  return render(<App result={result} />);
}

const unreadableRow = () => {
  const items = within(screen.getByRole("main")).getAllByRole("listitem");
  expect(items).toHaveLength(2);
  return must(items[1]);
};

describe("The Financial models list names an unreadable run without its ids (S5-002)", () => {
  it("draws the issuer's name when the library knows it, and neither slug nor run id", () => {
    renderIndex([{ id: "transdigm", name: "TransDigm Group" }]);
    const row = unreadableRow();
    expect(row).toHaveTextContent("TransDigm Group");
    expect(row).toHaveTextContent("Could not be read");
    expect(row).not.toHaveTextContent("transdigm");
    expect(row).not.toHaveTextContent("2024-12-31");
    expect(within(row).getByRole("link")).toHaveAttribute(
      "href",
      "#/model/transdigm/2024-12-31/front",
    );
  });

  it("draws a plain label when the library does not know the issuer", () => {
    renderIndex([]);
    const row = unreadableRow();
    expect(row).toHaveTextContent("A financial model");
    expect(row).toHaveTextContent("Could not be read");
    expect(row).not.toHaveTextContent("transdigm");
    expect(row).not.toHaveTextContent("2024-12-31");
  });
});
