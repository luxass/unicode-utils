import { dedent } from "@luxass/utils";
import { describe, expect, it } from "vitest";
import { parseDataFileIntoAst } from "../../src/datafile/parser";
import { stringifyAst } from "../../src/datafile/stringify";
import { isSectionNode } from "../../src/datafile/typeguards";
import type { SectionNode } from "../../src/datafile/ast";

const HEADING_AND_SECTIONS = dedent`
  # Scripts-16.0.0.txt
  # Date: 2024-01-01
  #
  # Basic Latin
  0000..007F; Latin
  # Greek
  0370..03FF; Greek
`;

const WITH_EOF = dedent`
  # Blocks-1.0.0.txt
  #
  # Section
  0000..007F; Basic Latin
  # EOF
`;

const WITH_MISSING = dedent`
  # DerivedAge-1.0.0.txt
  #
  # @missing: 0000..10FFFF; Unassigned
  # Version 1.1
  0041; 1.1
`;

describe("stringifyAst", () => {
  it("round-trips a simple file back to equivalent text", () => {
    const root = parseDataFileIntoAst(HEADING_AND_SECTIONS);
    const output = stringifyAst(root);
    const reparsed = parseDataFileIntoAst(output);
    const sections = reparsed.children.filter(isSectionNode);
    expect(sections).toHaveLength(2);
    expect(sections[0]!.name).toBe("Basic Latin");
    expect(sections[1]!.name).toBe("Greek");
  });

  it("preserves heading comment nodes verbatim", () => {
    const root = parseDataFileIntoAst(HEADING_AND_SECTIONS);
    const output = stringifyAst(root);
    expect(output).toContain("# Scripts-16.0.0.txt");
    expect(output).toContain("# Date: 2024-01-01");
  });

  it("preserves the EOF marker when present", () => {
    const root = parseDataFileIntoAst(WITH_EOF);
    const output = stringifyAst(root);
    expect(output).toContain("# EOF");
  });

  it("emits @missing annotation lines before section data", () => {
    const root = parseDataFileIntoAst(WITH_MISSING);
    const output = stringifyAst(root);
    expect(output).toContain("# @missing: 0000..10FFFF; Unassigned");
  });

  it("emits section name as a comment header", () => {
    const root = parseDataFileIntoAst(HEADING_AND_SECTIONS);
    const output = stringifyAst(root);
    expect(output).toContain("# Basic Latin");
    expect(output).toContain("# Greek");
  });

  it("falls back to node.raw for nodes without parsedFields", () => {
    const root = parseDataFileIntoAst(HEADING_AND_SECTIONS, { groupSections: false });
    const output = stringifyAst(root);
    expect(output).toContain("0000..007F; Latin");
    expect(output).toContain("0370..03FF; Greek");
  });

  it("uses modified field value, not rawValue, when value has been changed", () => {
    const root = parseDataFileIntoAst(HEADING_AND_SECTIONS);
    const section = root.children.find(isSectionNode) as SectionNode;
    section.records[0]!.parsedFields![1]!.value = "Coptic";
    const output = stringifyAst(root);
    expect(output).toContain("Coptic");
  });

  it("emitEOF option appends # EOF even when not in the original", () => {
    const root = parseDataFileIntoAst(HEADING_AND_SECTIONS);
    const output = stringifyAst(root, { emitEOF: true });
    expect(output.trimEnd()).toMatch(/# EOF$/);
  });
});
