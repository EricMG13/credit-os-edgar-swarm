import { useEffect, useState } from "react";

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

export function useResource<T>(load: (signal: AbortSignal) => Promise<T>) {
  const [value, setValue] = useState<T>();
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    load(controller.signal).then(
      (result) => {
        if (!controller.signal.aborted) setValue(result);
      },
      (failure: unknown) => {
        if (!controller.signal.aborted) setError(errorText(failure));
      },
    );
    return () => {
      controller.abort();
    };
  }, [load]);
  return { value, error };
}
