import { dedent } from "@luxass/utils";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";

import { isSectionNode } from "../../src/ast";
import { RawDataFile } from "../../src/models/raw-data-file";
import { ucdFiles } from "../__utils";

const server = setupServer();

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("RawDataFile", () => {
  describe("hasEOF", () => {
    it("should detect # EOF marker", () => {
      const fixture = dedent`
        # Test-1.0.0.txt
        # ================================================
        0041; Data
        # EOF
      `;
      const raw = new RawDataFile(fixture);
      expect(raw.hasEOF).toBe(true);
    });

    it("should detect # EOF even with trailing empty lines", () => {
      const content = "# Test-1.0.0.txt\n# ====\n0041; Data\n# EOF\n\n";
      const raw = new RawDataFile(content);
      expect(raw.hasEOF).toBe(true);
    });

    it("should be false when no EOF marker", () => {
      const fixture = dedent`
        # Test-1.0.0.txt
        # ================================================
        0041; Data
      `;
      const raw = new RawDataFile(fixture);
      expect(raw.hasEOF).toBe(false);
    });
  });

  describe("heading and content", () => {
    const fixture = dedent`
      # Scripts-16.0.0.txt
      # Date: 2024-04-30, 21:48:40 GMT
      # © 2024 Unicode®, Inc.
      #
      # Unicode Character Database
      #   For documentation, see https://www.unicode.org/reports/tr44/

      # ================================================

      # @missing: 0000..10FFFF; Unknown

      # ================================================

      0000..001F    ; Common # Cc  [32]
      0020          ; Common # Zs       SPACE
    `;

    const raw = new RawDataFile(fixture);

    it("should extract heading from the header region", () => {
      expect(raw.heading).toContain("Scripts-16.0.0.txt");
      expect(raw.heading).toContain("Date:");
    });

    it("should strip the header from content", () => {
      expect(raw.content).not.toContain("Scripts-16.0.0.txt");
      expect(raw.content).not.toContain("Date:");
    });
  });

  describe("toDataFile()", () => {
    it("should return a DataFile with query methods", () => {
      const fixture = dedent`
        # Test-1.0.0.txt
        # ================================================
        # @missing: 0000..10FFFF; Unknown
        # ================================================
        0041; Data
      `;
      const file = new RawDataFile(fixture).toDataFile();

      expect(Object.isFrozen(file.ast)).toBe(true);
      expect(file.sections().length).toBe(2);
      expect(file.boundaries().length).toBe(2);
      expect(file.dataNodes().length).toBe(1);
      expect(file.missingAnnotations().length).toBe(1);
    });
  });

  describe("fileName override", () => {
    it("should accept fileName option", () => {
      const raw = new RawDataFile("# some content\n0041; Data", { fileName: "Override" });
      expect(raw.fileName).toBe("Override");
    });
  });

  describe("from()", () => {
    const TEST_URL = "https://test.ucdjs.dev/Scripts.txt";

    it("should fetch and parse a UCD file from a URL", async () => {
      const content = dedent`
        # Scripts-16.0.0.txt
        # Date: 2024-04-30
        #
        # ================================================
        # @missing: 0000..10FFFF; Unknown
        # ================================================
        0000..001F    ; Common # Cc  [32]
      `;

      server.use(
        http.get(TEST_URL, () => {
          return HttpResponse.text(content);
        }),
      );

      const raw = await RawDataFile.from(TEST_URL);
      expect(raw.fileName).toBe("Scripts");
      expect(raw.version).toBe("16.0.0");
      expect(raw.ast.children.filter(isSectionNode).length).toBeGreaterThan(0);
    });

    it("should throw on non-OK response", async () => {
      server.use(
        http.get(TEST_URL, () => {
          return new HttpResponse(null, { status: 404, statusText: "Not Found" });
        }),
      );

      await expect(RawDataFile.from(TEST_URL)).rejects.toThrow("Failed to fetch");
    });
  });

  describe("real fixture files", () => {
    it("should parse v16.0.0/Scripts.txt with all properties", () => {
      const raw = new RawDataFile(ucdFiles("v16.0.0", "Scripts.txt"));
      expect(raw.fileName).toBe("Scripts");
      expect(raw.version).toBe("16.0.0");
      expect(raw.heading).toContain("Scripts");
      expect(raw.header.date).toBeDefined();
      expect(raw.ast.children.filter(isSectionNode).length).toBeGreaterThan(0);
    });

    it("should parse v16.0.0/Blocks.txt", () => {
      const raw = new RawDataFile(ucdFiles("v16.0.0", "Blocks.txt"));
      expect(raw.fileName).toBe("Blocks");
      expect(raw.version).toBe("16.0.0");
    });

    it("should detect EOF in files that have it", () => {
      const content = ucdFiles("v16.0.0", "Scripts.txt");
      const raw = new RawDataFile(content);
      expect(raw.hasEOF).toBe(content.includes("# EOF"));
    });
  });
});
