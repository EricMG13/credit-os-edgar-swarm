import { render, screen, within } from "@testing-library/react";
import { it } from "vitest";
import { cp1Entry, leadProps } from "../pages/connected/report/leads/fixtures/load";
import { CashLadderTile } from "../pages/connected/report/leads/foundation/CashLadder";
import { cashLadder } from "../pages/connected/report/leads/foundation/legacyData";
import { ladderConnectors, ladderGeometry } from "../pages/connected/report/leads/foundation/ladderGeometry";
it("dump", () => {
  const g = ladderGeometry(cashLadder(cp1Entry())!);
  console.log(JSON.stringify(g.rows.map((r) => [r.step.key, r.current.state === "bar" ? [r.current.span.from, r.current.span.to] : r.current.state, r.mismatch ? [r.mismatch.from, r.mismatch.to] : null, r.tag, r.sub])), g.mismatch, ladderConnectors(g.rows).length, JSON.stringify(g.ticks.map(t=>t.label)));
  render(<CashLadderTile lead={leadProps(cp1Entry())} />);
  const tile = screen.getByRole("region", { name: "Cash conversion" });
  console.log(within(tile).getByRole("heading", { level: 3 }).textContent);
  console.log(within(tile).getByRole("img").getAttribute("aria-label"));
  console.log(tile.textContent);
});
