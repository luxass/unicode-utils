import { dedent } from "@luxass/utils";
import { describe, expect, it } from "vitest";
import { parseDataFileHeading, RawDataFile } from "../src/data-files";

describe("parseDataFileHeading", () => {
  it("should return undefined for empty input", () => {
    expect(parseDataFileHeading("")).toBeUndefined();
  });

  it("should return undefined for null input", () => {
    expect(parseDataFileHeading(null as any)).toBeUndefined();
  });

  it("should return undefined when no heading is present", () => {
    const content = dedent`
      This is some content
      without any heading
    `;
    expect(parseDataFileHeading(content)).toBeUndefined();
  });

  it("should parse a single line heading", () => {
    const content = dedent`
      # This is a heading
    `;
    expect(parseDataFileHeading(content)).toBe("# This is a heading");
  });

  it("should parse a multi-line heading", () => {
    const content = dedent`
      # This is a heading
      # This is still part of the heading
    `;
    expect(parseDataFileHeading(content)).toBe(dedent`
      # This is a heading
      # This is still part of the heading
    `);
  });

  it("should stop parsing at empty line", () => {
    const content = dedent`
      # This is a heading

      # This is not part of the heading
    `;
    expect(parseDataFileHeading(content)).toBe("# This is a heading");
  });

  it("should stop parsing at non-comment line", () => {
    const content = dedent`
      # This is a heading
      This is not a heading
      # This should not be included
    `;
    expect(parseDataFileHeading(content)).toBe("# This is a heading");
  });

  it("should stop parsing when encountering # followed by multiple #", () => {
    const content = dedent`
      # This is a heading
      # ####
      # This should not be included
    `;
    expect(parseDataFileHeading(content)).toBe(dedent`
      # This is a heading
      # ####
    `);
  });

  it("should stop parsing when encountering # followed by multiple =", () => {
    const content = dedent`
      # This is a heading
      # ====
      # This should not be included
    `;
    expect(parseDataFileHeading(content)).toBe(dedent`
      # This is a heading
      # ====
    `);
  });

  it("should handle whitespace after #", () => {
    const content = dedent`
      #  This has extra spaces
      # This has a tab
    `;
    expect(parseDataFileHeading(content)).toBe(dedent`
      #  This has extra spaces
      # This has a tab
    `);
  });

  it("should not include lines that do not start with \"# \"", () => {
    const content = dedent`
      # This is a heading
      #This has no space
      # This is still part of the heading
    `;
    expect(parseDataFileHeading(content)).toBe("# This is a heading");
  });

  it("should handle content with mixed comment and non-comment lines", () => {
    const content = dedent`
      Some initial text
      # This is a heading
      # More heading
      Non-heading text
    `;
    expect(parseDataFileHeading(content)).toBe(dedent`
      # This is a heading
      # More heading
    `);
  });

  it("should properly detect heading end with hash followed by equals", () => {
    const content = dedent`
      # Heading start
      # =========
      Regular content
    `;
    expect(parseDataFileHeading(content)).toBe(dedent`
      # Heading start
      # =========
    `);
  });

  it("should handle heading with special characters", () => {
    const content = dedent`
      # Special chars: !@#$%^&*()_+{}[]|\\:;"'<>,.?/
    `;
    expect(parseDataFileHeading(content)).toBe("# Special chars: !@#$%^&*()_+{}[]|\\:;\"'<>,.?/");
  });

  it("should return undefined when content has only non-comment lines", () => {
    const content = dedent`
      First line
      Second line
      Third line
    `;
    expect(parseDataFileHeading(content)).toBeUndefined();
  });

  it("should handle multi-paragraph heading example", () => {
    const content = dedent`
      # Document Title
      #
      # This is a multi-paragraph header
      # with several lines of content
      #
      # It includes multiple sections

      This is the main content.
    `;
    expect(parseDataFileHeading(content)).toBe(dedent`
      # Document Title
      #
      # This is a multi-paragraph header
      # with several lines of content
      #
      # It includes multiple sections
    `);
  });

  it("should handle code examples in headers", () => {
    const content = dedent`
      # Function usage:
      # parseHeading('# Header')

      Regular content starts here
    `;
    expect(parseDataFileHeading(content)).toBe(dedent`
      # Function usage:
      # parseHeading('# Header')
    `);
  });

  it("should handle URLs in headers", () => {
    const content = dedent`
      # See documentation at:
      # https://example.com/docs

      Content below
    `;
    expect(parseDataFileHeading(content)).toBe(dedent`
      # See documentation at:
      # https://example.com/docs
    `);
  });
});

// eslint-disable-next-line test/prefer-lowercase-title
describe("RawDataFile", () => {
  it("should initialize with content", () => {
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

  it("should handle content without heading", () => {
    const content = "line1\nline2\nline3";
    const dataFile = new RawDataFile(content);

    expect(() => dataFile.heading).toThrowError("heading is not set");
  });

  it("should parse multi-line heading", () => {
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
});
