import { describe, expect, it } from "vitest";
import { mapUCDFiles } from "../__utils";
import { inferHeading } from "../src/inference/heading";

const ucdFiles = await mapUCDFiles("v3.0.1");

describe("heading inference v3.0.1", async () => {
  it("inferHeading(ArabicShaping-3.txt)", () => {
    const content = ucdFiles.file("ArabicShaping-3.txt");
    const expected = ucdFiles.expected("ArabicShaping-3.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(BidiMirroring-1.txt)", () => {
    const content = ucdFiles.file("BidiMirroring-1.txt");
    const expected = ucdFiles.expected("BidiMirroring-1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(CaseFolding-2.txt)", () => {
    const content = ucdFiles.file("CaseFolding-2.txt");
    const expected = ucdFiles.expected("CaseFolding-2.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(CompositionExclusions-2.txt)", () => {
    const content = ucdFiles.file("CompositionExclusions-2.txt");
    const expected = ucdFiles.expected("CompositionExclusions-2.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(Jamo-3.txt)", () => {
    const content = ucdFiles.file("Jamo-3.txt");
    const expected = ucdFiles.expected("Jamo-3.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(PropList-3.0.1.txt)", () => {
    const content = ucdFiles.file("PropList-3.0.1.txt");
    const expected = ucdFiles.expected("PropList-3.0.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(ReadMe-3.0.1.txt)", () => {
    const content = ucdFiles.file("ReadMe-3.0.1.txt");
    const expected = ucdFiles.expected("ReadMe-3.0.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(SpecialCasing-3.txt)", () => {
    const content = ucdFiles.file("SpecialCasing-3.txt");
    const expected = ucdFiles.expected("SpecialCasing-3.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(UnicodeData-3.0.1.txt)", () => {
    const content = ucdFiles.file("UnicodeData-3.0.1.txt");
    const expected = ucdFiles.expected("UnicodeData-3.0.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });
});
