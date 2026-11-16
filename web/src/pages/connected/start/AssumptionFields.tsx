import { moduleName } from "../api";
import { blankPin, PINS, type AssumptionsForm, type PinKey } from "./assumptions";
import { RowEditor, RowInput } from "./RowEditor";

/** Scenario assumptions as ordinary fields: one group per module the run includes. */
export function AssumptionFields({
  form,
  modules,
  onChange,
}: {
  form: AssumptionsForm;
  modules: readonly string[];
  onChange: (next: AssumptionsForm) => void;
}) {
  const shown = PINS.filter((pin) => modules.includes(pin.module));
  const set = (key: PinKey, value: AssumptionsForm[PinKey]) => {
    onChange({ ...form, [key]: value });
  };
  return (
    <div className="grid gap-4">
      {shown.map((pin) => {
        const title = moduleName(pin.module);
        const current = form[pin.key];
        return (
          <section
            key={pin.key}
            aria-label={title}
            className="grid gap-3 rounded-lg border border-border-hairline p-3"
          >
            <h4 className="text-sm font-semibold">{title}</h4>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={current !== null}
                onChange={(event) => {
                  set(pin.key, event.target.checked ? blankPin(pin) : null);
                }}
              />
              Pin {title}
            </label>
            {current && (
              <div className="grid gap-3">
                {pin.key === "cp2a" && (
                  <RowEditor
                    kind="scenarios"
                    rows={current.scenarios}
                    primary
                    openFirst
                    onChange={(scenarios) => {
                      set(pin.key, { ...current, scenarios });
                    }}
                  />
                )}
                <div className="grid gap-3 sm:grid-cols-2">
                  {pin.fields.map((item) => (
                    <RowInput
                      key={item.key}
                      id={`assumption-${pin.key}-${item.key}`}
                      item={item}
                      blank={false}
                      value={current.values[item.key] ?? ""}
                      onChange={(value) => {
                        set(pin.key, {
                          ...current,
                          values: { ...current.values, [item.key]: value },
                        });
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
