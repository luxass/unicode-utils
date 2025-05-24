import { describe, expect, it } from "vitest";
import { mapUCDFiles } from "../__utils";
import { inferHeading } from "../src/inference/heading";

const ucdFiles = await mapUCDFiles("v3.2");

describe("heading inference v3.2", async () => {
  it("inferHeading(ArabicShaping-3.2.0.txt)", () => {
    const content = ucdFiles.file("ArabicShaping-3.2.0.txt");
    const expected = ucdFiles.expected("ArabicShaping-3.2.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(BidiMirroring-3.2.0.txt)", () => {
    const content = ucdFiles.file("BidiMirroring-3.2.0.txt");
    const expected = ucdFiles.expected("BidiMirroring-3.2.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(Blocks-3.2.0.txt)", () => {
    const content = ucdFiles.file("Blocks-3.2.0.txt");
    const expected = ucdFiles.expected("Blocks-3.2.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(CaseFolding-3.2.0.txt)", () => {
    const content = ucdFiles.file("CaseFolding-3.2.0.txt");
    const expected = ucdFiles.expected("CaseFolding-3.2.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(CompositionExclusions-3.2.0.txt)", () => {
    const content = ucdFiles.file("CompositionExclusions-3.2.0.txt");
    const expected = ucdFiles.expected("CompositionExclusions-3.2.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(DerivedAge-3.2.0.txt)", () => {
    const content = ucdFiles.file("DerivedAge-3.2.0.txt");
    const expected = ucdFiles.expected("DerivedAge-3.2.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(DerivedCoreProperties-3.2.0.txt)", () => {
    const content = ucdFiles.file("DerivedCoreProperties-3.2.0.txt");
    const expected = ucdFiles.expected("DerivedCoreProperties-3.2.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(DerivedNormalizationProps-3.2.0.txt)", () => {
    const content = ucdFiles.file("DerivedNormalizationProps-3.2.0.txt");
    const expected = ucdFiles.expected("DerivedNormalizationProps-3.2.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(EastAsianWidth-3.2.0.txt)", () => {
    const content = ucdFiles.file("EastAsianWidth-3.2.0.txt");
    const expected = ucdFiles.expected("EastAsianWidth-3.2.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(Index-3.2.0.txt)", () => {
    const content = ucdFiles.file("Index-3.2.0.txt");
    const expected = ucdFiles.expected("Index-3.2.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(Jamo-3.2.0.txt)", () => {
    const content = ucdFiles.file("Jamo-3.2.0.txt");
    const expected = ucdFiles.expected("Jamo-3.2.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(LineBreak-3.2.0.txt)", () => {
    const content = ucdFiles.file("LineBreak-3.2.0.txt");
    const expected = ucdFiles.expected("LineBreak-3.2.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(NamesList-3.2.0.txt)", () => {
    const content = ucdFiles.file("NamesList-3.2.0.txt");
    const expected = ucdFiles.expected("NamesList-3.2.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(NormalizationCorrections-3.2.0.txt)", () => {
    const content = ucdFiles.file("NormalizationCorrections-3.2.0.txt");
    const expected = ucdFiles.expected("NormalizationCorrections-3.2.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(PropList-3.2.0.txt)", () => {
    const content = ucdFiles.file("PropList-3.2.0.txt");
    const expected = ucdFiles.expected("PropList-3.2.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(PropertyAliases-3.2.0.txt)", () => {
    const content = ucdFiles.file("PropertyAliases-3.2.0.txt");
    const expected = ucdFiles.expected("PropertyAliases-3.2.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(PropertyValueAliases-3.2.0.txt)", () => {
    const content = ucdFiles.file("PropertyValueAliases-3.2.0.txt");
    const expected = ucdFiles.expected("PropertyValueAliases-3.2.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(ReadMe-3.2.0.txt)", () => {
    const content = ucdFiles.file("ReadMe-3.2.0.txt");
    const expected = ucdFiles.expected("ReadMe-3.2.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(Scripts-3.2.0.txt)", () => {
    const content = ucdFiles.file("Scripts-3.2.0.txt");
    const expected = ucdFiles.expected("Scripts-3.2.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(SpecialCasing-3.2.0.txt)", () => {
    const content = ucdFiles.file("SpecialCasing-3.2.0.txt");
    const expected = ucdFiles.expected("SpecialCasing-3.2.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(UnicodeData-3.2.0.txt)", () => {
    const content = ucdFiles.file("UnicodeData-3.2.0.txt");
    const expected = ucdFiles.expected("UnicodeData-3.2.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(Unihan-3.2.0.txt)", () => {
    const content = ucdFiles.file("Unihan-3.2.0.txt");
    const expected = ucdFiles.expected("Unihan-3.2.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(extracted/DerivedBidiClass-3.2.0.txt)", () => {
    const content = ucdFiles.file("extracted/DerivedBidiClass-3.2.0.txt");
    const expected = ucdFiles.expected("extracted/DerivedBidiClass-3.2.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(extracted/DerivedBinaryProperties-3.2.0.txt)", () => {
    const content = ucdFiles.file("extracted/DerivedBinaryProperties-3.2.0.txt");
    const expected = ucdFiles.expected("extracted/DerivedBinaryProperties-3.2.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(extracted/DerivedCombiningClass-3.2.0.txt)", () => {
    const content = ucdFiles.file("extracted/DerivedCombiningClass-3.2.0.txt");
    const expected = ucdFiles.expected("extracted/DerivedCombiningClass-3.2.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(extracted/DerivedDecompositionType-3.2.0.txt)", () => {
    const content = ucdFiles.file("extracted/DerivedDecompositionType-3.2.0.txt");
    const expected = ucdFiles.expected("extracted/DerivedDecompositionType-3.2.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(extracted/DerivedEastAsianWidth-3.2.0.txt)", () => {
    const content = ucdFiles.file("extracted/DerivedEastAsianWidth-3.2.0.txt");
    const expected = ucdFiles.expected("extracted/DerivedEastAsianWidth-3.2.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(extracted/DerivedGeneralCategory-3.2.0.txt)", () => {
    const content = ucdFiles.file("extracted/DerivedGeneralCategory-3.2.0.txt");
    const expected = ucdFiles.expected("extracted/DerivedGeneralCategory-3.2.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(extracted/DerivedJoiningGroup-3.2.0.txt)", () => {
    const content = ucdFiles.file("extracted/DerivedJoiningGroup-3.2.0.txt");
    const expected = ucdFiles.expected("extracted/DerivedJoiningGroup-3.2.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(extracted/DerivedJoiningType-3.2.0.txt)", () => {
    const content = ucdFiles.file("extracted/DerivedJoiningType-3.2.0.txt");
    const expected = ucdFiles.expected("extracted/DerivedJoiningType-3.2.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(extracted/DerivedLineBreak-3.2.0.txt)", () => {
    const content = ucdFiles.file("extracted/DerivedLineBreak-3.2.0.txt");
    const expected = ucdFiles.expected("extracted/DerivedLineBreak-3.2.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(extracted/DerivedNumericType-3.2.0.txt)", () => {
    const content = ucdFiles.file("extracted/DerivedNumericType-3.2.0.txt");
    const expected = ucdFiles.expected("extracted/DerivedNumericType-3.2.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(extracted/DerivedNumericValues-3.2.0.txt)", () => {
    const content = ucdFiles.file("extracted/DerivedNumericValues-3.2.0.txt");
    const expected = ucdFiles.expected("extracted/DerivedNumericValues-3.2.0.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });
});
