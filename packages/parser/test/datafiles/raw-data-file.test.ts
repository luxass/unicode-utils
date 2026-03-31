import { dedent } from "@luxass/utils";
import { describe, expect, it, vi } from "vitest";
import { RawDataFile } from "../../src/datafile/model";
import { isSectionNode } from "../../src/datafile/typeguards";

const SCRIPTS_CONTENT = dedent`
  # Scripts-16.0.0.txt
  # Date: 2024-01-01
  #
  # Basic Latin
  0000..007F; Latin
  # Greek
  0370..03FF; Greek
  # EOF
`;

describe("rawDataFile constructor", () => {
  it("parses content and exposes fileName and version", () => {
    const raw = new RawDataFile(SCRIPTS_CONTENT);
    expect(raw.fileName).toBe("Scripts");
    expect(raw.version).toBe("16.0.0");
  });

  it("exposes hasEOF", () => {
    const raw = new RawDataFile(SCRIPTS_CONTENT);
    expect(raw.hasEOF).toBe(true);
  });

  it("exposes the AST root node with SectionNodes", () => {
    const raw = new RawDataFile(SCRIPTS_CONTENT);
    expect(raw.ast).toBeDefined();
    expect(raw.ast.type).toBe("root");
    const sections = raw.ast.children.filter(isSectionNode);
    expect(sections.length).toBeGreaterThan(0);
  });

  it("throws on empty content", () => {
    expect(() => new RawDataFile("")).toThrow();
    expect(() => new RawDataFile("   ")).toThrow();
  });

  it("accepts an explicit fileName override", () => {
    const raw = new RawDataFile("# Blocks-16.0.0.txt\n# S\n0000..007F; Basic Latin", { fileName: "Blocks" });
    expect(raw.fileName).toBe("Blocks");
  });
});

describe("rawDataFile.from()", () => {
  it("fetches content from a URL using a custom fetch", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      text: async () => SCRIPTS_CONTENT,
    });
    const raw = await RawDataFile.from("https://example.com/Scripts.txt", { fetch: mockFetch as any });
    expect(mockFetch).toHaveBeenCalledOnce();
    expect(raw.fileName).toBe("Scripts");
    expect(raw.version).toBe("16.0.0");
  });

  it("infers fileName from URL path when not provided", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      text: async () => SCRIPTS_CONTENT,
    });
    const raw = await RawDataFile.from("https://unicode.org/Public/16.0.0/ucd/Scripts.txt", { fetch: mockFetch as any });
    expect(raw.fileName).toBe("Scripts");
  });

  it("throws when the response is not ok", async () => {
    const mockFetch = vi.fn().mockResolvedValue({ ok: false, status: 404, statusText: "Not Found" });
    await expect(
      RawDataFile.from("https://example.com/Missing.txt", { fetch: mockFetch as any }),
    ).rejects.toThrow("404");
  });
});

describe("rawDataFile.stringify()", () => {
  it("round-trips content through parse and stringify", () => {
    const raw = new RawDataFile(SCRIPTS_CONTENT);
    const output = raw.stringify();
    const reparsed = new RawDataFile(output);
    expect(reparsed.fileName).toBe("Scripts");
    expect(reparsed.version).toBe("16.0.0");
  });
});

describe("rawDataFile.toDataFile()", () => {
  it("produces a DataFile", () => {
    const raw = new RawDataFile(SCRIPTS_CONTENT);
    const file = raw.toDataFile();
    expect(file.sections.length).toBeGreaterThan(0);
    expect(file.fileName).toBe("Scripts");
  });
});
