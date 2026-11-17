import { cleanup, render, screen, within } from "@testing-library/react";
import { Timeline } from "./Timeline";

afterEach(cleanup);

const plain = [
  { date: "12 Feb 2025", title: "Filed", text: "Annual report.", state: "Past" },
  { date: "15 Mar 2025", title: "Call", state: "Next" },
] as const;

const entries = () => within(screen.getByRole("list")).getAllByRole("listitem");

describe("Timeline, an entry's optional action slot", () => {
  it("draws an entry's action inside that entry, after its text, and none in an entry without one", () => {
    render(
      <Timeline
        items={[
          { ...plain[0], action: <button type="button">Sources for Filed</button> },
          plain[1],
        ]}
      />,
    );
    const [first = document.body, second = document.body] = entries();
    const action = within(first).getByRole("button", { name: "Sources for Filed" });
    expect(action).toBeVisible();
    expect(
      screen.getByText("Annual report.").compareDocumentPosition(action) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(within(second).queryByRole("button")).toBeNull();
    expect(within(first).getByRole("heading", { level: 3, name: "Filed" })).toBeVisible();
  });

  it("makes an entry with an action the host of the trace control and lets its text shrink beside it", () => {
    render(<Timeline items={[{ ...plain[0], action: <button type="button">x</button> }]} />);
    const [entry = document.body] = entries();
    expect(entry).toHaveClass("group/trace", "relative");
    expect(entry.querySelector("h3")?.parentElement?.parentElement).toBe(entry);
    expect(entry.querySelector("h3")?.parentElement).toHaveClass("min-w-0", "flex-1");
  });

  it("draws an entry with no action as it was drawn before the slot existed", () => {
    const { container } = render(<Timeline items={plain} />);
    for (const entry of entries()) {
      expect(entry.className).toBe("relative -ms-1.5 flex items-start gap-4");
      expect(entry.className).not.toContain("group/trace");
      expect(entry.children).toHaveLength(2);
      expect(entry.lastElementChild?.className).toBe("-mt-2 flex flex-col gap-1");
    }
    const { container: again } = render(
      <Timeline items={plain.map((item) => ({ ...item, action: undefined }))} />,
    );
    expect(again.innerHTML).toBe(container.innerHTML);
  });
});
