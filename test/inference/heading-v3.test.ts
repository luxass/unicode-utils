import { describe, expect, it } from "vitest";
import { mapUCDFiles } from "../__utils";
import { inferHeading } from "../src/inference/heading";

const ucdFiles = await mapUCDFiles("v3");

describe("heading inference v3", async () => {
  it("inferHeading(ArabicShaping-2.txt)", () => {
    const content = ucdFiles.file("ArabicShaping-2.txt");
    const expected = ucdFiles.expected("ArabicShaping-2.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(Blocks-3.txt)", () => {
    const content = ucdFiles.file("Blocks-3.txt");
    const expected = ucdFiles.expected("Blocks-3.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(CompositionExclusions-1.txt)", () => {
    const content = ucdFiles.file("CompositionExclusions-1.txt");
    const expected = ucdFiles.expected("CompositionExclusions-1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(EastAsianWidth-3.txt)", () => {
    const content = ucdFiles.file("EastAsianWidth-3.txt");
    const expected = ucdFiles.expected("EastAsianWidth-3.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(Index-3.0.0.txt)", () => {
    const content = ucdFiles.file("Index-3.0.0.txt");
    const expected = ucdFiles.expected("Index-3.0.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(Jamo-2.txt)", () => {
    const content = ucdFiles.file("Jamo-2.txt");
    const expected = ucdFiles.expected("Jamo-2.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(LineBreak-5.txt)", () => {
    const content = ucdFiles.file("LineBreak-5.txt");
    const expected = ucdFiles.expected("LineBreak-5.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(NamesList-3.0.0.txt)", () => {
    const content = ucdFiles.file("NamesList-3.0.0.txt");
    const expected = ucdFiles.expected("NamesList-3.0.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(PropList-3.0.0.txt)", () => {
    const content = ucdFiles.file("PropList-3.0.0.txt");
    const expected = ucdFiles.expected("PropList-3.0.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(ReadMe-3.0.0.txt)", () => {
    const content = ucdFiles.file("ReadMe-3.0.0.txt");
    const expected = ucdFiles.expected("ReadMe-3.0.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(SpecialCasing-2.txt)", () => {
    const content = ucdFiles.file("SpecialCasing-2.txt");
    const expected = ucdFiles.expected("SpecialCasing-2.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(UnicodeData-3.0.0.txt)", () => {
    const content = ucdFiles.file("UnicodeData-3.0.0.txt");
    const expected = ucdFiles.expected("UnicodeData-3.0.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(Unihan-3.txt)", () => {
    const content = ucdFiles.file("Unihan-3.txt");
    const expected = ucdFiles.expected("Unihan-3.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });
});
