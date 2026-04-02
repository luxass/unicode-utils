import { dedent } from "@luxass/utils";
import { describe, expect, it } from "vitest";

import { isMissingAnnotationNode, isSectionNode } from "../../src/ast";
import { parseDataFileIntoAst } from "../../src/parser";

describe("MissingAnnotationNode", () => {
  describe("three-field form (property name + default value)", () => {
    const fixture = dedent`
      # BidiBrackets-16.0.0.txt
      # Date: 2024-02-02
      # Unicode and the Unicode Logo are registered trademarks
      # of Unicode, Inc. in the U.S. and other countries.
      #
      # Unicode Character Database
      # For documentation, see https://www.unicode.org/reports/tr44/
      #
      # Bidi_Paired_Bracket and Bidi_Paired_Bracket_Type Properties
      #
      # Format:
      # <code>; <paired bracket>; <type>
      #
      # ================================================

      # @missing: 0000..10FFFF; Bidi_Paired_Bracket_Type; n

      # ================================================

      0028; 0029; o # LEFT PARENTHESIS
    `;

    const ast = parseDataFileIntoAst(fixture);

    it("should parse three-field @missing annotation", () => {
      const sections = ast.children.filter(isSectionNode);
      expect(sections.length).toBeGreaterThanOrEqual(1);

      const firstSection = sections[0];
      const missingNodes = firstSection.children.filter(isMissingAnnotationNode);
      expect(missingNodes.length).toBe(1);

      const annotation = missingNodes[0].annotation;
      expect(annotation).not.toBeNull();
      expect(annotation!.start).toBe("0000");
      expect(annotation!.end).toBe("10FFFF");
      expect(annotation!.propertyName).toBe("Bidi_Paired_Bracket_Type");
      expect(annotation!.defaultPropertyValue).toBe("n");
    });
  });

  describe("two-field form (default value only)", () => {
    const fixture = dedent`
      # Scripts-16.0.0.txt
      # Date: 2024-04-30
      #
      # ================================================

      # @missing: 0000..10FFFF; Unknown

      # ================================================

      0000..001F    ; Common # Cc  [32]
    `;

    const ast = parseDataFileIntoAst(fixture);

    it("should parse two-field @missing annotation with no propertyName", () => {
      const firstSection = ast.children.find(isSectionNode)!;
      const missingNodes = firstSection.children.filter(isMissingAnnotationNode);
      expect(missingNodes.length).toBe(1);

      const annotation = missingNodes[0].annotation;
      expect(annotation).not.toBeNull();
      expect(annotation!.start).toBe("0000");
      expect(annotation!.end).toBe("10FFFF");
      expect(annotation!.propertyName).toBeUndefined();
      expect(annotation!.defaultPropertyValue).toBe("Unknown");
    });
  });

  describe("special tag <script>", () => {
    const fixture = dedent`
      # ScriptExtensions-16.0.0.txt
      # Date: 2024-07-30
      #
      # All code points not explicitly listed for Script_Extensions
      # have as their value the corresponding Script property value.
      #
      # ================================================

      # @missing: 0000..10FFFF; <script>

      00B7          ; Avst Cari Copt # Po MIDDLE DOT
    `;

    const ast = parseDataFileIntoAst(fixture);

    it("should parse @missing with <script> special tag", () => {
      const firstSection = ast.children.find(isSectionNode)!;
      const missingNodes = firstSection.children.filter(isMissingAnnotationNode);
      expect(missingNodes.length).toBe(1);

      const annotation = missingNodes[0].annotation;
      expect(annotation).not.toBeNull();
      expect(annotation!.start).toBe("0000");
      expect(annotation!.end).toBe("10FFFF");
      expect(annotation!.defaultPropertyValue).toBe("<script>");
      expect(annotation!.specialTag).toBe("script");
    });
  });

  describe("multiple @missing lines in one section", () => {
    const fixture = dedent`
      # TestFile-15.0.0.txt
      # Multiple missing annotations (valid since Unicode 15.0)
      #
      # ================================================

      # @missing: 0000..10FFFF; Script; Unknown
      # @missing: 0000..10FFFF; Script_Extensions; <script>

      # ================================================

      0041; Latin
    `;

    const ast = parseDataFileIntoAst(fixture);

    it("should parse multiple @missing annotations in a single section", () => {
      const firstSection = ast.children.find(isSectionNode)!;
      const missingNodes = firstSection.children.filter(isMissingAnnotationNode);
      expect(missingNodes.length).toBe(2);

      expect(missingNodes[0].annotation!.propertyName).toBe("Script");
      expect(missingNodes[0].annotation!.defaultPropertyValue).toBe("Unknown");

      expect(missingNodes[1].annotation!.propertyName).toBe("Script_Extensions");
      expect(missingNodes[1].annotation!.defaultPropertyValue).toBe("<script>");
      expect(missingNodes[1].annotation!.specialTag).toBe("script");
    });
  });

  describe("@missing annotation raw and value", () => {
    const fixture = dedent`
      # Test-1.0.0.txt
      # ================================================

      # @missing: 0000..10FFFF; Unknown
    `;

    const ast = parseDataFileIntoAst(fixture);

    it("should preserve raw line and trim value", () => {
      const section = ast.children.find(isSectionNode)!;
      const missing = section.children.find(isMissingAnnotationNode)!;
      expect(missing.raw).toBe("# @missing: 0000..10FFFF; Unknown");
      expect(missing.value).toBe("@missing: 0000..10FFFF; Unknown");
    });
  });
});
