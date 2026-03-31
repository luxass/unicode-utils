import { dedent } from "@luxass/utils";
import { describe, expect, it } from "vitest";

import { parseDataFileIntoAst } from "../../src/datafile/parser";
import { isSectionNode } from "../../src/datafile/typeguards";

describe("routing — named fields via custom data", () => {
  it("scripts.txt: fields are named 'range' and 'script'", () => {
    const content = dedent`
      # Scripts-16.0.0.txt
      #
      # Basic Latin
      0000..007F; Latin
      0041; Latin
    `;
    const root = parseDataFileIntoAst(content);
    const section = root.children.filter(isSectionNode)[0];
    expect(section.records[0].parsedFields![0]!.name).toBe("range");
    expect(section.records[0].parsedFields![1]!.name).toBe("script");
  });

  it("bidiBrackets.txt: fields are named 'codepoint', 'paired_bracket', 'bracket_type'", () => {
    const content = dedent`
      # BidiBrackets-16.0.0.txt
      #
      # Open brackets
      0028; 0029; o
      0029; 0028; c
    `;
    const root = parseDataFileIntoAst(content);
    const section = root.children.filter(isSectionNode)[0];
    const fields = section.records[0].parsedFields!;
    expect(fields[0]!.name).toBe("codepoint");
    expect(fields[1]!.name).toBe("paired_bracket");
    expect(fields[2]!.name).toBe("bracket_type");
    expect(fields[2]!.value).toBe("o");
  });

  it("unknown file falls back to generic field_0 names", () => {
    const content = dedent`
      # SomeFutureFile-1.0.0.txt
      #
      # Section
      0041; SomeValue
    `;
    const root = parseDataFileIntoAst(content);
    const section = root.children.filter(isSectionNode)[0];
    expect(section.records[0].parsedFields![0]!.name).toBe("field_0");
  });

  it("blocks.txt: fields are named 'range' and 'name'", () => {
    const content = dedent`
      # Blocks-16.0.0.txt
      #
      # Blocks
      0000..007F; Basic Latin
    `;
    const root = parseDataFileIntoAst(content);
    const section = root.children.filter(isSectionNode)[0];
    expect(section.records[0].parsedFields![0]!.name).toBe("range");
    expect(section.records[0].parsedFields![1]!.name).toBe("name");
  });

  it("unicodeData.txt: first field is 'codepoint', has 15 fields", () => {
    const content = "0000;NULL;Cc;0;BN;;;;;N;;;;;";
    const root = parseDataFileIntoAst(content, { fileName: "UnicodeData" });
    const section = root.children.filter(isSectionNode)[0];
    const fields = section.records[0].parsedFields!;
    expect(fields[0]!.name).toBe("codepoint");
    expect(fields[1]!.name).toBe("name");
    expect(fields.length).toBe(15);
  });

  it("caseFolding.txt: mapping field is multi-codepoint", () => {
    const content = dedent`
      # CaseFolding-16.0.0.txt
      #
      # Case Folding
      00DF; F; 0073 0073; # LATIN SMALL LETTER SHARP S
    `;
    const root = parseDataFileIntoAst(content);
    const section = root.children.filter(isSectionNode)[0];
    const mapping = section.records[0].parsedFields![2]!;
    expect(mapping.name).toBe("mapping");
    expect(mapping.value).toEqual(["0073", "0073"]);
  });

  it("specialCasing.txt: optional condition_list field may be absent", () => {
    const content = dedent`
      # SpecialCasing-16.0.0.txt
      #
      # Special casings
      00DF; 00DF; 0053 0073; 0053 0053;
      0130; 0069 0307; 0130; 0130; tr
    `;
    const root = parseDataFileIntoAst(content);
    const section = root.children.filter(isSectionNode)[0];
    // First record has no condition_list
    const firstCondition = section.records[0].parsedFields!.find(
      (f) => f.name === "condition_list",
    );
    expect(firstCondition?.value).toBeUndefined();
    // Second record has a condition_list
    const secondCondition = section.records[1].parsedFields!.find(
      (f) => f.name === "condition_list",
    );
    expect(secondCondition?.value).toBe("tr");
  });

  it("propertyAliases.txt: optional additional_alias field", () => {
    const content = dedent`
      # PropertyAliases-16.0.0.txt
      #
      # Property Aliases
      ccc; Canonical_Combining_Class
      dt ; Decomposition_Type; Decomposition_Mapping
    `;
    const root = parseDataFileIntoAst(content);
    const section = root.children.filter(isSectionNode)[0];
    // First record has 2 fields + optional absent
    const first = section.records[0].parsedFields!;
    expect(first.find((f) => f.name === "short_alias")?.value).toBe("ccc");
    expect(first.find((f) => f.name === "additional_alias")?.value).toBeUndefined();
    // Second record has the additional alias
    const second = section.records[1].parsedFields!;
    expect(second.find((f) => f.name === "additional_alias")?.value).toBe("Decomposition_Mapping");
  });
});
