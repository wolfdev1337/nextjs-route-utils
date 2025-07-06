type Params = Record<string, string | number | undefined>;
/**
 * Creates a type-safe route builder for dynamic and optional segments
 * @param pattern A path pattern like "/users/:userId/posts/:postId?"
 * @returns A function that builds the URL with given params
 */
export declare function createRoute<T extends Params>(pattern: string): (params: T) => string;
export {};
