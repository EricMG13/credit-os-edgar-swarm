import { afterEach, describe, expect, it, vi } from "vitest";
import { getContext } from "./api";

afterEach(() => vi.unstubAllGlobals());

describe("connected pathway caps", () => {
  it("keeps only known pathway ids with finite positive decimal string values", async () => {
    const template = {
      run: {
        as_of: "",
        pathway: "credit_snapshot",
        case_kind: "synthetic",
        reporting_currency: "USD",
      },
      identity: { issuer_name: "", issuer_id: "" },
    };
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        Response.json({
          ...template,
          submission_caps_usd: {
            credit_snapshot: "25",
            lite_credit_assessment: "15.00",
            deep_credit_assessment: "Infinity",
            earnings_update: "0",
            relative_value: "-20",
            covenant_refinancing: 20,
            unknown_pathway: "50",
          },
        }),
      ),
    );

    const result = await getContext(new AbortController().signal);

    expect(result).toEqual({
      template,
      caps: { credit_snapshot: "25", lite_credit_assessment: "15.00" },
    });
  });

  it("does not invent a cap when the pathway-cap map is missing", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        Response.json({
          run: {
            as_of: "",
            pathway: "credit_snapshot",
            case_kind: "synthetic",
            reporting_currency: "USD",
          },
          identity: { issuer_name: "", issuer_id: "" },
        }),
      ),
    );

    const result = await getContext(new AbortController().signal);

    expect(result.caps).toEqual({});
  });
});
