import { describe, expect, it } from "vitest";
import { hasSections, parseSections, RawDataFile } from "../../src/data-files";
import { dataFileFixture } from "../__utils";

describe("hasSections", () => {
  it("should return false for empty data file", () => {
    expect(hasSections("")).toBe(false);
  });

  it.each([
    [{ version: "4.1.0", file: "ArabicShaping.txt", expected: true }],
    [{ version: "4.1.0", file: "BidiMirroring.txt", expected: false }],
    [{ version: "4.1.0", file: "CaseFolding.txt", expected: false }],
    [{ version: "11.0.0", file: "PropertyAliases.txt", expected: true }],
    [{ version: "16.0.0", file: "PropertyAliases.txt", expected: true }],
    [{ version: "16.0.0", file: "UnicodeData.txt", expected: false }],
  ])("hasSections($version - $file)", ({ file, version, expected }) => {
    const content = dataFileFixture(version, file);
    const datafile = new RawDataFile(content, file.replace(/\.txt$/, ""));
    expect(hasSections(datafile.content)).toBe(expected);
  });
});

describe("parseSections", () => {
  it("should return empty map for empty data file", () => {
    expect(parseSections("")).toEqual(new Map());
  });

  it.each([
    [{ version: "4.1.0", file: "ArabicShaping.txt", expected: 4 }],
    [{ version: "4.1.0", file: "BidiMirroring.txt", expected: 0 }],
    [{ version: "4.1.0", file: "CaseFolding.txt", expected: 0 }],
    [{ version: "11.0.0", file: "PropertyAliases.txt", expected: 6 }],
    [{ version: "16.0.0", file: "PropertyAliases.txt", expected: 6 }],
    [{ version: "16.0.0", file: "UnicodeData.txt", expected: 0 }],
  ])("hasSections($version - $file)", ({ file, version, expected }) => {
    const content = dataFileFixture(version, file);
    const datafile = new RawDataFile(content, file.replace(/\.txt$/, ""));
    expect(parseSections(datafile.content).size).toBe(expected);
  });
});
