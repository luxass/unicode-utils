import { describe, expect, it } from "vitest";
import { resolve } from "../../src/file-parsers/route";

describe("resolve()", () => {
  it("returns a parser for a known file name", () => {
    const parser = resolve("Scripts", "16.0.0");
    expect(parser).toBeDefined();
    expect(parser!.fileName).toBe("Scripts");
  });

  it("returns undefined for an unknown file name", () => {
    expect(resolve("SomeUnknownFile", "16.0.0")).toBeUndefined();
  });

  it("returns undefined when fileName is undefined", () => {
    expect(resolve(undefined, "16.0.0")).toBeUndefined();
  });

  it("normalises file name casing and separators", () => {
    expect(resolve("bidi-brackets", "16.0.0")).toBeDefined();
    expect(resolve("BidiBrackets", "16.0.0")).toBeDefined();
    expect(resolve("bidi_brackets", "16.0.0")).toBeDefined();
  });

  it("resolves all 20 known file names", () => {
    const knownFiles = [
      "Blocks", "Scripts", "UnicodeData", "DerivedAge", "LineBreak",
      "NameAliases", "CaseFolding", "PropertyAliases", "PropertyValueAliases",
      "NamesList", "EastAsianWidth", "ArabicShaping", "BidiBrackets",
      "HangulSyllableType", "ScriptExtensions", "DerivedCoreProperties",
      "PropList", "SpecialCasing", "CompositionExclusions", "BidiMirroring",
    ];
    for (const name of knownFiles) {
      expect(resolve(name, "16.0.0"), `${name} should resolve`).toBeDefined();
    }
  });
});
