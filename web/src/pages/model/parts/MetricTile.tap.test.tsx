import { act, fireEvent, render, screen } from "@testing-library/react";
import type { Metric } from "../slice/types";
import { ModelMetricTile as MetricTile } from "./MetricTile";

const DEFINITION = "Net debt divided by EBITDA as defined";
const METRIC: Metric = {
  label: "Net leverage",
  definition: DEFINITION,
  value: { text: "5.9x" },
  delta: null,
  note: null,
  trace: null,
};

/** A finger on the control: the touch pointer goes down and up on it. */
function tap(element: Element) {
  const touch = { pointerType: "touch", pointerId: 7, isPrimary: true, button: 0 };
  fireEvent.pointerDown(element, touch);
  fireEvent.pointerUp(element, touch);
  fireEvent.click(element, { detail: 1 });
}

const about = () => screen.getByRole("button", { name: "About Net leverage" });

describe("A metric's definition is reachable by a tap (S5-008)", () => {
  it("shows the definition when the info button is tapped, and hides it on a second tap", async () => {
    render(<MetricTile metric={METRIC} />);
    expect(screen.queryByRole("tooltip")).toBeNull();
    tap(about());
    expect(await screen.findByRole("tooltip")).toHaveTextContent(DEFINITION);
    tap(about());
    expect(screen.queryByRole("tooltip")).toBeNull();
  });

  it("hides the definition when a finger lands anywhere else", async () => {
    render(<MetricTile metric={METRIC} />);
    tap(about());
    expect(await screen.findByRole("tooltip")).toBeInTheDocument();
    act(() => {
      fireEvent.pointerDown(document.body, { pointerType: "touch", pointerId: 8, button: 0 });
    });
    expect(screen.queryByRole("tooltip")).toBeNull();
  });

  it("still shows the definition on keyboard focus", async () => {
    render(<MetricTile metric={METRIC} />);
    fireEvent.keyDown(document.body, { key: "Tab" });
    act(() => {
      about().focus();
    });
    expect(await screen.findByRole("tooltip")).toHaveTextContent(DEFINITION);
  });
});
