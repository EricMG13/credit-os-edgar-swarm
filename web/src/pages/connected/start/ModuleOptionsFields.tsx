import { RowInput } from "./RowEditor";
import { CP3_FIELD, DEEP_DEBATE, type ModuleOptionsForm } from "./valuation";

/** Each choice is shown only when the pathway runs the module it belongs to. */
export function ModuleOptionsFields({
  form,
  runs,
  onChange,
}: {
  form: ModuleOptionsForm;
  runs: { cp3: boolean; cp6: boolean };
  onChange: (next: ModuleOptionsForm) => void;
}) {
  if (!runs.cp3 && !runs.cp6) return null;
  return (
    <div className="grid gap-3">
      {runs.cp3 && (
        <RowInput
          id="module-options-cp3_mode"
          item={CP3_FIELD}
          blank={false}
          value={form.cp3_mode}
          options={CP3_FIELD.options}
          onChange={(cp3_mode) => {
            onChange({ ...form, cp3_mode });
          }}
        />
      )}
      {runs.cp6 && (
        <div className="grid gap-1">
          <label className="flex items-center gap-2 text-sm font-semibold">
            <input
              type="checkbox"
              aria-describedby="module-options-deep-debate-hint"
              checked={form.cp6_deep_debate}
              onChange={(event) => {
                onChange({ ...form, cp6_deep_debate: event.target.checked });
              }}
            />
            {DEEP_DEBATE}
          </label>
          <p id="module-options-deep-debate-hint" className="text-xs text-text-secondary">
            A longer, fuller committee argument, never a softer sizing posture. Off by default.
          </p>
        </div>
      )}
    </div>
  );
}
