import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Tooltip, TooltipTrigger } from "./tooltip";

// Keyboard focus that scrolls its trigger into view makes the browser raise a scroll event on the
// scrolled ancestor in the next frame, before that frame's animation-frame callbacks. React Aria
// closes a tooltip on any scroll of an ancestor of its trigger, so a tooltip opened by the focus
// was closed again by the scroll the same focus caused (S1-005).
function renderInScroller() {
  render(
    <div data-testid="scroller" style={{ overflow: "auto", height: 40 }}>
      <Tooltip title="Net debt over EBITDA.">
        <TooltipTrigger>About Net leverage</TooltipTrigger>
      </Tooltip>
    </div>,
  );
  return {
    scroller: screen.getByTestId("scroller"),
    trigger: screen.getByRole("button", { name: "About Net leverage" }),
  };
}

function focusByKeyboard(trigger: HTMLElement) {
  fireEvent.keyDown(document.body, { key: "Tab" });
  act(() => {
    trigger.focus();
  });
}

const frames = (count: number) =>
  act(async () => {
    for (let i = 0; i < count; i += 1) {
      await new Promise<void>((resolve) => {
        requestAnimationFrame(() => {
          resolve();
        });
      });
    }
  });

describe("Tooltip opened by keyboard focus", () => {
  it("stays open when the scroll that the same focus caused follows it", async () => {
    const { scroller, trigger } = renderInScroller();
    focusByKeyboard(trigger);
    fireEvent.scroll(scroller);
    expect(await screen.findByRole("tooltip")).toHaveTextContent("Net debt over EBITDA.");
    await frames(5);
    expect(screen.getByRole("tooltip")).toHaveTextContent("Net debt over EBITDA.");
  });

  it("does not open when focus leaves before the next frame", async () => {
    const { trigger } = renderInScroller();
    focusByKeyboard(trigger);
    act(() => {
      trigger.blur();
    });
    await frames(5);
    expect(screen.queryByRole("tooltip")).toBeNull();
  });

  it("closes on Escape while focus stays on the trigger", async () => {
    const { trigger } = renderInScroller();
    focusByKeyboard(trigger);
    expect(await screen.findByRole("tooltip")).toBeInTheDocument();
    fireEvent.keyDown(trigger, { key: "Escape" });
    await waitFor(() => {
      expect(screen.queryByRole("tooltip")).toBeNull();
    });
    expect(trigger).toHaveFocus();
  });
});
