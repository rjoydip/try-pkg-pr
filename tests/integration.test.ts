/**
 * Integration / smoke tests.
 * These run against the package's public exports — the same surface a consumer
 * would hit when installing a preview build via pkg.pr.new.
 */
import { describe, it, expect } from "bun:test";
import { greet, version } from "../src/index.ts";

describe("public API surface", () => {
  it("exports greet", () => {
    expect(typeof greet).toBe("function");
    expect(greet({ name: "pkg.pr.new" })).toContain("pkg.pr.new");
  });

  it("exports a version string", () => {
    expect(typeof version).toBe("string");
    expect(version).toMatch(/^\d+\.\d+\.\d+/);
  });
});
