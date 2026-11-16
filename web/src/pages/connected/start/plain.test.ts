import { moduleTitle } from "../api";
import { lookupSentence, plainText } from "./plain";

it("names a module without its code", () => {
  expect(moduleTitle("CP-4")).toBe("Legal & covenants");
  expect(moduleTitle("CP-99")).toBe("CP-99");
});
it("replaces known codes and leaves unknown ones", () => {
  expect(plainText("Expected to be limited through CP-4, CP-2A, which it reads.")).toBe(
    "Expected to be limited through Legal & covenants, Downside, which it reads.",
  );
  expect(plainText("CP-99 is not a module")).toBe("CP-99 is not a module");
});
it("drops the launcher label and flag hint from a lookup line", () => {
  expect(lookupSentence("Lookup:   off: synthetic case (default); --web-lookup on forces it")).toBe(
    "off: synthetic case (default)",
  );
  expect(
    lookupSentence(
      "Lookup:   on: CP-DR may fetch allowlisted public pages and SEC EDGAR (public case default)",
    ),
  ).toBe(
    "on: Research questions may fetch allowlisted public pages and SEC EDGAR (public case default)",
  );
});
