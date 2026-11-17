import { useRef, useState } from "react";
import { FilterLines } from "@untitledui/icons";
import { EmptyState } from "@/components/application/empty-state/empty-state";
import { Button } from "@/components/base/buttons/button";
import type { Reader } from "../slice";
import { ALL, FilterSelect } from "./FilterBar";
import { SUBSECTION_HEADING } from "./heading";

/**
 * The module filter of an Evidence tab whose content is delivered per module: page state, in memory,
 * so a tab starts at "All". Its options are the delivered module names; what is compared is the id.
 * `clear` is the empty state's way back: the button that runs it goes with the state, so it hands
 * the focus to the filter that caused the state.
 */
export function useModuleFilter(options: readonly Reader[]) {
  const [name, setName] = useState(ALL);
  const slot = useRef<HTMLDivElement>(null);
  return {
    chosen: options.find((option) => option.name === name) ?? null,
    clear: () => {
      setName(ALL);
      slot.current?.querySelector("button")?.focus();
    },
    control: (
      <div ref={slot} className="contents">
        <FilterSelect
          name="Module"
          options={options.map((option) => option.name)}
          value={name}
          onChange={setName}
        />
      </div>
    ),
  };
}

/** What a tab draws when the chosen module holds nothing of it: what is missing and the way back. */
export function NothingForModule({
  title,
  clearLabel,
  onClear,
}: {
  title: string;
  clearLabel: string;
  onClear: () => void;
}) {
  return (
    <EmptyState>
      <EmptyState.Header>
        <EmptyState.FeaturedIcon icon={FilterLines} />
      </EmptyState.Header>
      <EmptyState.Content>
        <EmptyState.Title as={SUBSECTION_HEADING}>{title}</EmptyState.Title>
        <EmptyState.Description>Choose another module, or all of them.</EmptyState.Description>
      </EmptyState.Content>
      <EmptyState.Footer>
        <Button color="secondary" onPress={onClear}>
          {clearLabel}
        </Button>
      </EmptyState.Footer>
    </EmptyState>
  );
}
