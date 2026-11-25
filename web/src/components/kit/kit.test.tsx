import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { BarCell } from "./BarCell";
import { Segmented } from "./Segmented";
import { StatsStrip } from "./StatsStrip";

afterEach(cleanup);

it("draws a stat's value as written, its change with the direction word, and a gap in words", () => {
  render(
    <StatsStrip
      label="Headline figures"
      stats={[
        {
          label: "Net leverage",
          value: "2.25x",
          prior: "3.00x in FY2023",
          delta: "-0.75x",
          tone: "better",
        },
        { label: "Adjusted EBITDA", value: null, gap: "Not supplied: the measure is not stated" },
      ]}
    />,
  );
  const strip = screen.getByLabelText("Headline figures");
  expect(within(strip).getByText("2.25x")).toHaveClass("font-mono", "tabular-nums");
  expect(within(strip).getByText("-0.75x better")).toHaveClass("text-success-text");
  expect(within(strip).getByText(/from 3\.00x in FY2023/)).toBeInTheDocument();
  expect(within(strip).getByText("Not supplied: the measure is not stated")).toBeInTheDocument();
  expect(within(strip).queryByText("0")).toBeNull();
});

it("marks the current link segment as the current page and draws a navigation landmark", () => {
  render(
    <Segmented
      label="Report sections"
      current="overview"
      segments={[
        { key: "overview", label: "Overview", href: "#overview" },
        { key: "changes", label: "Changes", href: "#changes" },
      ]}
    />,
  );
  const nav = screen.getByRole("navigation", { name: "Report sections" });
  expect(within(nav).getByRole("link", { name: "Overview" })).toHaveAttribute(
    "aria-current",
    "page",
  );
  expect(within(nav).getByRole("link", { name: "Changes" })).not.toHaveAttribute("aria-current");
});

it("draws button segments as a pressed group and reports the choice", () => {
  const onSelect = vi.fn();
  render(
    <Segmented
      label="Case"
      current="base"
      onSelect={onSelect}
      segments={[
        { key: "base", label: "Base" },
        { key: "downside", label: "Downside" },
      ]}
    />,
  );
  const group = screen.getByRole("group", { name: "Case" });
  expect(within(group).getByRole("button", { name: "Base" })).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  fireEvent.click(within(group).getByRole("button", { name: "Downside" }));
  expect(onSelect).toHaveBeenCalledWith("downside");
});

it("sizes the bar from the share and draws no fill for a missing value", () => {
  const { container, rerender } = render(<BarCell text="1,200" share={0.6} />);
  expect(screen.getByText("1,200")).toBeInTheDocument();
  expect(container.querySelector("[style]")).toHaveStyle({ width: "60%" });
  rerender(<BarCell text="Not supplied" share={null} />);
  expect(container.querySelector("[style]")).toBeNull();
});

it("keeps the figure column at its default width and takes a width class for a list of rows", () => {
  const { container, rerender } = render(<BarCell text="1" share={0.5} />);
  expect(container.querySelector(".w-20")).not.toBeNull();
  rerender(<BarCell text="US$1,250.00m" share={0.5} valueWidth="w-32" />);
  expect(container.querySelector(".w-32")).not.toBeNull();
  expect(container.querySelector(".w-20")).toBeNull();
});
