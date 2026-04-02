import { dedent } from "@luxass/utils";
import { describe, expect, it } from "vitest";

import { DataFile } from "../../src/models/data-file";
import { parseDataFileIntoAst } from "../../src/parser";
import { ucdFiles } from "../__utils";

describe("DataFile", () => {
  const fixture = dedent`
    # Scripts-16.0.0.txt
    # Date: 2024-04-30
    #
    # Unicode Character Database
    #   For documentation, see https://www.unicode.org/reports/tr44/

    # ================================================

    # Property:	Script
    #
    #  All code points not explicitly listed for Script
    #  have the value Unknown (Zzzz).

    # @missing: 0000..10FFFF; Unknown

    # ================================================

    0000..001F    ; Common # Cc  [32] <control-0000>..<control-001F>
    0020          ; Common # Zs       SPACE
    0021..0023    ; Common # Po   [3] EXCLAMATION MARK..NUMBER SIGN
  `;

  const ast = parseDataFileIntoAst(fixture);
  const file = new DataFile(ast);

  describe("sections()", () => {
    it("should return all SectionNodes", () => {
      const sections = file.sections();
      expect(sections.length).toBe(2);
      for (const s of sections) {
        expect(s.type).toBe("section");
      }
    });
  });

  describe("boundaries()", () => {
    it("should return all BoundaryNodes", () => {
      const boundaries = file.boundaries();
      expect(boundaries.length).toBe(2);
      for (const b of boundaries) {
        expect(b.type).toBe("boundary");
        expect(b.style).toBe("=");
      }
    });
  });

  describe("dataNodes()", () => {
    it("should return flattened DataNodes from all sections", () => {
      const dataNodes = file.dataNodes();
      expect(dataNodes.length).toBe(3);
      for (const d of dataNodes) {
        expect(d.type).toBe("data");
      }
    });

    it("should have parsed fields on each DataNode", () => {
      const first = file.dataNodes().find((d) => d.codepointRaw === "0000..001F");
      expect(first).toBeDefined();
      expect(first?.fields).toEqual(["0000..001F", "Common"]);
    });
  });

  describe("missingAnnotations()", () => {
    it("should return flattened MissingAnnotationNodes from all sections", () => {
      const missing = file.missingAnnotations();
      expect(missing.length).toBe(1);

      const first = missing[0];
      expect(first).toBeDefined();
      expect(first?.type).toBe("missing");
      expect(first?.annotation).not.toBeNull();
      expect(first?.annotation?.defaultPropertyValue).toBe("Unknown");
    });
  });

  describe("flat file (no boundaries)", () => {
    const flatAst = parseDataFileIntoAst("# Just a comment\n0041; Data");
    const flatFile = new DataFile(flatAst);

    it("should return empty sections", () => {
      expect(flatFile.sections()).toEqual([]);
    });

    it("should return empty boundaries", () => {
      expect(flatFile.boundaries()).toEqual([]);
    });

    it("should return empty dataNodes", () => {
      expect(flatFile.dataNodes()).toEqual([]);
    });

    it("should return empty missingAnnotations", () => {
      expect(flatFile.missingAnnotations()).toEqual([]);
    });
  });

  describe("real fixture files", () => {
    it("should query v16.0.0/Scripts.txt", () => {
      const scriptsAst = parseDataFileIntoAst(ucdFiles("v16.0.0", "Scripts.txt"));
      const scriptsFile = new DataFile(scriptsAst);

      expect(scriptsFile.sections().length).toBeGreaterThan(0);
      expect(scriptsFile.boundaries().length).toBeGreaterThan(0);
      expect(scriptsFile.dataNodes().length).toBeGreaterThan(0);
      expect(scriptsFile.missingAnnotations().length).toBeGreaterThan(0);
    });

    it("should query v16.0.0/Blocks.txt", () => {
      const blocksAst = parseDataFileIntoAst(ucdFiles("v16.0.0", "Blocks.txt"));
      const blocksFile = new DataFile(blocksAst);

      const dataNodes = blocksFile.dataNodes();
      expect(dataNodes.length).toBeGreaterThan(100);
      // Blocks have range code points and no inline comments
      const first = dataNodes[0];
      expect(first?.codepointRaw).toContain("..");
      expect(first?.comment).toBeUndefined();
    });
  });
});
