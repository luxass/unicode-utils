import { dedent } from "@luxass/utils";
import { describe, expect, it } from "vitest";
import { parseDataFileIntoAst } from "../../src/datafile/parser";
import { isCommentNode, isEOFNode, isSectionNode } from "../../src/datafile/typeguards";

const SIMPLE = dedent`
  # Scripts-16.0.0.txt
  # Date: 2024-01-01
  #
  # Basic Latin
  0000..007F; Latin
  0041; Latin
  #
  # Greek
  0370..03FF; Greek
`;

const FLAT = dedent`
  # Blocks-16.0.0.txt
  #
  0000..007F; Basic Latin
  0080..00FF; Latin-1 Supplement
`;

const WITH_EOF = dedent`
  # Scripts-16.0.0.txt
  #
  # Basic Latin
  0041; Latin
  # EOF
`;

const NO_SECTIONS = dedent`
  # Comment-only file
  # No data lines at all
`;

describe("parseDataFileIntoAst — SectionNode grouping", () => {
  it("emits SectionNodes for comment-preceded data groups", () => {
    const root = parseDataFileIntoAst(SIMPLE);
    const sections = root.children.filter(isSectionNode);
    expect(sections).toHaveLength(2);
    expect(sections[0]!.name).toBe("Basic Latin");
    expect(sections[1]!.name).toBe("Greek");
  });

  it("section records contain the DataNodes", () => {
    const root = parseDataFileIntoAst(SIMPLE);
    const sections = root.children.filter(isSectionNode);
    expect(sections[0]!.records).toHaveLength(2);
    expect(sections[1]!.records).toHaveLength(1);
  });

  it("dataNodes inside sections are removed from root.children", () => {
    const root = parseDataFileIntoAst(SIMPLE);
    const hasLooseData = root.children.some((c) => c.type === "data");
    expect(hasLooseData).toBe(false);
  });

  it("heading CommentNodes remain as direct children of root", () => {
    const root = parseDataFileIntoAst(SIMPLE);
    const headingComments = root.children.filter(isCommentNode);
    expect(headingComments.length).toBeGreaterThan(0);
  });

  it("eOFNode remains as a direct child of root", () => {
    const root = parseDataFileIntoAst(WITH_EOF);
    expect(root.children.some(isEOFNode)).toBe(true);
  });

  it("flat file (no section headers) produces a single section named from heading", () => {
    const root = parseDataFileIntoAst(FLAT);
    const sections = root.children.filter(isSectionNode);
    expect(sections).toHaveLength(1);
    // The heading comment "Blocks-16.0.0.txt" becomes the section name
    // because no boundary separates it from the data
    expect(sections[0]!.name).toBe("Blocks-16.0.0.txt");
  });

  it("comment-only file produces no SectionNodes", () => {
    const root = parseDataFileIntoAst(NO_SECTIONS);
    expect(root.children.filter(isSectionNode)).toHaveLength(0);
  });

  it("groupSections: false leaves the flat children untouched", () => {
    const root = parseDataFileIntoAst(SIMPLE, { groupSections: false });
    expect(root.children.filter(isSectionNode)).toHaveLength(0);
    expect(root.children.some((c) => c.type === "data")).toBe(true);
  });

  it("parsedFields are populated with named fields when a FileParser matches", () => {
    const root = parseDataFileIntoAst(SIMPLE);
    const section = root.children.filter(isSectionNode)[0]!;
    const fields = section.records[0]!.parsedFields!;
    // Scripts-16.0.0.txt resolves to SCRIPTS_PARSER → named fields
    expect(fields[0]!.name).toBe("range");
    expect(fields[1]!.name).toBe("script");
  });

  it("parsedFields use generic names for unknown files", () => {
    const content = "# UnknownFile-1.0.0.txt\n#\n# Section\n0041; Value";
    const root = parseDataFileIntoAst(content);
    const section = root.children.filter(isSectionNode)[0]!;
    const fields = section.records[0]!.parsedFields!;
    expect(fields[0]!.name).toBe("field_0");
    expect(fields[1]!.name).toBe("field_1");
  });

  it("section.missingAnnotations collects @missing lines", () => {
    const content = dedent`
      # DerivedAge-16.0.0.txt
      #
      # @missing: 0000..10FFFF; Unassigned
      # Basic Latin
      0041; 1.1
    `;
    const root = parseDataFileIntoAst(content);
    const section = root.children.filter(isSectionNode)[0]!;
    expect(section.missingAnnotations).toHaveLength(1);
    expect(section.missingAnnotations[0]!.defaultPropertyValue).toBe("Unassigned");
  });

  it("auto-coerces hex ranges in parsedFields", () => {
    const root = parseDataFileIntoAst(FLAT);
    const section = root.children.filter(isSectionNode)[0]!;
    const field0 = section.records[0]!.parsedFields![0]!;
    expect(field0.value).toEqual({ start: "0000", end: "007F" });
    expect(field0.rawValue).toBe("0000..007F");
  });
});
