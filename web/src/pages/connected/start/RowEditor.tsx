import { useEffect, useId, useRef, useState, type Ref } from "react";
import { Button } from "@/components/base/buttons/button";
import { moduleName } from "../api";
import { field, label } from "../layout";
import { emptyRow, ROW_SPECS, text, type Row, type RowField, type RowKind } from "./rows";

type Choices = readonly (readonly [string, string])[];

export function RowEditor({
  kind,
  rows,
  onChange,
  primary,
  required,
  focusChoices,
  error,
  addRef,
}: {
  kind: RowKind;
  rows: readonly Row[];
  onChange: (rows: Row[]) => void;
  primary: boolean;
  required?: boolean;
  focusChoices?: Choices;
  error?: string;
  addRef?: Ref<HTMLButtonElement>;
}) {
  const spec = ROW_SPECS[kind];
  const base = useId();
  const errorId = `${base}-error`;
  // Each row keeps one identity while it is in the list, so its open state and input ids
  // follow the row, not its position. The identity is not part of the row that is sent.
  const [ids, setIds] = useState<number[]>(() => rows.map((_, at) => at));
  const nextId = useRef(rows.length);
  const [added, setAdded] = useState<number>();
  const keys = rows.map((_, at) => ids[at] ?? -(at + 1));
  const removeButtons = useRef(new Map<number, HTMLButtonElement>());
  const addButton = useRef<HTMLButtonElement | null>(null);
  const refocus = useRef<{ add: boolean; at: number }>(undefined);
  useEffect(() => {
    const wanted = refocus.current;
    refocus.current = undefined;
    if (!wanted) return;
    const keyAt = ids[Math.min(wanted.at, ids.length - 1)];
    const target = wanted.add || keyAt === undefined ? addButton.current : removeButtons.current.get(keyAt);
    target?.focus();
  }, [ids]);
  return (
    <div className="grid gap-2">
      {required && rows.length === 0 && (
        <p className="text-sm text-text-secondary">
          At least one {spec.title.toLowerCase()} is required for a new issue.
        </p>
      )}
      {rows.map((row, index) => {
        const key = keys[index] ?? 0;
        return (
          <div key={key} className="relative min-w-0 rounded-lg border border-border-hairline p-3">
            <RowItem
              id={`${base}-${String(key)}`}
              title={`${spec.title} ${String(index + 1)}`}
              summary={spec.summary(row)}
              fields={spec.fields.filter((item) => primary || !item.primaryOnly)}
              kind={kind}
              row={row}
              startOpen={key === added}
              focusChoices={focusChoices}
              onField={(field, value) => {
                onChange(
                  rows.map((item, at) => (at === index ? { ...item, [field]: value } : item)),
                );
              }}
            />
            <div
              className="absolute right-3 top-2"
              ref={(node) => {
                const button = node?.querySelector("button");
                if (button) removeButtons.current.set(key, button);
                else removeButtons.current.delete(key);
              }}
            >
              <Button
                size="sm"
                color="secondary"
                aria-label={`Remove ${spec.title} ${String(index + 1)}`}
                onPress={() => {
                  refocus.current = { add: rows.length === 1, at: index };
                  setIds(keys.filter((_, at) => at !== index));
                  onChange(rows.filter((_, at) => at !== index));
                }}
              >
                Remove
              </Button>
            </div>
          </div>
        );
      })}
      <div className="grid gap-1">
        <div
          ref={(node) => {
            const button = node?.querySelector("button") ?? null;
            addButton.current = button;
            if (typeof addRef === "function") addRef(button);
            else if (addRef) addRef.current = button;
          }}
        >
          <Button
            size="sm"
            color="secondary"
            isDisabled={rows.length >= spec.max}
            aria-describedby={error ? errorId : undefined}
            onPress={() => {
              nextId.current += 1;
              setAdded(nextId.current);
              setIds([...keys, nextId.current]);
              onChange([...rows, emptyRow(kind)]);
            }}
          >
            {spec.add}
          </Button>
        </div>
        {error && (
          <p id={errorId} role="alert" className="text-sm text-error-primary">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

function RowItem({
  id,
  title,
  summary,
  fields,
  kind,
  row,
  startOpen,
  focusChoices,
  onField,
}: {
  id: string;
  title: string;
  summary: string;
  fields: readonly RowField[];
  kind: RowKind;
  row: Row;
  startOpen: boolean;
  focusChoices?: Choices;
  onField: (key: string, value: string) => void;
}) {
  // Open once, when the row appears; the analyst's own toggling is never overridden.
  const [open] = useState(startOpen);
  const groups = [...new Set(fields.map((item) => item.group ?? ""))];
  return (
    <details open={open || undefined} className="min-w-0">
      <summary className="cursor-pointer pr-24 text-sm">
        <span className="font-semibold">{title}</span>
        <span className="ml-2 text-text-secondary">{summary}</span>
      </summary>
      <div className="mt-3 grid gap-4">
        {groups.map((group) => (
          <div key={group} className="grid gap-2">
            {group && <h5 className="text-sm font-semibold text-text-secondary">{group}</h5>}
            <div className="grid gap-3 sm:grid-cols-2">
              {fields
                .filter((item) => (item.group ?? "") === group)
                .map((item) => {
                  const options =
                    item.options ?? (item.key === "focus_module" ? focusChoices : undefined);
                  return (
                    <RowInput
                      key={item.key}
                      id={`${id}-${item.key}`}
                      item={item}
                      blank={
                        !options?.some(([option]) => option === "") &&
                        emptyRow(kind)[item.key] === ""
                      }
                      value={text(row, item.key)}
                      options={options}
                      onChange={(value) => {
                        onField(item.key, value);
                      }}
                    />
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </details>
  );
}

function RowInput({
  id,
  item,
  blank,
  value,
  options,
  onChange,
}: {
  id: string;
  item: RowField;
  blank: boolean;
  value: string;
  options?: readonly (readonly [string, string])[];
  onChange: (value: string) => void;
}) {
  const hintText = [item.required && "Required.", item.hint].filter(Boolean).join(" ");
  const hint = hintText ? `${id}-hint` : undefined;
  const offered = options ?? [];
  // A value the options do not list is still the value that is sent, so it is shown.
  const choices =
    value && item.kind === "select" && !offered.some(([option]) => option === value)
      ? [...offered, [value, item.key === "focus_module" ? moduleName(value) : value] as const]
      : offered;
  return (
    <div className="grid content-start gap-1">
      <label htmlFor={id} className={label}>
        {item.label}
      </label>
      {item.kind === "select" ? (
        <select
          id={id}
          className={field}
          aria-describedby={hint}
          aria-required={item.required ? "true" : undefined}
          value={value}
          onChange={(event) => {
            onChange(event.target.value);
          }}
        >
          {blank && <option value="" />}
          {choices.map(([option, name]) => (
            <option key={option} value={option}>
              {name}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          className={field}
          type={item.kind === "date" ? "date" : "text"}
          inputMode={item.kind === "number" ? "decimal" : undefined}
          placeholder={item.placeholder}
          aria-describedby={hint}
          aria-required={item.required ? "true" : undefined}
          value={value}
          onChange={(event) => {
            onChange(event.target.value);
          }}
        />
      )}
      {hintText && (
        <p id={hint} className="text-xs text-text-secondary">
          {hintText}
        </p>
      )}
    </div>
  );
}
