import { render, screen, within } from "@testing-library/react";
import { Select } from "./select";

const LONG =
  "Amended and Restated Senior Secured Revolving Credit and Term Loan Agreement among the Borrower, the Guarantors and the Lenders named in it, dated as of 12 March 2024";

function renderSelect(props: { defaultOpen?: boolean } = {}) {
  return render(
    <Select aria-label="Agreement" defaultValue="long" {...props}>
      <Select.Item id="long" label={LONG} supportingText="Executed copy" />
      <Select.Item id="short" label="Short" />
    </Select>,
  );
}

describe("Select with a long option (X1-015, D-32)", () => {
  it("shows the whole selected value in the field, wrapped: nothing in it truncates", () => {
    renderSelect();
    const trigger = screen.getByRole("button", { name: /Agreement/ });
    const value = within(trigger).getByText(LONG);
    expect(value).toHaveClass("wrap-anywhere");
    expect(value.textContent).toBe(LONG);
    expect(trigger.querySelector(".truncate")).toBeNull();
    expect(trigger.querySelector("[class*='text-ellipsis']")).toBeNull();
  });

  it("shows the whole text of each option in the list, wrapped", () => {
    renderSelect({ defaultOpen: true });
    const option = within(screen.getByRole("listbox")).getByRole("option", { name: /Amended/ });
    const label = within(option).getByText(LONG);
    expect(label).toHaveClass("wrap-anywhere");
    expect(option.querySelector(".truncate, .whitespace-nowrap")).toBeNull();
  });
});
