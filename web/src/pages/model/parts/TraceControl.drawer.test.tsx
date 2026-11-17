import { act, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { App } from "@/App";
import type { LoadResult } from "@/data";
import { fixtureSlice } from "../slice/test-fixture";
import { ShowSources } from "./ShowSources";
import { TraceControl } from "./TraceControl";

const ADDRESS = "#/library/transdigm/2025-06-30/evidence";
const LABEL = "Show the sources for Debt by instrument";

function renderControl() {
  window.location.hash = "";
  return render(
    <ShowSources>
      <TraceControl href="#/somewhere" label={LABEL} />
    </ShowSources>,
  );
}

const control = () => screen.getByRole("link", { name: LABEL });
const drawer = () => screen.getByRole("dialog", { name: "Sources for Debt by instrument" });
const gone = () =>
  waitFor(() => {
    expect(screen.queryByRole("dialog")).toBeNull();
  });
const focusIsOnControl = () =>
  waitFor(() => {
    expect(document.activeElement).toBe(control());
  });
/** The drawer registers for Escape once its entry has settled. */
const settled = () => act(() => new Promise<void>((resolve) => setTimeout(resolve, 300)));

describe("A Model trace control opens the library's trace drawer in place (S5-004)", () => {
  it("opens the drawer on a press and does not leave the page", () => {
    renderControl();
    fireEvent.click(control());
    const dialog = within(drawer());
    expect(dialog.getByRole("heading", { name: "Debt by instrument" })).toBeInTheDocument();
    expect(window.location.hash).toBe("");
  });

  it("keeps its address as the drawer's Open in Evidence link", () => {
    renderControl();
    expect(control()).toHaveAttribute("href", "#/somewhere");
    fireEvent.click(control());
    expect(within(drawer()).getByRole("link", { name: "Open in Evidence" })).toHaveAttribute(
      "href",
      "#/somewhere",
    );
  });

  it("opens from the keyboard and returns focus to the control when Escape closes it", async () => {
    renderControl();
    control().focus();
    fireEvent.click(control());
    await settled();
    fireEvent.keyDown(drawer(), { key: "Escape" });
    await gone();
    await focusIsOnControl();
  });

  it("returns focus to the control when Close is pressed", async () => {
    renderControl();
    control().focus();
    fireEvent.click(control());
    fireEvent.click(within(drawer()).getAllByRole("button", { name: "Close" })[0] as HTMLElement);
    await gone();
    await focusIsOnControl();
  });

  it("leaves a click with a modifier key to the browser, which opens the address itself", () => {
    renderControl();
    fireEvent.click(control(), { ctrlKey: true });
    expect(screen.queryByRole("dialog")).toBeNull();
  });
});

describe("On the Statements page a trace control keeps the reader's place", () => {
  it("keeps the chosen case and the address when the drawer opens", () => {
    window.location.hash = "#/model/transdigm/2025-06-30/statements";
    const result: LoadResult = {
      kind: "ok",
      data: { schema: "credit-os-data/1", issuers: [], model: fixtureSlice() },
    };
    render(<App result={result} />);
    fireEvent.click(screen.getByRole("radio", { name: "Downside case" }));
    fireEvent.click(screen.getByRole("link", { name: LABEL }));
    expect(drawer()).toBeInTheDocument();
    expect(window.location.hash).toBe("#/model/transdigm/2025-06-30/statements");
    // The page behind an open modal is hidden from the accessibility tree, not removed.
    expect(screen.getByRole("radio", { name: "Downside case", hidden: true })).toBeChecked();
    expect(within(drawer()).getByRole("link", { name: "Open in Evidence" })).toHaveAttribute(
      "href",
      ADDRESS,
    );
    // The test renders the whole page, which takes seconds on a loaded machine.
  }, 20_000);
});
