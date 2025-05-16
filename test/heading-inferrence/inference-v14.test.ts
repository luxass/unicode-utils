import { describe, expect, it } from "vitest";
import { inferHeading } from "../../src/heading-inference";
import { mapUCDFiles } from "../__utils";

const ucdFiles = await mapUCDFiles("14.0.0");

describe("heading inferrence v14.0.0", async () => {
  it("inferHeading(ArabicShaping)", () => {
    const content = ucdFiles.file("ArabicShaping.txt");
    const expected = ucdFiles.expected("ArabicShaping.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(BidiBrackets)", () => {
    const content = ucdFiles.file("BidiBrackets.txt");
    const expected = ucdFiles.expected("BidiBrackets.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(BidiCharacterTest)", () => {
    const content = ucdFiles.file("BidiCharacterTest.txt");
    const expected = ucdFiles.expected("BidiCharacterTest.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(BidiMirroring)", () => {
    const content = ucdFiles.file("BidiMirroring.txt");
    const expected = ucdFiles.expected("BidiMirroring.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(BidiTest)", () => {
    const content = ucdFiles.file("BidiTest.txt");
    const expected = ucdFiles.expected("BidiTest.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(Blocks)", () => {
    const content = ucdFiles.file("Blocks.txt");
    const expected = ucdFiles.expected("Blocks.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(CJKRadicals)", () => {
    const content = ucdFiles.file("CJKRadicals.txt");
    const expected = ucdFiles.expected("CJKRadicals.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(CaseFolding)", () => {
    const content = ucdFiles.file("CaseFolding.txt");
    const expected = ucdFiles.expected("CaseFolding.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(CompositionExclusions)", () => {
    const content = ucdFiles.file("CompositionExclusions.txt");
    const expected = ucdFiles.expected("CompositionExclusions.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(DerivedAge)", () => {
    const content = ucdFiles.file("DerivedAge.txt");
    const expected = ucdFiles.expected("DerivedAge.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(DerivedCoreProperties)", () => {
    const content = ucdFiles.file("DerivedCoreProperties.txt");
    const expected = ucdFiles.expected("DerivedCoreProperties.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(DerivedNormalizationProps)", () => {
    const content = ucdFiles.file("DerivedNormalizationProps.txt");
    const expected = ucdFiles.expected("DerivedNormalizationProps.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(EastAsianWidth)", () => {
    const content = ucdFiles.file("EastAsianWidth.txt");
    const expected = ucdFiles.expected("EastAsianWidth.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(EmojiSources)", () => {
    const content = ucdFiles.file("EmojiSources.txt");
    const expected = ucdFiles.expected("EmojiSources.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(EquivalentUnifiedIdeograph)", () => {
    const content = ucdFiles.file("EquivalentUnifiedIdeograph.txt");
    const expected = ucdFiles.expected("EquivalentUnifiedIdeograph.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(HangulSyllableType)", () => {
    const content = ucdFiles.file("HangulSyllableType.txt");
    const expected = ucdFiles.expected("HangulSyllableType.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(Index)", () => {
    const content = ucdFiles.file("Index.txt");
    const expected = ucdFiles.expected("Index.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(IndicPositionalCategory)", () => {
    const content = ucdFiles.file("IndicPositionalCategory.txt");
    const expected = ucdFiles.expected("IndicPositionalCategory.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(IndicSyllabicCategory)", () => {
    const content = ucdFiles.file("IndicSyllabicCategory.txt");
    const expected = ucdFiles.expected("IndicSyllabicCategory.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(Jamo)", () => {
    const content = ucdFiles.file("Jamo.txt");
    const expected = ucdFiles.expected("Jamo.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(LineBreak)", () => {
    const content = ucdFiles.file("LineBreak.txt");
    const expected = ucdFiles.expected("LineBreak.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(NameAliases)", () => {
    const content = ucdFiles.file("NameAliases.txt");
    const expected = ucdFiles.expected("NameAliases.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(NamedSequences)", () => {
    const content = ucdFiles.file("NamedSequences.txt");
    const expected = ucdFiles.expected("NamedSequences.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(NamedSequencesProv)", () => {
    const content = ucdFiles.file("NamedSequencesProv.txt");
    const expected = ucdFiles.expected("NamedSequencesProv.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(NamesList)", () => {
    const content = ucdFiles.file("NamesList.txt");
    const expected = ucdFiles.expected("NamesList.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(NormalizationCorrections)", () => {
    const content = ucdFiles.file("NormalizationCorrections.txt");
    const expected = ucdFiles.expected("NormalizationCorrections.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(NormalizationTest)", () => {
    const content = ucdFiles.file("NormalizationTest.txt");
    const expected = ucdFiles.expected("NormalizationTest.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(NushuSources)", () => {
    const content = ucdFiles.file("NushuSources.txt");
    const expected = ucdFiles.expected("NushuSources.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(PropList)", () => {
    const content = ucdFiles.file("PropList.txt");
    const expected = ucdFiles.expected("PropList.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(PropertyAliases)", () => {
    const content = ucdFiles.file("PropertyAliases.txt");
    const expected = ucdFiles.expected("PropertyAliases.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(PropertyValueAliases)", () => {
    const content = ucdFiles.file("PropertyValueAliases.txt");
    const expected = ucdFiles.expected("PropertyValueAliases.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(ScriptExtensions)", () => {
    const content = ucdFiles.file("ScriptExtensions.txt");
    const expected = ucdFiles.expected("ScriptExtensions.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(Scripts)", () => {
    const content = ucdFiles.file("Scripts.txt");
    const expected = ucdFiles.expected("Scripts.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(SpecialCasing)", () => {
    const content = ucdFiles.file("SpecialCasing.txt");
    const expected = ucdFiles.expected("SpecialCasing.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(StandardizedVariants)", () => {
    const content = ucdFiles.file("StandardizedVariants.txt");
    const expected = ucdFiles.expected("StandardizedVariants.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(TangutSources)", () => {
    const content = ucdFiles.file("TangutSources.txt");
    const expected = ucdFiles.expected("TangutSources.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(USourceData)", () => {
    const content = ucdFiles.file("USourceData.txt");
    const expected = ucdFiles.expected("USourceData.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(UnicodeData)", () => {
    const content = ucdFiles.file("UnicodeData.txt");
    const expected = ucdFiles.expected("UnicodeData.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  it("inferHeading(VerticalOrientation)", () => {
    const content = ucdFiles.file("VerticalOrientation.txt");
    const expected = ucdFiles.expected("VerticalOrientation.comments.txt");

    expect(inferHeading(content)).toBe(expected);
  });

  describe("auxiliary files", () => {
    it("inferHeading(GraphemeBreakProperty)", () => {
      const content = ucdFiles.file("auxiliary/GraphemeBreakProperty.txt");
      const expected = ucdFiles.expected("auxiliary/GraphemeBreakProperty.comments.txt");

      expect(inferHeading(content)).toBe(expected);
    });

    it("inferHeading(GraphemeBreakTest)", () => {
      const content = ucdFiles.file("auxiliary/GraphemeBreakTest.txt");
      const expected = ucdFiles.expected("auxiliary/GraphemeBreakTest.comments.txt");

      expect(inferHeading(content)).toBe(expected);
    });

    it("inferHeading(LineBreakTest)", () => {
      const content = ucdFiles.file("auxiliary/LineBreakTest.txt");
      const expected = ucdFiles.expected("auxiliary/LineBreakTest.comments.txt");

      expect(inferHeading(content)).toBe(expected);
    });

    it("inferHeading(SentenceBreakProperty)", () => {
      const content = ucdFiles.file("auxiliary/SentenceBreakProperty.txt");
      const expected = ucdFiles.expected("auxiliary/SentenceBreakProperty.comments.txt");

      expect(inferHeading(content)).toBe(expected);
    });

    it("inferHeading(SentenceBreakTest)", () => {
      const content = ucdFiles.file("auxiliary/SentenceBreakTest.txt");
      const expected = ucdFiles.expected("auxiliary/SentenceBreakTest.comments.txt");

      expect(inferHeading(content)).toBe(expected);
    });

    it("inferHeading(WordBreakProperty)", () => {
      const content = ucdFiles.file("auxiliary/WordBreakProperty.txt");
      const expected = ucdFiles.expected("auxiliary/WordBreakProperty.comments.txt");

      expect(inferHeading(content)).toBe(expected);
    });

    it("inferHeading(WordBreakTest)", () => {
      const content = ucdFiles.file("auxiliary/WordBreakTest.txt");
      const expected = ucdFiles.expected("auxiliary/WordBreakTest.comments.txt");

      expect(inferHeading(content)).toBe(expected);
    });
  });

  describe("extracted files", () => {
    it("inferHeading(DerivedBidiClass)", () => {
      const content = ucdFiles.file("extracted/DerivedBidiClass.txt");
      const expected = ucdFiles.expected("extracted/DerivedBidiClass.comments.txt");

      expect(inferHeading(content)).toBe(expected);
    });

    it("inferHeading(DerivedBinaryProperties)", () => {
      const content = ucdFiles.file("extracted/DerivedBinaryProperties.txt");
      const expected = ucdFiles.expected("extracted/DerivedBinaryProperties.comments.txt");

      expect(inferHeading(content)).toBe(expected);
    });

    it("inferHeading(DerivedCombiningClass)", () => {
      const content = ucdFiles.file("extracted/DerivedCombiningClass.txt");
      const expected = ucdFiles.expected("extracted/DerivedCombiningClass.comments.txt");

      expect(inferHeading(content)).toBe(expected);
    });

    it("inferHeading(DerivedDecompositionType)", () => {
      const content = ucdFiles.file("extracted/DerivedDecompositionType.txt");
      const expected = ucdFiles.expected("extracted/DerivedDecompositionType.comments.txt");

      expect(inferHeading(content)).toBe(expected);
    });

    it("inferHeading(DerivedEastAsianWidth)", () => {
      const content = ucdFiles.file("extracted/DerivedEastAsianWidth.txt");
      const expected = ucdFiles.expected("extracted/DerivedEastAsianWidth.comments.txt");

      expect(inferHeading(content)).toBe(expected);
    });

    it("inferHeading(DerivedGeneralCategory)", () => {
      const content = ucdFiles.file("extracted/DerivedGeneralCategory.txt");
      const expected = ucdFiles.expected("extracted/DerivedGeneralCategory.comments.txt");

      expect(inferHeading(content)).toBe(expected);
    });

    it("inferHeading(DerivedJoiningGroup)", () => {
      const content = ucdFiles.file("extracted/DerivedJoiningGroup.txt");
      const expected = ucdFiles.expected("extracted/DerivedJoiningGroup.comments.txt");

      expect(inferHeading(content)).toBe(expected);
    });

    it("inferHeading(DerivedJoiningType)", () => {
      const content = ucdFiles.file("extracted/DerivedJoiningType.txt");
      const expected = ucdFiles.expected("extracted/DerivedJoiningType.comments.txt");

      expect(inferHeading(content)).toBe(expected);
    });

    it("inferHeading(DerivedLineBreak)", () => {
      const content = ucdFiles.file("extracted/DerivedLineBreak.txt");
      const expected = ucdFiles.expected("extracted/DerivedLineBreak.comments.txt");

      expect(inferHeading(content)).toBe(expected);
    });

    it("inferHeading(DerivedName)", () => {
      const content = ucdFiles.file("extracted/DerivedName.txt");
      const expected = ucdFiles.expected("extracted/DerivedName.comments.txt");

      expect(inferHeading(content)).toBe(expected);
    });

    it("inferHeading(DerivedNumericType)", () => {
      const content = ucdFiles.file("extracted/DerivedNumericType.txt");
      const expected = ucdFiles.expected("extracted/DerivedNumericType.comments.txt");

      expect(inferHeading(content)).toBe(expected);
    });

    it("inferHeading(DerivedNumericValues)", () => {
      const content = ucdFiles.file("extracted/DerivedNumericValues.txt");
      const expected = ucdFiles.expected("extracted/DerivedNumericValues.comments.txt");

      expect(inferHeading(content)).toBe(expected);
    });
  });
});

it("ensure that all files have been tested", () => {
  expect(ucdFiles.files).toEqual([]);
  expect(ucdFiles.files.length).toBe(0);
});
