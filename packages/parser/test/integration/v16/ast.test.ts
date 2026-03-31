import { describe, expect, it } from "vitest";
import { parseDataFileIntoAst } from "../../../src/datafile/parser";
import { isSectionNode } from "../../../src/datafile/typeguards";
import { ucdFiles } from "../../__utils";

const DATA_FILES = [
  "ArabicShaping.txt",
  "BidiBrackets.txt",
  "BidiMirroring.txt",
  "Blocks.txt",
  "CaseFolding.txt",
  "CJKRadicals.txt",
  "CompositionExclusions.txt",
  "DerivedAge.txt",
  "DerivedCoreProperties.txt",
  "DerivedNormalizationProps.txt",
  "DoNotEmit.txt",
  "EastAsianWidth.txt",
  "EmojiSources.txt",
  "EquivalentUnifiedIdeograph.txt",
  "HangulSyllableType.txt",
  "Index.txt",
  "IndicPositionalCategory.txt",
  "IndicSyllabicCategory.txt",
  "Jamo.txt",
  "LineBreak.txt",
  "NameAliases.txt",
  "NamedSequences.txt",
  "NamesList.txt",
  "NormalizationCorrections.txt",
  "NushuSources.txt",
  "PropertyAliases.txt",
  "PropertyValueAliases.txt",
  "PropList.txt",
  "ReadMe.txt",
  "ScriptExtensions.txt",
  "Scripts.txt",
  "SpecialCasing.txt",
  "StandardizedVariants.txt",
  "TangutSources.txt",
  "UnicodeData.txt",
  "Unikemet.txt",
  "USourceData.txt",
  "VerticalOrientation.txt",
];

const COMMENT_ONLY_FILES = [
  "NamedSequencesProv.txt",
];

describe("v16.0.0 — parse without throwing", () => {
  it.each([...DATA_FILES, ...COMMENT_ONLY_FILES])("%s", (file) => {
    const content = ucdFiles("v16.0.0", file);
    expect(() => parseDataFileIntoAst(content)).not.toThrow();
  });
});

describe("v16.0.0 — AST structure", () => {
  it.each(DATA_FILES)("%s has sections with parsed records", (file) => {
    const content = ucdFiles("v16.0.0", file);
    const root = parseDataFileIntoAst(content);
    const sections = root.children.filter(isSectionNode);

    expect(root.type).toBe("root");
    expect(sections.length).toBeGreaterThan(0);

    for (const section of sections) {
      for (const record of section.records) {
        expect(
          record.parsedFields,
          `${file}: record at L${record.line} missing parsedFields`,
        ).toBeDefined();
        expect(record.parsedFields!.length).toBeGreaterThan(0);
      }
    }
  });

  it.each(COMMENT_ONLY_FILES)("%s has no sections", (file) => {
    const content = ucdFiles("v16.0.0", file);
    const root = parseDataFileIntoAst(content);
    const sections = root.children.filter(isSectionNode);
    expect(sections.length).toBe(0);
  });
});

describe("v16.0.0 — future", () => {
  it.todo("verify section names for multi-section files");
  it.todo("verify field names for each of the 20 file parsers");
  it.todo("verify @missing annotation expansion");
  it.todo("verify round-trip preserves data");
  it.todo("verify boundary/comment structure in SectionNode.children");
});
