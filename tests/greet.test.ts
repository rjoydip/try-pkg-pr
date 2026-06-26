import { describe, it, expect } from "bun:test";
import { greet } from "../src/greet.ts";

describe("greet", () => {
  it("returns a greeting with the given name", () => {
    expect(greet({ name: "Alice" })).toBe("Hello, Alice!");
  });

  it("returns a loud greeting when loud=true", () => {
    expect(greet({ name: "Bob", loud: true })).toBe("HELLO, BOB!");
  });

  it("defaults to quiet mode", () => {
    const result = greet({ name: "Charlie" });
    expect(result).not.toBe(result.toUpperCase());
  });
});
