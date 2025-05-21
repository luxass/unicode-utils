import { describe, expect, it } from "vitest";
import { mapToUCDPathVersion, UNICODE_TO_UCD_PATH_MAPPINGS } from "../src/mappings";

describe("mapToUCDPathVersion", () => {
  it("should return the correct UCD path version when the Unicode version exists in mappings", () => {
    expect(mapToUCDPathVersion("1.1.0")).toBe("1.1-Update");
    expect(mapToUCDPathVersion("2.1.9")).toBe("2.1-Update4");
    expect(mapToUCDPathVersion("3.2.0")).toBe("3.2-Update");
    expect(mapToUCDPathVersion("4.0.1")).toBe("4.0-Update1");
  });

  it("should return the original version when the Unicode version does not exist in mappings", () => {
    expect(mapToUCDPathVersion("5.0.0")).toBe("5.0.0");
    expect(mapToUCDPathVersion("14.0.0")).toBe("14.0.0");
    expect(mapToUCDPathVersion("unknown")).toBe("unknown");
  });

  it("should handle all defined mappings correctly", () => {
    Object.entries(UNICODE_TO_UCD_PATH_MAPPINGS).forEach(([version, expectedMapping]) => {
      expect(mapToUCDPathVersion(version)).toBe(expectedMapping);
    });
  });
});
