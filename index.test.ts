import { describe, it, expect } from "vitest";
import { createRoute } from "./index";

describe("createRoute", () => {
  it("builds static routes correctly", () => {
    const home = createRoute<{}>("/");
    expect(home({})).toBe("/");
  });

  it("builds dynamic routes correctly", () => {
    const user = createRoute<{ userId: string }>("/users/:userId");
    expect(user({ userId: "abc" })).toBe("/users/abc");
  });

  it("builds multiple dynamic segments", () => {
    const post = createRoute<{ userId: string; postId: number }>(
      "/users/:userId/posts/:postId"
    );
    expect(post({ userId: "john", postId: 42 })).toBe("/users/john/posts/42");
  });

  it("supports optional params", () => {
    const post = createRoute<{ postId?: string }>("/posts/:postId?");
    expect(post({})).toBe("/posts");
    expect(post({ postId: "123" })).toBe("/posts/123");
  });

  it("throws if required param is missing", () => {
    const user = createRoute<{ userId: string }>("/users/:userId");
    // @ts-expect-error intentionally missing param
    expect(() => user({})).toThrowError(
      "Missing required route parameter: userId"
    );
  });

  it("encodes URI components", () => {
    const encoded = createRoute<{ name: string }>("/hello/:name");
    expect(encoded({ name: "John Doe" })).toBe("/hello/John%20Doe");
  });
});
