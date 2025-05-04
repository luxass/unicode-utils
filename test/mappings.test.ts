import { describe, expect, it } from "vitest";
import { mapUnicodeVersion, UNICODE_MAPPINGS } from "../src/mappings";

describe("mapUnicodeVersion", () => {
  it("should return the mapped version when the version exists in mappings", () => {
    expect(mapUnicodeVersion("1.1.0")).toBe("1.1-Update");
    expect(mapUnicodeVersion("2.1.9")).toBe("2.1-Update4");
    expect(mapUnicodeVersion("3.2.0")).toBe("3.2-Update");
    expect(mapUnicodeVersion("4.0.1")).toBe("4.0-Update1");
  });

  it("should return the original version when the version does not exist in mappings", () => {
    expect(mapUnicodeVersion("5.0.0")).toBe("5.0.0");
    expect(mapUnicodeVersion("14.0.0")).toBe("14.0.0");
    expect(mapUnicodeVersion("unknown")).toBe("unknown");
  });

  it("should handle all defined mappings correctly", () => {
    Object.entries(UNICODE_MAPPINGS).forEach(([version, expectedMapping]) => {
      expect(mapUnicodeVersion(version)).toBe(expectedMapping);
    });
  });
});
