import { dedent } from "@luxass/utils";
import { describe, expect, it } from "vitest";

import { NodeTypes, isBoundaryNode } from "../../src/ast";
import { parseDataFileIntoAst } from "../../src/parser";

describe("BoundaryNode", () => {
  describe("equals boundary (=)", () => {
    const fixture = dedent`
      # Scripts-16.0.0.txt
      # Date: 2024-04-30, 21:48:40 GMT
      # Unicode and the Unicode Logo are registered trademarks
      # of Unicode, Inc. in the U.S. and other countries.
      # For terms of use and license, see https://www.unicode.org/terms_of_use.html
      #
      # Unicode Character Database
      #   For documentation, see https://www.unicode.org/reports/tr44/
      # For more information, see:
      #   UAX #24, Unicode Script Property: https://www.unicode.org/reports/tr24/

      # ================================================

      # Property: Script

      # @missing: 0000..10FFFF; Unknown

      # ================================================

      0000..001F    ; Common # Cc  [32] <control-0000>..<control-001F>
      0020          ; Common # Zs       SPACE
    `;

    const ast = parseDataFileIntoAst(fixture);

    it("should detect equals boundary nodes with style '='", () => {
      const boundaries = ast.children.filter(isBoundaryNode);
      expect(boundaries.length).toBe(2);
      for (const b of boundaries) {
        expect(b.style).toBe("=");
      }
    });

    it("should produce the correct root children sequence", () => {
      const types = ast.children.map((c) => c.type);
      // Header comments, empty, boundary, section, boundary, section
      expect(types).toStrictEqual([
        NodeTypes.COMMENT, // # Scripts-16.0.0.txt
        NodeTypes.COMMENT, // # Date: ...
        NodeTypes.COMMENT, // # Unicode and the Unicode Logo ...
        NodeTypes.COMMENT, // # of Unicode, Inc. ...
        NodeTypes.COMMENT, // # For terms of use ...
        NodeTypes.COMMENT, // #
        NodeTypes.COMMENT, // # Unicode Character Database
        NodeTypes.COMMENT, // #   For documentation ...
        NodeTypes.COMMENT, // # For more information ...
        NodeTypes.COMMENT, // #   UAX #24 ...
        NodeTypes.EMPTY, // blank line
        NodeTypes.BOUNDARY, // # ====...
        NodeTypes.SECTION, // property section
        NodeTypes.BOUNDARY, // # ====...
        NodeTypes.SECTION, // data section
      ]);
    });

    it("should have boundary type value", () => {
      const boundary = ast.children.find(isBoundaryNode);
      expect(boundary?.type).toBe(NodeTypes.BOUNDARY);
    });
  });

  describe("dash boundary (-)", () => {
    const fixture = dedent`
      # TestFile-1.0.0.txt
      # Some header comment
      #
      # -----------------------------------------------
      # Section content here
      0041; C; 0061; # LATIN CAPITAL LETTER A
    `;

    const ast = parseDataFileIntoAst(fixture);

    it("should detect dash boundary with style '-'", () => {
      const boundaries = ast.children.filter(isBoundaryNode);
      expect(boundaries.length).toBe(1);
      expect(boundaries[0].style).toBe("-");
    });
  });

  describe("hash boundary (#)", () => {
    const fixture = dedent`
      # TestFile-2.0.0.txt
      # Another header comment
      #
      # ###############################################
      # Section content here
      0041; C; 0061; # LATIN CAPITAL LETTER A
    `;

    const ast = parseDataFileIntoAst(fixture);

    it("should detect hash boundary with style '#'", () => {
      const boundaries = ast.children.filter(isBoundaryNode);
      expect(boundaries.length).toBe(1);
      expect(boundaries[0].style).toBe("#");
    });
  });

  describe("mixed boundary styles", () => {
    it.each([
      { line: "# ===========================", expected: "=" },
      { line: "# ---------------------------", expected: "-" },
      { line: "# ###########################", expected: "#" },
    ] as const)("should detect '$line' as style '$expected'", ({ line, expected }) => {
      const fixture = dedent`
        # Test.txt
        ${line}
        0041; Data
      `;
      const ast = parseDataFileIntoAst(fixture);
      const boundary = ast.children.find(isBoundaryNode);
      expect(boundary).toBeDefined();
      expect(boundary!.style).toBe(expected);
    });
  });
});
