import { existsSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import {
  isBoundaryNode,
  isDataNode,
  isMissingAnnotationNode,
  isSectionNode,
  isUnknownNode,
} from "../../src/ast";
import { parseDataFileIntoAst } from "../../src/parser";
import { ucdFiles } from "../__utils";

const VERSIONS = ["v4.1.0", "v5.0.0", "v10.0.0", "v16.0.0", "v17.0.0", "v18.0.0"];

function hasFixture(version: string, file: string): boolean {
  return existsSync(join(__dirname, "../../../../ucd-files", version, file));
}

describe.each(VERSIONS)("%s", (version) => {
  describe("Scripts.txt", () => {
    const ast = parseDataFileIntoAst(ucdFiles(version, "Scripts.txt"));

    it("should have fileName and version", () => {
      expect(ast.fileName).toBe("Scripts");
      expect(ast.version).toBeDefined();
    });

    it("should have at least one BoundaryNode", () => {
      const boundaries = ast.children.filter(isBoundaryNode);
      expect(boundaries.length).toBeGreaterThanOrEqual(1);
    });

    it("should have at least one SectionNode", () => {
      const sections = ast.children.filter(isSectionNode);
      expect(sections.length).toBeGreaterThanOrEqual(1);
    });

    it("should have DataNodes inside sections", () => {
      const sections = ast.children.filter(isSectionNode);
      const dataSection = sections.find((s) => s.children.some(isDataNode));
      expect(dataSection).toBeDefined();

      const dataNodes = dataSection!.children.filter(isDataNode);
      expect(dataNodes.length).toBeGreaterThan(0);
    });

    it("should have valid DataNode fields", () => {
      const sections = ast.children.filter(isSectionNode);
      const dataSection = sections.find((s) => s.children.some(isDataNode))!;
      const data = dataSection.children.find(isDataNode)!;

      expect(data.fields.length).toBeGreaterThanOrEqual(2);
      expect(data.codepointRaw).toBeTruthy();
      expect(data.codepoint).toHaveLength(2);
    });

    it("should not have UnknownNode inside sections", () => {
      const sections = ast.children.filter(isSectionNode);
      for (const section of sections) {
        const unknowns = section.children.filter(isUnknownNode);
        expect(unknowns).toHaveLength(0);
      }
    });
  });

  describe("Blocks.txt", () => {
    const ast = parseDataFileIntoAst(ucdFiles(version, "Blocks.txt"));

    it("should have fileName and version", () => {
      expect(ast.fileName).toBe("Blocks");
      expect(ast.version).toBeDefined();
    });

    it("should have boundaries and sections", () => {
      expect(ast.children.filter(isBoundaryNode).length).toBeGreaterThanOrEqual(1);
      expect(ast.children.filter(isSectionNode).length).toBeGreaterThanOrEqual(1);
    });

    it("should have DataNodes with range code points", () => {
      const sections = ast.children.filter(isSectionNode);
      const dataSection = sections.find((s) => s.children.some(isDataNode))!;
      const data = dataSection.children.find(isDataNode)!;

      expect(data.codepointRaw).toContain("..");
      expect(data.codepoint[0]).not.toBe(data.codepoint[1]);
      expect(data.fields).toHaveLength(2);
    });

    it("should have DataNodes without inline comments", () => {
      const sections = ast.children.filter(isSectionNode);
      const dataSection = sections.find((s) => s.children.some(isDataNode))!;
      const data = dataSection.children.find(isDataNode)!;

      expect(data.comment).toBeUndefined();
    });
  });

  describe("CaseFolding.txt", () => {
    const ast = parseDataFileIntoAst(ucdFiles(version, "CaseFolding.txt"));

    it("should have fileName and version", () => {
      expect(ast.fileName).toBe("CaseFolding");
      expect(ast.version).toBeDefined();
    });

    it("should have boundaries and sections", () => {
      expect(ast.children.filter(isBoundaryNode).length).toBeGreaterThanOrEqual(1);
      expect(ast.children.filter(isSectionNode).length).toBeGreaterThanOrEqual(1);
    });

    it("should have DataNodes with inline comments", () => {
      const sections = ast.children.filter(isSectionNode);
      const dataSection = sections.find((s) => s.children.some(isDataNode))!;
      const data = dataSection.children.find(isDataNode)!;

      expect(data.fields.length).toBeGreaterThanOrEqual(3);
      expect(data.comment).toBeDefined();
    });
  });

  describe("DerivedAge.txt", () => {
    const ast = parseDataFileIntoAst(ucdFiles(version, "DerivedAge.txt"));

    it("should have fileName and version", () => {
      expect(ast.fileName).toBe("DerivedAge");
      expect(ast.version).toBeDefined();
    });

    it("should have multiple boundaries (subsections)", () => {
      const boundaries = ast.children.filter(isBoundaryNode);
      expect(boundaries.length).toBeGreaterThanOrEqual(2);
    });

    it("should have multiple sections", () => {
      const sections = ast.children.filter(isSectionNode);
      expect(sections.length).toBeGreaterThanOrEqual(2);
    });

    it("should have a @missing annotation if present", () => {
      const sections = ast.children.filter(isSectionNode);
      const sectionWithMissing = sections.find((s) => s.children.some(isMissingAnnotationNode));

      // Older versions (v4.1.0) predate the @missing convention
      if (sectionWithMissing) {
        const missing = sectionWithMissing.children.find(isMissingAnnotationNode)!;
        expect(missing.annotation).not.toBeNull();
        expect(missing.annotation!.start).toBe("0000");
        expect(missing.annotation!.end).toBe("10FFFF");
      }
    });
  });

  describe("ArabicShaping.txt", () => {
    const ast = parseDataFileIntoAst(ucdFiles(version, "ArabicShaping.txt"));

    it("should have fileName and version", () => {
      expect(ast.fileName).toBe("ArabicShaping");
      expect(ast.version).toBeDefined();
    });

    it("should have DataNodes with 4 fields", () => {
      const sections = ast.children.filter(isSectionNode);
      const dataSection = sections.find((s) => s.children.some(isDataNode))!;
      const data = dataSection.children.find(isDataNode)!;

      expect(data.fields).toHaveLength(4);
    });
  });

  describe("BidiBrackets.txt", () => {
    it.skipIf(!hasFixture(version, "BidiBrackets.txt"))("should parse correctly", () => {
      const ast = parseDataFileIntoAst(ucdFiles(version, "BidiBrackets.txt"));

      expect(ast.fileName).toBe("BidiBrackets");

      // Older versions may not have boundaries
      const sections = ast.children.filter(isSectionNode);
      if (sections.length > 0) {
        const sectionWithMissing = sections.find((s) => s.children.some(isMissingAnnotationNode));

        if (sectionWithMissing) {
          const missing = sectionWithMissing.children.find(isMissingAnnotationNode)!;
          expect(missing.annotation).not.toBeNull();
          expect(missing.annotation!.propertyName).toBe("Bidi_Paired_Bracket_Type");
          expect(missing.annotation!.defaultPropertyValue).toBe("n");
        }
      }
    });
  });

  describe("PropertyValueAliases.txt", () => {
    const ast = parseDataFileIntoAst(ucdFiles(version, "PropertyValueAliases.txt"));

    it("should have at least one boundary and section", () => {
      expect(ast.children.filter(isBoundaryNode).length).toBeGreaterThanOrEqual(1);
      expect(ast.children.filter(isSectionNode).length).toBeGreaterThanOrEqual(1);
    });

    it("should have DataNodes with at least 3 fields", () => {
      const sections = ast.children.filter(isSectionNode);
      const dataSection = sections.find((s) => s.children.some(isDataNode))!;
      const data = dataSection.children.find(isDataNode)!;

      expect(data.fields.length).toBeGreaterThanOrEqual(3);
    });
  });

  describe("NameAliases.txt", () => {
    it.skipIf(!hasFixture(version, "NameAliases.txt"))("should parse with 3-field data", () => {
      const ast = parseDataFileIntoAst(ucdFiles(version, "NameAliases.txt"));

      expect(ast.fileName).toBe("NameAliases");

      const sections = ast.children.filter(isSectionNode);
      if (sections.length > 0) {
        const dataSection = sections.find((s) => s.children.some(isDataNode));
        if (dataSection) {
          const data = dataSection.children.find(isDataNode)!;
          expect(data.fields.length).toBeGreaterThanOrEqual(2);
        }
      }
    });
  });
});
