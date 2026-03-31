import { describe, expect, it } from "vitest";
import { parseDataFileIntoAst } from "../../../src/datafile/parser";
import { isSectionNode } from "../../../src/datafile/typeguards";
import { ucdFiles } from "../../__utils";

/**
 * v16.0.0 AST integration tests.
 *
 * These are basic structural tests — parse every file and verify the AST
 * is well-formed. Detailed assertions for specific files come later after
 * manual review via the playground. See test/NOTES.md for tracking.
 */

// ─── File lists ───────────────────────────────────────────────────────────────

/** All v16.0.0 .txt files that contain data lines */
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

/** Files with no data lines (comment-only or empty provisional) */
const COMMENT_ONLY_FILES = [
  "NamedSequencesProv.txt",
];

// ─── Group 1: parse without throwing ──────────────────────────────────────────

describe("v16.0.0 — parse without throwing", () => {
  it.each([...DATA_FILES, ...COMMENT_ONLY_FILES])("%s", (file) => {
    const content = ucdFiles("v16.0.0", file);
    expect(() => parseDataFileIntoAst(content)).not.toThrow();
  });
});

// ─── Group 2: basic AST structure ─────────────────────────────────────────────

describe("v16.0.0 — basic AST structure", () => {
  it.each(DATA_FILES)("%s has a valid root with children", (file) => {
    const content = ucdFiles("v16.0.0", file);
    const root = parseDataFileIntoAst(content);

    expect(root).toBeDefined();
    expect(root.type).toBe("root");
    expect(root.children.length).toBeGreaterThan(0);
  });

  it.each(DATA_FILES)("%s produces at least one SectionNode", (file) => {
    const content = ucdFiles("v16.0.0", file);
    const root = parseDataFileIntoAst(content);
    const sections = root.children.filter(isSectionNode);

    expect(sections.length).toBeGreaterThan(0);
  });

  it.each(DATA_FILES)("%s — every record has parsedFields", (file) => {
    const content = ucdFiles("v16.0.0", file);
    const root = parseDataFileIntoAst(content);
    const sections = root.children.filter(isSectionNode);

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

  it.each(COMMENT_ONLY_FILES)("%s has no SectionNodes (comment-only)", (file) => {
    const content = ucdFiles("v16.0.0", file);
    const root = parseDataFileIntoAst(content);
    const sections = root.children.filter(isSectionNode);

    expect(sections.length).toBe(0);
  });
});

// ─── Future: needs manual review via playground (see test/NOTES.md) ───────────

describe("v16.0.0 — future", () => {
  it.todo("verify section names for multi-section files");
  it.todo("verify field names for each of the 20 file parsers");
  it.todo("verify @missing annotation expansion");
  it.todo("verify round-trip preserves data");
  it.todo("verify boundary/comment structure in SectionNode.children");
});
