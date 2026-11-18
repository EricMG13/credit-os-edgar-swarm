import { render, screen } from "@testing-library/react";
import { FilterBar, NO_FILTERS } from "./FilterBar";

const FILTERS = {
  sector: ["Aerospace"],
  pathway: ["Full"],
  state: ["Delivered"],
  appliedLabels: ["No filter applied"],
};

describe("the filter bar's search field", () => {
  it("has a visible label element, not a placeholder alone (S2-017, D-37)", () => {
    const { container } = render(
      <FilterBar
        filters={FILTERS}
        values={NO_FILTERS}
        onChange={() => undefined}
        appliedLabel="No filter applied"
      />,
    );
    const search = screen.getByRole("textbox", { name: "Search issuers" });
    const labels = Array.from(container.querySelectorAll("label")).filter(
      (label) => label.control === search,
    );
    expect(labels).toHaveLength(1);
    expect(labels[0]).toHaveTextContent("Search issuers");
    expect(labels[0]?.className).not.toMatch(/sr-only/);
    expect(search).not.toHaveAttribute("placeholder");
  });
});
