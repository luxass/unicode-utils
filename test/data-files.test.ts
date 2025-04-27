import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getDataFileComments } from "../src/data-files";

function dataFileFixture(version: string, file: string) {
  return readFileSync(
    join(__dirname, "fixtures/data-files", `v${version}`, file),
    "utf-8",
  );
}

describe("getDataFileComments", () => {
  // Keep basic test cases for specific scenarios
  it("should extract basic comments", () => {
    const input = `# First comment
data line
# Second comment
another data line
# Third comment`;

    expect(getDataFileComments(input)).toBe(
      `# First comment\n# Second comment\n# Third comment`,
    );
  });

  it("should handle empty file", () => {
    expect(getDataFileComments("")).toBe("");
  });

  it("should handle file with no comments", () => {
    const input = `data line
another data line
yet another data line`;

    expect(getDataFileComments(input)).toBe("");
  });

  it("should handle lines that contain # but don't start with it", () => {
    const input = `data # not a comment
text # also not a comment
# this is a comment
  # this too`;

    expect(getDataFileComments(input)).toBe(
      `# this is a comment\n  # this too`,
    );
  });

  it.each([
    // version 4.1.0
    { version: "4.1.0", file: "ArabicShaping.txt" },
    { version: "4.1.0", file: "BidiMirroring.txt" },
    { version: "4.1.0", file: "LineBreak.txt" },
    { version: "4.1.0", file: "NamedSequences.txt" },
    { version: "4.1.0", file: "PropList.txt" },
    { version: "4.1.0", file: "CaseFolding.txt" },
    { version: "4.1.0", file: "UnicodeData.txt" },
    { version: "4.1.0", file: "Scripts.txt" },

    // version 5.0.0
    { version: "5.0.0", file: "ArabicShaping.txt" },
    { version: "5.0.0", file: "BidiMirroring.txt" },
    { version: "5.0.0", file: "LineBreak.txt" },
    { version: "5.0.0", file: "NamedSequences.txt" },
    { version: "5.0.0", file: "PropList.txt" },
    { version: "5.0.0", file: "CaseFolding.txt" },
    { version: "5.0.0", file: "UnicodeData.txt" },
    { version: "5.0.0", file: "Scripts.txt" },

    // version 5.1.0
    { version: "5.1.0", file: "ArabicShaping.txt" },
    { version: "5.1.0", file: "BidiMirroring.txt" },
    { version: "5.1.0", file: "LineBreak.txt" },
    { version: "5.1.0", file: "NamedSequences.txt" },
    { version: "5.1.0", file: "PropList.txt" },
    { version: "5.1.0", file: "CaseFolding.txt" },
    { version: "5.1.0", file: "UnicodeData.txt" },
    { version: "5.1.0", file: "Scripts.txt" },

    // version 5.2.0
    { version: "5.2.0", file: "ArabicShaping.txt" },
    { version: "5.2.0", file: "BidiMirroring.txt" },
    { version: "5.2.0", file: "BidiTest.txt" },
    { version: "5.2.0", file: "LineBreak.txt" },
    { version: "5.2.0", file: "NamedSequences.txt" },
    { version: "5.2.0", file: "PropList.txt" },
    { version: "5.2.0", file: "CaseFolding.txt" },
    { version: "5.2.0", file: "UnicodeData.txt" },
    { version: "5.2.0", file: "Scripts.txt" },

    // version 6.0.0
    { version: "6.0.0", file: "ArabicShaping.txt" },
    { version: "6.0.0", file: "BidiMirroring.txt" },
    { version: "6.0.0", file: "BidiTest.txt" },
    { version: "6.0.0", file: "EmojiSources.txt" },
    { version: "6.0.0", file: "LineBreak.txt" },
    { version: "6.0.0", file: "NamedSequences.txt" },
    { version: "6.0.0", file: "PropList.txt" },
    { version: "6.0.0", file: "CaseFolding.txt" },
    { version: "6.0.0", file: "UnicodeData.txt" },
    { version: "6.0.0", file: "Scripts.txt" },

    // version 6.1.0
    { version: "6.1.0", file: "ArabicShaping.txt" },
    { version: "6.1.0", file: "BidiMirroring.txt" },
    { version: "6.1.0", file: "BidiTest.txt" },
    { version: "6.1.0", file: "EmojiSources.txt" },
    { version: "6.1.0", file: "LineBreak.txt" },
    { version: "6.1.0", file: "NamedSequences.txt" },
    { version: "6.1.0", file: "PropList.txt" },
    { version: "6.1.0", file: "CaseFolding.txt" },
    { version: "6.1.0", file: "UnicodeData.txt" },
    { version: "6.1.0", file: "Scripts.txt" },

    // version 6.2.0
    { version: "6.2.0", file: "ArabicShaping.txt" },
    { version: "6.2.0", file: "BidiMirroring.txt" },
    { version: "6.2.0", file: "BidiTest.txt" },
    { version: "6.2.0", file: "EmojiSources.txt" },
    { version: "6.2.0", file: "LineBreak.txt" },
    { version: "6.2.0", file: "NamedSequences.txt" },
    { version: "6.2.0", file: "PropList.txt" },
    { version: "6.2.0", file: "CaseFolding.txt" },
    { version: "6.2.0", file: "UnicodeData.txt" },
    { version: "6.2.0", file: "Scripts.txt" },

    // version 6.3.0
    { version: "6.3.0", file: "ArabicShaping.txt" },
    { version: "6.3.0", file: "BidiMirroring.txt" },
    { version: "6.3.0", file: "BidiTest.txt" },
    { version: "6.3.0", file: "EmojiSources.txt" },
    { version: "6.3.0", file: "LineBreak.txt" },
    { version: "6.3.0", file: "NamedSequences.txt" },
    { version: "6.3.0", file: "PropList.txt" },
    { version: "6.3.0", file: "CaseFolding.txt" },
    { version: "6.3.0", file: "UnicodeData.txt" },
    { version: "6.3.0", file: "Scripts.txt" },

    // version 7.0.0
    { version: "7.0.0", file: "ArabicShaping.txt" },
    { version: "7.0.0", file: "BidiMirroring.txt" },
    { version: "7.0.0", file: "BidiTest.txt" },
    { version: "7.0.0", file: "EmojiSources.txt" },
    { version: "7.0.0", file: "LineBreak.txt" },
    { version: "7.0.0", file: "NamedSequences.txt" },
    { version: "7.0.0", file: "PropList.txt" },
    { version: "7.0.0", file: "CaseFolding.txt" },
    { version: "7.0.0", file: "UnicodeData.txt" },
    { version: "7.0.0", file: "Scripts.txt" },

    // version 8.0.0
    { version: "8.0.0", file: "ArabicShaping.txt" },
    { version: "8.0.0", file: "BidiMirroring.txt" },
    { version: "8.0.0", file: "BidiTest.txt" },
    { version: "8.0.0", file: "EmojiSources.txt" },
    { version: "8.0.0", file: "LineBreak.txt" },
    { version: "8.0.0", file: "NamedSequences.txt" },
    { version: "8.0.0", file: "PropList.txt" },
    { version: "8.0.0", file: "CaseFolding.txt" },
    { version: "8.0.0", file: "UnicodeData.txt" },
    { version: "8.0.0", file: "Scripts.txt" },

    // version 9.0.0
    { version: "9.0.0", file: "ArabicShaping.txt" },
    { version: "9.0.0", file: "BidiMirroring.txt" },
    { version: "9.0.0", file: "BidiTest.txt" },
    { version: "9.0.0", file: "EmojiSources.txt" },
    { version: "9.0.0", file: "LineBreak.txt" },
    { version: "9.0.0", file: "NamedSequences.txt" },
    { version: "9.0.0", file: "PropList.txt" },
    { version: "9.0.0", file: "CaseFolding.txt" },
    { version: "9.0.0", file: "UnicodeData.txt" },
    { version: "9.0.0", file: "Scripts.txt" },

    // version 10.0.0
    { version: "10.0.0", file: "ArabicShaping.txt" },
    { version: "10.0.0", file: "BidiMirroring.txt" },
    { version: "10.0.0", file: "BidiTest.txt" },
    { version: "10.0.0", file: "EmojiSources.txt" },
    { version: "10.0.0", file: "LineBreak.txt" },
    { version: "10.0.0", file: "NamedSequences.txt" },
    { version: "10.0.0", file: "PropList.txt" },
    { version: "10.0.0", file: "CaseFolding.txt" },
    { version: "10.0.0", file: "UnicodeData.txt" },
    { version: "10.0.0", file: "Scripts.txt" },

    // version 11.0.0
    { version: "11.0.0", file: "ArabicShaping.txt" },
    { version: "11.0.0", file: "BidiMirroring.txt" },
    { version: "11.0.0", file: "BidiTest.txt" },
    { version: "11.0.0", file: "EmojiSources.txt" },
    { version: "11.0.0", file: "LineBreak.txt" },
    { version: "11.0.0", file: "NamedSequences.txt" },
    { version: "11.0.0", file: "PropList.txt" },
    { version: "11.0.0", file: "CaseFolding.txt" },
    { version: "11.0.0", file: "UnicodeData.txt" },
    { version: "11.0.0", file: "Scripts.txt" },

    // version 12.0.0
    { version: "12.0.0", file: "ArabicShaping.txt" },
    { version: "12.0.0", file: "BidiMirroring.txt" },
    { version: "12.0.0", file: "BidiTest.txt" },
    { version: "12.0.0", file: "EmojiSources.txt" },
    { version: "12.0.0", file: "LineBreak.txt" },
    { version: "12.0.0", file: "NamedSequences.txt" },
    { version: "12.0.0", file: "PropList.txt" },
    { version: "12.0.0", file: "CaseFolding.txt" },
    { version: "12.0.0", file: "UnicodeData.txt" },
    { version: "12.0.0", file: "Scripts.txt" },

    // version 12.1.0
    { version: "12.1.0", file: "ArabicShaping.txt" },
    { version: "12.1.0", file: "BidiMirroring.txt" },
    { version: "12.1.0", file: "BidiTest.txt" },
    { version: "12.1.0", file: "EmojiSources.txt" },
    { version: "12.1.0", file: "LineBreak.txt" },
    { version: "12.1.0", file: "NamedSequences.txt" },
    { version: "12.1.0", file: "PropList.txt" },
    { version: "12.1.0", file: "CaseFolding.txt" },
    { version: "12.1.0", file: "UnicodeData.txt" },
    { version: "12.1.0", file: "Scripts.txt" },

    // version 13.0.0
    { version: "13.0.0", file: "ArabicShaping.txt" },
    { version: "13.0.0", file: "BidiMirroring.txt" },
    { version: "13.0.0", file: "BidiTest.txt" },
    { version: "13.0.0", file: "EmojiSources.txt" },
    { version: "13.0.0", file: "LineBreak.txt" },
    { version: "13.0.0", file: "NamedSequences.txt" },
    { version: "13.0.0", file: "PropList.txt" },
    { version: "13.0.0", file: "CaseFolding.txt" },
    { version: "13.0.0", file: "UnicodeData.txt" },
    { version: "13.0.0", file: "Scripts.txt" },

    // version 14.0.0
    { version: "14.0.0", file: "ArabicShaping.txt" },
    { version: "14.0.0", file: "BidiMirroring.txt" },
    { version: "14.0.0", file: "BidiTest.txt" },
    { version: "14.0.0", file: "EmojiSources.txt" },
    { version: "14.0.0", file: "LineBreak.txt" },
    { version: "14.0.0", file: "NamedSequences.txt" },
    { version: "14.0.0", file: "PropList.txt" },
    { version: "14.0.0", file: "CaseFolding.txt" },
    { version: "14.0.0", file: "UnicodeData.txt" },
    { version: "14.0.0", file: "Scripts.txt" },

    // version 15.0.0
    { version: "15.0.0", file: "ArabicShaping.txt" },
    { version: "15.0.0", file: "BidiMirroring.txt" },
    { version: "15.0.0", file: "BidiTest.txt" },
    { version: "15.0.0", file: "EmojiSources.txt" },
    { version: "15.0.0", file: "LineBreak.txt" },
    { version: "15.0.0", file: "NamedSequences.txt" },
    { version: "15.0.0", file: "PropList.txt" },
    { version: "15.0.0", file: "CaseFolding.txt" },
    { version: "15.0.0", file: "UnicodeData.txt" },
    { version: "15.0.0", file: "Scripts.txt" },

    // version 15.1.0
    { version: "15.1.0", file: "ArabicShaping.txt" },
    { version: "15.1.0", file: "BidiMirroring.txt" },
    { version: "15.1.0", file: "BidiTest.txt" },
    { version: "15.1.0", file: "EmojiSources.txt" },
    { version: "15.1.0", file: "LineBreak.txt" },
    { version: "15.1.0", file: "NamedSequences.txt" },
    { version: "15.1.0", file: "PropList.txt" },
    { version: "15.1.0", file: "CaseFolding.txt" },
    { version: "15.1.0", file: "UnicodeData.txt" },
    { version: "15.1.0", file: "Scripts.txt" },

    // version 16.0.0
    { version: "16.0.0", file: "ArabicShaping.txt" },
    { version: "16.0.0", file: "BidiMirroring.txt" },
    { version: "16.0.0", file: "BidiTest.txt" },
    { version: "16.0.0", file: "EmojiSources.txt" },
    { version: "16.0.0", file: "LineBreak.txt" },
    { version: "16.0.0", file: "NamedSequences.txt" },
    { version: "16.0.0", file: "PropList.txt" },
    { version: "16.0.0", file: "CaseFolding.txt" },
    { version: "16.0.0", file: "UnicodeData.txt" },
    { version: "16.0.0", file: "Scripts.txt" },
  ])("should extract comments from $file", ({ version, file }) => {
    const input = dataFileFixture(version, file);
    const expected = dataFileFixture(version, `${file}.comments`);

    expect(getDataFileComments(input)).toBe(expected);
  });
});
