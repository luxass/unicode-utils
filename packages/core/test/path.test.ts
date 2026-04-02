import { describe, expect, it } from "vitest";

import { buildUCDPath, hasUCDFolderPath } from "../src/path";

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

describe("buildUCDPath", () => {
  it.each([
    ["15.1.0", "PropList.txt", "/15.1.0/ucd/PropList.txt"],
    ["14.0.0", "DerivedLineBreak.txt", "/14.0.0/ucd/DerivedLineBreak.txt"],
    ["4.0-Update1", "UnicodeData.txt", "/4.0-Update1/UnicodeData.txt"],
    ["2.1-Update4", "Scripts.txt", "/2.1-Update4/Scripts.txt"],
  ])("should build correct UCD path for version %s and file %s", (version, file, expectedPath) => {
    expect(buildUCDPath(version, file)).toBe(expectedPath);
  });
});
