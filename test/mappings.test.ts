import { describe, expect, it } from "vitest";
import { hasUCDFolderPath, resolveUCDVersion, UNICODE_TO_UCD_VERSION_MAPPINGS } from "../src/mappings";

describe("resolveUCDVersion", () => {
  it("should return the correct UCD path version when the Unicode version exists in mappings", () => {
    expect(resolveUCDVersion("1.1.0")).toBe("1.1-Update");
    expect(resolveUCDVersion("2.1.9")).toBe("2.1-Update4");
    expect(resolveUCDVersion("3.2.0")).toBe("3.2-Update");
    expect(resolveUCDVersion("4.0.1")).toBe("4.0-Update1");
  });

  it("should return the original version when the Unicode version does not exist in mappings", () => {
    expect(resolveUCDVersion("5.0.0")).toBe("5.0.0");
    expect(resolveUCDVersion("14.0.0")).toBe("14.0.0");
    expect(resolveUCDVersion("unknown")).toBe("unknown");
  });

  it("should handle all defined mappings correctly", () => {
    Object.entries(UNICODE_TO_UCD_VERSION_MAPPINGS).forEach(([version, expectedMapping]) => {
      expect(resolveUCDVersion(version)).toBe(expectedMapping);
    });
  });
});

describe("hasUCDFolder", () => {
  it("should return false for versions with Update suffixes", () => {
    expect(hasUCDFolderPath("1.1-Update")).toBe(false);
    expect(hasUCDFolderPath("2.1-Update4")).toBe(false);
    expect(hasUCDFolderPath("3.2-Update")).toBe(false);
    expect(hasUCDFolderPath("4.0-Update1")).toBe(false);
  });

  it("should return false for older versions", () => {
    expect(hasUCDFolderPath("1.1.0")).toBe(false);
    expect(hasUCDFolderPath("2.1.9")).toBe(false);
    expect(hasUCDFolderPath("3.2.0")).toBe(false);
    expect(hasUCDFolderPath("4.0.1")).toBe(false);
  });

  it("should return true for newer versions", () => {
    expect(hasUCDFolderPath("5.0.0")).toBe(true);
    expect(hasUCDFolderPath("14.0.0")).toBe(true);
  });
});
