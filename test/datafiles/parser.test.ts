import { dedent } from "@luxass/utils";
import { describe, expect, it } from "vitest";
import { DataFileNodeTypes } from "../../src/datafile/ast";
import { parseDataFileIntoAst, stringifyNode, stringifyNodes } from "../../src/datafile/parser";

describe("parseDataFileIntoAst", () => {
  it.each([
    {
      description: "empty line",
      content: "",
      expectedChildTypes: [DataFileNodeTypes.Empty],
    },
    {
      description: "whitespace only",
      content: "   \t  ",
      expectedChildTypes: [DataFileNodeTypes.Empty],
    },
    {
      description: "comment line",
      content: "# This is a comment",
      expectedChildTypes: [DataFileNodeTypes.Comment],
    },
    {
      description: "data line with semicolons",
      content: "0600; ARABIC NUMBER SIGN; U; No_Joining_Group",
      expectedChildTypes: [DataFileNodeTypes.Data],
    },
    {
      description: "multiple lines mixed",
      content: "# Header\n\n0600; DATA; U; Group\n# Footer",
      expectedChildTypes: [
        DataFileNodeTypes.Comment,
        DataFileNodeTypes.Empty,
        DataFileNodeTypes.Data,
        DataFileNodeTypes.Comment,
      ],
    },
  ])("should correctly parse $description", ({ content, expectedChildTypes }) => {
    const result = parseDataFileIntoAst(content);

    expect(result.type).toBe(DataFileNodeTypes.Root);
    expect(result.children.map((child) => child.type)).toEqual(expectedChildTypes);
  });

  it("should parse realistic Unicode data file", () => {
    const content = dedent`
      # ArabicShaping-16.0.0.txt
      # Date: 2024-07-30
      # © 2024 Unicode®, Inc.

      # Arabic Characters

      0600; ARABIC NUMBER SIGN; U; No_Joining_Group
      0601; ARABIC SIGN SANAH; U; No_Joining_Group
      0620; KASHMIRI YEH; D; KASHMIRI YEH

      # Syriac Characters

      070F; SYRIAC ABBREVIATION MARK; T; No_Joining_Group
      0710; ALAPH; R; ALAPH
    `;

    const result = parseDataFileIntoAst(content);

    expect(result.type).toBe(DataFileNodeTypes.Root);
    expect(result.children).toHaveLength(14);

    // check specific nodes
    expect(result.children[0].type).toBe(DataFileNodeTypes.Comment);
    expect(result.children[0].value).toBe("ArabicShaping-16.0.0.txt");

    expect(result.children[6].type).toBe(DataFileNodeTypes.Data);
    expect(result.children[6].value).toBe("0600; ARABIC NUMBER SIGN; U; No_Joining_Group");

    // check line numbers are correct
    result.children.forEach((child, index) => {
      expect(child.line).toBe(index);
    });
  });

  it.each([
    {
      description: "with explicit fileName",
      content: "0600; DATA; U; Group",
      fileName: "custom-file.txt",
      expectedFileName: "custom-file.txt",
    },
    {
      description: "without explicit fileName",
      content: "# MyFile.txt\n0600; DATA; U; Group",
      fileName: undefined,
      // This depends on your inferFileName implementation
      expectedFileName: expect.any(String),
    },
  ])("should handle fileName $description", ({ content, fileName, expectedFileName }) => {
    const result = parseDataFileIntoAst(content, fileName);
    expect(result.fileName).toEqual(expectedFileName);
  });

  it("should handle different line endings", () => {
    const contentCRLF = "# Comment\r\n0600; DATA; U; Group";
    const contentLF = "# Comment\n0600; DATA; U; Group";

    const resultCRLF = parseDataFileIntoAst(contentCRLF);
    const resultLF = parseDataFileIntoAst(contentLF);

    expect(resultCRLF.children).toHaveLength(2);
    expect(resultLF.children).toHaveLength(2);
    expect(resultCRLF.children[0].type).toBe(DataFileNodeTypes.Comment);
    expect(resultLF.children[0].type).toBe(DataFileNodeTypes.Comment);
  });
});

describe("node content validation", () => {
  it.each([
    {
      description: "comment node extracts content correctly",
      line: "# Unicode Character Database",
      expectedType: DataFileNodeTypes.Comment,
      expectedValue: "Unicode Character Database",
    },
    {
      description: "comment with extra whitespace",
      line: "#   Spaced Comment   ",
      expectedType: DataFileNodeTypes.Comment,
      expectedValue: "Spaced Comment",
    },
    {
      description: "data line preserves content",
      line: "0600; ARABIC NUMBER SIGN; U; No_Joining_Group",
      expectedType: DataFileNodeTypes.Data,
      expectedValue: "0600; ARABIC NUMBER SIGN; U; No_Joining_Group",
    },
    {
      description: "data line with whitespace",
      line: "  0621; HAMZA; U; No_Joining_Group  ",
      expectedType: DataFileNodeTypes.Data,
      expectedValue: "0621; HAMZA; U; No_Joining_Group",
    },
  ])("should handle $description", ({ line, expectedType, expectedValue }) => {
    const result = parseDataFileIntoAst(line);
    const node = result.children[0];

    expect(node.type).toBe(expectedType);
    expect(node.value).toBe(expectedValue);
    expect(node.raw).toBe(line);
  });
});

describe("stringifyNode", () => {
  it("should preserve original raw content", () => {
    const content = "  # Comment with spaces  ";
    const parsed = parseDataFileIntoAst(content);
    const node = parsed.children[0];

    expect(stringifyNode(node)).toBe(content);
  });

  it("should stringify root node correctly", () => {
    const content = "# Header\n0600; DATA; U; Group\n# Footer";
    const parsed = parseDataFileIntoAst(content);

    expect(stringifyNode(parsed)).toBe(content);
  });
});

describe("stringifyNodes", () => {
  it("should join multiple nodes with newlines", () => {
    const content = "# Comment\n\n0600; DATA; U; Group";
    const parsed = parseDataFileIntoAst(content);

    const result = stringifyNodes(parsed.children);
    expect(result).toBe(content);
  });

  it("should handle empty array", () => {
    expect(stringifyNodes([])).toBe("");
  });
});

describe("round-trip integrity", () => {
  it.each([
    {
      description: "simple Unicode data",
      content: "0600; ARABIC NUMBER SIGN; U; No_Joining_Group",
    },
    {
      description: "mixed content with comments",
      content: `# ArabicShaping-16.0.0.txt
# Date: 2024-07-30

0600; ARABIC NUMBER SIGN; U; No_Joining_Group
0601; ARABIC SIGN SANAH; U; No_Joining_Group`,
    },
    {
      description: "content with various whitespace",
      content: "# Header\n\n  0600; DATA; U; Group  \n\n# Footer",
    },
    {
      description: "only comments",
      content: "# Comment 1\n# Comment 2\n# Comment 3",
    },
  ])("should maintain integrity for $description", ({ content }) => {
    const parsed = parseDataFileIntoAst(content);
    const stringified = stringifyNode(parsed);

    expect(stringified).toBe(content);
  });
});

describe("edge cases", () => {
  it("should handle Unicode characters", () => {
    const content = "# Unicode: 你好 العالم 🌍";
    const result = parseDataFileIntoAst(content);

    expect(result.children[0].value).toBe("Unicode: 你好 العالم 🌍");
  });

  it("should handle very long lines", () => {
    const longValue = "A".repeat(1000);
    const content = `# ${longValue}`;
    const result = parseDataFileIntoAst(content);

    expect(result.children[0].value).toBe(longValue);
  });

  it("should handle special characters in data", () => {
    const content = "06FF; KNOTTED HEH WITH INVERTED V ABOVE; D; KNOTTED HEH";
    const result = parseDataFileIntoAst(content);

    expect(result.children[0].type).toBe(DataFileNodeTypes.Data);
    expect(result.children[0].value).toBe(content);
  });

  it("should handle empty content", () => {
    const result = parseDataFileIntoAst("");

    expect(result.children).toHaveLength(1);
    expect(result.children[0].type).toBe(DataFileNodeTypes.Empty);
  });
});

describe("real Unicode file examples", () => {
  it("should parse actual Unicode entries correctly", () => {
    const unicodeEntries = `0620; KASHMIRI YEH; D; KASHMIRI YEH
0621; HAMZA; U; No_Joining_Group
0622; ALEF WITH MADDA ABOVE; R; ALEF
0623; ALEF WITH HAMZA ABOVE; R; ALEF
0624; WAW WITH HAMZA ABOVE; R; WAW`;

    const result = parseDataFileIntoAst(unicodeEntries);

    expect(result.children).toHaveLength(5);
    result.children.forEach((child) => {
      expect(child.type).toBe(DataFileNodeTypes.Data);
    });

    expect(result.children[0].value).toBe("0620; KASHMIRI YEH; D; KASHMIRI YEH");
    expect(result.children[1].value).toBe("0621; HAMZA; U; No_Joining_Group");
  });

  it("should parse Unicode file sections", () => {
    const content = `# Arabic Characters

0600; ARABIC NUMBER SIGN; U; No_Joining_Group
0601; ARABIC SIGN SANAH; U; No_Joining_Group

# Syriac Characters

070F; SYRIAC ABBREVIATION MARK; T; No_Joining_Group`;

    const result = parseDataFileIntoAst(content);

    // Should have: comment, empty, 2 data, empty, comment, empty, 1 data
    expect(result.children).toHaveLength(8);

    const types = result.children.map((c) => c.type);
    expect(types).toEqual([
      DataFileNodeTypes.Comment,
      DataFileNodeTypes.Empty,
      DataFileNodeTypes.Data,
      DataFileNodeTypes.Data,
      DataFileNodeTypes.Empty,
      DataFileNodeTypes.Comment,
      DataFileNodeTypes.Empty,
      DataFileNodeTypes.Data,
    ]);
  });
});
