import type { FileParser } from "../types";

export const BIDI_BRACKETS_PARSER: FileParser = {
  fileName: "BidiBrackets",
  separator: ";",
  trimFields: true,
  stripInlineComments: true,
  fields: [
    { name: "codepoint", type: "codepoint" },
    { name: "paired_bracket", type: "codepoint" },
    { name: "bracket_type", type: "enum", enumValues: ["o", "c", "n"] },
  ],
};
