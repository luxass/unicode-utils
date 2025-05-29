import { dedent } from "@luxass/utils";
import { describe, expect, it } from "vitest";
import { RawDataFile } from "../../src/datafile/model";

// eslint-disable-next-line test/prefer-lowercase-title
describe("RawDataFile", () => {
  it.todo("should initialize with content", () => {
    const content = "# Heading\nline1\nline2";
    const dataFile = new RawDataFile(content);

    expect(dataFile.rawContent).toBe(content);
    expect(dataFile.heading).toBe("# Heading");
  });

  it("should split content into lines", () => {
    const content = "line1\nline2\nline3";
    const dataFile = new RawDataFile(content);

    expect(dataFile.lines).toEqual(["line1", "line2", "line3"]);
  });

  it.todo("should handle content without heading", () => {
    const content = "line1\nline2\nline3";
    const dataFile = new RawDataFile(content);

    expect(dataFile.heading).toBeUndefined();
  });

  it.todo("should parse multi-line heading", () => {
    const content = dedent`
      # Line 1
      # Line 2
      # Line 3

      Content starts here
    `;
    const dataFile = new RawDataFile(content);

    expect(dataFile.heading).toBe(dedent`
      # Line 1
      # Line 2
      # Line 3
    `);
  });

  it("should throw error if content is empty", () => {
    expect(() => {
      // eslint-disable-next-line no-new
      new RawDataFile("");
    }).toThrowError("content is empty");
  });

  it("should use provided fileName when specified", () => {
    const content = "# SomeFile-1.0.0.txt\nContent here";
    const dataFile = new RawDataFile(content, "ExplicitName");
    expect(dataFile.fileName).toBe("ExplicitName");
  });

  it("should infer fileName when not specified", () => {
    const content = "# SomeFile-1.0.0.txt\nContent here";
    const dataFile = new RawDataFile(content);
    expect(dataFile.fileName).toBe("SomeFile");
  });
});
