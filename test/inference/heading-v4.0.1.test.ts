import { describe, expect, it } from "vitest";
import { mapUCDFiles } from "../__utils";
import { inferHeading } from "../src/inference/heading";

const ucdFiles = await mapUCDFiles("v4.0.1");

describe("heading inference v4.0.1", async () => {
  it("inferHeading(ArabicShaping-4.0.1.txt)", () => {
    const content = ucdFiles.file("ArabicShaping-4.0.1.txt");
    const expected = ucdFiles.expected("ArabicShaping-4.0.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(Blocks-4.0.1.txt)", () => {
    const content = ucdFiles.file("Blocks-4.0.1.txt");
    const expected = ucdFiles.expected("Blocks-4.0.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(CaseFolding-4.0.1.txt)", () => {
    const content = ucdFiles.file("CaseFolding-4.0.1.txt");
    const expected = ucdFiles.expected("CaseFolding-4.0.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(DerivedAge-4.0.1.txt)", () => {
    const content = ucdFiles.file("DerivedAge-4.0.1.txt");
    const expected = ucdFiles.expected("DerivedAge-4.0.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(DerivedCoreProperties-4.0.1.txt)", () => {
    const content = ucdFiles.file("DerivedCoreProperties-4.0.1.txt");
    const expected = ucdFiles.expected("DerivedCoreProperties-4.0.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(DerivedNormalizationProps-4.0.1.txt)", () => {
    const content = ucdFiles.file("DerivedNormalizationProps-4.0.1.txt");
    const expected = ucdFiles.expected("DerivedNormalizationProps-4.0.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(HangulSyllableType-4.0.1.txt)", () => {
    const content = ucdFiles.file("HangulSyllableType-4.0.1.txt");
    const expected = ucdFiles.expected("HangulSyllableType-4.0.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(Index-4.0.1.txt)", () => {
    const content = ucdFiles.file("Index-4.0.1.txt");
    const expected = ucdFiles.expected("Index-4.0.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(Jamo-4.0.1.txt)", () => {
    const content = ucdFiles.file("Jamo-4.0.1.txt");
    const expected = ucdFiles.expected("Jamo-4.0.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(LineBreak-4.0.1.txt)", () => {
    const content = ucdFiles.file("LineBreak-4.0.1.txt");
    const expected = ucdFiles.expected("LineBreak-4.0.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(PropList-4.0.1.txt)", () => {
    const content = ucdFiles.file("PropList-4.0.1.txt");
    const expected = ucdFiles.expected("PropList-4.0.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(PropertyAliases-4.0.1.txt)", () => {
    const content = ucdFiles.file("PropertyAliases-4.0.1.txt");
    const expected = ucdFiles.expected("PropertyAliases-4.0.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(PropertyValueAliases-4.0.1.txt)", () => {
    const content = ucdFiles.file("PropertyValueAliases-4.0.1.txt");
    const expected = ucdFiles.expected("PropertyValueAliases-4.0.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(ReadMe-4.0.1.txt)", () => {
    const content = ucdFiles.file("ReadMe-4.0.1.txt");
    const expected = ucdFiles.expected("ReadMe-4.0.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(Scripts-4.0.1.txt)", () => {
    const content = ucdFiles.file("Scripts-4.0.1.txt");
    const expected = ucdFiles.expected("Scripts-4.0.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(SpecialCasing-4.0.1.txt)", () => {
    const content = ucdFiles.file("SpecialCasing-4.0.1.txt");
    const expected = ucdFiles.expected("SpecialCasing-4.0.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(UnicodeData-4.0.1.txt)", () => {
    const content = ucdFiles.file("UnicodeData-4.0.1.txt");
    const expected = ucdFiles.expected("UnicodeData-4.0.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(Unihan-4.0.1.txt)", () => {
    const content = ucdFiles.file("Unihan-4.0.1.txt");
    const expected = ucdFiles.expected("Unihan-4.0.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(extracted/DerivedBidiClass-4.0.1.txt)", () => {
    const content = ucdFiles.file("extracted/DerivedBidiClass-4.0.1.txt");
    const expected = ucdFiles.expected("extracted/DerivedBidiClass-4.0.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(extracted/DerivedBinaryProperties-4.0.1.txt)", () => {
    const content = ucdFiles.file("extracted/DerivedBinaryProperties-4.0.1.txt");
    const expected = ucdFiles.expected("extracted/DerivedBinaryProperties-4.0.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(extracted/DerivedCombiningClass-4.0.1.txt)", () => {
    const content = ucdFiles.file("extracted/DerivedCombiningClass-4.0.1.txt");
    const expected = ucdFiles.expected("extracted/DerivedCombiningClass-4.0.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(extracted/DerivedDecompositionType-4.0.1.txt)", () => {
    const content = ucdFiles.file("extracted/DerivedDecompositionType-4.0.1.txt");
    const expected = ucdFiles.expected("extracted/DerivedDecompositionType-4.0.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(extracted/DerivedEastAsianWidth-4.0.1.txt)", () => {
    const content = ucdFiles.file("extracted/DerivedEastAsianWidth-4.0.1.txt");
    const expected = ucdFiles.expected("extracted/DerivedEastAsianWidth-4.0.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(extracted/DerivedGeneralCategory-4.0.1.txt)", () => {
    const content = ucdFiles.file("extracted/DerivedGeneralCategory-4.0.1.txt");
    const expected = ucdFiles.expected("extracted/DerivedGeneralCategory-4.0.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(extracted/DerivedJoiningGroup-4.0.1.txt)", () => {
    const content = ucdFiles.file("extracted/DerivedJoiningGroup-4.0.1.txt");
    const expected = ucdFiles.expected("extracted/DerivedJoiningGroup-4.0.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(extracted/DerivedJoiningType-4.0.1.txt)", () => {
    const content = ucdFiles.file("extracted/DerivedJoiningType-4.0.1.txt");
    const expected = ucdFiles.expected("extracted/DerivedJoiningType-4.0.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(extracted/DerivedLineBreak-4.0.1.txt)", () => {
    const content = ucdFiles.file("extracted/DerivedLineBreak-4.0.1.txt");
    const expected = ucdFiles.expected("extracted/DerivedLineBreak-4.0.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(extracted/DerivedNumericType-4.0.1.txt)", () => {
    const content = ucdFiles.file("extracted/DerivedNumericType-4.0.1.txt");
    const expected = ucdFiles.expected("extracted/DerivedNumericType-4.0.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(extracted/DerivedNumericValues-4.0.1.txt)", () => {
    const content = ucdFiles.file("extracted/DerivedNumericValues-4.0.1.txt");
    const expected = ucdFiles.expected("extracted/DerivedNumericValues-4.0.1.txt.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });
});
