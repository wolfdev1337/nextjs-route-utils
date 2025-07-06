type Params = Record<string, string | number | undefined>;

/**
 * Creates a type-safe route builder for dynamic and optional segments
 * @param pattern A path pattern like "/users/:userId/posts/:postId?"
 * @returns A function that builds the URL with given params
 */
export function createRoute<T extends Params>(pattern: string) {
  const keys = Array.from(pattern.matchAll(/:([a-zA-Z0-9_]+)\??/g)).map(
    (match) => match[1]
  );

  return (params: T): string => {
    let result = pattern;

    keys.forEach((key) => {
      const value = params[key];
      const optional = result.includes(`:${key}?`);

      if (value !== undefined) {
        result = result.replace(
          `:${key}${optional ? "?" : ""}`,
          encodeURIComponent(String(value))
        );
      } else if (optional) {
        // Remove optional segment (including optional slash)
        result = result.replace(new RegExp(`/?:${key}\?`), "");
      } else {
        throw new Error(`Missing required route parameter: ${key}`);
      }
    });

    // Remove leftover optional markers (e.g., '/posts?')
    result = result.replace(/\?(?=\/|$)/g, "");

    // Cleanup extra slashes
    return result.replace(/\/+/g, "/").replace(/\/$/, "") || "/";
  };
}
