import { dedent } from "@luxass/utils";
import { describe, expect, it } from "vitest";

import type { PropertyNode } from "../../src/datafile/ast";
import { NodeTypes } from "../../src/datafile/ast";
import { parseDataFileIntoAst, stringifyNode, stringifyNodes } from "../../src/datafile/parser";

describe("parseDataFileIntoAst (flat mode)", () => {
  it.each([
    {
      description: "empty line",
      content: "",
      expectedChildTypes: [NodeTypes.EMPTY],
    },
    {
      description: "whitespace only",
      content: "   \t  ",
      expectedChildTypes: [NodeTypes.EMPTY],
    },
    {
      description: "comment line",
      content: "# This is a comment",
      expectedChildTypes: [NodeTypes.COMMENT],
    },
    {
      description: "data line with semicolons",
      content: "0600; ARABIC NUMBER SIGN; U; No_Joining_Group",
      expectedChildTypes: [NodeTypes.DATA],
    },
    {
      description: "multiple lines mixed",
      content: "# Header\n\n0600; DATA; U; Group\n# Footer",
      expectedChildTypes: [NodeTypes.COMMENT, NodeTypes.EMPTY, NodeTypes.DATA, NodeTypes.COMMENT],
    },
  ])("should correctly parse $description", ({ content, expectedChildTypes }) => {
    const result = parseDataFileIntoAst(content, { groupSections: false });

    expect(result.type).toBe(NodeTypes.ROOT);
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

    const result = parseDataFileIntoAst(content, { groupSections: false });

    expect(result.type).toBe(NodeTypes.ROOT);
    expect(result.children).toHaveLength(14);

    // check specific nodes
    expect(result.children[0]?.type).toBe(NodeTypes.COMMENT);
    expect(result.children[0]?.value).toBe("ArabicShaping-16.0.0.txt");

    expect(result.children[6]?.type).toBe(NodeTypes.DATA);
    expect(result.children[6]?.value).toBe("0600; ARABIC NUMBER SIGN; U; No_Joining_Group");

    // check line numbers are correct
    result.children?.forEach((child, index) => {
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
    const result = parseDataFileIntoAst(content, { fileName, groupSections: false });
    expect(result.fileName).toEqual(expectedFileName);
  });

  it("should handle different line endings", () => {
    const contentCRLF = "# Comment\r\n0600; DATA; U; Group";
    const contentLF = "# Comment\n0600; DATA; U; Group";

    const resultCRLF = parseDataFileIntoAst(contentCRLF, { groupSections: false });
    const resultLF = parseDataFileIntoAst(contentLF, { groupSections: false });

    expect(resultCRLF.children).toHaveLength(2);
    expect(resultLF.children).toHaveLength(2);
    expect(resultCRLF.children[0]?.type).toBe(NodeTypes.COMMENT);
    expect(resultLF.children[0]?.type).toBe(NodeTypes.COMMENT);
  });
});

describe("node content validation", () => {
  it.each([
    {
      description: "comment node extracts content correctly",
      line: "# Unicode Character Database",
      expectedType: NodeTypes.COMMENT,
      expectedValue: "Unicode Character Database",
    },
    {
      description: "comment with extra whitespace",
      line: "#   Spaced Comment   ",
      expectedType: NodeTypes.COMMENT,
      expectedValue: "Spaced Comment",
    },
    {
      description: "data line preserves content",
      line: "0600; ARABIC NUMBER SIGN; U; No_Joining_Group",
      expectedType: NodeTypes.DATA,
      expectedValue: "0600; ARABIC NUMBER SIGN; U; No_Joining_Group",
    },
    {
      description: "data line with whitespace",
      line: "  0621; HAMZA; U; No_Joining_Group  ",
      expectedType: NodeTypes.DATA,
      expectedValue: "0621; HAMZA; U; No_Joining_Group",
    },
    {
      description: "empty line is parsed correctly",
      line: "",
      expectedType: NodeTypes.EMPTY,
      expectedValue: "",
    },
    {
      description: "line with only whitespace",
      line: "   ",
      expectedType: NodeTypes.EMPTY,
      expectedValue: "",
    },
    {
      description: "boundary line with style",
      line: "# ================================================",
      expectedType: NodeTypes.BOUNDARY,
      expectedValue: "# ================================================",
    },
    {
      description: "boundary line with different style",
      line: "# -----------------------------------------------",
      expectedType: NodeTypes.BOUNDARY,
      expectedValue: "# -----------------------------------------------",
    },
    {
      description: "EOF marker line",
      line: "# EOF",
      expectedType: NodeTypes.EOF,
      expectedValue: "# EOF",
    },
    {
      description: "property line with value",
      line: "# Property: ExampleProperty",
      expectedType: NodeTypes.PROPERTY,
      expectedValue: "ExampleProperty",
    },
    {
      description: "property line without value",
      line: "# Property:",
      expectedType: NodeTypes.COMMENT,
      expectedValue: "Property:",
    },
  ])("should handle $description", ({ line, expectedType, expectedValue }) => {
    const result = parseDataFileIntoAst(line, { groupSections: false });
    const node = result.children[0];

    expect(node?.type).toBe(expectedType);

    if (expectedType === NodeTypes.PROPERTY) {
      expect((node as PropertyNode).propertyValue).toBe(expectedValue);
    } else {
      expect(node?.value).toBe(expectedValue);
    }

    expect(node?.raw).toBe(line);
  });
});

describe("stringifyNode", () => {
  it("should preserve original raw content", () => {
    const content = "  # Comment with spaces  ";
    const parsed = parseDataFileIntoAst(content, { groupSections: false });
    const node = parsed.children[0];

    expect(stringifyNode(node)).toBe(content);
  });

  it("should stringify root node correctly", () => {
    const content = "# Header\n0600; DATA; U; Group\n# Footer";
    const parsed = parseDataFileIntoAst(content, { groupSections: false });

    expect(stringifyNode(parsed)).toBe(content);
  });
});

describe("stringifyNodes", () => {
  it("should join multiple nodes with newlines", () => {
    const content = "# Comment\n\n0600; DATA; U; Group";
    const parsed = parseDataFileIntoAst(content, { groupSections: false });

    const result = stringifyNodes(parsed.children);
    expect(result).toBe(content);
  });

  it("should handle empty array", () => {
    expect(stringifyNodes([])).toBe("");
  });
});

describe("round-trip integrity (flat mode)", () => {
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
    const parsed = parseDataFileIntoAst(content, { groupSections: false });
    const stringified = stringifyNode(parsed);

    expect(stringified).toBe(content);
  });
});

describe("edge cases", () => {
  it("should handle Unicode characters", () => {
    const content = "# Unicode: 你好 العالم 🌍";
    const result = parseDataFileIntoAst(content, { groupSections: false });

    expect(result.children[0]?.value).toBe("Unicode: 你好 العالم 🌍");
  });

  it("should handle very long lines", () => {
    const longValue = "A".repeat(1000);
    const content = `# ${longValue}`;
    const result = parseDataFileIntoAst(content, { groupSections: false });

    expect(result.children[0]?.value).toBe(longValue);
  });

  it("should handle special characters in data", () => {
    const content = "06FF; KNOTTED HEH WITH INVERTED V ABOVE; D; KNOTTED HEH";
    const result = parseDataFileIntoAst(content, { groupSections: false });

    expect(result.children[0]?.type).toBe(NodeTypes.DATA);
    expect(result.children[0]?.value).toBe(content);
  });

  it("should handle empty content", () => {
    const result = parseDataFileIntoAst("", { groupSections: false });

    expect(result.children).toHaveLength(1);
    expect(result.children[0]?.type).toBe(NodeTypes.EMPTY);
  });
});
