import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { RunTabLink } from "./RunFrame";

const REASON = "No forecast for this run";

/** The element and every ancestor above it, up to the document body. */
function lineage(node: HTMLElement): HTMLElement[] {
  const chain: HTMLElement[] = [];
  for (let at: HTMLElement | null = node; at !== null; at = at.parentElement) chain.push(at);
  return chain;
}

describe("a tab with nowhere to go", () => {
  const draw = () =>
    render(
      <nav>
        <RunTabLink href={null} current={false} label="Forecast" hint={REASON} />
      </nav>,
    );

  it("keeps the tab label disabled", () => {
    draw();
    const label = screen.getByText("Forecast");
    expect(label).toHaveAttribute("aria-disabled", "true");
    expect(label).toHaveClass("text-text-disabled");
  });

  it("states its reason in readable text: not in the disabled colour and not under 13 px", () => {
    draw();
    const reason = screen.getByText(REASON);
    for (const element of lineage(reason)) {
      expect(element).not.toHaveClass("text-text-disabled");
      expect(element).not.toHaveAttribute("aria-disabled");
    }
    expect(reason).toHaveClass("text-text-tertiary");
    expect(reason).not.toHaveClass("text-xs");
    expect(reason).toHaveClass("text-small");
  });

  it("draws no reason when none is given", () => {
    render(
      <nav>
        <RunTabLink href={null} current={false} label="Modules" />
      </nav>,
    );
    expect(screen.getByText("Modules")).toHaveAttribute("aria-disabled", "true");
    expect(screen.queryByText(REASON)).toBeNull();
  });
});
