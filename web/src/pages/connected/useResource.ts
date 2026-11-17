import { useCallback, useEffect, useState } from "react";

/** A request that never reached the service: the browser's own TypeError (Chrome "Failed to
 * fetch", Firefox "NetworkError when attempting to fetch resource.", Safari "Load failed"). */
export function isUnreachable(error: unknown) {
  return (
    error instanceof TypeError && /failed to fetch|networkerror|load failed/i.test(error.message)
  );
}

export function errorText(error: unknown) {
  if (isUnreachable(error))
    return "The service cannot be reached. Try again, or ask whoever runs the service to check it.";
  return error instanceof Error ? error.message : "The request failed. Try again.";
}

/** A service message as one sentence: it starts with a capital and ends with a full stop. */
export function asSentence(text: string) {
  const trimmed = text.trim();
  if (!trimmed) return trimmed;
  const capitalised = trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
  return /[.!?]$/.test(capitalised) ? capitalised : `${capitalised}.`;
}

export function useResource<T>(load: (signal: AbortSignal) => Promise<T>) {
  const [value, setValue] = useState<T>();
  const [error, setError] = useState("");
  const [unreachable, setUnreachable] = useState(false);
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    load(controller.signal).then(
      (result) => {
        if (!controller.signal.aborted) setValue(result);
      },
      (failure: unknown) => {
        if (controller.signal.aborted) return;
        setError(errorText(failure));
        setUnreachable(isUnreachable(failure));
      },
    );
    return () => {
      controller.abort();
    };
  }, [load, attempt]);
  const retry = useCallback(() => {
    setError("");
    setAttempt((count) => count + 1);
  }, []);
  return { value, error, unreachable, retry };
}
