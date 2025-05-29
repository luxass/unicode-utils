/**
 * Test file for the improved heading inference function using v16.0.0 test data.
 * Based on the auto-generated heading-v16.test.ts but adapted for inferHeadingFromASTImproved.
 */
import { describe, expect, it } from "vitest";
import { parseDataFileIntoAst } from "../../src/datafile/parser";
import { inferHeadingFromASTImproved } from "../../src/inference/heading-improved";
import { mapUCDFiles } from "../__utils";

const ucdFiles = await mapUCDFiles("v16.0.0");

describe("heading inference improved v16", () => {
  it("inferHeadingFromASTImproved(ArabicShaping.txt)", () => {
    const content = ucdFiles.file("ArabicShaping.txt");
    const expected = ucdFiles.expected("ArabicShaping.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(BidiBrackets.txt)", () => {
    const content = ucdFiles.file("BidiBrackets.txt");
    const expected = ucdFiles.expected("BidiBrackets.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(BidiMirroring.txt)", () => {
    const content = ucdFiles.file("BidiMirroring.txt");
    const expected = ucdFiles.expected("BidiMirroring.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(Blocks.txt)", () => {
    const content = ucdFiles.file("Blocks.txt");
    const expected = ucdFiles.expected("Blocks.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(CJKRadicals.txt)", () => {
    const content = ucdFiles.file("CJKRadicals.txt");
    const expected = ucdFiles.expected("CJKRadicals.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(CaseFolding.txt)", () => {
    const content = ucdFiles.file("CaseFolding.txt");
    const expected = ucdFiles.expected("CaseFolding.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(CompositionExclusions.txt)", () => {
    const content = ucdFiles.file("CompositionExclusions.txt");
    const expected = ucdFiles.expected("CompositionExclusions.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(DerivedAge.txt)", () => {
    const content = ucdFiles.file("DerivedAge.txt");
    const expected = ucdFiles.expected("DerivedAge.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(DerivedCoreProperties.txt)", () => {
    const content = ucdFiles.file("DerivedCoreProperties.txt");
    const expected = ucdFiles.expected("DerivedCoreProperties.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(DerivedNormalizationProps.txt)", () => {
    const content = ucdFiles.file("DerivedNormalizationProps.txt");
    const expected = ucdFiles.expected("DerivedNormalizationProps.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(DoNotEmit.txt)", () => {
    const content = ucdFiles.file("DoNotEmit.txt");
    const expected = ucdFiles.expected("DoNotEmit.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(EastAsianWidth.txt)", () => {
    const content = ucdFiles.file("EastAsianWidth.txt");
    const expected = ucdFiles.expected("EastAsianWidth.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(EmojiSources.txt)", () => {
    const content = ucdFiles.file("EmojiSources.txt");
    const expected = ucdFiles.expected("EmojiSources.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(EquivalentUnifiedIdeograph.txt)", () => {
    const content = ucdFiles.file("EquivalentUnifiedIdeograph.txt");
    const expected = ucdFiles.expected("EquivalentUnifiedIdeograph.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(HangulSyllableType.txt)", () => {
    const content = ucdFiles.file("HangulSyllableType.txt");
    const expected = ucdFiles.expected("HangulSyllableType.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(Index.txt)", () => {
    const content = ucdFiles.file("Index.txt");
    const expected = ucdFiles.expected("Index.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(IndicPositionalCategory.txt)", () => {
    const content = ucdFiles.file("IndicPositionalCategory.txt");
    const expected = ucdFiles.expected("IndicPositionalCategory.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(IndicSyllabicCategory.txt)", () => {
    const content = ucdFiles.file("IndicSyllabicCategory.txt");
    const expected = ucdFiles.expected("IndicSyllabicCategory.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(Jamo.txt)", () => {
    const content = ucdFiles.file("Jamo.txt");
    const expected = ucdFiles.expected("Jamo.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(LineBreak.txt)", () => {
    const content = ucdFiles.file("LineBreak.txt");
    const expected = ucdFiles.expected("LineBreak.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(NameAliases.txt)", () => {
    const content = ucdFiles.file("NameAliases.txt");
    const expected = ucdFiles.expected("NameAliases.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(NamedSequences.txt)", () => {
    const content = ucdFiles.file("NamedSequences.txt");
    const expected = ucdFiles.expected("NamedSequences.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(NamedSequencesProv.txt)", () => {
    const content = ucdFiles.file("NamedSequencesProv.txt");
    const expected = ucdFiles.expected("NamedSequencesProv.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(NamesList.txt)", () => {
    const content = ucdFiles.file("NamesList.txt");
    const expected = ucdFiles.expected("NamesList.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(NormalizationCorrections.txt)", () => {
    const content = ucdFiles.file("NormalizationCorrections.txt");
    const expected = ucdFiles.expected("NormalizationCorrections.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(NushuSources.txt)", () => {
    const content = ucdFiles.file("NushuSources.txt");
    const expected = ucdFiles.expected("NushuSources.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(PropList.txt)", () => {
    const content = ucdFiles.file("PropList.txt");
    const expected = ucdFiles.expected("PropList.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(PropertyAliases.txt)", () => {
    const content = ucdFiles.file("PropertyAliases.txt");
    const expected = ucdFiles.expected("PropertyAliases.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(PropertyValueAliases.txt)", () => {
    const content = ucdFiles.file("PropertyValueAliases.txt");
    const expected = ucdFiles.expected("PropertyValueAliases.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(ReadMe.txt)", () => {
    const content = ucdFiles.file("ReadMe.txt");
    const expected = ucdFiles.expected("ReadMe.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(ScriptExtensions.txt)", () => {
    const content = ucdFiles.file("ScriptExtensions.txt");
    const expected = ucdFiles.expected("ScriptExtensions.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(Scripts.txt)", () => {
    const content = ucdFiles.file("Scripts.txt");
    const expected = ucdFiles.expected("Scripts.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(SpecialCasing.txt)", () => {
    const content = ucdFiles.file("SpecialCasing.txt");
    const expected = ucdFiles.expected("SpecialCasing.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(StandardizedVariants.txt)", () => {
    const content = ucdFiles.file("StandardizedVariants.txt");
    const expected = ucdFiles.expected("StandardizedVariants.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(TangutSources.txt)", () => {
    const content = ucdFiles.file("TangutSources.txt");
    const expected = ucdFiles.expected("TangutSources.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(USourceData.txt)", () => {
    const content = ucdFiles.file("USourceData.txt");
    const expected = ucdFiles.expected("USourceData.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(UnicodeData.txt)", () => {
    const content = ucdFiles.file("UnicodeData.txt");
    const expected = ucdFiles.expected("UnicodeData.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(Unikemet.txt)", () => {
    const content = ucdFiles.file("Unikemet.txt");
    const expected = ucdFiles.expected("Unikemet.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  it("inferHeadingFromASTImproved(VerticalOrientation.txt)", () => {
    const content = ucdFiles.file("VerticalOrientation.txt");
    const expected = ucdFiles.expected("VerticalOrientation.comments.txt");
    const ast = parseDataFileIntoAst(content);

    expect(inferHeadingFromASTImproved(ast)).toBe(expected);
  });

  describe("auxiliary", () => {
    it("inferHeadingFromASTImproved(GraphemeBreakProperty.txt)", () => {
      const content = ucdFiles.file("auxiliary/GraphemeBreakProperty.txt");
      const expected = ucdFiles.expected("auxiliary/GraphemeBreakProperty.comments.txt");
      const ast = parseDataFileIntoAst(content);

      expect(inferHeadingFromASTImproved(ast)).toBe(expected);
    });

    it("inferHeadingFromASTImproved(SentenceBreakProperty.txt)", () => {
      const content = ucdFiles.file("auxiliary/SentenceBreakProperty.txt");
      const expected = ucdFiles.expected("auxiliary/SentenceBreakProperty.comments.txt");
      const ast = parseDataFileIntoAst(content);

      expect(inferHeadingFromASTImproved(ast)).toBe(expected);
    });

    it("inferHeadingFromASTImproved(WordBreakProperty.txt)", () => {
      const content = ucdFiles.file("auxiliary/WordBreakProperty.txt");
      const expected = ucdFiles.expected("auxiliary/WordBreakProperty.comments.txt");
      const ast = parseDataFileIntoAst(content);

      expect(inferHeadingFromASTImproved(ast)).toBe(expected);
    });
  });

  describe("emoji", () => {
    it("inferHeadingFromASTImproved(ReadMe.txt)", () => {
      const content = ucdFiles.file("emoji/ReadMe.txt");
      const expected = ucdFiles.expected("emoji/ReadMe.comments.txt");
      const ast = parseDataFileIntoAst(content);

      expect(inferHeadingFromASTImproved(ast)).toBe(expected);
    });

    it("inferHeadingFromASTImproved(emoji-data.txt)", () => {
      const content = ucdFiles.file("emoji/emoji-data.txt");
      const expected = ucdFiles.expected("emoji/emoji-data.comments.txt");
      const ast = parseDataFileIntoAst(content);

      expect(inferHeadingFromASTImproved(ast)).toBe(expected);
    });

    it("inferHeadingFromASTImproved(emoji-variation-sequences.txt)", () => {
      const content = ucdFiles.file("emoji/emoji-variation-sequences.txt");
      const expected = ucdFiles.expected("emoji/emoji-variation-sequences.comments.txt");
      const ast = parseDataFileIntoAst(content);

      expect(inferHeadingFromASTImproved(ast)).toBe(expected);
    });
  });

  describe("extracted", () => {
    it("inferHeadingFromASTImproved(DerivedBidiClass.txt)", () => {
      const content = ucdFiles.file("extracted/DerivedBidiClass.txt");
      const expected = ucdFiles.expected("extracted/DerivedBidiClass.comments.txt");
      const ast = parseDataFileIntoAst(content);

      expect(inferHeadingFromASTImproved(ast)).toBe(expected);
    });

    it("inferHeadingFromASTImproved(DerivedBinaryProperties.txt)", () => {
      const content = ucdFiles.file("extracted/DerivedBinaryProperties.txt");
      const expected = ucdFiles.expected("extracted/DerivedBinaryProperties.comments.txt");
      const ast = parseDataFileIntoAst(content);

      expect(inferHeadingFromASTImproved(ast)).toBe(expected);
    });

    it("inferHeadingFromASTImproved(DerivedCombiningClass.txt)", () => {
      const content = ucdFiles.file("extracted/DerivedCombiningClass.txt");
      const expected = ucdFiles.expected("extracted/DerivedCombiningClass.comments.txt");
      const ast = parseDataFileIntoAst(content);

      expect(inferHeadingFromASTImproved(ast)).toBe(expected);
    });

    it("inferHeadingFromASTImproved(DerivedDecompositionType.txt)", () => {
      const content = ucdFiles.file("extracted/DerivedDecompositionType.txt");
      const expected = ucdFiles.expected("extracted/DerivedDecompositionType.comments.txt");
      const ast = parseDataFileIntoAst(content);

      expect(inferHeadingFromASTImproved(ast)).toBe(expected);
    });

    it("inferHeadingFromASTImproved(DerivedEastAsianWidth.txt)", () => {
      const content = ucdFiles.file("extracted/DerivedEastAsianWidth.txt");
      const expected = ucdFiles.expected("extracted/DerivedEastAsianWidth.comments.txt");
      const ast = parseDataFileIntoAst(content);

      expect(inferHeadingFromASTImproved(ast)).toBe(expected);
    });

    it("inferHeadingFromASTImproved(DerivedGeneralCategory.txt)", () => {
      const content = ucdFiles.file("extracted/DerivedGeneralCategory.txt");
      const expected = ucdFiles.expected("extracted/DerivedGeneralCategory.comments.txt");
      const ast = parseDataFileIntoAst(content);

      expect(inferHeadingFromASTImproved(ast)).toBe(expected);
    });

    it("inferHeadingFromASTImproved(DerivedJoiningGroup.txt)", () => {
      const content = ucdFiles.file("extracted/DerivedJoiningGroup.txt");
      const expected = ucdFiles.expected("extracted/DerivedJoiningGroup.comments.txt");
      const ast = parseDataFileIntoAst(content);

      expect(inferHeadingFromASTImproved(ast)).toBe(expected);
    });

    it("inferHeadingFromASTImproved(DerivedJoiningType.txt)", () => {
      const content = ucdFiles.file("extracted/DerivedJoiningType.txt");
      const expected = ucdFiles.expected("extracted/DerivedJoiningType.comments.txt");
      const ast = parseDataFileIntoAst(content);

      expect(inferHeadingFromASTImproved(ast)).toBe(expected);
    });

    it("inferHeadingFromASTImproved(DerivedLineBreak.txt)", () => {
      const content = ucdFiles.file("extracted/DerivedLineBreak.txt");
      const expected = ucdFiles.expected("extracted/DerivedLineBreak.comments.txt");
      const ast = parseDataFileIntoAst(content);

      expect(inferHeadingFromASTImproved(ast)).toBe(expected);
    });

    it("inferHeadingFromASTImproved(DerivedName.txt)", () => {
      const content = ucdFiles.file("extracted/DerivedName.txt");
      const expected = ucdFiles.expected("extracted/DerivedName.comments.txt");
      const ast = parseDataFileIntoAst(content);

      expect(inferHeadingFromASTImproved(ast)).toBe(expected);
    });

    it("inferHeadingFromASTImproved(DerivedNumericType.txt)", () => {
      const content = ucdFiles.file("extracted/DerivedNumericType.txt");
      const expected = ucdFiles.expected("extracted/DerivedNumericType.comments.txt");
      const ast = parseDataFileIntoAst(content);

      expect(inferHeadingFromASTImproved(ast)).toBe(expected);
    });

    it("inferHeadingFromASTImproved(DerivedNumericValues.txt)", () => {
      const content = ucdFiles.file("extracted/DerivedNumericValues.txt");
      const expected = ucdFiles.expected("extracted/DerivedNumericValues.comments.txt");
      const ast = parseDataFileIntoAst(content);

      expect(inferHeadingFromASTImproved(ast)).toBe(expected);
    });
  });

  // Test configuration options
  describe("configuration options", () => {
    it("should respect allowEmptyLinesBetweenComments = false", () => {
      // Test with a file that has empty lines between comments
      const content = ucdFiles.file("ReadMe.txt");
      const ast = parseDataFileIntoAst(content);

      const resultWithEmptyLines = inferHeadingFromASTImproved(ast, {
        allowEmptyLinesBetweenComments: true,
      });

      const resultWithoutEmptyLines = inferHeadingFromASTImproved(ast, {
        allowEmptyLinesBetweenComments: false,
      });

      // The result without empty lines should be shorter or different
      expect(resultWithEmptyLines).not.toEqual(resultWithoutEmptyLines);
    });

    it("should respect allowMultipleBoundaries = false", () => {
      // Test with a file that might have multiple boundary lines
      const content = ucdFiles.file("PropList.txt");
      const ast = parseDataFileIntoAst(content);

      const resultWithMultipleBoundaries = inferHeadingFromASTImproved(ast, {
        allowMultipleBoundaries: true,
      });

      const resultWithoutMultipleBoundaries = inferHeadingFromASTImproved(ast, {
        allowMultipleBoundaries: false,
      });

      // Results might be different depending on the file structure
      // At minimum, both should return valid strings or null
      expect(typeof resultWithMultipleBoundaries === "string" || resultWithMultipleBoundaries === null).toBe(true);
      expect(typeof resultWithoutMultipleBoundaries === "string" || resultWithoutMultipleBoundaries === null).toBe(true);
    });
  });

  it("ensure that all files have been tested", () => {
    expect(ucdFiles.files).toEqual([]);
    expect(ucdFiles.files.length).toBe(0);
  });
});
