import { describe, expect, it } from "vitest";
import { mapUCDFiles } from "../__utils";
import { inferHeading } from "../src/inference/heading";

const ucdFiles = await mapUCDFiles("v3.1");

describe("heading inference v3.1", async () => {
  it("inferHeading(Blocks-4.txt)", () => {
    const content = ucdFiles.file("Blocks-4.txt");
    const expected = ucdFiles.expected("Blocks-4.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(CaseFolding-3.txt)", () => {
    const content = ucdFiles.file("CaseFolding-3.txt");
    const expected = ucdFiles.expected("CaseFolding-3.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(CompositionExclusions-3.txt)", () => {
    const content = ucdFiles.file("CompositionExclusions-3.txt");
    const expected = ucdFiles.expected("CompositionExclusions-3.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(DerivedBinaryProperties-3.1.0.txt)", () => {
    const content = ucdFiles.file("DerivedBinaryProperties-3.1.0.txt");
    const expected = ucdFiles.expected("DerivedBinaryProperties-3.1.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(DerivedCombiningClass-3.1.0.txt)", () => {
    const content = ucdFiles.file("DerivedCombiningClass-3.1.0.txt");
    const expected = ucdFiles.expected("DerivedCombiningClass-3.1.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(DerivedCoreProperties-3.1.0.txt)", () => {
    const content = ucdFiles.file("DerivedCoreProperties-3.1.0.txt");
    const expected = ucdFiles.expected("DerivedCoreProperties-3.1.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(DerivedDecompositionType-3.1.0.txt)", () => {
    const content = ucdFiles.file("DerivedDecompositionType-3.1.0.txt");
    const expected = ucdFiles.expected("DerivedDecompositionType-3.1.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(DerivedEastAsianWidth-3.1.0.txt)", () => {
    const content = ucdFiles.file("DerivedEastAsianWidth-3.1.0.txt");
    const expected = ucdFiles.expected("DerivedEastAsianWidth-3.1.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(DerivedGeneralCategory-3.1.0.txt)", () => {
    const content = ucdFiles.file("DerivedGeneralCategory-3.1.0.txt");
    const expected = ucdFiles.expected("DerivedGeneralCategory-3.1.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(DerivedJoiningGroup-3.1.0.txt)", () => {
    const content = ucdFiles.file("DerivedJoiningGroup-3.1.0.txt");
    const expected = ucdFiles.expected("DerivedJoiningGroup-3.1.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(DerivedJoiningType-3.1.0.txt)", () => {
    const content = ucdFiles.file("DerivedJoiningType-3.1.0.txt");
    const expected = ucdFiles.expected("DerivedJoiningType-3.1.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(DerivedLineBreak-3.1.0.txt)", () => {
    const content = ucdFiles.file("DerivedLineBreak-3.1.0.txt");
    const expected = ucdFiles.expected("DerivedLineBreak-3.1.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(DerivedNormalizationProperties-3.1.0.txt)", () => {
    const content = ucdFiles.file("DerivedNormalizationProperties-3.1.0.txt");
    const expected = ucdFiles.expected("DerivedNormalizationProperties-3.1.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(DerivedNumericType-3.1.0.txt)", () => {
    const content = ucdFiles.file("DerivedNumericType-3.1.0.txt");
    const expected = ucdFiles.expected("DerivedNumericType-3.1.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(DerivedNumericValues-3.1.0.txt)", () => {
    const content = ucdFiles.file("DerivedNumericValues-3.1.0.txt");
    const expected = ucdFiles.expected("DerivedNumericValues-3.1.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(EastAsianWidth-4.txt)", () => {
    const content = ucdFiles.file("EastAsianWidth-4.txt");
    const expected = ucdFiles.expected("EastAsianWidth-4.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(LineBreak-6.txt)", () => {
    const content = ucdFiles.file("LineBreak-6.txt");
    const expected = ucdFiles.expected("LineBreak-6.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(NamesList-3.1.0.txt)", () => {
    const content = ucdFiles.file("NamesList-3.1.0.txt");
    const expected = ucdFiles.expected("NamesList-3.1.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(PropList-3.1.0.txt)", () => {
    const content = ucdFiles.file("PropList-3.1.0.txt");
    const expected = ucdFiles.expected("PropList-3.1.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(ReadMe-3.1.0.txt)", () => {
    const content = ucdFiles.file("ReadMe-3.1.0.txt");
    const expected = ucdFiles.expected("ReadMe-3.1.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(Scripts-3.1.0.txt)", () => {
    const content = ucdFiles.file("Scripts-3.1.0.txt");
    const expected = ucdFiles.expected("Scripts-3.1.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(SpecialCasing-4.txt)", () => {
    const content = ucdFiles.file("SpecialCasing-4.txt");
    const expected = ucdFiles.expected("SpecialCasing-4.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(UnicodeData-3.1.0.txt)", () => {
    const content = ucdFiles.file("UnicodeData-3.1.0.txt");
    const expected = ucdFiles.expected("UnicodeData-3.1.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(Unihan-3.1.txt)", () => {
    const content = ucdFiles.file("Unihan-3.1.txt");
    const expected = ucdFiles.expected("Unihan-3.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });
});
