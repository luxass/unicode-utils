import { dedent } from "@luxass/utils";
import { describe, expect, it } from "vitest";
import { NodeTypes } from "../../src/datafile/ast";
import { parseDataFileIntoAst } from "../../src/datafile/parser";

describe("parser fixtures", () => {
  it("should parse data lines correctly", () => {
    const result = parseDataFileIntoAst(dedent`
      0620; KASHMIRI YEH; D; KASHMIRI YEH
      0621; HAMZA; U; No_Joining_Group
      0622; ALEF WITH MADDA ABOVE; R; ALEF
      0623; ALEF WITH HAMZA ABOVE; R; ALEF
      0624; WAW WITH HAMZA ABOVE; R; WAW
    `);

    expect(result.children).toHaveLength(5);

    result.children.forEach((child) => {
      expect(child.type).toBe(NodeTypes.DATA);
    });

    expect(result.children[0]?.value).toBe("0620; KASHMIRI YEH; D; KASHMIRI YEH");
    expect(result.children[1]?.value).toBe("0621; HAMZA; U; No_Joining_Group");
  });

  it("should parse advanced data file", () => {
    const result = parseDataFileIntoAst(dedent`
      # ArabicShaping-4.1.0.txt
      # Date: 2005-03-17, 15:21:00 PST [KW]
      #
      # #############################################################

      # Unicode; Schematic Name; Joining Type; Joining Group

      # Arabic characters

      0602; ARABIC FOOTNOTE MARKER; U; No_Joining_Group
      06FC; GHAIN WITH DOT BELOW; D; AIN
      06FF; HEH WITH INVERTED V; D; KNOTTED HEH

      # Syriac characters

      0710; ALAPH; R; ALAPH
      0712; BETH; D; BETH
    `);

    expect(result.children).toHaveLength(17);

    const types = result.children.map((c) => c.type);
    expect(types).toEqual([
      NodeTypes.COMMENT,
      NodeTypes.COMMENT,
      NodeTypes.EMPTY_COMMENT,
      NodeTypes.BOUNDARY,
      NodeTypes.EMPTY,
      NodeTypes.COMMENT,
      NodeTypes.EMPTY,
      NodeTypes.COMMENT,
      NodeTypes.EMPTY,
      NodeTypes.DATA,
      NodeTypes.DATA,
      NodeTypes.DATA,
      NodeTypes.EMPTY,
      NodeTypes.COMMENT,
      NodeTypes.EMPTY,
      NodeTypes.DATA,
      NodeTypes.DATA,
    ]);
  });
});
