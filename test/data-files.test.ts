import { readFileSync } from "node:fs";
import { join } from "node:path";
import { dedent } from "@luxass/utils";
import { describe, expect, it } from "vitest";
import { getDataFileComments, internal_parseHeading, RawDataFile } from "../src/data-files";

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
}); // Update with your actual module path

describe("internal_parseHeading", () => {
  it("should return undefined for empty input", () => {
    expect(internal_parseHeading("")).toBeUndefined();
  });

  it("should return undefined for null input", () => {
    expect(internal_parseHeading(null as any)).toBeUndefined();
  });

  it("should return undefined when no heading is present", () => {
    const content = dedent`
      This is some content
      without any heading
    `;
    expect(internal_parseHeading(content)).toBeUndefined();
  });

  it("should parse a single line heading", () => {
    const content = dedent`
      # This is a heading
    `;
    expect(internal_parseHeading(content)).toBe("# This is a heading");
  });

  it("should parse a multi-line heading", () => {
    const content = dedent`
      # This is a heading
      # This is still part of the heading
    `;
    expect(internal_parseHeading(content)).toBe(dedent`
      # This is a heading
      # This is still part of the heading
    `);
  });

  it("should stop parsing at empty line", () => {
    const content = dedent`
      # This is a heading

      # This is not part of the heading
    `;
    expect(internal_parseHeading(content)).toBe("# This is a heading");
  });

  it("should stop parsing at non-comment line", () => {
    const content = dedent`
      # This is a heading
      This is not a heading
      # This should not be included
    `;
    expect(internal_parseHeading(content)).toBe("# This is a heading");
  });

  it("should stop parsing when encountering # followed by multiple #", () => {
    const content = dedent`
      # This is a heading
      # ####
      # This should not be included
    `;
    expect(internal_parseHeading(content)).toBe(dedent`
      # This is a heading
      # ####
    `);
  });

  it("should stop parsing when encountering # followed by multiple =", () => {
    const content = dedent`
      # This is a heading
      # ====
      # This should not be included
    `;
    expect(internal_parseHeading(content)).toBe(dedent`
      # This is a heading
      # ====
    `);
  });

  it("should handle whitespace after #", () => {
    const content = dedent`
      #  This has extra spaces
      # This has a tab
    `;
    expect(internal_parseHeading(content)).toBe(dedent`
      #  This has extra spaces
      # This has a tab
    `);
  });

  it("should not include lines that do not start with \"# \"", () => {
    const content = dedent`
      # This is a heading
      #This has no space
      # This is still part of the heading
    `;
    expect(internal_parseHeading(content)).toBe("# This is a heading");
  });

  it("should handle content with mixed comment and non-comment lines", () => {
    const content = dedent`
      Some initial text
      # This is a heading
      # More heading
      Non-heading text
    `;
    expect(internal_parseHeading(content)).toBe(dedent`
      # This is a heading
      # More heading
    `);
  });

  it("should properly detect heading end with hash followed by equals", () => {
    const content = dedent`
      # Heading start
      # =========
      Regular content
    `;
    expect(internal_parseHeading(content)).toBe(dedent`
      # Heading start
      # =========
    `);
  });

  it("should handle heading with special characters", () => {
    const content = dedent`
      # Special chars: !@#$%^&*()_+{}[]|\\:;"'<>,.?/
    `;
    expect(internal_parseHeading(content)).toBe("# Special chars: !@#$%^&*()_+{}[]|\\:;\"'<>,.?/");
  });

  it("should return undefined when content has only non-comment lines", () => {
    const content = dedent`
      First line
      Second line
      Third line
    `;
    expect(internal_parseHeading(content)).toBeUndefined();
  });

  it("should handle multi-paragraph heading example", () => {
    const content = dedent`
      # Document Title
      #
      # This is a multi-paragraph header
      # with several lines of content
      #
      # It includes multiple sections

      This is the main content.
    `;
    expect(internal_parseHeading(content)).toBe(dedent`
      # Document Title
      #
      # This is a multi-paragraph header
      # with several lines of content
      #
      # It includes multiple sections
    `);
  });

  it("should handle code examples in headers", () => {
    const content = dedent`
      # Function usage:
      # parseHeading('# Header')

      Regular content starts here
    `;
    expect(internal_parseHeading(content)).toBe(dedent`
      # Function usage:
      # parseHeading('# Header')
    `);
  });

  it("should handle URLs in headers", () => {
    const content = dedent`
      # See documentation at:
      # https://example.com/docs

      Content below
    `;
    expect(internal_parseHeading(content)).toBe(dedent`
      # See documentation at:
      # https://example.com/docs
    `);
  });
});

describe("rawDataFile", () => {
  it("should initialize with content", () => {
    const content = "# Heading\nline1\nline2";
    const dataFile = new RawDataFile(content);

    expect(dataFile.rawContent).toBe(content);
    expect(dataFile.heading).toBe("# Heading");
  });

  it("should split content into lines", () => {
    const content = "line1\nline2\nline3";
    const dataFile = new RawDataFile(content);

    expect(dataFile.lines).toEqual(["line1", "line2", "line3"]);
  });

  it("should handle content without heading", () => {
    const content = "line1\nline2\nline3";
    const dataFile = new RawDataFile(content);

    expect(dataFile.heading).toBeUndefined();
  });

  it("should parse multi-line heading", () => {
    const content = dedent`
      # Line 1
      # Line 2
      # Line 3

      Content starts here
    `;
    const dataFile = new RawDataFile(content);

    expect(dataFile.heading).toBe(dedent`
      # Line 1
      # Line 2
      # Line 3
    `);
  });

  it("should throw error if content is empty", () => {
    expect(() => {
      // eslint-disable-next-line no-new
      new RawDataFile("");
    }).toThrowError("content is empty");
  });
});
