import { fireEvent, render, screen, within } from "@testing-library/react";
import { App } from "@/App";
import type { LoadResult } from "@/data";
import { fixtureSlice, must } from "../slice/test-fixture";

const REASON = "The sources do not state it.";

type Row = { label: string; cells: { kind: string; reason?: string }[] };
type Slice = { runs: { statements: { statements: { name: string; rows: Row[] }[] } }[] };

/** The fixture with a reason on the missing Cash interest cell of the Cash flow statement. */
function withReason(): unknown {
  const slice = fixtureSlice() as Slice;
  const statement = must(slice.runs[0]).statements.statements.find((s) => s.name === "Cash flow");
  const row = must(statement?.rows.find((r) => r.label === "Cash interest"));
  for (const cell of row.cells) if (cell.kind === "missing") cell.reason = REASON;
  return slice;
}

/** A finger on the control: the touch pointer goes down and up on it. */
function tap(element: Element) {
  const touch = { pointerType: "touch", pointerId: 7, isPrimary: true, button: 0 };
  fireEvent.pointerDown(element, touch);
  fireEvent.pointerUp(element, touch);
  fireEvent.click(element, { detail: 1 });
}

describe("A missing cell's reason is reachable by a tap (S5-008)", () => {
  it("shows the reason when the n.a. is tapped", async () => {
    window.location.hash = "#/model/transdigm/2025-06-30/statements";
    const result: LoadResult = {
      kind: "ok",
      data: { schema: "credit-os-data/1", issuers: [], model: withReason() },
    };
    render(<App result={result} />);
    fireEvent.click(screen.getByRole("tab", { name: "Cash flow" }));
    const row = must(
      [...screen.getByRole("table").querySelectorAll<HTMLElement>("tbody tr")].find((r) =>
        r.querySelector('th[scope="row"]')?.textContent.startsWith("Cash interest"),
      ),
    );
    const trigger = within(row).getAllByRole("button")[0] as HTMLElement;
    expect(screen.queryByRole("tooltip")).toBeNull();
    tap(trigger);
    expect(await screen.findByRole("tooltip")).toHaveTextContent(REASON);
  }, 20_000);
});
