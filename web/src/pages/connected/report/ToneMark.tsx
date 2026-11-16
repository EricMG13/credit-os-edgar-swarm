import { StatusShape, type Shape } from "@/components/status/shapes";

export type Tone = "better" | "worse" | "flat";

const SHAPE: Record<Tone, Shape> = { better: "filled circle", worse: "diamond", flat: "ring" };
const WORD: Record<Tone, string> = { better: "better", worse: "worse", flat: "unchanged" };

/** The tone of a change as a shape and a visible word, so better and worse never differ by colour alone. */
export function ToneMark({ tone }: { tone: Tone }) {
  return (
    <span className="inline-flex items-center gap-1">
      <StatusShape shape={SHAPE[tone]} />
      {WORD[tone]}
    </span>
  );
}
