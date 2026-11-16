import { describe, expect, it } from "vitest";
import { spendFigure } from "./runFigures";
import type { Run } from "./api";

const run: Run = {
  id: "run-1",
  status: "running",
  reason: "",
  issuer_name: "Example",
  as_of: "2026-11-16",
  pathway: "credit_snapshot",
  modules: [],
  observed_at: "2026-11-16T12:00:00Z",
  cap: "20",
  spent: "8.25",
  settled_spent: "1.25",
  held: "7.00",
  events: [],
};

describe("spendFigure", () => {
  it("shows settled charges and unresolved holds as cap usage", () => {
    expect(spendFigure(run)).toEqual({
      value: "USD 8.25",
      bar: {
        value: 8.25,
        max: 20,
        label: "USD 8.25 of USD 20.00 cap usage; USD 1.25 settled, USD 7.00 reserved or unknown",
      },
    });
  });

  it("does not turn an unreadable journal into zero usage", () => {
    expect(
      spendFigure({ ...run, status: "queued", spent: null, settled_spent: null, held: null }),
    ).toEqual({
      value: null,
      bar: null,
      note: "Cap usage is unavailable; the budget journal could not be read",
    });
  });

  it("reports a zero configured cap without implying the run was free", () => {
    expect(spendFigure({ ...run, cap: "0", spent: "1", settled_spent: "1", held: "0" })).toEqual({
      value: "USD 1.00",
      bar: null,
      note: "Configured cap is USD 0.00; USD 1.00 settled, USD 0.00 reserved or unknown",
    });
  });
});
