import { render, screen } from "@testing-library/react";
import { LoadingIndicator } from "./loading-indicator";

describe("LoadingIndicator", () => {
  it("is a status region named by its label, with the spinner drawing hidden", () => {
    render(<LoadingIndicator label="Waiting for the first module" />);
    const region = screen.getByRole("status", { name: "Waiting for the first module" });
    expect(region.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
    expect(region.querySelector("svg")).toHaveClass("animate-spin");
  });

  it("keeps the label in the region as text a screen reader can announce (D-43)", () => {
    render(<LoadingIndicator label="Waiting for the first module" />);
    const region = screen.getByRole("status");
    const label = screen.getByText("Waiting for the first module");
    expect(region).toContainElement(label);
    // Neither the text nor anything holding it is hidden from assistive technology.
    expect(label.closest("[aria-hidden='true']")).toBeNull();
  });

  it("shows the label once", () => {
    render(<LoadingIndicator label="Starting" />);
    expect(screen.getAllByText("Starting")).toHaveLength(1);
  });
});
