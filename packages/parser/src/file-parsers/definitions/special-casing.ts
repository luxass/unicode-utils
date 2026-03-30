import type { FileParser } from "../types";

export const SPECIAL_CASING_PARSER: FileParser = {
  fileName: "SpecialCasing",
  separator: ";",
  trimFields: true,
  stripInlineComments: true,
  fields: [
    { name: "codepoint", type: "codepoint" },
    { name: "lowercase", type: "codepoint", isMultiValue: true, delimiter: " " },
    { name: "titlecase", type: "codepoint", isMultiValue: true, delimiter: " " },
    { name: "uppercase", type: "codepoint", isMultiValue: true, delimiter: " " },
    { name: "condition_list", type: "string-trimmed", optional: true },
  ],
};
