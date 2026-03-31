import { describe, expect, it } from "vitest";

import { RawDataFile } from "../../src/datafile/model";

// eslint-disable-next-line test/prefer-lowercase-title
describe("RawDataFile", () => {
  it("should split content into lines", () => {
    const content = "line1\nline2\nline3";
    const dataFile = new RawDataFile(content);

    expect(dataFile.rawContent).toBe(content);
  });

  it("should throw error if content is empty", () => {
    expect(() => {
      // eslint-disable-next-line no-new
      new RawDataFile("");
    }).toThrowError("content is empty");
  });

  it("should use provided fileName when specified", () => {
    const content = "# SomeFile-1.0.0.txt\nContent here";
    const dataFile = new RawDataFile(content, { fileName: "ExplicitName" });
    expect(dataFile.fileName).toBe("ExplicitName");
  });

  it("should infer fileName when not specified", () => {
    const content = "# SomeFile-1.0.0.txt\nContent here";
    const dataFile = new RawDataFile(content);
    expect(dataFile.fileName).toBe("SomeFile");
  });

  it("exposes AST root node", () => {
    const content = "# Scripts-16.0.0.txt\n# S\n0041; Latin";
    const raw = new RawDataFile(content);
    expect(raw.ast).toBeDefined();
    expect(raw.ast.type).toBe("root");
  });

  it("exposes hasEOF", () => {
    const withEof = "# Test\n0041; Latin\n# EOF";
    const withoutEof = "# Test\n0041; Latin";
    expect(new RawDataFile(withEof).hasEOF).toBe(true);
    expect(new RawDataFile(withoutEof).hasEOF).toBe(false);
  });

  it("exposes version", () => {
    const content = "# Scripts-16.0.0.txt\n# S\n0041; Latin";
    expect(new RawDataFile(content).version).toBe("16.0.0");
  });
});
