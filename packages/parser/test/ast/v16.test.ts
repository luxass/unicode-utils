import { describe, expect, it } from "vitest";
import { isSectionNode } from "../../src/datafile/typeguards";
import { parseDataFileIntoAst } from "../../src/datafile/parser";
import { ucdFiles } from "../__utils";

describe("v16.0.0 - AST structure", () => {
  describe("Scripts.txt", () => {
    const ast = parseDataFileIntoAst(ucdFiles("v16.0.0", "Scripts.txt"));

    it("should have the correct fileName and version", () => {
      expect(ast.fileName).toBe("Scripts");
      expect(ast.version).toBe("16.0.0");
    });

    it("should contain section nodes", () => {
      const sections = ast.children.filter(isSectionNode);
      expect(sections.length).toBeGreaterThan(0);
    });

    it("each section should have records", () => {
      const sections = ast.children.filter(isSectionNode);
      for (const section of sections) {
        expect(section.records.length).toBeGreaterThan(0);
      }
    });
  });

  describe("DerivedAge.txt", () => {
    const ast = parseDataFileIntoAst(ucdFiles("v16.0.0", "DerivedAge.txt"));

    it("should have the correct fileName and version", () => {
      expect(ast.fileName).toBe("DerivedAge");
      expect(ast.version).toBe("16.0.0");
    });

    it("should contain section nodes", () => {
      const sections = ast.children.filter(isSectionNode);
      expect(sections.length).toBeGreaterThan(0);
    });
  });

  describe("Blocks.txt", () => {
    const ast = parseDataFileIntoAst(ucdFiles("v16.0.0", "Blocks.txt"));

    it("should have the correct fileName and version", () => {
      expect(ast.fileName).toBe("Blocks");
      expect(ast.version).toBe("16.0.0");
    });

    it("should contain section nodes", () => {
      const sections = ast.children.filter(isSectionNode);
      expect(sections.length).toBeGreaterThan(0);
    });
  });

  describe("UnicodeData.txt", () => {
    const ast = parseDataFileIntoAst(ucdFiles("v16.0.0", "UnicodeData.txt"));

    it("should have the correct fileName and version", () => {
      expect(ast.fileName).toBe("UnicodeData");
      expect(ast.version).toBe("16.0.0");
    });

    it("should contain section nodes with records", () => {
      const sections = ast.children.filter(isSectionNode);
      expect(sections.length).toBeGreaterThan(0);
      expect(sections[0]?.records.length).toBeGreaterThan(0);
    });
  });
});
