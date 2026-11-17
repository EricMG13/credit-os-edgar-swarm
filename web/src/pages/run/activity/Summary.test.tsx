import { render, screen } from "@testing-library/react";
import { Summary } from "./Summary";

const run = {
  spend: { value: "USD 7.40", bar: { label: "USD 7.40 of USD 25.00", value: 7.4, max: 25 } },
  finished: { value: "5 of 13", bar: { label: "5 of 13 modules", value: 5, max: 13 } },
  elapsed: { value: "16 min 12 s", note: "Started today at 14:38" },
};

describe("the run activity summary", () => {
  it("names the cap in the spend caption, not Spend alone (S6-016)", () => {
    render(<Summary run={run} />);
    expect(screen.getByText("Spend and cap")).toBeVisible();
    expect(screen.queryByText("Spend")).toBeNull();
  });

  it("takes the caller's own spend caption", () => {
    render(<Summary run={run} spendCaption="Cap usage" />);
    expect(screen.getByText("Cap usage")).toBeVisible();
  });
});
