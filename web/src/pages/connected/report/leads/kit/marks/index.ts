/**
 * The lead marks: one waterfall, one dumbbell, one bullet, one axis, one gap slot. Code against
 * this file; no lead keeps a private waterfall, dumbbell, bullet, `niceStep` or `GapSlot`. Import
 * the Overview marks (`../../overview/marks`: Slope, DotStrip, MiniSlope, Ruler, DeltaBar,
 * SplitBar, GapBar) where one fits; they are not redrawn here.
 *
 * Every mark draws ONE SVG at the measured width (`viewBox="0 0 {width} {height}"`, one unit one
 * pixel), so its text is its real size: 12 px labels and figures, 11 px ticks, never smaller.
 * Below 520 px (`NARROW`) a mark draws its narrow layout: one measure per row, the row's label
 * above its mark, the figures beside the mark; it never scrolls sideways. The SVG carries
 * `role="img"`, an `aria-label` (yours, or the default reading with every figure) and
 * `data-layout="wide" | "narrow"`. Direction is carried by position and the sign or word, never
 * by colour alone. Test hooks: `data-bar`, `data-step`, `data-gap`, `data-axis-break`,
 * `data-prior`, `data-current`, `data-mark`, `data-part` (label | value | tick | reason | …).
 *
 * ── Width ─────────────────────────────────────────────────────────────────────────────────
 *   useFigureWidth(fallback: number): [RefObject<HTMLDivElement | null>, number]   (../useWidth)
 *   <Measured fallback={n}>{(width) => mark}</Measured>   the same, as a wrapper
 *
 *     const [ref, width] = useFigureWidth(520);
 *     return <div ref={ref}><Waterfall width={width} … /></div>;
 *
 * ── Waterfall ─────────────────────────────────────────────────────────────────────────────
 *   type WaterfallRow =
 *     | { kind: "level" | "closing" | "step"; label: string; value: number; text: string }
 *     | { kind: "gap"; label: string; reason: string };
 *   <Waterfall rows unit width axisStart?: number | "auto" label? legend?: { level?, step?,
 *     closing?, gap? } />
 *   Levels and the closing are drawn from the axis start (level teal, closing navy); a step
 *   floats from the running total (navy outline), its figure signed (`+70`, `−10`), a fall drawn
 *   leftward. A gap row is the hatched slot with its reason; a step after a gap has no known
 *   start until the next level and is written, not placed. `axisStart` omitted: from zero;
 *   "auto": cut where the values sit high (CP-1's rule); a number: start there. A cut axis has
 *   the break glyph on every total and the line "Axis starts at …, marked on the total bars."
 *
 *     <Waterfall
 *       width={width}
 *       unit="USD m"
 *       axisStart="auto"
 *       legend={{ level: "Reported EBITDA", step: "Add-back", closing: "EBITDA As Defined" }}
 *       rows={[
 *         { kind: "level", label: "Reported EBITDA", value: 3813, text: "3,813" },
 *         { kind: "step", label: "Stock compensation", value: 217, text: "217" },
 *         { kind: "gap", label: "Other", reason: "Not supplied: not itemised in the source" },
 *         { kind: "closing", label: "EBITDA As Defined", value: 4173, text: "4,173" },
 *       ]}
 *     />
 *
 *   Optional, per row (additive; a row without them draws as above):
 *   `prior?: { value, text } | { gap }` — the row in an earlier period: a 5 px bar beneath the
 *     row's mark with its figure written beside it (`data-prior`, `data-part="prior-value"`); a
 *     level from the axis start, a step from the earlier period's own running total; a stated gap
 *     is a small hatched slot with its reason (`prior-reason`); a step after an earlier gap is
 *     written, not placed (`prior-unplaced`). The axis holds the earlier figures; `legend.prior`
 *     names the period. On a gap row, `of?: "level" | "step"` says what the row stands for, so its
 *     prior can be placed. Used by CP-1's cash ladder (FY2023 beneath FY2024).
 *   `split?: { text, value, tone: "primary" | "secondary" | "worse" }[]` — on a step only: the
 *     step drawn as consecutive segments from its start, in order (`data-split`), each part's
 *     words with its swatch under the bar (`data-part="split"`); the step's own figure and running
 *     total are unchanged, parts that do not add up are drawn as written. For a step whose parts
 *     the module states, e.g. CP-1D's accepted / not accepted amounts of one add-back.
 *
 *     { kind: "level", label: "Free cash flow", value: 1880, text: "1,880",
 *       prior: { value: 1236, text: "1,236" } },
 *     { kind: "step", label: "Acquisition costs", value: 200, text: "200", split: [
 *       { text: "Accepted 120", value: 120, tone: "primary" },
 *       { text: "Not accepted 80", value: 80, tone: "worse" } ] },
 *
 * ── Dumbbell ──────────────────────────────────────────────────────────────────────────────
 *   type DumbbellSide = { value: number; text: string } | { gap: string };
 *   type DumbbellRow = { label; prior: DumbbellSide; current: DumbbellSide; change?: string;
 *     note?: string; tone?: MarkTone };
 *   <Dumbbell rows width periods={{ prior, current }} unit axisStart? label? legend? />
 *   Prior ring → current dot on one shared scale from zero (or a cut axis, stated under it);
 *   each figure written outward, away from the other mark; `change` and `note` (direction and
 *   the better/worse word from signal.ts `tone()`) in the row's change slot; `tone: "worse"`
 *   draws the dot in the signal colour (the word must be in `note`). A side the module did not
 *   state: a hatched strip under the row and "{period}: {reason}" in the change slot.
 *
 *     <Dumbbell
 *       width={width}
 *       unit="USD m"
 *       periods={{ prior: "FY2023", current: "FY2024" }}
 *       rows={[
 *         { label: "Net sales", prior: { value: 6585, text: "6,585" },
 *           current: { value: 7940, text: "7,940" }, change: "+1,355", note: "up" },
 *         { label: "Gross debt", prior: { gap: "Not supplied: outside scope" },
 *           current: { value: 24880, text: "24,880" } },
 *       ]}
 *     />
 *
 * ── Bullet ────────────────────────────────────────────────────────────────────────────────
 *   <Bullet name value: BulletSide limit: { value, text } proposed?: BulletSide width
 *     limitKind?: "max" | "min" beyond?: string names?: { value?, limit?, proposed? } unit?
 *     label? />
 *   The value as a bar against the limit (a rule, "Limit 12.0" above it) and the proposed as a
 *   ring, on one scale from zero. A figure beyond the limit gets the word (default "above the
 *   limit" / "below the limit") written under the bar, and the part beyond in the signal colour.
 *
 *     <Bullet
 *       width={width}
 *       name="Single-name exposure"
 *       unit="%"
 *       value={{ value: 9.5, text: "9.5%" }}
 *       proposed={{ value: 12.6, text: "12.6%" }}
 *       limit={{ value: 12, text: "12.0%" }}
 *     />
 *
 * ── Axis and gap ──────────────────────────────────────────────────────────────────────────
 *   niceAxis(values, { zero: boolean; start?: number; suffix?: string }): NiceAxis
 *     { start, end, ticks: { value, label }[], cut, place(value, from, to) }
 *   zero: true holds zero (the `ticks()` steps of visuals/visualData); zero: false cuts where the
 *   values sit high, or starts at `start`; a value is never clipped.
 *     const axis = niceAxis([3813, 4173], { zero: false });   // 3,600 … 4,200, cut
 *     const x = (v: number) => axis.place(v, 180, 440);
 *   fittingTicks(axis, from, to, measure): the ticks whose labels fit side by side.
 *   <GapSlot x y width height reason? />   the hatched not-known slot inside any SVG.
 *     <GapSlot x={0} y={10} width={120} height={14} reason="Not supplied: no segment schedule" />
 *   NARROW, SIZE, textWidth(text, size), wrap(text, width, size), signedText(text, value).
 *
 * ── Tile parts (../LeadFrame) ─────────────────────────────────────────────────────────────
 *   FigureTile: the Table view button sits in the tile head beside the trace control
 *   (aria-expanded/aria-controls; the panel with the real <table> opens under the figure).
 *   TableView: the same button and panel, standalone. Link: `<Link href="#forecast">Open the
 *   forecast</Link>` at 32 px (44 px at 480 px and below).
 */
export { fittingTicks, niceAxis, type NiceAxis } from "./axis";
export { Bullet, type BulletSide } from "./Bullet";
export { Dumbbell, type DumbbellRow, type DumbbellSide } from "./Dumbbell";
export { GapSlot, Measured } from "./GapSlot";
export { LINE, NARROW, SIZE, signedText, textWidth, wrap } from "./text";
export {
  Waterfall,
  waterfallAxis,
  waterfallReading,
  type WaterfallPrior,
  type WaterfallRow,
} from "./Waterfall";
export { useFigureWidth } from "../useWidth";
