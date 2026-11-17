import { fireEvent, render, screen } from "@testing-library/react";
import { Tab, TabList, TabPanel, Tabs } from "./tabs";

function renderTabs(orientation: "horizontal" | "vertical" = "horizontal") {
  return render(
    <Tabs defaultSelectedKey="overview" orientation={orientation}>
      <TabList
        aria-label="Sections"
        orientation={orientation}
        type={orientation === "horizontal" ? "underline" : "line"}
      >
        <Tab id="overview">Overview</Tab>
        <Tab id="changes">Changes</Tab>
      </TabList>
      <TabPanel id="overview">First</TabPanel>
      <TabPanel id="changes">Second</TabPanel>
    </Tabs>,
  );
}

const hover = (tab: HTMLElement) => {
  fireEvent.pointerEnter(tab, { pointerType: "mouse" });
};

describe.each(["horizontal", "vertical"] as const)("Tabs, %s", (orientation) => {
  const line = orientation === "horizontal" ? "border-b-2" : "border-l-2";

  it("draws the selected tab in the action colour with its line", () => {
    renderTabs(orientation);
    const selected = screen.getByRole("tab", { name: "Overview" });
    expect(selected).toHaveClass(line, "border-fg-brand-primary_alt", "text-brand-secondary");
  });

  it("changes only the text colour of a hovered, unselected tab: no line, not the selected colour", () => {
    renderTabs(orientation);
    const other = screen.getByRole("tab", { name: "Changes" });
    hover(other);
    expect(other).toHaveAttribute("data-hovered", "true");
    expect(other).toHaveClass("text-secondary");
    expect(other).not.toHaveClass("border-fg-brand-primary_alt");
    expect(other).not.toHaveClass("text-brand-secondary");
  });

  it("leaves the selected tab as it is when the pointer rests on it", () => {
    renderTabs(orientation);
    const selected = screen.getByRole("tab", { name: "Overview" });
    hover(selected);
    expect(selected).toHaveClass("border-fg-brand-primary_alt", "text-brand-secondary");
    expect(selected).not.toHaveClass("text-secondary");
  });
});
