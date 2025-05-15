import { describe, expect, it } from "vitest";
import { inferHeading } from "../../src/heading-inference";
import { mapUCDFiles } from "../__utils";

const ucdFiles = await mapUCDFiles("15.0.0");

describe("heading inferrence v15.0.0", async () => {
  it("inferHeading(ArabicShaping)", () => {
    const content = ucdFiles.file("ArabicShaping.txt");
    const expected = ucdFiles.file("ArabicShaping.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(BidiBrackets)", () => {
    const content = ucdFiles.file("BidiBrackets.txt");
    const expected = ucdFiles.file("BidiBrackets.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(BidiCharacterTest)", () => {
    const content = ucdFiles.file("BidiCharacterTest.txt");
    const expected = ucdFiles.file("BidiCharacterTest.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(BidiMirroring)", () => {
    const content = ucdFiles.file("BidiMirroring.txt");
    const expected = ucdFiles.file("BidiMirroring.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(BidiTest)", () => {
    const content = ucdFiles.file("BidiTest.txt");
    const expected = ucdFiles.file("BidiTest.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(Blocks)", () => {
    const content = ucdFiles.file("Blocks.txt");
    const expected = ucdFiles.file("Blocks.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(CJKRadicals)", () => {
    const content = ucdFiles.file("CJKRadicals.txt");
    const expected = ucdFiles.file("CJKRadicals.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(CaseFolding)", () => {
    const content = ucdFiles.file("CaseFolding.txt");
    const expected = ucdFiles.file("CaseFolding.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(CompositionExclusions)", () => {
    const content = ucdFiles.file("CompositionExclusions.txt");
    const expected = ucdFiles.file("CompositionExclusions.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(DerivedAge)", () => {
    const content = ucdFiles.file("DerivedAge.txt");
    const expected = ucdFiles.file("DerivedAge.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(DerivedCoreProperties)", () => {
    const content = ucdFiles.file("DerivedCoreProperties.txt");
    const expected = ucdFiles.file("DerivedCoreProperties.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(DerivedNormalizationProps)", () => {
    const content = ucdFiles.file("DerivedNormalizationProps.txt");
    const expected = ucdFiles.file("DerivedNormalizationProps.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(EastAsianWidth)", () => {
    const content = ucdFiles.file("EastAsianWidth.txt");
    const expected = ucdFiles.file("EastAsianWidth.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(EmojiSources)", () => {
    const content = ucdFiles.file("EmojiSources.txt");
    const expected = ucdFiles.file("EmojiSources.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(EquivalentUnifiedIdeograph)", () => {
    const content = ucdFiles.file("EquivalentUnifiedIdeograph.txt");
    const expected = ucdFiles.file("EquivalentUnifiedIdeograph.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(HangulSyllableType)", () => {
    const content = ucdFiles.file("HangulSyllableType.txt");
    const expected = ucdFiles.file("HangulSyllableType.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(Index)", () => {
    const content = ucdFiles.file("Index.txt");
    const expected = ucdFiles.file("Index.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(IndicPositionalCategory)", () => {
    const content = ucdFiles.file("IndicPositionalCategory.txt");
    const expected = ucdFiles.file("IndicPositionalCategory.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(IndicSyllabicCategory)", () => {
    const content = ucdFiles.file("IndicSyllabicCategory.txt");
    const expected = ucdFiles.file("IndicSyllabicCategory.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(Jamo)", () => {
    const content = ucdFiles.file("Jamo.txt");
    const expected = ucdFiles.file("Jamo.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(LineBreak)", () => {
    const content = ucdFiles.file("LineBreak.txt");
    const expected = ucdFiles.file("LineBreak.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(NameAliases)", () => {
    const content = ucdFiles.file("NameAliases.txt");
    const expected = ucdFiles.file("NameAliases.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(NamedSequences)", () => {
    const content = ucdFiles.file("NamedSequences.txt");
    const expected = ucdFiles.file("NamedSequences.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(NamedSequencesProv)", () => {
    const content = ucdFiles.file("NamedSequencesProv.txt");
    const expected = ucdFiles.file("NamedSequencesProv.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(NamesList)", () => {
    const content = ucdFiles.file("NamesList.txt");
    const expected = ucdFiles.file("NamesList.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(NormalizationCorrections)", () => {
    const content = ucdFiles.file("NormalizationCorrections.txt");
    const expected = ucdFiles.file("NormalizationCorrections.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(NormalizationTest)", () => {
    const content = ucdFiles.file("NormalizationTest.txt");
    const expected = ucdFiles.file("NormalizationTest.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(NushuSources)", () => {
    const content = ucdFiles.file("NushuSources.txt");
    const expected = ucdFiles.file("NushuSources.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(PropList)", () => {
    const content = ucdFiles.file("PropList.txt");
    const expected = ucdFiles.file("PropList.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(PropertyAliases)", () => {
    const content = ucdFiles.file("PropertyAliases.txt");
    const expected = ucdFiles.file("PropertyAliases.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(PropertyValueAliases)", () => {
    const content = ucdFiles.file("PropertyValueAliases.txt");
    const expected = ucdFiles.file("PropertyValueAliases.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(ScriptExtensions)", () => {
    const content = ucdFiles.file("ScriptExtensions.txt");
    const expected = ucdFiles.file("ScriptExtensions.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(Scripts)", () => {
    const content = ucdFiles.file("Scripts.txt");
    const expected = ucdFiles.file("Scripts.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(SpecialCasing)", () => {
    const content = ucdFiles.file("SpecialCasing.txt");
    const expected = ucdFiles.file("SpecialCasing.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(StandardizedVariants)", () => {
    const content = ucdFiles.file("StandardizedVariants.txt");
    const expected = ucdFiles.file("StandardizedVariants.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(TangutSources)", () => {
    const content = ucdFiles.file("TangutSources.txt");
    const expected = ucdFiles.file("TangutSources.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(USourceData)", () => {
    const content = ucdFiles.file("USourceData.txt");
    const expected = ucdFiles.file("USourceData.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(UnicodeData)", () => {
    const content = ucdFiles.file("UnicodeData.txt");
    const expected = ucdFiles.file("UnicodeData.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(VerticalOrientation)", () => {
    const content = ucdFiles.file("VerticalOrientation.txt");
    const expected = ucdFiles.file("VerticalOrientation.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });
});

it("ensure that all files have been tested", () => {
  expect(ucdFiles.files).toEqual([]);
  expect(ucdFiles.files.length).toBe(0);
});
